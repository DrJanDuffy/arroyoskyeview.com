/**
 * RealScout embed: office listings widget (realscout-office-listings).
 * Uses realscout-web-components.umd.js in root layout (not dl.js).
 */
export const REALSCOUT_AGENT_ENCODED_ID =
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ENCODED_ID ?? 'QWdlbnQtMjI1MDUw'

/** Matches RealScout embed generator defaults unless overridden by env */
export const REALSCOUT_OFFICE_SORT_ORDER =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_SORT_ORDER ?? 'PRICE_LOW'

export const REALSCOUT_OFFICE_LISTING_STATUS =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_LISTING_STATUS ?? 'For Sale'

/** Leading comma is intentional per RealScout embed */
export const REALSCOUT_OFFICE_PROPERTY_TYPES =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_PROPERTY_TYPES ?? ',SFR'

export const REALSCOUT_OFFICE_PRICE_MIN =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_PRICE_MIN ?? '500000'

export const REALSCOUT_OFFICE_PRICE_MAX =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_PRICE_MAX ?? '800000'
