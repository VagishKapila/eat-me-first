import { Reveal } from '@/components/ui/Reveal'
import { Sticker } from '@/components/ui/Sticker'

const items = [
  {
    tag: 'FOR YOUR MORNING',
    tagColor: '#7C4DFF',
    title: 'The brain you actually want.',
    body: 'Kanji on your desk before the first meeting. Real ferments, no jitters.',
    img: '/images/lifestyle-desk-960.jpg',
    imgSrcSet: '/images/lifestyle-desk-480.jpg 480w, /images/lifestyle-desk-960.jpg 960w',
  },
  {
    tag: 'FOR YOUR SWEAT',
    tagColor: '#E94B5C',
    title: 'Hydration that earned it.',
    body: 'Post-workout kanji hits different. Your gut, your electrolytes, your call.',
    img: '/images/lifestyle-gym-960.jpg',
    imgSrcSet: '/images/lifestyle-gym-480.jpg 480w, /images/lifestyle-gym-960.jpg 960w',
  },
  {
    tag: 'FOR YOUR 3PM',
    tagColor: '#FF8C42',
    title: 'The crunch without the crash.',
    body: 'Roasted makhana that actually keeps you off the vending machine.',
    img: '/images/lifestyle-snack-desk-960.jpg',
    imgSrcSet: '/images/lifestyle-snack-desk-480.jpg 480w, /images/lifestyle-snack-desk-960.jpg 960w',
  },
]

export function ForYour() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-black tracking-[0.25em] text-[#E94B5C] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              FOR YOUR REAL DAY
            </div>
            <h2
              className="text-[#1a1a1a] font-black tracking-[-0.03em] leading-[0.95]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(36px, 5.5vw, 80px)' }}
            >
              Made for the way
              <br />
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>
                your day actually looks.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group cursor-pointer">
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] mb-5">
                  <img
                    src={it.img}
                    srcSet={it.imgSrcSet}
                    sizes="(max-width: 768px) 90vw, 400px"
                    alt={it.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="500"
                  />
                  <div className="absolute top-5 left-5">
                    <Sticker color={it.tagColor} rotate={0}>{it.tag}</Sticker>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-2 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                  {it.title}
                </h3>
                <p className="text-[#3a3a3a] text-base leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
