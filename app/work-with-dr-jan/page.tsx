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
import Link from 'next/link'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Work with Dr. Jan Duffy | Century Communities Expert',
  description: 'Expert buyer representation for Century Communities homes in Las Vegas. Construction monitoring, building standards inspection, insider knowledge. No extra cost. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/work-with-dr-jan',
  },
}

export default function WorkWithDrJanPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="about"
        url="/work-with-dr-jan"
        title="Work with Dr. Jan Duffy | Century Communities Expert Buyer's Agent"
        description="Get expert representation on Century Communities new construction homes in Las Vegas. Dr. Jan Duffy offers construction monitoring, building standards inspection, and insider knowledge—at no extra cost to you."
        breadcrumbs={[
          { name: 'Work with Dr. Jan', url: '/work-with-dr-jan' },
        ]}
        questions={[
          {
            question: 'Why should I work with Dr. Jan Duffy?',
            answer: 'Dr. Jan Duffy provides expert buyer representation for Century Communities homes including construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of available inventory and pricing.',
          },
          {
            question: 'How much does it cost to work with Dr. Jan Duffy?',
            answer: 'There is no extra cost to you. Century Communities pays for buyer representation on all their Las Vegas homes. The commission is built into home pricing whether you use an agent or not.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanHero />
        <WhyChooseDrJan />
        <BuyerJourney />
        <DrJanTestimonials />
        <BestOpportunities />
        <DrJanFAQ />
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Century Communities Homes in Las Vegas with Dr. Jan's Representation
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Explore these featured Century Communities where Dr. Jan Duffy provides expert buyer representation at no extra cost to you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  See available homes at Arroyo at Skyeview
                </h3>
                <p className="text-gray-600 text-sm">
                  Townhomes starting at $392,640 in Skye Canyon with construction monitoring and expert representation.
                </p>
              </Link>
              <Link
                href="/sierra-at-skyeview"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Explore Sierra at Skyeview new construction
                </h3>
                <p className="text-gray-600 text-sm">
                  New construction townhomes in Skye Canyon with Dr. Jan's insider knowledge and monitoring.
                </p>
              </Link>
              <Link
                href="/areas/zip-89166"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Browse all Skye Canyon communities
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover all Century Communities in Skye Canyon with expert buyer representation included.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

