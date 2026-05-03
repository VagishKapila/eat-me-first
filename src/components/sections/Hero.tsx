import { ArrowUpRight } from 'lucide-react'
import { useTilt } from '@/hooks/useTilt'
import { Reveal } from '@/components/ui/Reveal'
import { Sticker } from '@/components/ui/Sticker'
import type { Product } from '@/types'

interface HeroProps {
  onShop: (product?: Product) => void
}

export function Hero({ onShop }: HeroProps) {
  const [tiltRef, tilt] = useTilt(8)

  return (
    <section className="relative min-h-screen pt-28 md:pt-32 pb-20 overflow-hidden bg-[#FFF8EE]">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFD4D9] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#FFE7C2] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#E8E1FF] blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left copy */}
        <div className="lg:col-span-7 z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white border border-black/5 px-4 py-2 rounded-full shadow-sm mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E94B5C] opacity-60" style={{ animation: 'ping-slow 2s ease-in-out infinite' }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E94B5C]" />
              </span>
              <span className="text-xs font-bold text-[#1a1a1a] tracking-wide">LIVE FERMENTED · MADE BY SISTERS · NOT A LAB</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="text-[#1a1a1a] leading-[0.92] tracking-[-0.04em] font-black"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(56px, 9vw, 132px)' }}
            >
              Snack{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                smart.
              </span>
              <br />
              Sip{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#7C4DFF]">
                smarter.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-8 text-lg md:text-xl text-[#3a3a3a] max-w-md leading-snug" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Real fermented drinks and clean snacks made by two sisters from{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }} className="font-normal">
                recipes our grandmother actually wrote down.
              </span>
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onShop()}
                className="group bg-[#1a1a1a] text-white px-7 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#E94B5C] transition-colors shadow-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Shop the Whole Pantry
                <ArrowUpRight size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
              <a
                href="/our-story"
                className="text-[#1a1a1a] px-2 py-2 font-bold underline underline-offset-4 decoration-[#E94B5C] decoration-2 hover:text-[#E94B5C] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Meet the sisters →
              </a>
            </div>
          </Reveal>

          <Reveal delay={560}>
            <div className="mt-14 flex items-center gap-4">
              <img
                src="/images/founders-960.jpg"
                srcSet="/images/founders-480.jpg 480w, /images/founders-960.jpg 960w"
                sizes="56px"
                alt="Founders"
                className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md"
                style={{ objectPosition: '50% 30%' }}
                width="56"
                height="56"
              />
              <div style={{ fontFamily: 'var(--font-hand)' }} className="text-2xl text-[#1a1a1a] leading-tight">
                made by us
                <span className="ml-2 text-[#E94B5C]">↑</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — kanji bottle with 3D tilt */}
        <div
          className="lg:col-span-5 relative h-[500px] md:h-[640px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div className="absolute top-8 right-4 z-20 hidden md:block" style={{ animation: 'bob 4s ease-in-out infinite' }}>
            <Sticker color="#FF3D7F" rotate={12}>🫶 GUT-LOVED</Sticker>
          </div>
          <div className="absolute top-1/3 -left-2 md:-left-6 z-20" style={{ animation: 'bob2 5s ease-in-out infinite' }}>
            <Sticker color="#FFD93D" textColor="#1a1a1a" rotate={-8}>LET'S GET TANGY</Sticker>
          </div>
          <div className="absolute bottom-12 right-2 md:right-12 z-20" style={{ animation: 'bob 6s ease-in-out infinite reverse' }}>
            <Sticker color="#7C4DFF" rotate={6}>✨ FAMILY RECIPE</Sticker>
          </div>

          <div
            ref={tiltRef}
            className="relative w-[320px] md:w-[420px]"
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${tilt.tz}px)`,
              transformStyle: 'preserve-3d',
              transition: 'transform .25s cubic-bezier(.2,.8,.2,1)',
              animation: 'float 6s ease-in-out infinite',
              filter: 'drop-shadow(0 40px 50px rgba(122, 31, 43, 0.35))',
            }}
          >
            <img
              src="/images/product-kanji-960.jpg"
              srcSet="/images/product-kanji-480.jpg 480w, /images/product-kanji-960.jpg 960w"
              sizes="(max-width: 768px) 320px, 420px"
              alt="Kanji Drink — fermented black carrot, beetroot, ginger, amla"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
              width="420"
              height="560"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
