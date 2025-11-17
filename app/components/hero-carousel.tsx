'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { trackCTAClick } from './analytics-tracker'
import GoogleMapEmbed from './google-map-embed'

const images = [
  {
    src: '/images/hero/hero-5.jpg',
    alt: 'Arroyo at Skyeview Homes new construction townhomes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. Modern two-story homes with premium finishes.',
    title: 'Arroyo at Skyeview Homes',
  },
  {
    src: '/images/hero/hero-6.jpg',
    alt: 'Arroyo at Skyeview Homes new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada. Modern homes with energy-efficient features.',
    title: 'Arroyo at Skyeview Homes',
  },
  {
    src: '/images/floor-plans/floor-plans-1.jpg',
    alt: 'Skye Canyon master-planned community in zip code 89166, northwest Las Vegas featuring parks, trails, recreation center, and Arroyo at Skyeview Homes.',
    title: 'Skye Canyon, Zip Code 89166',
  },
  {
    src: '/images/hero/hero-7.jpg',
    alt: 'Arroyo at Skyeview Homes new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada. Modern designs with premium finishes and quality construction.',
    title: 'Arroyo at Skyeview Homes',
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
                    Arroyo at Skyeview Homes
                  </h1>
                  <p className="text-xl md:text-2xl mb-2 drop-shadow-md">New Construction Townhomes in Skye Canyon</p>
                  <p className="text-lg md:text-xl mb-4 drop-shadow-md">Zip Code 89166, Northwest Las Vegas, Nevada</p>
                  <p className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-md">Starting from $392,640</p>
                  <p className="text-sm md:text-base mb-8 drop-shadow-md bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    <strong>Dr. Jan Duffy represents HOME BUYERS</strong>—not the builder
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:7029034687"
                      onClick={() => trackCTAClick('Call Now - Hero Carousel', 'hero_carousel')}
                      className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-lg text-center"
                    >
                      Call Now: (702) 903-4687
                    </a>
                    <a
                      href="/work-with-dr-jan"
                      onClick={() => trackCTAClick('Free Buyer Representation - Hero Carousel', 'hero_carousel')}
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition shadow-lg text-center"
                    >
                      Free Buyer Representation
                    </a>
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-11 h-11 rounded-full transition flex items-center justify-center ${
              index === currentIndex ? 'bg-white/90' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}: ${img.title}`}
          >
            <span className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'
            }`} />
          </button>
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-2">Location</p>
              <div className="h-32">
                <GoogleMapEmbed 
                  address="8912 Vanhoy Crk St, Las Vegas, NV 89166"
                  height="128px"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Contact Dr. Jan</p>
              <p className="font-semibold text-gray-900">
                <a href="tel:7029034687" className="hover:text-blue-600 transition-colors">(702) 903-4687</a>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">Sales Office Hours</p>
              <p className="font-semibold text-gray-900">Mon-Sun: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

