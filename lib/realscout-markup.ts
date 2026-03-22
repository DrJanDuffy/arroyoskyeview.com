import {
  REALSCOUT_AGENT_ENCODED_ID,
  REALSCOUT_OFFICE_LISTING_STATUS,
  REALSCOUT_OFFICE_PROPERTY_TYPES,
  REALSCOUT_OFFICE_SORT_ORDER,
  REALSCOUT_OFFICE_PRICE_MAX,
  REALSCOUT_OFFICE_PRICE_MIN,
} from './realscout-config'

export type RealScoutOfficeListingsOverrides = {
  priceMin?: string
  priceMax?: string
  sortOrder?: string
  listingStatus?: string
  propertyTypes?: string
}

/**
 * HTML for <realscout-office-listings> — must match RealScout embed generator.
 */
export function buildRealScoutOfficeListingsMarkup(
  overrides: RealScoutOfficeListingsOverrides = {},
): string {
  const priceMin = overrides.priceMin ?? REALSCOUT_OFFICE_PRICE_MIN
  const priceMax = overrides.priceMax ?? REALSCOUT_OFFICE_PRICE_MAX
  const sortOrder = overrides.sortOrder ?? REALSCOUT_OFFICE_SORT_ORDER
  const listingStatus = overrides.listingStatus ?? REALSCOUT_OFFICE_LISTING_STATUS
  const propertyTypes = overrides.propertyTypes ?? REALSCOUT_OFFICE_PROPERTY_TYPES

  return `<realscout-office-listings
      agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}"
      sort-order="${sortOrder}"
      listing-status="${listingStatus}"
      property-types="${propertyTypes}"
      price-min="${priceMin}"
      price-max="${priceMax}"
    ></realscout-office-listings>`
}
