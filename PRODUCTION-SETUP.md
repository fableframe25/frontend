# Production Setup Guide for Fable Frame

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env.production` or configure your hosting platform with these variables:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://fableframe.com
NODE_ENV=production

# SEO Verification Codes (Replace with actual codes)
GOOGLE_SITE_VERIFICATION=your-google-verification-code
BING_SITE_VERIFICATION=your-bing-verification-code
YANDEX_SITE_VERIFICATION=your-yandex-verification-code

# Analytics (Optional but recommended)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 2. Image Assets Required
Ensure these image files are added to the `/public` folder:

- `favicon.ico` (32x32)
- `favicon.svg` (scalable)
- `apple-touch-icon.png` (180x180)
- `og-image.jpg` (1200x630) - For Open Graph sharing
- `twitter-image.jpg` (1200x630) - For Twitter cards
- `icon-192x192.png` (192x192) - PWA icon
- `icon-512x512.png` (512x512) - PWA icon
- `mstile-150x150.png` (150x150) - Windows tile
- `logo.png` - Company logo for structured data

### 3. Domain Configuration
Update these files with your actual domain:

1. **Layout metadata** (`src/app/layout.tsx`):
   - Update `metadataBase` URL
   - Update Open Graph URLs
   - Update verification codes

2. **Sitemap** (`src/app/sitemap.xml/route.ts`):
   - Update `baseUrl` variable

3. **Robots.txt** (`src/app/robots.txt/route.ts`):
   - Update sitemap URL

### 4. Contact Information
Update contact details in:
- Privacy Policy (`src/app/privacy-policy/page.tsx`)
- Footer component
- Structured data in layout

### 5. Social Media Links
Update social media URLs in:
- Layout structured data
- Footer component
- Any other components with social links

## 🔧 Build & Deploy Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Or deploy to Vercel
npx vercel --prod
```

## 📊 SEO Features Implemented

### ✅ Completed Features
- [x] Comprehensive metadata with title templates
- [x] Open Graph tags for social sharing
- [x] Twitter Card optimization
- [x] Structured data (JSON-LD) for search engines
- [x] Sitemap.xml generation
- [x] Robots.txt configuration
- [x] PWA manifest for mobile app-like experience
- [x] Security headers in Next.js config
- [x] Image optimization settings
- [x] Performance optimizations
- [x] Mobile-first responsive design
- [x] Accessibility considerations

### 🔍 SEO Best Practices Applied
- Semantic HTML structure
- Proper heading hierarchy (H1-H6)
- Alt text for images
- Fast loading times with Next.js optimizations
- Mobile-responsive design
- HTTPS enforcement (configure on hosting)
- Clean URLs without trailing slashes
- Proper canonical URLs

## 📈 Post-Deployment Steps

### 1. Search Console Setup
- Add property to Google Search Console
- Submit sitemap: `https://fableframe.com/sitemap.xml`
- Monitor indexing status

### 2. Analytics Setup
- Configure Google Analytics 4
- Set up Google Tag Manager (if needed)
- Track key conversion events

### 3. Performance Monitoring
- Run Lighthouse audits
- Monitor Core Web Vitals
- Set up error tracking (Sentry, etc.)

### 4. Social Media Validation
- Test Open Graph with Facebook Debugger
- Validate Twitter Cards with Twitter Card Validator
- Check LinkedIn post previews

## 🛡️ Security Headers (Already Configured)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for privacy

## 📱 PWA Features
- Web App Manifest for "Add to Home Screen"
- Proper icons for different devices
- Theme colors for mobile browsers
- Offline-ready structure (can be enhanced)

## 🎯 Performance Optimizations
- Image optimization with WebP/AVIF formats
- Font optimization with preconnect
- CSS optimization in production
- JavaScript minification and tree-shaking
- Gzip compression enabled
- ETags for caching

Your Fable Frame website is now production-ready with enterprise-level SEO and performance optimizations!
