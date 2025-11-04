import PageQASection from './page-qa-section'
import Link from 'next/link'

export default function HomepageContentSection() {
  const homepageQuestions = [
    {
      question: 'What is Arroyo at Skyeview and where is it located?',
      answer: 'Arroyo at Skyeview is a residential community of modern townhomes located in Skye Canyon, a master-planned community in northwest Las Vegas, Nevada (zip code 89166). The development is situated approximately 20-25 minutes from the Las Vegas Strip, offering a peaceful residential atmosphere while maintaining easy access to city amenities. Skye Canyon spans 1,700 acres and features extensive parks, trails, top-rated schools, and recreational facilities.',
    },
    {
      question: 'What are the prices for homes at Arroyo at Skyeview?',
      answer: 'Homes at Arroyo at Skyeview start from $392,640, with prices ranging up to $424,590 depending on the floor plan and lot location. These prices are competitive for new construction townhomes in the Las Vegas area, especially considering the modern features, energy-efficient construction, and prime location in Skye Canyon. Current builder incentives may also be available, including rate buy-downs and closing cost assistance.',
    },
    {
      question: 'What floor plans are available at Arroyo at Skyeview?',
      answer: 'Arroyo at Skyeview offers three distinct floor plans: the Beverly (1,531 sq ft, 3 bedrooms), the Captiva (1,643 sq ft, 3 bedrooms), and the Delray (1,729 sq ft, 3-4 bedrooms). All plans include 2.5 bathrooms and 2-bay garages. Each floor plan features modern open-concept designs, quartz countertops, energy-efficient appliances, and contemporary finishes perfect for modern living in Las Vegas.',
    },
    {
      question: 'What schools serve the Skye Canyon area?',
      answer: 'Skye Canyon is served by excellent schools in the Clark County School District. Roger Bryan Elementary School is highly rated (9/10), along with Sig Rogich Middle School and Shadow Ridge High School. The area is known for quality education, with many families choosing Skye Canyon specifically for the school quality and proximity to educational facilities. These schools are convenient for families living in Arroyo at Skyeview.',
    },
    {
      question: 'What amenities are available in Skye Canyon?',
      answer: 'Skye Canyon features extensive amenities including a recreation center, fitness facilities, multiple parks and playgrounds, extensive trail systems for hiking and biking, splash pads, sports courts and fields, and neighborhood schools. The master-planned community is designed for active lifestyles with a focus on outdoor recreation and family-friendly amenities. Residents of Arroyo at Skyeview have access to all these community amenities.',
    },
    {
      question: 'Why should I work with Dr. Jan Duffy when buying at Arroyo at Skyeview?',
      answer: 'Dr. Jan Duffy provides expert buyer representation specifically for Century Communities homes in Las Vegas, including Arroyo at Skyeview. She offers construction monitoring every 7-10 days during your home\'s build, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Best of all, Century Communities pays for buyer representation—so you\'re already funding an agent, and Dr. Jan works exclusively for YOU, not the builder. Call (702) 903-4687 to get started.',
    },
    {
      question: 'How long does it take to build a new home at Arroyo at Skyeview?',
      answer: 'Construction timelines for homes at Arroyo at Skyeview typically range from 4-7 months depending on the specific home, lot location, and construction stage when you purchase. Las Vegas\'s dry climate means minimal weather-related delays. Dr. Jan Duffy monitors construction every 7-10 days to keep you informed throughout the process and ensure quality construction standards are maintained.',
    },
    {
      question: 'What are property taxes like in Las Vegas zip code 89166?',
      answer: 'Nevada has relatively low property taxes compared to many states. In Clark County (Las Vegas zip code 89166), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home at Arroyo at Skyeview, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax, making it attractive for homeowners.',
    },
    {
      question: 'Are there shopping and dining options near Skye Canyon?',
      answer: 'Yes, Skye Canyon is conveniently located near major shopping including the Skye Canyon Marketplace, which features grocery stores, restaurants, and retail. The area is also close to Durango Square shopping center and approximately 15-20 minutes from the Las Vegas Strip. Local dining options include casual and family-friendly restaurants, with more upscale dining available nearby in Summerlin.',
    },
    {
      question: 'What outdoor recreation is available near Arroyo at Skyeview?',
      answer: 'Las Vegas offers exceptional outdoor recreation, and Skye Canyon is perfectly positioned to access it all. Red Rock Canyon National Conservation Area is just 15 minutes away, Mount Charleston (for skiing and hiking) is 30 minutes, and Lake Mead is 45 minutes. Skye Canyon itself features extensive trail systems, parks, and outdoor activities perfect for active families and outdoor enthusiasts.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* H1 - Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        Arroyo at Skyeview: New Construction Townhomes in Skye Canyon, Las Vegas
      </h1>

      {/* Section 1: Community Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to Arroyo at Skyeview in Skye Canyon
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Arroyo at Skyeview represents the perfect blend of modern living and community amenities in one of Las Vegas's most desirable master-planned communities. Located in Skye Canyon, northwest Las Vegas (zip code 89166), this Century Communities development offers two-story townhomes designed for contemporary lifestyles with premium finishes and energy-efficient features.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Prime Location in Northwest Las Vegas
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Skye Canyon is strategically positioned in northwest Las Vegas, offering residents the best of both worlds: peaceful suburban living with easy access to the city's amenities. The community is approximately 20-25 minutes from the Las Vegas Strip, providing convenient access to entertainment, dining, and employment centers while maintaining a family-friendly residential atmosphere.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Modern Townhome Living
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Arroyo at Skyeview offers three thoughtfully designed floor plans ranging from 1,531 to 1,729 square feet. Each home features modern open-concept layouts, quartz countertops, energy-efficient appliances, and contemporary design elements. With 2-4 bedrooms, 2.5 bathrooms, and 2-bay garages, these townhomes provide the perfect balance of space and convenience for families, professionals, and active adults.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Starting Prices and Value
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Homes at Arroyo at Skyeview start from $392,640, representing excellent value for new construction in Las Vegas. When you consider the modern features, energy efficiency, builder warranties, and prime Skye Canyon location, these homes offer exceptional value. With current builder incentives including rate buy-downs and closing cost assistance, now is an excellent time to purchase.
        </p>
      </section>

      {/* Section 2: Dr. Jan Duffy Services */}
      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Expert Buyer Representation with Dr. Jan Duffy
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          When purchasing a new construction home at Arroyo at Skyeview, working with Dr. Jan Duffy ensures you have expert representation throughout the entire process. Dr. Jan is a Century Communities Preferred Buyer's Agent specializing in new construction homes throughout Las Vegas, including all Skye Canyon communities.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Construction Monitoring Every 7-10 Days
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Unlike traditional real estate transactions, new construction requires ongoing monitoring during the build process. Dr. Jan Duffy visits your home's construction site every 7-10 days to check progress, verify quality standards, and catch any issues before your warranty expires. This proactive approach has saved clients thousands of dollars in post-warranty repairs. When the superintendent knows Dr. Jan is monitoring construction, your home gets built right the first time.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Building Standards Inspection at Closing
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Even new construction homes can have issues. Dr. Jan Duffy provides a complimentary building standards inspection at closing that catches problems BEFORE your warranty matters. This inspection is specifically designed for new construction and identifies issues that standard home inspections might miss. By catching these issues before warranty expiration, you can save thousands in future repair costs.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Insider Knowledge of Century Communities
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Dr. Jan Duffy has insider knowledge of all Century Communities developments in Las Vegas, including real-time inventory tracking, current pricing, available incentives, and which communities best fit different lifestyles and budgets. She knows which lots have the best views, which floor plans are most popular, and how to navigate the builder's processes to maximize your value and minimize delays.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          No Extra Cost to You
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Century Communities pays for buyer representation on all their Las Vegas homes. The commission is built into the home pricing whether you use an agent or not—which means you're already funding representation. Dr. Jan Duffy works exclusively for YOU, not the builder, ensuring your interests are protected throughout the entire process. There's no additional cost for this expert representation.
        </p>

        <div className="mt-6">
          <a
            href="tel:7029034687"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            Call Dr. Jan Duffy: (702) 903-4687
          </a>
        </div>
      </section>

      {/* Section 3: Hyperlocal Skye Canyon Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Living in Skye Canyon, Las Vegas: Hyperlocal Guide
        </h2>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Skye Canyon Master-Planned Community
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Skye Canyon is a 1,700-acre master-planned community in northwest Las Vegas that represents one of the city's most thoughtfully designed residential developments. The community is designed for active lifestyles with extensive amenities including parks, trails, recreation centers, and top-rated schools. Skye Canyon combines the natural beauty of the surrounding desert landscape with modern community planning.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Top-Rated Schools in Zip Code 89166
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Families choosing Arroyo at Skyeview benefit from excellent schools in the Clark County School District. Roger Bryan Elementary School is highly rated (9/10) and serves the Skye Canyon area. Sig Rogich Middle School and Shadow Ridge High School provide quality education for older students. The proximity to these schools makes Skye Canyon ideal for families prioritizing education.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Local Shopping and Dining
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Skye Canyon residents have convenient access to shopping and dining. The Skye Canyon Marketplace offers grocery stores, restaurants, and retail services. Durango Square provides additional shopping options, and the area is just 15-20 minutes from the Las Vegas Strip for more extensive dining and entertainment. The community is also close to Summerlin, which offers premium shopping and dining experiences.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Outdoor Recreation and Natural Beauty
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Skye Canyon is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is just 15 minutes away, offering world-class hiking, rock climbing, and scenic drives. Mount Charleston is 30 minutes away, providing skiing in winter and hiking in summer. Lake Mead is 45 minutes away for water recreation. Within Skye Canyon itself, residents enjoy extensive trail systems, parks, and recreational facilities.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Commute and Location Benefits
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Skye Canyon offers excellent commute times throughout the Las Vegas valley. Downtown Las Vegas is approximately 20-25 minutes away, the Strip is 20-25 minutes, and McCarran International Airport is about 25-30 minutes. The northwest location provides easy access to major employment centers while maintaining a peaceful residential atmosphere away from the hustle of the city center.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Property Taxes and Cost of Living
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Las Vegas, and specifically zip code 89166, offers attractive property tax rates. Nevada's average property tax rate is approximately 0.60-0.70% of assessed value, significantly lower than many states. Combined with no state income tax, Las Vegas provides an attractive cost of living. For a $400,000 home at Arroyo at Skyeview, annual property taxes would be approximately $2,400-$2,800.
        </p>
      </section>

      {/* Section 4: Why Choose New Construction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose New Construction in Las Vegas?
        </h2>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Modern Features and Energy Efficiency
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          New construction homes at Arroyo at Skyeview feature the latest in home design and energy efficiency. Modern HVAC systems, energy-efficient windows, proper insulation, and ENERGY STAR-rated appliances help reduce utility costs in Las Vegas's hot desert climate. These features are designed specifically for the Las Vegas environment, helping you save money on utilities while maintaining comfort.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Builder Warranties and Peace of Mind
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          New construction comes with comprehensive builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). This warranty protection provides peace of mind that you won't face unexpected repair costs. Combined with Dr. Jan Duffy's building standards inspection at closing, you can be confident your home is built to the highest standards.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Current Builder Incentives
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          With 2x the normal new home inventory in Las Vegas, builders are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. These incentives can significantly reduce your monthly payment and upfront costs. Dr. Jan Duffy has insider knowledge of current Century Communities incentives and can help you maximize your savings.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          No Bidding Wars or Competition
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Unlike the resale market where bidding wars and cash offers are common, new construction offers more availability and less competition. You can choose from available homes or select a lot for new construction, giving you more options and less stress. With current high inventory levels, you have time to make informed decisions without the pressure of competing offers.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Customization Opportunities
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          When purchasing pre-construction, you may have the opportunity to customize finishes, flooring, cabinetry, and design elements through Century Communities' design center. This allows you to create a home that truly matches your style and preferences. Even if you purchase a move-in ready home, you can often make selections on finishes and upgrades.
        </p>
      </section>

      {/* Q&A Section */}
      <PageQASection questions={homepageQuestions} title="Arroyo at Skyeview: Frequently Asked Questions" />
    </div>
  )
}

