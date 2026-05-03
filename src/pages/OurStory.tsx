import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { Sticker } from '@/components/ui/Sticker'

export default function OurStory() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-4xl mb-16">
            <div className="text-xs font-black tracking-[0.25em] text-[#7A1F2B] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              OUR STORY
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-[-0.03em] leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(48px, 7vw, 112px)' }}
            >
              Two sisters.
              <br />
              One{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                stubborn
              </span>{' '}
              kitchen.
            </h1>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-sans)', color: '#3a3a3a', lineHeight: '1.8' }}>
                <p className="text-xl font-bold text-[#1a1a1a]">
                  We grew up in a house that smelled like fermentation every winter.
                </p>
                <p>
                  Our grandmother brewed kanji every December — dark, tangy, alive. She fermented sattu in clay pots and kept a jar of roasted makhana on the counter for anyone who walked through. She didn't call it a "wellness routine." She called it Tuesday.
                </p>
                <p>
                  When we moved away for college, we spent two years trying to find something that tasted like that. Kombucha was okay. Kefir was close. Nothing was it.
                </p>
                <p>
                  So we called her. We took notes. We brewed a test batch in our apartment and it was — honestly? — better than anything on the shelf. We started sharing it with neighbors. Then friends. Then strangers on the internet.
                </p>
                <p>
                  That was six months ago. Now we have a real kitchen, a real process, and a very strict rule: if it's not something our grandmother would recognize as food, it doesn't leave our hands.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/collections/all"
                  className="bg-[#1a1a1a] text-white px-7 py-4 rounded-full font-bold hover:bg-[#E94B5C] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Shop the pantry →
                </Link>
                <Link
                  to="/where-we-source"
                  className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-7 py-4 rounded-full font-bold hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Where we source
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal>
              <div className="relative">
                <img
                  src="/images/founders-960.jpg"
                  srcSet="/images/founders-480.jpg 480w, /images/founders-960.jpg 960w"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  alt="The founders in the kitchen"
                  className="w-full rounded-[28px] shadow-2xl object-cover aspect-[4/5]"
                  style={{ objectPosition: '50% 20%' }}
                  width="600"
                  height="750"
                />
                <div className="absolute -bottom-6 -left-6">
                  <Sticker color="#FFD93D" textColor="#1a1a1a" rotate={-8}>MADE BY HAND ✦</Sticker>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  )
}
