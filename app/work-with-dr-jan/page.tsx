import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanHero from '../components/dr-jan-hero'
import WhyChooseDrJan from '../components/why-choose-dr-jan'
import BuyerJourney from '../components/buyer-journey'
import DrJanTestimonials from '../components/dr-jan-testimonials'
import BestOpportunities from '../components/best-opportunities'
import DrJanFAQ from '../components/dr-jan-faq'

export const metadata: Metadata = {
  title: 'Work with Dr. Duffy | Century Communities Expert Buyer\'s Agent',
  description: 'Get expert representation on Century Communities new construction homes in Las Vegas. Dr. Duffy offers construction monitoring, building standards inspection, and insider knowledge—at no extra cost to you.',
  keywords: [
    'Dr. Duffy',
    'Century Communities buyer agent',
    'Las Vegas real estate agent',
    'new construction buyer agent',
    'construction monitoring',
    'building standards inspection',
    'Century Communities expert',
  ],
}

export default function WorkWithDrJanPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanHero />
        <WhyChooseDrJan />
        <BuyerJourney />
        <DrJanTestimonials />
        <BestOpportunities />
        <DrJanFAQ />
      </main>
      <Footer />
    </div>
  )
}

