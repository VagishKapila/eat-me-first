import { Reveal } from '@/components/ui/Reveal'

export default function Subscriptions() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] mb-4" style={{ fontFamily: 'var(--font-sans)', color: '#7A1F2B' }}>
              SUBSCRIPTIONS
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Never{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                run out.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg max-w-xl" style={{ fontFamily: 'var(--font-sans)' }}>
              Subscribe and save 15%. Pause or cancel any time.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-[#3a3a3a] text-lg leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <p>Subscribe to any product and save 15% on every order. Choose your frequency: every 2 weeks, monthly, or every 6 weeks.</p>
            <p>Pause, skip, or cancel any time from your account page — no calls, no forms, no nonsense.</p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
