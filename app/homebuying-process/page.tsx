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
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Homebuying Process | Century Communities Las Vegas',
  description: 'Learn the new home buying process with Century Communities. From prequalification to closing, Dr. Jan Duffy guides you every step. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homebuying-process',
  },
}

export default function HomebuyingProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="process"
        url="/homebuying-process"
        title="Homebuying Process | Century Communities"
        description="Explore the homebuying process with Century Communities. Learn about prequalification, house hunting, contracting, and closing on your new home."
        breadcrumbs={[
          { name: 'Homebuyer Resources', url: '/' },
          { name: 'Homebuying Process', url: '/homebuying-process' },
        ]}
        questions={[
          {
            question: 'What are the steps in the homebuying process?',
            answer: 'The homebuying process includes: 1) Prequalify, 2) House Hunt, 3) Contract, and 4) Close on your new home.',
          },
          {
            question: 'How long does the homebuying process take?',
            answer: 'The homebuying process typically takes 4-7 months from contract to closing for new construction homes.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner context="first-time homebuyer guide" />
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

