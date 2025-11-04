# Image Assets Guide

This document lists all the images needed for the Arroyo at Skyeview website clone.

## Image Directory Structure

Place all images in the `public/images/` directory with the following structure:

```
public/
  images/
    hero/
      hero-1.jpg
      hero-2.jpg
      hero-3.jpg
      hero-4.jpg
      hero-5.jpg
    homes/
      delray-arr224.jpg
      captiva-arr223.jpg
      delray-arr183.jpg
      beverly-arr222.jpg
      captiva-arr221.jpg
    floor-plans/
      beverly-model.jpg
      beverly-floorplan.jpg
      captiva-model.jpg
      captiva-floorplan.jpg
      delray-model.jpg
      delray-floorplan.jpg
    resources/
      resource-1.jpg
      resource-2.jpg
    communities/
      community-1.jpg
      community-2.jpg
```

## Required Images

### Hero Carousel Images (5 images)
- **hero-1.jpg**: Arroyo at Skyeview townhomes exterior view
- **hero-2.jpg**: Skye Canyon master-planned community amenities
- **hero-3.jpg**: Las Vegas townhomes with modern design
- **hero-4.jpg**: Arroyo at Skyeview community entrance
- **hero-5.jpg**: Two-story townhome with garage

**Recommended size**: 1920x1080px (16:9 aspect ratio)
**Format**: JPG, WebP, or PNG

### Available Homes Images (5 images)
- **delray-arr224.jpg**: 8933 Grabill Spruce St (Lot ARR224)
- **captiva-arr223.jpg**: 8925 Grabill Spruce St (Lot ARR223)
- **delray-arr183.jpg**: 8942 Grabill Spruce St (Lot ARR183)
- **beverly-arr222.jpg**: 8917 Grabill Spruce St (Lot ARR222)
- **captiva-arr221.jpg**: 8909 Grabill Spruce St (Lot ARR221)

**Recommended size**: 800x600px (4:3 aspect ratio)
**Format**: JPG, WebP

### Floor Plan Images (6 images)
- **beverly-model.jpg**: Beverly model home exterior/interior
- **beverly-floorplan.jpg**: Beverly floor plan layout diagram
- **captiva-model.jpg**: Captiva model home exterior/interior
- **captiva-floorplan.jpg**: Captiva floor plan layout diagram
- **delray-model.jpg**: Delray model home exterior/interior
- **delray-floorplan.jpg**: Delray floor plan layout diagram

**Recommended size**: 800x800px (1:1 aspect ratio for models)
**Recommended size**: 1200x800px (3:2 aspect ratio for floor plans)
**Format**: JPG, PNG, or WebP

### Resource Images (2 images)
- **resource-1.jpg**: Top 10 Things to Do in Pahrump, Nevada
- **resource-2.jpg**: Top Reasons for Buying a New Home in Nevada

**Recommended size**: 800x600px (4:3 aspect ratio)
**Format**: JPG, WebP

### Community Images (2 images)
- **community-1.jpg**: The Townes at Union Village
- **community-2.jpg**: Skye Canyon master plan

**Recommended size**: 800x600px (4:3 aspect ratio)
**Format**: JPG, WebP

## Image Sources

Images can be obtained from:
1. The original Century Communities website: https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---arroyo/
2. Real estate photography services
3. Stock photo services (with proper licensing)
4. Professional photography of the actual community

## Image Optimization

All images should be:
- Optimized for web (compressed)
- Properly sized for their display context
- Named descriptively for SEO
- Include alt text in components (already implemented)

## Next.js Image Optimization

The site uses Next.js Image component which automatically:
- Optimizes images on-the-fly
- Serves responsive images
- Lazy loads images below the fold
- Provides fallback placeholders

## Adding Images

1. Create the directory structure in `public/images/`
2. Add images to the appropriate folders
3. Ensure filenames match exactly as listed above
4. Images will automatically be available at `/images/[path]`

## Fallback Behavior

If images are not found, components will:
- Display a placeholder icon
- Show a gradient background (for hero carousel)
- Continue to function normally without images

