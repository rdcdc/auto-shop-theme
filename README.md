# Portfolio Shopify Theme

A modern, performance-optimized Shopify theme originally developed for [Auto Studio](https://autostudio.nyc). This repository contains the cleaned portfolio version with sensitive data removed and client-specific elements replaced with placeholders.

> This is a portfolio example, not the live production code. API keys and conditional logic required for the original site have been removed.

## Tech Stack

- **Platform**: Shopify (Liquid templating engine)
- **Frontend**: HTML5, CSS3 (with CSS Grid & Flexbox), Vanilla JavaScript
- **Carousel**: Splide.js for responsive image galleries

## Key Features

### Advanced Image Management
- **Smart Image Prefetching**: Uses Intersection Observer API (`assets/global.js:670`) to preload images as they approach the viewport
- **Responsive Media Galleries**: Custom `media-gallery` web component (`assets/media-gallery.js`) with thumbnail navigation

### Performance Optimizations
- **Strategic Image Prefetching**: Multi-level prefetching system for optimal performance
- **Collection-Level Prefetching**: Hover over collection links triggers preloading of all product images in that collection
- **Variant Swatch Prefetching**: Product variant images are prefetched on swatch hover
- **Intersection Observer**: Smart loading for bulk modals and deferred content (`assets/global.js:670`)
- Responsive image optimization with appropriate sizing
- Minimal JavaScript footprint with vanilla implementations

## How Image Prefetching Works

The theme includes a multi-tier image prefetching system:

### **Collection Prefetching** (`layout/theme.liquid`)
1. **Hover Detection**: Listens for `mouseenter` and `touchend` events on collection links
2. **Bulk Preloading**: When hovering over a collection link, prefetches ALL product images from that collection
3. **Smart Delay**: 5ms delay before prefetching starts to avoid unnecessary requests
4. **Mobile Optimized**: Uses `touchend` events for mobile interaction detection

### **Product Variant Prefetching** (`sections/main-product.liquid`)  
1. **Swatch Interaction**: Detects hover/touch on variant swatches
2. **Targeted Loading**: Prefetches only the images associated with the specific variant
3. **Immediate Response**: 50ms delay optimized for quick variant switching
4. **Cross-Platform**: Works on both desktop hover and mobile touch events

### **Technical Implementation**
- **Event Binding**: Uses native `addEventListener` for optimal performance
- **Image Objects**: Creates new `Image()` objects to trigger browser caching
- **Timeout Management**: Strategic delays prevent excessive API calls
- **Memory Efficient**: Only prefetches when user shows interaction intent

## Project Structure

```
├── assets/          # CSS, JS, images, and icons
├── config/          # Theme configuration files
├── layout/          # Base template files
├── locales/         # Translation files
├── sections/        # Reusable page sections
├── snippets/        # Reusable template components
└── templates/       # Page templates
```

## Usage

This is a **portfolio example** showcasing Shopify theme development capabilities. The code has been sanitized for public viewing and is not production-ready without proper configuration and API integration.

---

*Originally developed for Auto Studio. Portfolio version cleaned and prepared for demonstration purposes.*