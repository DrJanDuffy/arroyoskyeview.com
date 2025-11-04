import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroCarousel from '../components/hero-carousel'
import AvailableHomes from '../components/available-homes'
import FloorPlans from '../components/floor-plans'
import Overview from '../components/overview'
import SimilarCommunities from '../components/similar-communities'

export const metadata: Metadata = {
  title: 'Terra at Skyeview by Century Communities | New Homes in Las Vegas, NV',
  description: 'Terra at Skyeview is a residential community in Skye Canyon, Las Vegas, Nevada. Discover new homes and floor plans from Century Communities.',
  keywords: [
    'Terra at Skyeview',
    'Terra at Skyview',
    'Century Communities Terra',
    'Skyeview Las Vegas',
    'new homes Skye Canyon',
    'Las Vegas new construction',
  ],
}

export default function TerraAtSkyeviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <HeroCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AvailableHomes />
          <div className="mt-12">
            <FloorPlans />
          </div>
          <div className="mt-12">
            <Overview />
          </div>
        </div>
        <SimilarCommunities />
      </main>
      <Footer />
    </div>
  )
}

