'use client'

export default function MapView() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Find Communities on the Map
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm mt-2">Las Vegas Metro Area Communities</p>
              </div>
            </div>
            
            {/* Map pins for communities */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Arroyo at Skyeview
              </div>
            </div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg transform translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Skye Canyon
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 translate-y-1/2">
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Union Village
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Click on a pin to view community details
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700">Arroyo at Skyeview Homes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700">New Construction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

