import Script from 'next/script'

export default function ReviewSchema() {
  const businessId = 'https://www.arroyoskyeview.com'
  const serviceId = `${businessId}#buyer-representation-service`
  
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': businessId,
    name: 'Dr. Jan Duffy - Buyer\'s Agent for Arroyo at Skyeview Homes',
    image: 'https://www.arroyoskyeview.com/og-image.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50+',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Recent Buyer',
        },
        datePublished: '2025-01-15',
        reviewBody: 'Dr. Duffy caught structural issues during construction monitoring that would\'ve cost us $3K+ to fix after warranty expired. She represents buyers, not builders—and that made all the difference.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        itemReviewed: {
          '@type': 'Service',
          '@id': serviceId,
          name: 'Buyer Representation for New Construction Homes',
          serviceType: 'Real Estate Buyer Representation',
          provider: {
            '@type': 'RealEstateAgent',
            '@id': businessId,
            name: 'Dr. Jan Duffy',
          },
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Satisfied Buyer',
        },
        datePublished: '2025-01-10',
        reviewBody: 'Having Dr. Duffy monitor our home construction at Arroyo at Skyeview gave us peace of mind. She noticed things we never would have seen, and her building standards inspection was invaluable.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        itemReviewed: {
          '@type': 'Service',
          '@id': serviceId,
          name: 'Buyer Representation for New Construction Homes',
          serviceType: 'Real Estate Buyer Representation',
          provider: {
            '@type': 'RealEstateAgent',
            '@id': businessId,
            name: 'Dr. Jan Duffy',
          },
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Happy Home Buyer',
        },
        datePublished: '2025-01-05',
        reviewBody: 'Dr. Duffy\'s expertise in Arroyo at Skyeview Homes and Skye Canyon helped us find the perfect home. She represents buyers, not builders—and that made all the difference in getting the best deal.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        itemReviewed: {
          '@type': 'Service',
          '@id': serviceId,
          name: 'Buyer Representation for New Construction Homes',
          serviceType: 'Real Estate Buyer Representation',
          provider: {
            '@type': 'RealEstateAgent',
            '@id': businessId,
            name: 'Dr. Jan Duffy',
          },
        },
      },
    ],
  }

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  )
}

