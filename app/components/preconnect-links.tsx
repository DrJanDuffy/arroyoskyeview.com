'use client'

import Script from 'next/script'

export default function PreconnectLinks() {
  return (
    <Script
      id="preconnect-gtm"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          const preconnect = document.createElement('link');
          preconnect.rel = 'preconnect';
          preconnect.href = 'https://www.googletagmanager.com';
          document.head.appendChild(preconnect);
          
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = 'https://www.googletagmanager.com';
          document.head.appendChild(dnsPrefetch);
        `,
      }}
    />
  )
}

