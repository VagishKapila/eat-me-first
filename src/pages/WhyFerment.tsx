import { Reveal } from '@/components/ui/Reveal'
import { Link } from 'react-router-dom'

export default function WhyFerment() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] mb-4" style={{ fontFamily: 'var(--font-sans)', color: '#7C4DFF' }}>
              WHY FERMENT
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              The science is{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                boring.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg max-w-xl" style={{ fontFamily: 'var(--font-sans)' }}>
              The taste is not.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-[#3a3a3a] text-lg leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <p>
              Fermentation is one of the oldest food preservation techniques on earth. It produces beneficial bacteria
              (probiotics) that support gut health. Live-fermented foods have more bioavailable nutrients than their
              unfermented counterparts.
            </p>
            <p>
              Kanji specifically is high in Vitamin C, B12, and natural electrolytes from the fermentation process.
            </p>
            <p>But honestly? It's the taste that matters. Everything else is a bonus.</p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10">
            <Link
              to="/collections/drinks"
              className="bg-[#1a1a1a] text-white px-7 py-4 rounded-full font-bold hover:bg-[#E94B5C] transition-colors inline-block"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Try the kanji →
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
