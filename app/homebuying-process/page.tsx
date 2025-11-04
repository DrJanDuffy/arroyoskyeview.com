import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import HomebuyingProcessHero from '../components/homebuying-process-hero'
import ProcessSteps from '../components/process-steps'
import HowWeMakeItEasy from '../components/how-we-make-it-easy'
import MoreWaysToStreamline from '../components/more-ways-to-streamline'
import HomebuyerResourcesCarousel from '../components/homebuyer-resources-carousel'
import GetInTouch from '../components/get-in-touch'

export const metadata: Metadata = {
  title: 'Homebuying Process | Century Communities',
  description: 'Explore the homebuying process with Century Communities. Learn about prequalification, house hunting, contracting, and closing on your new home.',
}

export default function HomebuyingProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        <HomebuyingProcessHero />
        <ProcessSteps />
        <HowWeMakeItEasy />
        <MoreWaysToStreamline />
        <HomebuyerResourcesCarousel />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  )
}

