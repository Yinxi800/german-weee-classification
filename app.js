'use strict';

// Product names select an official example; only unresolved classification conditions are asked.
const profiles = [
  {id:'fixture', pattern:/台灯|落地灯|桌灯|吊灯|壁灯|灯具/i, description:'完整电动灯具，主要用于照明；不是独立灯泡、光伏组件或温度交换设备。'},
  {id:'bulb', pattern:/灯泡|灯管|光源/i, description:'单独销售的电动光源（如灯泡或灯管），不是完整灯具。'},
  {id:'screen', pattern:/显示器|电脑屏幕|电视机|电视|显示屏|monitor/i, description:'独立显示器或电视，主要用于显示图像或信息，不是温度交换设备。'},
  {id:'thermal', pattern:/冰箱|冷柜|冷冻柜|空调/i, description:'使用制冷剂等非水物质，通过内置回路制冷或加热的完整设备。'},
  {id:'ict', pattern:/路由器|手机|路由|router/i, description:'完整的信息或通信设备，主要用于信息处理或通信；不是温度交换设备、独立屏幕或独立光源。'},
  {id:'speaker', pattern:/蓝牙音箱|音箱|音响|speaker/i, description:'完整电动音箱，主要用于播放声音；不是温度交换设备、独立屏幕、独立光源、光伏组件或主要用于信息处理和通信的设备。'},
  {id:'toy', pattern:/玩具|玩偶|玩具熊|毛绒熊/i, description:'有电气功能的完整玩具；不是温度交换设备、独立屏幕、独立光源、光伏组件或主要用于信息处理和通信的设备。'},
  {id:'pv', pattern:/光伏组件|光伏板|太阳能板|太阳能电池板/i, description:'独立光伏组件，将太阳能转换为电能；不是与其他设备组成的复杂套装。'}
];
const householdQuestion={title:'该产品可以在私人家庭使用吗？',detail:'商业用途和家庭用途都可以时，请选“可以”。',yes:'可以用于私人家庭',no:'只能用于非私人家庭'};
const sizeQuestion={title:'产品有任一外部尺寸大于 50 cm 吗？',detail:'按产品本身测量；恰好 50 cm 选择“没有”。',yes:'有，大于 50 cm',no:'没有，均不大于 50 cm'};
const peltierQuestion={title:'珀尔帖设备具体是哪一种？',detail:'请选择与产品说明书一致的类型。其他用途或无法确认结构时，请改用条件引导或到 EAR 官方核对。',yes:'珀尔帖除湿机（无制冷剂和压缩机）',no:'热电／半导体冰箱'};
const coolingQuestion={title:'冰箱采用哪种制冷方式？',detail:'请查看产品说明：压缩机制冷通常使用制冷剂；热电制冷常称为半导体制冷。',yes:'压缩机制冷，含制冷剂',no:'热电／半导体制冷'};
const gasQuestion={title:'它是气体放电灯吗？',detail:'荧光灯管通常是；普通 LED 灯泡通常不是。',yes:'是气体放电灯',no:'不是气体放电灯'};
function profileFor(name){
  // Multiple products, accessories and kits cannot safely be inferred from a keyword.
  if(/配件|零件|组件包|套装|套件|替换|维修|组合|充电器|控制器|说明书|电源线|外壳|保护壳|支架|显示器灯|\+|\//i.test(name)) return null;
  const matches=profiles.filter(profile=>profile.pattern.test(name));
  return matches.length===1 ? matches[0] : null;
}
const categories = {
  thermal:['1','温度交换设备','Wärmeüberträger','Wärmeüberträger'],
  screen:['2','屏幕、显示器及相关设备','Bildschirmgeräte','Bildschirmgeräte'],
  gas:['3','灯（独立光源）','Gasentladungslampen','Lampen'],
  lamp:['3','灯（独立光源）','Lampen, außer Gasentladungslampen','Lampen'],
  large:['4','大型设备','Großgeräte','Großgeräte'],
  largePV:['4','大型设备','Große Photovoltaikmodule','Große Photovoltaikmodule'],
  small:['5','小型设备','Kleingeräte','Kleingeräte'],
  smallPV:['5','小型设备','Kleine Photovoltaikmodule','Kleine Photovoltaikmodule'],
  ict:['6','小型信息和通信技术设备','Kleine Geräte der Informations- und Telekommunikationstechnik','Kleine Geräte der Informations- und Telekommunikationstechnik']
};
const $ = id => document.getElementById(id);
let product = '', answers = {}, history = [], resultData = null, profile = null, earProduct = null, directMatch = false, catalogMatches = [], userMatches = [], sourceWarning = null;
const nameKey = value => value.normalize('NFKC').trim().toLowerCase().replace(/\s+/g,'');
function findUserExamples(name){
  const key=nameKey(name);
  return (window.USER_WEEE_EXAMPLES?.records || []).filter(item=>item.matchable && item.aliases.some(alias=>nameKey(alias)===key));
}
function getSourceWarning(name){
  const key=nameKey(name);
  if(['光伏组件','光伏板','太阳能板','太阳能电池板'].some(v=>nameKey(v)===key)) return '用户表格旁注称光伏都算 B2C，但 EAR 的现行设备类型清单也列出仅限非私人家庭使用的光伏类型；应按实际使用环境核对。';
  if(['珀尔帖冷却器','半导体冷却器'].some(v=>nameKey(v)===key)) return '用户表格将珀尔帖冷却器列在第1类；EAR 的珀尔帖除湿机及热电冰箱条目对应第4／5类。名称相近但不一定是同一产品，网页按实际选择的 EAR 条目初筛。';
  if(key===nameKey('电脑主机')) return '用户表格旁注提及电脑主机按尺寸分第4或5类；EAR 的个人电脑条目按尺寸列出第4或第6类，网页按 EAR 条目初筛。';
  return null;
}
function officialCandidateClasses(){
  if(earProduct?.directKind)return [Number(categories[earProduct.directKind][0])];
  if(earProduct?.id==='official-luminaire')return [4,5];
  if(earProduct?.id==='official-fridge')return [1,4,5];
  if(earProduct?.id==='official-compressor')return [1];
  if(earProduct?.id==='official-thermoelectric')return [4,5];
  if(earProduct?.id==='official-personal-computer')return [4,6];
  if(earProduct?.id==='official-peltier')return [4,5];
  if(catalogMatches.length){const classes=[];for(const entry of catalogMatches){const variants=catalogVariants(entry);if(!variants)return [];for(const v of variants)classes.push(Number(categories[v.kind][0]));}return [...new Set(classes)];}
  return [];
}
function findCatalog(name){
  const key=nameKey(name);
  const targets=new Set(Object.entries(window.EAR_CATALOG_ALIASES || {}).filter(([label])=>nameKey(label)===key).map(([,de])=>nameKey(de)));
  for(const [de,zh] of Object.entries(window.EAR_CATALOG_ZH?.names || {})) if(nameKey(zh)===key)targets.add(nameKey(de));
  return (window.EAR_PRODUCT_CATALOG?.entries || []).filter(entry => targets.has(nameKey(entry.name)) || nameKey(entry.name)===key || (entry.english && nameKey(entry.english)===key));
}
function catalogVariants(entry){
  const normalize = text => text.normalize('NFC').replace(/\s+/g,' ').trim();
  const variants=[];
  for(const raw of entry.candidates){
    let found=null;
    for(const [kind,ids] of Object.entries(officialIds)){
      for(const household of ['yes','no']){
        if(kind==='gas' && household==='no') continue;
        const dir=window.EAR_DIRECTORY?.entries.find(x=>x.number===ids[household==='yes'?0:1]);
        if(dir && normalize(dir.name)===normalize(raw) && dir.categoryNumber===Number(categories[kind][0])+10){found={kind,household};break;}
      }
      if(found)break;
    }
    if(!found)return null;
    variants.push(found);
  }
  return variants;
}
function generalRemarksOnly(entry){return entry.remarks.every(note => /^Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge\/äußeren Abmessung ab\.$/.test(note) || /^Ob die b2b- oder die b2c-Geräteart\s+zu wählen ist, ist abhängig vom Ort der Nutzung\.$/.test(note));}
function catalogNext(){
  if(profile.requirePump && answers.builtInPump==='no')return 'review';
  if(profile.requirePump && !answers.builtInPump)return 'builtInPump';
  let variants=profile.variants;
  if(answers.household) variants=variants.filter(v=>v.household===answers.household);
  if(answers.size) variants=variants.filter(v => answers.size==='yes' ? ['large','largePV'].includes(v.kind) : !['large','largePV'].includes(v.kind));
  if(!variants.length)return 'review';
  if(profile.requireHousehold && !answers.household)return 'household';
  if(profile.requireSize && !answers.size)return 'size';
  if(variants.length===1){answers.household=variants[0].household;return `result:${variants[0].kind}`;}
  if(!answers.household && new Set(variants.map(v=>v.household)).size>1)return 'household';
  if(!answers.size && variants.every(v=>['small','smallPV','large','largePV'].includes(v.kind)) && new Set(variants.map(v=>['large','largePV'].includes(v.kind))).size>1)return 'size';
  return 'review';
}
function findEarProduct(name){
  const normalize = value => value.normalize('NFKC').trim().toLowerCase().replace(/\s+/g,'');
  return (window.EAR_PRODUCTS || []).find(item => item.aliases.some(alias => normalize(alias)===normalize(name))) || null;
}
function questionFor(key){
  if(key==='builtInPump')return {title:'气垫是否内置电动充气泵？',detail:'这里指电泵固定在气垫内。外接独立电泵或靠材料自动膨胀的气垫，不属于该条目的同一销售形态。',yes:'是，内置电动气泵',no:'否，外接气泵或没有电泵'};
  if(key==='size' && profile?.form)return {...sizeQuestion,detail:guideFields.size.detail};
  if(key==='size' && profile?.compactMeasurement)return {...sizeQuestion,title:'折叠或卷起后，有任一外部尺寸大于 50 cm 吗？',detail:'EAR 要求柔性设备按最紧凑状态测量，请按折叠或卷起后的尺寸确认，而不是展开使用时的尺寸。'};
  if(key==='confirm') return {title:'请确认：产品符合以下描述吗？',detail:`${profile.description} 它是单独销售的完整产品，不涉及法律排除情形或复杂套装。`,yes:'符合',no:'不符合'};
  if(key==='finishedCable' && earProduct?.officialName!=='USB-Kabel')return {...nameQuestionSpecs.finishedCable,detail:'散装米线、仅带线鼻或端套的半成品不能直接沿用此条目。'};
  if(nameQuestionSpecs[key])return nameQuestionSpecs[key];
  return {household:householdQuestion,size:sizeQuestion,gas:gasQuestion,cooling:coolingQuestion,peltier:peltierQuestion,...guideQuestions}[key];
}
function nextKey(key,value){
  if(value==='unknown' || (key==='confirm' && value==='no')) return 'review';
  if(profile.id==='catalog') return catalogNext();
  if(key==='confirm') return 'household';
  if(key==='cooling'||key==='peltier') return 'household';
  if(key==='household'){
    if(profile.id==='official-personal-computer' && value==='no') return 'review';
    if(profile.id==='official-peltier' && answers.peltier==='yes' && value==='no') return 'review';
    if(profile.id==='official-personal-computer'||profile.id==='official-peltier') return 'size';
    if(profile.id==='official-compressor' || (profile.id==='official-fridge' && answers.cooling==='yes')) return 'result:thermal';
    if(profile.id==='official-luminaire' || profile.id==='official-thermoelectric' || profile.id==='official-router' || profile.id==='official-fridge') return 'size';
    if(profile.id==='thermal'||profile.id==='screen') return `result:${profile.id}`;
    if(profile.id==='bulb') return value==='yes'?'gas':'result:lamp';
    return 'size';
  }
  if(key==='gas') return value==='yes'?'result:gas':'result:lamp';
  if(key==='size'){
    if(profile.id==='official-peltier' && answers.peltier==='yes') return value==='no'?'result:small':'review';
    if(profile.id==='pv') return value==='yes'?'result:largePV':'result:smallPV';
    if(value==='yes') return 'result:large';
    return profile.id==='ict'||profile.id==='official-router'||profile.id==='official-personal-computer'?'result:ict':'result:small';
  }
}
function showSection(name){
  for(const id of ['start','question-area','product-form','guide-form','result']) $(id).hidden=id!==name;
  $('work-title').textContent={start:'查询产品','question-area':'确认关键条件','product-form':'确认产品规格','guide-form':'填写分类条件',result:'分类建议'}[name];
  document.querySelectorAll('.hero-meta span').forEach((step,index)=>{
    const current=index===({start:0,'question-area':1,'product-form':1,'guide-form':1,result:2}[name]);
    step.classList.toggle('active',current);
    if(current) step.setAttribute('aria-current','step'); else step.removeAttribute('aria-current');
  });
}
function ask(key){
  const q=questionFor(key); history.push(key);$('back').disabled=history.length<=1; $('product-label').textContent=product;
  $('recognition').hidden=!earProduct && !Object.keys(profile?.carriedAnswers||{}).length;
  $('recognition').textContent=earProduct ? `已匹配 EAR 产品条目：${earProduct.officialName}` : Object.keys(profile?.carriedAnswers||{}).length?'已保留已确认的用途或尺寸信息，接下来确认其余产品条件。':'';
  $('question-progress').textContent=`问题 ${history.length}`;
  $('question-title').textContent=q.title; $('question-detail').textContent=q.detail;
  const choices=$('choices'); choices.replaceChildren();
  for(const [value,label] of [['yes',q.yes],['no',q.no],['unknown','不确定']]){
    const button=document.createElement('button');button.type='button';button.className='choice';
    const text=document.createElement('span');text.textContent=label;button.append(text);
    button.addEventListener('click',()=>{answers[key]=value;const next=nextKey(key,value);if(next==='review') renderResult('review',key);else if(next.startsWith('result:')) renderResult(next.slice(7),key);else ask(next);});choices.append(button);
  }
  $('status').textContent='条件确认';showSection('question-area');$('question-title').focus({preventScroll:true});
}
function deviceName(kind,household){
  const category=categories[kind];return category[household==='yes'?2:3]+(household==='yes'?'，die in privaten Haushalten genutzt werden können':' für die ausschließliche Nutzung in anderen als privaten Haushalten');
}
const officialIds = {thermal:[1,60],screen:[51,61],gas:[16,62],lamp:[32,62],large:[54,63],largePV:[30,64],small:[56,65],smallPV:[57,66],ict:[58,67]};
function matchOfficial(kind, household){
  const directory=window.EAR_DIRECTORY;
  if(!directory || !Array.isArray(directory.entries)) return null;
  const id=officialIds[kind][household==='yes'?0:1];
  const item=directory.entries.find(entry=>entry.number===id);
  const expected=deviceName(kind,household).replace('，',', ');
  const norm=value=>value.normalize('NFC').replace(/\s+/g,' ').trim();
  if(!item || norm(item.name)!==norm(expected) || item.categoryNumber!==Number(categories[kind][0])+10) return null;
  return {number:item.number,name:item.name,fetchedAt:directory.fetchedAt,source:directory.source};
}
const deviceLabels = {thermal:'温度交换设备',screen:'屏幕设备',gas:'气体放电灯',lamp:'灯（非气体放电灯）',large:'大型设备',largePV:'大型光伏组件',small:'小型设备',smallPV:'小型光伏组件',ict:'小型信息和通信技术设备'};
function renderResult(kind,lastKey){
  const isReview=kind==='review';const info=categories[kind];const official=isReview?null:matchOfficial(kind,answers.household);
  const officialProductName=profile?.id==='official-peltier' && answers.peltier ? (answers.peltier==='yes'?'Peltier-Entfeuchter':'Kühlschrank (thermoelektrisch)') : earProduct?.officialName;
  let reason=isReview ? (lastKey==='sourceConflict'?'用户资料与 EAR 候选类别不一致，请核对产品及来源。':lastKey==='userEvidence'?'该产品还需要确认具体功能和规格，可切换条件引导继续判断。':lastKey==='catalogReview'?'官方条目包含多个结果或特殊备注，需核对具体产品后再确定分类。':(profile?.id==='official-personal-computer'||profile?.id==='official-peltier')&&answers[lastKey]!=='unknown'&&lastKey!=='confirm'?'当前产品条件超出已核对的官方示例，请进一步核实。':lastKey==='unrecognized'?'暂未找到可直接对应的产品，请尝试更具体的名称，或切换条件引导分类。':answers[lastKey]==='unknown'?'关键条件尚未确认，请补充产品资料后核对。':'产品与识别描述不符，请修改名称或到 EAR 官方核对。') : directMatch ? `直接匹配 EAR 产品条目。适用条件：${earProduct.assumptions.join('；')}。如产品不符，请重新核对。` : earProduct ? '根据匹配的 EAR 产品条目和已确认的关键条件得出初筛建议。' : '依据 EAR 设备分类规则及你确认的条件给出分类建议。';
  if(isReview && profile?.id==='guide')reason=lastKey==='electric' && answers.electric==='no'?'产品未确认具有电气或电子功能，请核实是否属于 ElektroG 适用范围。':lastKey==='scope' && answers.scope==='yes'?'该产品涉及特殊适用范围，建议结合技术资料进一步核实。':'部分关键条件尚未确认，请补充产品资料后继续判断。';
  if(isReview && profile?.id==='catalog' && profile.requirePump){
    if(answers.builtInPump==='no')reason='该 EAR 条目只对应内置电动气泵的气垫。当前销售形态不符合该条件，可继续通过功能和规格判断。';
    else if(answers[lastKey]==='unknown')reason=`还没有确认：${questionFor(lastKey).title} 请补充这项信息后继续。`;
    else if(answers.size==='yes')reason='你确认的折叠尺寸大于 50 cm，超出了当前条目的小型设备候选范围。可继续按通用条件判断大型设备类别。';
    else if(answers.household==='no')reason='当前条目提供的是可家用设备候选；你确认仅限非家用，请继续按通用条件判断。';
  }else if(isReview && answers[lastKey]==='unknown')reason=`还没有确认：${questionFor(lastKey).title} 请补充这项信息后继续。`;
  if(!isReview && profile?.smartForm)reason='依据已匹配的 EAR 条目、自动采用的适用条件及已填写的关键规格生成建议。';
  if(isReview && profile?.smartForm && ['refrigerant','finishedCable','noRefrigerant'].includes(lastKey))reason='当前产品不符合该 EAR 条目的关键适用条件，请改用条件引导或查询更具体的产品。';
  const publicDirectory=official ? {name:official.name,fetchedAt:official.fetchedAt,source:official.source} : null;
  resultData={product:activeMode==='guide'?null:product, status:isReview?'需要人工复核':'初步分类建议',category:isReview?null:{number:info[0],name:info[1]},deviceType:isReview?null:deviceName(kind,answers.household),deviceTypeChinese:isReview?null:`${kind==='lamp' && answers.household==='no'?'灯':deviceLabels[kind]}（${answers.household==='yes'?'可用于私人家庭':'仅限非私人家庭'}）`,household:answers.household==='yes'?'可用于私人家庭':answers.household==='no'?'仅限非私人家庭':null,reason,answers:[...history,...Object.keys(profile?.carriedAnswers||{}).filter(key=>!history.includes(key))].map(key=>({question:questionFor(key).title,detail:questionFor(key).detail,answer:answers[key]==='unknown'?'不确定':answers[key]==='yes'?questionFor(key).yes:questionFor(key).no})),sourceChecked:'2026-10-29',officialProduct:earProduct ? {name:officialProductName,query:earProduct.query,checked:earProduct.checked,note:earProduct.note,sourceUrl:'https://www.stiftung-ear.de/service/geraetezuordnung/'} : null,catalogMatches:catalogMatches.map(entry=>({name:entry.name,chineseName:window.EAR_CATALOG_ZH?.names[entry.name] || null,english:entry.english,candidates:entry.candidates,remarks:entry.remarks,queries:entry.queries})),matchMode:directMatch?'官方条目直接匹配':earProduct?'官方条目加条件确认':'EAR 条件引导',assumptions:directMatch?earProduct.assumptions:nameAssumptions(),automaticAnswers:profile?.automaticAnswers|| (profile?.namePump?{builtInPump:{value:'yes',source:'产品名称明确为内置电泵'}}:{}),officialDirectory:publicDirectory,userExamples:userMatches.map(item=>({name:item.name,categoryOptions:item.categoryOptions || []})),sourceWarning,officialLiveApiConnected:false,notice:'仅供初筛，不等于 EAR 官方决定或注册结论。'};
  const root=$('result');root.replaceChildren();
  const node=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
  const top=node('div','result-top',isReview?'分类尚未完成':'已生成分类建议');const heading=node('h3','result-heading',isReview?(answers[lastKey]==='unknown'?'请补充这项产品信息':activeMode==='name'?'请继续确认产品条件':'需要核对产品适用范围'):`第 ${info[0]} 类 · ${info[1]}`);heading.tabIndex=-1;root.append(top,heading);if(activeMode==='name')root.append(node('p','result-sub',`产品：${product}`));
  if(!isReview){const box=node('div','result-box');box.append(node('small','','候选设备类型'),node('strong','',resultData.deviceTypeChinese),node('p','',official ? official.name : deviceName(kind,answers.household)));const details=node('details','directory-details');details.append(node('summary','','查看分类依据'),node('p','',earProduct ? `EAR 产品条目：${window.EAR_CATALOG_ZH?.names[officialProductName] || officialProductName}（${officialProductName}）；核对日期：${earProduct.checked}。${earProduct.note}` : '依据 EAR 官方设备分类决策流程及已确认条件；具体产品仍需核实适用范围。'),node('p','',official ? '设备类型名称参照 EAR 公布的目录。' : '请在 EAR 官方页面核对设备类型名称。'));if(catalogMatches.length===1){const entry=catalogMatches[0];details.append(node('p','',`官方候选类型原文：${entry.candidates.join('；')}`));if(entry.remarks.length)details.append(node('p','',`官方备注原文：${entry.remarks.join('；')}`));}box.append(details);root.append(box);}
  if(isReview && earProduct && !catalogMatches.length){const box=node('div','result-box');box.append(node('small','','EAR 产品条目'),node('strong','',officialProductName),node('p','',earProduct.note));root.append(box);}
  if(isReview && catalogMatches.length){
    const evidence=node('details','directory-details');evidence.append(node('summary','','查看官方条目与适用条件'));
    for(const entry of catalogMatches){const box=node('div','result-box');box.append(node('small','','EAR 官方搜索条目 · 原文'),node('strong','',window.EAR_CATALOG_ZH?.names[entry.name] || entry.name));if(window.EAR_CATALOG_ZH?.names[entry.name])box.append(node('p','',`EAR 德语名称：${entry.name}`));if(entry.english)box.append(node('p','',entry.english));box.append(node('p','',`候选设备类型：${entry.candidates.join('；')}`));if(entry.remarks.length)box.append(node('p','',`官方备注原文：${entry.remarks.join('；')}`));evidence.append(box);}
    root.append(evidence);
  }
  if(false && userMatches.length){
    const details=node('details','directory-details user-evidence');details.open=isReview;details.append(node('summary','','查看产品词库参考类别')); 
    for(const item of userMatches){const category=item.categoryOptions?.length ? `第 ${item.categoryOptions.join(' / ')} 类` : '类别未单独标注';details.append(node('p','',`${item.name}：${category}（仅供对照，以 EAR 条目为准）`));}
    root.append(details);
  }
  if(sourceWarning)root.append(node('p','source-warning','该产品可能因实际功能、用途或尺寸不同而归入不同类别，请以已确认的产品条件和 EAR 要求为准。'));
  root.append(node('p','result-reason',reason+' 正式注册前，请结合产品资料与 EAR 要求复核。'));
  if(profile?.mattressForm || profile?.smartForm)root.append(node('p','result-reason','自动采用的条件：'+nameAssumptions().join('；')+'。特殊型号请改用条件引导。'));
  const actions=node('div','result-actions');
  const restart=node('button','secondary',activeMode==='name'?'重新查询':'重新判断');restart.type='button';restart.addEventListener('click',restartClassification);actions.append(restart);
  if(isReview){const next=node('button','primary',activeMode==='name'?'改用条件引导':answers[lastKey]==='unknown'?'补充信息并继续':'核对已选条件');next.type='button';next.addEventListener('click',()=>{if(activeMode==='name'){continueReviewGuide();return;}showGuideForm();});actions.append(next);}
  const officialLink=node('a',isReview?'secondary':'primary','到 EAR 官方核对');officialLink.href='https://www.stiftung-ear.de/service/geraetezuordnung/';officialLink.target='_blank';officialLink.rel='noopener noreferrer';actions.append(officialLink);
  const copy=node('button','secondary','复制结果');copy.type='button';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(formatResult());$('feedback').textContent='已复制结果。';}catch{$('feedback').textContent='无法自动复制，请使用导出结果。';}});actions.append(copy);
  const exportButton=node('button','secondary','导出结果');exportButton.type='button';exportButton.addEventListener('click',()=>{const blob=new Blob([JSON.stringify(resultData,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='weee-classification.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});actions.append(exportButton);
  if(directMatch && profile.id==='official-router'){const verify=node('button','secondary','核对产品条件');verify.type='button';verify.addEventListener('click',()=>{directMatch=false;answers={};history=[];prepareSmartProduct();showSmartProductForm();});actions.append(verify);}
  const edit=node('button','secondary',activeMode==='guide'?'修改条件':profile?.smartForm?'修改条件':history.length?'修改答案':'修改产品');edit.type='button';edit.addEventListener('click',()=>{if(activeMode==='guide'){showGuideForm();return;}if(profile?.mattressForm){showMattressForm();return;}if(profile?.smartForm){showSmartProductForm();return;}if(!history.length){$('status').textContent='产品查询';showSection('start');$('product').focus();return;}const previous=history.pop();delete answers[previous];ask(previous);});actions.append(edit);root.append(actions,node('div','feedback',''));root.lastChild.id='feedback';
  $('status').textContent=isReview?'待确认':'分类建议';showSection('result');heading.focus({preventScroll:true});
}
function formatResult(){return [`德国 WEEE 分类初筛`,resultData.product?`产品：${resultData.product}`:'判定方式：条件引导',`结果：${resultData.status}`,resultData.category?`类别：第 ${resultData.category.number} 类 ${resultData.category.name}`:'',resultData.deviceType?`候选设备类型：${resultData.deviceTypeChinese} / ${resultData.officialDirectory?.name || resultData.deviceType}`:'',resultData.officialProduct?`匹配依据：EAR 产品条目 ${resultData.officialProduct.name}（核对日期：${resultData.officialProduct.checked}）`:'',...resultData.userExamples.map(item=>`词库参考：${item.name}${item.categoryOptions.length ? `（第 ${item.categoryOptions.join(' / ')} 类）` : ''}`),resultData.sourceWarning?`资料差异：${resultData.sourceWarning}`:'',...resultData.assumptions.map(item=>`自动采用的条件：${item}`),`说明：${resultData.reason}`,`提示：${resultData.notice}`,`官方核对：https://www.stiftung-ear.de/service/geraetezuordnung/`].filter(Boolean).join('\n');}
function runExactQuery(input){const value=input.trim();if(!value){$('input-error').textContent='请先输入产品名称。';$('product').focus();return;}$('input-error').textContent='';product=value;answers={};history=[];resultData=null;earProduct=findEarProduct(product);directMatch=false;catalogMatches=earProduct?[]:findCatalog(product);userMatches=findUserExamples(product);sourceWarning=getSourceWarning(product);
  const userClasses=[...new Set(userMatches.flatMap(item=>item.category ? [item.category] : item.categoryOptions || []))];
  const officialClasses=officialCandidateClasses();
  if(userClasses.length && officialClasses.length && !earProduct?.verifiedOverride && userClasses.some(category=>!officialClasses.includes(category))){if(earProduct){sourceWarning=sourceWarning || '词库参考类别与已核对的 EAR 产品条目不同；请根据产品的实际条件核对，以下按 EAR 条目初筛。';}else{sourceWarning='词库参考与 EAR 条目不同，以下按 EAR 条目及实际产品条件初筛。';}}
  if(userMatches.length && !earProduct && !catalogMatches.length && (userClasses.length || !profileFor(product))){profile={id:'user-evidence'};renderResult('review','userEvidence');return;}
  if(catalogMatches.length){
    if(catalogMatches.length!==1){profile={id:'catalog'};renderResult('review','catalogReview');return;}
    const entry=catalogMatches[0], variants=catalogVariants(entry);
    earProduct={id:'catalog',officialName:entry.name,query:entry.queries[0],checked:window.EAR_PRODUCT_CATALOG.checked,note:'官方备注和候选类型保留在导出结果中。',assumptions:[]};
    profile={id:'catalog',variants,requireHousehold:entry.remarks.some(x=>x.startsWith('Ob die b2b-')),requireSize:entry.remarks.some(x=>x.startsWith('Ob die Geräteart Klein-'))};
    const mattress=entry.name==='Luftmatratze, selbstaufblasend' && entry.remarks.every(note=>generalRemarksOnly({remarks:[note]}) || ['Mit fest eingebauter elektrischer Luftpumpe.','Flexible Geräte werden im kompaktesten Zustand (zusammengelegt/-gerollt) gemessen.'].includes(note));
    if(mattress){profile.requirePump=true;profile.requireHousehold=false;profile.compactMeasurement=true;profile.mattressForm=true;profile.namePump=/内置电(?:动气)?泵/.test(product);profile.defaults=['普通完整充气气垫，可用于私人家庭','柔性设备按折叠或卷起后的最紧凑状态测量'];answers.household='yes';if(profile.namePump)answers.builtInPump='yes';showMattressForm();return;}
    if(!variants || !prepareCatalogPlan(entry)){renderResult('review','catalogReview');return;}
    startSmartProduct();return;
  }
  profile=earProduct ? {id:earProduct.id,description:earProduct.description} : null;
  if(!profile){renderResult('review','unrecognized');return;}
  if(earProduct.directKind){answers.household='yes';directMatch=true;renderResult(earProduct.directKind,'direct');return;}
  prepareSmartProduct();startSmartProduct();
}

$('product').addEventListener('keydown',e=>{if(e.key==='Enter'){$('begin').click();}});
$('change-product').addEventListener('click',()=>{if(activeMode==='guide'){resetGuide();return;}answers={};history=[];resultData=null;earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;$('status').textContent='产品查询';showSection('start');$('product').focus();});
$('back').addEventListener('click',()=>{delete answers[history.pop()];if(!history.length){showSection('start');$('status').textContent='产品查询';return;}const previous=history.pop();delete answers[previous];ask(previous);});

const suggestions=$('product-suggestions');
const suggestionNames=new Set([...Object.values(window.EAR_CATALOG_ZH?.names || {}),...Object.keys(window.EAR_CATALOG_ALIASES || {}),...(window.USER_WEEE_EXAMPLES?.records || []).flatMap(item=>item.matchable?item.aliases:[])]);
for(const name of suggestionNames){const option=document.createElement('option');option.value=name;suggestions.append(option);}
showSection('start');

// The guided route follows EAR's decision order. Name similarity only offers candidates.
const nameQuestionSpecs={
 refrigerant:{title:'设备是否含制冷剂？',detail:'该 EAR 条目以含制冷剂为适用条件。半导体制冷或仅用水、风扇的设备不能直接沿用。',yes:'是，含制冷剂',no:'否，不含制冷剂'},
 finishedCable:{title:'是否为已经装好连接端的成品线缆？',detail:'散装米线、仅带线鼻或端套的半成品不能直接沿用此条目。USB 线须两端都有 USB 接口。',yes:'是，完整成品线缆',no:'否，米线或半成品'},
 noRefrigerant:{title:'是否为不含制冷剂和压缩机的珀尔帖除湿机？',detail:'该条目只对应无制冷剂、无压缩机的除湿设备。',yes:'是，符合上述结构',no:'否，结构不符合'},
 displayArea:{title:'是否主要通过大于 100 cm² 的屏幕显示信息？',detail:'仅用于操作控制的小屏幕不能直接按屏幕设备处理，请按实际主功能和屏幕规格确认。',yes:'是，主功能为屏幕显示且面积大于 100 cm²',no:'否，不符合上述显示条件'}
};
const guideQuestions = {
 electric:{title:'产品是否依赖电力或电磁场工作？',detail:'包括使用电池、插电或太阳能供电的产品，以及用于产生、传输或测量电流的设备。',yes:'是，具有电气或电子功能',no:'否，不具有电气或电子功能'},
 scope:{title:'是否涉及需要单独核实的产品情形？',detail:'例如普通白炽灯、单独电池或组件、复杂套装、大型固定工业设备、交通工具、军用／航天／专用研发设备，以及植入式或可能感染的医疗设备。高压设备或适用范围不明确时，请先核对技术资料。',yes:'是，涉及上述情形',no:'否，是普通完整设备'},
 thermal:{title:'是否通过内置回路进行温度交换？',detail:'设备利用制冷剂、气体或油等非水物质制冷、加热或除湿。仅使用水、风扇或热电元件不直接归入这一类。',yes:'是，使用非水物质的内置回路',no:'否，不符合上述条件'},
 screen:{title:'是否属于屏幕、显示器或相关显示设备？',detail:'独立显示器和电视不受屏幕大小限制；其他设备须以显示图像或信息为主要目的，且屏幕面积大于 100 cm²。',yes:'是，符合显示设备条件',no:'否，主要用途不是上述显示功能'},
 light:{title:'是否为单独销售的灯或光源？',detail:'例如可替换的灯泡、灯管。完整台灯、吊灯、灯带等灯具请选择“否”，按后续设备条件判断。',yes:'是，属于独立光源',no:'否，是灯具或其他设备'},
 pv:{title:'是否为独立光伏组件？',detail:'光伏组件将光能转为电能。带太阳能供电的成品设备（例如太阳能灯）请选择“否”。',yes:'是，独立光伏组件',no:'否，其他完整设备'},
 ict:{title:'主要用途是否为信息处理或通信？',detail:'例如收集、传输、处理、存储和显示信息，或远距离传输语音、视频和数据。',yes:'是，信息或通信设备',no:'否，其他用途'}
};
let activeMode='name', lastRendered=null, guideValues={};
const modeDrafts={name:null,guide:null};
const originalRenderResult=renderResult;
renderResult=function(kind,key){lastRendered={kind,key};originalRenderResult(kind,key);};
function captureMode(){return {product,answers:{...answers},history:[...history],resultData,profile,earProduct,directMatch,catalogMatches,userMatches,sourceWarning,lastRendered,guideValues:{...guideValues},lastView:!$('start').hidden?'start':!$('question-area').hidden?'question-area':!$('product-form').hidden?'product-form':!$('guide-form').hidden?'guide-form':'result',input:$('product').value,related:[...$('related-products').childNodes]};}
function resetGuide(){product='';answers={};history=[];resultData=null;profile={id:'guide'};earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;lastRendered=null;guideValues={};buildGuideForm();showGuideForm();}
function setMode(mode){
 if(mode===activeMode)return;
 modeDrafts[activeMode]=captureMode();activeMode=mode;
 for(const m of ['name','guide']){$('mode-'+m).setAttribute('aria-selected',String(mode===m));$('mode-'+m).tabIndex=mode===m?0:-1;}
 $('classification-panel').setAttribute('aria-labelledby','mode-'+mode);
 $('mode-hint').textContent=mode==='name'?'输入名称，查找相关产品与分类建议。':'不需要产品名称，在本页确认条件后生成分类建议。';
 const saved=modeDrafts[mode];
 if(saved){({product,answers,history,resultData,profile,earProduct,directMatch,catalogMatches,userMatches,sourceWarning,lastRendered}=saved);if(mode==='name'){$('product').value=saved.input;$('related-products').replaceChildren(...saved.related);}else{product='';guideValues={...saved.guideValues};buildGuideForm();}if(saved.lastView==='question-area'){const key=history.pop();ask(key);}else if(saved.lastView==='result'){renderResult(lastRendered.kind,lastRendered.key);}else if(saved.lastView==='product-form'){if(profile?.mattressForm)showMattressForm();else showSmartProductForm();}else if(saved.lastView==='guide-form'){showGuideForm();}else{showSection('start');$('status').textContent='产品查询';}}
 else if(mode==='guide')resetGuide();
 else{answers={};history=[];resultData=null;earProduct=null;profile=null;lastRendered=null;showSection('start');$('status').textContent='产品查询';}
}
$('mode-name').addEventListener('click',()=>setMode('name'));
$('mode-guide').addEventListener('click',()=>setMode('guide'));
for(const mode of ['name','guide'])$('mode-'+mode).addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?'name':e.key==='End'?'guide':activeMode==='name'?'guide':'name';setMode(next);$('mode-'+next).focus();}});
function productCandidates(query){
 const key=nameKey(query),candidates=[];
 for(const e of window.EAR_PRODUCTS||[])candidates.push({label:e.aliases[0],lookup:e.aliases[0],official:e.officialName,terms:e.aliases,classes:e.directKind?[categories[e.directKind][0]]:({'official-luminaire':[4,5],'official-personal-computer':[4,6],'official-fridge':[1,4,5],'official-compressor':[1],'official-thermoelectric':[4,5],'official-peltier':[4,5],pv:[4,5]}[e.id]||[])});
 for(const e of window.EAR_PRODUCT_CATALOG?.entries||[]){const zh=window.EAR_CATALOG_ZH?.names[e.name];candidates.push({label:zh||e.name,lookup:e.name,official:e.name,classes:[...new Set((catalogVariants(e)||[]).map(v=>categories[v.kind][0]))],terms:[e.name,e.english,zh,...Object.entries(window.EAR_CATALOG_ALIASES||{}).filter(([,de])=>de===e.name).map(([cn])=>cn)].filter(Boolean)});}
 const grams=x=>{const v=nameKey(x);return new Set(v.length<2?[v]:Array.from({length:v.length-1},(_,i)=>v.slice(i,i+2)));};
 const q=grams(query);const score=term=>{const t=nameKey(term);if(t===key)return 1;if(t.includes(key)||key.includes(t))return Math.min(t.length,key.length)/Math.max(t.length,key.length)*.8;const g=grams(term),common=[...q].filter(v=>g.has(v)).length;return 2*common/(q.size+g.size);};
 const seen=new Set();return candidates.map(c=>({...c,score:Math.max(...c.terms.map(score))})).filter(c=>c.score>=.28).sort((a,b)=>b.score-a.score).filter(c=>{if(seen.has(c.official))return false;seen.add(c.official);return true;}).slice(0,5);
}
function nameQuery(){
 const value=$('product').value.trim();$('related-products').replaceChildren();
 if(!value){$('input-error').textContent='请输入产品名称后查询。';$('product').focus();return;}
 if(findEarProduct(value)||findCatalog(value).length){runExactQuery(value);return;}
 const found=productCandidates(value);product=value;answers={};history=[];resultData=null;earProduct=null;profile=null;lastRendered=null;showSection('start');$('input-error').textContent='';
 const root=$('related-products'),title=document.createElement('h3');title.className='related-title';title.textContent=found.length?'选择与你的产品最接近的条目':'暂未找到相关产品';root.append(title);const note=document.createElement('p');note.className='related-note';note.textContent=found.length?'名称相近不代表类别相同。请确认实际产品后选择，或切换条件引导。':'可尝试常见名称，或切换条件引导继续判断。';root.append(note);
 const list=document.createElement('div');list.className='related-list';
 for(const c of found){const b=document.createElement('button');b.type='button';b.className='related-item';const label=document.createElement('strong'),detail=document.createElement('small');label.textContent=c.label;detail.textContent=c.official+(c.classes.length?` · 候选第 ${c.classes.join(' / ')} 类，需确认产品条件`:' · 需核实产品条件');b.append(label,detail);b.addEventListener('click',()=>{$('product').value=c.label;runExactQuery(c.lookup);});list.append(b);}root.append(list);
}
$('begin').addEventListener('click',nameQuery);
$('product').addEventListener('input',()=>{$('related-products').replaceChildren();$('input-error').textContent='';});
for(const button of document.querySelectorAll('[data-example]'))button.addEventListener('click',()=>{$('product').value=button.dataset.example;nameQuery();});
showSection('start');

function continueReviewGuide(){setMode('guide');}

function restartClassification(){
 if(activeMode==='guide'){resetGuide();return;}
 answers={};history=[];resultData=null;profile=null;earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;lastRendered=null;
 modeDrafts[activeMode]=null;
 $('input-error').textContent='';$('related-products').replaceChildren();$('result').replaceChildren();
 product='';$('product').value='';$('status').textContent='产品查询';showSection('start');$('product').focus();
}

const guideFields={
 electric:{title:'是否具有电气或电子功能？',detail:'包括电池、插电或太阳能供电，以及产生、传输或测量电流的设备。',options:[['yes','是'],['no','否']]},
 scope:{title:'是否涉及特殊适用范围？',detail:'如普通白炽灯、单独电池或组件、复杂套装、大型固定工业设备、交通工具、专用军用／航天／研发设备，以及植入式或可能感染的医疗设备。',options:[['no','否，是普通完整设备'],['yes','是，涉及特殊情形']]},
 household:{title:'是否可以用于私人家庭？',detail:'家庭和商业场景均可使用时，选择“可以”。',options:[['yes','可以用于私人家庭'],['no','仅限非私人家庭']]},
 function:{title:'设备符合以下哪种功能？',detail:'请从上到下核对，选择最先符合的一项。',options:[['thermal','温度交换','使用制冷剂、气体或油等非水物质的内置回路制冷、加热或除湿。仅用水、风扇或热电元件的设备不选此项。'],['screen','屏幕或显示设备','独立显示器、电视；或以显示图像信息为主、屏幕面积大于 100 cm² 的设备。'],['light','独立灯或光源','单独销售的灯泡、灯管；完整台灯、吊灯、灯带等灯具不选此项。'],['other','其他设备','不符合以上功能，包括完整灯具、信息通信设备及光伏组件等。']]},
 gas:{title:'是否为气体放电灯？',detail:'例如荧光灯管。普通 LED 灯泡选择“否”。',options:[['yes','是，气体放电灯'],['no','否，其他光源']]},
 size:{title:'是否有任一外部尺寸大于 50 cm？',detail:'普通设备按设备本体测量；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“均不大于”。',options:[['yes','有，大于 50 cm'],['no','没有，均不大于 50 cm']]},
 subtype:{title:'其他设备具体属于哪种用途？',detail:'独立光伏组件优先单列；使用太阳能供电的成品设备不等于光伏组件。',options:[['pv','独立光伏组件'],['ict','信息处理或通信设备'],['other','其他用途设备']]}
};
function guideRequiredKeys(){
 if(guideValues.electric==='no')return ['electric'];
 if(guideValues.scope==='yes')return ['electric','scope'];
 const keys=['electric','scope','household','function'];
 if(guideValues.function==='light' && guideValues.household!=='no')keys.push('gas');
 if(guideValues.function==='other')keys.push('size','subtype');
 return keys;
}
function buildGuideForm(){
 const root=$('guide-form');root.replaceChildren();
 const intro=document.createElement('p');intro.className='guide-intro';intro.textContent='无需填写产品名称。请根据产品说明书确认以下条件，填写完成后统一生成建议。';root.append(intro);
 const form=document.createElement('form');form.noValidate=true;form.id='guide-conditions';
 const sections=[['适用范围',['electric','scope']],['用途与功能',['household','function']],['补充规格',['gas','size','subtype']]];
 for(const [title,keys] of sections){const section=document.createElement('section');section.className='guide-group';section.dataset.guideSection=title;const h=document.createElement('h3');h.textContent=title;section.append(h);
  for(const key of keys){const spec=guideFields[key],field=document.createElement('fieldset');field.className='guide-field';field.id='guide-field-'+key;const legend=document.createElement('legend');legend.textContent=spec.title;const detail=document.createElement('p');detail.id='guide-help-'+key;detail.className='guide-help';detail.textContent=spec.detail;field.append(legend,detail);const options=document.createElement('div');options.className='guide-options'+(key==='function'?' guide-functions':'');
   for(const [value,label,explanation] of spec.options){const option=document.createElement('label');option.className='guide-option';const input=document.createElement('input');input.type='radio';input.name=key;input.value=value;input.checked=guideValues[key]===value;input.setAttribute('aria-describedby',detail.id);const text=document.createElement('span'),strong=document.createElement('strong');strong.textContent=label;text.append(strong);if(explanation){const small=document.createElement('small');small.textContent=explanation;text.append(small);}option.append(input,text);input.addEventListener('change',()=>{guideValues[key]=value;if(key==='function')for(const dependent of ['gas','size','subtype'])delete guideValues[dependent];if(key==='household')delete guideValues.gas;form.querySelectorAll('input[type=radio]').forEach(r=>r.checked=guideValues[r.name]===r.value);updateGuideVisibility();$('guide-error').textContent='';});options.append(option);}
   field.append(options);section.append(field);
  }form.append(section);
 }
 const error=document.createElement('p');error.id='guide-error';error.className='input-error';error.setAttribute('role','alert');const buttons=document.createElement('div');buttons.className='guide-form-actions';const submit=document.createElement('button');submit.type='submit';submit.className='primary';submit.textContent='生成分类建议';const clear=document.createElement('button');clear.type='button';clear.className='secondary';clear.textContent='清空重填';clear.addEventListener('click',resetGuide);buttons.append(submit,clear);form.append(error,buttons);form.addEventListener('submit',event=>{event.preventDefault();submitGuideForm();});root.append(form);updateGuideVisibility();
}
function updateGuideVisibility(){
 const keys=guideRequiredKeys();
 for(const key of Object.keys(guideFields))$('guide-field-'+key).hidden=!keys.includes(key);
 for(const section of $('guide-form').querySelectorAll('.guide-group'))section.hidden=![...section.querySelectorAll('fieldset')].some(field=>!field.hidden);
}
function showGuideForm(){showSection('guide-form');$('status').textContent='条件填写';}
function submitGuideForm(){
 const missing=guideRequiredKeys().find(key=>!guideValues[key]);
 if(missing){$('guide-error').textContent='请先选择：'+guideFields[missing].title;const input=$('guide-field-'+missing).querySelector('input');input.focus();return;}
 product='';answers={electric:guideValues.electric};history=['electric'];profile={id:'guide',form:true};earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;lastRendered=null;
 if(guideValues.electric==='no'){renderResult('review','electric');return;}
 answers.scope=guideValues.scope;history.push('scope');if(guideValues.scope==='yes'){renderResult('review','scope');return;}
 answers.household=guideValues.household;history.push('household');
 for(const key of ['thermal','screen','light']){answers[key]=guideValues.function===key?'yes':'no';history.push(key);if(answers[key]==='yes')break;}
 let kind;
 if(guideValues.function==='thermal')kind='thermal';
 else if(guideValues.function==='screen')kind='screen';
 else if(guideValues.function==='light'){if(answers.household==='yes'){answers.gas=guideValues.gas;history.push('gas');kind=answers.gas==='yes'?'gas':'lamp';}else kind='lamp';}
 else{answers.size=guideValues.size;answers.pv=guideValues.subtype==='pv'?'yes':'no';history.push('size','pv');if(answers.pv==='yes')kind=answers.size==='yes'?'largePV':'smallPV';else if(answers.size==='yes')kind='large';else{answers.ict=guideValues.subtype==='ict'?'yes':'no';history.push('ict');kind=answers.ict==='yes'?'ict':'small';}}
 renderResult(kind,'guideForm');
}


function showMattressForm(){
 const root=$('product-form');root.replaceChildren();
 const line=document.createElement('div');line.className='product-line';const label=document.createElement('strong');label.textContent=product;const restart=document.createElement('button');restart.type='button';restart.className='text-button';restart.textContent='重新查询';restart.addEventListener('click',restartClassification);line.append(label,restart);root.append(line);
 const intro=document.createElement('p');intro.className='guide-intro';intro.textContent='已按普通可家用充气气垫匹配，无需逐项确认通用功能。医疗专用、加热等特殊型号请改用条件引导。';root.append(intro);
 if(profile.namePump){const recognized=document.createElement('p');recognized.className='recognition';recognized.textContent='产品名称已明确内置电泵，只需确认收纳尺寸。';root.append(recognized);}
 const form=document.createElement('form');form.noValidate=true;
 const keys=profile.namePump?['size']:['builtInPump','size'];
 for(const key of keys){const q=questionFor(key),field=document.createElement('fieldset');field.className='guide-field';field.id='mattress-field-'+key;const legend=document.createElement('legend');legend.textContent=q.title;const detail=document.createElement('p');detail.className='guide-help';detail.id='mattress-help-'+key;detail.textContent=q.detail;const options=document.createElement('div');options.className='guide-options';
  for(const [value,text] of [['yes',q.yes],['no',q.no]]){const option=document.createElement('label');option.className='guide-option';const input=document.createElement('input');input.type='radio';input.name=key;input.value=value;input.checked=answers[key]===value;input.setAttribute('aria-describedby',detail.id);const span=document.createElement('span');span.textContent=text;option.append(input,span);input.addEventListener('change',()=>{answers[key]=value;update();error.textContent='';});options.append(option);}
  field.append(legend,detail,options);form.append(field);
 }
 const error=document.createElement('p');error.id='mattress-error';error.className='input-error';error.setAttribute('role','alert');const actions=document.createElement('div');actions.className='guide-form-actions';const submit=document.createElement('button');submit.type='submit';submit.className='primary';submit.textContent='查看分类建议';const guide=document.createElement('button');guide.type='button';guide.className='secondary';guide.textContent='改用条件引导';guide.addEventListener('click',()=>setMode('guide'));actions.append(submit,guide);form.append(error,actions);root.append(form);
 function update(){$('mattress-field-size').hidden=answers.builtInPump==='no';}
 form.addEventListener('submit',event=>{event.preventDefault();const required=answers.builtInPump==='no'?['builtInPump']:keys;const missing=required.find(key=>!answers[key]);if(missing){error.textContent='请先选择：'+questionFor(missing).title;$('mattress-field-'+missing).querySelector('input').focus();return;}history=required;resultData=null;const next=catalogNext();renderResult(next.startsWith('result:')?next.slice(7):'review',answers.builtInPump==='no'?'builtInPump':'size');});
 update();showSection('product-form');$('status').textContent='规格确认';
}


function nameAssumptions(){
 const defaults=[...(profile?.defaults||[])];
 if(profile?.smartForm && !profile.householdRequired && !profile.householdEdited)defaults.push(answers.household==='yes'?'按可用于私人家庭的设备初筛；专用商用型号可在使用场景中修改':'按仅限非私人家庭的官方候选初筛');
 return defaults;
}
function prepareSmartProduct(){
 profile.smartForm=true;profile.defaults=[`已匹配 EAR 条目：${earProduct.officialName}`];profile.automaticAnswers={confirm:{value:'yes',source:'精确匹配的 EAR 产品条目及其适用形态'}};
 answers.household='yes';profile.automaticAnswers.household={value:'yes',source:'按可家用完整设备初筛，可修改使用场景'};
 if(profile.id==='official-compressor')profile.defaults.push('含制冷剂的压缩机制冷冰箱');
 if(profile.id==='official-personal-computer')profile.defaults.push('独立 PC 主机，非空机箱、单独配件或一体机');
 if(profile.id==='pv')profile.defaults.push('独立光伏组件，非太阳能供电的其他成品设备');
}
function prepareCatalogPlan(entry){
 const rules=[],defaults=[`已匹配 EAR 条目：${entry.name}`];
 profile.compactMeasurement=entry.remarks.some(note=>note.startsWith('Flexible Geräte'));
 for(const note of entry.remarks){
  if(generalRemarksOnly({remarks:[note]}))continue;
  if(/^Ob die Geräteart .*hängt von der Kantenlänge/.test(note)){profile.requireSize=true;continue;}
  if(note.startsWith('Flexible Geräte')){defaults.push('柔性设备按折叠或卷起后的最紧凑状态测量');continue;}
  if(note.startsWith('Lampen (Leuchtmittel) besitzen')){defaults.push('独立光源，具有标准灯头；完整灯具不适用');continue;}
  if(/Es muss (sich|ich) um .*Kältemittel enth[äa]lt/.test(note)){rules.push('refrigerant');continue;}
  if(note==='Darf weder Kältemittel noch Kompressor enthalten'){rules.push('noRefrigerant');continue;}
  if(note.startsWith('Nur vollständig konfektionierte Kabel')){rules.push('finishedCable');continue;}
  if(note==='Ob es sich um ein Bildschirmgerät oder ein Kleingerät handelt, hängt von der Größe des Bildschirms ab.'){rules.push('displayArea');continue;}
  const automatic={
   'Alle Geräte zum Einbau in einen PC sind Kleine Geräte der Informations- und Telekommunikationstechnik':'供 PC 内部安装的设备',
   'Diese Geräte sind Bildschirmgeräte, unabhängig von der Bildschirmgröße.':'该类独立显示设备不受屏幕尺寸限制',
   'Mobiltelefone sind Kleine Geräte der Informations- und Telekommunikationstechnik, unabhängig von der Bildschirmgröße.':'手机按信息通信设备处理，不按屏幕设备处理',
   'Alle kleinen Uhren (auch Quarzuhren, Smartwatches, Fitnesstracker usw., ob mit oder ohne SIM-Karte, ob mit oder ohne WLAN usw.) sind immer Kleingeräte.':'小型手表及可穿戴手表按小型设备处理',
   'Alle tragbaren Uhren, auch mit smarten Funktionen, sind Kleingeräte.':'可穿戴手表按小型设备处理',
   'WLAN-Gerät im engeren Sinne, wie Router, Repeater, Extender usw.':'普通 WLAN 路由、转发或扩展设备',
   'Ein Gerät ist auch dann eine Leuchte, wenn es fest eingebaute, nicht werkzeuglos tauschbare Leuchtmittel (LEDs) enthält.':'完整灯具，固定 LED 不作为独立光源处理',
   'Umgangssprachlich "Taschenlampe" genannt. Mit fest eingebautem Leuchtmittel.':'具有固定光源的完整手电筒',
   'Zur Absicherung von Geräten im Haushalt (HiFi, PC usw.)':'用于保护家用音响、电脑等设备',
   'Lupe mit fest eingebauter LED-Beleuchtung.':'带固定 LED 照明的放大镜',
   'Biderrahmen, Foto, beleuchtet mit LED ohne Bildschirm':'带 LED 照明的相框，不具有屏幕',
   'Nicht elektrisches Zubehör des Staubsaugers (Schlauch, Saugrohre) wird für die äußere Abmessung nicht berücksichtigt.':'尺寸不计入无电气功能的软管、吸管等附件',
   'Optionale Halterungen ohne elektrische Funktion werden für die äußere Abmessung nicht berücksichtigt.':'尺寸不计入可选的无电气功能支架'
  };
  if(automatic[note]){defaults.push(automatic[note]);continue;}
  // Unmapped special restrictions remain review-only; never infer them from a similar name.
  return false;
 }
 const variants=profile.variants,kinds=new Set(variants.map(v=>v.kind)),households=[...new Set(variants.map(v=>v.household))];
 profile.catalogKeys=[...new Set(rules)];
 if([...kinds].some(kind=>['large','largePV'].includes(kind)) && [...kinds].some(kind=>['small','smallPV','ict'].includes(kind)))profile.requireSize=true;
 if(profile.requireSize)profile.catalogKeys.push('size');
 if(kinds.has('gas')&&kinds.has('lamp')&&variants.some(v=>v.household==='yes'&&v.kind==='lamp'))profile.catalogKeys.push('gas');
 const classes=household=>[...new Set(variants.filter(v=>v.household===household).map(v=>categories[v.kind][0]))].sort().join(',');
 profile.householdRequired=households.length>1 && classes('yes')!==classes('no');
 if(profile.householdRequired)profile.catalogKeys.unshift('household');
 else answers.household=households.includes('yes')?'yes':'no';
 profile.smartForm=true;profile.defaults=defaults;profile.automaticAnswers={};
 if(!profile.householdRequired)profile.automaticAnswers.household={value:answers.household,source:households.length===1?'官方条目的使用场景':'按官方可家用候选初筛，可修改使用场景'};
 if(!profile.requireSize && [...kinds].every(kind=>['small','smallPV','ict'].includes(kind)))profile.defaults.push('沿用官方小型设备示例，外部尺寸均不超过 50 cm');
 if(!profile.requireSize && [...kinds].every(kind=>['large','largePV'].includes(kind)))profile.defaults.push('沿用官方大型设备示例，任一外部尺寸大于 50 cm');
 return true;
}
function nameFormKeys(){
 if(profile.id==='catalog'){
  const keys=[...profile.catalogKeys];
  const failed=keys.findIndex(key=>['refrigerant','finishedCable','noRefrigerant'].includes(key)&&answers[key]==='no');
  return failed<0?keys:keys.slice(0,failed+1);
 }
 if(profile.id==='official-fridge')return answers.cooling==='yes'?['cooling']:answers.cooling==='no'?['cooling','size']:['cooling'];
 if(profile.id==='official-peltier')return ['peltier','size'];
 if(profile.id==='official-compressor')return [];
 return ['size'];
}
function resolveNameForm(){
 if(profile.id==='catalog'){
  const failed=nameFormKeys().find(key=>['refrigerant','finishedCable','noRefrigerant'].includes(key)&&answers[key]==='no');if(failed)return {kind:'review',key:failed};
  let variants=profile.variants.filter(v=>v.household===answers.household);
  if(answers.size)variants=variants.filter(v=>answers.size==='yes'?['large','largePV'].includes(v.kind):!['large','largePV'].includes(v.kind));
  if(answers.displayArea)variants=variants.filter(v=>answers.displayArea==='yes'?v.kind==='screen':v.kind!=='screen');
  if(answers.gas)variants=variants.filter(v=>answers.gas==='yes'?v.kind==='gas':v.kind==='lamp');
  const kinds=[...new Set(variants.map(v=>v.kind))];return {kind:kinds.length===1?kinds[0]:'review',key:'catalogReview'};
 }
 if(profile.id==='official-personal-computer' && answers.household==='no')return {kind:'review',key:'household'};
 if(profile.id==='official-peltier' && answers.peltier==='yes')return {kind:answers.household==='yes'&&answers.size==='no'?'small':'review',key:'size'};
 const kind=profile.id==='official-compressor'||(profile.id==='official-fridge'&&answers.cooling==='yes')?'thermal':profile.id==='pv'?(answers.size==='yes'?'largePV':'smallPV'):answers.size==='yes'?'large':['official-personal-computer','official-router'].includes(profile.id)?'ict':'small';
 return {kind,key:'specifications'};
}
function startSmartProduct(){
 if(nameFormKeys().length){showSmartProductForm();return;}
 const result=resolveNameForm();renderResult(result.kind,result.key);
}
function showSmartProductForm(){
 const root=$('product-form');root.replaceChildren();const line=document.createElement('div');line.className='product-line';const label=document.createElement('strong');label.textContent=product;const restart=document.createElement('button');restart.type='button';restart.className='text-button';restart.textContent='重新查询';restart.addEventListener('click',restartClassification);line.append(label,restart);root.append(line);
 const intro=document.createElement('p');intro.className='guide-intro';intro.textContent='已匹配产品条目，系统自动处理已知条件。请在本页补充以下关键规格。';root.append(intro);
 const defaults=document.createElement('details');defaults.className='name-defaults';const summary=document.createElement('summary');summary.textContent=profile.householdRequired?'查看已识别条件':(answers.household==='yes'?'按可家用设备匹配':'按专用商用设备匹配')+' · 查看或修改';defaults.append(summary);
 for(const text of profile.defaults){const note=document.createElement('p');note.textContent=text;defaults.append(note);}
 if(!profile.householdRequired){const label=document.createElement('label');label.textContent='使用场景 ';const select=document.createElement('select');select.id='name-household';select.setAttribute('aria-label','使用场景');for(const [value,text]of [['yes','可用于私人家庭'],['no','仅限非私人家庭']]){const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option);}select.value=answers.household;select.addEventListener('change',()=>{answers.household=select.value;profile.householdEdited=true;delete profile.automaticAnswers.household;summary.textContent=(select.value==='yes'?'按可家用设备匹配':'按专用商用设备匹配')+' · 查看或修改';});label.append(select);defaults.append(label);const help=document.createElement('p');help.textContent='沿用官方候选场景；家庭和商业均可使用时属于可家用，专用商用型号可在此修改。';defaults.append(help);}
 root.append(defaults);const form=document.createElement('form');form.noValidate=true;form.id='name-conditions';
 const allKeys=profile.id==='official-fridge'?['cooling','size']:profile.id==='catalog'?profile.catalogKeys:nameFormKeys();
 for(const key of allKeys){const q=questionFor(key),field=document.createElement('fieldset');field.className='guide-field';field.id='name-field-'+key;const legend=document.createElement('legend');legend.textContent=q.title;const detail=document.createElement('p');detail.className='guide-help';detail.id='name-help-'+key;detail.textContent=q.detail;const options=document.createElement('div');options.className='guide-options';
  for(const [value,text] of [['yes',q.yes],['no',q.no]]){const option=document.createElement('label');option.className='guide-option';const input=document.createElement('input');input.type='radio';input.name=key;input.value=value;input.checked=answers[key]===value;input.setAttribute('aria-describedby',detail.id);const span=document.createElement('span');span.textContent=text;option.append(input,span);input.addEventListener('change',()=>{answers[key]=value;if(key==='cooling'||key==='peltier')delete answers.size;form.querySelectorAll('input').forEach(r=>r.checked=answers[r.name]===r.value);update();error.textContent='';});options.append(option);}
  field.append(legend,detail,options);form.append(field);
 }
 const error=document.createElement('p');error.id='name-error';error.className='input-error';error.setAttribute('role','alert');const actions=document.createElement('div');actions.className='guide-form-actions';const submit=document.createElement('button');submit.type='submit';submit.className='primary';submit.textContent='查看分类建议';const guide=document.createElement('button');guide.type='button';guide.className='secondary';guide.textContent='改用条件引导';guide.addEventListener('click',()=>setMode('guide'));actions.append(submit,guide);form.append(error,actions);root.append(form);
 function update(){const keys=nameFormKeys();for(const key of allKeys)$('name-field-'+key).hidden=!keys.includes(key);}
 form.addEventListener('submit',event=>{event.preventDefault();const keys=nameFormKeys(),missing=keys.find(key=>!answers[key]);if(missing){error.textContent='请先选择：'+questionFor(missing).title;$('name-field-'+missing).querySelector('input').focus();return;}history=[...keys];if(profile.householdEdited&&!history.includes('household'))history.push('household');resultData=null;const result=resolveNameForm();renderResult(result.kind,result.key);});
 update();showSection('product-form');$('status').textContent='规格确认';
}
