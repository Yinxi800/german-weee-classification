const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('path'),{pathToFileURL}=require('url');
(async()=>{const b=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})}),p=await b.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));const url=process.env.WEEE_TEST_URL||pathToFileURL(path.join(__dirname,'../index.html')).href;
async function query(x){await p.goto(url);await p.locator('#product').fill(x);await p.locator('#begin').click()}
async function choose(text){await p.locator('.related-item').filter({has:p.getByText(text,{exact:true})}).click()}
async function radio(key,value){await p.locator(`#name-field-${key} input[value=${value}]`).check()}
async function submit(){await p.getByRole('button',{name:'查看分类建议',exact:true}).click()}
await query('激光电视');await choose('投影式激光电视');await radio('size','no');await submit();assert.match(await p.locator('#result').innerText(),/第 5 类/);
await query('激光电视');await choose('独立显示屏电视');assert.match(await p.locator('#result').innerText(),/第 2 类/);
await query('T8 灯管');await choose('独立荧光灯管');assert.match(await p.locator('#result').innerText(),/气体放电灯/);
await query('T8 灯管');await choose('独立 LED 灯管');assert.match(await p.locator('#result').innerText(),/非气体放电灯/);
await query('油锯');assert.match(await p.locator('#result').innerText(),/进一步确认/);
await query('水暖毯');await radio('eligibleEEE','yes');await radio('thermal','yes');await submit();assert.match(await p.locator('#result').innerText(),/第 1 类/);
await query('水暖毯');await radio('eligibleEEE','yes');await radio('thermal','no');await radio('size','no');await submit();assert.match(await p.locator('#result').innerText(),/第 5 类/);
await query('电饭煲');await radio('ordinaryScope','yes');await radio('size','no');await submit();assert.match(await p.locator('#result').innerText(),/第 5 类/);assert.deepEqual(errors,[]);await b.close();console.log('PASS alias UI: laser television, T8 LED/fluorescent, gasoline saw review, water blanket, rice cooker')})().catch(e=>{console.error(e);process.exit(1)});
