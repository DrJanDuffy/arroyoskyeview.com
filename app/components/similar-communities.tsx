'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Community {
  id: string
  name: string
  location: string
  phone: string
  price: number
  image: string
  features: string[]
}

const communities: Community[] = [
  {
    id: '1',
    name: 'The Townes at Union Village',
    location: 'Henderson, NV 89011',
    phone: '702.605.0956',
    price: 366990,
    image: '/images/hero/hero-7.jpg',
    features: ['Special Incentives', 'Tour Models Today!'],
  },
  {
    id: '2',
    name: 'Skye Canyon',
    location: 'Las Vegas, NV 89166',
    phone: '702.936.3020',
    price: 392640,
    image: '/images/floor-plans/floor-plans-1.jpg',
    features: ['Masterplan Community', 'NW Las Vegas'],
  },
]

export default function SimilarCommunities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % communities.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + communities.length) % communities.length)
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Similar Communities Near You</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {communities.map((community) => (
                <div key={community.id} className="min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      {community.image ? (
                        <Image
                          src={community.image}
                          alt={community.name}
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
                      <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-10">
                        {community.features.map((feature, idx) => (
                          <span key={idx} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{community.name}</h3>
                      <p className="text-gray-600 mb-2">{community.location}</p>
                      <p className="text-blue-600 font-semibold mb-2">{community.phone}</p>
                      <p className="text-2xl font-bold text-gray-900 mb-2">Homes From {formatPrice(community.price)}</p>
                      <p className="text-sm text-gray-600 mb-4">Est. $X,XXX/mo</p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          Open Mortgage Calculator
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {communities.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
                aria-label="Previous community"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
                aria-label="Next community"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {communities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

