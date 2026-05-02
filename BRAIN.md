# Eat Me First — Company Brain
## Last Updated: 2026-05-02
## Owner: Vagish Kapila (vaakapila@gmail.com) — Varshyl Inc

---

## Product Overview

**Eat Me First** is a premium heritage Indian wellness brand selling fermented beverages and ancestral snacks. Founded by two Indian women in their 50s using family recipes refined over generations.

- **Website**: TBD (needs real domain from founders)
- **Stack**: Vite 6 + React 19 + TypeScript + Tailwind v4 + Framer Motion
- **Repo**: TBD — needs GitHub repo creation (varshyl-inc/eat-me-first)
- **Hosting**: TBD — needs Railway project creation
- **Status**: V1 codebase built, NOT YET DEPLOYED

---

## Brand Identity

### Positioning
Premium heritage Indian wellness, warm and confident, NOT luxury fragrance cosplay.
Reference brands: Sakara, Vahdam, Pukka, Recess.

### CRITICAL BRAND GUARDRAILS
- NO Japanese kanji characters — "Kanji" here = North Indian fermented black-carrot probiotic drink
- NO parody luxury copy ("Vessel of Contact", "Submit Inward", "Solar Cycle")
- NO pricing above $20/unit (product range: $8–15/bottle, $42–60/case)
- NO: Tom Ford, Aesop, Le Labo, Dior fragrance aesthetic

### Colors
- Surface: #121412 (dark charcoal)
- Primary: #ffb3b6 (beetroot red)
- Secondary: #e9c349 (heirloom gold)
- Tertiary: #b8cbbc (forest sage)
- On-surface: #e3e2df
- On-surface-variant: #dbc0c0

### Typography
- Display: Noto Serif (400, 400-italic, 700)
- Body/UI: Manrope (300, 400, 500, 600, 700, 800)

### Design System Name
"Cinematic Vitality" — dark surfaces, warm accents, generous whitespace

---

## Products (V1)

| Slug | Name | Price | Case | Eyebrow |
|---|---|---|---|---|
| kanji | Kanji on My Mind | $14/bottle | 4 for $58 | NOOTROPIC RITUAL · NO. 01 |
| lemon | Lemon Got Spice | $12/bottle | 4 for $48 | METABOLIC FIRE · NO. 02 |
| masala | Craving the Masala | $9/bag | 6 for $42 | CELLULAR GROUNDING · NO. 03 |

---

## V1 Scope — BUILT (2026-05-02)

### Pages Built
- `/` — Home (Hero, Manifesto, Product Trio, Benefit Row, Quote, Lifestyle Split, CTA)
- `/products/:slug` — Product Detail (Hero Split, 4-Pillar Grid, Story, Trust, CTA)
- `/collection` — Collection (Header, Grid, Quote, Provenance, CTA)
- `/our-story` — Intentional placeholder (not "coming soon")
- `/contact` — Intentional placeholder with form skeleton
- `*` — 404 Not Found

### Components Built
- Navbar (sticky, glassmorphic, active link underline, mobile hamburger)
- MobileMenu (Framer Motion slide-in drawer, focus-trapped)
- Footer (4-col, newsletter, social, legal)
- RootLayout (Outlet pattern, scroll-to-top on route change)
- Button (5 variants: primary, secondary, ivory, ghost, gold)
- Dialog (shadcn-style, ATC coming-soon modal)
- All page sections with Framer Motion animations

### ATC Modal
"We launch in spring 2026. Drop your email and we'll save you the first batch."
Backend: console.log for now — wire to Klaviyo/Resend in v3

---

## V2 Backlog (Vagish to prioritize)

- [ ] Real domain from founders (connect to Railway)
- [ ] Real founder photos and bios for Our Story page
- [ ] Real product photos (Nano Banana 2 prompts prepared, see Image Manifest below)
- [ ] Confirm final product names with sister
- [ ] Shopify Storefront API integration (real checkout)
- [ ] Klaviyo/Resend for newsletter and ATC email capture
- [ ] Real Contact form backend (email routing)
- [ ] Journal/blog section
- [ ] Press kit
- [ ] Instagram embeds
- [ ] Mobile PWA manifest

---

## Image Manifest (for Nano Banana 2 / professional shoot)

All prompts should include: "no Japanese characters, no kanji script, Latin letters only on labels, premium heritage Indian wellness aesthetic like Sakara or Vahdam, NOT luxury fragrance"

1. `home-hero.webp` (1920x1080) — Dark studio bottle shot, ruby red kanji, condensation, beetroot rim light
2. `home-lifestyle-morning.webp` (1200x1500) — Morning kitchen, single ceramic cup, linen curtains
3. `home-lifestyle-pour.webp` (1200x1500) — Hand pouring kanji into tumbler, cinematic warm light
4. `product-kanji.webp` (1200x1500) — Kanji bottle product shot, Latin label only
5. `product-lemon.webp` (1200x1500) — Lemon tonic product shot
6. `product-masala.webp` (1200x1500) — Masala makhana jar product shot
7. `story-kanji.webp` (1200x1200) — Black carrots, mustard seeds, terracotta still life
8. `story-lemon.webp` (1200x1200) — Lemons, turmeric, ginger still life
9. `story-masala.webp` (1200x1200) — Makhana, spices, brass bowl still life
10. `collection-provenance.webp` (1600x1200) — Indian heritage kitchen at dawn
11. `collection-texture.webp` (800x800) — Macro fermented carrots in jar
12. `story-lifestyle.webp` (1600x900) — Two women's hands (50s, Indian) preparing food, no faces

---

## Infrastructure Setup (TODO — Vagish)

### GitHub Repo
- Create: `varshyl-inc/eat-me-first` (private)
- Add Claude-Cowork-Push PAT to allow Claude to push

### Railway
- Create project: "eat-me-first"
- Two services: production (main branch) + staging (staging branch)
- Add VITE_APP_URL and NODE_ENV env vars

### DNS
- Point real domain to Railway after founders confirm it

---

## Decisions Log

| Date | Decision |
|---|---|
| 2026-05-02 | V1 codebase scaffolded with Cinematic Vitality design system |
| 2026-05-02 | ATC modal shows "spring 2026 launch" — update when ready |
| 2026-05-02 | All 3 products confirmed: kanji ($14), lemon ($12), masala ($9) |
| 2026-05-02 | Brand guardrail enforced: NO Japanese/kanji script anywhere |
| 2026-05-02 | Image placeholders used — real images needed before launch |

---

## Vagish Confirms Later

- [ ] Real product names (final with sister)
- [ ] Domain name decision
- [ ] Founder names (for Our Story page)
- [ ] Real contact email addresses (hello@?, wholesale@?, press@?)
- [ ] Launch date (ATC modal copy references "spring 2026")
