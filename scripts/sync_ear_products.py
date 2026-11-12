#!/usr/bin/env python3
"""Sync the public EAR device-search catalogue into data/ear-product-catalog.js.

Usage:
    python3 scripts/sync_ear_products.py            # fetch + rewrite the EAR catalogue
    python3 scripts/sync_ear_products.py --quick    # single-query smoke test, writes nothing
    python3 scripts/sync_ear_products.py --offline  # report on the existing catalogue

The output uses the project's original window.EAR_PRODUCT_CATALOG shape, the
same source that products.js / names.js / evidence.js are curated from. Chinese
translations live separately in data/ear-catalog-zh.js and are never overwritten.

The EAR search form is parsed at runtime: cHash and the TYPO3 trusted-property
token are never hardcoded. HTTP is delegated to curl (the Python urllib TLS
path stalls on this host). Requests are serial with a short delay.
"""
import html as html_lib
import json
import re
import subprocess
import sys
import time
import unicodedata
import urllib.parse
from datetime import datetime, timezone
from pathlib import Path

BASE = 'https://www.stiftung-ear.de/service/geraetezuordnung/'
ROOT = Path(__file__).resolve().parent.parent
CATALOG = ROOT / 'data' / 'ear-product-catalog.js'
COOKIE = '/tmp/ear-sync-cookies.txt'
QUERIES = list('abcdefghijklmnopqrstuvwxyz') + ['ä', 'ö', 'ü']
LIMIT = 2000
MAX_PAGES = 12
DELAY = 0.4
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'


def clean(value):
    return re.sub(r'\s+', ' ', html_lib.unescape(re.sub(r'<[^>]+>', ' ', value))).strip()


def attrs(tag):
    return {m.group(1).lower(): html_lib.unescape(m.group(2) or '')
            for m in re.finditer(r'([\w:-]+)\s*=\s*"([^"]*)"', tag)}


def key(value):
    return unicodedata.normalize('NFKC', value or '').strip().lower()


def run_curl(args, timeout):
    result = subprocess.run(
        ['curl', '-sS', '--compressed', '--max-time', '180', '-b', COOKIE, '-c', COOKIE, '-A', UA] + args,
        capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=timeout + 20)
    if result.returncode:
        raise RuntimeError('curl failed: ' + (result.stderr or '')[:200])
    return result.stdout


def fetch_form():
    body = run_curl([BASE], 100)
    for fattrs, inner in re.findall(r'<form\b([^>]*)>(.*?)</form>', body, re.S | re.I):
        form = attrs(fattrs)
        if 'earsearch' not in (form.get('action') or '').lower():
            continue
        fields, search_key = [], None
        for tag in re.findall(r'<input\b[^>]*>', inner, re.I):
            p = attrs(tag)
            if not p.get('name'):
                continue
            if p.get('type') == 'hidden':
                fields.append((p['name'], p.get('value', '')))
            elif p.get('type') == 'text' and search_key is None:
                search_key = p['name']
        page_key = next((k for k, _ in fields if k.endswith('[page]')), None)
        limit_key = next((k for k, _ in fields if k.endswith('[limit]')), None)
        if not fields or not (search_key and page_key and limit_key):
            raise ValueError('Incomplete EAR search form: hidden fields / search / page / limit')
        action = urllib.parse.urljoin(BASE, form['action'])
        return action, dict(fields), search_key, page_key, limit_key
    raise ValueError('EAR search form not found on ' + BASE)


def search(form, term, page):
    action, fields, search_key, page_key, limit_key = form
    data = dict(fields)
    data[search_key] = term
    data[page_key] = str(page)
    data[limit_key] = str(LIMIT)
    args = ['-X', 'POST']
    for name, value in data.items():
        args += ['--data-urlencode', f'{name}={value}']
    args.append(action)
    return run_curl(args, 100)


def parse_rows(page_html):
    rows = re.split(r'<div class="ear-search-result-row">', page_html)[1:]
    out = []
    for row in rows:
        t = re.search(r'<p class="ear-search-result-title">(.*?)</p>', row, re.S)
        if not t:
            continue
        sub = re.search(r'<span class="ear-search-result-subtitle">(.*?)</span>', t.group(1), re.S)
        en = clean(sub.group(1)) if sub else ''
        de = clean(re.sub(r'<span class="ear-search-result-subtitle">.*?</span>', '', t.group(1), flags=re.S))
        # text-medium wraps a nested text-bold span; stop at the outer </span></div>.
        candidates = [clean(x) for x in re.findall(
            r'<span class="text-medium">(.*?)</span>\s*</div>', row, re.S)]
        remarks = [clean(x) for x in re.findall(r'<li class="ear-search-list-li">(.*?)</li>', row, re.S)]
        out.append({
            'de': de,
            'en': en,
            'candidates': [x for x in dict.fromkeys(candidates) if x],
            'remarks': [x for x in dict.fromkeys(remarks) if x],
        })
    return out


def crawl(form, queries):
    entries, page_log, warnings, raw_count = {}, [], [], 0
    for term in queries:
        term_new = 0
        for page in range(1, MAX_PAGES + 1):
            try:
                rows = parse_rows(search(form, term, page))
            except Exception as error:
                warnings.append(f'[{term}] page {page} request/parse failed: {error}')
                break
            raw_count += len(rows)
            if not rows:
                break
            empty_de = sum(1 for r in rows if not r['de'])
            no_candidate = sum(1 for r in rows if not r['candidates'])
            if empty_de or no_candidate:
                warnings.append(f'[{term}] page {page}: {empty_de} rows missing name, {no_candidate} rows missing category')
            for r in rows:
                k = key(r['de']) or key(r['en'])
                if not k:
                    continue
                if k not in entries:
                    entries[k] = {**r, 'queries': [term]}
                    term_new += 1
                else:
                    item = entries[k]
                    item['candidates'] = list(dict.fromkeys(item['candidates'] + r['candidates']))
                    item['remarks'] = list(dict.fromkeys(item['remarks'] + r['remarks']))
                    if term not in item['queries']:
                        item['queries'].append(term)
                    if not item['en'] and r['en']:
                        item['en'] = r['en']
            page_log.append({'query': term, 'page': page, 'rows': len(rows), 'new': term_new})
            if len(rows) < LIMIT:
                break
            time.sleep(DELAY)
        print(f'  [{term}] pages={sum(1 for x in page_log if x["query"] == term)} '
              f'new={term_new} total_unique={len(entries)}', flush=True)
        time.sleep(DELAY)
    complete = not warnings and all(
        sum(1 for x in page_log if x['query'] == t) < MAX_PAGES for t in queries)
    return list(entries.values()), page_log, warnings, raw_count, complete


def main():
    if '--offline' in sys.argv:
        text = CATALOG.read_text(encoding='utf-8')
        catalog = json.loads(text[text.index('=') + 1:].strip().rstrip(';'))
        print('offline catalogue:', len(catalog['entries']), 'entries, checked', catalog['checked'],
              '| complete', catalog['complete'], '| queries', len(catalog['queries']))
        return
    quick = '--quick' in sys.argv
    queries = ['a'] if quick else QUERIES
    form = fetch_form()
    print('form parsed:', form[0][:110] + '...', flush=True)
    entries, page_log, warnings, raw_count, complete = crawl(form, queries)
    print(f'quick result: {len(entries)} entries, {raw_count} raw rows, warnings {len(warnings)}', flush=True)
    for e in entries[:3]:
        print('  sample:', e['de'], '/', e['en'], '->', e['candidates'][:2], flush=True)
    if quick:
        return
    catalog = {
        'source': 'EAR 官网产品搜索结果（a–z 及变音字母遍历，全量采集）',
        'sourceUrl': BASE,
        'checked': datetime.now(timezone.utc).date().isoformat(),
        'queries': queries,
        'complete': complete,
        'entries': [
            {'name': e['de'], 'english': e['en'], 'candidates': e['candidates'],
             'remarks': e['remarks'], 'queries': e['queries']}
            for e in entries
        ],
    }
    CATALOG.parent.mkdir(parents=True, exist_ok=True)
    CATALOG.write_text('window.EAR_PRODUCT_CATALOG = ' +
                       json.dumps(catalog, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    print('\n=== 抓取校验 ===')
    print(f'查询词        : {len(queries)}')
    print(f'请求页数      : {len(page_log)}')
    print(f'原始结果行    : {raw_count}')
    print(f'去重后条目    : {len(entries)}')
    print(f'字段缺失告警  : {len([w for w in warnings if "missing" in w])}')
    print(f'异常告警      : {len(warnings)}')
    print(f'采集完整      : {complete}')
    print('抽样 3 条     :')
    for e in [entries[0], entries[len(entries) // 2], entries[-1]]:
        print(f"  {e['de']} / {e['en']} -> {e['candidates'][:2]}")
    if warnings:
        print('告警明细:', *warnings[:10], sep='\n  ')


if __name__ == '__main__':
    main()
