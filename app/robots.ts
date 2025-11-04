import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/projects/'],
    },
    sitemap: 'https://www.arroyoskyeview.com/sitemap.xml',
  }
}

