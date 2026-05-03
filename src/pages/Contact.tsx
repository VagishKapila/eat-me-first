import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store to localStorage as placeholder until email backend is wired
    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form))
    const existing = JSON.parse(localStorage.getItem('emf_contact') ?? '[]') as unknown[]
    existing.push({ ...data, ts: new Date().toISOString() })
    localStorage.setItem('emf_contact', JSON.stringify(existing))
    setSent(true)
  }

  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-black tracking-[0.25em] text-[#E94B5C] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              GET IN TOUCH
            </div>
            <h1
              className="text-[#1a1a1a] font-black tracking-tight leading-[0.92]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Say{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                hello.
              </span>
            </h1>
            <p className="mt-4 text-[#3a3a3a] text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              Questions, wholesale, collabs, or just vibes — we read every email.
            </p>
          </div>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="bg-[#B8E5D5] rounded-[24px] p-10 text-center">
              <div className="text-4xl mb-4">🫶</div>
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                Got it!
              </h2>
              <p className="text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
                We'll get back to you within 24 hours.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Your name', type: 'text', placeholder: 'First + last' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'hello@you.com' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-black text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                    {f.label}
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full bg-white border-2 border-black/10 rounded-2xl px-5 py-3.5 text-[#1a1a1a] focus:outline-none focus:border-[#E94B5C] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-black text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
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
                Send it →
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </main>
  )
}
