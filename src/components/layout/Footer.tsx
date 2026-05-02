import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const shopLinks = [
  { label: 'Kanji on My Mind', href: '/products/kanji' },
  { label: 'Lemon Got Spice', href: '/products/lemon' },
  { label: 'Craving the Masala', href: '/products/masala' },
  { label: 'The Collection', href: '/collection' },
]

const heritageLinks = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
  { label: 'Journal', href: '#journal' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer
      style={{
        background: 'var(--color-surface-container-lowest)',
        borderTop: '1px solid rgba(233,195,73,0.1)',
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: 'var(--max-w-site)',
          marginInline: 'auto',
          paddingInline: 'var(--spacing-edge-desktop)',
          paddingBlock: '80px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
          }}
          className="flex flex-col sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Col 1: Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-on-surface)',
                marginBottom: '16px',
              }}
            >
              EAT ME FIRST
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 300,
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.6,
                maxWidth: '240px',
              }}
            >
              Sacred science for the modern aesthete.
            </p>
            <p
              style={{
                marginTop: '32px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--color-outline)',
              }}
            >
              © 2025 Eat Me First
            </p>
          </div>

          {/* Col 2: Shop */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '24px' }}>Shop</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'var(--color-on-surface-variant)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="hover:!text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Heritage */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '24px' }}>Heritage</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {heritageLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        fontWeight: 300,
                        color: 'var(--color-on-surface-variant)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        fontWeight: 300,
                        color: 'var(--color-on-surface-variant)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      className="hover:!text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '8px' }}>Join the Archive</p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 300,
                color: 'var(--color-on-surface-variant)',
                marginBottom: '20px',
                lineHeight: 1.5,
              }}
            >
              Recipes, rituals, and early access to new formulas.
            </p>
            {submitted ? (
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--color-secondary)' }}>
                You're on the list.
              </p>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(233,195,73,0.4)' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email for newsletter"
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: 'var(--color-on-surface)',
                      paddingBlock: '8px',
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    style={{ color: 'var(--color-secondary)', background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px' }}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingBlock: '20px',
          paddingInline: 'var(--spacing-edge-desktop)',
          maxWidth: 'var(--max-w-site)',
          marginInline: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Use', href: '#terms' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--color-outline)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-outline)' }}>
          Crafted in California
        </p>
      </div>
    </footer>
  )
}
