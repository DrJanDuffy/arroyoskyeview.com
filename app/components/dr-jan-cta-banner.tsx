'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTARotator, { getCTAByContext } from './cta-rotator'

interface DrJanCTABannerProps {
  context?: string
}

export default function DrJanCTABanner({ context = '' }: DrJanCTABannerProps) {
  const [currentCTA] = useState(() => getCTAByContext(context))
  const phoneNumber = '(702) 903-4687'
  const telLink = `tel:7029034687`
  const smsLink = `sms:7029034687`

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Work with Dr. Jan Duffy - Buyer's Agent for Arroyo at Skyeview Homes
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              <strong>Dr. Jan Duffy represents HOME BUYERS, not the builder.</strong> Expert buyer representation for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166—at no extra cost to you. Construction monitoring, building standards inspection & insider knowledge.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={currentCTA.type === 'call' ? telLink : smsLink}
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition text-center whitespace-nowrap"
            >
              {currentCTA.text} - {currentCTA.type === 'call' ? 'Call' : 'Text'} Dr. Jan {phoneNumber}
            </a>
            <Link
              href="/work-with-dr-jan"
              className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-400 transition text-center whitespace-nowrap"
            >
              Learn More About Dr. Jan's Buyer Representation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

