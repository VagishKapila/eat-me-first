import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const contactTypes = [
  { label: 'GENERAL', email: 'hello@eatmefirst.com', note: 'Questions, feedback, press inquiries' },
  { label: 'WHOLESALE', email: 'wholesale@eatmefirst.com', note: 'Retail partnerships and bulk orders' },
  { label: 'PRESS', email: 'press@eatmefirst.com', note: 'Media requests and brand assets' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '32px' }}>CONTACT</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--color-on-surface)', lineHeight: 1.1 }}>
            Tell us what you need.
          </h1>
        </motion.div>
      </section>

      {/* FORM + CONTACTS GRID */}
      <section style={{ paddingBottom: '120px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: 'var(--max-w-site)', marginInline: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '80px' }} className="grid-cols-1 lg:grid-cols-[3fr_2fr]">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            {submitted ? (
              <div style={{ paddingBlock: '48px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-on-surface)', marginBottom: '12px' }}>
                  We received your message.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--color-on-surface-variant)' }}>
                  We respond to all inquiries within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '24px', fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--color-secondary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor={field.id} className="eyebrow">{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as 'name' | 'email']}
                      onChange={e => setForm(prev => ({ ...prev, [field.id]: e.target.value }))}
                      style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-on-surface)', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', padding: '12px 0', outline: 'none', transition: 'border-color 0.2s ease' }}
                    />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" className="eyebrow">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-on-surface)', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', padding: '12px 0', outline: 'none', resize: 'none' }}
                  />
                </div>
                <Button type="submit" variant="ivory" size="md" style={{ alignSelf: 'flex-start' }}>
                  SEND MESSAGE
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact types */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {contactTypes.map(ct => (
                <div key={ct.label}>
                  <p className="eyebrow" style={{ marginBottom: '8px' }}>{ct.label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-on-surface)', marginBottom: '4px' }}>
                    {ct.email}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 300, color: 'var(--color-on-surface-variant)' }}>
                    {ct.note}
                  </p>
                </div>
              ))}
              <div style={{ marginTop: '16px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--color-outline)' }}>
                  Crafted in California.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
