const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('path'),fs=require('fs'),{pathToFileURL}=require('url');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const url=process.env.WEEE_TEST_URL||pathToFileURL(path.join(__dirname,'../index.html')).href;
 async function search(name){await page.goto(url);await page.locator('#product').fill(name);await page.locator('#begin').click();await page.locator('#result').waitFor({state:'visible'});}
 for(const name of ['汽车拖车照明套件','Beleuchtungssatz für Kfz-Anhänger']){
  await search(name);const result=await page.evaluate(()=>resultData);
  assert.equal(result.status,'不在 ElektroG 适用范围内');assert.equal(result.category,null);assert.equal(result.kind,null);assert.equal(result.evidence.mode,'official_example');
  assert.equal(result.officialProduct.name,'Beleuchtungssatz für Kfz-Anhänger');assert(result.catalogMatches.some(x=>x.candidates.includes('Nicht im Anwendungsbereich')));
  const text=await page.locator('#result').innerText();assert.match(text,/不在 ElektroG 适用范围内/);assert.match(text,/自行车照明需注册/);assert.doesNotMatch(text,/该产品需进一步确认|第 [1-6] 类/);
  await page.locator('#result details.directory-details').first().locator('summary').click();assert.match(await page.locator('#result').innerText(),/Nicht im Anwendungsbereich/);
 }
 const download=page.waitForEvent('download');await page.getByRole('button',{name:'导出结果'}).click();const file=await download,exported=JSON.parse(fs.readFileSync(await file.path(),'utf8'));assert.equal(exported.status,'不在 ElektroG 适用范围内');assert.equal(exported.category,null);assert.equal(exported.evidence.mode,'official_example');
 await page.getByRole('button',{name:'重新选择产品'}).click();assert(await page.locator('#product').isVisible());
 await search('门铃变压器');assert.equal(await page.evaluate(()=>resultData.status),'需进一步确认');
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS trailer outside-scope official result, evidence, export, Chinese and German search, unaffected review');
})().catch(e=>{console.error(e);process.exit(1)});
