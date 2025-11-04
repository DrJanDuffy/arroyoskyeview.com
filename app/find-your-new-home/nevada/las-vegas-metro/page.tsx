import type { Metadata } from 'next'
import PurpleSaleBanner from '../../../components/purple-sale-banner'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import DrJanCTABanner from '../../../components/dr-jan-cta-banner'
import LasVegasMetroHero from '../../../components/las-vegas-metro-hero'
import CommunityListings from '../../../components/community-listings'
import MapView from '../../../components/map-view'
import PageSchemas from '../../../components/page-schemas'

export const metadata: Metadata = {
  title: 'Find Your New Home in Las Vegas Metro | Century Communities',
  description: 'Discover new homes and communities in Las Vegas Metro, Nevada. Browse available homes, floor plans, and communities from Century Communities.',
}

export default function LasVegasMetroPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="neighborhood"
        url="/find-your-new-home/nevada/las-vegas-metro"
        title="Find Your New Home in Las Vegas Metro | Century Communities"
        description="Discover new homes and communities in Las Vegas Metro, Nevada. Browse available homes, floor plans, and communities from Century Communities."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
        ]}
        location="Las Vegas Metro"
        questions={[
          {
            question: 'What communities are available in Las Vegas Metro?',
            answer: 'Century Communities has multiple communities in Las Vegas Metro including Skye Canyon, Summerlin, Henderson, and other premier locations.',
          },
          {
            question: 'How do I find available homes in Las Vegas Metro?',
            answer: 'You can browse available homes, floor plans, and communities on this page. Contact Dr. Jan Duffy at (702) 903-4687 for real-time inventory and current pricing.',
          },
        ]}
      />
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

