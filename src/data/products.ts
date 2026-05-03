import { z } from 'zod'
import type { Product } from '@/types'

const ProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  flavor: z.string(),
  pour: z.string(),
  body: z.string(),
  bgColor: z.string(),
  chipColor: z.string(),
  accent: z.string(),
  sticker: z.string(),
  price: z.number().positive(),
  casePrice: z.number().positive(),
  caseSize: z.number().int().positive(),
  photo: z.string(),
  imageSrc: z.string(),
  imageSrcSet: z.string().optional(),
})

const raw: Product[] = [
  {
    slug: 'kanji',
    name: 'Kanji on My Mind',
    flavor: "LET'S GET TANGY",
    pour: 'Black carrot · Beetroot · Ginger · Pink salt',
    body: "Real fermented kanji. The drink your dadi made before kombucha was cool.",
    bgColor: '#FFE3D5',
    chipColor: '#7A1F2B',
    accent: '#E94B5C',
    sticker: '🫶 GUT-LOVED',
    price: 14,
    casePrice: 58,
    caseSize: 4,
    photo: 'kanji_bottle',
    imageSrc: '/images/product-kanji-960.jpg',
    imageSrcSet: '/images/product-kanji-480.jpg 480w, /images/product-kanji-960.jpg 960w, /images/product-kanji-1440.jpg 1440w',
  },
  {
    slug: 'sattu',
    name: 'Sattu, but Sweet',
    flavor: 'SWEET ALWAYS',
    pour: 'Roasted gram · Jaggery · Cardamom',
    body: "Plant protein that doesn't taste like protein. Sweet enough to crave, real enough to count.",
    bgColor: '#E8E1FF',
    chipColor: '#3D2A6B',
    accent: '#7C4DFF',
    sticker: '✨ 12g PROTEIN',
    price: 12,
    casePrice: 48,
    caseSize: 4,
    photo: 'sattu_jar',
    imageSrc: '/images/product-sattu-960.jpg',
    imageSrcSet: '/images/product-sattu-480.jpg 480w, /images/product-sattu-960.jpg 960w, /images/product-sattu-1440.jpg 1440w',
  },
  {
    slug: 'makhana',
    name: 'Makhana — Pink Salt & Pepper',
    flavor: 'LIGHT. CRUNCHY. ADDICTIVE.',
    pour: 'Roasted fox nuts · Pink salt · Pepper',
    body: "Plant-based, gluten-free, never fried. The desk-snack that doesn't betray you at 3pm.",
    bgColor: '#FFE7C2',
    chipColor: '#7A4A1F',
    accent: '#FF8C42',
    sticker: '🌱 NEVER FRIED',
    price: 9,
    casePrice: 42,
    caseSize: 6,
    photo: 'makhana',
    imageSrc: '/images/product-makhana-960.jpg',
    imageSrcSet: '/images/product-makhana-480.jpg 480w, /images/product-makhana-960.jpg 960w, /images/product-makhana-1440.jpg 1440w',
  },
]

// Validate at module load — throws if schema violated
export const PRODUCTS: Product[] = raw.map((p) => ProductSchema.parse(p))

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug)
