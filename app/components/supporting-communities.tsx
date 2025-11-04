import Link from 'next/link'

export default function SupportingCommunities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Supporting Our Communities
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <div className="h-24 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-gray-600 font-semibold text-xl">
                Century Cares Foundation
              </div>
            </div>
            <Link 
              href="#" 
              className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Volunteer</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Volunteer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

