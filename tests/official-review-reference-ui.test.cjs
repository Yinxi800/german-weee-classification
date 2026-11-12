const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('path'),fs=require('fs'),vm=require('vm'),{pathToFileURL}=require('url');
(async()=>{
 const context={window:{}};vm.createContext(context);for(const x of ['products','evidence'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../data/'+x+'.js'),'utf8'),context);
 const records=context.window.WEEE_PRODUCTS.records.filter(p=>p.decision.mode==='review'&&p.officialReferenceConditions);
 assert.equal(records.length,121);const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})}),page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const url=process.env.WEEE_TEST_URL||pathToFileURL(path.join(__dirname,'../index.html')).href;await page.goto(url);
 for(const item of records){
  const result=await page.evaluate(name=>{const input=document.getElementById('product');input.value=name;document.getElementById('begin').click();const r=resultData,box=document.getElementById('official-reference');return {data:r,visible:!!box&&box.offsetParent!==null,text:box?.innerText||'',copy:formatResult(r)};},item.officialName);
  assert(result.visible,item.name);assert.equal(result.data.status,'需进一步确认',item.name);assert.equal(result.data.category,null,item.name);assert.equal(result.data.evidence.mode,'official_reference',item.name);assert.equal(result.data.officialReference.name,item.officialName,item.name);assert.equal(result.data.officialReference.conditions,item.officialReferenceConditions,item.name);assert(result.text.includes(item.officialReferenceConditions),item.name);assert(result.copy.includes(item.officialReferenceConditions),item.name);assert(result.data.officialReference.candidates.length,item.name);assert(result.data.officialReference.candidates.every(x=>x.label!==x.original),item.name+' unmatched category translation');
 }
 for(const [name,patterns] of [
  ['电动滑板',[/两轮电动滑板/,/第 4 类/,/其他轮数/,/不在 ElektroG/]],
  ['带发光轮的滑板车（无电机）',[/可替换/,/第 5 类/,/固定集成/,/第 4 类/]],
  ['便携式太阳能充电器',[/不超过 0.5/,/第 5 类/,/超过 0.5/,/光伏组件/]],
  ['门铃变压器',[/不在 ElektroG/,/无附加功能/]],
  ['RFID-Chip',[/私人终端用户/,/第 6 类/,/仅服务商用用户/,/不在 ElektroG/]]
 ]){await page.evaluate(name=>{document.getElementById('product').value=name;document.getElementById('begin').click()},name);const t=await page.locator('#official-reference').innerText();for(const re of patterns)assert.match(t,re,name);}
 const download=page.waitForEvent('download');await page.getByRole('button',{name:'导出结果'}).click();const f=await download,exported=JSON.parse(fs.readFileSync(await f.path(),'utf8'));assert.equal(exported.officialReference.name,'RFID-Chip');assert(exported.officialReference.options.length>=3);
 await page.setViewportSize({width:320,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.deepEqual(errors,[]);await browser.close();console.log('PASS all 121 official reference results, conditions, exception cases, copy/export, responsive and existing review status');
})().catch(e=>{console.error(e);process.exit(1)});
