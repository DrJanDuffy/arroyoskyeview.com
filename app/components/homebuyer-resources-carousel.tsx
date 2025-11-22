'use client'

import { useState } from 'react'
import Image from 'next/image'

const resources = [
  {
    id: '1',
    title: 'Homeowner Approved',
    description: 'Discover why Dr. Jan Duffy is homeowner approved, with genuine reviews from real homeowners who purchased new construction homes in Las Vegas!',
    image: '/images/hero/hero-8.jpg',
  },
  {
    id: '2',
    title: 'New Construction Homes: Arroyo at Skyeview Homes',
    description: 'Learn about Arroyo at Skyeview Homes and other Skye Canyon communities to discover which new construction development fits your needs in northwest Las Vegas (zip code 89166).',
    image: '/images/hero/hero-9.jpg',
  },
  {
    id: '3',
    title: 'Steps of the Home Loan Process',
    description: 'It pays to understand how to secure a home loan—especially if you\'re a first-time buyer. Check out the basic steps of the process!',
    image: '/images/hero/hero-10.jpg',
  },
  {
    id: '4',
    title: 'The Case for Buying a Home Now',
    description: 'See why now could be the right time to make your move and purchase your new construction home in Las Vegas.',
    image: '/images/hero/hero-11.jpg',
  },
]

export default function HomebuyerResourcesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % resources.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + resources.length) % resources.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Homebuyer Resources
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {resources.map((resource) => (
                <div key={resource.id} className="min-w-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2 h-64 md:h-auto relative">
                        {resource.image ? (
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                            <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {resource.title}
                        </h3>
                        <p className="text-gray-700 mb-6">
                          {resource.description}
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-left">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
            aria-label="Previous resource"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
            aria-label="Next resource"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {resources.map((_, index) => (
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

