# Eat Me First

Premium heritage Indian wellness brand. Family recipes. Modern science. Made by two women who refused to compromise.

## Stack

- **Frontend**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` block)
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **Validation**: Zod
- **Components**: shadcn/ui-style primitives

## Design System

**Cinematic Vitality** — dark surfaces (#121412), beetroot red primary (#ffb3b6), heirloom gold accents (#e9c349).

Fonts: Noto Serif (display) + Manrope (body), loaded via @fontsource.

## Dev Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/products/kanji` | Product: Kanji on My Mind |
| `/products/lemon` | Product: Lemon Got Spice |
| `/products/masala` | Product: Craving the Masala |
| `/collection` | Collection |
| `/our-story` | Our Story (placeholder) |
| `/contact` | Contact (placeholder) |

## Products

- **Kanji on My Mind** — $14/bottle, 4 for $58. Fermented black carrot probiotic.
- **Lemon Got Spice** — $12/bottle, 4 for $48. Ginger turmeric tonic.
- **Craving the Masala** — $9/bag, 6 for $42. Masala makhana snack.

## Brand Guardrail

"Kanji" = North Indian fermented black-carrot drink, NOT Japanese script.
Never add Japanese/kanji characters to this codebase.

## Deployment

Hosted on Railway. Auto-deploys from `main` (production) and `staging` branches.

See `BRAIN.md` for infrastructure setup steps.
