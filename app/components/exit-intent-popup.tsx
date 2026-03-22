'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { trackFormSubmit } from './analytics-tracker'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmit('exit_intent_popup')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitted(true)

    // Close after 3 seconds
    setTimeout(() => {
      handleClose()
    }, 3000)
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

        {!submitted ? (
          <>
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 id="exit-intent-title" className="mb-2 text-2xl font-bold tracking-tight text-balance">
                Get Your Free Buyer's Guide
              </h3>
              <p className="text-pretty text-muted-foreground">
                Download our free guide: &quot;10 Things Every New Construction Home Buyer Should Know&quot;
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-email" className="mb-2 block text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="popup-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    'w-full rounded-lg border-2 border-input bg-background px-4 py-3 text-foreground shadow-xs transition-colors',
                    'placeholder:text-muted-foreground',
                    'focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
                  )}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>

              <Button type="submit" size="lg" className="min-h-11 w-full font-semibold">
                Get Free Guide
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to receive emails from Dr. Jan Duffy. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Or call Dr. Jan Duffy directly:
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-h-11 w-full font-semibold"
              >
                <a href="tel:7029034687">Call (702) 903-4687</a>
              </Button>
            </div>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
              <svg
                className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-balance">Check Your Email!</h3>
            <p className="text-muted-foreground">
              Your free buyer&apos;s guide has been sent to {email}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
