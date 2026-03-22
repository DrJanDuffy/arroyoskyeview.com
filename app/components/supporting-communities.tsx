export default function SupportingCommunities() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Supporting Homebuyers in Las Vegas Communities
        </h2>

        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Dr. Jan Duffy is committed to helping homebuyers throughout the Las Vegas metro area, with specialized expertise in Skye Canyon, Summerlin, and northwest Las Vegas communities. Her buyer representation services ensure you have an advocate who works exclusively for your interests when purchasing new construction homes.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="mb-4 flex h-16 items-center justify-center rounded-lg bg-primary">
                <svg className="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Construction Monitoring</h3>
              <p className="text-muted-foreground">
                Regular site visits every 7-10 days throughout construction to ensure quality standards and catch potential issues before they become costly problems.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="mb-4 flex h-16 items-center justify-center rounded-lg bg-primary">
                <svg className="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Building Standards Inspection</h3>
              <p className="text-muted-foreground">
                Complimentary building standards inspection at closing to verify construction quality and ensure your new home meets all specifications and building codes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
