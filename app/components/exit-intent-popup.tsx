'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import CalendlyLinkWidget from './calendly-link-widget'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Only show on desktop (not mobile)
    if (window.innerWidth < 768) return

    // Check if user has already seen/dismissed popup
    const hasSeenPopup = sessionStorage.getItem('exitIntentPopupSeen')
    if (hasSeenPopup) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0) {
        setShowPopup(true)
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    // Add event listener after a delay to avoid immediate triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000) // Wait 3 seconds before enabling exit intent

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = () => {
    setShowPopup(false)
    sessionStorage.setItem('exitIntentPopupSeen', 'true')
  }

  if (!showPopup) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="animate-in fade-in zoom-in relative w-full max-w-md rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-2xl duration-300">
        <button
          type="button"
          onClick={handleClose}
          className={cn(
            'absolute top-3 right-3 rounded-md p-2 text-muted-foreground transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          )}
          aria-label="Close popup"
        >
          <X className="h-6 w-6" aria-hidden />
        </button>

        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 id="exit-intent-title" className="mb-2 text-2xl font-bold tracking-tight text-balance">
            Before You Go, Book a Quick Call
          </h3>
          <p className="text-pretty text-muted-foreground">
            Get personalized guidance on Arroyo at Skyeview and nearby communities in a 30-minute session.
          </p>
        </div>

        <div className="space-y-4">
          <CalendlyLinkWidget
            text="Schedule time with Dr. Jan"
            className={cn(
              'inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors',
              'hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            )}
          />

          <p className="text-center text-xs text-muted-foreground">
            Prefer phone? Call (702) 903-4687
          </p>
        </div>
      </div>
    </div>
  )
}
