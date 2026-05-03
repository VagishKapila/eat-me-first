import { Reveal } from '@/components/ui/Reveal'

export default function Shipping() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] mb-4" style={{ fontFamily: 'var(--font-sans)', color: '#E94B5C' }}>
              SHIPPING
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Ships{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                fast.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg max-w-xl" style={{ fontFamily: 'var(--font-sans)' }}>
              Every Wednesday. Free over $60.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-[#3a3a3a] text-lg leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <p>We pack orders by hand every Wednesday morning and ship via USPS Priority or FedEx. Drinks ship in insulated cold packs. Dry goods ship standard. Most orders arrive in 2–4 business days.</p>
            <p>Free shipping on all orders over $60. Flat-rate $7.99 under that threshold.</p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
