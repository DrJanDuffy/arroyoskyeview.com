import Script from 'next/script'

interface PageSchemasProps {
  pageType: 'homepage' | 'community' | 'blog' | 'about' | 'contact' | 'process' | 'neighborhood' | 'zip' | 'faq' | 'buyer-guide' | 'property-type'
  url: string
  title: string
  description: string
  breadcrumbs?: Array<{ name: string; url: string }>
  communityName?: string
  location?: string
  zipCode?: string
  author?: string
  datePublished?: string
  dateModified?: string
  image?: string
  questions?: Array<{ question: string; answer: string }>
  priceRange?: string
  rating?: { value: string; count: string }
}

export default function PageSchemas({
  pageType,
  url,
  title,
  description,
  breadcrumbs = [],
  communityName,
  location,
  zipCode,
  author,
  datePublished,
  dateModified,
  image,
  questions = [],
  priceRange,
  rating,
}: PageSchemasProps) {
  const baseUrl = 'https://www.arroyoskyeview.com'
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`

  // WebPage Schema (for all pages)
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': fullUrl,
    url: fullUrl,
    name: title,
    description: description,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Las Vegas Century Communities Realtor',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Las Vegas Century Communities Realtor',
      url: baseUrl,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
      },
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`,
      })),
    ],
  }

  // Organization Schema (Dr. Jan Duffy)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Las Vegas Century Communities Realtor',
    alternateName: ['Dr. Jan Duffy Real Estate', 'Dr. Jan Duffy'],
    description: 'Expert buyer representation for Century Communities new construction homes in Las Vegas, Nevada. Specializing in construction monitoring, building standards inspection, and insider knowledge of Las Vegas communities.',
    url: baseUrl,
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'NV',
      },
    ],
    knowsAbout: [
      'New Construction Homes',
      'Century Communities',
      'Las Vegas Real Estate',
      'Skye Canyon',
      'Summerlin',
      'Henderson',
      'First-Time Homebuyers',
      'Builder Incentives',
      'Construction Monitoring',
      'Building Standards Inspection',
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Real Estate Agent',
      telephone: '+1-702-903-4687',
    },
  }

  // RealEstateAgent Schema (Dr. Jan Duffy)
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    description: 'Century Communities Preferred Buyer\'s Agent specializing in new construction homes in Las Vegas, Nevada. Expert in construction monitoring, building standards inspection, and buyer representation.',
    url: `${baseUrl}/work-with-dr-jan`,
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      addressRegion: 'NV',
    },
    serviceType: [
      'Buyer Representation',
      'Construction Monitoring',
      'Building Standards Inspection',
      'New Construction Home Buying',
      'Century Communities Expert',
    ],
    priceRange: 'No Cost to Buyer',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50+',
      bestRating: '5',
      worstRating: '1',
    },
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Las Vegas Century Communities Realtor',
    alternateName: 'Dr. Jan Duffy Real Estate',
    description: 'Expert buyer representation for Century Communities new construction homes in Las Vegas, Nevada.',
    url: baseUrl,
    telephone: '+1-702-903-4687',
    address: {
      '@type': 'PostalAddress',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: 'No Cost to Buyer',
    image: `${baseUrl}/og-image.png`,
  }

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Buyer Representation',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+1-702-903-4687',
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      addressRegion: 'NV',
    },
    description: 'Expert buyer representation for Century Communities new construction homes including construction monitoring, building standards inspection, and insider knowledge of available inventory and pricing.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'No cost to buyer - Century Communities pays for buyer representation',
    },
  }

  // Person Schema (Dr. Jan Duffy)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan',
    jobTitle: 'Real Estate Agent',
    worksFor: {
      '@type': 'Organization',
      name: 'Las Vegas Century Communities Realtor',
    },
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Century Communities',
      'New Construction Homes',
      'Las Vegas Real Estate',
      'Construction Monitoring',
      'Building Standards Inspection',
    ],
    url: `${baseUrl}/work-with-dr-jan`,
  }

  // Community-specific schemas
  let communitySchemas: any[] = []
  if (pageType === 'community' && communityName && location) {
    // ResidentialComplex Schema
    const residentialComplexSchema = {
      '@context': 'https://schema.org',
      '@type': 'ResidentialComplex',
      name: communityName,
      description: `${communityName} is a residential community in ${location}, Las Vegas, Nevada, developed by Century Communities.`,
      url: fullUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: zipCode || '89166',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '36.2765',
        longitude: '-115.2832',
      },
      containedInPlace: {
        '@type': 'Place',
        name: location,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: zipCode || '89166',
        },
      },
      ...(priceRange && { priceRange }),
      ...(rating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: rating.value,
          reviewCount: rating.count,
          bestRating: '5',
          worstRating: '1',
        },
      }),
      developer: {
        '@type': 'Organization',
        name: 'Century Communities',
        url: 'https://www.centurycommunities.com',
      },
    }
    communitySchemas.push(residentialComplexSchema)

    // Place Schema
    const placeSchema = {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: location,
      description: `${location} is a master-planned community in Las Vegas, Nevada.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: zipCode || '89166',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '36.2765',
        longitude: '-115.2832',
      },
      containedIn: {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
    }
    communitySchemas.push(placeSchema)
  }

  // Blog Article Schema
  let articleSchema: any = null
  if (pageType === 'blog') {
    articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: fullUrl,
      author: {
        '@type': author ? 'Person' : 'Organization',
        name: author || 'Dr. Jan Duffy',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Las Vegas Century Communities Realtor',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/og-image.png`,
        },
      },
      datePublished: datePublished || new Date().toISOString().split('T')[0],
      dateModified: dateModified || new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
      ...(image && {
        image: {
          '@type': 'ImageObject',
          url: image.startsWith('http') ? image : `${baseUrl}${image}`,
        },
      }),
    }
  }

  // FAQPage Schema
  let faqSchema: any = null
  if (questions.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    }
  }

  // HowTo Schema (for process pages)
  let howToSchema: any = null
  if (pageType === 'process') {
    howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      description: description,
      step: [
        {
          '@type': 'HowToStep',
          name: 'Prequalify',
          text: 'Get prequalified for your new home purchase',
        },
        {
          '@type': 'HowToStep',
          name: 'House Hunt',
          text: 'Explore available homes and floor plans',
        },
        {
          '@type': 'HowToStep',
          name: 'Contract',
          text: 'Sign contract and begin construction',
        },
        {
          '@type': 'HowToStep',
          name: 'Close',
          text: 'Complete closing and move into your new home',
        },
      ],
    }
  }

  // WebSite Schema (for homepage only - required for site name)
  let websiteSchema: any = null
  if (pageType === 'homepage') {
    websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Las Vegas Century Communities Realtor',
      alternateName: ['Arroyo at Skyeview', 'Dr. Jan Duffy Real Estate', 'arroyoskyeview.com'],
      url: baseUrl,
    }
  }

  // Collect all schemas
  const allSchemas = [
    webPageSchema,
    breadcrumbSchema,
    organizationSchema,
    realEstateAgentSchema,
    localBusinessSchema,
    serviceSchema,
    personSchema,
    ...communitySchemas,
    ...(articleSchema ? [articleSchema] : []),
    ...(faqSchema ? [faqSchema] : []),
    ...(howToSchema ? [howToSchema] : []),
    ...(websiteSchema ? [websiteSchema] : []),
  ]

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={`schema-${pageType}-${index}`}
          id={`schema-${pageType}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

