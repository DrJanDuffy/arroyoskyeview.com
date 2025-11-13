'use client'

import { useState } from 'react'
import Link from 'next/link'
import { trackCTAClick } from './analytics-tracker'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  cta?: {
    text: string
    href: string
    type: 'link' | 'phone'
  }
}

export default function ConversionFunnel() {
  const steps: Step[] = [
    {
      id: 1,
      title: 'Contact Dr. Jan Duffy',
      description: 'Call or text your buyer\'s agent to discuss Arroyo at Skyeview Homes in Skye Canyon, zip code 89166',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      cta: {
        text: 'Call (702) 903-4687',
        href: 'tel:7029034687',
        type: 'phone',
      },
    },
    {
      id: 2,
      title: 'Free Consultation',
      description: 'Get expert guidance on Arroyo at Skyeview Homes, floor plans, pricing, and buyer representation',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      cta: {
        text: 'Learn More',
        href: '/work-with-dr-jan',
        type: 'link',
      },
    },
    {
      id: 3,
      title: 'Home Selection',
      description: 'Choose your perfect Arroyo at Skyeview Home with insider knowledge of available inventory',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Construction Monitoring',
      description: 'Dr. Jan monitors your home\'s construction every 7-10 days—protecting YOUR interests',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Move In',
      description: 'Close on your Arroyo at Skyeview Home with building standards inspection included',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Buyer's Agent Journey to Arroyo at Skyeview Homes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 5-step process with expert buyer representation from Dr. Jan Duffy—at no extra cost to you
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-blue-600 text-blue-600">
                  {step.icon}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 font-bold text-sm mb-2">Step {step.id}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                  {step.cta && (
                    <>
                      {step.cta.type === 'phone' ? (
                        <a
                          href={step.cta.href}
                          onClick={() => trackCTAClick(step.cta!.text, `funnel_step_${step.id}`)}
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
                        >
                          {step.cta.text}
                        </a>
                      ) : (
                        <Link
                          href={step.cta.href}
                          onClick={() => trackCTAClick(step.cta!.text, `funnel_step_${step.id}`)}
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
                        >
                          {step.cta.text}
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4">
            <strong className="text-gray-900">Remember:</strong> Dr. Jan Duffy represents HOME BUYERS, not builders or HOAs. 
            Builders pay for buyer representation, so there's no extra cost to you.
          </p>
          <a
            href="tel:7029034687"
            onClick={() => trackCTAClick('Call Now - Funnel', 'funnel_bottom')}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Start Your Journey: Call (702) 903-4687
          </a>
        </div>
      </div>
    </section>
  )
}

