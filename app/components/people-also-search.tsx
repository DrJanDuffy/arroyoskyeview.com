'use client'

import Link from 'next/link'

const searchTerms = [
  { term: 'Sierra at Skyeview', url: '/sierra-at-skyeview' },
  { term: 'Ironwood', url: '/ironwood' },
  { term: 'Terra at Skyeview', url: '/terra-at-skyeview' },
  { term: 'The Townes at Union Village', url: '/find-your-new-home/nevada/las-vegas-metro' },
  { term: 'Homestead West', url: '/homestead-west' },
  { term: 'Eaglepointe at Skye Canyon', url: '/eaglepointe-skye-canyon' },
  { term: 'Arroyo at Skyeview reviews', url: '/' },
  { term: 'Sierra at Skyview', url: '/sierra-at-skyeview' },
  { term: 'Skyview Mesa', url: '/find-your-new-home/nevada/las-vegas-metro' },
  { term: 'Skye View', url: '/' },
  { term: 'Skyview Las Vegas', url: '/' },
  { term: 'Arroyo at Skyeview Homes', url: '/' },
  { term: 'Skyeview Homes', url: '/' },
  { term: 'Terra at Skyeview', url: '/terra-at-skyeview' },
]

export default function PeopleAlsoSearch() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          People Also Search For
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {searchTerms.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="inline-block bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600 transition shadow-sm hover:shadow-md"
            >
              {item.term}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

