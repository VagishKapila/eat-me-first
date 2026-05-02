import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

export default function OurStory() {
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('OurStory notify:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ paddingTop: '80px', paddingBottom: '120px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: '900px', marginInline: 'auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '32px' }}>OUR STORY</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--color-on-surface)', marginBottom: '24px', lineHeight: 1.1 }}>
            Built from experience. Not trends.
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--color-on-surface-variant)', maxWidth: '640px', marginInline: 'auto', lineHeight: 1.6 }}>
            The full archive opens this spring.
          </p>
        </motion.div>
      </section>

      {/* BACKGROUND IMAGE BAND */}
      <section style={{ height: '400px', overflow: 'hidden', position: 'relative', background: 'var(--color-surface-container)' }}>
        <img
          src="/images/story-lifestyle.webp"
          alt="Two women preparing food in a sunlit kitchen"
          width={1600}
          height={900}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--color-surface) 0%, transparent 20%, transparent 80%, var(--color-surface) 100%)' }} />
      </section>

      {/* WHAT'S COMING */}
      <section style={{ paddingBlock: '120px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: 'var(--max-w-site)', marginInline: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--color-on-surface)', lineHeight: 1.5, marginBottom: '32px' }}>
              "Two sisters. One kitchen. Forty years of refusing to compromise."
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
              Every formula in the Eat Me First collection began as a family ritual — passed down without written instruction, preserved through repetition and memory. We are in the process of documenting the stories, sourcing maps, and philosophy that make this work what it is.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="eyebrow" style={{ marginBottom: '24px' }}>What's coming</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Founder portraits and personal histories',
                'The recipe lineage behind each formula',
                'Sourcing maps: where every ingredient originates',
                'The manifesto — why now, why us, why this',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--color-secondary)', marginTop: '2px' }}>—</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginTop: '80px' }}>
          <Button variant="gold" size="lg" onClick={() => setNotifyOpen(true)}>
            Notify me when the archive opens
          </Button>
        </motion.div>
      </section>

      {/* Notify modal */}
      <Dialog open={notifyOpen} onOpenChange={setNotifyOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You'll know first.</DialogTitle>
            <DialogDescription>
              We'll send one email when the full story is ready. No newsletters, no noise.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <p style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', marginTop: '16px' }}>
              Thank you. We'll reach out when the archive opens.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                aria-label="Email address"
                style={{ background: 'var(--color-surface)', border: 'none', borderBottom: '1px solid rgba(233,195,73,0.4)', color: 'var(--color-on-surface)', fontFamily: 'var(--font-sans)', padding: '12px 0', outline: 'none', fontSize: '0.875rem', width: '100%' }}
              />
              <Button type="submit" variant="ivory">NOTIFY ME</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
