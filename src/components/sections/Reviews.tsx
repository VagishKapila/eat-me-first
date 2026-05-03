import { Reveal } from '@/components/ui/Reveal'

const quotes = [
  { q: "Tastes like my dadi made it. I literally called my mom.", a: "— Priya R., San Jose", color: '#FFD4D9', rot: -2 },
  { q: "I gave up kombucha for this. Don't tell kombucha.", a: "— Sarah Chen, Brooklyn", color: '#FFE7C2', rot: 1.5 },
  { q: "The makhana is dangerous. I finished a bag in a Zoom call.", a: "— Marcus T., Austin", color: '#E8E1FF', rot: -1 },
  { q: "Finally a gut-health drink that doesn't taste like punishment.", a: "— Emma Larsson, Seattle", color: '#B8E5D5', rot: 2 },
]

export function Reviews() {
  return (
    <section className="bg-[#1a1a1a] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs font-black tracking-[0.25em] text-[#FFD93D] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              ★★★★★ FROM REAL DRINKERS
            </div>
            <h2
              className="text-white font-black tracking-[-0.03em] leading-[0.95]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            >
              People are saying{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#FFD93D]">
                things.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className="rounded-[24px] p-7 h-full flex flex-col justify-between min-h-[240px]"
                style={{ background: q.color, transform: `rotate(${q.rot}deg)` }}
              >
                <div
                  className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  &ldquo;{q.q}&rdquo;
                </div>
                <div className="mt-6 text-[#1a1a1a] font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                  {q.a}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
