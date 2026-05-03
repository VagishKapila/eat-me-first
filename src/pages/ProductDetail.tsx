import { useParams, Link, useOutletContext } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { getProduct, PRODUCTS } from '@/data/products'
import { Sticker } from '@/components/ui/Sticker'
import { Reveal } from '@/components/ui/Reveal'
import { ProductCard } from '@/components/sections/ProductCard'
import { NotFound } from './NotFound'
import type { Product } from '@/types'

interface OutletCtx {
  onShop: (product?: Product) => void
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { onShop } = useOutletContext<OutletCtx>()
  const product = getProduct(slug ?? '')
  const others = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 2)

  if (!product) return <NotFound />

  return (
    <main className="pt-24 pb-20 bg-[#FFF8EE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3a3a3a] hover:text-[#E94B5C] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <ArrowLeft size={16} /> All Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Image */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-[32px] overflow-hidden aspect-square"
              style={{ background: product.bgColor }}
            >
              <Sticker color={product.chipColor} rotate={-4} className="absolute top-6 left-6 z-10">
                {product.sticker}
              </Sticker>
              <img
                src={product.imageSrc}
                srcSet={product.imageSrcSet}
                sizes="(max-width: 1024px) 90vw, 50vw"
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: product.slug === 'sattu' ? '50% 35%' : 'center' }}
                width="800"
                height="800"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <Reveal>
              <div
                className="text-xs font-black tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-sans)', color: product.chipColor }}
              >
                {product.flavor}
              </div>
              <h1
                className="text-[#1a1a1a] font-black tracking-tight leading-[0.92] mb-4"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(36px, 5vw, 72px)' }}
              >
                {product.name}
              </h1>
              <p className="text-[#3a3a3a] text-lg leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                {product.body}
              </p>
              <div
                className="inline-flex flex-wrap gap-2 mb-8 text-sm text-[#3a3a3a] font-medium"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {product.pour.split(' · ').map((ing) => (
                  <span key={ing} className="bg-white border border-black/10 px-3 py-1 rounded-full">
                    {ing}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white border border-black/10 rounded-[24px] p-6 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-black text-[#1a1a1a] text-lg" style={{ fontFamily: 'var(--font-sans)' }}>Single</div>
                    <div className="text-sm text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>Try it once</div>
                  </div>
                  <div className="text-3xl font-black text-[#1a1a1a]" style={{ fontFamily: 'var(--font-sans)' }}>${product.price}</div>
                </div>
              </div>
              <div className="bg-white border border-black/10 rounded-[24px] p-6 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-black text-[#1a1a1a] text-lg flex items-center gap-2" style={{ fontFamily: 'var(--font-sans)' }}>
                      Case of {product.caseSize}
                      <span className="bg-[#E94B5C] text-white text-xs px-2 py-0.5 rounded-full">SAVE</span>
                    </div>
                    <div className="text-sm text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>Four-week ritual supply</div>
                  </div>
                  <div className="text-3xl font-black text-[#1a1a1a]" style={{ fontFamily: 'var(--font-sans)' }}>${product.casePrice}</div>
                </div>
              </div>

              {/* Sticky mobile CTA */}
              <button
                onClick={() => onShop(product)}
                className="w-full bg-[#1a1a1a] text-white py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-[#E94B5C] transition-colors shadow-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Add to Order <ArrowUpRight size={20} />
              </button>
              <p className="text-center text-xs text-[#3a3a3a] mt-3" style={{ fontFamily: 'var(--font-sans)' }}>
                🔒 Secure checkout · Free shipping over $60
              </p>
            </Reveal>
          </div>
        </div>

        {/* Related */}
        {others.length > 0 && (
          <section className="mt-24">
            <Reveal>
              <h2
                className="text-3xl font-black text-[#1a1a1a] mb-10 tracking-tight"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Also in the pantry
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <ProductCard product={p} onBuy={onShop} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
