import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import HeroCarousel from '../components/hero-carousel'
import AvailableHomes from '../components/available-homes'
import FloorPlans from '../components/floor-plans'
import Overview from '../components/overview'
import SimilarCommunities from '../components/similar-communities'
import CommunityContentExpansion from '../components/community-content-expansion'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Terra at Skyeview by Century Communities | New Homes in Las Vegas, NV',
  description: 'Terra at Skyeview is a residential community in Skye Canyon, Las Vegas, Nevada. Discover new homes and floor plans from Century Communities.',
  keywords: [
    'Terra at Skyeview',
    'Terra at Skyview',
    'Century Communities Terra',
    'Skyeview Las Vegas',
    'new homes Skye Canyon',
    'Las Vegas new construction',
  ],
}

export default function TerraAtSkyeviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="community"
        url="/terra-at-skyeview"
        title="Terra at Skyeview by Century Communities | New Homes in Las Vegas, NV"
        description="Terra at Skyeview is a residential community in Skye Canyon, Las Vegas, Nevada. Discover new homes and floor plans from Century Communities."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Skye Canyon', url: '/areas/zip-89166' },
          { name: 'Terra at Skyeview', url: '/terra-at-skyeview' },
        ]}
        communityName="Terra at Skyeview"
        location="Skye Canyon"
        zipCode="89166"
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner context="floor plan move-in ready" />
        <HeroCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AvailableHomes />
          <div className="mt-12">
            <FloorPlans />
          </div>
          <div className="mt-12">
            <Overview />
          </div>
          <div className="mt-12">
            <DrJanContactCard />
          </div>
        </div>
        <CommunityContentExpansion
          communityName="Terra at Skyeview"
          location="Skye Canyon"
          zipCode="89166"
          homeType="Townhomes"
          questions={[
            {
              question: 'What is Terra at Skyeview and where is it located?',
              answer: 'Terra at Skyeview is a residential community of new construction townhomes located in Skye Canyon, a master-planned community in northwest Las Vegas, Nevada (zip code 89166). The development offers modern townhomes with contemporary designs, premium finishes, and energy-efficient features in one of Las Vegas\'s most desirable master-planned communities.',
            },
            {
              question: 'What floor plans are available at Terra at Skyeview?',
              answer: 'Terra at Skyeview offers new construction townhomes with modern floor plans designed for contemporary living. The homes feature open-concept layouts, modern kitchens, energy-efficient systems, and premium finishes. Contact Dr. Jan Duffy at (702) 903-4687 for current availability and specific floor plan options.',
            },
            {
              question: 'What are the prices for homes at Terra at Skyeview?',
              answer: 'Pricing at Terra at Skyeview varies based on floor plan, lot location, and available features. With current builder incentives including rate buy-downs and closing cost assistance, homes may be more affordable than expected. Dr. Jan Duffy has real-time knowledge of current pricing and incentives—call (702) 903-4687 for the most current information.',
            },
            {
              question: 'What schools serve Terra at Skyeview in Skye Canyon?',
              answer: 'Terra at Skyeview is served by excellent schools in the Clark County School District, including Roger Bryan Elementary School (rated 9/10), Sig Rogich Middle School, and Shadow Ridge High School. The area is known for quality education, making it ideal for families.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy when buying at Terra at Skyeview?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for Century Communities homes including Terra at Skyeview. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Century Communities pays for buyer representation, so there\'s no extra cost. Call (702) 903-4687.',
            },
            {
              question: 'What amenities are available in Skye Canyon near Terra at Skyeview?',
              answer: 'Skye Canyon features extensive amenities including a recreation center, fitness facilities, multiple parks, extensive trail systems, splash pads, sports courts and fields, and neighborhood schools. The master-planned community spans 1,700 acres and is designed for active lifestyles.',
            },
            {
              question: 'How long does it take to build a home at Terra at Skyeview?',
              answer: 'Construction timelines typically range from 4-7 months depending on the specific home and construction stage when you purchase. Las Vegas\'s dry climate means minimal weather-related delays. Dr. Jan Duffy monitors construction every 7-10 days to keep you informed.',
            },
            {
              question: 'What outdoor recreation is available near Terra at Skyeview?',
              answer: 'Skye Canyon is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is 15 minutes away, Mount Charleston is 30 minutes, and Lake Mead is 45 minutes. Within Skye Canyon, residents enjoy extensive trail systems and parks.',
            },
            {
              question: 'What are property taxes like in zip code 89166?',
              answer: 'Nevada has relatively low property taxes. In Clark County (zip code 89166), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax.',
            },
            {
              question: 'What shopping and dining options are near Terra at Skyeview?',
              answer: 'Skye Canyon is conveniently located near the Skye Canyon Marketplace with grocery stores, restaurants, and retail. The area is also close to Durango Square shopping center and approximately 15-20 minutes from the Las Vegas Strip.',
            },
          ]}
        />
        <SimilarCommunities />
      </main>
      <Footer />
    </div>
  )
}

