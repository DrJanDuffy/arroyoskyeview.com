import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Script from 'next/script'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'Las Vegas New Homes Questions & Answers | Hyperlocal FAQ | Century Communities',
  description: 'Comprehensive hyperlocal questions and answers about buying new homes in Las Vegas, Nevada. Get expert answers about neighborhoods, schools, lifestyle, and Century Communities homes.',
  keywords: [
    'Las Vegas new homes questions',
    'Las Vegas homebuying FAQ',
    'Skye Canyon questions',
    'Summerlin new homes',
    'Henderson real estate',
    'Las Vegas neighborhoods',
    'Las Vegas schools',
    'Century Communities Las Vegas',
  ],
}

const hyperlocalQuestions = [
  {
    question: 'What are the best neighborhoods in Las Vegas for new construction homes?',
    answer: 'Some of the best neighborhoods for new construction in Las Vegas include Skye Canyon (NW Las Vegas), Summerlin (west side), Henderson (southeast), and North Las Vegas. Skye Canyon offers master-planned community amenities, top-rated schools, and proximity to nature. Summerlin is known for luxury homes and golf courses. Henderson offers family-friendly neighborhoods with excellent schools. Each area has Century Communities developments with modern new construction homes.',
  },
  {
    question: 'What zip codes in Las Vegas have Century Communities new homes?',
    answer: 'Century Communities builds new homes in several Las Vegas zip codes including 89166 (Skye Canyon area), 89149 (Summerlin area), 89011 (Henderson), and surrounding areas. The Arroyo at Skyeview community is in zip code 89166. Contact Dr. Jan Duffy at (702) 903-4687 for current availability in specific zip codes.',
  },
  {
    question: 'Are there good schools near Skye Canyon new homes?',
    answer: 'Yes, Skye Canyon is served by excellent schools including Roger Bryan Elementary School (rated 9/10), Sig Rogich Middle School, and Shadow Ridge High School. The area is part of the highly-rated Clark County School District. Many families choose Skye Canyon specifically for the school quality and proximity to educational facilities.',
  },
  {
    question: 'What is the average price of new construction homes in Las Vegas?',
    answer: 'As of 2025, new construction homes in Las Vegas range from approximately $350,000 to over $1 million. Townhomes typically start around $390,000-$450,000, while single-family homes range from $450,000-$800,000+. Century Communities offers homes starting from $392,640 at Arroyo at Skyeview. Prices vary by location, size, and community amenities.',
  },
  {
    question: 'How long does it take to build a new home in Las Vegas?',
    answer: 'Construction timelines for new homes in Las Vegas typically range from 4-8 months depending on the home size, complexity, and builder schedule. Weather delays are minimal in Las Vegas due to the dry climate. Century Communities typically completes homes within 5-7 months. Dr. Jan Duffy monitors construction every 7-10 days to keep buyers informed throughout the process.',
  },
  {
    question: 'What are property taxes like in Las Vegas, Nevada?',
    answer: 'Nevada has relatively low property taxes compared to many states. The average property tax rate in Clark County (Las Vegas) is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax, making it attractive for homeowners.',
  },
  {
    question: 'What master-planned communities in Las Vegas have Century Communities?',
    answer: 'Century Communities builds in several master-planned communities in Las Vegas including Skye Canyon (NW Las Vegas), Summerlin, and Henderson communities. Skye Canyon features extensive amenities including parks, trails, shopping, and top-rated schools. Each master-planned community offers unique lifestyle benefits and amenities.',
  },
  {
    question: 'Are there HOA fees for new construction homes in Las Vegas?',
    answer: 'Yes, most new construction communities in Las Vegas have HOA fees that cover common area maintenance, amenities, and sometimes utilities. HOA fees typically range from $100-$300+ per month depending on the community amenities. Skye Canyon communities generally have reasonable HOA fees that cover maintenance of parks, trails, and common areas.',
  },
  {
    question: 'What is the weather like in Las Vegas and how does it affect new homes?',
    answer: 'Las Vegas has a desert climate with hot summers (average highs 100°F+) and mild winters (average highs 60°F). New construction homes are built with this climate in mind, featuring energy-efficient HVAC systems, proper insulation, and often solar-ready construction. The dry climate means minimal weather-related construction delays compared to other regions.',
  },
  {
    question: 'What shopping and dining options are near Skye Canyon?',
    answer: 'Skye Canyon is conveniently located near major shopping including the Skye Canyon Marketplace, which features grocery stores, restaurants, and retail. The area is also close to the Durango Square shopping center and approximately 15-20 minutes from the Las Vegas Strip. Local dining options include casual and family-friendly restaurants.',
  },
  {
    question: 'How far is Skye Canyon from the Las Vegas Strip?',
    answer: 'Skye Canyon is located approximately 20-25 minutes northwest of the Las Vegas Strip, providing easy access to entertainment while maintaining a residential, family-friendly atmosphere. The community offers a peaceful environment away from the hustle of the Strip.',
  },
  {
    question: 'What outdoor recreation is available near Las Vegas new homes?',
    answer: 'Las Vegas offers exceptional outdoor recreation opportunities. Skye Canyon is near Red Rock Canyon National Conservation Area (15 minutes), Mount Charleston (30 minutes for skiing/hiking), and Lake Mead (45 minutes). The area features extensive trail systems, parks, and outdoor activities perfect for active families.',
  },
  {
    question: 'Are there age-restricted communities for new construction in Las Vegas?',
    answer: 'Yes, Las Vegas has several age-restricted (55+) communities, though Century Communities primarily focuses on all-age communities. Skye Canyon and other master-planned communities welcome all ages, making them ideal for families, professionals, and active adults.',
  },
  {
    question: 'What is the resale value like for new construction homes in Las Vegas?',
    answer: 'Las Vegas has historically shown strong appreciation for well-maintained homes in desirable areas. New construction homes in master-planned communities like Skye Canyon and Summerlin typically maintain strong resale values due to location, amenities, and quality construction. The area has seen consistent growth over the long term.',
  },
  {
    question: 'Do new construction homes in Las Vegas come with solar panels?',
    answer: 'Many new construction homes in Las Vegas are solar-ready, and some builders offer solar panel installation as an upgrade. Century Communities homes are built to be energy-efficient and can accommodate solar installations. The sunny Las Vegas climate makes solar an excellent investment for reducing utility costs.',
  },
  {
    question: 'What hospitals and medical facilities are near Las Vegas new home communities?',
    answer: 'Las Vegas has excellent medical facilities including University Medical Center, Sunrise Hospital, and St. Rose Dominican Hospitals. Skye Canyon is approximately 15-20 minutes from multiple hospitals. The area also has numerous urgent care facilities and medical offices for convenient healthcare access.',
  },
  {
    question: 'How safe are the neighborhoods where Century Communities builds?',
    answer: 'Century Communities builds in well-established, safe neighborhoods including Skye Canyon, which has active community involvement and security measures. Henderson consistently ranks among the safest cities in America. Summerlin also has excellent safety records. Most master-planned communities feature security measures and active neighborhood watch programs.',
  },
  {
    question: 'What is the commute like from Las Vegas new home communities to downtown?',
    answer: 'Commute times vary by location. Skye Canyon to downtown Las Vegas is approximately 20-25 minutes. Summerlin to downtown is about 15-20 minutes. Henderson to downtown is 15-25 minutes depending on exact location. Traffic is generally manageable compared to larger metropolitan areas, with most commutes under 30 minutes.',
  },
  {
    question: 'Are there golf courses near Century Communities neighborhoods?',
    answer: 'Yes, Las Vegas is known for its golf courses. Summerlin has multiple championship courses. Skye Canyon is near several golf facilities. Many Century Communities neighborhoods are within 10-15 minutes of quality golf courses, making it a golfer\'s paradise.',
  },
  {
    question: 'What utilities are available for new construction homes in Las Vegas?',
    answer: 'New construction homes in Las Vegas are connected to all standard utilities including electricity (NV Energy), water (Las Vegas Valley Water District), sewer, natural gas, and high-speed internet. Most areas have fiber optic internet available. New homes are built with modern utility infrastructure.',
  },
  {
    question: 'How do I find out about current Century Communities inventory in Las Vegas?',
    answer: 'The best way to find current inventory is to contact Dr. Jan Duffy at (702) 903-4687. She has real-time knowledge of available homes, pricing, and incentives across all Century Communities neighborhoods in Las Vegas. Inventory changes frequently, so working with an expert ensures you get the most current information.',
  },
  {
    question: 'What makes Skye Canyon different from other Las Vegas neighborhoods?',
    answer: 'Skye Canyon is a newer master-planned community that combines modern amenities with natural beauty. It features extensive trail systems, parks, top-rated schools, and proximity to Red Rock Canyon. The community is designed for active lifestyles with a focus on outdoor recreation and family-friendly amenities. It offers a unique blend of suburban living and access to nature.',
  },
  {
    question: 'Can I rent out my new construction home in Las Vegas?',
    answer: 'Rental policies vary by community and HOA. Some communities allow rentals with restrictions, while others may have limitations. Short-term rentals (Airbnb) are typically restricted in residential communities. If you\'re considering investment property, discuss rental policies with Dr. Jan Duffy before purchasing.',
  },
  {
    question: 'What are the best months to buy a new construction home in Las Vegas?',
    answer: 'While you can buy year-round, builders often offer better incentives at month-end, quarter-end, and year-end to meet sales goals. Late fall and winter can also see increased incentives as builders work to close homes before year-end. However, with current high inventory levels, there are good opportunities throughout the year.',
  },
  {
    question: 'Do new construction homes in Las Vegas have basements?',
    answer: 'Basements are uncommon in Las Vegas new construction due to the hard caliche soil. Most homes are built on slab foundations. Some custom homes may have basements, but it\'s not standard. Single-story and two-story homes are the norm, with two-story being very popular.',
  },
  {
    question: 'What is the average size of new construction homes in Las Vegas?',
    answer: 'New construction homes in Las Vegas range from approximately 1,200 square feet for smaller townhomes to 3,500+ square feet for larger single-family homes. Century Communities townhomes typically range from 1,400-2,200 square feet, while single-family homes can be 2,000-4,000+ square feet depending on the community.',
  },
  {
    question: 'Are there pet restrictions in Las Vegas new home communities?',
    answer: 'Pet policies vary by community and HOA. Most communities allow pets with reasonable restrictions (typically 2-3 pets, size/breed restrictions may apply). Skye Canyon and most Century Communities neighborhoods are pet-friendly. Check specific HOA rules for detailed pet policies.',
  },
  {
    question: 'What is the typical down payment for new construction homes in Las Vegas?',
    answer: 'Down payment requirements vary by loan type. FHA loans require 3.5% down, conventional loans typically require 5-20% down, and VA loans offer 0% down for qualified veterans. With current builder incentives and down payment assistance programs, many first-time buyers can purchase with 3-5% down.',
  },
  {
    question: 'How do I know if a Las Vegas neighborhood is right for my family?',
    answer: 'Consider factors like school ratings, proximity to work, lifestyle amenities, and community atmosphere. Dr. Jan Duffy specializes in matching families with the right Century Communities neighborhood based on their specific needs. She can provide detailed information about schools, amenities, and lifestyle factors for each area.',
  },
  {
    question: 'What are the property insurance costs for new homes in Las Vegas?',
    answer: 'Homeowners insurance in Las Vegas is generally affordable, averaging $1,200-$2,000 annually for a $400,000 home. New construction homes often qualify for discounts due to modern building codes and safety features. Insurance costs are lower than many coastal areas due to minimal natural disaster risks (no hurricanes, earthquakes are rare).',
  },
  {
    question: 'Are Century Communities homes energy efficient?',
    answer: 'Yes, Century Communities builds energy-efficient homes with modern HVAC systems, proper insulation, energy-efficient windows, and often ENERGY STAR-rated appliances. These features help reduce utility costs in Las Vegas\'s hot climate. Many homes are solar-ready for additional energy savings.',
  },
  {
    question: 'What is the process for customizing a new construction home in Las Vegas?',
    answer: 'Customization options depend on the construction stage. Pre-construction homes offer the most options for selecting finishes, flooring, cabinetry, and design elements through the builder\'s design center. If you purchase a move-in ready home, customization is limited. Dr. Jan Duffy can help you understand available customization options for specific homes.',
  },
  {
    question: 'How do builder warranties work for new construction homes in Las Vegas?',
    answer: 'New construction homes come with comprehensive builder warranties including 10-year structural warranty, 2-5 year warranty on major systems (HVAC, plumbing, electrical), and 1-year warranty on workmanship and materials. Century Communities provides standard builder warranties. Dr. Jan Duffy\'s building standards inspection at closing catches issues before warranty expiration.',
  },
]

export default function LasVegasHyperlocalFAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hyperlocalQuestions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="faq"
        url="/faq/las-vegas-hyperlocal"
        title="Las Vegas New Homes Questions & Answers | Hyperlocal FAQ | Century Communities"
        description="Comprehensive hyperlocal questions and answers about buying new homes in Las Vegas, Nevada. Get expert answers about neighborhoods, schools, lifestyle, and Century Communities homes."
        breadcrumbs={[
          { name: 'FAQ', url: '/faq' },
          { name: 'Las Vegas Hyperlocal Q&A', url: '/faq/las-vegas-hyperlocal' },
        ]}
        questions={hyperlocalQuestions.slice(0, 10).map(q => ({
          question: q.question,
          answer: q.answer.substring(0, 200) + (q.answer.length > 200 ? '...' : ''),
        }))}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner />
        
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Las Vegas New Homes: Hyperlocal Questions & Answers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Comprehensive hyperlocal questions and answers about buying new construction homes in Las Vegas, Nevada. Get expert answers about neighborhoods, schools, lifestyle, and Century Communities.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-8">
                  Find answers to the most common questions about buying new construction homes in Las Vegas. These hyperlocal questions and answers cover neighborhoods, schools, lifestyle, pricing, and everything you need to know about Century Communities homes in the Las Vegas area.
                </p>
                
                <div className="space-y-6">
                  {hyperlocalQuestions.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {faq.question}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Have More Questions About Las Vegas New Homes?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Dr. Jan Duffy is a local Las Vegas expert with extensive knowledge of neighborhoods, schools, lifestyle, and Century Communities homes. Get personalized answers to all your questions.
                  </p>
                  <a
                    href="tel:7029034687"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Call Dr. Jan: (702) 903-4687
                  </a>
                </div>
              </div>
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

