import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Brain, Sun, Shield, Moon, Flame, Zap, Droplets, Wind,
  Leaf, Heart, Sparkles, Anchor, Plus, Minus, ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { getProduct } from '@/data/products'
import type { Product } from '@/types'

// ---------------------------------------------------------------------------
// Icon map
// ---------------------------------------------------------------------------
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Brain,
  Sun,
  Shield,
  Moon,
  Flame,
  Zap,
  Droplets,
  Wind,
  Leaf,
  Heart,
  Sparkles,
  Anchor,
}

// ---------------------------------------------------------------------------
// Inline style helpers
// ---------------------------------------------------------------------------
const GOLD = 'var(--color-secondary)'
const FONT_SERIF = '"Noto Serif", Georgia, serif'
const FONT_SANS = '"Manrope", system-ui, sans-serif'

// ---------------------------------------------------------------------------
// Framer Motion variants
// ---------------------------------------------------------------------------
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ---------------------------------------------------------------------------
// ProductDetail
// ---------------------------------------------------------------------------
export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const product: Product | undefined = getProduct(slug ?? '')

  // --- ATC dialog state ---
  const [atcOpen, setAtcOpen] = useState(false)
  const [atcEmail, setAtcEmail] = useState('')
  const [atcSubmitted, setAtcSubmitted] = useState(false)

  // --- Quantity ---
  const [quantity, setQuantity] = useState(1)

  // --- Sticky mobile CTA bar ---
  const [showMobileBar, setShowMobileBar] = useState(false)

  // --- Scroll listener for mobile bar ---
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileBar(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // --- Meta ---
  useEffect(() => {
    if (!product) return
    document.title = `${product.name} — Eat Me First`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', product.tagline)
  }, [product])

  // --- ATC submit ---
  const handleAtcSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to email capture API
    setAtcSubmitted(true)
  }

  // --- Smooth scroll to story ---
  const scrollToStory = () => {
    const el = document.getElementById('story')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // --- Quantity helpers ---
  const decrement = () => setQuantity(q => Math.max(1, q - 1))
  const increment = () => setQuantity(q => Math.min(12, q + 1))

  // ---------------------------------------------------------------------------
  // 404 state
  // ---------------------------------------------------------------------------
  if (!product) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          background: 'var(--color-surface)',
          padding: '48px var(--spacing-edge-mobile)',
        }}
      >
        <p
          style={{
            fontFamily: FONT_SERIF,
            fontSize: '1.5rem',
            color: 'var(--color-on-surface)',
            textAlign: 'center',
          }}
        >
          We couldn't find that product.
        </p>
        <Button
          variant="gold"
          size="md"
          onClick={() => navigate('/shop')}
        >
          Back to Shop
        </Button>
      </div>
    )
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* BACK NAV */}
      {/* ------------------------------------------------------------------ */}
      <div
        style={{
          maxWidth: 'var(--max-w-site)',
          margin: '0 auto',
          padding: '32px var(--spacing-edge-desktop) 0',
        }}
      >
        <Link
          to="/shop"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: FONT_SANS,
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-on-surface-variant)',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — HERO SPLIT */}
      {/* ------------------------------------------------------------------ */}
      <section
        style={{
          maxWidth: 'var(--max-w-site)',
          margin: '0 auto',
          padding: '48px var(--spacing-edge-desktop) var(--spacing-section-desktop)',
          display: 'grid',
          gridTemplateColumns: '60fr 40fr',
          gap: '64px',
          alignItems: 'start',
        }}
        className="product-hero"
      >
        {/* LEFT — Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <img
            src={product.heroImage}
            alt={product.name}
            style={{
              width: '100%',
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>

        {/* RIGHT — Sticky Info Panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            position: 'sticky',
            top: '100px',
            padding: '48px',
            maxWidth: '560px',
          }}
          className="product-info-panel"
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: '16px',
            }}
          >
            {product.eyebrow}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: FONT_SERIF,
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--color-on-surface)',
              lineHeight: 1.1,
              margin: '0 0 28px',
            }}
          >
            {product.name}
          </h1>

          {/* Price Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                fontFamily: FONT_SERIF,
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-on-surface)',
              }}
            >
              ${product.price}
            </span>
            <div
              style={{
                width: '1px',
                height: '32px',
                background: GOLD,
                opacity: 0.4,
              }}
            />
            {product.casePrice && (
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: GOLD,
                }}
              >
                Case of {product.caseSize ?? 6} — ${product.casePrice}
              </span>
            )}
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: FONT_SERIF,
              fontStyle: 'italic',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--color-on-surface-variant)',
              maxWidth: '380px',
              marginBottom: '40px',
            }}
          >
            {product.tagline}
          </p>

          {/* Quantity Stepper */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              marginBottom: '24px',
              border: '1px solid rgba(233,195,73,0.3)',
              borderRadius: '0',
              width: 'fit-content',
            }}
          >
            <button
              onClick={decrement}
              aria-label="Decrease quantity"
              style={{
                width: '44px',
                height: '44px',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-on-surface)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: quantity <= 1 ? 0.3 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <Minus size={14} strokeWidth={1.5} />
            </button>
            <span
              style={{
                width: '48px',
                textAlign: 'center',
                fontFamily: FONT_SANS,
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                borderLeft: '1px solid rgba(233,195,73,0.3)',
                borderRight: '1px solid rgba(233,195,73,0.3)',
                height: '44px',
                lineHeight: '44px',
              }}
            >
              {quantity}
            </span>
            <button
              onClick={increment}
              aria-label="Increase quantity"
              style={{
                width: '44px',
                height: '44px',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-on-surface)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: quantity >= 12 ? 0.3 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <Plus size={14} strokeWidth={1.5} />
            </button>
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <Button
              variant="ivory"
              size="full"
              onClick={() => setAtcOpen(true)}
            >
              ADD TO COLLECTION
            </Button>
            <Button
              variant="gold"
              size="full"
              onClick={scrollToStory}
            >
              THE SOURCING STORY
            </Button>
          </div>

          {/* Badge Row */}
          {product.badges && product.badges.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {product.badges.map((badge: string) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-on-surface-variant)',
                    background: 'var(--color-surface-container-high)',
                    borderTop: '1px solid rgba(233,195,73,0.2)',
                    padding: '6px 12px',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — THE SCIENCE OF GRACE (Pillars) */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="pillars"
        style={{
          background: 'var(--color-surface-container-low)',
          padding: 'var(--spacing-section-desktop) var(--spacing-edge-desktop)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-w-site)',
            margin: '0 auto',
          }}
        >
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '72px' }}
          >
            <p
              style={{
                fontFamily: FONT_SANS,
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '20px',
              }}
            >
              THE SCIENCE OF GRACE
            </p>
            <h2
              style={{
                fontFamily: FONT_SERIF,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: 'var(--color-on-surface)',
                margin: '0 0 20px',
              }}
            >
              The Formula
            </h2>
            <p
              style={{
                fontFamily: FONT_SANS,
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Four principles. One formulation philosophy.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          {product.pillars && product.pillars.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={containerVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '48px',
              }}
              className="pillars-grid"
            >
              {product.pillars.map(
                (pillar: { icon: string; title: string; body: string }) => {
                  const IconComponent = iconMap[pillar.icon] ?? Leaf
                  return (
                    <motion.div key={pillar.title} variants={itemVariants}>
                      {/* Icon Container */}
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          background: 'var(--color-surface-container-high)',
                          border: '1px solid var(--color-outline)',
                          borderRadius: '0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0',
                        }}
                      >
                        <IconComponent
                          size={28}
                          strokeWidth={1.25}
                          // @ts-ignore — inline style on SVG element
                          style={{ color: GOLD }}
                        />
                      </div>

                      {/* Title */}
                      <p
                        style={{
                          fontFamily: FONT_SANS,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: GOLD,
                          marginTop: '16px',
                          marginBottom: '12px',
                        }}
                      >
                        {pillar.title}
                      </p>

                      {/* Body */}
                      <p
                        style={{
                          fontFamily: FONT_SANS,
                          fontSize: '0.875rem',
                          fontWeight: 300,
                          color: 'var(--color-on-surface-variant)',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {pillar.body}
                      </p>
                    </motion.div>
                  )
                },
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — SOURCING STORY */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="story"
        style={{
          padding: 'var(--spacing-section-desktop) var(--spacing-edge-desktop)',
          background: 'var(--color-surface)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-w-site)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="story-grid"
        >
          {/* Left — Story Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <img
              src={product.storyImage}
              alt="sourcing story"
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Right — Story Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: FONT_SANS,
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '20px',
              }}
            >
              THE SOURCE
            </p>

            {/* Italic Title */}
            <h2
              style={{
                fontFamily: FONT_SERIF,
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
                fontWeight: 400,
                color: 'var(--color-on-surface)',
                maxWidth: '480px',
                margin: '0 0 28px',
                lineHeight: 1.35,
              }}
            >
              {product.storyTitle}
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: FONT_SANS,
                fontSize: '1rem',
                fontWeight: 300,
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.7,
                maxWidth: '480px',
                margin: '0 0 36px',
              }}
            >
              {product.storyBody}
            </p>

            {/* Provenance Link */}
            <Link
              to="/our-story"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: FONT_SANS,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: GOLD,
                textDecoration: 'none',
              }}
            >
              EXPLORE OUR PROVENANCE
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — TRUST SIGNALS */}
      {/* ------------------------------------------------------------------ */}
      <section
        style={{
          background: 'var(--color-surface-container-low)',
          padding: '64px var(--spacing-edge-desktop)',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            maxWidth: 'var(--max-w-site)',
            margin: '0 auto',
          }}
        >
          {['Made in California', 'Small Batch', 'Family Recipe', '30-Day Promise'].map(
            (item, i, arr) => (
              <span
                key={item}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: GOLD,
                      opacity: 0.6,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                )}
              </span>
            ),
          )}
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — FINAL CTA */}
      {/* ------------------------------------------------------------------ */}
      <section
        style={{
          padding: '128px var(--spacing-edge-desktop)',
          textAlign: 'center',
          background: 'var(--color-surface)',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontSize: 'clamp(2rem, 3vw, 2.75rem)',
              fontWeight: 400,
              color: 'var(--color-on-surface)',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Begin the {product.name} Ritual.
          </h2>
          <Button
            variant="ivory"
            size="xl"
            onClick={() => setAtcOpen(true)}
          >
            ADD TO COLLECTION
          </Button>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ATC DIALOG */}
      {/* ------------------------------------------------------------------ */}
      <Dialog open={atcOpen} onOpenChange={setAtcOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You're early.</DialogTitle>
            <DialogDescription>
              We launch in spring 2026. Drop your email and we'll save you the
              first batch.
            </DialogDescription>
          </DialogHeader>
          {atcSubmitted ? (
            <p
              style={{
                color: GOLD,
                fontFamily: FONT_SANS,
                fontSize: '0.875rem',
                marginTop: '16px',
                lineHeight: 1.6,
              }}
            >
              You're on the list. We'll reach out before anyone else.
            </p>
          ) : (
            <form
              onSubmit={handleAtcSubmit}
              style={{
                marginTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={atcEmail}
                onChange={e => setAtcEmail(e.target.value)}
                aria-label="Email address"
                style={{
                  background: 'var(--color-surface)',
                  border: 'none',
                  borderBottom: '1px solid rgba(233,195,73,0.4)',
                  color: 'var(--color-on-surface)',
                  fontFamily: FONT_SANS,
                  padding: '12px 0',
                  outline: 'none',
                  fontSize: '0.875rem',
                  width: '100%',
                }}
              />
              <Button type="submit" variant="ivory" size="md">
                SAVE MY SPOT
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ------------------------------------------------------------------ */}
      {/* STICKY MOBILE CTA BAR (< 1024px) */}
      {/* ------------------------------------------------------------------ */}
      {showMobileBar && !atcOpen && (
        <div
          className="mobile-cta-bar"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'var(--color-surface-container-high)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(233,195,73,1)',
            padding: '14px var(--spacing-edge-mobile)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
              }}
            >
              {product.name}
            </span>
            <span
              style={{
                fontFamily: FONT_SERIF,
                fontSize: '1.125rem',
                fontWeight: 400,
                color: 'var(--color-on-surface)',
              }}
            >
              ${product.price}
            </span>
          </div>

          {/* Right */}
          <Button
            variant="ivory"
            size="sm"
            onClick={() => setAtcOpen(true)}
          >
            ADD
          </Button>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* RESPONSIVE STYLES (injected as a style tag) */}
      {/* ------------------------------------------------------------------ */}
      <style>{`
        @media (max-width: 1023px) {
          .product-hero {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding: 32px var(--spacing-edge-mobile) 80px !important;
          }
          .product-info-panel {
            position: static !important;
            padding: 32px 0 !important;
            max-width: 100% !important;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 639px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 1024px) {
          .mobile-cta-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
