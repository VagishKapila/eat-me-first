import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'

export default function Wholesale() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form))
    const existing = JSON.parse(localStorage.getItem('emf_wholesale') ?? '[]') as unknown[]
    existing.push({ ...data, ts: new Date().toISOString() })
    localStorage.setItem('emf_wholesale', JSON.stringify(existing))
    setSent(true)
  }

  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] text-[#7A4A1F] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              WHOLESALE
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Carry our{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                stuff.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              We work with independent grocery stores, cafes, gyms, and specialty food shops. Minimum 12-unit order. Tell us about your store.
            </p>
          </div>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="bg-[#B8E5D5] rounded-[24px] p-10 text-center">
              <div className="text-4xl mb-4">✦</div>
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Application received!</h2>
              <p className="text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>We'll follow up within 2 business days.</p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'store_name', label: 'Store name', placeholder: 'Your store name' },
                { name: 'contact_name', label: 'Your name', placeholder: 'First + last' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'hello@yourstore.com' },
                { name: 'city', label: 'City & State', placeholder: 'San Francisco, CA' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-black text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>{f.label}</label>
                  <input
                    name={f.name}
                    type={f.type ?? 'text'}
                    placeholder={f.placeholder}
                    required
                    className="w-full bg-white border-2 border-black/10 rounded-2xl px-5 py-3.5 text-[#1a1a1a] focus:outline-none focus:border-[#E94B5C] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-black text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Tell us about your store</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What products you're interested in, order volume, etc."
                  required
                  className="w-full bg-white border-2 border-black/10 rounded-2xl px-5 py-3.5 text-[#1a1a1a] focus:outline-none focus:border-[#E94B5C] transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-4 rounded-full font-black text-lg hover:bg-[#E94B5C] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Apply to carry us →
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </main>
  )
}
