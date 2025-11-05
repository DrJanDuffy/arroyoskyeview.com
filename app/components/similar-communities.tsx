'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Community {
  id: string
  name: string
  location: string
  phone: string
  price: number
  image: string
  features: string[]
  href: string
  anchorText: string
}

const communities: Community[] = [
  {
    id: '1',
    name: 'Sierra at Skyeview',
    location: 'Las Vegas, NV 89166',
    phone: '(702) 903-4687',
    price: 392640,
    image: '/images/hero/hero-5.jpg',
    features: ['New Construction', 'Skye Canyon'],
    href: '/sierra-at-skyeview',
    anchorText: 'Explore Sierra at Skyeview townhomes in Skye Canyon',
  },
  {
    id: '2',
    name: 'Terra at Skyeview',
    location: 'Las Vegas, NV 89166',
    phone: '(702) 903-4687',
    price: 392640,
    image: '/images/floor-plans/floor-plans-1.jpg',
    features: ['Skye Canyon', 'New Homes'],
    href: '/terra-at-skyeview',
    anchorText: 'Compare Terra at Skyeview pricing and floor plans',
  },
  {
    id: '3',
    name: 'Ironwood',
    location: 'Las Vegas, NV',
    phone: '(702) 903-4687',
    price: 392640,
    image: '/images/hero/hero-6.jpg',
    features: ['Century Communities', 'Las Vegas Metro'],
    href: '/ironwood',
    anchorText: 'View Ironwood new construction homes',
  },
  {
    id: '4',
    name: 'Homestead West',
    location: 'Las Vegas, NV',
    phone: '(702) 903-4687',
    price: 392640,
    image: '/images/hero/hero-7.jpg',
    features: ['Century Communities', 'Las Vegas'],
    href: '/homestead-west',
    anchorText: 'Discover Homestead West single-family homes',
  },
  {
    id: '5',
    name: 'Eaglepointe at Skye Canyon',
    location: 'Las Vegas, NV 89166',
    phone: '(702) 903-4687',
    price: 392640,
    image: '/images/hero/hero-5.jpg',
    features: ['Skye Canyon', 'Masterplan'],
    href: '/eaglepointe-skye-canyon',
    anchorText: 'Browse Eaglepointe at Skye Canyon master-planned community',
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Similar Communities Near You</h2>
        <p className="text-center text-gray-600 mb-8">
          Other new homes starting at $392K in Skye Canyon and Las Vegas Metro
        </p>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {communities.map((community) => (
                <div key={community.id} className="min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-64 bg-gray-200 relative overflow-hidden group">
                      <Link href={community.href} className="block h-full w-full">
                        {community.image ? (
                          <Image
                            src={community.image}
                            alt={`${community.name} new construction homes in ${community.location}. Century Communities development with modern designs and premium finishes.`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                      </Link>
                      <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-10">
                        {community.features.map((feature, idx) => (
                          <span key={idx} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <Link href={community.href} className="block group">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {community.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-2">{community.location}</p>
                      <p className="text-blue-600 font-semibold mb-2">{community.phone}</p>
                      <p className="text-2xl font-bold text-gray-900 mb-2">Homes From {formatPrice(community.price)}</p>
                      <p className="text-sm text-gray-600 mb-4">Est. $X,XXX/mo</p>
                      <div className="flex gap-2">
                        <Link href={community.href} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Community Details
                          </Button>
                        </Link>
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

