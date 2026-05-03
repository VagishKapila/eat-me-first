import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="pt-28 pb-20 bg-[#FFF8EE] min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl mb-6">🫙</div>
        <h1
          className="text-[#1a1a1a] font-black tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          404 — Empty jar.
        </h1>
        <p className="text-[#3a3a3a] text-lg mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
          This page doesn't exist. But the pantry does.
        </p>
        <Link
          to="/"
          className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-black hover:bg-[#E94B5C] transition-colors inline-block"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Go home →
        </Link>
      </div>
    </main>
  )
}

export default NotFound
