'use client'

import { trackPhoneClick } from './analytics-tracker'

export default function StickyPhoneCTA() {
  const handleClick = () => {
    trackPhoneClick('702-903-4687', 'sticky_mobile_cta')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t-2 border-blue-600 shadow-2xl">
      <a
        href="tel:7029034687"
        onClick={handleClick}
        className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
        aria-label="Call Dr. Jan Duffy at 702-903-4687"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Call Dr. Jan: (702) 903-4687</span>
        <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded-full font-semibold">FREE</span>
      </a>
    </div>
  )
}

