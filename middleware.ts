import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Define the canonical domain (www version)
  const canonicalDomain = 'www.arroyoskyeview.com'
  
  // Skip redirects for localhost (development)
  if (hostname.includes('localhost')) {
    return NextResponse.next()
  }
  
  // Redirect non-www to www (Vercel handles HTTP to HTTPS automatically)
  if (hostname !== canonicalDomain) {
    url.hostname = canonicalDomain
    url.protocol = 'https:'
    
    // Preserve pathname and search params
    return NextResponse.redirect(url, 301) // Permanent redirect for SEO
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}

