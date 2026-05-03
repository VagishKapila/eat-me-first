export interface Product {
  slug: string
  name: string
  flavor: string
  pour: string
  body: string
  bgColor: string
  chipColor: string
  accent: string
  sticker: string
  price: number
  casePrice: number
  caseSize: number
  photo: string
  // image paths (set after sharp processing)
  imageSrc: string
  imageSrcSet?: string
}

export interface CheckoutLinks {
  singleUrl: string
  caseUrl: string
}

export type ProductSlug = 'kanji' | 'sattu' | 'makhana'
