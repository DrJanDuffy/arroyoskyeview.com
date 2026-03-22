import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CrossCommunityLinksProps {
  currentCommunity: string
  location: string
}

const cardClass = cn(
  'surface-elevated block p-6 transition-shadow hover:shadow-md',
  'border-border hover:border-primary/35',
)

const titleClass = cn(
  'mb-2 text-xl font-bold text-foreground transition-colors',
  'group-hover:text-primary',
)

export default function CrossCommunityLinks({ currentCommunity, location }: CrossCommunityLinksProps) {
  const skyeCanyonCommunities = [
    { name: 'Arroyo at Skyeview Homes', href: '/', anchorText: 'Arroyo at Skyeview Homes: Townhomes starting at $392,640' },
    { name: 'Sierra at Skyeview', href: '/sierra-at-skyeview', anchorText: 'Sierra at Skyeview: New construction in Skye Canyon' },
    { name: 'Terra at Skyeview', href: '/terra-at-skyeview', anchorText: 'Terra at Skyeview: Skye Canyon townhomes' },
    { name: 'Eaglepointe at Skye Canyon', href: '/eaglepointe-skye-canyon', anchorText: 'Eaglepointe at Skye Canyon: Master-planned community' },
  ]

  const lasVegasMetroCommunities = [
    { name: 'Ironwood', href: '/ironwood', anchorText: 'Ironwood: New construction homes in Las Vegas Metro' },
    { name: 'Homestead West', href: '/homestead-west', anchorText: 'Homestead West: New construction homes' },
  ]

  const isSkyeCanyon = location === 'Skye Canyon' || location === 'Skye Canyon, Las Vegas'
  const similarCommunities = isSkyeCanyon
    ? skyeCanyonCommunities.filter((c) => c.name !== currentCommunity)
    : lasVegasMetroCommunities.filter((c) => c.name !== currentCommunity)

  const similarPriceCommunities = [...skyeCanyonCommunities, ...lasVegasMetroCommunities]
    .filter((c) => c.name !== currentCommunity)
    .slice(0, 3)

  if (similarCommunities.length === 0) return null

  return (
    <section className="mt-12 bg-muted/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isSkyeCanyon && (
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Other Skye Canyon Communities</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Compare Skye Canyon townhomes starting at $392K. All communities offer new construction homes in the same master-planned neighborhood.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skyeCanyonCommunities
                .filter((c) => c.name !== currentCommunity)
                .map((community) => (
                  <Link key={community.href} href={community.href} className={cn(cardClass, 'group')}>
                    <h3 className={titleClass}>{community.name}</h3>
                    <p className="text-sm text-muted-foreground">{community.anchorText}</p>
                  </Link>
                ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Similar New Homes in Las Vegas</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Other new construction homes starting at $392K in northwest Las Vegas, Nevada (zip code 89166) and throughout the Las Vegas metro area, including Skye Canyon, Summerlin, Henderson, and other master-planned communities.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similarPriceCommunities.map((community) => (
              <Link key={community.href} href={community.href} className={cn(cardClass, 'group')}>
                <h3 className={titleClass}>{community.name}</h3>
                <p className="text-sm text-muted-foreground">{community.anchorText}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-r-lg border border-border bg-primary/5 border-l-4 border-l-primary p-6">
          <h3 className="mb-2 text-xl font-bold text-foreground">Explore All Las Vegas Metro Communities</h3>
          <p className="mb-4 text-muted-foreground">
            Browse all Arroyo at Skyeview Homes and new construction homes in northwest Las Vegas (zip code 89166), Skye Canyon, Summerlin, Henderson, and throughout the Las Vegas metro area. Dr. Jan Duffy provides expert buyer representation for all new construction communities in Las Vegas, Nevada.
          </p>
          <Link
            href="/find-your-new-home/nevada/las-vegas-metro"
            className={cn(
              'inline-block font-semibold text-primary transition-colors hover:text-primary/90',
              'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            )}
          >
            Browse all Las Vegas Metro new construction communities →
          </Link>
        </div>
      </div>
    </section>
  )
}
