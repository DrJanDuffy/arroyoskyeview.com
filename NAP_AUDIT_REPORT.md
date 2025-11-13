# NAP (Name, Address, Phone) Audit Report
**Date**: January 2025  
**Status**: Issues Found - Fixes Required

---

## Correct NAP Information (Standard)

### Primary Business Contact (Dr. Jan Duffy)
- **Name**: Dr. Jan Duffy / Arroyo at Skyeview | Homes by Dr. Jan Duffy
- **Address**: 8912 Vanhoy Crk St, Las Vegas, NV 89166
- **Phone**: (702) 903-4687
- **Email**: info@arroyoskyeview.com
- **License**: Nevada Real Estate License #S.0197614

### Sales Office Locations (Different Numbers - Correct)
- **Arroyo at Skyeview Sales Office**: 702-730-4329
- **Skye Canyon Sales Office**: 702-936-3020
- **The Townes at Union Village**: 702-605-0956

### Builder Warranty Service
- **Warranty Service**: 888-885-5653 (Correct - for warranty issues only)

---

## Issues Found

### 🔴 CRITICAL: Structured Data Schema Issues

#### Issue 1: `app/components/structured-data.tsx` Line 125
- **Current**: `telephone: '+1-702-730-4329'` (Sales office number)
- **Should Be**: `telephone: '+1-702-903-4687'` (Dr. Jan Duffy's number)
- **Impact**: Google will index the wrong phone number for the business
- **Priority**: HIGH

#### Issue 2: `app/components/structured-data.tsx` - ResidentialComplex Schema
- **Current**: Uses sales office number in some schemas
- **Should Be**: Use Dr. Jan Duffy's number for business contact
- **Priority**: HIGH

### 🟡 MINOR: Display Inconsistencies

#### Issue 3: `app/components/hero-carousel.tsx` Line 146
- **Current**: Shows "702-730-4329" (Sales office number)
- **Context**: This is in the main hero carousel on homepage
- **Recommendation**: Either:
  - Change to Dr. Jan's number: "(702) 903-4687"
  - Or add label: "Sales Office: 702-730-4329"
- **Priority**: MEDIUM

#### Issue 4: `app/components/request-info.tsx` Line 202-204
- **Current**: Shows "702-730-4329" (Sales office number)
- **Context**: Request Info form component
- **Recommendation**: Should probably use Dr. Jan's number or clearly label as sales office
- **Priority**: MEDIUM

#### Issue 5: `app/components/similar-communities.tsx`
- **Current**: Shows different sales office numbers for each community
- **Status**: This is actually CORRECT - each community has its own sales office
- **Action**: No change needed, but verify consistency

---

## Files That Are Correct ✅

1. ✅ `app/components/header.tsx` - Uses (702) 903-4687
2. ✅ `app/components/footer.tsx` - Uses (702) 903-4687
3. ✅ `app/components/contact-hero.tsx` - Uses correct NAP
4. ✅ `app/components/contact-methods.tsx` - Uses (702) 903-4687 and info@arroyoskyeview.com
5. ✅ `app/components/dr-jan-contact-card.tsx` - Uses (702) 903-4687
6. ✅ `app/components/contact-locations.tsx` - Correctly lists sales office locations
7. ✅ `app/components/page-schemas.tsx` - Uses correct NAP in most schemas

---

## Fix Priority

### High Priority (Fix Immediately)
1. Fix structured data phone number in `app/components/structured-data.tsx`
2. Verify all Organization/RealEstateAgent schemas use Dr. Jan's number

### Medium Priority (Fix This Week)
3. Update hero-carousel phone display
4. Update request-info component phone display
5. Verify all page schemas are consistent

### Low Priority (Review)
6. Document which components should use sales office numbers vs. Dr. Jan's number
7. Create style guide for NAP consistency

---

## Recommendations

1. **Schema Markup**: All Organization, RealEstateAgent, and LocalBusiness schemas should use Dr. Jan Duffy's contact information (702) 903-4687
2. **Sales Office Numbers**: Only use sales office numbers in ContactLocations component or when specifically referring to sales offices
3. **Consistency**: Use "(702) 903-4687" format consistently for display (with parentheses and space)
4. **Tel Links**: Use `tel:7029034687` format (no dashes, spaces, or parentheses) for href attributes

---

## Testing Checklist

After fixes:
- [ ] Test structured data with Google Rich Results Test
- [ ] Verify all phone links work on mobile devices
- [ ] Check Google Business Profile matches site NAP
- [ ] Verify schema markup on homepage
- [ ] Test all contact forms and CTAs

