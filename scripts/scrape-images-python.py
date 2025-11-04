#!/usr/bin/env python3
"""
Image scraper for Century Communities Arroyo at Skyeview website.
This script will download images from the website.
"""

import os
import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import re

# Base URL
BASE_URL = "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---arroyo/"

# Create directories
directories = [
    "public/images/hero",
    "public/images/homes",
    "public/images/floor-plans",
    "public/images/resources",
    "public/images/communities"
]

for directory in directories:
    os.makedirs(directory, exist_ok=True)

def download_image(url, filepath):
    """Download an image from URL to filepath."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30, stream=True)
        response.raise_for_status()
        
        # Check if it's an image
        content_type = response.headers.get('content-type', '')
        if not content_type.startswith('image/'):
            print(f"✗ Not an image: {url}")
            return False
        
        # Save the image
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ Downloaded: {filepath}")
        return True
    except Exception as e:
        print(f"✗ Failed to download {url}: {str(e)}")
        return False

def scrape_page_images():
    """Scrape all images from the page."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(BASE_URL, headers=headers, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all images
        images = soup.find_all('img')
        
        print(f"Found {len(images)} images on the page\n")
        
        hero_count = 0
        home_count = 0
        floorplan_count = 0
        
        for img in images:
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
            if not src:
                continue
            
            # Convert relative URLs to absolute
            img_url = urljoin(BASE_URL, src)
            
            # Skip data URLs and very small images
            if img_url.startswith('data:') or 'icon' in img_url.lower() or 'logo' in img_url.lower():
                continue
            
            # Determine category based on URL or context
            filename = os.path.basename(urlparse(img_url).path)
            if not filename or '.' not in filename:
                continue
            
            # Categorize images
            if 'hero' in img_url.lower() or 'carousel' in img_url.lower() or 'banner' in img_url.lower():
                category = 'hero'
                hero_count += 1
                filename = f"hero-{hero_count}.jpg"
            elif 'home' in img_url.lower() or 'property' in img_url.lower():
                category = 'homes'
                home_count += 1
                filename = f"home-{home_count}.jpg"
            elif 'floor' in img_url.lower() or 'plan' in img_url.lower():
                category = 'floor-plans'
                floorplan_count += 1
                filename = f"floorplan-{floorplan_count}.jpg"
            else:
                category = 'hero'  # Default
                hero_count += 1
                filename = f"hero-{hero_count}.jpg"
            
            filepath = os.path.join(f"public/images/{category}", filename)
            
            print(f"Downloading: {img_url}")
            download_image(img_url, filepath)
            print()
        
        print("Scraping complete!")
        
    except Exception as e:
        print(f"Error scraping page: {str(e)}")

if __name__ == "__main__":
    print("Starting image scraping from Century Communities...\n")
    scrape_page_images()

