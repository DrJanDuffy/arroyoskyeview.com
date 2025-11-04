export default function WhereWeBuild() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Where We Build
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Statistics */}
          <div className="text-center md:text-left">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                  16+
                </div>
                <div className="text-xl font-semibold text-gray-900">
                  States
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                  45+
                </div>
                <div className="text-xl font-semibold text-gray-900">
                  Markets
                </div>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="h-96 bg-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-medium">Map of our locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

