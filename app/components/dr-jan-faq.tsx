'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Does it cost more to use an agent for Century Communities?',
    answer: 'No—the commission is built into Century\'s home pricing whether you represent yourself or hire an agent. You\'re already paying for representation, so choose someone who protects YOUR interests. Homes for Sale Vegas',
  },
  {
    question: 'What makes Dr. Duffy different from going directly to the builder\'s agent?',
    answer: 'The builder\'s entire team—from model home agents to carpenters—works exclusively for Century Communities, not for you. Dr. Duffy monitors construction quality and advocates solely for your interests. Homes for Sale Vegas',
  },
  {
    question: 'Which Century Communities are best for [families/first-time buyers/investors]?',
    answer: 'Let\'s talk—Dr. Jan Duffy knows the ins and outs of every community. Call/text (702) 903-4687',
  },
]

export default function DrJanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

