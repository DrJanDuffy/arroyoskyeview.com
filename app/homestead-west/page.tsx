import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import HeroCarousel from '../components/hero-carousel'
import AvailableHomes from '../components/available-homes'
import FloorPlans from '../components/floor-plans'
import Overview from '../components/overview'
import SimilarCommunities from '../components/similar-communities'

export const metadata: Metadata = {
  title: 'Homestead West by Century Communities | New Homes in Las Vegas, NV',
  description: 'Homestead West is a residential community by Century Communities in Las Vegas, Nevada. Discover new homes and floor plans.',
  keywords: [
    'Homestead West',
    'Homestead West by Century Communities',
    'Century Communities Homestead',
    'new homes Las Vegas',
    'Las Vegas new construction',
  ],
}

export default function HomesteadWestPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        <HeroCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AvailableHomes />
          <div className="mt-12">
            <FloorPlans />
          </div>
          <div className="mt-12">
            <Overview />
          </div>
          <div className="mt-12">
            <DrJanContactCard />
          </div>
        </div>
        <SimilarCommunities />
      </main>
      <Footer />
    </div>
  )
}

