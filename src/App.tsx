import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { lazy, Suspense } from 'react'

const Home           = lazy(() => import('@/pages/Home'))
const ProductDetail  = lazy(() => import('@/pages/ProductDetail'))
const Collection     = lazy(() => import('@/pages/Collection'))
const OurStory       = lazy(() => import('@/pages/OurStory'))
const Contact        = lazy(() => import('@/pages/Contact'))
const FAQ            = lazy(() => import('@/pages/FAQ'))
const Wholesale      = lazy(() => import('@/pages/Wholesale'))
const Shipping       = lazy(() => import('@/pages/Shipping'))
const Subscriptions  = lazy(() => import('@/pages/Subscriptions'))
const Press          = lazy(() => import('@/pages/Press'))
const TheRecipes     = lazy(() => import('@/pages/TheRecipes'))
const WhereWeSource  = lazy(() => import('@/pages/WhereWeSource'))
const WhyFerment     = lazy(() => import('@/pages/WhyFerment'))
const NotFound       = lazy(() => import('@/pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#FFF8EE] flex items-center justify-center">
      <div className="text-[#E94B5C] font-black text-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
        🫙
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<RootLayout />}>
            {/* Home */}
            <Route index element={<Home />} />

            {/* Product detail — 3 SKUs */}
            <Route path="products/kanji"   element={<ProductDetail />} />
            <Route path="products/sattu"   element={<ProductDetail />} />
            <Route path="products/makhana" element={<ProductDetail />} />
            <Route path="products/:slug"   element={<ProductDetail />} />

            {/* Collections — 4 views */}
            <Route path="collections/all"     element={<Collection />} />
            <Route path="collections/drinks"  element={<Collection />} />
            <Route path="collections/snacks"  element={<Collection />} />
            <Route path="collections/bundles" element={<Collection />} />

            {/* Brand pages */}
            <Route path="our-story"        element={<OurStory />} />
            <Route path="the-recipes"      element={<TheRecipes />} />
            <Route path="where-we-source"  element={<WhereWeSource />} />
            <Route path="why-ferment"      element={<WhyFerment />} />
            <Route path="press"            element={<Press />} />

            {/* Help pages */}
            <Route path="contact"        element={<Contact />} />
            <Route path="shipping"       element={<Shipping />} />
            <Route path="subscriptions"  element={<Subscriptions />} />
            <Route path="faq"            element={<FAQ />} />

            {/* Wholesale */}
            <Route path="wholesale"  element={<Wholesale />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
