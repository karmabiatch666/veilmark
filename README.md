# VEILMARK — First Mark / 001

A custom-coded, responsive static storefront starter for VEILMARK. Built with plain HTML, CSS and JavaScript. No framework, build step or paid theme required.

## Files
- `index.html` — page structure and copy
- `styles.css` — all visual styling and responsive layout
- `script.js` — mobile navigation and product cards
- `products.js` — edit product names and add real product URLs
- `assets/veilmark-banner.jpg` — optional hero banner image (add your own)

## Preview locally
Open `index.html` in a browser. For best results, use a simple local web server, but this page does not require a build process.

## Add your banner
Save your chosen wide banner image as `assets/veilmark-banner.jpg`. The CSS already references that filename. If you don't add it, the hero still has a dark fallback background.

## Add Printful product links
Open `products.js` in a text editor. Replace the empty `url` values with real public product/store URLs when you have them. Don't put private dashboard links or API keys in this file.

This starter is a visual storefront, not a complete checkout system. Product buttons only become live links after you add real URLs. Do not take orders or payments through this static page alone.

## Free hosting with Cloudflare Pages
1. Create a GitHub account/repository if you don't already have one.
2. Upload these files to the repository's root (keep the `assets` folder).
3. In Cloudflare, open Workers & Pages and create a Pages project connected to that repository.
4. Use the static-site defaults: no build command; output directory `/` (repository root).
5. Deploy and test the provided `pages.dev` URL on desktop and mobile.
6. A custom domain is optional and costs extra; the generated `pages.dev` address is free.

Cloudflare's dashboard labels can change, so follow the current Pages setup instructions if wording differs.

## Before launch
- Add the final approved VEILMARK banner and collection artwork.
- Add real product photos and product links.
- Confirm prices, shipping, returns, privacy and contact information.
- Choose a real checkout path (for example, a supported Printful store integration or an ecommerce platform). This static site does not process payments.
- Order and inspect a sample before selling the design.
