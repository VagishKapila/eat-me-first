import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Sun,
  Heart,
  Sparkles,
  Anchor,
  Droplets,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/data/products'

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.15em',
        color: 'var(--color-secondary)',
        textTransform: 'uppercase',
        marginBottom: '16px',
      }}
    >
      {children}
    </p>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: 'var(--color-secondary)',
          opacity: 0.6,
        }}
      >
        SCROLL
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <ArrowRight
          size={18}
          color="var(--color-secondary)"
          style={{ transform: 'rotate(90deg)', opacity: 0.6 }}
        />
      </motion.div>
    </motion.div>
  )
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse 60% 70% at 90% 10%, rgba(255,179,182,0.12) 0%, transparent 65%),
          linear-gradient(160deg, #1a1e1a 0%, var(--color-surface) 50%, #0e1210 100%)
        `,
      }}
    >
      {/* Decorative grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          opacity: 0.4,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 'var(--max-w-site, 1440px)',
          margin: '0 auto',
          padding:
            'var(--spacing-section-desktop, 160px) var(--spacing-edge-desktop, 64px)',
        }}
        className="hero-inner"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionEyebrow>ANCESTRAL · FERMENTED · ALIVE</SectionEyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            style={{
              fontFamily: 'Noto Serif, Georgia, serif',
              fontSize: 'clamp(52px, 7vw, 80px)',
              fontWeight: 400,
              color: 'var(--color-on-surface)',
              lineHeight: 1.05,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Eat Me First
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            style={{
              fontFamily: 'Noto Serif, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.6,
              maxWidth: '540px',
              marginBottom: '40px',
              fontWeight: 400,
            }}
          >
            Family recipes. Modern science. Made by two women who refused to
            compromise.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Button asChild size="lg">
              <Link to="/collection">Shop the Rituals</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              style={{
                borderColor: 'var(--color-secondary)',
                color: 'var(--color-secondary)',
                background: 'transparent',
              }}
            >
              <Link to="/our-story">The Philosophy</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />

      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            padding:
              var(--spacing-section-mobile, 80px)
              var(--spacing-edge-mobile, 24px) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Section 2: Manifesto ─────────────────────────────────────────────────────

function ManifestoSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--color-surface-container-low)',
        borderLeft: '3px solid var(--color-secondary)',
        padding:
          'var(--spacing-section-desktop, 160px) var(--spacing-edge-desktop, 64px)',
      }}
      className="manifesto-section"
    >
      <div
        style={{
          maxWidth: 'var(--max-w-site, 1440px)',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>THE MANIFESTO</SectionEyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            style={{
              fontFamily: 'Noto Serif, Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400,
              color: 'var(--color-on-surface)',
              lineHeight: 1.15,
              marginBottom: '0',
              letterSpacing: '-0.02em',
            }}
          >
            This isn't just food.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            style={{
              fontFamily: 'Noto Serif, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400,
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.15,
              marginBottom: '32px',
              letterSpacing: '-0.02em',
            }}
          >
            It is a sacred ritual.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(16px, 1.5vw, 18px)',
              fontWeight: 300,
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.75,
              maxWidth: '640px',
            }}
          >
            Born from forty years of kitchen wisdom and modern nutritional
            science. We ferment with purpose, source with integrity, and
            formulate with the precision of women who have spent lifetimes
            learning what the body truly needs.
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .manifesto-section {
            padding:
              var(--spacing-section-mobile, 80px)
              var(--spacing-edge-mobile, 24px) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Section 3: Product Trio ──────────────────────────────────────────────────

function ProductCard({
  product,
  delay,
}: {
  product: (typeof products)[number]
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      custom={delay}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      style={{
        background: 'var(--color-surface-container)',
        borderTop: '2px solid var(--color-secondary)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
        <img
          src={product.heroImage}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s ease',
          }}
          onError={(e) => {
            const img = e.currentTarget
            img.style.background = 'var(--color-surface-container-high)'
            img.style.minHeight = '320px'
            img.removeAttribute('src')
          }}
        />
      </div>

      <div style={{ padding: '28px 24px 32px' }}>
        {'eyebrow' in product && (
          <SectionEyebrow>{(product as { eyebrow: string }).eyebrow}</SectionEyebrow>
        )}
        <h3
          style={{
            fontFamily: 'Noto Serif, Georgia, serif',
            fontSize: '28px',
            fontWeight: 400,
            color: 'var(--color-on-surface)',
            lineHeight: 1.2,
            marginBottom: '8px',
            letterSpacing: '-0.01em',
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: 'var(--color-on-surface-variant)',
            lineHeight: 1.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginBottom: '20px',
          }}
        >
          {product.tagline}
        </p>

        <Link
          to={`/products/${product.slug}`}
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--color-secondary)',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          EXPLORE THE RITUAL →
        </Link>
      </div>
    </motion.div>
  )
}

function ProductTrioSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const displayProducts = Object.values(products).slice(0, 3)

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        padding:
          'var(--spacing-section-desktop, 160px) var(--spacing-edge-desktop, 64px)',
      }}
      className="product-trio-section"
    >
      <div
        style={{
          maxWidth: 'var(--max-w-site, 1440px)',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ marginBottom: '64px' }}
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>THE RITUALS</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            style={{
              fontFamily: 'Noto Serif, Georgia, serif',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 400,
              color: 'var(--color-on-surface)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '600px',
            }}
          >
            Three formulas for the intentional life.
          </motion.h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="product-grid"
        >
          {displayProducts.map((product: import('@/types').Product, index: number) => (
            <ProductCard key={product.slug} product={product} delay={index * 0.12} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .product-trio-section {
            padding:
              var(--spacing-section-mobile, 80px)
              var(--spacing-edge-mobile, 24px) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Section 4: Benefit Row ───────────────────────────────────────────────────

const BENEFITS = [
  { icon: Sparkles, label: 'ALIVE & FERMENTED' },
  { icon: Sun, label: 'ANCESTRAL' },
  { icon: Heart, label: 'LONGEVITY' },
  { icon: Droplets, label: 'CLEAN' },
  { icon: Anchor, label: 'ROOTED' },
]

function BenefitRowSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--color-surface-container)',
        padding: '64px var(--spacing-edge-desktop, 64px)',
      }}
      className="benefit-section"
    >
      <div
        style={{
          maxWidth: 'var(--max-w-site, 1440px)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '48px 64px',
        }}
        className="benefit-row"
      >
        {BENEFITS.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={i * 0.08}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Icon size={28} color="var(--color-secondary)" strokeWidth={1.5} />
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .benefit-section {
            padding: 56px var(--spacing-edge-mobile, 24px) !important;
          }
          .benefit-row {
            gap: 40px 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Section 5: Editorial Quote ───────────────────────────────────────────────

function EditorialQuoteSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        padding: '128px var(--spacing-edge-desktop, 64px)',
        textAlign: 'center',
      }}
      className="quote-section"
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeIn}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <span
          style={{
            fontFamily: 'Noto Serif, Georgia, serif',
            fontSize: '80px',
            lineHeight: 0.8,
            color: 'var(--color-secondary)',
            display: 'block',
            opacity: 0.7,
          }}
        >
          "
        </span>

        <blockquote
          style={{
            fontFamily: 'Noto Serif, Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 3vw, 30px)',
            fontWeight: 400,
            color: 'var(--color-on-surface)',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Longevity is found in the stillness of the morning, fueled by the
          ancestral wisdom of the earth.
        </blockquote>

        <div
          style={{
            width: '80px',
            height: '1px',
            background: 'var(--color-secondary)',
            opacity: 0.5,
          }}
        />

        <cite
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: 'var(--color-secondary)',
            textTransform: 'uppercase',
            fontStyle: 'normal',
          }}
        >
          — THE FOUNDERS
        </cite>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .quote-section {
            padding: 80px var(--spacing-edge-mobile, 24px) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Section 6: Lifestyle Split ───────────────────────────────────────────────

function LifestyleSplitSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        padding: '0 0 0 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '600px',
        }}
        className="lifestyle-grid"
      >
        {/* Left image */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideLeft}
          style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}
        >
          <img
            src="/images/home-lifestyle-morning.webp"
            alt="Morning ritual"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(135deg, var(--color-surface-container) 0%, var(--color-surface-container-high) 100%)'
              e.currentTarget.removeAttribute('src')
            }}
          />
        </motion.div>

        {/* Right image with overlay text */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideRight}
          style={{
            aspectRatio: '4/5',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src="/images/home-lifestyle-pour.webp"
            alt="The pour"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container) 100%)'
              e.currentTarget.removeAttribute('src')
            }}
          />

          {/* Overlay text */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '36px',
              right: '36px',
            }}
          >
            <div
              style={{
                background: 'rgba(18, 20, 18, 0.75)',
                backdropFilter: 'blur(12px)',
                padding: '24px 28px',
                borderLeft: '3px solid var(--color-secondary)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Noto Serif, Georgia, serif',
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  fontWeight: 400,
                  color: 'var(--color-on-surface)',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                }}
              >
                Designed for your Rhythm.
              </p>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Morning, noon, or after the work is done.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lifestyle-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Section 7: Final CTA ─────────────────────────────────────────────────────

function FinalCTASection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--color-surface-container-low)',
        padding: '128px var(--spacing-edge-desktop, 64px)',
        textAlign: 'center',
      }}
      className="final-cta-section"
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <motion.div variants={fadeUp}>
          <SectionEyebrow>YOUR WELLBEING</SectionEyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          style={{
            fontFamily: 'Noto Serif, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 400,
            color: 'var(--color-on-surface)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Nourish Your Gut.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          style={{
            fontFamily: 'Noto Serif, Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 400,
            color: 'var(--color-on-surface-variant)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 32px',
          }}
        >
          Elevate Your Life.
        </motion.p>

        <motion.div variants={fadeUp} custom={0.25}>
          <Button
            asChild
            size="lg"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              padding: '18px 48px',
              borderRadius: '0',
              background: 'var(--color-on-surface)',
              color: 'var(--color-surface)',
              border: 'none',
              textTransform: 'uppercase',
            }}
          >
            <Link to="/collection">BEGIN THE RITUAL</Link>
          </Button>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .final-cta-section {
            padding: 80px var(--spacing-edge-mobile, 24px) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ background: 'var(--color-surface)' }}>
      <HeroSection />
      <ManifestoSection />
      <ProductTrioSection />
      <BenefitRowSection />
      <EditorialQuoteSection />
      <LifestyleSplitSection />
      <FinalCTASection />
    </main>
  )
}
