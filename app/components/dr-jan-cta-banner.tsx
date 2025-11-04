import Link from 'next/link'

export default function DrJanCTABanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Work with Dr. Duffy - Century Communities Expert
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Get expert representation on new construction—at no extra cost to you. Construction monitoring, building standards inspection & insider knowledge.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:702-222-1964"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition text-center whitespace-nowrap"
            >
              Call Dr. Duffy: 702-222-1964
            </a>
            <Link
              href="/work-with-dr-jan"
              className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-400 transition text-center whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

