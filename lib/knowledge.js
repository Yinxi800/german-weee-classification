(function(root,factory){'use strict';const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.WEEE_KNOWLEDGE=api;})(typeof window!=='undefined'?window:globalThis,function(){
 'use strict';
 const normalize=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/[\s\u200b-\u200d\ufeff]/g,'');
 const clone=value=>JSON.parse(JSON.stringify(value));
 const freeze=value=>{if(value&&typeof value==='object'){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
 function create(input){
  if([input.products,input.names,input.evidence].some(part=>part.schemaVersion!==1))throw Error('Unsupported knowledge schema');
  const questionKeys=input.questions?new Set(Object.keys(input.questions.common)):null;
  const modes=new Set(['direct','variants','recipe','review']);
  const products=new Map(),evidence=new Map(),index=new Map();
  for(const item of input.evidence.records){if(evidence.has(item.id))throw Error('Duplicate evidence ID: '+item.id);evidence.set(item.id,freeze(clone(item)));}
  for(const item of input.products.records){if(!modes.has(item.decision?.mode))throw Error('Unsupported decision mode');if(questionKeys)for(const key of item.decision.required||[])if(!questionKeys.has(key))throw Error('Unknown decision question: '+key);for(const fact of [...Object.values(item.defaults||{}),...Object.values(item.facts||{})])for(const id of fact.sourceIds||[])if(!evidence.has(id))throw Error('Missing fact evidence: '+id);if(products.has(item.id))throw Error('Duplicate product ID: '+item.id);for(const id of item.evidenceIds)if(!evidence.has(id))throw Error('Missing product evidence: '+id);products.set(item.id,freeze(clone(item)));}
  const names=input.names.records.filter(item=>['official','curated'].includes(item.status));
  for(const item of names){if(!products.has(item.productId))throw Error('Unknown alias product: '+item.productId);for(const id of item.sourceIds)if(!evidence.has(id))throw Error('Missing alias evidence: '+id);const key=normalize(item.text);if(!index.has(key))index.set(key,[]);index.get(key).push(freeze(clone(item)));}
  const groups=new Map(Object.entries(input.names.groups).map(([key,rows])=>{for(const r of rows)if(!products.has(r.productId))throw Error('Unknown group product');return [normalize(key),freeze(clone(rows))];}));
  const retired=new Map(Object.entries(input.names.retired).map(([key,value])=>[normalize(key),value]));
  for(const item of products.values())if(item.resolution)for(const id of Object.values(item.resolution.choices))if(!products.has(id))throw Error('Unknown resolved product: '+id);
  for(const alias of names)for(const fact of Object.values(alias.facts||{}))for(const id of fact.sourceIds||[])if(!evidence.has(id))throw Error('Missing name fact evidence: '+id);
  function instantiate(id,alias){const base=products.get(id);if(!base)throw Error('Unknown product: '+id);const result=clone(base);if(alias?.facts)result.defaults={...result.defaults,...clone(alias.facts)};return result;}
  function lookup(query){const key=normalize(query);if(retired.has(key))return{status:'retired',message:retired.get(key),candidates:[]};if(groups.has(key))return{status:'ambiguous',candidates:groups.get(key).map(row=>({...row,product:instantiate(row.productId)}))};const rows=index.get(key)||[],ids=[...new Set(rows.map(row=>row.productId))];if(ids.length===1){const alias=rows.find(row=>row.facts)||rows[0];return{status:'exact',product:instantiate(ids[0],alias),matchedName:alias};}if(ids.length>1)return{status:'ambiguous',candidates:ids.map(id=>({label:products.get(id).name,productId:id,product:instantiate(id)}))};return{status:'not_found',candidates:[]};}
  function suggest(query){const key=normalize(query);if(!key||retired.has(key))return[];const grams=value=>new Set(value.length<2?[value]:Array.from({length:value.length-1},(_,i)=>value.slice(i,i+2)));const q=grams(key),scores=new Map();for(const alias of names){const term=normalize(alias.text);let score=0;if(term===key)score=1;else if(term.includes(key)||key.includes(term))score=Math.min(term.length,key.length)/Math.max(term.length,key.length)*.8;else{const g=grams(term),common=[...q].filter(v=>g.has(v)).length;score=2*common/(q.size+g.size);}if(score>=.28&&score>(scores.get(alias.productId)||0))scores.set(alias.productId,score);}return [...scores].sort((a,b)=>b[1]-a[1]).slice(0,5).map(([id,score])=>({label:products.get(id).name,productId:id,score,product:instantiate(id)}));}
  return Object.freeze({version:input.products.version,lookup,suggest,instantiate,getProduct:id=>products.get(id),products:()=>[...products.values()],names:()=>[...new Set(names.map(row=>row.text))],suggestionNames:()=>[...new Set([...products.values()].map(product=>product.name).concat(names.filter(row=>row.language==='zh'&&row.suggestible!==false).map(row=>row.text)))],getEvidence:ids=>ids.map(id=>evidence.get(id)).filter(Boolean),normalize});
 }
 return Object.freeze({create,normalize});
});
