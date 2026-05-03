# Eat Me First — Ship Reports

---

## Session 0 — 2026-05-02 — V1 Scaffold (dark theme)

### Status
- Code: ✅ COMPLETE
- GitHub: ✅ https://github.com/VagishKapila/eat-me-first
- Staging URL: ✅ https://web-staging-4dbc.up.railway.app — HTTP 200
- Layer 9: ✅ 24/24 PASS

---

## Session 1 — 2026-05-03 — V4 Rebuild (cream/maroon/pink)

### What Was Rebuilt
Full V4 redesign from Vagish's approved v4.jsx prototype. New brand, new products,
real photos, 19 routes.

### Design System
- Cream #FFF8EE background (replaces dark #121412)
- Maroon #7A1F2B · Rose #E94B5C · Pink #FF3D7F brand palette
- Bricolage Grotesque + Instrument Serif + Caveat fonts
- Tailwind v4 @theme block (CSS-first)

### Photos
- 7 real product/lifestyle photos processed via Pillow
- 3 widths (480/960/1440) × 2 formats (jpg/webp) = 42 images in public/images/
- Sattu triptych cropped to left panel (760×1024)

### Routes (19 + 404)
| Route | Page |
|-------|------|
| / | Home (8 sections) |
| /products/:slug | ProductDetail |
| /collections/:type | Collection |
| /our-story | OurStory |
| /the-recipes | TheRecipes |
| /where-we-source | WhereWeSource |
| /why-ferment | WhyFerment |
| /press | Press |
| /contact | Contact (localStorage) |
| /shipping | Shipping |
| /subscriptions | Subscriptions |
| /faq | FAQ |
| /wholesale | Wholesale (localStorage) |
| * | NotFound |

### Build
- tsc -b: ✅ exit 0
- vite build: ✅ exit 0, 1.21s, 305KB main bundle

### Still Needed
1. Stripe payment links (placeholders in src/data/checkout.ts)
2. Real founder names for OurStory copy
3. Domain + Railway production env
4. Email backend for contact/wholesale forms
5. Layer 9 v4 tests (25 tests T01–T25)
