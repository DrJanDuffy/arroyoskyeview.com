'use client'

import { CALENDLY_URL } from '@/lib/calendly'

type CalendlyInlineWidgetProps = {
  url?: string
  className?: string
}

export default function CalendlyInlineWidget({
  url = CALENDLY_URL,
  className = '',
}: CalendlyInlineWidgetProps) {
  return (
    <div
      className={`calendly-inline-widget min-w-[320px] h-[700px] ${className}`.trim()}
      data-url={url}
    />
  )
}
