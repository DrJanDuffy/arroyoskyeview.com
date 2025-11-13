'use client'

import Link from 'next/link'
import Image from 'next/image'

const opportunities = [
  {
    id: '1',
    community: 'Arroyo at Skyeview',
    location: 'Skye Canyon',
    price: 392640,
    incentives: '$5,000 toward closing costs',
    features: ['Top-rated schools', 'Red Rock hiking access', 'Resort-style amenities'],
    image: '/images/hero/hero-5.jpg',
    phone: '(702) 903-4687',
    href: '/',
  },
  {
    id: '2',
    community: 'Sierra at Skyeview',
    location: 'Skye Canyon',
    price: 392640,
    incentives: 'Competitive financing rates',
    features: ['Master-planned community', 'NW Las Vegas', 'Quick move-in available'],
    image: '/images/hero/hero-6.jpg',
    phone: '(702) 903-4687',
    href: '/sierra-at-skyeview',
  },
  {
    id: '3',
    community: 'Terra at Skyeview',
    location: 'Skye Canyon',
    price: 392640,
    incentives: 'Special incentives available',
    features: ['Skye Canyon location', 'New construction', 'Move-in ready homes'],
    image: '/images/hero/hero-7.jpg',
    phone: '(702) 903-4687',
    href: '/terra-at-skyeview',
  },
]

export default function BestOpportunities() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          This Week's Best Opportunities at Arroyo at Skyeview Homes
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Updated weekly with current inventory and incentives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {opportunity.image ? (
                  <Image
                    src={opportunity.image}
                    alt={opportunity.community}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Quick Move-In
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <Link href={opportunity.href}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {opportunity.community}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {opportunity.location}
                </p>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  From {formatPrice(opportunity.price)}
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-blue-900">
                    {opportunity.incentives}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {opportunity.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:7029034687"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Call/Text {opportunity.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="tel:7029034687"
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            See all available homes → Call/Text (702) 903-4687
          </a>
        </div>
      </div>
    </section>
  )
}

