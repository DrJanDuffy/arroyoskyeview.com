import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arroyo at Skyeview at Skye Canyon',
    short_name: 'Arroyo Skyeview',
    description: 'New townhomes in Las Vegas, NV. Discover thoughtfully designed, two-story townhomes starting from $392,640.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

