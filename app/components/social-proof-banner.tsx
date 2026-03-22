'use client'

export default function SocialProofBanner() {
  return (
    <div className="border-y border-border bg-gradient-to-r from-accent/60 via-muted/80 to-accent/60 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:gap-8 md:text-base">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden>
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0/5</span>
            <span className="text-muted-foreground">from 50+ home buyers</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-foreground">12+</span>
            <span className="text-muted-foreground">homes closed in Skye Canyon this year</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-foreground">24hr</span>
            <span className="text-muted-foreground">response time</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-foreground">100% Free</span>
            <span className="text-muted-foreground">buyer representation</span>
          </div>
        </div>
      </div>
    </div>
  )
}
