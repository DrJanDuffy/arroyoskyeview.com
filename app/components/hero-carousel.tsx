'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/hero/hero-5.jpg',
    alt: 'Arroyo at Skyeview new construction townhomes in Skye Canyon, Las Vegas, Nevada. Modern two-story homes with premium finishes.',
    title: 'Arroyo at Skyeview',
  },
  {
    src: '/images/hero/hero-6.jpg',
    alt: 'Century Communities new construction homes in Las Vegas, Nevada. Modern townhomes and single-family homes with energy-efficient features.',
    title: 'Century Communities Las Vegas',
  },
  {
    src: '/images/floor-plans/floor-plans-1.jpg',
    alt: 'Skye Canyon master-planned community in northwest Las Vegas featuring parks, trails, recreation center, and new construction homes.',
    title: 'Skye Canyon',
  },
  {
    src: '/images/hero/hero-7.jpg',
    alt: 'Century Communities new construction homes in Las Vegas Metro area. Modern designs with premium finishes and quality construction.',
    title: 'Century Communities',
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full h-[500px] bg-gray-200">
      {/* Carousel */}
      <div className="relative h-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                onError={(e) => {
                  // Fallback to gradient if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-800')
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-800/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    Arroyo at Skyeview at Skye Canyon
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 drop-shadow-md">New Homes in Las Vegas, NV</p>
                  <p className="text-2xl md:text-3xl font-semibold mb-8 drop-shadow-md">Starting from $392,640</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-lg">
                      Request Info
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition shadow-lg">
                      Schedule a Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Thumbnail Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}: ${img.title}`}
          />
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-semibold text-gray-900">8912 Vanhoy Crk St, Las Vegas, NV 89166</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-semibold text-gray-900">702-730-4329</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Sales Office Hours</p>
              <p className="font-semibold text-gray-900">Mon-Sun: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

