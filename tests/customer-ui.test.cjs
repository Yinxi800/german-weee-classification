const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('path'),fs=require('fs'),{pathToFileURL}=require('url');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const url=process.env.WEEE_TEST_URL||pathToFileURL(path.join(__dirname,'../index.html')).href;
 const query=async name=>{await page.goto(url);await page.locator('#product').fill(name);await page.locator('#begin').click();};
 await page.goto(url);
 const catalog=await page.evaluate(()=>WEEE_APP.knowledge.products().map(p=>({id:p.id,name:p.name,status:WEEE_APP.knowledge.lookup(p.name).status,ids:((m)=>m.status==='exact'?[m.product.id]:m.candidates.map(c=>c.productId))(WEEE_APP.knowledge.lookup(p.name))})));
 assert.equal(catalog.length,290);
 for(const item of catalog){assert.match(item.name,/[\u3400-\u9fff]/u);assert(item.ids.includes(item.id),`Chinese name must find its own product: ${item.name}`);}
 const options=await page.locator('#product-suggestions option').evaluateAll(nodes=>nodes.map(n=>n.value));
 assert(options.length>=290);assert(options.every(s=>/[\u3400-\u9fff]/u.test(s)));assert(!options.includes('Multimeter'));assert(!options.includes('TAN 发生器'));assert(options.includes('网银动态验证码器（TAN）'));
 await page.locator('#begin').click();assert.match(await page.locator('#input-error').innerText(),/请输入产品名称/);
 await query('完全未收录的测试商品');assert.match(await page.locator('#related-products').innerText(),/条件引导/);
 await query('表');assert.equal(await page.locator('.related-item').count(),9);assert((await page.locator('.related-item').allTextContents()).every(text=>!text.includes('Uhr')&&!text.includes('Multimeter')));
 await query('Multimeter');assert.equal(await page.locator('.result-sub').innerText(),'产品：万用表');assert.equal(await page.evaluate(()=>resultData.officialProduct.name),'Multimeter');assert.equal(await page.locator('.result-box').innerText(),'建议设备类型\n小型设备（可用于家庭）');assert(!await page.getByText('注册设备类型（德语）：',{exact:false}).isVisible());await page.locator('#result details').first().locator('summary').click();assert.match(await page.locator('#result details').first().innerText(),/Multimeter/);
 await query('OBD-Diagnosegerät');assert.match(await page.locator('#product-form .product-line').innerText(),/诊断/);assert.doesNotMatch(await page.locator('#product-form .product-line').innerText(),/Diagnosegerät/);
 await query('挂钟');await page.locator('#name-field-size input[value=no]').check();await page.getByRole('button',{name:'查看分类建议',exact:true}).click();assert.equal(await page.evaluate(()=>resultData.kind),'small');assert.match(await page.locator('#result').innerText(),/常见型号|可家用型号/);await page.locator('#result details').last().locator('summary').click();assert.match(await page.locator('#result details').last().innerText(),/您已确认/);assert.match(await page.locator('#result details').last().innerText(),/预填，请核对/);assert.doesNotMatch(await page.locator('#result details').last().innerText(),/？：/);
 await page.getByRole('tab',{name:'条件引导分类'}).click();await page.getByRole('button',{name:'生成分类建议',exact:true}).click();assert.match(await page.locator('#guide-error').innerText(),/请补充/);assert.equal(await page.locator('#guide-form input:checked').count(),0);
 for(const[key,value]of Object.entries({electric:'yes',scope:'no',household:'yes',function:'other',size:'no',subtype:'ict'}))await page.locator(`#guide-form input[name=${key}][value=${value}]`).check();await page.getByRole('button',{name:'生成分类建议',exact:true}).click();assert.equal(await page.evaluate(()=>resultData.kind),'ict');assert.equal(await page.locator('#result .result-sub').count(),0);
 if(process.env.WEEE_SCREENSHOT_DIR)fs.mkdirSync(process.env.WEEE_SCREENSHOT_DIR,{recursive:true});
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:1000});await query('集成逆变器的交流电池储能装置');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  if(process.env.WEEE_SCREENSHOT_DIR)await page.screenshot({path:path.join(process.env.WEEE_SCREENSHOT_DIR,`customer-form-${width}.png`),fullPage:true});
  await page.getByRole('tab',{name:'条件引导分类'}).click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  if(process.env.WEEE_SCREENSHOT_DIR)await page.screenshot({path:path.join(process.env.WEEE_SCREENSHOT_DIR,`customer-guide-${width}.png`),fullPage:true});
 }
 assert.deepEqual(errors,[]);await browser.close();console.log(`PASS ${catalog.length} Chinese product round-trips, Chinese suggestions/results, original source evidence, actionable messages, default provenance, guided flow, desktop/mobile layouts`);
})().catch(e=>{console.error(e);process.exit(1)});
