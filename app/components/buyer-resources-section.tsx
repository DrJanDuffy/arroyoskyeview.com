import Link from 'next/link'

export default function BuyerResourcesSection() {
  return (
    <section className="bg-blue-50 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Resources for New Construction Buyers
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Buying a new construction home is different from buying a resale. These guides will help you navigate the process and maximize your value.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/buyers/first-time-homebuyer"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              First-Time Homebuyer Guide
            </h3>
            <p className="text-gray-600">
              First-time homebuyer guide for new construction. Learn about down payment assistance, financing options, and the complete homebuying process with expert guidance.
            </p>
          </Link>
          <Link
            href="/buyers/builder-incentives-guide"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Current Builder Incentives for Arroyo at Skyeview Homes
            </h3>
            <p className="text-gray-600">
              Current builder incentives and promotions for Arroyo at Skyeview Homes. Learn about rate buy-downs, closing cost assistance, and how to maximize your savings.
            </p>
          </Link>
          <Link
            href="/work-with-dr-jan"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Why Work with Dr. Jan Duffy for Arroyo at Skyeview Homes
            </h3>
            <p className="text-gray-600">
              Expert buyer representation with construction monitoring, building standards inspection, and insider knowledge—at no extra cost to you.
            </p>
          </Link>
          <Link
            href="/homebuying-process"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Step-by-Step New Construction Homebuying Process
            </h3>
            <p className="text-gray-600">
              Complete guide to the new construction homebuying process from pre-registration to closing. Understand each step and what to expect.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

