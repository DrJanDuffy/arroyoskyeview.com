'use client'

import { useId } from 'react'
import {
  REALSCOUT_AGENT_ENCODED_ID,
  REALSCOUT_OFFICE_LISTING_STATUS,
  REALSCOUT_OFFICE_PRICE_MAX,
  REALSCOUT_OFFICE_PRICE_MIN,
  REALSCOUT_OFFICE_PROPERTY_TYPES,
  REALSCOUT_OFFICE_SORT_ORDER,
} from '@/lib/realscout-config'

type RealScoutOfficeWidgetProps = {
  /** Extra Tailwind classes for the outer section */
  className?: string
}

/**
 * RealScout office listings (MLS) widget — custom element hydrated by em.realscout.com/dl.js.
 * Load realscout-web-components.umd.js (type=module) once in root layout.
 * Use dangerouslySetInnerHTML for the custom element markup per RealScout.
 */
export default function RealScoutOfficeWidget({ className = '' }: RealScoutOfficeWidgetProps) {
  const headingId = useId().replace(/:/g, '')

  const markup = `<realscout-office-listings
      agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}"
      sort-order="${REALSCOUT_OFFICE_SORT_ORDER}"
      listing-status="${REALSCOUT_OFFICE_LISTING_STATUS}"
      property-types="${REALSCOUT_OFFICE_PROPERTY_TYPES}"
      price-min="${REALSCOUT_OFFICE_PRICE_MIN}"
      price-max="${REALSCOUT_OFFICE_PRICE_MAX}"
    ></realscout-office-listings>`

  return (
    <section
      className={`border-t border-gray-200 bg-gray-50 py-12 sm:py-16 ${className}`.trim()}
      aria-labelledby={headingId}
      data-realscout-office-section
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id={headingId}
          className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          Browse Las Vegas area listings
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:text-base">
          Live MLS search powered by RealScout — Dr. Jan Duffy represents buyers, not the builder.
        </p>
        <div
          className="realscout-office-widget min-h-[280px] w-full [&_realscout-office-listings]:min-h-[240px]"
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </div>
    </section>
  )
}
