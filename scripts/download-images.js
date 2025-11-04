const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
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

// Image URLs from Century Communities website
// These are example URLs - you may need to update with actual URLs from the site
const imagesToDownload = {
  hero: [
    {
      url: 'https://www.centurycommunities.com/images/communities/arroyo-skyeview/hero-1.jpg',
      filename: 'hero-1.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/communities/arroyo-skyeview/hero-2.jpg',
      filename: 'hero-2.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/communities/arroyo-skyeview/hero-3.jpg',
      filename: 'hero-3.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/communities/arroyo-skyeview/hero-4.jpg',
      filename: 'hero-4.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/communities/arroyo-skyeview/hero-5.jpg',
      filename: 'hero-5.jpg'
    }
  ],
  homes: [
    {
      url: 'https://www.centurycommunities.com/images/homes/delray-arr224.jpg',
      filename: 'delray-arr224.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/homes/captiva-arr223.jpg',
      filename: 'captiva-arr223.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/homes/delray-arr183.jpg',
      filename: 'delray-arr183.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/homes/beverly-arr222.jpg',
      filename: 'beverly-arr222.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/homes/captiva-arr221.jpg',
      filename: 'captiva-arr221.jpg'
    }
  ],
  'floor-plans': [
    {
      url: 'https://www.centurycommunities.com/images/floor-plans/beverly-model.jpg',
      filename: 'beverly-model.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/floor-plans/beverly-floorplan.jpg',
      filename: 'beverly-floorplan.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/floor-plans/captiva-model.jpg',
      filename: 'captiva-model.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/floor-plans/captiva-floorplan.jpg',
      filename: 'captiva-floorplan.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/floor-plans/delray-model.jpg',
      filename: 'delray-model.jpg'
    },
    {
      url: 'https://www.centurycommunities.com/images/floor-plans/delray-floorplan.jpg',
      filename: 'delray-floorplan.jpg'
    }
  ]
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image download...\n');
  
  for (const [category, images] of Object.entries(imagesToDownload)) {
    console.log(`Downloading ${category} images...`);
    const dir = `public/images/${category}`;
    
    for (const image of images) {
      const filepath = path.join(dir, image.filename);
      try {
        await downloadImage(image.url, filepath);
      } catch (error) {
        console.error(`✗ Failed to download ${image.filename}: ${error.message}`);
      }
    }
    console.log('');
  }
  
  console.log('Download complete!');
}

downloadAllImages().catch(console.error);

