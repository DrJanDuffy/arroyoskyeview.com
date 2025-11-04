import Link from 'next/link'

export default function WhyWorkWithDrJan() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Work with Dr. Duffy?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get expert representation on Century Communities new construction—at no extra cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Construction Monitoring
            </h3>
            <p className="text-gray-700 mb-4">
              Dr. Duffy monitors your home's construction every 7-10 days, catching issues before your warranty expires. When the superintendent knows Dr. Duffy's watching, your home gets built right.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Building Standards Inspection
            </h3>
            <p className="text-gray-700 mb-4">
              Complimentary inspection at closing catches issues BEFORE your warranty matters—saving you thousands in post-warranty repairs.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Insider Knowledge
            </h3>
            <p className="text-gray-700 mb-4">
              Dr. Duffy knows which of the 15+ Las Vegas Century Communities fit YOUR lifestyle and budget, with real-time inventory tracking.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              No Extra Cost
            </h3>
            <p className="text-gray-700 mb-4">
              Century Communities pays for buyer representation—you're already funding an agent, so choose the best one who works for YOU, not the builder.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:7029034687"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-lg mr-4 mb-4"
          >
            Call Dr. Jan: (702) 903-4687
          </a>
          <Link
            href="/work-with-dr-jan"
            className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition shadow-lg mb-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

