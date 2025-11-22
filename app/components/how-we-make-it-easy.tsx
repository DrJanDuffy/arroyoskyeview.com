export default function HowWeMakeItEasy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Expert Buyer Representation Makes New Construction Homebuying Easy
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Dr. Jan Duffy provides expert buyer representation for new construction homes in northwest Las Vegas, Nevada (zip code 89166), including Arroyo at Skyeview Homes and other Skye Canyon communities. Her construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of Skye Canyon communities help you navigate all options and secure competitive pricing.
        </p>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Custom Build Options
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Quick Move-In Homes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Purchase a to-be-built home
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Purchase a quick move-in home
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Buy online
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Custom Build Options:</strong> At Arroyo at Skyeview Homes and other Skye Canyon communities, you can pick your homesite and build from the ground up—personalizing your floor plan with structural and design options along the way. Dr. Jan Duffy, your buyer's agent, guides you through the process and ensures you get the best deal and quality construction.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Quick Move-In Homes:</strong> If you need a faster timeline, builders in Skye Canyon (zip code 89166) including Arroyo at Skyeview Homes, Sierra at Skyeview, and Terra at Skyeview offer quick move-in townhomes. Dr. Jan Duffy helps you find the best quick move-in options for your timeline and budget in northwest Las Vegas.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Buy online:</strong> New construction homes at Arroyo at Skyeview Homes and other Skye Canyon communities offer online purchase options—allowing you to purchase your new home completely online with expert buyer representation from Dr. Jan Duffy.{' '}
              <a href="/online-homebuying" className="text-blue-600 hover:text-blue-700 underline">
                Learn more →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

