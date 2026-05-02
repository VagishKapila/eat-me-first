const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

const BASE = 'https://web-staging-4dbc.up.railway.app'
const EVIDENCE_DIR = '/dev/shm/layer9/evidence'
fs.mkdirSync(EVIDENCE_DIR, { recursive: true })

const results = []
let browser, ctx, page

function pass(id, detail) {
  results.push({ id, status: 'PASS', detail })
  console.log(`✅ ${id} PASS — ${detail}`)
}
function fail(id, detail) {
  results.push({ id, status: 'FAIL', detail })
  console.error(`❌ ${id} FAIL — ${detail}`)
}

async function screenshot(name) {
  const f = path.join(EVIDENCE_DIR, `${name}.png`)
  await page.screenshot({ path: f, fullPage: false })
  return f
}

async function run() {
  browser = await chromium.launch({ headless: true })
  ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  page = await ctx.newPage()

  // T01 — homepage loads HTTP 200
  try {
    const r = await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 })
    const status = r.status()
    await screenshot('T01-homepage')
    status === 200 ? pass('T01', `HTTP ${status}`) : fail('T01', `HTTP ${status}`)
  } catch(e) { fail('T01', e.message) }

  // T02 — <title> contains "Eat Me First"
  try {
    const title = await page.title()
    title.includes('Eat Me First') ? pass('T02', `title="${title}"`) : fail('T02', `title="${title}"`)
  } catch(e) { fail('T02', e.message) }

  // T03 — brand wordmark visible in header (lives in <header>, not inside <nav>)
  try {
    const headerText = await page.locator('header').first().innerText().catch(async () => page.locator('body').innerText())
    headerText.toUpperCase().includes('EAT ME FIRST') ? pass('T03', 'wordmark found in header') : fail('T03', `header text: ${headerText.substring(0,80)}`)
  } catch(e) { fail('T03', e.message) }

  // T04 — hero section renders (min-height ≥ 300px)
  try {
    const hero = await page.locator('section').first()
    const box = await hero.boundingBox()
    box && box.height >= 300 ? pass('T04', `hero height=${box.height}px`) : fail('T04', `hero height=${box?.height}`)
  } catch(e) { fail('T04', e.message) }

  // T05 — at least one product card rendered on homepage
  try {
    // product cards have card-gold-top class or link to /products/
    const cards = await page.locator('a[href*="/products/"]').count()
    cards > 0 ? pass('T05', `${cards} product links found`) : fail('T05', 'no product links')
  } catch(e) { fail('T05', e.message) }

  // T06 — NO Japanese/CJK characters rendered anywhere on homepage
  try {
    const body = await page.locator('body').innerText()
    const cjk = /[　-〿぀-ゟ゠-ヿ一-鿿가-힯]/.test(body)
    !cjk ? pass('T06', 'no CJK characters found') : fail('T06', 'CJK characters detected in page text')
  } catch(e) { fail('T06', e.message) }

  // T07 — collection page loads
  try {
    const r = await page.goto(`${BASE}/collection`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    await screenshot('T07-collection')
    r.status() === 200 ? pass('T07', `HTTP ${r.status()} /collection`) : fail('T07', `HTTP ${r.status()}`)
  } catch(e) { fail('T07', e.message) }

  // T08 — /products/kanji loads with product name
  try {
    const r = await page.goto(`${BASE}/products/kanji`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const h1 = await page.locator('h1').first().innerText().catch(() => '')
    await screenshot('T08-product-kanji')
    r.status() === 200 && h1.toLowerCase().includes('kanji') 
      ? pass('T08', `H1="${h1}"`) 
      : fail('T08', `HTTP ${r.status()} H1="${h1}"`)
  } catch(e) { fail('T08', e.message) }

  // T09 — /products/lemon loads
  try {
    const r = await page.goto(`${BASE}/products/lemon`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const h1 = await page.locator('h1').first().innerText().catch(() => '')
    r.status() === 200 && h1.toLowerCase().includes('lemon')
      ? pass('T09', `H1="${h1}"`) 
      : fail('T09', `HTTP ${r.status()} H1="${h1}"`)
  } catch(e) { fail('T09', e.message) }

  // T10 — /products/masala loads
  try {
    const r = await page.goto(`${BASE}/products/masala`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const h1 = await page.locator('h1').first().innerText().catch(() => '')
    r.status() === 200 && h1.toLowerCase().includes('masala')
      ? pass('T10', `H1="${h1}"`) 
      : fail('T10', `HTTP ${r.status()} H1="${h1}"`)
  } catch(e) { fail('T10', e.message) }

  // T11 — /our-story loads
  try {
    const r = await page.goto(`${BASE}/our-story`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    r.status() === 200 ? pass('T11', `HTTP ${r.status()} /our-story`) : fail('T11', `HTTP ${r.status()}`)
  } catch(e) { fail('T11', e.message) }

  // T12 — /contact loads
  try {
    const r = await page.goto(`${BASE}/contact`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    r.status() === 200 ? pass('T12', `HTTP ${r.status()} /contact`) : fail('T12', `HTTP ${r.status()}`)
  } catch(e) { fail('T12', e.message) }

  // T13 — 404 page for unknown route (not a server error)
  try {
    const r = await page.goto(`${BASE}/does-not-exist`, { waitUntil: 'networkidle', timeout: 20000 })
    const body = await page.locator('body').innerText()
    const shows404 = body.includes("doesn't exist") || body.includes("ritual") || body.includes("404") || body.includes("not found")
    // SPA catches unknown routes and renders NotFound, HTTP will be 200
    shows404 ? pass('T13', '404 page rendered for unknown route') : fail('T13', `body: ${body.substring(0,100)}`)
  } catch(e) { fail('T13', e.message) }

  // T14 — surface background color applied (dark theme #121412)
  try {
    await page.goto(`${BASE}`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    // rgb(18, 20, 18) = #121412
    const isDark = bg.includes('18, 20, 18') || bg.includes('18,20,18') || bg.includes('121412')
    await screenshot('T14-dark-bg')
    isDark ? pass('T14', `body bg="${bg}"`) : fail('T14', `body bg="${bg}" (expected rgb(18,20,18))`)
  } catch(e) { fail('T14', e.message) }

  // T15 — Noto Serif font loaded (check font-face in document)
  try {
    const hasFontFace = await page.evaluate(() => {
      const sheets = [...document.styleSheets]
      for (const sheet of sheets) {
        try {
          const rules = [...sheet.cssRules]
          for (const rule of rules) {
            if (rule instanceof CSSFontFaceRule && rule.cssText.includes('Noto Serif')) return true
          }
        } catch(e) {}
      }
      return false
    })
    hasFontFace ? pass('T15', 'Noto Serif @font-face found in document') : fail('T15', 'Noto Serif @font-face not found')
  } catch(e) { fail('T15', e.message) }

  // T16 — product price visible on kanji page ($14)
  try {
    await page.goto(`${BASE}/products/kanji`, { waitUntil: 'networkidle', timeout: 20000 })
    const body = await page.locator('body').innerText()
    const hasPrice = body.includes('$14') || body.includes('14.00')
    hasPrice ? pass('T16', `price found — body snippet: ${body.substring(body.indexOf('14')-2, body.indexOf('14')+10)}`) : fail('T16', `price $14 not found — body[0:200]: ${body.substring(0,200)}`)
  } catch(e) { fail('T16', e.message) }

  // T17 — Add to Cart dialog exists on product page
  try {
    await page.waitForSelector('button', { timeout: 10000 })
    const btns = await page.locator('button').allInnerTexts()
    const hasATC = btns.some(t => /add|collection|cart|ritual|reserve/i.test(t))
    hasATC ? pass('T17', `ATC button: "${btns.find(t => /add|collection|cart|ritual|reserve/i.test(t))}"`) : fail('T17', `buttons: ${btns.slice(0,5).join(', ')}`)
  } catch(e) { fail('T17', e.message) }

  // T18 — footer renders with brand copy
  try {
    await page.goto(`${BASE}`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const footer = await page.locator('footer').first().innerText().catch(() => '')
    const hasFooter = footer.length > 20
    await screenshot('T18-footer')
    hasFooter ? pass('T18', `footer text length=${footer.length}`) : fail('T18', 'footer empty or not found')
  } catch(e) { fail('T18', e.message) }

  // T19 — no "undefined" / "null" / "[object Object]" in homepage rendered text
  try {
    const body = await page.locator('body').innerText()
    const broken = ['[object Object]', 'undefined', 'NaN'].filter(t => body.includes(t))
    broken.length === 0 ? pass('T19', 'no broken data renders') : fail('T19', `found: ${broken.join(', ')}`)
  } catch(e) { fail('T19', e.message) }

  // T20 — lemon product no CJK chars
  try {
    await page.goto(`${BASE}/products/lemon`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const body = await page.locator('body').innerText()
    const cjk = /[　-〿぀-ゟ゠-ヿ一-鿿가-힯]/.test(body)
    !cjk ? pass('T20', 'no CJK on lemon page') : fail('T20', 'CJK chars found on lemon page')
  } catch(e) { fail('T20', e.message) }

  // T21 — masala price $9 displayed
  try {
    await page.goto(`${BASE}/products/masala`, { waitUntil: 'networkidle', timeout: 20000 })
    const body = await page.locator('body').innerText()
    const hasPrice = body.includes('$9') || body.includes('9.00')
    hasPrice ? pass('T21', `price $9 found on masala page`) : fail('T21', `price not found — body: ${body.substring(0,150)}`)
  } catch(e) { fail('T21', e.message) }

  // T22 — product images alt text (no CJK in alt text — key brand guardrail)
  try {
    await page.goto(`${BASE}/products/kanji`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const imgs = await page.locator('img').all()
    const alts = []
    for (const img of imgs) {
      const alt = await img.getAttribute('alt') || ''
      alts.push(alt)
    }
    const cjkInAlt = alts.some(a => /[　-〿぀-ゟ゠-ヿ一-鿿]/.test(a))
    await screenshot('T22-product-images')
    !cjkInAlt ? pass('T22', `${imgs.length} imgs, alts: ${alts.slice(0,3).join(' | ')}`) : fail('T22', `CJK in alt text: ${alts.join(' | ')}`)
  } catch(e) { fail('T22', e.message) }

  // T23 — mobile viewport (390px) homepage renders without overflow
  try {
    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } })
    const mp = await mobile.newPage()
    await mp.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 20000 })
    const scrollWidth = await mp.evaluate(() => document.body.scrollWidth)
    await mp.screenshot({ path: path.join(EVIDENCE_DIR, 'T23-mobile.png') })
    await mobile.close()
    scrollWidth <= 400 ? pass('T23', `mobile scrollWidth=${scrollWidth}px (≤400)`) : fail('T23', `horizontal overflow: scrollWidth=${scrollWidth}px`)
  } catch(e) { fail('T23', e.message) }

  // T24 — collection page shows all 3 products
  try {
    await page.goto(`${BASE}/collection`, { waitUntil: 'networkidle', timeout: 20000 })
    const body = await page.locator('body').innerText()
    const hasKanji = body.toLowerCase().includes('kanji')
    const hasLemon = body.toLowerCase().includes('lemon')
    const hasMasala = body.toLowerCase().includes('masala')
    await screenshot('T24-collection-products')
    hasKanji && hasLemon && hasMasala
      ? pass('T24', 'all 3 products visible: kanji, lemon, masala')
      : fail('T24', `missing: ${[!hasKanji&&'kanji',!hasLemon&&'lemon',!hasMasala&&'masala'].filter(Boolean).join(', ')}`)
  } catch(e) { fail('T24', e.message) }

  await browser.close()

  // Write JSON evidence
  const summary = {
    run_at: new Date().toISOString(),
    url: BASE,
    total: results.length,
    passed: results.filter(r => r.status === 'PASS').length,
    failed: results.filter(r => r.status === 'FAIL').length,
    results
  }
  fs.writeFileSync(path.join(EVIDENCE_DIR, 'results.json'), JSON.stringify(summary, null, 2))
  
  console.log('\n' + '='.repeat(60))
  console.log(`Layer 9 Complete: ${summary.passed}/${summary.total} PASS`)
  if (summary.failed > 0) {
    console.log('FAILURES:')
    results.filter(r => r.status === 'FAIL').forEach(r => console.log(`  ${r.id}: ${r.detail}`))
  }
  console.log('='.repeat(60))
  
  process.exit(summary.failed > 0 ? 1 : 0)
}

run().catch(e => { console.error(e); process.exit(1) })
