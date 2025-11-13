# Analytics Setup Guide

## ✅ Implemented Tracking

### Google Analytics Events

All phone clicks and CTAs are now tracked with the following events:

#### Phone Click Events
- **Event Name**: `phone_click`
- **Category**: `engagement`
- **Label**: `{phone_number} - {location}`
- **Locations Tracked**:
  - `sticky_mobile_cta` - Mobile sticky button
  - `hero_call_cta` - Hero section call button
  - `header_desktop` - Desktop header button
  - `header_mobile` - Mobile header button
  - `header_mobile_menu` - Mobile menu button
  - `footer_cta` - Footer call button
  - `homepage_content_section` - Content section CTAs

#### CTA Click Events
- **Event Name**: `cta_click`
- **Category**: `conversion`
- **Label**: `{cta_text} - {location}`
- **Tracked Actions**:
  - "Text Dr. Jan" clicks
  - "Work with Dr. Jan" link clicks
  - Other CTA button clicks

#### FAQ Engagement
- **Event Name**: `faq_expand`
- **Category**: `engagement`
- **Label**: `{question_text}`
- **Tracks**: Which FAQs users expand

#### Scroll Depth
- **Event Name**: `scroll_depth`
- **Category**: `engagement`
- **Label**: `{depth}%`
- **Tracks**: 25%, 50%, 75%, 100% scroll milestones

#### Form Submissions
- **Event Name**: `form_submit`
- **Category**: `conversion`
- **Label**: `{form_name}`
- **Tracks**: Contact form submissions

## 📊 Google Analytics Setup

### View Events in GA4

1. Go to Google Analytics 4
2. Navigate to **Reports** → **Engagement** → **Events**
3. Look for these custom events:
   - `phone_click`
   - `cta_click`
   - `faq_expand`
   - `scroll_depth`
   - `form_submit`

### Create Custom Reports

#### Phone Call Report
1. Go to **Explore** → **Free Form**
2. Add dimensions:
   - Event name
   - Event label (location)
3. Add metrics:
   - Event count
   - Users
4. Filter: `event_name = phone_click`

#### Conversion Funnel
1. Create funnel:
   - Page view
   - Scroll depth (25%)
   - FAQ expand
   - Phone click OR Form submit

### Set Up Goals/Conversions

In GA4, mark these as conversions:
- `phone_click` (all locations)
- `form_submit`
- `cta_click` (for "Work with Dr. Jan")

## 📈 Key Metrics to Monitor

### Primary KPIs
1. **Phone Click Rate**: Phone clicks / Page views
2. **Conversion Rate**: (Phone clicks + Form submits) / Visitors
3. **Mobile vs Desktop**: Compare conversion rates
4. **CTA Performance**: Which CTAs perform best
5. **FAQ Engagement**: Which questions are most popular

### Secondary Metrics
- Scroll depth distribution
- Time to first phone click
- Bounce rate by traffic source
- Pages per session
- Average session duration

## 🎯 Optimization Opportunities

### Based on Analytics Data

1. **If mobile phone clicks are low**:
   - Make sticky CTA more prominent
   - Test different colors/positions
   - Add SMS option prominently

2. **If FAQ engagement is low**:
   - Move FAQs higher on page
   - Add more visual interest
   - Test different questions

3. **If scroll depth is low**:
   - Improve content quality
   - Add more engaging visuals
   - Test different layouts

4. **If form submissions are low**:
   - Simplify form fields
   - Add trust signals near form
   - Test form placement

## 🔧 Advanced Tracking (Future)

### Recommended Additions

1. **Call Tracking Integration**
   - Use call tracking number
   - Track actual calls (not just clicks)
   - Measure call duration

2. **Heatmaps**
   - Hotjar or Microsoft Clarity
   - See where users click
   - Identify scroll patterns

3. **Session Recordings**
   - Watch user sessions
   - Identify friction points
   - Improve UX

4. **A/B Testing**
   - Test CTA colors
   - Test headlines
   - Test form length

## 📱 Mobile-Specific Tracking

Mobile events are tracked separately:
- `sticky_mobile_cta` - Mobile-only sticky button
- `header_mobile` - Mobile header button
- Compare mobile vs desktop performance

## 🚀 Next Steps

1. **Week 1**: Monitor baseline metrics
2. **Week 2**: Identify top-performing CTAs
3. **Week 3**: Optimize low-performing elements
4. **Week 4**: A/B test improvements

---

*Analytics tracking implemented: 2025-01-27*
*Review data after 1 week for optimization opportunities*

