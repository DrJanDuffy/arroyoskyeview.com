'use client'

export default function MapView() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Find Communities on the Map
        </h2>

        <div className="surface-elevated overflow-hidden shadow-lg">
          <div className="relative h-96 overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <svg className="mx-auto mb-4 h-24 w-24" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg font-medium text-foreground">Interactive Map</p>
                <p className="mt-2 text-sm text-muted-foreground">Las Vegas Metro Area Communities</p>
              </div>
            </div>

            <div className="absolute top-1/4 left-1/4 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-lg">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background">
                Arroyo at Skyeview
              </div>
            </div>
            <div className="absolute top-1/3 right-1/3 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-lg">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background">
                Skye Canyon
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-lg">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background">
                Union Village
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-muted-foreground">Click on a pin to view community details</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-background bg-primary" aria-hidden />
              <span className="text-sm text-foreground">Arroyo at Skyeview Homes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-background bg-muted-foreground/50" aria-hidden />
              <span className="text-sm text-foreground">New Construction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
