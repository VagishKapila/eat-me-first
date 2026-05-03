# Eat Me First — Ship Reports

---

## Session 0 — 2026-05-02 — V1 Scaffold

### What Was Built
Full V1 codebase for Eat Me First marketing site. All pages scaffolded with Cinematic Vitality design system, Framer Motion animations, TypeScript strict, Tailwind v4.

### Files Created
- `package.json`, `vite.config.ts`, `tsconfig.app.json`, `index.html`
- `src/styles/globals.css` — Cinematic Vitality design tokens
- `src/main.tsx`, `src/App.tsx`
- `src/lib/utils.ts`
- `src/types/index.ts`, `src/data/products.ts`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/RootLayout.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/dialog.tsx`
- `src/pages/Home.tsx`
- `src/pages/ProductDetail.tsx`
- `src/pages/Collection.tsx`
- `src/pages/OurStory.tsx`
- `src/pages/Contact.tsx`
- `src/pages/NotFound.tsx`
- `BRAIN.md`, `SHIP_REPORT.md`, `README.md`

### Status
- Code: ✅ COMPLETE + all 5 TS build errors fixed
- GitHub: ✅ https://github.com/VagishKapila/eat-me-first
- Railway project: ✅ `eat-me-first` (ID: e3df2665)
- Staging URL: ✅ https://web-staging-4dbc.up.railway.app — HTTP 200
- Build: ✅ tsc -b exit 0 · vite build exit 0 (2037 modules, 2.20s)
- Layer 9: ✅ 24/24 PASS — evidence in `tests/layer9-evidence/v1-staging/`
- Images: ⚠️ PLACEHOLDER — real Nano Banana 2 images needed before launch

---

## Session 1 — 2026-05-02 — Deploy + Layer 9

### Infrastructure Delivered
| Item | Value |
|------|-------|
| GitHub repo | `VagishKapila/eat-me-first` |
| Railway project ID | `e3df2665-22de-4f20-88b1-56589babb852` |
| Staging env ID | `40c36b75-d899-41de-ae23-017b150b183c` |
| Service ID | `ffe8d22c-3383-48c2-90da-f38611652cd9` |
| **Staging URL** | **https://web-staging-4dbc.up.railway.app** |
| GitHub branch → Railway | `staging` → auto-deploy on push |

### Build Fixes Applied
1. `vite.config.ts` — replaced `path`/`__dirname` with `node:url` `fileURLToPath` (ESM-safe)
2. `package.json` — added `@types/node` devDependency
3. `tsconfig.node.json` — added `"types": ["node"]`
4. `Home.tsx` — Button variant `"outline"` → `"ghost"`, `products.slice` → `Object.values(products).slice`, typed map params
5. `ProductDetail.tsx` — `product.caseCount` → `product.caseSize`
6. `vite.config.ts` — `preview.allowedHosts: true` (Vite 6 blocks Railway subdomains without this)

### Layer 9 Results — 24/24 PASS
```
T01 ✅ HTTP 200              T13 ✅ 404 page renders
T02 ✅ title="Eat Me First"  T14 ✅ bg rgb(18,20,18)
T03 ✅ wordmark in header    T15 ✅ Noto Serif loaded
T04 ✅ hero height=720px     T16 ✅ price $14 on kanji
T05 ✅ 6 product links       T17 ✅ ATC button present
T06 ✅ NO CJK characters     T18 ✅ footer renders
T07 ✅ /collection 200       T19 ✅ no broken data
T08 ✅ H1="Kanji on My Mind" T20 ✅ no CJK on lemon
T09 ✅ H1="Lemon Got Spice"  T21 ✅ price $9 on masala
T10 ✅ H1="Craving the…"    T22 ✅ image alts clean
T11 ✅ /our-story 200        T23 ✅ mobile 390px no overflow
T12 ✅ /contact 200          T24 ✅ all 3 products on /collection
```

### What Still Needs Doing Before Launch
1. **Images** — 17 real product/lifestyle images (Nano Banana 2 prompts in BRAIN.md)
2. **Our Story** — full copy from founders (names, origin story, philosophy)
3. **Domain** — connect custom domain to Railway production env
4. **Production deploy** — merge staging → main, provision Railway production URL
5. **Email** — wire newsletter form to real email provider
6. **Stripe** — add product checkout links (or Shopify integration)

### Open Questions for Vagish
- Real product names confirmed with sister?
- Domain name decided?
- Founder names / origin city for Our Story copy?

---

## Session 2 — 2026-05-03 — V4 Complete Rebuild

### What Changed (V1 → V4)
Full brand reset. V1 dark theme nuked. V4 is cream/maroon/pink with real photos.

| Item | V1 | V4 |
|------|----|----|
| Brand palette | Dark #121412 + green neon | Cream #FFF8EE + Maroon #7A1F2B + Pink #FF3D7F |
| Fonts | Noto Serif + Satoshi | Bricolage Grotesque + Instrument Serif + Caveat |
| Products | lemon, masala, kanji | kanji, sattu, makhana |
| Images | Placeholder SVG | 7 real photos → 42 optimised (3×sizes × 2×formats) |
| Routes | 6 | 19 (ZERO broken links) |
| Pages | 6 | 14 |
| Checkout | None | Stripe placeholder links wired via checkout.ts |
| Animations | Framer Motion | IntersectionObserver Reveal + CSS keyframes |
| Image processing | None | Python Pillow → 480/960/1440px + webp |

### Key Files (V4)
- `src/styles/globals.css` — Tailwind v4 `@theme` block, Google Fonts CDN
- `src/data/products.ts` — Zod-validated, 3 SKUs (kanji/sattu/makhana)
- `src/data/checkout.ts` — Stripe placeholder links (fill in real URLs before launch)
- `src/hooks/useTilt.ts` — 3D mouse-tracking tilt for hero bottle
- `src/components/ui/Reveal.tsx` — IntersectionObserver scroll reveal
- `src/components/ui/Sticker.tsx` — Rotating pill badge
- `src/components/ui/BuyModal.tsx` — Single/case toggle + qty picker → Stripe
- `src/App.tsx` — 19 routes, all lazy-loaded with `<Suspense>`
- `tests/layer9-v4.cjs` — 25 Layer 9 tests (headless Chromium)

### Layer 9 Results — 25/25 PASS
```
T01 ✅ HTTP 200 /                    T14 ✅ /contact 200
T02 ✅ title="Eat Me First…"         T15 ✅ /faq 200
T03 ✅ body bg=cream rgb(255,248,238) T16 ✅ /why-ferment 200
T04 ✅ H1="Snack smart.Sip smarter." T17 ✅ /shipping 200
T05 ✅ wordmark in nav               T18 ✅ /wholesale 200
T06 ✅ 3 products on homepage        T19 ✅ 404 page renders
T07 ✅ /products/kanji 200           T20 ✅ kanji img loaded 640px
T08 ✅ /products/sattu 200           T21 ✅ no old v1 products
T09 ✅ /products/makhana 200         T22 ✅ v4 brand colors in bundle
T10 ✅ /collections/all 200          T23 ✅ mobile 390px no overflow
T11 ✅ /collections/drinks 200       T24 ✅ footer 18 links
T12 ✅ /collections/snacks 200       T25 ✅ /collections/bundles 200
T13 ✅ /our-story + "sisters"
```
Evidence: `tests/layer9-evidence/v4-staging/` (8 screenshots + results.json)

### Infrastructure
| Item | Value |
|------|-------|
| GitHub | https://github.com/VagishKapila/eat-me-first (`staging` branch) |
| Staging URL | **https://web-staging-4dbc.up.railway.app** — HTTP 200 |
| Railway auto-deploy | `staging` branch → Railway staging env |
| Build | tsc exit 0 · vite build exit 0 (305KB bundle) |

### What Still Needs Doing Before Launch
1. **Stripe** — fill in real checkout URLs in `src/data/checkout.ts` (6 links: 3 products × single/case)
2. **Our Story copy** — real founder names + origin city (currently "two sisters" placeholder)
3. **Contact / Wholesale forms** — wire to real email backend (currently `localStorage`)
4. **Newsletter** — wire AlertOverlay email capture to Mailchimp / Klaviyo
5. **Domain** — connect custom domain to Railway production env
6. **Production deploy** — merge `staging` → `main`, provision Railway production URL

### Open Questions for Vagish
- Stripe account connected? (need live checkout URLs for each product × size)
- Founder names for Our Story page?
- Domain decided for production?
- Email backend preference for contact/wholesale forms?
