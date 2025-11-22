import Link from 'next/link'

export default function SupportingCommunities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Supporting Homebuyers in Las Vegas Communities
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Dr. Jan Duffy is committed to helping homebuyers throughout the Las Vegas metro area, 
            with specialized expertise in Skye Canyon, Summerlin, and northwest Las Vegas communities. 
            Her buyer representation services ensure you have an advocate who works exclusively for 
            your interests when purchasing new construction homes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="h-16 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Construction Monitoring</h3>
              <p className="text-gray-700">
                Regular site visits every 7-10 days throughout construction to ensure quality standards 
                and catch potential issues before they become costly problems.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="h-16 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Building Standards Inspection</h3>
              <p className="text-gray-700">
                Complimentary building standards inspection at closing to verify construction quality 
                and ensure your new home meets all specifications and building codes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

