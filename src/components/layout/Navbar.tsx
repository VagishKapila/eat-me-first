import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Rituals', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'Provenance', href: '/our-story' },
  { label: 'Our Story', href: '/our-story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-30 transition-all duration-300"
        style={{
          height: '80px',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          background: scrolled
            ? 'rgba(31, 32, 30, 0.9)'
            : 'rgba(31, 32, 30, 0.6)',
          borderBottom: scrolled
            ? '1px solid rgba(233,195,73,0.15)'
            : '1px solid transparent',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ paddingInline: 'var(--spacing-edge-desktop)', maxWidth: 'var(--max-w-site)', marginInline: 'auto' }}
        >
          {/* Wordmark */}
          <Link
            to="/"
            aria-label="Eat Me First — home"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--color-on-surface)',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            EAT ME FIRST
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={`${link.href}-${link.label}`}
                  to={link.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: isActive ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '2px',
                    transition: 'color 0.2s ease',
                  }}
                  className="group"
                >
                  {link.label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'var(--color-secondary)',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    }}
                    className="group-hover:!scale-x-100"
                  />
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              aria-label="Cart (0 items)"
              className="relative flex items-center justify-center w-10 h-10 rounded-full transition-colors"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {/* Badge */}
              <span
                aria-hidden="true"
                className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold"
                style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
              >
                0
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full transition-colors"
              style={{ color: 'var(--color-on-surface-variant)' }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
