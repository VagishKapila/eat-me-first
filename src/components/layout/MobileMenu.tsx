import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { label: 'Rituals', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation()

  // Close on route change
  useEffect(() => {
    onClose()
  }, [location.pathname, onClose])

  // Trap focus when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col"
            style={{ background: 'var(--color-surface-container)', borderLeft: '1px solid rgba(233,195,73,0.15)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid rgba(233,195,73,0.1)' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>
                MENU
              </span>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{ color: 'var(--color-on-surface-variant)' }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="block py-3 transition-colors"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: location.pathname === link.href ? 'var(--color-secondary)' : 'var(--color-on-surface)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-8" style={{ borderTop: '1px solid rgba(233,195,73,0.1)' }}>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                  style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface-variant)' }}
                >
                  <Instagram size={18} />
                </a>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-sans)' }}>
                © 2025 Eat Me First
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
