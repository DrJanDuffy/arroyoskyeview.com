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
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Contact Us | Century Communities Las Vegas',
  description: 'Contact Century Communities in Las Vegas. Get in touch with Dr. Jan Duffy, preferred buyer agent, for expert new home guidance. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/contact-us',
  },
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="contact"
        url="/contact-us"
        title="Contact Us | Century Communities"
        description="Get in touch with Century Communities. Contact our new home specialists for questions about homes, communities, financing, or to schedule a tour."
        breadcrumbs={[
          { name: 'Contact Us', url: '/contact-us' },
        ]}
        questions={[
          {
            question: 'How can I contact Dr. Jan Duffy?',
            answer: 'You can contact Dr. Jan Duffy by calling (702) 903-4687 or visiting the contact page for more information.',
          },
          {
            question: 'What services does Dr. Jan Duffy provide?',
            answer: 'Dr. Jan Duffy provides expert buyer representation including construction monitoring, building standards inspection, and insider knowledge of Century Communities homes.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner context="first-time homebuyer" />
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

