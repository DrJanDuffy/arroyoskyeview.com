import Link from 'next/link'

export default function DrJanContactCard() {
  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">DJ</span>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Dr. Duffy
          </h3>
          <p className="text-sm text-blue-600 font-semibold mb-2">
            New Construction Home Preferred Buyer's Agent
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Expert representation on new construction with construction monitoring, building standards inspection & insider knowledge.
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <a
          href="tel:7029034687"
          className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Call/Text: (702) 903-4687
        </a>
        <Link
          href="/work-with-dr-jan"
          className="block w-full bg-white text-blue-600 border-2 border-blue-600 text-center px-4 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
        >
          Learn Why Choose Dr. Duffy
        </Link>
      </div>
      
      <div className="mt-4 pt-4 border-t border-blue-200">
        <p className="text-xs text-gray-600">
          <strong>Remember:</strong> Builders pay for buyer representation on Arroyo at Skyeview Homes—you're already funding an agent, so choose the best one.
        </p>
      </div>
    </div>
  )
}

