export interface ProductPillar {
  icon: string
  title: string
  body: string
}

export interface Product {
  slug: string
  eyebrow: string
  name: string
  price: number
  caseSize: number
  casePrice: number
  tagline: string
  pillars: ProductPillar[]
  badges: string[]
  storyTitle: string
  storyBody: string
  heroImage: string
  storyImage: string
  accentColor: string
}

export interface ProductsMap {
  [key: string]: Product
}
