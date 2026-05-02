import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import RootLayout from '@/components/layout/RootLayout'

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('@/pages/Home'))
const ProductDetail = lazy(() => import('@/pages/ProductDetail'))
const Collection = lazy(() => import('@/pages/Collection'))
const OurStory = lazy(() => import('@/pages/OurStory'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function PageLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-surface)',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid rgba(233,195,73,0.3)',
          borderTopColor: 'var(--color-secondary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
        aria-label="Loading"
        role="status"
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="collection" element={<Collection />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
