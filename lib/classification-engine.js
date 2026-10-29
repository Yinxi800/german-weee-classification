(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.WEEE_ENGINE = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const VALID = new Set(['yes', 'no']);
  const KINDS = new Set(['thermal', 'screen', 'gas', 'lamp', 'large', 'largePV', 'small', 'smallPV', 'ict']);
  const LARGE = new Set(['large', 'largePV']);
  const SCOPE = new Set(['refrigerant', 'finishedCable', 'noRefrigerant', 'cabinetElectric', 'integratedInverter', 'pvArea', 'fixedElectrical', 'plainPeltier']);
  const RULES = Object.freeze({
    scope: 'scope.required_conditions',
    missing: 'facts.required_answers',
    fixedSmall: 'exception.wearable_watch_small',
    thermal: 'priority.temperature_exchange',
    screen: 'priority.display',
    direct: 'evidence.direct_entry',
    size: 'category.external_dimension_50cm',
    pv: 'category.photovoltaic',
    ict: 'category.small_information_communication',
    ordinary: 'category.other_electrical_equipment',
    variants: 'evidence.candidate_conditions',
    ambiguous: 'review.unresolved_candidates'
  });

  function factsFor(product, answers) {
    const facts = {};
    for (const [key, item] of Object.entries(product.defaults || {})) {
      if (!item || typeof item !== 'object') continue;
      facts[key] = { value: item.value, basis: item.basis || 'assumption', sourceIds: [...(item.sourceIds || [])] };
    }
    for (const [key, value] of Object.entries(answers || {})) {
      facts[key] = { value, basis: 'user', sourceIds: [] };
    }
    return facts;
  }

  function valuesFor(facts) {
    return Object.fromEntries(Object.entries(facts).map(([key, item]) => [key, item.value]));
  }

  function exampleConditions(decision) {
    if (decision.mode !== 'direct') return [];
    return Object.entries(decision.conditions || {}).filter(([key]) => !decision.fixedSmall || key !== 'size');
  }

  function activeQuestions(product, values) {
    const decision = product.decision || {};
    let keys;
    if (decision.mode === 'review') return [];
    if (decision.mode !== 'recipe') keys = [...(decision.required || [])];
    else {
      switch (decision.recipe) {
        case 'thermal': keys = [...(decision.required || [])]; break;
        case 'fridge': keys = values.cooling === 'no' ? ['cooling', 'size'] : ['cooling']; break;
        case 'peltier':
          keys = ['peltier', 'size'];
          if (values.peltier === 'yes' && (values.size === 'yes' || values.household === 'no')) keys.push('plainPeltier');
          break;
        case 'mattress':
          keys = product.defaults && product.defaults.builtInPump && product.defaults.builtInPump.value === 'yes' && values.builtInPump === 'yes' ? ['size'] : ['builtInPump', 'size'];
          if (values.builtInPump === 'no') keys = ['builtInPump'];
          break;
        default: keys = ['size'];
      }
      keys = [...new Set([...(decision.required || []), ...keys])];
    }
    if (decision.mode === 'direct') for (const [key, expected] of exampleConditions(decision)) if (values[key] !== expected) keys.push(key);
    if (keys.includes('thermal') && values.thermal === 'yes') keys = keys.filter(key => !['displayArea', 'size', 'ict', 'gas'].includes(key));
    if (decision.fixedSmall) keys = keys.filter(key => key !== 'size' && key !== 'ict');
    if (keys.includes('displayArea') && values.displayArea !== 'no') keys = keys.filter(key => key !== 'size' && key !== 'ict');
    if (values.size !== 'no') keys = keys.filter(key => key !== 'ict');
    if (values.household === 'no') keys = keys.filter(key => key !== 'gas');
    if (values.size !== 'yes' && values.household !== 'no') keys = keys.filter(key => key !== 'plainPeltier');
    if (decision.recipe === 'peltier' && values.peltier !== 'yes') keys = keys.filter(key => key !== 'plainPeltier');
    keys = [...new Set(keys)];
    // A failed applicability condition ends this route before unrelated specifications.
    const failed = keys.findIndex(key => (SCOPE.has(key) || (decision.recipe === 'mattress' && key === 'builtInPump')) && values[key] === 'no');
    return failed < 0 ? keys : keys.slice(0, failed + 1);
  }

  function questions(product, answers) {
    return activeQuestions(product, valuesFor(factsFor(product, answers)));
  }

  function participatingFacts(product, facts, keys) {
    const decision = product.decision || {};
    const values = valuesFor(facts);
    const irrelevant = new Set();
    if (keys.includes('thermal') && values.thermal === 'yes') for (const key of ['displayArea', 'size', 'ict', 'gas', 'plainPeltier']) irrelevant.add(key);
    else if (keys.includes('displayArea') && values.displayArea === 'yes') for (const key of ['size', 'ict', 'gas', 'plainPeltier']) irrelevant.add(key);
    if (decision.fixedSmall) { irrelevant.add('size'); irrelevant.add('ict'); }
    if (values.household === 'no') irrelevant.add('gas');
    if (decision.recipe === 'fridge' && values.cooling === 'yes') irrelevant.add('size');
    if (!keys.includes('plainPeltier')) irrelevant.add('plainPeltier');
    if (!keys.includes('ict') && facts.ict && facts.ict.basis === 'user') irrelevant.add('ict');
    const conditionKeys = new Set(exampleConditions(decision).map(([key]) => key));
    return Object.fromEntries(Object.entries(facts).filter(([key, item]) => !irrelevant.has(key) && (item.basis !== 'user' || key === 'household' || keys.includes(key) || conditionKeys.has(key))));
  }

  function assess(product, answers) {
    const facts = factsFor(product, answers);
    const values = valuesFor(facts);
    const decision = product.decision || {};
    const keys = activeQuestions(product, values);
    const result = { status: 'review', missing: [], questions: keys, ruleIds: [], facts: participatingFacts(product, facts, keys) };
    const finish = (status, rule, kind, reasonCode) => {
      result.status = status;
      if (rule) result.ruleIds.push(rule);
      if (kind) result.kind = kind;
      if (reasonCode) result.reasonCode = reasonCode;
      return result;
    };
    if (decision.mode === 'review') return finish('review', RULES.ambiguous, null, product.reviewReason || 'unsupported_product_conditions');
    const mismatch = exampleConditions(decision).find(([key, expected]) => VALID.has(values[key]) && values[key] !== expected);
    if (mismatch) return finish('review', RULES.direct, null, 'example_conditions_not_met');
    const failed = keys.find(key => (SCOPE.has(key) || (decision.recipe === 'mattress' && key === 'builtInPump')) && values[key] === 'no');
    if (failed) return finish('review', RULES.scope, null, 'condition_not_met:' + failed);
    result.missing = keys.filter(key => !VALID.has(values[key]));
    if (result.missing.length) return finish('needs_answers', RULES.missing, null, 'missing_facts');
    if (decision.fixedSmall) return finish('ready', RULES.fixedSmall, 'small');
    if (decision.mode === 'direct') return KINDS.has(decision.directKind)
      ? finish('ready', RULES.direct, decision.directKind)
      : finish('review', RULES.ambiguous, null, 'invalid_direct_kind');
    if (decision.mode === 'recipe') {
      const large = values.size === 'yes';
      if (decision.recipe === 'thermal' || (decision.recipe === 'fridge' && values.cooling === 'yes')) return finish('ready', RULES.thermal, 'thermal');
      if (!['ordinary', 'ict', 'pv', 'fridge', 'peltier', 'mattress'].includes(decision.recipe)) return finish('review', RULES.ambiguous, null, 'unknown_recipe');
      result.ruleIds.push(RULES.size);
      if (decision.recipe === 'pv') return finish('ready', RULES.pv, large ? 'largePV' : 'smallPV');
      if (decision.recipe === 'ict' && !large) return finish('ready', RULES.ict, 'ict');
      return finish('ready', RULES.ordinary, large ? 'large' : 'small');
    }
    if (decision.mode !== 'variants') return finish('review', RULES.ambiguous, null, 'unknown_decision_mode');
    let variants = (decision.variants || []).filter(item => KINDS.has(item.kind));
    if (VALID.has(values.household)) variants = variants.filter(item => item.household === values.household);
    // Priority categories must not be removed by a stale lower-priority dimension.
    if (keys.includes('thermal') && values.thermal === 'yes') {
      variants = variants.filter(item => item.kind === 'thermal');
      result.ruleIds.push(RULES.thermal);
    } else if (keys.includes('displayArea') && values.displayArea === 'yes') {
      variants = variants.filter(item => item.kind === 'screen');
      result.ruleIds.push(RULES.screen);
    } else {
      if (keys.includes('thermal') && values.thermal === 'no') variants = variants.filter(item => item.kind !== 'thermal');
      if (keys.includes('displayArea') && values.displayArea === 'no') variants = variants.filter(item => item.kind !== 'screen');
      if (keys.includes('size') && VALID.has(values.size)) {
        variants = variants.filter(item => values.size === 'yes' ? LARGE.has(item.kind) : !LARGE.has(item.kind));
        result.ruleIds.push(RULES.size);
      }
      if (keys.includes('ict') && VALID.has(values.ict)) {
        variants = variants.filter(item => values.ict === 'yes' ? item.kind === 'ict' : item.kind === 'small');
        result.ruleIds.push(RULES.ict);
      }
      if (keys.includes('gas') && VALID.has(values.gas)) variants = variants.filter(item => values.gas === 'yes' ? item.kind === 'gas' : item.kind === 'lamp');
    }
    const kinds = [...new Set(variants.map(item => item.kind))];
    return kinds.length === 1
      ? finish('ready', RULES.variants, kinds[0])
      : finish('review', RULES.ambiguous, null, kinds.length ? 'ambiguous_candidates' : 'no_candidate_for_conditions');
  }

  function transition(product, answers, key, value) {
    const next = { ...(answers || {}), [key]: value };
    const dependencies = {
      cooling: ['size', 'plainPeltier', 'ict'],
      peltier: ['size', 'plainPeltier', 'ict'],
      displayArea: ['size', 'plainPeltier', 'ict'],
      size: ['plainPeltier', 'ict'],
      household: ['plainPeltier', 'gas']
    };
    if (!answers || answers[key] !== value) for (const dependent of dependencies[key] || []) delete next[dependent];
    return next;
  }

  function guideQuestions(values) {
    const answers = values || {};
    if (answers.electric === 'no') return ['electric'];
    if (answers.scope === 'yes') return ['electric', 'scope'];
    const keys = ['electric', 'scope', 'household', 'function'];
    if (answers.function === 'light' && answers.household !== 'no') keys.push('gas');
    if (answers.function === 'other') keys.push('size', 'subtype');
    return keys;
  }

  function assessGuide(answers) {
    const values = answers || {};
    const keys = guideQuestions(values);
    const facts = Object.fromEntries(keys.filter(key => Object.prototype.hasOwnProperty.call(values, key)).map(key => [key, { value: values[key], basis: 'user', sourceIds: [] }]));
    const allowed = { function: new Set(['thermal', 'screen', 'light', 'other']), subtype: new Set(['pv', 'ict', 'other']) };
    const missing = keys.filter(key => !(allowed[key] || VALID).has(values[key]));
    const result = { status: 'review', missing, questions: keys, ruleIds: [], facts };
    if (values.electric === 'no') { result.ruleIds = [RULES.scope]; result.reasonCode = 'not_electrical'; return result; }
    if (missing.length) { result.status = 'needs_answers'; result.ruleIds = [RULES.missing]; result.reasonCode = 'missing_facts'; return result; }
    if (values.scope === 'yes') { result.ruleIds = [RULES.scope]; result.reasonCode = 'special_scope'; return result; }
    result.status = 'ready';
    result.ruleIds = [RULES.scope];
    if (values.function === 'thermal') { result.kind = 'thermal'; result.ruleIds.push(RULES.thermal); }
    else if (values.function === 'screen') { result.kind = 'screen'; result.ruleIds.push(RULES.screen); }
    else if (values.function === 'light') { result.kind = values.household === 'yes' && values.gas === 'yes' ? 'gas' : 'lamp'; result.ruleIds.push('category.independent_light_source'); }
    else {
      const large = values.size === 'yes';
      result.ruleIds.push(RULES.size);
      if (values.subtype === 'pv') { result.kind = large ? 'largePV' : 'smallPV'; result.ruleIds.push(RULES.pv); }
      else if (large) { result.kind = 'large'; result.ruleIds.push(RULES.ordinary); }
      else if (values.subtype === 'ict') { result.kind = 'ict'; result.ruleIds.push(RULES.ict); }
      else { result.kind = 'small'; result.ruleIds.push(RULES.ordinary); }
    }
    return result;
  }

  function transitionGuide(answers, key, value) {
    const next = { ...(answers || {}), [key]: value };
    if (!answers || answers[key] !== value) {
      if (key === 'function') for (const field of ['gas', 'size', 'subtype']) delete next[field];
      if (key === 'household') delete next.gas;
    }
    const active = new Set(guideQuestions(next));
    return Object.fromEntries(Object.entries(next).filter(([field]) => active.has(field)));
  }

  const EAR = 'https://www.stiftung-ear.de/service/geraetezuordnung/';
  const LAW = 'https://www.gesetze-im-internet.de/elektrog_2015/__2.html';
  const ruleCatalog = Object.freeze([
    { id: RULES.scope, title: '电气功能与适用范围条件', sourceUrl: LAW },
    { id: RULES.missing, title: '补充判定所需事实', sourceUrl: EAR },
    { id: RULES.fixedSmall, title: '普通可穿戴腕表的小型设备规则', sourceUrl: EAR },
    { id: RULES.thermal, title: '温度交换设备优先分类', sourceUrl: EAR },
    { id: RULES.screen, title: '屏幕与显示设备优先分类', sourceUrl: EAR },
    { id: RULES.direct, title: '官方产品条目及其适用条件', sourceUrl: EAR },
    { id: RULES.size, title: '外部尺寸大于50厘米的分类分支', sourceUrl: LAW },
    { id: RULES.pv, title: '独立光伏组件分类', sourceUrl: EAR },
    { id: RULES.ict, title: '小型信息与通信设备用途分类', sourceUrl: EAR },
    { id: RULES.ordinary, title: '其他电气设备的大小型分类', sourceUrl: EAR },
    { id: RULES.variants, title: '官方候选与已确认条件匹配', sourceUrl: EAR },
    { id: RULES.ambiguous, title: '不完整或存在歧义的条件须复核', sourceUrl: EAR },
    { id: 'category.independent_light_source', title: '独立光源及气体放电灯分类', sourceUrl: EAR }
  ].map(rule => Object.freeze(rule)));
  const ruleDefinitions = Object.freeze(Object.fromEntries(ruleCatalog.map(rule => [rule.id, rule])));
  return Object.freeze({ assess, questions, transition, guideQuestions, assessGuide, transitionGuide, rules: RULES, RULES: ruleDefinitions, ruleCatalog });
});
