import { Reveal } from '@/components/ui/Reveal'

const items = [
  { q: "What makes your kanji different from kombucha?", a: "Kanji is a North Indian fermented drink made from black carrots, beetroot, and spices. It's traditionally lacto-fermented — no added starters, no sugar, no vinegar. Kombucha uses a SCOBY and tea. We use vegetables and salt and time." },
  { q: "How long does it stay fresh?", a: "Refrigerated, our kanji stays good for 3–4 weeks. Sattu lasts 6 months in a sealed jar. Makhana keeps for 2 months in an airtight container." },
  { q: "Is it safe for kids?", a: "Kanji contains trace alcohol from natural fermentation (less than 0.5%). Sattu and makhana are completely safe for children." },
  { q: "Do you ship nationwide?", a: "Yes — all 50 states. Cold-chain shipping for drinks, standard for dry goods." },
  { q: "What if I don't like it?", a: "30-day happy gut guarantee. If it's not for you, email us and we'll make it right. No questions." },
  { q: "Can I subscribe and save?", a: "Yes — subscribe to any product and save 15%. Choose your frequency and pause or cancel any time." },
]

export default function FAQ() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] text-[#7C4DFF] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              FAQ
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Got questions.{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                Answers.
              </span>
            </h1>
          </div>
        </Reveal>

        <div className="space-y-5">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white rounded-[20px] p-7 border border-black/5">
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item.q}
                </h3>
                <p className="text-[#3a3a3a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
