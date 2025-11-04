import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import AboutUsHero from '../components/about-us-hero'
import OurBrands from '../components/our-brands'
import OurPreferredBuyersAgent from '../components/our-preferred-buyers-agent'
import OurStory from '../components/our-story'
import WhereWeBuild from '../components/where-we-build'
import OnlineHomebuyingPioneer from '../components/online-homebuying-pioneer'
import OurAffiliates from '../components/our-affiliates'
import SupportingCommunities from '../components/supporting-communities'
import BuildCareer from '../components/build-career'

export const metadata: Metadata = {
  title: 'About Us | Century Communities',
  description: 'Learn about Century Communities - one company, two homebuilders built on trust. Building dream homes in 16+ states and 45+ markets across the country.',
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        <AboutUsHero />
        <OurBrands />
        <OurStory />
        <WhereWeBuild />
        <OnlineHomebuyingPioneer />
        <OurAffiliates />
        <OurPreferredBuyersAgent />
        <SupportingCommunities />
        <BuildCareer />
      </main>
      <Footer />
    </div>
  )
}

