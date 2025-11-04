import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import InformationalPageContent from '../../components/informational-page-content'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'New Homes in Zip Code 89166 | Skye Canyon Las Vegas',
  description: 'Discover new construction homes in zip code 89166, Skye Canyon, Las Vegas. Explore Century Communities developments including Arroyo at Skyeview, Sierra, and Terra.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/areas/zip-89166',
  },
}

export default function Zip89166Page() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="zip"
        url="/areas/zip-89166"
        title="New Homes in Zip Code 89166 | Skye Canyon Las Vegas | Century Communities"
        description="Discover new construction homes in zip code 89166, Skye Canyon, Las Vegas. Explore Century Communities developments including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Zip Code 89166', url: '/areas/zip-89166' },
        ]}
        location="Skye Canyon"
        zipCode="89166"
        questions={[
          {
            question: 'What is zip code 89166 and where is it located?',
            answer: 'Zip code 89166 encompasses Skye Canyon, a premier master-planned community in northwest Las Vegas.',
          },
          {
            question: 'What Century Communities developments are in zip code 89166?',
            answer: 'Century Communities has multiple developments in zip code 89166, including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner context="available lots homesite" />
        <InformationalPageContent
          title="New Homes in Zip Code 89166"
          h1="New Construction Homes in Zip Code 89166: Skye Canyon, Las Vegas"
          sections={[
            {
              h2: 'Welcome to Zip Code 89166: Skye Canyon, Las Vegas',
              content: 'Zip code 89166 encompasses Skye Canyon, a premier master-planned community in northwest Las Vegas. This area is home to multiple Century Communities developments including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview. Skye Canyon offers exceptional new construction homes, top-rated schools, extensive amenities, and a family-friendly atmosphere.',
              h3s: [
                {
                  h3: 'Skye Canyon: A Premier Master-Planned Community',
                  content: 'Skye Canyon is a 1,700-acre master-planned community in northwest Las Vegas (zip code 89166) that represents one of the city\'s most thoughtfully designed residential developments. The community features extensive parks, trails, recreation centers, top-rated schools, and family-friendly amenities. Skye Canyon combines natural desert beauty with modern community planning.',
                },
                {
                  h3: 'Century Communities in Zip Code 89166',
                  content: 'Century Communities has multiple developments in zip code 89166, including Arroyo at Skyeview (townhomes starting from $392,640), Sierra at Skyeview, and Terra at Skyeview. These communities offer modern new construction homes with contemporary designs, premium finishes, and energy-efficient features perfect for Las Vegas living.',
                },
                {
                  h3: 'Location Benefits of Zip Code 89166',
                  content: 'Zip code 89166 offers excellent location benefits including proximity to Red Rock Canyon (15 minutes), Mount Charleston (30 minutes), and easy access to the Las Vegas Strip (20-25 minutes). The area provides a peaceful residential atmosphere while maintaining convenient access to city amenities and employment centers.',
                },
              ],
            },
            {
              h2: 'Schools in Zip Code 89166',
              content: 'Zip code 89166 is served by excellent schools in the Clark County School District, making it ideal for families prioritizing education. The area features highly rated elementary, middle, and high schools with strong academic programs.',
              h3s: [
                {
                  h3: 'Roger Bryan Elementary School',
                  content: 'Roger Bryan Elementary School serves zip code 89166 and is highly rated (9/10). The school offers strong academic programs and is conveniently located within Skye Canyon, making it easily accessible for families living in Century Communities developments.',
                },
                {
                  h3: 'Sig Rogich Middle School and Shadow Ridge High School',
                  content: 'Sig Rogich Middle School and Shadow Ridge High School serve older students in zip code 89166. These schools provide quality education and are conveniently located for families in Skye Canyon. The area\'s commitment to education makes it attractive for families with school-age children.',
                },
              ],
            },
            {
              h2: 'Working with Dr. Jan Duffy for Zip Code 89166 Homes',
              content: 'When purchasing a new construction home in zip code 89166, working with Dr. Jan Duffy ensures you have expert representation. Dr. Jan specializes in Century Communities homes throughout Skye Canyon and provides comprehensive services at no extra cost to you.',
              h3s: [
                {
                  h3: 'Construction Monitoring for Skye Canyon Homes',
                  content: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days throughout the build process. This proactive approach catches issues before your warranty expires, potentially saving thousands of dollars. Her monitoring ensures quality construction for your zip code 89166 home.',
                },
                {
                  h3: 'Building Standards Inspection',
                  content: 'Dr. Jan provides a complimentary building standards inspection at closing that identifies issues BEFORE your warranty matters. This specialized inspection ensures your zip code 89166 home is built to the highest standards.',
                },
                {
                  h3: 'Insider Knowledge of 89166 Communities',
                  content: 'Dr. Jan Duffy has insider knowledge of all Century Communities developments in zip code 89166, including current pricing, available incentives, and inventory. She knows which lots have the best features and how to maximize your value when purchasing in Skye Canyon.',
                },
              ],
            },
            {
              h2: 'Amenities and Lifestyle in Zip Code 89166',
              content: 'Zip code 89166 offers exceptional amenities and lifestyle opportunities. Skye Canyon features extensive recreational facilities, parks, trails, and community amenities that enhance daily living.',
              h3s: [
                {
                  h3: 'Skye Canyon Recreation Facilities',
                  content: 'Skye Canyon features a recreation center, fitness facilities, multiple parks, extensive trail systems, splash pads, sports courts and fields, and neighborhood schools. The master-planned community is designed for active lifestyles with family-friendly amenities.',
                },
                {
                  h3: 'Shopping and Dining in Zip Code 89166',
                  content: 'Zip code 89166 is conveniently located near the Skye Canyon Marketplace with grocery stores, restaurants, and retail. The area is also close to Durango Square shopping center and approximately 15-20 minutes from the Las Vegas Strip for more extensive dining and entertainment options.',
                },
                {
                  h3: 'Outdoor Recreation Near Zip Code 89166',
                  content: 'Zip code 89166 is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is 15 minutes away, Mount Charleston is 30 minutes, and Lake Mead is 45 minutes. Within Skye Canyon, residents enjoy extensive trail systems and parks.',
                },
              ],
            },
          ]}
          questions={[
            {
              question: 'What is zip code 89166 and where is it located?',
              answer: 'Zip code 89166 encompasses Skye Canyon, a premier master-planned community in northwest Las Vegas. The area is home to multiple Century Communities developments and offers exceptional new construction homes, top-rated schools, and extensive amenities.',
            },
            {
              question: 'What Century Communities developments are in zip code 89166?',
              answer: 'Century Communities has multiple developments in zip code 89166, including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview. These communities offer modern new construction homes with contemporary designs and premium finishes.',
            },
            {
              question: 'What schools serve zip code 89166?',
              answer: 'Zip code 89166 is served by excellent schools including Roger Bryan Elementary School (rated 9/10), Sig Rogich Middle School, and Shadow Ridge High School. The area is known for quality education, making it ideal for families.',
            },
            {
              question: 'What are property taxes like in zip code 89166?',
              answer: 'Nevada has relatively low property taxes. In zip code 89166 (Clark County), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax.',
            },
            {
              question: 'What amenities are available in zip code 89166?',
              answer: 'Zip code 89166 features extensive amenities including a recreation center, fitness facilities, multiple parks, extensive trail systems, splash pads, sports courts and fields, and neighborhood schools. Skye Canyon is designed for active lifestyles.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy for zip code 89166 homes?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for Century Communities homes in zip code 89166. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Century Communities pays for buyer representation, so there\'s no extra cost. Call (702) 903-4687.',
            },
            {
              question: 'What is the commute like from zip code 89166?',
              answer: 'Zip code 89166 offers excellent commute times. Downtown Las Vegas is approximately 20-25 minutes away, the Strip is 20-25 minutes, and McCarran International Airport is about 25-30 minutes. The northwest location provides easy access to major employment centers.',
            },
            {
              question: 'What outdoor recreation is available near zip code 89166?',
              answer: 'Zip code 89166 is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is 15 minutes away, Mount Charleston is 30 minutes, and Lake Mead is 45 minutes. Within Skye Canyon, residents enjoy extensive trail systems and parks.',
            },
            {
              question: 'What are current builder incentives in zip code 89166?',
              answer: 'With 2x the normal new home inventory in Las Vegas, builders in zip code 89166 are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, and competitive pricing. Dr. Jan Duffy has insider knowledge of current incentives—call (702) 903-4687.',
            },
            {
              question: 'What shopping and dining options are in zip code 89166?',
              answer: 'Zip code 89166 is conveniently located near the Skye Canyon Marketplace with grocery stores, restaurants, and retail. The area is also close to Durango Square shopping center and approximately 15-20 minutes from the Las Vegas Strip.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}

