# Quick Image Replacement Guide

## 📸 Images to Replace

### HOME PAGE (`/app/frontend/src/pages/Home.jsx`)

**Line 31** - Hero Section Background:
```jsx
src="https://images.unsplash.com/photo-1757023374849-b1fbb670098a"
```
Replace with: Your guest house exterior or best interior shot

**Line 63** - Welcome Section:
```jsx
src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3"
```
Replace with: Your living room or welcoming interior

**Line 105** - Master Bedroom Preview:
```jsx
src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
```
Replace with: Your actual bedroom photo

**Line 114** - Living Parlor Preview:
```jsx
src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
```
Replace with: Your parlor/living area

**Line 123** - Kitchen Preview:
```jsx
src="https://images.unsplash.com/photo-1696986681606-b156ccd761c5"
```
Replace with: Your kitchen photo

---

### ABOUT PAGE (`/app/frontend/src/pages/About.jsx`)

**Line 22** - Guest House Exterior:
```jsx
src="https://images.unsplash.com/photo-1757023375017-2a39c78e571c"
```
Replace with: Your building exterior

**Line 82** - Location Bedroom:
```jsx
src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0"
```
Replace with: Another bedroom angle or interior shot

---

### ROOMS PAGE (`/app/frontend/src/pages/Rooms.jsx`)

**Lines 10-37** - Room Details Array:
```jsx
{
  title: 'Master Bedroom',
  image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
},
{
  title: 'Living Parlor',
  image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
},
{
  title: 'Modern Kitchen',
  image: 'https://images.unsplash.com/photo-1696986681606-b156ccd761c5',
},
{
  title: 'Luxury Bathroom',
  image: 'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033',
}
```

**Lines 90-102** - Gallery Section:
```jsx
src="https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg"
src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3"
src="https://images.unsplash.com/photo-1638799869566-b17fa794c4de"
```

---

## 🔄 How to Replace

### Step 1: Upload Your Images
Upload to [Cloudinary](https://cloudinary.com), [ImgBB](https://imgbb.com), or [Imgur](https://imgur.com)

### Step 2: Get Direct URLs
Copy the direct image URL (should end in .jpg, .png, etc.)

### Step 3: Replace in Code
Open the file in VS Code editor and replace the Unsplash URL with your URL:

**BEFORE:**
```jsx
src="https://images.unsplash.com/photo-XXXXXXX"
```

**AFTER:**
```jsx
src="https://your-image-host.com/your-image.jpg"
```

### Step 4: Save and Push to GitHub
1. Save all changes
2. Click "Save to GitHub"
3. Netlify will auto-deploy with your new images

---

## 📏 Recommended Image Sizes

- **Hero Images**: 1920x1080px (landscape)
- **Room Images**: 1200x800px (landscape)
- **Gallery Images**: 800x600px (landscape)
- **Format**: JPG or WebP
- **Max Size**: 300-500KB per image (compress before uploading)

---

## ✅ Quick Checklist

- [ ] Hero background (Home page)
- [ ] Welcome section image (Home page)
- [ ] 3 room preview cards (Home page)
- [ ] Exterior image (About page)
- [ ] Location bedroom (About page)
- [ ] 4 detailed room images (Rooms page)
- [ ] 3 gallery images (Rooms page)

**Total: 13 images to replace**
