import { Reveal } from '@/components/ui/Reveal'
import { Sticker } from '@/components/ui/Sticker'

export function WhyBento() {
  return (
    <section className="bg-[#FFF8EE] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="text-xs font-black tracking-[0.25em] text-[#7C4DFF] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              WHY EAT ME FIRST
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="text-[#1a1a1a] font-black tracking-[-0.03em] leading-[0.95]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 5.5vw, 84px)' }}
            >
              Five things we{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                won't
              </span>{' '}
              compromise on.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <Reveal className="col-span-2 md:row-span-2">
            <div className="bg-[#1a1a1a] rounded-[28px] p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              <Sticker color="#FFD93D" textColor="#1a1a1a" rotate={-4} className="self-start">
                #01 — REAL FERMENTATION
              </Sticker>
              <div>
                <h3
                  className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-[1]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Live bacteria,
                  <br />
                  <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#FFD93D]">
                    no shortcuts.
                  </span>
                </h3>
                <p className="mt-5 text-white/70 text-base md:text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
                  Pasteurization kills the good stuff. We don't pasteurize. Each bottle is alive when it gets to you.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="bg-[#FFD4D9] rounded-[24px] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <div className="text-5xl font-black text-[#7A1F2B]" style={{ fontFamily: 'var(--font-sans)' }}>0</div>
              <div className="text-[#1a1a1a] font-bold leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }} className="font-normal">grams</span> of added sugar.
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-[#B8E5D5] rounded-[24px] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <div className="text-5xl font-black text-[#1a4a36]" style={{ fontFamily: 'var(--font-sans)' }}>4</div>
              <div className="text-[#1a1a1a] font-bold leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }} className="font-normal">ingredients</span>, max. Per bottle.
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="bg-[#E8E1FF] rounded-[24px] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <div className="text-5xl font-black text-[#4A1A5C]" style={{ fontFamily: 'var(--font-sans)' }}>200</div>
              <div className="text-[#1a1a1a] font-bold leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }} className="font-normal">bottles</span> per batch. Then we wait.
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#FFE7C2] rounded-[24px] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <div className="text-5xl font-black text-[#7A4A1F]" style={{ fontFamily: 'var(--font-sans)' }}>40</div>
              <div className="text-[#1a1a1a] font-bold leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }} className="font-normal">years</span> of family recipe iteration.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
