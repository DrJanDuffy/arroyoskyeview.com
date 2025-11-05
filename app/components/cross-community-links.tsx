import Link from 'next/link'

interface CrossCommunityLinksProps {
  currentCommunity: string
  location: string
}

export default function CrossCommunityLinks({ currentCommunity, location }: CrossCommunityLinksProps) {
  // Skye Canyon communities (zip 89166)
  const skyeCanyonCommunities = [
    { name: 'Arroyo at Skyeview', href: '/', anchorText: 'Arroyo at Skyeview: Townhomes starting at $392,640' },
    { name: 'Sierra at Skyeview', href: '/sierra-at-skyeview', anchorText: 'Sierra at Skyeview: New construction in Skye Canyon' },
    { name: 'Terra at Skyeview', href: '/terra-at-skyeview', anchorText: 'Terra at Skyeview: Skye Canyon townhomes' },
    { name: 'Eaglepointe at Skye Canyon', href: '/eaglepointe-skye-canyon', anchorText: 'Eaglepointe at Skye Canyon: Master-planned community' },
  ]

  // Las Vegas Metro communities
  const lasVegasMetroCommunities = [
    { name: 'Ironwood', href: '/ironwood', anchorText: 'Ironwood: New construction homes in Las Vegas Metro' },
    { name: 'Homestead West', href: '/homestead-west', anchorText: 'Homestead West: Century Communities homes' },
  ]

  // Filter out current community
  const isSkyeCanyon = location === 'Skye Canyon' || location === 'Skye Canyon, Las Vegas'
  const similarCommunities = isSkyeCanyon
    ? skyeCanyonCommunities.filter(c => c.name !== currentCommunity)
    : lasVegasMetroCommunities.filter(c => c.name !== currentCommunity)

  // Get similar price point communities (all are $392K)
  const similarPriceCommunities = [
    ...skyeCanyonCommunities,
    ...lasVegasMetroCommunities,
  ].filter(c => c.name !== currentCommunity).slice(0, 3)

  if (similarCommunities.length === 0) return null

  return (
    <section className="bg-gray-50 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isSkyeCanyon && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Skye Canyon Communities
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Compare Skye Canyon townhomes starting at $392K. All communities offer new construction homes in the same master-planned neighborhood.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skyeCanyonCommunities
                .filter(c => c.name !== currentCommunity)
                .map((community) => (
                  <Link
                    key={community.href}
                    href={community.href}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {community.anchorText}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Similar New Homes in Las Vegas
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Other new homes starting at $392K across Las Vegas Metro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarPriceCommunities.map((community) => (
              <Link
                key={community.href}
                href={community.href}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {community.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {community.anchorText}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Explore All Las Vegas Metro Communities
          </h3>
          <p className="text-gray-700 mb-4">
            Browse all Century Communities new construction homes across Las Vegas, Henderson, and Summerlin.
          </p>
          <Link
            href="/find-your-new-home/nevada/las-vegas-metro"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            Browse all Las Vegas Metro new construction communities →
          </Link>
        </div>
      </div>
    </section>
  )
}

