'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

const searchTerms = [
  { term: 'Sierra at Skyview', url: '/sierra-at-skyeview' },
  { term: 'Skye Canyon homes for sale', url: '/areas/zip-89166' },
  { term: 'Skye View', url: '/' },
  { term: 'Skye Canyon new homes', url: '/areas/zip-89166' },
  { term: 'Tri Pointe Homes Lake Las Vegas', url: '/find-your-new-home/nevada/las-vegas-metro' },
  { term: 'Century homes Homestead', url: '/homestead-west' },
  { term: 'Bravado homes', url: '/find-your-new-home/nevada/las-vegas-metro' },
  { term: 'Ironwood houses', url: '/ironwood' },
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

const pillClass = cn(
  'inline-block rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition',
  'hover:border-primary hover:text-primary hover:shadow-md',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
)

export default function PeopleAlsoSearch() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">People Also Search For</h2>

        <div className="flex flex-wrap gap-3">
          {searchTerms.map((item, index) => (
            <Link key={index} href={item.url} className={pillClass}>
              {item.term}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
