import { Reveal } from '@/components/ui/Reveal'

export default function Press() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] mb-4" style={{ fontFamily: 'var(--font-sans)', color: '#FF3D7F' }}>
              PRESS
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              In the{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                news.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg max-w-xl" style={{ fontFamily: 'var(--font-sans)' }}>
              For press inquiries: press@eatmefirst.com
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-[#3a3a3a] text-lg leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <p>
              We're a small brand that's growing fast. If you're writing about fermented food, Indian food culture, or
              women-owned CPG brands — we'd love to talk.
            </p>
            <p>
              Email us at{' '}
              <a href="mailto:press@eatmefirst.com" className="underline text-[#E94B5C] hover:text-[#7A1F2B] transition-colors">
                press@eatmefirst.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
