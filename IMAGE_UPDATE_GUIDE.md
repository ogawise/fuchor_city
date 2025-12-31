# Fuchor City Guest House - Image Update Guide

## Overview
This guide explains how to replace placeholder images with your actual guest house photos.

## Current Placeholder Images

### Homepage (`/app/frontend/src/pages/Home.jsx`)
- **Hero Section**: Line 35 - Victorian mansion exterior
- **Welcome Section**: Line 63 - Luxury living space  
- **Room Previews**:
  - Master Bedroom: Line 105 - Luxury bedroom
  - Living Parlor: Line 114 - Living room with windows
  - Modern Kitchen: Line 123 - Black modern kitchen

### About Page (`/app/frontend/src/pages/About.jsx`)
- **Main Image**: Line 22 - Guest house exterior with palm trees
- **Location Section**: Line 82 - Comfortable bedroom interior

### Rooms Page (`/app/frontend/src/pages/Rooms.jsx`)
- **Master Bedroom**: Line 10 - Modern luxury bedroom
- **Living Parlor**: Line 19 - Elegant living room
- **Modern Kitchen**: Line 28 - Premium black kitchen
- **Luxury Bathroom**: Line 37 - Modern dual-sink bathroom
- **Gallery Section**: Lines 90-102 - Additional interior shots

## How to Replace Images

### Option 1: Using Your Own Hosted Images
1. Upload your photos to a hosting service (Cloudinary, AWS S3, etc.)
2. Open the relevant page file (e.g., `/app/frontend/src/pages/Home.jsx`)
3. Find the `<img src="https://images.unsplash.com/..."` tag
4. Replace the URL with your hosted image URL
5. Update the `alt` text to describe your actual image

### Option 2: Using Local Images
1. Create folder: `/app/frontend/public/images/`
2. Place your images in this folder
3. In the component, replace:
   ```jsx
   <img src="https://images.unsplash.com/..." alt="..." />
   ```
   with:
   ```jsx
   <img src="/images/your-photo-name.jpg" alt="..." />
   ```

## Recommended Image Specifications

### Hero Section Images
- **Dimensions**: 1920x1080px or higher
- **Format**: JPG or WebP
- **Size**: Under 500KB (optimized)
- **Style**: High-quality, professional photography

### Room Images
- **Dimensions**: 1200x800px minimum
- **Format**: JPG or WebP  
- **Size**: Under 300KB each
- **Lighting**: Well-lit, showing true colors

### Gallery Images
- **Dimensions**: 800x600px minimum
- **Format**: JPG or WebP
- **Size**: Under 200KB each
- **Variety**: Mix of wide shots and detail shots

## Image Optimization Tips
1. Compress images before uploading (use TinyPNG or similar)
2. Use WebP format for better performance
3. Maintain aspect ratios to prevent distortion
4. Ensure images are properly lit and high resolution

## Need Help?
Contact your developer to assist with bulk image updates or optimization.

---
**Note**: All current placeholder images are from Unsplash and are used for demonstration purposes. Replace them with your actual guest house photos for the best results.
