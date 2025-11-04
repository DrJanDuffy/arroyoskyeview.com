import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'

export const metadata: Metadata = {
  title: 'Single Family Homes Las Vegas | New Construction',
  description: 'Find new construction single-family homes in Las Vegas. Spacious homes with modern designs and premium finishes. Expert buyer representation. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/single-family-las-vegas',
  },
}

export default function SingleFamilyHomesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="property-type"
        url="/homes/single-family-las-vegas"
        title="Single Family Homes Las Vegas | New Construction | Century Communities"
        description="Find new construction single-family homes in Las Vegas. Century Communities offers spacious single-family homes with modern designs, premium finishes, and expert buyer representation."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/single-family-las-vegas' },
          { name: 'Single Family Homes', url: '/homes/single-family-las-vegas' },
        ]}
        questions={[
          {
            question: 'What single-family home communities does Century Communities have in Las Vegas?',
            answer: 'Century Communities offers single-family homes in communities throughout Las Vegas including Skye Canyon, Summerlin, and Henderson. Contact Dr. Jan Duffy at (702) 903-4687 for current availability.',
          },
          {
            question: 'What are the benefits of buying a single-family home?',
            answer: 'Single-family homes offer more privacy, space, and the ability to customize your property. They\'re ideal for families and those who want their own yard and no shared walls.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Single Family Homes in Las Vegas
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover spacious new construction single-family homes from Century Communities. Perfect for growing families seeking privacy, space, and modern living.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Single-Family Home?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Single-family homes offer the ultimate in privacy, space, and customization. Century Communities builds single-family homes designed for modern families with features that enhance daily living.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Space</h3>
                    <p className="text-gray-700">
                      Detached homes provide complete privacy with your own yard and no shared walls.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customization</h3>
                    <p className="text-gray-700">
                      More flexibility to customize your home with finishes, layouts, and features that match your lifestyle.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Space</h3>
                    <p className="text-gray-700">
                      Private yards perfect for outdoor entertaining, play areas, or gardening.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Value</h3>
                    <p className="text-gray-700">
                      Single-family homes typically offer strong appreciation potential and resale value.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Century Communities Single-Family Homes</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Century Communities offers single-family homes across Las Vegas in master-planned communities with excellent amenities, schools, and location benefits.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Each home is built with quality construction, modern floor plans, and energy-efficient features designed to enhance your lifestyle and reduce utility costs.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Single-Family Home Features</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li>Spacious floor plans with 3-5+ bedrooms</li>
                  <li>Multiple bathrooms and living spaces</li>
                  <li>2-3 car garages</li>
                  <li>Private yards and outdoor spaces</li>
                  <li>Modern kitchens with premium appliances</li>
                  <li>Energy-efficient HVAC and insulation</li>
                  <li>Builder warranties included</li>
                </ul>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <DrJanContactCard />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

