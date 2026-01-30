# Image Optimization

Guide for adding and optimizing images on the website.

## Adding New Images

### 1. Add images to the public folder

Place your images in the appropriate folder:
- `public/images/` - for general images
- `public/images/referencie/` - for reference/project photos

### 2. Run the optimization script

```bash
node scripts/optimize-images.mjs
```

This script will:
- Compress JPG images (quality 80, mozjpeg)
- Compress PNG images (compression level 9)
- Resize images wider than 1920px
- Generate WebP versions for all images

### 3. Use the Image component

Import and use the custom Image component in your code:

```tsx
import Image from '@/components/ui/Image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  className="your-classes"
/>
```

The Image component automatically:
- Adds the correct base path for GitHub Pages
- Uses `<picture>` element with WebP source and JPG/PNG fallback
- Browsers that support WebP will load the smaller file

## Notes

- Original unoptimized images are backed up in `public/images-original/`
- The optimization script can be run multiple times safely
- WebP files are generated alongside the original format
