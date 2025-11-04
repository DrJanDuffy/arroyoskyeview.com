import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'

export const metadata: Metadata = {
  title: 'New Homes in Summerlin Las Vegas | Century Communities | Dr. Jan Duffy',
  description: 'Discover new construction homes in Summerlin, Las Vegas. Find Century Communities new homes with expert buyer representation from Dr. Jan Duffy. Construction monitoring and insider knowledge included.',
  keywords: [
    'new homes Summerlin',
    'Summerlin Las Vegas',
    'new construction Summerlin',
    'Century Communities Summerlin',
    'homes for sale Summerlin',
    'Las Vegas new homes',
    'Summerlin real estate',
    'new homes Las Vegas',
  ],
}

export default function SummerlinPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="neighborhood"
        url="/neighborhoods/summerlin-las-vegas"
        title="New Homes in Summerlin Las Vegas | Century Communities | Dr. Jan Duffy"
        description="Discover new construction homes in Summerlin, Las Vegas. Find Century Communities new homes with expert buyer representation from Dr. Jan Duffy. Construction monitoring and insider knowledge included."
        breadcrumbs={[
          { name: 'Neighborhoods', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Summerlin', url: '/neighborhoods/summerlin-las-vegas' },
        ]}
        location="Summerlin"
        zipCode="89149"
        questions={[
          {
            question: 'What Century Communities developments are in Summerlin?',
            answer: 'Summerlin features multiple Century Communities developments. Contact Dr. Jan Duffy at (702) 903-4687 for current inventory and available homes in Summerlin.',
          },
          {
            question: 'What are the benefits of living in Summerlin?',
            answer: 'Summerlin offers luxury living, golf courses, excellent schools, shopping, dining, and recreational amenities. It\'s one of Las Vegas\'s most desirable master-planned communities.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Homes in Summerlin, Las Vegas
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover premier new construction homes in Summerlin, one of Las Vegas's most desirable master-planned communities. Get expert representation with Dr. Jan Duffy.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Summerlin, Las Vegas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin is one of the most prestigious master-planned communities in Las Vegas, offering residents a premium lifestyle with world-class amenities, top-rated schools, and beautiful natural surroundings.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Located on the western edge of Las Vegas, Summerlin spans over 22,500 acres and features multiple villages, each with its own unique character and amenities. The community is known for its:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li>Championship golf courses and country clubs</li>
                  <li>Extensive trail systems and parks</li>
                  <li>Top-rated public and private schools</li>
                  <li>Premium shopping and dining destinations</li>
                  <li>Proximity to Red Rock Canyon National Conservation Area</li>
                  <li>Strong community events and activities</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">New Construction Homes in Summerlin</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Century Communities offers exceptional new construction homes in the Summerlin area, designed for modern living with premium finishes and energy-efficient features.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Whether you're looking for a single-family home, townhome, or luxury residence, Summerlin provides diverse housing options to suit various lifestyles and budgets.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Summerlin?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality of Life</h3>
                    <p className="text-gray-700">
                      Summerlin consistently ranks among the best places to live in Nevada, offering a perfect blend of urban convenience and natural beauty.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Value</h3>
                    <p className="text-gray-700">
                      Properties in Summerlin have historically maintained strong values and appreciation rates, making it an excellent long-term investment.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Family-Friendly</h3>
                    <p className="text-gray-700">
                      With award-winning schools, safe neighborhoods, and abundant recreational facilities, Summerlin is ideal for families.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Location Benefits</h3>
                    <p className="text-gray-700">
                      Just 20 minutes from the Las Vegas Strip and McCarran Airport, while maintaining a peaceful residential atmosphere.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Buyer Representation</h2>
                <p className="text-lg text-gray-700 mb-4">
                  When buying a new construction home in Summerlin, working with Dr. Jan Duffy ensures you have expert representation throughout the process. Dr. Jan provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li>Insider knowledge of available Century Communities homes</li>
                  <li>Construction monitoring during your home's build</li>
                  <li>Building standards inspection at closing</li>
                  <li>Negotiation expertise for best pricing and incentives</li>
                  <li>No additional cost - Century Communities pays for buyer representation</li>
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

