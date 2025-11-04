const steps = [
  {
    id: 1,
    title: 'Find Your Home',
    description: 'Browse 15+ Las Vegas Century Communities with insider details',
    details: [
      'Understand floor plans, lot premiums, community amenities',
      'Call Dr. Duffy first—before you visit the model home',
    ],
  },
  {
    id: 2,
    title: 'Get Pre-Registered (Correctly)',
    description: 'Dr. Duffy handles proper registration with Century to ensure buyer representation',
    details: [
      'Protects your co-op benefits and ensures commission applies to your purchase',
      'No delays, no surprises at closing',
    ],
  },
  {
    id: 3,
    title: 'Monitor Construction Quality',
    description: 'Monthly check-ins while your home is built',
    details: [
      'Early issue detection = warranty protection',
      'Your building standards inspection reveals everything—while fixes are covered',
    ],
  },
  {
    id: 4,
    title: 'Close with Confidence',
    description: 'Full clarity on every aspect of your new home',
    details: [
      'No post-closing surprises',
      'Dr. Duffy\'s support continues after closing',
    ],
  },
]

export default function BuyerJourney() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Century Communities Buyer Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 font-semibold">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Ready to buy smart?
          </p>
          <a
            href="tel:702-222-1964"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Call/Text 702-222-1964
          </a>
        </div>
      </div>
    </section>
  )
}

