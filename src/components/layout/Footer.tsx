import { Link } from 'react-router-dom'

export function Footer() {
  const shopLinks = [
    { href: '/products/kanji', label: 'Kanji on My Mind' },
    { href: '/products/sattu', label: 'Sattu, but Sweet' },
    { href: '/products/makhana', label: 'Makhana' },
    { href: '/collections/bundles', label: 'Bundles' },
  ]
  const brandLinks = [
    { href: '/our-story', label: 'Our Story' },
    { href: '/the-recipes', label: 'The Recipes' },
    { href: '/where-we-source', label: 'Where We Source' },
    { href: '/press', label: 'Press' },
  ]
  const helpLinks = [
    { href: '/contact', label: 'Contact' },
    { href: '/shipping', label: 'Shipping' },
    { href: '/subscriptions', label: 'Subscriptions' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <footer className="bg-[#FFF8EE] py-16 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="text-[#1a1a1a] font-black tracking-tight text-3xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              eat me{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }} className="text-[#E94B5C]">
                first
              </span>
              .
            </Link>
            <p className="mt-4 text-[#3a3a3a] max-w-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              Real fermented drinks and clean snacks. Made by sisters, by hand, by recipe.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <a
                href="https://instagram.com/eatmefirst"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8E1FF] text-[#4A1A5C] px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[#7C4DFF] hover:text-white transition-colors"
              >
                @eatmefirst
              </a>
              <a
                href="https://tiktok.com/@eatmefirst"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD4D9] text-[#7A1F2B] px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[#E94B5C] hover:text-white transition-colors"
              >
                tiktok / @eatmefirst
              </a>
            </div>
          </div>

          {[
            ['Shop', shopLinks],
            ['Brand', brandLinks],
            ['Help', helpLinks],
          ].map(([title, items]) => (
            <div key={title as string} className="md:col-span-2">
              <div
                className="text-xs font-black tracking-[0.2em] text-[#1a1a1a] uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {title as string}
              </div>
              <ul className="space-y-2.5">
                {(items as { href: string; label: string }[]).map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-[#3a3a3a] text-sm hover:text-[#E94B5C] font-medium transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1" />
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
          <div>© 2026 Eat Me First · Crafted in California</div>
          <div className="flex gap-5">
            <Link to="/faq" className="hover:text-[#1a1a1a] transition-colors">Privacy</Link>
            <Link to="/faq" className="hover:text-[#1a1a1a] transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-[#1a1a1a] transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
