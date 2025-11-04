import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import StructuredData from './components/structured-data'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arroyoskyeview.com'),
  title: 'Arroyo at Skyeview at Skye Canyon | New Homes in Las Vegas, NV',
  description: 'Arroyo at Skyeview is a residential community of townhomes in Skye Canyon, Las Vegas, Nevada. Developed by Century Communities, the community offers two-story townhomes with 2-4 bedrooms, 2.5 baths, and 2-bay garages, starting from $392,640.',
  keywords: [
    'new homes Las Vegas',
    'townhomes Las Vegas',
    'Skyeview Arroyo',
    'Skye Canyon',
    'Las Vegas real estate',
    'new construction Las Vegas',
    'Century Communities',
    'Las Vegas homes',
    'Nevada townhomes',
    'Las Vegas NV 89166',
  ],
  authors: [{ name: 'Century Communities' }],
  creator: 'Century Communities',
  publisher: 'Century Communities',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.arroyoskyeview.com',
    title: 'Arroyo at Skyeview at Skye Canyon | New Homes in Las Vegas, NV',
    description: 'Discover new townhomes at Skyeview! Starting from $392,640',
    siteName: 'Arroyo at Skyeview',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arroyo at Skyeview at Skye Canyon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arroyo at Skyeview at Skye Canyon | New Homes in Las Vegas, NV',
    description: 'Discover new townhomes at Skyeview! Starting from $392,640',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.arroyoskyeview.com',
  },
  verification: {
    google: 'G-6HBW87EGMR',
  },
  manifest: '/manifest.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HBW87EGMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HBW87EGMR');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
