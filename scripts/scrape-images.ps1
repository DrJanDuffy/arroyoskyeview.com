# PowerShell script to scrape images from Century Communities website
# This script will help identify and download images from the Arroyo at Skyeview page

$baseUrl = "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---arroyo/"

# Create directories
$directories = @(
    "public/images/hero",
    "public/images/homes",
    "public/images/floor-plans",
    "public/images/resources",
    "public/images/communities"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

Write-Host "Image directories created." -ForegroundColor Green

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    
    try {
        $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -ErrorAction Stop
        $contentType = $response.Headers['Content-Type']
        
        if ($contentType -like "image/*") {
            [System.IO.File]::WriteAllBytes($OutputPath, $response.Content)
            Write-Host "✓ Downloaded: $OutputPath" -ForegroundColor Green
            return $true
        } else {
            Write-Host "✗ Not an image: $Url" -ForegroundColor Yellow
            return $false
        }
    }
    catch {
        Write-Host "✗ Failed to download $Url : $_" -ForegroundColor Red
        return $false
    }
}

# Common image URL patterns from Century Communities
# These are patterns that commonly appear on their site
$imagePatterns = @(
    # Hero/carousel images
    "https://images.ctfassets.net/**/arroyo-skyeview*.jpg",
    "https://www.centurycommunities.com/images/**/arroyo*.jpg",
    "https://www.centurycommunities.com/images/**/skyeview*.jpg",
    
    # Home images
    "https://www.centurycommunities.com/images/homes/**/*.jpg",
    
    # Floor plan images
    "https://www.centurycommunities.com/images/floor-plans/**/*.jpg"
)

Write-Host "`nTo scrape images, you can:" -ForegroundColor Cyan
Write-Host "1. Use browser DevTools (F12) on the Century Communities page" -ForegroundColor Yellow
Write-Host "2. Go to Network tab and filter by 'img' or 'jpg'" -ForegroundColor Yellow
Write-Host "3. Copy image URLs and use this script to download them" -ForegroundColor Yellow
Write-Host "`nOr use the Node.js script: node scripts/download-images.js" -ForegroundColor Cyan

# Example: Download a specific image if you have the URL
# Uncomment and modify the URL below:
# $imageUrl = "https://example.com/image.jpg"
# $outputPath = "public/images/hero/hero-1.jpg"
# Download-Image -Url $imageUrl -OutputPath $outputPath

