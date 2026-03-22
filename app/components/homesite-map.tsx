import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

const Li = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start text-muted-foreground">
    <svg className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span>{children}</span>
  </li>
)

export default function HomesiteMap() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Explore homesites at this community!</h2>
      <p className="mb-6 text-muted-foreground">Get a feel for the neighborhood and find the right homesite for you</p>

      <div className="mb-6 rounded-xl bg-muted/60 p-8">
        <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
          <div className="text-center">
            <svg
              className="mx-auto mb-4 h-24 w-24 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <p className="font-medium text-foreground">Interactive Homesite Map</p>
            <p className="mt-2 text-sm text-muted-foreground">Click and drag to explore the community layout</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button type="button" className="min-h-10 font-medium">
          Printable Homesite Map
        </Button>
        <Button type="button" variant="secondary" className="min-h-10 font-medium">
          View Full Screen
        </Button>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-primary/5 p-6">
        <h3 className="mb-4 text-xl font-bold text-foreground">Homesite Information</h3>
        <ul className="space-y-2">
          <Li>View available lots and their locations</Li>
          <Li>See proximity to amenities and parks</Li>
          <Li>Check lot sizes and orientations</Li>
        </ul>
      </div>
    </div>
  )
}
