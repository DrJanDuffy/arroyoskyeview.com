import type { Metadata } from 'next'
import PurpleSaleBanner from '../../../components/purple-sale-banner'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import DrJanCTABanner from '../../../components/dr-jan-cta-banner'
import LasVegasMetroHero from '../../../components/las-vegas-metro-hero'
import CommunityListings from '../../../components/community-listings'
import MapView from '../../../components/map-view'

export const metadata: Metadata = {
  title: 'Find Your New Home in Las Vegas Metro | Century Communities',
  description: 'Discover new homes and communities in Las Vegas Metro, Nevada. Browse available homes, floor plans, and communities from Century Communities.',
}

export default function LasVegasMetroPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        <LasVegasMetroHero />
        <CommunityListings />
        <MapView />
      </main>
      <Footer />
    </div>
  )
}

