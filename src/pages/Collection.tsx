import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { products, productSlugs } from '@/data/products'

export default function Collection() {
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <div style={{ background: 'var(--color-surface)' }}>

      {/* HEADER BAND */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: 'var(--max-w-site)', marginInline: 'auto' }}>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid rgba(233,195,73,0.3)', borderRadius: '9999px', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--color-secondary)', marginBottom: '32px' }}>
            THE COLLECTION
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 8vw, 80px)', color: 'var(--color-on-surface)', marginBottom: '24px', maxWidth: '800px' }}>
            The Rituals
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 2.5vw, 22px)', color: 'var(--color-on-surface-variant)', maxWidth: '540px', lineHeight: 1.5 }}>
            Three formulas. Three rhythms. One philosophy of slow vitality.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT GRID */}
      <section ref={gridRef} style={{ paddingBottom: '120px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: 'var(--max-w-site)', marginInline: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productSlugs.map((slug, i) => {
            const product = products[slug]
            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: 'easeOut' }}
              >
                <Link to={`/products/${slug}`} style={{ textDecoration: 'none', display: 'block' }} className="card-gold-top group">
                  {/* Image */}
                  <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--color-surface-container)', marginBottom: '28px' }}>
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      width={600}
                      height={750}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      className="group-hover:scale-103"
                      onError={(e) => {
                        const img = e.currentTarget
                        img.style.display = 'none'
                        const parent = img.parentElement
                        if (parent) {
                          parent.style.background = 'var(--color-surface-container-high)'
                          parent.style.display = 'flex'
                          parent.style.alignItems = 'center'
                          parent.style.justifyContent = 'center'
                          const div = document.createElement('div')
                          div.style.color = 'var(--color-outline)'
                          div.style.fontFamily = 'var(--font-sans)'
                          div.style.fontSize = '0.75rem'
                          div.style.letterSpacing = '0.1em'
                          div.textContent = product.slug.toUpperCase()
                          parent.appendChild(div)
                        }
                      }}
                    />
                  </div>

                  {/* Card content */}
                  <div style={{ paddingInline: '4px' }}>
                    <p className="eyebrow" style={{ marginBottom: '10px' }}>{product.eyebrow}</p>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-on-surface)', marginBottom: '10px' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-on-surface-variant)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '16px' }}>
                      {product.tagline}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--color-on-surface)' }}>
                        ${product.price}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>
                        CASE OF {product.caseSize} — ${product.casePrice}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* EDITORIAL QUOTE */}
      <section style={{ paddingBlock: '120px', textAlign: 'center', paddingInline: 'var(--spacing-edge-desktop)', background: 'var(--color-surface-container-low)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 3vw, 30px)', fontStyle: 'italic', color: 'var(--color-on-surface)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6, marginBottom: '32px' }}>
            "The body is a temple, but the gut is its architect."
          </p>
          <div style={{ width: '80px', height: '1px', background: 'var(--color-secondary)', marginInline: 'auto', marginBottom: '16px', opacity: 0.5 }} />
          <p className="eyebrow">— THE FOUNDERS</p>
        </motion.div>
      </section>

      {/* PROVENANCE FEATURE */}
      <section style={{ paddingBlock: '120px', paddingInline: 'var(--spacing-edge-desktop)', maxWidth: 'var(--max-w-site)', marginInline: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '64px', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-[3fr_2fr]">
          {/* Left: large image with overlay */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-surface-container)' }}>
              <img
                src="/images/collection-provenance.webp"
                alt="Heritage kitchen at dawn"
                width={1600}
                height={1200}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,20,18,0.8) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
                <p className="eyebrow" style={{ marginBottom: '8px' }}>PROVENANCE</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-on-surface)', maxWidth: '320px' }}>
                  Sourced from the source.
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right: cards */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ padding: '32px', background: 'var(--color-surface-container)', border: '1px solid rgba(233,195,73,0.1)' }}>
              <p style={{ fontSize: '1.5rem', marginBottom: '12px' }}>✦</p>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-on-surface)', marginBottom: '10px' }}>
                Bio-Dynamic Formula
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                Every ingredient traced to its origin. Every farm held to the standard of a grandmother's kitchen.
              </p>
            </div>
            <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--color-surface-container)' }}>
              <img
                src="/images/collection-texture.webp"
                alt="Fermented texture"
                width={400}
                height={400}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ paddingBlock: '120px', textAlign: 'center', paddingInline: 'var(--spacing-edge-desktop)', background: 'var(--color-surface-container-low)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--color-on-surface)', marginBottom: '40px' }}>
            Choose your ritual.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="ivory" size="lg" asChild>
              <Link to="/collection">Shop All</Link>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <Link to="/our-story">Read the Manifesto</Link>
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
