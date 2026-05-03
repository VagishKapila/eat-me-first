import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { Sticker } from '@/components/ui/Sticker'

export function Sisters() {
  return (
    <section className="relative bg-[#FFE3D5] py-24 md:py-36 overflow-hidden">
      <div
        className="absolute top-12 right-8 md:right-24 z-20 max-w-[260px] -rotate-3"
        style={{ animation: 'bob 6s ease-in-out infinite' }}
      >
        <div className="bg-[#FFD93D] p-5 shadow-xl" style={{ fontFamily: 'var(--font-hand)' }}>
          <div className="text-[#1a1a1a] text-xl leading-tight">
            P.S. — these are real recipes, not&nbsp;a marketing department.
          </div>
          <div className="text-[#1a1a1a] text-lg mt-2 italic">— G &amp; B 💛</div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <img
              src="/images/founders-960.jpg"
              srcSet="/images/founders-480.jpg 480w, /images/founders-960.jpg 960w, /images/founders-1440.jpg 1440w"
              sizes="(max-width: 1024px) 90vw, 50vw"
              alt="The two sister founders"
              className="w-full rounded-[28px] shadow-2xl object-cover aspect-[4/3]"
              style={{ objectPosition: '50% 25%' }}
              loading="lazy"
              width="800"
              height="600"
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-hand)' }}>
              <span className="text-2xl text-[#1a1a1a]">that's us 👋</span>
              <Sticker color="#7A1F2B" rotate={-6}>EST. THIS YEAR</Sticker>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <div className="text-xs font-black tracking-[0.25em] text-[#7A1F2B] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              MEET THE FOUNDERS
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="text-[#1a1a1a] font-black tracking-[-0.03em] leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 5.5vw, 84px)' }}
            >
              Two sisters.
              <br />
              One{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                stubborn
              </span>{' '}
              kitchen.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-[#3a3a3a] text-lg leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
              We grew up watching our grandmother brew kanji every winter, ferment sattu in clay pots, toast makhana over an open flame. She was not making "wellness." She was just feeding us.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-5 text-[#3a3a3a] text-lg leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
              We bottled her recipes, kept the bacteria alive, and put them on a shelf next to the kombucha. Hers is just{' '}
              <em style={{ fontFamily: 'var(--font-display)' }}>better</em>.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <Link
              to="/our-story"
              className="mt-10 inline-flex items-center gap-2 font-bold text-[#1a1a1a] underline decoration-[#E94B5C] decoration-2 underline-offset-4 hover:text-[#E94B5C] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Read the full story <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
