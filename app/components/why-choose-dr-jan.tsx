export default function WhyChooseDrJan() {
  const benefits = [
    {
      title: 'Expert Market Knowledge',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      points: [
        'New construction homes are strategically positioned in amenity-rich master-planned communities like Skye Canyon, plus neighborhoods across Las Vegas, Nevada',
        'Dr. Jan Duffy, your buyer\'s agent, knows which communities fit YOUR lifestyle and budget',
        'Real-time inventory tracking across all new construction communities in Las Vegas, Nevada and Skye Canyon',
      ],
    },
    {
      title: 'Construction Protection (Your Superpower)',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      points: [
        'Dr. Jan Duffy, your buyer\'s agent, monitors your home\'s construction every 7-10 days—the builder\'s team works for the builder, but Dr. Duffy works exclusively for YOU',
        'Complimentary Building Standards Home Inspection at closing (catches issues BEFORE your warranty matters)',
        'Construction quality difference? When the superintendent knows your buyer\'s agent is watching, your home gets built right',
        'Once the superintendent knows buyer\'s agent monitoring will happen, he takes special care to follow construction standards Homes for Sale Vegas',
      ],
    },
    {
      title: 'Smart Financial Positioning',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      points: [
        'The price you pay doesn\'t change—commission is built into new construction home prices whether you use a buyer\'s agent or not Homes for Sale Vegas',
        'Current builder incentives include up to $5,000 toward closing costs and competitive financing rates Neighborhoods in Las Vegas',
        'Dr. Jan Duffy, your buyer\'s agent, navigates incentives, timing, and move-in-ready inventory for maximum savings',
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Your Buyer's Agent Advantage in Las Vegas, Nevada
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

