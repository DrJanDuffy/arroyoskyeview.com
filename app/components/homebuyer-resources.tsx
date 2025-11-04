import Image from 'next/image'

export default function HomebuyerResources() {
  const resources = [
    {
      id: '1',
      title: 'Top 10 Things to Do in Pahrump, Nevada',
      description: 'Located on the other side of Mount Charleston from Las Vegas, this high-desert town of almost 50,000 people offers no shortage of fun and adventure...',
      image: '/images/hero/hero-5.jpg',
      category: 'Area Guide',
    },
    {
      id: '2',
      title: 'Top Reasons for Buying a New Home in Nevada',
      description: 'Discover why you should buy a new home in Nevada. From Las Vegas\'s energy to Henderson\'s tranquility, the Silver State is sure to have your perfect home...',
      image: '/images/hero/hero-6.jpg',
      category: 'Homebuying Guide',
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
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Homebuying Process
            </a>
            <p className="text-sm text-gray-600 mt-1">Learn about our step-by-step process for buying your new home</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Online Homebuying
            </a>
            <p className="text-sm text-gray-600 mt-1">Purchase your home entirely online with our convenient platform</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Our Affiliates
            </a>
            <p className="text-sm text-gray-600 mt-1">Connect with trusted partners for financing, insurance, and more</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Blog: The Front Porch
            </a>
            <p className="text-sm text-gray-600 mt-1">Read the latest news, tips, and stories from Century Communities</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

