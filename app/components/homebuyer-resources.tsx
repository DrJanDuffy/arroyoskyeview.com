import Image from 'next/image'

export default function HomebuyerResources() {
  const resources = [
    {
      id: '1',
      title: 'Is the Housing Market Going To Crash? Here\'s What Experts Say',
      description: 'Expert forecasts show home prices are expected to rise nationally, not fall, over the next 5 years. Learn what the data says about the housing market outlook.',
      image: '/images/hero/hero-5.jpg',
      category: 'Market Insights',
      url: '/blog/housing-market-crash-2025',
    },
    {
      id: '2',
      title: 'Thought the Market Passed You By? Think Again.',
      description: 'With more homes to choose from, prices leveling off, and mortgage rates easing, today\'s market is offering something you haven\'t had in a while: options.',
      image: '/images/hero/hero-6.jpg',
      category: 'Market Insights',
      url: '/blog/market-passed-you-by',
    },
    {
      id: '3',
      title: 'You Can Buy a Home When You Have Student Loans',
      description: 'Learn how student loans don\'t have to prevent you from buying a new construction home in Las Vegas. Get expert advice on managing student debt while purchasing a home at Arroyo at Skyeview Homes or other Skye Canyon communities.',
      image: '/images/hero/hero-7.jpg',
      category: 'Homebuying Guide',
      url: '/blog/buying-home-with-student-loans',
    },
    {
      id: '4',
      title: 'How To Make Sure Your Sale Crosses the Finish Line',
      description: 'Learn how pre-listing inspections can help prevent buyers from backing out. Get expert advice on avoiding common deal breakers and ensuring a smooth home sale.',
      image: '/images/hero/hero-5.jpg',
      category: 'Selling Tips',
      url: '/blog/sale-crosses-finish-line',
    },
    {
      id: '5',
      title: 'New Home Inventory is 2x the Normal: Why It\'s Time to Buy New',
      description: 'With low resale inventory and 2x the normal new home inventory, builders are buying down mortgage rates, lowering prices, and offering promotions and incentives. It\'s time to buy new!',
      image: '/images/hero/hero-7.jpg',
      category: 'Market Insights',
      url: '/blog/new-home-inventory-2x',
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Homebuyer Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              {resource.image ? (
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              )}
              <div className="absolute top-2 right-2 z-10">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {resource.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
              <a
                href={resource.url || '#'}
                className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
        <ul className="space-y-3">
          <li>
            <a href="/homebuying-process" className="text-blue-600 hover:text-blue-700 font-medium">
              Homebuying Process
            </a>
            <p className="text-sm text-gray-600 mt-1">Learn about Dr. Jan Duffy's step-by-step process for buying your new construction home at Arroyo at Skyeview Homes or other Skye Canyon communities</p>
          </li>
          <li>
            <a href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
              Frequently Asked Questions
            </a>
            <p className="text-sm text-gray-600 mt-1">Get answers to common questions about buying new construction homes</p>
          </li>
          <li>
            <a href="/faq/las-vegas-hyperlocal" className="text-blue-600 hover:text-blue-700 font-medium">
              Las Vegas Neighborhood Q&A
            </a>
            <p className="text-sm text-gray-600 mt-1">Comprehensive questions and answers about Las Vegas neighborhoods, schools, and lifestyle</p>
          </li>
          <li>
            <a href="/online-homebuying" className="text-blue-600 hover:text-blue-700 font-medium">
              Online Homebuying
            </a>
            <p className="text-sm text-gray-600 mt-1">Purchase your new construction home at Arroyo at Skyeview Homes entirely online with expert buyer representation from Dr. Jan Duffy</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

