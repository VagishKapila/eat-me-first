import { Reveal } from '@/components/ui/Reveal'

export default function WhereWeSource() {
  const ingredients = [
    { name: 'Black Carrots', source: 'Rajasthan, India', note: 'Traditional purple-black variety, in season Dec–Feb' },
    { name: 'Roasted Gram', source: 'Maharashtra, India', note: 'Certified organic chana dal farmers' },
    { name: 'Fox Nuts (Makhana)', source: 'Bihar, India', note: 'Only state that grows them commercially' },
    { name: 'Jaggery', source: 'Tamil Nadu, India', note: 'Cold-pressed, unrefined cane sugar' },
    { name: 'Pink Himalayan Salt', source: 'Khewra, Pakistan', note: 'The original source — nothing else comes close' },
    { name: 'Cardamom', source: 'Kerala, India', note: 'Green cardamom, hand-picked' },
  ]

  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] mb-4" style={{ fontFamily: 'var(--font-sans)', color: '#1a4a36' }}>
              SOURCING
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Where it{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                comes from.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg max-w-xl" style={{ fontFamily: 'var(--font-sans)' }}>
              Every ingredient, traced.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {ingredients.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white rounded-[20px] p-6 border border-black/5 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-black text-[#1a1a1a]" style={{ fontFamily: 'var(--font-sans)' }}>{item.name}</h3>
                  <p className="text-sm text-[#3a3a3a] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{item.note}</p>
                </div>
                <span className="text-sm font-bold text-[#7C4DFF] shrink-0" style={{ fontFamily: 'var(--font-sans)' }}>{item.source}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
