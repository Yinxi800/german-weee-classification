const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('path'),{pathToFileURL}=require('url');
(async()=>{const b=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});const p=await b.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));const u=process.env.WEEE_TEST_URL||pathToFileURL(path.join(__dirname,'../index.html')).href;
async function start(n){await p.goto(u);await p.locator('#product').fill(n);await p.locator('#begin').click()}
async function choose(k,v){await p.locator(`#name-field-${k} input[value=${v}]`).check()}
async function result(category){await p.getByRole('button',{name:'查看分类建议',exact:true}).click();let text=await p.locator('#result').innerText();assert.match(text,category?new RegExp('第 '+category+' 类'):/需进一步确认/);}
await start('饮水机');await choose('thermal','yes');assert.equal(await p.locator('#name-field-size').isVisible(),false);await result('1');
await start('饮水机');await choose('thermal','no');await choose('size','no');await result('5');
await start('饮水机');await choose('thermal','no');await choose('size','yes');await result('4');
await start('植物生长灯');await choose('lightSource','yes');await choose('nonFilament','yes');await choose('gas','yes');await result('3');
await start('植物生长灯');await choose('lightSource','yes');await choose('nonFilament','no');await result(null);
await start('植物生长灯');await choose('lightSource','no');await choose('size','yes');await result('4');await p.getByRole('button',{name:'修改条件'}).click();await choose('size','no');await result('5');
await start('空气炸锅');await choose('ordinaryScope','yes');await choose('size','no');await result('5');await p.getByRole('button',{name:'修改条件'}).click();await choose('size','yes');await result('4');await start('空气炸锅');await choose('ordinaryScope','no');await result(null);await start('热泵');await choose('eligibleThermal','yes');await result('1');await start('热泵');await choose('eligibleThermal','no');await result(null);
await start('POS 收银机');await choose('eligibleEEE','yes');await choose('displayArea','yes');await result('2');await start('POS 收银机');await choose('eligibleEEE','yes');await choose('displayArea','no');await choose('size','no');await choose('ict','yes');await result('6');
await start('扫描仪');await choose('ordinaryScope','yes');await choose('size','no');await choose('ict','yes');await result('6');await p.getByRole('button',{name:'修改条件'}).click();await choose('ict','no');await result('5');
await start('燃气灶');await choose('ordinaryScope','no');await result(null);await start('光伏储能一体机');await choose('integratedInverter','no');await result(null);await start('车载充电器');assert.match(await p.locator('#result').innerText(),/需进一步确认/);
assert.deepEqual(errors,[]);console.log('PASS 饮水机 1/4/5, 植物灯光源/白炽灯复核/灯具 4/5, 修改条件');await b.close()})().catch(e=>{console.error(e);process.exit(1)});
