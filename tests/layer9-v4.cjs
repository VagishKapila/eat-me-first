const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const BASE = 'https://web-staging-4dbc.up.railway.app';
const EVIDENCE = path.join(__dirname, 'layer9-evidence/v4-staging');
fs.mkdirSync(EVIDENCE, { recursive: true });

const HEADLESS_SHELL = '/dev/shm/pw-browsers/chromium_headless_shell-1217/chrome-linux/headless_shell';

const results = [];
let pass = 0, fail = 0;

function log(id, status, detail) {
  const icon = status === 'PASS' ? '✅' : '❌';
  console.log(`${icon} ${id} — ${detail}`);
  results.push({ id, status, detail });
  if (status === 'PASS') pass++; else fail++;
}

async function screenshot(page, name) {
  const file = path.join(EVIDENCE, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  return file;
}

(async () => {
  const browser = await chromium.launch({
    executablePath: HEADLESS_SHELL,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  const ctx = await browser.newContext();

  async function newPage() { return ctx.newPage(); }

  // ── T01  HTTP 200 homepage ──
  {
    const page = await newPage();
    const res = await page.goto(BASE, { waitUntil: 'domcontentloaded' });
    res?.status() === 200 ? log('T01','PASS',`HTTP 200 /`) : log('T01','FAIL',`HTTP ${res?.status()}`);
    await page.close();
  }

  // ── T02  <title> ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'domcontentloaded' });
    const t = await page.title();
    t.includes('Eat Me First') ? log('T02','PASS',`title="${t}"`) : log('T02','FAIL',`title="${t}"`);
    await page.close();
  }

  // ── T03  cream background #FFF8EE ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    (bg.includes('255, 248, 238') || bg.includes('255,248,238'))
      ? log('T03','PASS',`body bg="${bg}" ✓ cream`)
      : log('T03','FAIL',`body bg="${bg}" — expected rgb(255,248,238)`);
    await screenshot(page, 'T03-cream-bg');
    await page.close();
  }

  // ── T04  H1 "Snack smart" ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const h1 = await page.locator('h1').first().textContent().catch(() => '');
    (h1?.includes('Snack') || h1?.includes('snack'))
      ? log('T04','PASS',`H1="${h1?.trim().slice(0,60)}"`)
      : log('T04','FAIL',`H1="${h1?.trim().slice(0,60)}"`);
    await screenshot(page, 'T04-hero');
    await page.close();
  }

  // ── T05  wordmark in nav ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const nav = await page.locator('nav').first().textContent().catch(() => '');
    nav?.toLowerCase().includes('eat me')
      ? log('T05','PASS','Wordmark in nav')
      : log('T05','FAIL',`Nav text: "${nav?.slice(0,80)}"`);
    await page.close();
  }

  // ── T06  3 products on home ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const text = await page.content();
    const found = ['Kanji on My Mind','Sattu, but Sweet','Makhana'].filter(s => text.includes(s));
    found.length === 3
      ? log('T06','PASS',`3 products: ${found.join(', ')}`)
      : log('T06','FAIL',`Found: ${found.join(', ')}`);
    await screenshot(page, 'T06-products');
    await page.close();
  }

  // ── T07  /products/kanji 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/products/kanji`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T07','PASS','/products/kanji 200') : log('T07','FAIL',`${res?.status()}`);
    await screenshot(page, 'T07-kanji-pdp');
    await page.close();
  }

  // ── T08  /products/sattu 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/products/sattu`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T08','PASS','/products/sattu 200') : log('T08','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T09  /products/makhana 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/products/makhana`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T09','PASS','/products/makhana 200') : log('T09','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T10  /collections/all 200 + title ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/collections/all`, { waitUntil: 'networkidle' });
    const text = await page.content();
    res?.status()===200 && text.includes('Pantry')
      ? log('T10','PASS','/collections/all 200 + "Pantry"')
      : log('T10','FAIL',`status=${res?.status()} hasPantry=${text.includes('Pantry')}`);
    await screenshot(page, 'T10-collection-all');
    await page.close();
  }

  // ── T11  /collections/drinks 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/collections/drinks`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T11','PASS','/collections/drinks 200') : log('T11','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T12  /collections/snacks 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/collections/snacks`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T12','PASS','/collections/snacks 200') : log('T12','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T13  /our-story 200 + "sisters" ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/our-story`, { waitUntil: 'networkidle' });
    const text = await page.content();
    res?.status()===200 && (text.includes('sister') || text.includes('Sister'))
      ? log('T13','PASS','/our-story 200 + "sisters" in content')
      : log('T13','FAIL',`status=${res?.status()}`);
    await screenshot(page, 'T13-our-story');
    await page.close();
  }

  // ── T14  /contact 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T14','PASS','/contact 200') : log('T14','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T15  /faq 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/faq`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T15','PASS','/faq 200') : log('T15','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T16  /why-ferment 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/why-ferment`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T16','PASS','/why-ferment 200') : log('T16','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T17  /shipping 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/shipping`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T17','PASS','/shipping 200') : log('T17','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T18  /wholesale 200 ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/wholesale`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T18','PASS','/wholesale 200') : log('T18','FAIL',`${res?.status()}`);
    await page.close();
  }

  // ── T19  404 page renders ──
  {
    const page = await newPage();
    await page.goto(`${BASE}/this-does-not-exist`, { waitUntil: 'networkidle' });
    const text = await page.content();
    (text.includes('404') || text.includes('Empty jar'))
      ? log('T19','PASS','404 page renders')
      : log('T19','FAIL','No 404 content');
    await page.close();
  }

  // ── T20  kanji product image loads (naturalWidth > 0) ──
  {
    const page = await newPage();
    await page.goto(`${BASE}/products/kanji`, { waitUntil: 'networkidle' });
    const imgs = await page.locator('img').evaluateAll(els =>
      els.map(e => ({ src: e.src, complete: e.complete, w: e.naturalWidth }))
    );
    const kanji = imgs.find(i => i.src.includes('kanji'));
    kanji?.complete && kanji?.w > 0
      ? log('T20','PASS',`Kanji image loaded ${kanji.w}px`)
      : log('T20','FAIL',`Kanji img: ${JSON.stringify(kanji)}`);
    await page.close();
  }

  // ── T21  no v1 products (lemon/masala) ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const text = await page.content();
    const hasOld = text.includes('Lemon Got Spice') || text.includes('product-lemon') || text.includes('product-masala');
    !hasOld
      ? log('T21','PASS','No old v1 products')
      : log('T21','FAIL','Old product names present');
    await page.close();
  }

  // ── T22  v4 brand colors in bundle ──
  {
    const res = await fetch(`${BASE}/assets/index-RmviXv4_.js`);
    const js = await res.text();
    const hasColors = js.includes('E94B5C') || js.includes('7A1F2B') || js.includes('FF3D7F');
    hasColors
      ? log('T22','PASS','v4 brand colors in bundle')
      : log('T22','FAIL','v4 colors not in bundle');
  }

  // ── T23  mobile 390px no overflow ──
  {
    const page = await ctx.newPage();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > window.innerWidth
    );
    !overflow
      ? log('T23','PASS','No horizontal overflow at 390px')
      : log('T23','FAIL','Horizontal overflow on mobile');
    await screenshot(page, 'T23-mobile-390');
    await page.close();
  }

  // ── T24  footer has links ──
  {
    const page = await newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const n = await page.locator('footer a').count();
    n >= 8
      ? log('T24','PASS',`Footer has ${n} links`)
      : log('T24','FAIL',`Footer has ${n} links`);
    await screenshot(page, 'T24-footer');
    await page.close();
  }

  // ── T25  /collections/bundles renders ──
  {
    const page = await newPage();
    const res = await page.goto(`${BASE}/collections/bundles`, { waitUntil: 'networkidle' });
    res?.status()===200 ? log('T25','PASS','/collections/bundles 200') : log('T25','FAIL',`${res?.status()}`);
    await page.close();
  }

  await browser.close();

  const summary = { pass, fail, total: pass+fail, timestamp: new Date().toISOString(), url: BASE };
  fs.writeFileSync(path.join(EVIDENCE, 'results.json'), JSON.stringify({ summary, tests: results }, null, 2));

  console.log(`\n═══════════════════════════════`);
  console.log(`LAYER 9 V4: ${pass}/${pass+fail} PASS`);
  console.log(`═══════════════════════════════`);
  if (fail > 0) process.exit(1);
})();
