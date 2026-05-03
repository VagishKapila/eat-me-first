import { useParams, useOutletContext } from 'react-router-dom'
import { PRODUCTS } from '@/data/products'
import { ProductCard } from '@/components/sections/ProductCard'
import { Reveal } from '@/components/ui/Reveal'
import type { Product } from '@/types'

interface OutletCtx {
  onShop: (product?: Product) => void
}

const COLLECTION_META: Record<string, { title: string; subtitle: string }> = {
  all:     { title: 'The Whole Pantry', subtitle: 'Everything we make. Nothing we compromise on.' },
  drinks:  { title: 'Fermented Drinks', subtitle: 'Kanji and Sattu — alive, tangy, real.' },
  snacks:  { title: 'Clean Snacks', subtitle: 'Makhana — roasted, never fried, always addictive.' },
  bundles: { title: 'Bundle Up', subtitle: 'Mix and match. Save more. Eat better.' },
}

export default function Collection() {
  const { type = 'all' } = useParams<{ type: string }>()
  const { onShop } = useOutletContext<OutletCtx>()

  const meta = COLLECTION_META[type] ?? COLLECTION_META['all']

  const filtered = PRODUCTS.filter((p) => {
    if (type === 'drinks') return p.slug === 'kanji' || p.slug === 'sattu'
    if (type === 'snacks') return p.slug === 'makhana'
    return true // 'all' or 'bundles'
  })

  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-14">
            <div className="text-xs font-black tracking-[0.25em] text-[#E94B5C] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
              SHOP
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 96px)' }}
            >
              {meta.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                {meta.title.split(' ').at(-1)}.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
              {meta.subtitle}
            </p>
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} onBuy={onShop} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-2xl font-black text-[#1a1a1a]" style={{ fontFamily: 'var(--font-sans)' }}>
              Bundle packs coming soon 🫙
            </p>
            <p className="mt-3 text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
              Subscribe to hear first.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
