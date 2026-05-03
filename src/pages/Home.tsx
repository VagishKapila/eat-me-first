import { useOutletContext } from 'react-router-dom'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Trio } from '@/components/sections/Trio'
import { ForYour } from '@/components/sections/ForYour'
import { Sisters } from '@/components/sections/Sisters'
import { WhyBento } from '@/components/sections/WhyBento'
import { Reviews } from '@/components/sections/Reviews'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Product } from '@/types'

interface OutletCtx {
  onShop: (product?: Product) => void
}

export default function Home() {
  const { onShop } = useOutletContext<OutletCtx>()

  return (
    <main>
      <Hero onShop={onShop} />
      <Marquee />
      <Trio onBuy={onShop} />
      <ForYour />
      <Sisters />
      <WhyBento />
      <Reviews />
      <FinalCTA onShop={onShop} />
    </main>
  )
}
