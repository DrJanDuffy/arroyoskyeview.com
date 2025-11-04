export default function HowWeMakeItEasy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          How we make it easy
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          We've got your homebuying needs covered with two industry-leading homebuilding brands.
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
                    Century Communities
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Century Complete
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
              <strong>Century Communities:</strong> If you're looking to pick your homesite and build from the ground up—personalizing your floor plan with structural and design options along the way—our flagship brand is for you.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Century Complete:</strong> If you're in need of something on a faster timeline, both of our brands give you the option to purchase a quick move-in home—with Century Complete offering streamlined single-family homes at a more affordable price, and Century Communities offering everything from quick move-in single-family homes to townhomes and condos.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Buy online:</strong> Available homes from both homebuilding brands offer our industry-first "Buy Now" option—allowing you to purchase your new home completely online!{' '}
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

