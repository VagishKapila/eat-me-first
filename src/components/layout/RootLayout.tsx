import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RootLayout() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-surface)',
      }}
    >
      <Navbar />
      <main
        id="main-content"
        style={{ flex: 1, paddingTop: '80px' }}
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
