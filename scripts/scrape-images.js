const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Base URL
const BASE_URL = 'https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---arroyo/';

// Create directories
const directories = [
  'public/images/hero',
  'public/images/homes',
  'public/images/floor-plans',
  'public/images/resources',
  'public/images/communities'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Download a file
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        return downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      // Check content type
      const contentType = response.headers['content-type'] || '';
      if (!contentType.startsWith('image/')) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        reject(new Error(`Not an image: ${contentType}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    });
    
    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
    
    request.setTimeout(30000, () => {
      request.destroy();
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(new Error('Request timeout'));
    });
  });
}

// Resolve relative URLs
function resolveUrl(baseUrl, relativeUrl) {
  try {
    return new URL(relativeUrl, baseUrl).href;
  } catch (e) {
    return relativeUrl;
  }
}

// Extract images from HTML
function extractImages(html, baseUrl) {
  const images = [];
  
  // Match img tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !src.startsWith('data:') && !src.includes('icon') && !src.includes('logo')) {
      images.push(resolveUrl(baseUrl, src));
    }
  }
  
  // Match data-src (lazy loading)
  const dataSrcRegex = /<img[^>]+data-src=["']([^"']+)["'][^>]*>/gi;
  while ((match = dataSrcRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !src.startsWith('data:')) {
      images.push(resolveUrl(baseUrl, src));
    }
  }
  
  // Match background images
  const bgRegex = /background-image:\s*url\(["']?([^"')]+)["']?\)/gi;
  while ((match = bgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !src.startsWith('data:')) {
      images.push(resolveUrl(baseUrl, src));
    }
  }
  
  return [...new Set(images)]; // Remove duplicates
}

// Fetch HTML from URL
function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return fetchHTML(response.headers.location).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Categorize image
function categorizeImage(url, index) {
  const urlLower = url.toLowerCase();
  
  // Skip SVGs, icons, logos, and small images
  if (urlLower.includes('.svg') || 
      urlLower.includes('icon') || 
      urlLower.includes('logo') || 
      urlLower.includes('badge') ||
      urlLower.includes('toggle') ||
      urlLower.includes('footer') ||
      urlLower.includes('gif') ||
      urlLower.includes('width=100')) {
    return null; // Skip this image
  }
  
  // Filter by URL patterns
  if (urlLower.includes('elevation') || urlLower.includes('unit') || urlLower.includes('craftsman') || urlLower.includes('contemporary')) {
    // These are home elevation images
    const match = urlLower.match(/(unit\d|th)/);
    return {
      category: 'homes',
      filename: match ? `${match[1]}-${index}.jpg` : `home-${index}.jpg`
    };
  } else if (urlLower.includes('blog') || urlLower.includes('pahrump') || urlLower.includes('nevada')) {
    return {
      category: 'resources',
      filename: `resource-${index}.jpg`
    };
  } else if (urlLower.includes('union-village') || urlLower.includes('skyecanyon') || urlLower.includes('master-plan')) {
    return {
      category: 'communities',
      filename: `community-${index}.jpg`
    };
  } else if (urlLower.includes('hero') || urlLower.includes('carousel') || urlLower.includes('banner') || urlLower.includes('slider') || urlLower.includes('header')) {
    return {
      category: 'hero',
      filename: `hero-${index}.jpg`
    };
  } else if (urlLower.includes('floor') || urlLower.includes('plan') || urlLower.includes('layout')) {
    return {
      category: 'floor-plans',
      filename: `floorplan-${index}.jpg`
    };
  }
  
  // Default to skip if we can't categorize
  return null;
}

// Main scraping function
async function scrapeImages() {
  console.log('Fetching page HTML...\n');
  
  try {
    const html = await fetchHTML(BASE_URL);
    console.log('✓ HTML fetched\n');
    
    const imageUrls = extractImages(html, BASE_URL);
    console.log(`Found ${imageUrls.length} images\n`);
    
    const counters = {
      hero: 0,
      homes: 0,
      'floor-plans': 0,
      resources: 0,
      communities: 0
    };
    
    for (let i = 0; i < imageUrls.length; i++) {
      const url = imageUrls[i];
      const categorized = categorizeImage(url, i + 1);
      
      // Skip if categorized as null
      if (!categorized) {
        console.log(`Skipping (${i + 1}/${imageUrls.length}): ${url}`);
        continue;
      }
      
      const category = categorized.category;
      const filename = categorized.filename;
      
      counters[category] = (counters[category] || 0) + 1;
      
      // Preserve original extension or use jpg
      const urlPath = new URL(url).pathname;
      const ext = path.extname(urlPath) || '.jpg';
      const finalFilename = filename.replace(/\.(jpg|png|webp)$/i, ext);
      
      const filepath = path.join('public/images', category, finalFilename);
      
      console.log(`Downloading (${i + 1}/${imageUrls.length}): ${url}`);
      console.log(`  → ${filepath}`);
      try {
        await downloadFile(url, filepath);
      } catch (error) {
        console.log(`  ✗ Failed: ${error.message}`);
      }
      console.log();
    }
    
    console.log('Scraping complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the scraper
scrapeImages();

