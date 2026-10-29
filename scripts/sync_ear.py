#!/usr/bin/env python3
"""Fetch EAR's public SOAP device-type directory as a static browser asset."""
import json
import os
import sys
import tempfile
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email import policy
from email.parser import BytesParser
from pathlib import Path

URL = 'https://soap.ear-system.de/ear-soap/v2/VerzeichnisService'
NS = {'s': 'http://schemas.xmlsoap.org/soap/envelope/', 'e': 'http://www.ear-system.de/ear-soap/v2'}
BODY = b'''<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ear="http://www.ear-system.de/ear-soap/v2"><soapenv:Header/><soapenv:Body><ear:getAlleGeraetearten/></soapenv:Body></soapenv:Envelope>'''
OUTPUT = Path(__file__).resolve().parent.parent / 'data' / 'ear-directory.js'


def extract(content_type, data):
    if content_type.lower().startswith('multipart/'):
        message = BytesParser(policy=policy.default).parsebytes(('Content-Type: '+content_type+'\r\nMIME-Version: 1.0\r\n\r\n').encode() + data)
        parts = [part for part in message.iter_parts() if part.get_content_type() in ('application/xop+xml', 'text/xml', 'application/soap+xml')]
        if len(parts) != 1:
            raise ValueError('Cannot identify the unique SOAP XML part')
        data = parts[0].get_payload(decode=True)
    root = ET.fromstring(data)
    fault = root.find('.//s:Fault', NS)
    if fault is not None:
        raise ValueError('EAR SOAP returned a fault: ' + (fault.findtext('faultstring') or 'unknown'))
    response = root.find('.//e:getAlleGeraeteartenResponse', NS)
    if response is None:
        raise ValueError('Missing getAlleGeraeteartenResponse')
    entries = []
    for item in response.findall('e:geraeteart', NS):
        number, name = item.findtext('e:nummer', namespaces=NS), item.findtext('e:name', namespaces=NS)
        category = item.findtext('e:kategorie/e:nummer', namespaces=NS)
        if not number or not number.isdigit() or not name or not category or not category.isdigit():
            raise ValueError('Incomplete device type entry')
        entries.append({'number': int(number), 'name': name, 'categoryNumber': int(category), 'categoryName': item.findtext('e:kategorie/e:name', namespaces=NS)})
    if not entries or len({entry['number'] for entry in entries}) != len(entries):
        raise ValueError('Empty or duplicate device types')
    return entries


def main():
    request = urllib.request.Request(URL, data=BODY, headers={'Content-Type':'text/xml; charset=utf-8','SOAPAction':'""'}, method='POST')
    with urllib.request.urlopen(request, timeout=30) as response:
        content_type = response.headers.get('Content-Type', '')
        data = response.read(2_000_001)
    if len(data) > 2_000_000:
        raise ValueError('SOAP response too large')
    entries = extract(content_type, data)
    payload = {'source':'EAR production SOAP VerzeichnisService.getAlleGeraetearten', 'sourceUrl':URL, 'fetchedAt':datetime.now(timezone.utc).isoformat(timespec='seconds'), 'entries':entries}
    encoded = json.dumps(payload, ensure_ascii=False, indent=2).replace('<', '\\u003c').replace('>', '\\u003e').replace('&', '\\u0026').replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    temp = None
    try:
        with tempfile.NamedTemporaryFile('w', encoding='utf-8', dir=OUTPUT.parent, delete=False) as file:
            temp = file.name
            file.write('window.EAR_DIRECTORY = ' + encoded + ';\n')
        os.replace(temp, OUTPUT)
    finally:
        if temp and os.path.exists(temp): os.unlink(temp)
    print(f'EAR production directory synced: {len(entries)} types at {payload["fetchedAt"]}')

if __name__ == '__main__':
    try: main()
    except Exception as error:
        print(f'EAR sync failed; existing data preserved: {error}', file=sys.stderr)
        sys.exit(1)
