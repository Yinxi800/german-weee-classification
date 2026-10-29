'use strict';

// The name suggests a profile; the user must confirm every assumption before classification.
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
const peltierQuestion={title:'珀尔帖设备具体是哪一种？',detail:'请选择与产品说明书一致的类型。其他用途或不确定时选择“不确定”。',yes:'珀尔帖除湿机（无制冷剂和压缩机）',no:'热电／半导体冰箱'};
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
  if(key==='size' && profile?.compactMeasurement)return {...sizeQuestion,title:'折叠或卷起后，有任一外部尺寸大于 50 cm 吗？',detail:'EAR 要求柔性设备按最紧凑状态测量，请按折叠或卷起后的尺寸确认，而不是展开使用时的尺寸。'};
  if(key==='confirm') return {title:'请确认：产品符合以下描述吗？',detail:`${profile.description} 它是单独销售的完整产品，不涉及法律排除情形或复杂套装。`,yes:'符合',no:'不符合'};
  return {household:householdQuestion,size:sizeQuestion,gas:gasQuestion,cooling:coolingQuestion,peltier:peltierQuestion,...guideQuestions}[key];
}
function nextKey(key,value){
  if(value==='unknown' || (key==='confirm' && value==='no')) return 'review';
  if(profile.id==='guide') return guideNext(key,value);
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
  for(const id of ['start','question-area','result']) $(id).hidden=id!==name;
  $('work-title').textContent={start:'查询产品','question-area':'确认关键条件',result:'分类建议'}[name];
  document.querySelectorAll('.hero-meta span').forEach((step,index)=>{
    const current=index===({start:0,'question-area':1,result:2}[name]);
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
  const publicDirectory=official ? {name:official.name,fetchedAt:official.fetchedAt,source:official.source} : null;
  resultData={product, status:isReview?'需要人工复核':'初步分类建议',category:isReview?null:{number:info[0],name:info[1]},deviceType:isReview?null:deviceName(kind,answers.household),deviceTypeChinese:isReview?null:`${kind==='lamp' && answers.household==='no'?'灯':deviceLabels[kind]}（${answers.household==='yes'?'可用于私人家庭':'仅限非私人家庭'}）`,household:answers.household==='yes'?'可用于私人家庭':answers.household==='no'?'仅限非私人家庭':null,reason,answers:[...history,...Object.keys(profile?.carriedAnswers||{}).filter(key=>!history.includes(key))].map(key=>({question:questionFor(key).title,detail:questionFor(key).detail,answer:answers[key]==='unknown'?'不确定':answers[key]==='yes'?questionFor(key).yes:questionFor(key).no})),sourceChecked:'2026-10-29',officialProduct:earProduct ? {name:officialProductName,query:earProduct.query,checked:earProduct.checked,note:earProduct.note,sourceUrl:'https://www.stiftung-ear.de/service/geraetezuordnung/'} : null,catalogMatches:catalogMatches.map(entry=>({name:entry.name,chineseName:window.EAR_CATALOG_ZH?.names[entry.name] || null,english:entry.english,candidates:entry.candidates,remarks:entry.remarks,queries:entry.queries})),matchMode:directMatch?'官方条目直接匹配':earProduct?'官方条目加条件确认':'EAR 条件引导',assumptions:directMatch?earProduct.assumptions:[],officialDirectory:publicDirectory,userExamples:userMatches.map(item=>({name:item.name,categoryOptions:item.categoryOptions || []})),sourceWarning,officialLiveApiConnected:false,notice:'仅供初筛，不等于 EAR 官方决定或注册结论。'};
  const root=$('result');root.replaceChildren();
  const node=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
  const top=node('div','result-top',isReview?'分类尚未完成':'已生成分类建议');const heading=node('h3','result-heading',isReview?(answers[lastKey]==='unknown'?'请补充这项产品信息':activeMode==='name'?'请继续确认产品条件':'需要核对产品适用范围'):`第 ${info[0]} 类 · ${info[1]}`);heading.tabIndex=-1;root.append(top,heading,node('p','result-sub',`产品：${product}`));
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
  const actions=node('div','result-actions');
  const restart=node('button','secondary',activeMode==='name'?'重新查询':'重新判断');restart.type='button';restart.addEventListener('click',restartClassification);actions.append(restart);
  if(isReview){const next=node('button','primary',activeMode==='name'?'继续条件判断':answers[lastKey]==='unknown'?'补充信息并继续':'核对已选条件');next.type='button';next.addEventListener('click',()=>{if(activeMode==='name'){continueReviewGuide();return;}const previous=history.pop();delete answers[previous];ask(previous);});actions.append(next);}
  const officialLink=node('a',isReview?'secondary':'primary','到 EAR 官方核对');officialLink.href='https://www.stiftung-ear.de/service/geraetezuordnung/';officialLink.target='_blank';officialLink.rel='noopener noreferrer';actions.append(officialLink);
  const copy=node('button','secondary','复制结果');copy.type='button';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(formatResult());$('feedback').textContent='已复制结果。';}catch{$('feedback').textContent='无法自动复制，请使用导出结果。';}});actions.append(copy);
  const exportButton=node('button','secondary','导出结果');exportButton.type='button';exportButton.addEventListener('click',()=>{const blob=new Blob([JSON.stringify(resultData,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='weee-classification.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});actions.append(exportButton);
  if(directMatch && profile.id==='official-router'){const verify=node('button','secondary','核对产品条件');verify.type='button';verify.addEventListener('click',()=>{directMatch=false;answers={};history=[];ask('household');});actions.append(verify);}
  const edit=node('button','secondary',history.length?'修改答案':'修改产品');edit.type='button';edit.addEventListener('click',()=>{if(!history.length){$('status').textContent='产品查询';showSection('start');$('product').focus();return;}const previous=history.pop();delete answers[previous];ask(previous);});actions.append(edit);root.append(actions,node('div','feedback',''));root.lastChild.id='feedback';
  $('status').textContent=isReview?'待确认':'分类建议';showSection('result');heading.focus({preventScroll:true});
}
function formatResult(){return [`德国 WEEE 分类初筛`,`产品：${resultData.product}`,`结果：${resultData.status}`,resultData.category?`类别：第 ${resultData.category.number} 类 ${resultData.category.name}`:'',resultData.deviceType?`候选设备类型：${resultData.deviceTypeChinese} / ${resultData.officialDirectory?.name || resultData.deviceType}`:'',resultData.officialProduct?`匹配依据：EAR 产品条目 ${resultData.officialProduct.name}（核对日期：${resultData.officialProduct.checked}）`:'',...resultData.userExamples.map(item=>`词库参考：${item.name}${item.categoryOptions.length ? `（第 ${item.categoryOptions.join(' / ')} 类）` : ''}`),resultData.sourceWarning?`资料差异：${resultData.sourceWarning}`:'',`说明：${resultData.reason}`,`提示：${resultData.notice}`,`官方核对：https://www.stiftung-ear.de/service/geraetezuordnung/`].filter(Boolean).join('\n');}
function runExactQuery(input){const value=input.trim();if(!value){$('input-error').textContent='请先输入产品名称。';$('product').focus();return;}$('input-error').textContent='';product=value;answers={};history=[];resultData=null;earProduct=findEarProduct(product);directMatch=false;catalogMatches=earProduct?[]:findCatalog(product);userMatches=findUserExamples(product);sourceWarning=getSourceWarning(product);
  const userClasses=[...new Set(userMatches.flatMap(item=>item.category ? [item.category] : item.categoryOptions || []))];
  const officialClasses=officialCandidateClasses();
  if(userClasses.length && officialClasses.length && !earProduct?.verifiedOverride && userClasses.some(category=>!officialClasses.includes(category))){if(earProduct){sourceWarning=sourceWarning || '词库参考类别与已核对的 EAR 产品条目不同；请根据产品的实际条件核对，以下按 EAR 条目初筛。';}else{profile={id:'source-conflict'};renderResult('review','sourceConflict');return;}}
  if(userMatches.length && !earProduct && !catalogMatches.length && (userClasses.length || !profileFor(product))){profile={id:'user-evidence'};renderResult('review','userEvidence');return;}
  if(catalogMatches.length){
    if(catalogMatches.length!==1){profile={id:'catalog'};renderResult('review','catalogReview');return;}
    const entry=catalogMatches[0], variants=catalogVariants(entry);
    earProduct={id:'catalog',officialName:entry.name,query:entry.queries[0],checked:window.EAR_PRODUCT_CATALOG.checked,note:'官方备注和候选类型保留在导出结果中。',assumptions:[]};
    profile={id:'catalog',variants,requireHousehold:entry.remarks.some(x=>x.startsWith('Ob die b2b-')),requireSize:entry.remarks.some(x=>x.startsWith('Ob die Geräteart Klein-'))};
    const mattress=entry.name==='Luftmatratze, selbstaufblasend' && entry.remarks.every(note=>generalRemarksOnly({remarks:[note]}) || ['Mit fest eingebauter elektrischer Luftpumpe.','Flexible Geräte werden im kompaktesten Zustand (zusammengelegt/-gerollt) gemessen.'].includes(note));
    if(mattress){profile.requirePump=true;profile.requireHousehold=true;profile.compactMeasurement=true;}
    if(!variants || (!generalRemarksOnly(entry) && !mattress)){renderResult('review','catalogReview');return;}
    if(variants.length===1 && !profile.requirePump && !profile.requireHousehold && !profile.requireSize){answers.household=variants[0].household;earProduct.assumptions=[`匹配 EAR 条目：${entry.name}`,variants[0].household==='yes'?'可用于私人家庭':'仅限非私人家庭'];if(['small','smallPV','ict'].includes(variants[0].kind))earProduct.assumptions.push('外部尺寸均不超过 50 cm');if(['large','largePV'].includes(variants[0].kind))earProduct.assumptions.push('至少一个外部尺寸大于 50 cm');directMatch=true;renderResult(variants[0].kind,'direct');return;}
    const next=catalogNext();
    if(next==='review'){renderResult('review','catalogReview');return;}
    if(next.startsWith('result:')){renderResult(next.slice(7),'direct');return;}
    ask(next);return;
  }
  profile=earProduct ? {id:earProduct.id,description:earProduct.description} : null;if(!profile){renderResult('review','unrecognized');return;}if(earProduct){if(profile.id==='official-personal-computer'||profile.id==='pv'){ask('confirm');}else if(profile.id==='official-peltier'){ask('peltier');}else if(earProduct.directKind){answers.household='yes';directMatch=true;renderResult(earProduct.directKind,'direct');}else if(profile.id==='official-fridge')ask('cooling');else ask('household');}else ask('confirm');}
$('product').addEventListener('keydown',e=>{if(e.key==='Enter'){$('begin').click();}});
$('change-product').addEventListener('click',()=>{if(activeMode==='guide'){resetGuide();return;}answers={};history=[];resultData=null;earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;$('status').textContent='产品查询';showSection('start');$('product').focus();});
$('back').addEventListener('click',()=>{delete answers[history.pop()];if(!history.length){showSection('start');$('status').textContent='产品查询';return;}const previous=history.pop();delete answers[previous];ask(previous);});

const suggestions=$('product-suggestions');
const suggestionNames=new Set([...Object.values(window.EAR_CATALOG_ZH?.names || {}),...Object.keys(window.EAR_CATALOG_ALIASES || {}),...(window.USER_WEEE_EXAMPLES?.records || []).flatMap(item=>item.matchable?item.aliases:[])]);
for(const name of suggestionNames){const option=document.createElement('option');option.value=name;suggestions.append(option);}
showSection('start');

// The guided route follows EAR's decision order. Name similarity only offers candidates.
const guideQuestions = {
 electric:{title:'产品是否依赖电力或电磁场工作？',detail:'包括使用电池、插电或太阳能供电的产品，以及用于产生、传输或测量电流的设备。',yes:'是，具有电气或电子功能',no:'否，不具有电气或电子功能'},
 scope:{title:'是否涉及需要单独核实的产品情形？',detail:'例如普通白炽灯、单独电池或组件、复杂套装、大型固定工业设备、交通工具、军用／航天／专用研发设备，以及植入式或可能感染的医疗设备。高压设备或无法确认适用范围时请选择“不确定”。',yes:'是，涉及上述情形',no:'否，是普通完整设备'},
 thermal:{title:'是否通过内置回路进行温度交换？',detail:'设备利用制冷剂、气体或油等非水物质制冷、加热或除湿。仅使用水、风扇或热电元件不直接归入这一类。',yes:'是，使用非水物质的内置回路',no:'否，不符合上述条件'},
 screen:{title:'是否属于屏幕、显示器或相关显示设备？',detail:'独立显示器和电视不受屏幕大小限制；其他设备须以显示图像或信息为主要目的，且屏幕面积大于 100 cm²。',yes:'是，符合显示设备条件',no:'否，主要用途不是上述显示功能'},
 light:{title:'是否为单独销售的灯或光源？',detail:'例如可替换的灯泡、灯管。完整台灯、吊灯、灯带等灯具请选择“否”，按后续设备条件判断。',yes:'是，属于独立光源',no:'否，是灯具或其他设备'},
 pv:{title:'是否为独立光伏组件？',detail:'光伏组件将光能转为电能。带太阳能供电的成品设备（例如太阳能灯）请选择“否”。',yes:'是，独立光伏组件',no:'否，其他完整设备'},
 ict:{title:'主要用途是否为信息处理或通信？',detail:'例如收集、传输、处理、存储和显示信息，或远距离传输语音、视频和数据。',yes:'是，信息或通信设备',no:'否，其他用途'}
};
let activeMode='name', lastRendered=null;
const modeDrafts={name:null,guide:null};
const originalRenderResult=renderResult;
renderResult=function(kind,key){lastRendered={kind,key};originalRenderResult(kind,key);};
function guideNext(key,value){
 if(key==='electric')return value==='yes'?'scope':'review';
 if(key==='scope')return value==='no'?(answers.household?'thermal':'household'):'review';
 if(key==='household')return 'thermal';
 if(key==='thermal')return value==='yes'?'result:thermal':'screen';
 if(key==='screen')return value==='yes'?'result:screen':'light';
 if(key==='light')return value==='yes'?(answers.household==='yes'?'gas':'result:lamp'):(answers.size?'pv':'size');
 if(key==='gas')return value==='yes'?'result:gas':'result:lamp';
 if(key==='size')return 'pv';
 if(key==='pv')return value==='yes'?(answers.size==='yes'?'result:largePV':'result:smallPV'):(answers.size==='yes'?'result:large':'ict');
 if(key==='ict')return value==='yes'?'result:ict':'result:small';
 return 'review';
}
function captureMode(){return {product,answers:{...answers},history:[...history],resultData,profile,earProduct,directMatch,catalogMatches,userMatches,sourceWarning,lastRendered,lastView:!$('start').hidden?'start':!$('question-area').hidden?'question-area':'result',input:$('product').value,related:[...$('related-products').childNodes]};}
function resetGuide(){product=$('product').value.trim()||'条件引导中的产品';answers={};history=[];resultData=null;profile={id:'guide'};earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;lastRendered=null;ask('electric');}
function setMode(mode){
 if(mode===activeMode)return;
 modeDrafts[activeMode]=captureMode();activeMode=mode;
 for(const m of ['name','guide']){$('mode-'+m).setAttribute('aria-selected',String(mode===m));$('mode-'+m).tabIndex=mode===m?0:-1;}
 $('classification-panel').setAttribute('aria-labelledby','mode-'+mode);
 $('mode-hint').textContent=mode==='name'?'输入名称，查找相关产品与分类建议。':'按实际功能和规格确认条件，逐步获得分类建议。';
 const saved=modeDrafts[mode];
 if(saved){({product,answers,history,resultData,profile,earProduct,directMatch,catalogMatches,userMatches,sourceWarning,lastRendered}=saved);$('product').value=saved.input;$('related-products').replaceChildren(...saved.related);if(saved.lastView==='question-area'){const key=history.pop();ask(key);}else if(saved.lastView==='result'){renderResult(lastRendered.kind,lastRendered.key);}else{showSection('start');$('status').textContent='产品查询';}}
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

const reviewGuideDrafts=new Map();
function continueReviewGuide(){
 const target=product,carried={};
 for(const key of ['household','size'])if(['yes','no'].includes(answers[key]))carried[key]=answers[key];
 const compact=Boolean(profile?.compactMeasurement);
 const previous=modeDrafts.guide;
 if(previous && previous.product!==target)reviewGuideDrafts.set(previous.product,previous);
 const existing=previous?.product===target?previous:reviewGuideDrafts.get(target);
 modeDrafts.guide=existing||null;
 setMode('guide');
 if(existing)return;
 product=target;profile={id:'guide',compactMeasurement:compact,carriedAnswers:{...carried}};answers=carried;history=[];earProduct=null;catalogMatches=[];userMatches=[];sourceWarning=null;resultData=null;lastRendered=null;ask('electric');
}

function restartClassification(){
 const currentProduct=product;
 answers={};history=[];resultData=null;profile=null;earProduct=null;directMatch=false;catalogMatches=[];userMatches=[];sourceWarning=null;lastRendered=null;
 modeDrafts[activeMode]=null;
 $('input-error').textContent='';$('related-products').replaceChildren();$('result').replaceChildren();
 if(activeMode==='guide'){product=currentProduct;profile={id:'guide'};ask('electric');}
 else{product='';$('product').value='';$('status').textContent='产品查询';showSection('start');$('product').focus();}
}
