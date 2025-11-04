# Google Setup & Verification Guide

## ✅ Already Configured

### 1. Google Analytics
- **Tracking ID**: `G-6HBW87EGMR`
- **Status**: ✅ Configured in `app/layout.tsx`
- **Implementation**: Google Tag (gtag.js) with `afterInteractive` strategy
- **Location**: Scripts loaded in root layout

### 2. Google Search Console Verification
- **Verification Code**: `G-6HBW87EGMR`
- **Status**: ✅ Configured in metadata
- **Method**: Meta tag verification
- **Location**: `app/layout.tsx` metadata.verification.google

### 3. Sitemap
- **URL**: `https://www.arroyoskyeview.com/sitemap.xml`
- **Status**: ✅ Configured
- **Location**: `app/sitemap.ts`
- **Robots.txt Reference**: ✅ Included in `app/robots.ts`

### 4. Robots.txt
- **URL**: `https://www.arroyoskyeview.com/robots.txt`
- **Status**: ✅ Configured
- **Location**: `app/robots.ts`
- **Sitemap Reference**: ✅ Includes sitemap URL

### 5. Structured Data (Schema.org)
- ✅ Organization Schema
- ✅ LocalBusiness/RealEstateAgent Schema
- ✅ Person Schema
- ✅ WebSite Schema (with SearchAction)
- ✅ WebPage Schema
- ✅ BreadcrumbList Schema
- ✅ Article Schema (for blog posts)
- ✅ FAQPage Schema
- ✅ HowTo Schema
- ✅ Service Schema

## 📋 Action Items for Google Search Console

### Step 1: Verify Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.arroyoskyeview.com`
3. Choose "HTML tag" verification method
4. Copy the verification code (should match `G-6HBW87EGMR`)
5. If code is different, update `app/layout.tsx` metadata.verification.google

### Step 2: Submit Sitemap
1. In Google Search Console, go to "Sitemaps"
2. Add sitemap: `https://www.arroyoskyeview.com/sitemap.xml`
3. Submit and wait for indexing

### Step 3: Request Indexing (Optional)
1. Use "URL Inspection" tool for key pages:
   - Homepage: `/`
   - Work with Dr. Jan: `/work-with-dr-jan`
   - Key communities: `/sierra-at-skyeview`, `/terra-at-skyeview`
2. Click "Request Indexing" for each important page

## 📋 Google My Business Setup

### Step 1: Create/Claim Business Profile
1. Go to [Google Business Profile](https://www.google.com/business/)
2. Create or claim profile for:
   - **Name**: Arroyo at Skyeview | Homes by Dr. Jan Duffy
   - **Address**: 8912 Vanhoy Crk St, Las Vegas, NV 89166
   - **Phone**: (702) 903-4687
   - **Category**: Real Estate Agent
   - **Website**: https://www.arroyoskyeview.com

### Step 2: Verify Business
- Google will send verification code via mail to the business address
- Complete verification process

### Step 3: Optimize Profile
- Add photos of properties, community, Dr. Jan Duffy
- Complete business hours (9:00 AM - 6:00 PM, Mon-Sun)
- Add services offered
- Add description matching website content
- Enable messaging if desired

## 🔍 Structured Data Testing

### Test Your Structured Data
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test homepage: `https://www.arroyoskyeview.com`
3. Test key pages for schema validation
4. Fix any errors reported

### Schema Markup Coverage
- ✅ Homepage: WebSite, Organization, LocalBusiness, Person
- ✅ Community Pages: RealEstateAgent, Place, ResidentialComplex
- ✅ Blog Posts: Article, Person, Organization
- ✅ FAQ Pages: FAQPage, Question
- ✅ Service Pages: Service, RealEstateAgent

## 📊 Google Analytics Setup

### Current Configuration
- **Property**: `G-6HBW87EGMR`
- **Tracking**: Page views, events (if configured)
- **Location**: Root layout, all pages tracked

### Recommended Enhancements
1. **Goals Setup**:
   - Contact form submissions
   - Phone number clicks
   - "Work with Dr. Jan" page visits
   - Community page engagement

2. **Enhanced Ecommerce** (if applicable):
   - Track property inquiries
   - Track virtual tour views
   - Track floor plan downloads

3. **Custom Events**:
   - CTA button clicks
   - Form starts/completions
   - Video plays
   - Document downloads

## 🚀 Performance Optimization for Google

### Core Web Vitals
- ✅ Next.js Image optimization (automatic)
- ✅ Font optimization (Geist fonts via next/font)
- ✅ Script loading strategy (afterInteractive)
- ✅ Lazy loading for images

### Recommended Next Steps
1. **Test Core Web Vitals**:
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Test homepage and key pages
   - Aim for green scores across all metrics

2. **Image Optimization**:
   - Ensure all images use Next.js Image component
   - Optimize OG images (1200x630px)
   - Use WebP format where possible

3. **Code Splitting**:
   - Already handled by Next.js App Router
   - Verify dynamic imports for heavy components

## 📱 Mobile Optimization

### Current Status
- ✅ Responsive design (Tailwind CSS)
- ✅ Viewport meta tag configured
- ✅ Touch-friendly UI elements
- ✅ Mobile navigation menu

### Testing
- Test on [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Verify all pages are mobile-friendly

## 🔗 URL Structure

### Current Status
- ✅ Clean, descriptive URLs
- ✅ Canonical URLs on all pages
- ✅ HTTPS enabled (via Vercel)
- ✅ Proper redirects (via Next.js)

## 📝 Content Optimization

### SEO Best Practices Applied
- ✅ Unique titles (50-60 characters)
- ✅ Meta descriptions (150-160 characters)
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Internal linking structure
- ✅ Alt text for images
- ✅ Semantic HTML

## 🎯 Next Steps Checklist

- [ ] Verify Google Search Console property
- [ ] Submit sitemap.xml to Search Console
- [ ] Create/claim Google My Business profile
- [ ] Verify business address via mail
- [ ] Test structured data with Rich Results Test
- [ ] Set up Google Analytics goals
- [ ] Test Core Web Vitals with PageSpeed Insights
- [ ] Test mobile-friendliness
- [ ] Request indexing for key pages
- [ ] Monitor Search Console for errors
- [ ] Set up Google Alerts for brand mentions
- [ ] Configure Google Tag Manager (optional, for advanced tracking)

## 📞 Support Resources

- **Google Search Console Help**: https://support.google.com/webmasters
- **Google Analytics Help**: https://support.google.com/analytics
- **Google My Business Help**: https://support.google.com/business
- **Schema.org Documentation**: https://schema.org/

## ⚠️ Important Notes

1. **Verification**: Google Search Console verification may take 24-48 hours
2. **Indexing**: New pages may take days/weeks to appear in search results
3. **Business Profile**: Google My Business verification via mail takes 5-7 business days
4. **Structured Data**: Google may take time to recognize new schema markup
5. **Performance**: Monitor Core Web Vitals regularly and optimize as needed

