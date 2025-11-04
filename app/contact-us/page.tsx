import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import WhyWorkWithDrJan from '../components/why-work-with-dr-jan'
import ContactHero from '../components/contact-hero'
import ContactForm from '../components/contact-form'
import ContactLocations from '../components/contact-locations'
import ContactMethods from '../components/contact-methods'

export const metadata: Metadata = {
  title: 'Contact Us | Century Communities',
  description: 'Get in touch with Century Communities. Contact our new home specialists for questions about homes, communities, financing, or to schedule a tour.',
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        <ContactHero />
        <WhyWorkWithDrJan />
        <ContactForm />
        <ContactLocations />
        <ContactMethods />
      </main>
      <Footer />
    </div>
  )
}

