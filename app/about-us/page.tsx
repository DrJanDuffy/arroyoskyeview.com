import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import AboutUsHero from '../components/about-us-hero'
import OurBrands from '../components/our-brands'
import OurPreferredBuyersAgent from '../components/our-preferred-buyers-agent'
import OurStory from '../components/our-story'
import WhereWeBuild from '../components/where-we-build'
import OnlineHomebuyingPioneer from '../components/online-homebuying-pioneer'
import OurAffiliates from '../components/our-affiliates'
import SupportingCommunities from '../components/supporting-communities'
import BuildCareer from '../components/build-career'
import InformationalPageContent from '../components/informational-page-content'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'About Century Communities | Las Vegas New Home Builder',
  description: 'Learn about Century Communities - one company, two homebuilders built on trust. Building dream homes in 16+ states and 45+ markets across the country.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/about-us',
  },
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        pageType="about"
        url="/about-us"
        title="About Century Communities | Las Vegas New Home Builder"
        description="Learn about Century Communities - one company, two homebuilders built on trust. Building dream homes in 16+ states and 45+ markets across the country."
        breadcrumbs={[
          { name: 'About Century', url: '/about-us' },
        ]}
        questions={[
          {
            question: 'What is Century Communities and where do they build?',
            answer: 'Century Communities is one of the nation\'s leading homebuilders, building dream homes in 16+ states and 45+ markets across the country.',
          },
          {
            question: 'Where does Century Communities build in Las Vegas?',
            answer: 'Century Communities builds in premier Las Vegas locations including Skye Canyon (zip code 89166), Summerlin (zip code 89149), and Henderson (zip code 89011).',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main>
        <DrJanCTABanner context="pricing incentives" />
        <AboutUsHero />
        <OurBrands />
        <OurStory />
        <WhereWeBuild />
        <OnlineHomebuyingPioneer />
        <OurAffiliates />
        <OurPreferredBuyersAgent />
        <SupportingCommunities />
        <BuildCareer />
        <InformationalPageContent
          title="About Century Communities in Las Vegas"
          h1="About Century Communities: Building Dreams in Las Vegas and Beyond"
          sections={[
            {
              h2: 'Century Communities: A Trusted Builder in Las Vegas',
              content: 'Century Communities is one of the nation\'s leading homebuilders, building dream homes in 16+ states and 45+ markets across the country. In Las Vegas, Century Communities has established a strong presence with multiple developments in premier communities including Skye Canyon, Summerlin, and Henderson. The company\'s commitment to quality construction, innovative design, and customer satisfaction has made it a trusted name in Las Vegas real estate.',
              h3s: [
                {
                  h3: 'Building in Las Vegas: A Commitment to Quality',
                  content: 'Century Communities brings decades of experience and expertise to Las Vegas homebuilding. The company understands the unique needs of Las Vegas homebuyers, from energy-efficient design for the desert climate to modern floor plans that maximize living space. Century Communities\' Las Vegas developments feature contemporary designs, premium finishes, and thoughtful community planning.',
                },
                {
                  h3: 'Las Vegas Communities: Skye Canyon, Summerlin, and More',
                  content: 'Century Communities has strategically chosen premier Las Vegas locations for its developments. In Skye Canyon (zip code 89166), Century offers multiple communities including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview. In Summerlin (zip code 89149) and Henderson (zip code 89011), Century Communities continues to expand its presence, offering new construction homes in some of Las Vegas\'s most desirable areas.',
                },
                {
                  h3: 'Why Choose Century Communities in Las Vegas?',
                  content: 'Century Communities offers exceptional value in Las Vegas, combining quality construction, modern design, and competitive pricing. With current builder incentives including rate buy-downs and closing cost assistance, Century Communities homes represent excellent value. The company\'s commitment to customer satisfaction, comprehensive warranties, and quality construction makes it an ideal choice for Las Vegas homebuyers.',
                },
              ],
            },
            {
              h2: 'Working with Dr. Jan Duffy: Expert Buyer Representation for Century Communities',
              content: 'When purchasing a Century Communities home in Las Vegas, working with Dr. Jan Duffy ensures you have expert representation throughout the entire process. Dr. Jan is a Century Communities Preferred Buyer\'s Agent specializing in new construction homes throughout Las Vegas, including all Century Communities developments.',
              h3s: [
                {
                  h3: 'Construction Monitoring Every 7-10 Days',
                  content: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days during the build process. This proactive approach catches issues before your warranty expires, potentially saving thousands of dollars in post-warranty repairs. When the superintendent knows Dr. Jan is monitoring, your home gets built right the first time.',
                },
                {
                  h3: 'Building Standards Inspection at Closing',
                  content: 'Dr. Jan provides a complimentary building standards inspection at closing that catches issues BEFORE your warranty matters. This specialized inspection for new construction identifies problems that standard home inspections might miss, ensuring you start homeownership with confidence.',
                },
                {
                  h3: 'Insider Knowledge of Century Communities',
                  content: 'Dr. Jan Duffy has insider knowledge of all Century Communities developments in Las Vegas, including real-time inventory tracking, current pricing, available incentives, and which communities best fit different lifestyles and budgets. She knows which lots have the best views, which floor plans are most popular, and how to navigate the builder\'s processes to maximize your value.',
                },
                {
                  h3: 'No Extra Cost to You',
                  content: 'Century Communities pays for buyer representation on all their Las Vegas homes. The commission is built into the home pricing whether you use an agent or not—which means you\'re already funding representation. Dr. Jan Duffy works exclusively for YOU, not the builder, ensuring your interests are protected throughout the entire process.',
                },
              ],
            },
            {
              h2: 'Las Vegas Real Estate Market: Why Century Communities Excels',
              content: 'Las Vegas offers exceptional opportunities for new construction homebuyers. With no state income tax, relatively low property taxes, a growing economy, and excellent weather that allows for year-round construction, Las Vegas provides an ideal environment for homeownership. Century Communities has positioned itself to serve this market with quality homes and exceptional service.',
              h3s: [
                {
                  h3: 'Las Vegas Property Taxes and Cost of Living',
                  content: 'Nevada has relatively low property taxes compared to many states. In Clark County (Las Vegas), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Combined with no state income tax, Las Vegas provides an attractive cost of living for homeowners.',
                },
                {
                  h3: 'Las Vegas Communities: Skye Canyon, Summerlin, Henderson',
                  content: 'Century Communities builds in premier Las Vegas communities including Skye Canyon (zip code 89166), Summerlin (zip code 89149), and Henderson (zip code 89011). These areas offer excellent schools, amenities, shopping, dining, and recreational opportunities. Each community has its own character and appeal, making Las Vegas a diverse and attractive homebuying market.',
                },
                {
                  h3: 'Current Market Conditions in Las Vegas',
                  content: 'Las Vegas is experiencing favorable conditions for new construction buyers. With 2x the normal new home inventory, builders including Century Communities are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, and competitive pricing. This creates exceptional opportunities for homebuyers to secure quality new construction homes at attractive prices.',
                },
              ],
            },
          ]}
          questions={[
            {
              question: 'What is Century Communities and where do they build?',
              answer: 'Century Communities is one of the nation\'s leading homebuilders, building dream homes in 16+ states and 45+ markets across the country. In Las Vegas, Century Communities has multiple developments in premier communities including Skye Canyon, Summerlin, and Henderson.',
            },
            {
              question: 'Where does Century Communities build in Las Vegas?',
              answer: 'Century Communities builds in premier Las Vegas locations including Skye Canyon (zip code 89166), Summerlin (zip code 89149), and Henderson (zip code 89011). The company has multiple communities in Skye Canyon including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy when buying a Century Communities home?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for Century Communities homes in Las Vegas. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Century Communities pays for buyer representation, so there\'s no extra cost. Call (702) 903-4687.',
            },
            {
              question: 'What are Century Communities\' builder incentives in Las Vegas?',
              answer: 'With 2x the normal new home inventory in Las Vegas, Century Communities is offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. Dr. Jan Duffy has insider knowledge of current incentives—call (702) 903-4687 for the most current information.',
            },
            {
              question: 'What are property taxes like for Century Communities homes in Las Vegas?',
              answer: 'Nevada has relatively low property taxes. In Clark County (Las Vegas), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax.',
            },
            {
              question: 'What communities does Century Communities build in Las Vegas?',
              answer: 'Century Communities builds in premier Las Vegas communities including Skye Canyon (with Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview), Summerlin, and Henderson. Each community offers unique features and amenities, making Las Vegas a diverse and attractive homebuying market.',
            },
            {
              question: 'What makes Century Communities homes different in Las Vegas?',
              answer: 'Century Communities homes in Las Vegas feature modern designs, energy-efficient construction for the desert climate, premium finishes, and thoughtful community planning. The company understands the unique needs of Las Vegas homebuyers and designs homes specifically for the Las Vegas environment.',
            },
            {
              question: 'How long does it take to build a Century Communities home in Las Vegas?',
              answer: 'Construction timelines typically range from 4-7 months depending on the specific home and construction stage when you purchase. Las Vegas\'s dry climate means minimal weather-related delays. Dr. Jan Duffy monitors construction every 7-10 days throughout the process.',
            },
            {
              question: 'What warranties come with Century Communities homes?',
              answer: 'Century Communities provides comprehensive builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). This warranty protection provides peace of mind. Combined with Dr. Jan Duffy\'s building standards inspection at closing, you can be confident your home is built to the highest standards.',
            },
            {
              question: 'What schools serve Century Communities developments in Las Vegas?',
              answer: 'Century Communities builds in areas served by excellent schools in the Clark County School District. Specific schools depend on the community. Skye Canyon is served by highly rated schools including Roger Bryan Elementary (9/10), Sig Rogich Middle School, and Shadow Ridge High School. Contact Dr. Jan Duffy for specific school information.',
            },
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

