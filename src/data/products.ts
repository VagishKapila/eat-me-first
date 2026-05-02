import { z } from 'zod'
import type { Product, ProductsMap } from '@/types'

const PillarSchema = z.object({
  icon: z.string(),
  title: z.string(),
  body: z.string(),
})

const ProductSchema = z.object({
  slug: z.string(),
  eyebrow: z.string(),
  name: z.string(),
  price: z.number().positive(),
  caseSize: z.number().positive(),
  casePrice: z.number().positive(),
  tagline: z.string(),
  pillars: z.array(PillarSchema).length(4),
  badges: z.array(z.string()),
  storyTitle: z.string(),
  storyBody: z.string(),
  heroImage: z.string(),
  storyImage: z.string(),
  accentColor: z.string(),
})

const ProductsMapSchema = z.record(z.string(), ProductSchema)

const rawProducts: ProductsMap = {
  kanji: {
    slug: 'kanji',
    eyebrow: 'NOOTROPIC RITUAL · NO. 01',
    name: 'Kanji on My Mind',
    price: 14,
    caseSize: 4,
    casePrice: 58,
    tagline: 'Living ferments. Ancient roots. A quiet revolution in a single pour.',
    pillars: [
      {
        icon: 'Brain',
        title: 'GUT HARMONY',
        body: 'Live wild ferments rebuild the seat of intuition, restoring the ancient dialogue between gut and mind.',
      },
      {
        icon: 'Sun',
        title: 'CELLULAR ENERGY',
        body: 'Slow-release vitality without the caffeine spike. Sustained clarity from root to crown.',
      },
      {
        icon: 'Shield',
        title: 'IMMUNE SHIELD',
        body: 'Ancestral roots, distilled into a daily defense. Black carrots carry centuries of protective wisdom.',
      },
      {
        icon: 'Moon',
        title: 'COGNITIVE CALM',
        body: 'Adaptogens tuned to the rhythm of your day. Clarity without edge. Focus without noise.',
      },
    ],
    badges: ['LIVE FERMENTS', 'ANCESTRAL ROOTS', 'COLD-PRESSED'],
    storyTitle: 'A dialogue between the kitchen and the body.',
    storyBody:
      'Kanji is the winter ritual our grandmothers refused to let die. Black carrots, mustard, sea salt, and time. We bottled the patience of generations — a ferment that asks nothing of you except presence.',
    heroImage: '/images/product-kanji.webp',
    storyImage: '/images/story-kanji.webp',
    accentColor: '#ffb3b6',
  },
  lemon: {
    slug: 'lemon',
    eyebrow: 'METABOLIC FIRE · NO. 02',
    name: 'Lemon Got Spice',
    price: 12,
    caseSize: 4,
    casePrice: 48,
    tagline: 'Wild ginger, turmeric, and a citrus snap that wakes the system.',
    pillars: [
      {
        icon: 'Flame',
        title: 'METABOLIC FIRE',
        body: 'Wild ginger activates thermogenesis from the inside out. Your body remembers this warmth.',
      },
      {
        icon: 'Zap',
        title: 'ANTI-INFLAMMATORY',
        body: 'Turmeric and black pepper, an ancient pair refined by science. Curcumin, delivered right.',
      },
      {
        icon: 'Droplets',
        title: 'ALKALINE BALANCE',
        body: 'Despite its citrus bite, this formula tilts your system alkaline. Precision in every pour.',
      },
      {
        icon: 'Wind',
        title: 'DIGESTIVE EASE',
        body: 'Lemon and ginger have soothed digestion for thousands of years. We have not improved on tradition.',
      },
    ],
    badges: ['WILD-PRESSED', 'TURMERIC & GINGER', 'ZERO SUGAR'],
    storyTitle: 'The morning ritual that needs no explanation.',
    storyBody:
      'Every culture has its morning ritual of fire and citrus. Ours begins with the oldest lemon orchards in the family memory, wild-foraged ginger, and turmeric that stains your hands bright as sunrise. No shortcuts. No extracts. Just the real thing.',
    heroImage: '/images/product-lemon.webp',
    storyImage: '/images/story-lemon.webp',
    accentColor: '#e9c349',
  },
  masala: {
    slug: 'masala',
    eyebrow: 'CELLULAR GROUNDING · NO. 03',
    name: 'Craving the Masala',
    price: 9,
    caseSize: 6,
    casePrice: 42,
    tagline: 'Crisp makhana toasted with rare dark spices. The ancient snack, perfected.',
    pillars: [
      {
        icon: 'Leaf',
        title: 'GROUNDING MINERALS',
        body: 'Makhana is dense with magnesium and phosphorus. The earth\'s quieting minerals, delivered as a snack.',
      },
      {
        icon: 'Heart',
        title: 'ADAPTOGENIC SPICE',
        body: 'Ashwagandha and black cardamom in every handful. Stress adaptation woven into the recipe.',
      },
      {
        icon: 'Sparkles',
        title: 'PROTEIN DENSITY',
        body: 'More protein per gram than most nuts. Sustaining, not spiking. The original slow-burn snack.',
      },
      {
        icon: 'Anchor',
        title: 'ANCESTRAL FORMULA',
        body: 'This masala blend predates written recipes. We traced it to its source and refused to modernize it.',
      },
    ],
    badges: ['MAKHANA + ASHWAGANDHA', 'DARK SPICE BLEND', 'SMALL BATCH'],
    storyTitle: 'Some recipes are not invented. They are remembered.',
    storyBody:
      'Makhana appeared on temple altars before it appeared on menus. Our masala was ground by hand in the family kitchen for forty years before we asked permission to share it. The answer was yes — but only if we got it exactly right.',
    heroImage: '/images/product-masala.webp',
    storyImage: '/images/story-masala.webp',
    accentColor: '#b8cbbc',
  },
}

// Validate at module load — throws immediately if data is malformed
ProductsMapSchema.parse(rawProducts)

export const products: ProductsMap = rawProducts

export function getProduct(slug: string): Product | undefined {
  return products[slug]
}

export const productSlugs = Object.keys(products) as (keyof typeof products)[]
