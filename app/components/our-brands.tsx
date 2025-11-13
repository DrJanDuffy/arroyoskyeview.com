import Link from 'next/link'

export default function OurBrands() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Brands
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Arroyo at Skyeview Homes */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-6">
              <div className="h-16 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Arroyo at Skyeview Homes</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                New Construction Townhomes
              </h3>
              <div className="w-16 h-1 bg-gray-300 mb-4"></div>
              <p className="text-gray-600 mb-4 font-semibold">Skye Canyon, Northwest Las Vegas</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Purchase On-Site or Online</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Affordable to Luxury</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Modern Townhomes with Premium Finishes</span>
              </li>
            </ul>
            
            <Link 
              href="/" 
              className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore →
            </Link>
          </div>

          {/* New Construction Options */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-6">
              <div className="h-16 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">New Construction Options</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Modern Living
              </h3>
              <div className="w-16 h-1 bg-gray-300 mb-4"></div>
              <p className="text-gray-600 mb-4 font-semibold">Las Vegas, Nevada</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Purchase Online</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Affordable Quality</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Single-Family Homes · Paired Homes · Townhomes</span>
              </li>
            </ul>
            
            <Link 
              href="/" 
              className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

