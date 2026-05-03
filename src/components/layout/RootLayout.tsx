import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { BuyModal } from '@/components/ui/BuyModal'
import { PRODUCTS } from '@/data/products'
import type { Product } from '@/types'

export function RootLayout() {
  const [buyProduct, setBuyProduct] = useState<Product | null>(null)

  const handleShop = (product?: Product) => {
    setBuyProduct(product ?? PRODUCTS[0])
  }

  return (
    <div className="min-h-screen bg-[#FFF8EE]">
      <Nav onShop={handleShop} />
      <Outlet context={{ onShop: handleShop }} />
      <Footer />
      <BuyModal product={buyProduct} onClose={() => setBuyProduct(null)} />
    </div>
  )
}
