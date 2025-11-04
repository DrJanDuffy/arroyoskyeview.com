export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Arroyo at Skyeview at Skye Canyon',
    description: 'New townhomes in Las Vegas, NV. Starting from $392,640. Discover thoughtfully designed, two-story townhomes with exciting features like quartz countertops.',
    url: 'https://arroyoskyeview.com',
    telephone: '+1-702-730-4329',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8912 Vanhoy Creek St.',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2765',
      longitude: '-115.2832',
    },
    priceRange: '$392,640 - $424,590',
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '12:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '8866',
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Find Your Home',
        item: 'https://arroyoskyeview.com/#homes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nevada',
        item: 'https://arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Las Vegas Metro',
        item: 'https://arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Las Vegas',
        item: 'https://arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Skye Canyon',
        item: 'https://arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Skyeview - Arroyo',
        item: 'https://arroyoskyeview.com',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}

