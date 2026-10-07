import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base = process.env.BASE_URL || 'http://127.0.0.1:3017';
const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome'});
try {
 const context = await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
 const page = await context.newPage();
 const response = await page.goto(base,{waitUntil:'networkidle'});
 assert.equal(response.status(),200);
 const titles = await page.locator('#projects h3').allTextContents();
 assert.deepEqual(titles,['Python Quest','Couples Mediation','Mr. Mata Learning Hub','Hugzy Designs','SoulSupport']);
 assert.equal(await page.locator('#projects a[href*="github.com/Wrecless/python-quest"]').count(),0,'Do not link private source repositories');
 assert.match(await page.locator('#projects').innerText(),/prototype/i);
 console.log('PASS: five current projects, newest first, accurate prototype status, no private-source links');
 const software = page.getByRole('link',{name:'Software CV',exact:true});
 const teaching = page.getByRole('link',{name:'Teaching CV',exact:true});
 assert.equal(await software.count(),1,'Provide role-specific CV downloads');
 assert.equal(await teaching.count(),1);
 assert.equal(await software.getAttribute('href'),'/Bruno-Mata-Software-CV.pdf');
 const box=await software.boundingBox();
 assert.ok(box.y+box.height<=844,'Software CV must be fully visible without scrolling on a phone');
 assert.doesNotMatch(await page.locator('#hero').innerText(),/PORTFOLIO · 2025|CS Educator & Head of Department/);
 assert.match(await page.locator('#about').innerText(),/Chilwell School since July 2026/,'Show the confirmed start of the current position');
 for (const filename of ['Bruno-Mata-Software-CV.pdf','Bruno-Mata-Teaching-CV.pdf','Profile.pdf']) {
  const download = await page.request.get(base+'/'+filename);
  assert.equal(download.status(),200,`CV download: ${filename}`);
  assert.match(download.headers()['content-type'],/^application\/pdf\b/);
  assert.deepEqual(await download.body(),await readFile(new URL('../public/'+filename,import.meta.url)),`Published CV must match the verified artifact: ${filename}`);
 }
 assert.deepEqual(await readFile(new URL('../public/Profile.pdf',import.meta.url)),await readFile(new URL('../public/Bruno-Mata-Software-CV.pdf',import.meta.url)),'Legacy CV must match the software CV');
 assert.match(await page.locator('footer').innerText(),/All rights reserved/);
 console.log('PASS: current career dates, matching CV downloads, rights notice and mobile-visible CV buttons');
 for (const path of ['/','/more-projects']) {
  for (const width of [390,1366]) {
   await page.setViewportSize({width,height:width===390?844:900});
   await page.goto(base+path,{waitUntil:'networkidle'});
   await page.waitForTimeout(1200);
   for (const section of await page.locator('main > section').all()) { await section.scrollIntoViewIfNeeded(); await page.waitForTimeout(700); }
   const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   assert.deepEqual(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.failureSummary)})),[],`Accessibility ${path} at ${width}px`);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  }
 }
 console.log('PASS: automated WCAG checks and no overflow on both pages at phone/desktop widths');
 await page.goto(base,{waitUntil:'networkidle'});
 assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://brunomata.vercel.app');
 assert.doesNotMatch(await page.locator('meta[name="description"]').getAttribute('content'),/Head of Department/);
 assert.equal(await page.locator('#contact form').getAttribute('method'),'post','No personal data in GET URLs before hydration');
 for (const path of ['/robots.txt','/sitemap.xml']) assert.equal((await page.request.get(base+path)).status(),200);
 for (const path of ['/api/contact','/api/send-email']) {
  const missing=await page.request.post(base+path,{data:{}}); assert.equal(missing.status(),400);
  const invalid=await page.request.post(base+path,{data:'invalid-json',headers:{'Content-Type':'application/json'}}); assert.equal(invalid.status(),400);
 }
 console.log('PASS: canonical, accurate metadata, crawl files, POST form and safe malformed-request handling');
 assert.match(await page.locator('#skills').innerText(),/Ollama/);
 assert.match(await page.locator('#skills').innerText(),/Vitest/);
 assert.match(await page.locator('#achievements').innerText(),/Public project demos/);
 assert.doesNotMatch(await readFile(new URL('../app/opengraph-image.tsx',import.meta.url),'utf8'),/Head of Department/,'Social preview must not imply a current leadership appointment');
 console.log('PASS: evidenced testing/local-AI skills and accurate demo status');
} finally { await browser.close(); }
