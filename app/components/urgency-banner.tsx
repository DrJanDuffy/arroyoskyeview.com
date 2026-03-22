'use client'

import { useState, useEffect } from 'react'

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Hide banner after 10 seconds or if user closes it
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative bg-linear-to-r from-orange-500 to-red-600 px-4 py-3 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <svg className="h-5 w-5 motion-safe:animate-pulse" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold md:text-base">
            Limited Inventory Available • Call Now: (702) 903-4687
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-md p-1.5 text-white transition hover:text-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          aria-label="Close banner"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

