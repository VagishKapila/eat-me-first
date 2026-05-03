import { useState } from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { Sticker } from './Sticker'
import { CHECKOUT_LINKS } from '@/data/checkout'
import type { Product, ProductSlug } from '@/types'

interface BuyModalProps {
  product: Product | null
  onClose: () => void
}

export function BuyModal({ product, onClose }: BuyModalProps) {
  const [pack, setPack] = useState<'single' | 'case'>('single')
  const [qty, setQty] = useState(1)

  if (!product) return null

  const links = CHECKOUT_LINKS[product.slug as ProductSlug]
  const price = pack === 'case' ? product.casePrice : product.price
  const total = price * qty
  const checkoutUrl = pack === 'case' ? links.caseUrl : links.singleUrl

  const handleCheckout = () => {
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF8EE] rounded-t-[32px] md:rounded-[32px] max-w-md w-full p-8 md:p-10 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <Sticker color={product.chipColor} rotate={-4} className="mb-4">
          {product.flavor}
        </Sticker>
        <h3 className="text-3xl font-black text-[#1a1a1a] tracking-tight leading-tight mt-3" style={{ fontFamily: 'var(--font-sans)' }}>
          {product.name}
        </h3>
        <p className="mt-3 text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>{product.body}</p>

        <div className="mt-7 space-y-3">
          <button
            onClick={() => setPack('single')}
            className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${pack === 'single' ? 'border-[#1a1a1a] bg-white' : 'border-black/10 hover:border-black/30'}`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-black text-[#1a1a1a]">Single</div>
                <div className="text-sm text-[#3a3a3a]">Try it once</div>
              </div>
              <div className="text-2xl font-black text-[#1a1a1a]">${product.price}</div>
            </div>
          </button>

          <button
            onClick={() => setPack('case')}
            className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${pack === 'case' ? 'border-[#1a1a1a] bg-white' : 'border-black/10 hover:border-black/30'}`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-black text-[#1a1a1a] flex items-center gap-2">
                  Case of {product.caseSize}
                  <span className="bg-[#E94B5C] text-white text-xs px-2 py-0.5 rounded-full">SAVE</span>
                </div>
                <div className="text-sm text-[#3a3a3a]">A real ritual, four-week supply</div>
              </div>
              <div className="text-2xl font-black text-[#1a1a1a]">${product.casePrice}</div>
            </div>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-bold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-sans)' }}>Quantity</span>
          <div className="flex items-center bg-white border border-black/10 rounded-full">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2" aria-label="Decrease quantity">
              <Minus size={14} />
            </button>
            <div className="px-4 py-2 font-black min-w-[40px] text-center" style={{ fontFamily: 'var(--font-sans)' }}>
              {qty}
            </div>
            <button onClick={() => setQty(qty + 1)} className="px-4 py-2" aria-label="Increase quantity">
              <Plus size={14} />
            </button>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-7 w-full bg-[#1a1a1a] text-white py-4 rounded-full font-black flex items-center justify-between px-7 hover:bg-[#E94B5C] transition-colors"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <span>Checkout</span>
          <span>${total}</span>
        </button>
        <p className="mt-4 text-center text-xs text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
          🔒 Secure checkout · Powered by Stripe
        </p>
      </div>
    </div>
  )
}
