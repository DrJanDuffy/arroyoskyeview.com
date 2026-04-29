'use client'

import { useEffect } from 'react'
import { CALENDLY_URL } from '@/lib/calendly'

export default function CalendlyBadgeWidget() {
  useEffect(() => {
    if (!window.Calendly?.initBadgeWidget) return

    const existingBadge = document.querySelector('.calendly-badge-widget')
    if (!existingBadge) {
      window.Calendly.initBadgeWidget({
        url: CALENDLY_URL,
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false,
      })
    }
  }, [])

  return null
}
