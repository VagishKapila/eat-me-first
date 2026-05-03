import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Sticker } from '@/components/ui/Sticker'
import type { Product } from '@/types'

interface FinalCTAProps {
  onShop: (product?: Product) => void
}

export function FinalCTA({ onShop }: FinalCTAProps) {
  return (
    <section className="relative bg-[#E94B5C] py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FF6B7E,#E94B5C_60%)] pointer-events-none" />
      <div
        className="absolute top-10 left-1/4 hidden md:block"
        style={{ animation: 'bob 5s ease-in-out infinite' }}
      >
        <Sticker color="#FFD93D" textColor="#1a1a1a" rotate={-12}>NEW BATCH</Sticker>
      </div>
      <div
        className="absolute bottom-12 right-1/4 hidden md:block"
        style={{ animation: 'bob2 6s ease-in-out infinite' }}
      >
        <Sticker color="#1a1a1a" rotate={8}>SHIPS WEDNESDAY</Sticker>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2
            className="text-white font-black tracking-[-0.04em] leading-[0.9]"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(56px, 9vw, 144px)' }}
          >
            Eat well.
            <br />
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#FFD93D]">
              Snack better.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <button
            onClick={() => onShop()}
            className="mt-12 bg-[#1a1a1a] text-white px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-white hover:text-[#1a1a1a] transition-colors mx-auto shadow-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Start your pantry
            <ArrowUpRight size={20} />
          </button>
        </Reveal>

        <Reveal delay={350}>
          <p className="mt-8 text-white/80 text-sm font-bold tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
            FREE SHIPPING OVER $60 · 30-DAY HAPPY GUT GUARANTEE
          </p>
        </Reveal>
      </div>
    </section>
  )
}
