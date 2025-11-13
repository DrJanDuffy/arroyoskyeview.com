'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'Dr. Duffy caught structural issues during construction monitoring that would\'ve cost us $3K+ to fix after warranty expired. She\'s not just an agent—she\'s our advocate.',
    author: 'Recent Client',
    community: 'Skye Canyon',
  },
  {
    id: 2,
    quote: 'Having Dr. Duffy monitor our home construction gave us peace of mind. She noticed things we never would have seen, and her building standards inspection was invaluable.',
    author: 'Satisfied Buyer',
    community: 'Arroyo at Skyeview',
  },
  {
    id: 3,
    quote: 'Dr. Duffy\'s expertise in Arroyo at Skyeview Homes and Skye Canyon helped us find the perfect home. She represents buyers, not builders—and that made all the difference in getting the best deal.',
    author: 'Happy Home Buyer',
    community: 'Arroyo at Skyeview Homes',
  },
]

export default function DrJanTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Home Buyers Trust Dr. Jan Duffy
        </h2>
        
        <div className="flex items-center justify-center mb-8">
          <div className="bg-blue-100 px-4 py-2 rounded-full">
            <span className="text-blue-800 font-semibold text-sm">Buyer's Agent | Represents HOME BUYERS, Not Builders or HOAs</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-6">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-6 text-center">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-gray-900">
                — {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-600 text-sm">
                {testimonials[currentIndex].community}
              </p>
            </div>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

