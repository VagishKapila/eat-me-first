import { Reveal } from '@/components/ui/Reveal'
import { ProductCard } from './ProductCard'
import { PRODUCTS } from '@/data/products'
import type { Product } from '@/types'

interface TrioProps {
  onBuy: (product: Product) => void
}

export function Trio({ onBuy }: TrioProps) {
  return (
    <section id="products" className="relative py-24 md:py-36 bg-[#FFF8EE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <Reveal>
            <h2
              className="text-[#1a1a1a] font-black tracking-[-0.03em] leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 96px)' }}
            >
              The whole
              <br />
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                pantry.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[#3a3a3a] max-w-sm text-lg leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>
              Three things you actually want at your desk, in your gym bag, on your countertop.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <ProductCard product={p} onBuy={onBuy} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
