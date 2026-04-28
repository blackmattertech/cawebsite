# Image Assets Directory

This directory is for storing image assets used throughout the CA firm website.

## Assets to Replace

### 1. Company Logo
- **Location to update**: `src/app/components/Navbar.tsx` and `src/app/components/Footer.tsx`
- **Current**: Placeholder "CA" logo (blue-green gradient)
- **Replace with**: Your final company logo
- **Recommended format**: SVG or PNG with transparent background
- **Recommended size**: 150x150px minimum

### 2. Hero Background Image
- **Location to update**: `src/app/components/Hero.tsx`
- **Current**: Unsplash professional image (CA with laptop)
- **Replace with**: Your final hero image
- **Recommended format**: JPG or WebP
- **Recommended size**: 1920x1080px minimum
- **Note**: Image should have space on the left side for text overlay

### 3. About Section Image
- **Location to update**: `src/app/components/About.tsx`
- **Current**: Unsplash professional team image
- **Replace with**: Your team photo or office image
- **Recommended format**: JPG
- **Recommended size**: 800x500px

### 4. About — “Trusted partner” wide image
- **File**: `public/images/about-trusted-partner.png`
- **Used by**: `src/app/components/AboutTrustedPartnerBlock.tsx`
- **Fallback**: If the file is missing, an Unsplash office image loads automatically.
- **Recommended**: Landscape, 1600×900px or larger, PNG or WebP.

### 5. Services — “How can we help you?” hover cards
- **Files**: `public/images/helpcard1.png` … `helpcard4.png` (one per card, order left to right).
- **Used by**: `src/app/components/Services.tsx` — each image fills the card on **hover** (desktop / fine pointer).
- **Recommended**: Square or portrait PNG/JPG, sharp at card size (~300–400px wide).

## How to Replace Images

### For local images stored in this directory:

1. Add your image file to `/public/images/`
2. Update the component's `src` attribute to point to the image:
   ```tsx
   src="/images/your-image-name.jpg"
   ```

### For the ImageWithFallback component:

```tsx
<ImageWithFallback
  src="/images/your-image.jpg"
  alt="Description of image"
  className="w-full h-full object-cover"
/>
```

## Image Optimization Tips

- Use WebP format for better compression
- Optimize images before upload (use tools like TinyPNG, Squoosh)
- Provide multiple sizes for responsive images
- Use lazy loading for images below the fold
