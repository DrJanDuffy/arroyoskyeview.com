'use client'

import Link from 'next/link'

const searchTerms = [
  // Google Business Profile "People also search for" terms
  { term: 'Sierra at Skyview', url: '/sierra-at-skyeview' },
  { term: 'Skye Canyon homes for sale', url: '/areas/zip-89166' },
  { term: 'Skye View', url: '/' },
  { term: 'Skye Canyon new homes', url: '/areas/zip-89166' },
  { term: 'Tri Pointe Homes Lake Las Vegas', url: '/find-your-new-home/nevada/las-vegas-metro' },
  { term: 'Century homes Homestead', url: '/homestead-west' },
  { term: 'Bravado homes', url: '/find-your-new-home/nevada/las-vegas-metro' },
  { term: 'Ironwood houses', url: '/ironwood' },
  // Additional related searches
  { term: 'Sierra at Skyeview', url: '/sierra-at-skyeview' },
  { term: 'Terra at Skyeview', url: '/terra-at-skyeview' },
  { term: 'Homestead West', url: '/homestead-west' },
  { term: 'Eaglepointe at Skye Canyon', url: '/eaglepointe-skye-canyon' },
  { term: 'Arroyo at Skyeview reviews', url: '/testimonials' },
  { term: 'Skyview Las Vegas', url: '/' },
  { term: 'Arroyo at Skyeview Homes', url: '/' },
  { term: 'Skyeview Homes', url: '/' },
  { term: 'New construction Skye Canyon', url: '/areas/zip-89166' },
  { term: 'Townhomes Skye Canyon', url: '/' },
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

