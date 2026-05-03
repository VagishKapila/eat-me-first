import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import type { Product } from '@/types'

interface NavProps {
  onShop?: (product?: Product) => void
}

export function Nav({ onShop }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/collections/drinks', label: 'Drinks' },
    { href: '/collections/snacks', label: 'Snacks' },
    { href: '/our-story', label: 'The Sisters' },
    { href: '/why-ferment', label: 'Why Ferment' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#FFF8EE]/85 backdrop-blur-xl border-b border-black/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-[#1a1a1a] font-black tracking-tight text-lg md:text-xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            eat me{' '}
            <span
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}
              className="text-[#E94B5C]"
            >
              first
            </span>
            .
          </Link>

          <div
            className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {links.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-[#E94B5C] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onShop?.()}
              className="hidden md:flex bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#E94B5C] transition-colors items-center gap-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Shop <ShoppingBag size={14} />
            </button>
            <button
              className="md:hidden text-[#1a1a1a]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#FFF8EE] flex flex-col p-8">
          <div className="flex items-center justify-between mb-12">
            <Link
              to="/"
              className="text-[#1a1a1a] font-black tracking-tight text-xl"
              style={{ fontFamily: 'var(--font-sans)' }}
              onClick={() => setMobileOpen(false)}
            >
              eat me{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                first
              </span>
              .
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-3xl font-black text-[#1a1a1a] hover:text-[#E94B5C] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/collections/all"
              className="text-3xl font-black text-[#1a1a1a] hover:text-[#E94B5C] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
              onClick={() => setMobileOpen(false)}
            >
              Shop All
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
