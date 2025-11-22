import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Story
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Dr. Jan Duffy brings extensive expertise in new construction homebuying to Las Vegas, specializing in 
            Arroyo at Skyeview Homes and Skye Canyon communities. With deep knowledge of northwest Las Vegas real estate, 
            zip code 89166, and the new construction process, Dr. Duffy provides expert buyer representation that protects 
            your interests throughout every stage of purchasing a new home. Her construction monitoring services, building 
            standards inspections, and insider knowledge of builder incentives help homebuyers make informed decisions and 
            secure the best deals on new construction townhomes in Skye Canyon.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-200 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

