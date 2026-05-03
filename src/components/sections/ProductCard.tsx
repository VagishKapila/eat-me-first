import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Sticker } from '@/components/ui/Sticker'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onBuy: (product: Product) => void
}

export function ProductCard({ product: p, onBuy }: ProductCardProps) {
  return (
    <div className="group relative">
      <div
        className="relative rounded-[32px] overflow-hidden p-8 md:p-10 transition-transform duration-500 group-hover:-translate-y-2"
        style={{ background: p.bgColor, minHeight: 540 }}
      >
        <Sticker color={p.chipColor} rotate={-6} className="absolute top-6 right-6 z-10">
          {p.sticker}
        </Sticker>

        <Link to={`/products/${p.slug}`} className="block">
          <div className="relative h-72 mb-6 mt-4 flex items-center justify-center overflow-hidden rounded-[20px]">
            <img
              src={p.imageSrc}
              srcSet={p.imageSrcSet}
              sizes="(max-width: 768px) 90vw, 420px"
              alt={p.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: p.slug === 'sattu' ? '50% 35%' : 'center' }}
              loading="lazy"
              width="420"
              height="288"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-black tracking-widest"
            style={{ fontFamily: 'var(--font-sans)', color: p.chipColor }}
          >
            {p.flavor}
          </span>
        </div>

        <Link to={`/products/${p.slug}`}>
          <h3
            className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-[0.95] mb-3 tracking-tight hover:text-[#E94B5C] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {p.name}
          </h3>
        </Link>
        <p className="text-[#3a3a3a] text-sm md:text-base leading-snug mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
          {p.body}
        </p>

        <div className="flex items-end justify-between border-t-2 border-black/10 pt-4">
          <div>
            <div className="text-[#3a3a3a] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
              From
            </div>
            <div className="text-3xl font-black text-[#1a1a1a]" style={{ fontFamily: 'var(--font-sans)' }}>
              ${p.price}
            </div>
          </div>
          <button
            onClick={() => onBuy(p)}
            className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#E94B5C] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Add <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
