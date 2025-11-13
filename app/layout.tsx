import type { Metadata, Viewport } from 'next'
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
  title: 'Arroyo at Skyeview Homes | New Construction Townhomes in Skye Canyon, Northwest Las Vegas, NV (Zip Code 89166)',
  description: 'Arroyo at Skyeview Homes offers new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). 2-4 bedrooms, 2.5 baths, starting from $392,640. Dr. Jan Duffy is your buyer\'s agent—she represents HOME BUYERS, not builders or HOAs. Expert buyer representation at no extra cost. Call (702) 903-4687.',
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
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
    title: 'Arroyo at Skyeview Homes | New Construction Townhomes in Skye Canyon, Northwest Las Vegas, NV',
    description: 'Arroyo at Skyeview Homes: New construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). 2-4 bedrooms, premium finishes, starting from $392,640. Dr. Jan Duffy is your buyer\'s agent—she represents HOME BUYERS, not builders or HOAs. Expert buyer representation at no extra cost. Call (702) 903-4687.',
    siteName: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
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
    title: 'Arroyo at Skyeview Homes | New Construction Townhomes in Skye Canyon, Northwest Las Vegas, NV',
    description: 'Arroyo at Skyeview Homes: New construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). 2-4 bedrooms, premium finishes, starting from $392,640. Dr. Jan Duffy is your buyer\'s agent—she represents HOME BUYERS, not builders or HOAs. Expert buyer representation at no extra cost. Call (702) 903-4687.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.arroyoskyeview.com',
  },
  verification: {
    google: 'G-6HBW87EGMR',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
