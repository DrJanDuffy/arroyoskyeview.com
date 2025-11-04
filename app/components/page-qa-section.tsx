'use client'

import { useState } from 'react'
import Script from 'next/script'

interface QAItem {
  question: string
  answer: string
}

interface PageQASectionProps {
  questions: QAItem[]
  title?: string
  showContact?: boolean
}

export default function PageQASection({ 
  questions, 
  title = 'Frequently Asked Questions',
  showContact = true 
}: PageQASectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <Script
        id={`faq-schema-${title.replace(/\s+/g, '-').toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
          
          <div className="space-y-4">
            {questions.map((qa, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {qa.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {showContact && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan Duffy is here to answer all your questions about buying new construction homes in Las Vegas. Get expert guidance tailored to your specific situation.
              </p>
              <a
                href="tel:7029034687"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Call Dr. Jan: (702) 903-4687
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

