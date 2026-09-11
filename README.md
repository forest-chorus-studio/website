# Forest Chorus Studio

A modern, responsive portfolio website for **Forest Chorus Studio**, an independent artist creating intricate embroidery and textile art. Built with [Astro](https://astro.build/), [React](https://react.dev/) (for the interactive gallery lightbox), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Homepage** — full-width hero, featured-works gallery, "Recognized & Loved" accolades, book highlight, Etsy CTA, and a "Coming Soon" section for future links.
- **Gallery** — filterable grid (Floral, Landscapes, Portraits, Books) with a keyboard-accessible lightbox modal (arrow-key navigation, Escape to close, native share).
- **About** — artist bio, philosophy quote, and a contact form.
- **Shop** — shop-ready layout linking to the Etsy store plus the book highlight.
- **Footer** — social links (Etsy/Instagram/Pinterest), copyright, and future-proof links.
- Responsive, mobile-first design with a sticky header and mobile menu.
- Optimized, lazy-loaded images via Astro's `<Image />` component (WebP output).
- SEO meta tags, Open Graph, canonical URLs, `robots.txt`, and a generated sitemap.
- Subtle fade-in-on-scroll animations (respects `prefers-reduced-motion`).

## Tech stack

| Concern        | Tool |
| -------------- | ---- |
| Framework      | Astro 4 |
| Interactive UI | React 18 (`@astrojs/react`) |
| Styling        | Tailwind CSS 3 |
| Images         | `astro:assets` (`<Image />` / `getImage`) |
| Sitemap        | `@astrojs/sitemap` |

## Getting started

Requires Node 18+ (developed on Node 22).

```bash
npm install
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── assets/
│   └── images/          # embroidery & book images (gallery source)
├── components/
│   ├── BookHighlight.astro
│   ├── Card.astro
│   ├── EtsyCTA.astro
│   ├── Footer.astro
│   ├── FutureLinks.astro
│   ├── Gallery.astro         # Astro wrapper resolving optimized images
│   ├── GalleryLightbox.jsx   # React filter grid + lightbox modal
│   ├── Header.astro
│   ├── Hero.astro
│   └── Testimonials.astro
├── layouts/
│   └── BaseLayout.astro      # <head>, SEO, fonts, header/footer, scroll reveal
├── pages/
│   ├── 404.astro
│   ├── about.astro
│   ├── gallery.astro
│   ├── index.astro
│   └── shop.astro
├── styles/
│   └── global.css
└── config.ts                 # central site config (links, nav, gallery, book…)
public/
├── favicon.svg
└── robots.txt
astro.config.mjs
tailwind.config.mjs
tsconfig.json
```

## How to add new images to the gallery

1. Drop the image into `src/assets/images/` (`.jpg`, `.png`, or `.webp`).
2. Import it near the top of `src/config.ts`:
   ```ts
   import newPiece from './assets/images/new-piece.jpg';
   ```
3. Add an entry to the `galleryItems` array in `src/config.ts`:
   ```ts
   {
     id: 'new-piece',            // must be unique
     image: newPiece,
     title: 'New Piece',
     year: 2025,
     category: 'Floral',         // one of galleryCategories (excluding "All")
     description: 'A short description shown in the lightbox.',
   }
   ```
4. (Optional) To make the new piece filterable under a new category, add the label to
   `galleryCategories` (keep `All` as the first entry) and use it as the `category`.

Images are automatically optimized to WebP at multiple widths; no manual resizing is required.

## How to update links (Etsy, social)

All external links and site-wide content live in `src/config.ts`:

- **`site`** — site name, tagline, description, URL, contact email, copyright year.
- **`links.etsy`** — Etsy shop URL (shown in header, footer, CTA, shop page).
- **`links.instagram` / `links.pinterest`** — leave the string empty (`''`) to hide that platform from the footer.
- **`nav`** — header/footer navigation items.
- **`book`** — book title, cover image, description, and buy link.
- **`testimonials`** — the "Recognized & Loved" cards (set `tone` to `'sage'`, `'coral'`, or `'teal'`).
- **`futureLinks`** — the placeholder "Coming Soon" cards.

## Color palette & typography

Defined in `tailwind.config.mjs` and `src/styles/global.css`.

- Colors: `cream` `#F5F1E9`, `sage` `#8A9B68`, `teal` `#5D8AA8`, `coral` `#E8A87C`, `gold` `#D4B896`, `offwhite` `#F9F7F3`, `charcoal` `#2E2E2E`.
- Fonts (loaded via Google Fonts in `BaseLayout.astro`): **Inter** (headings/UI), **Lora** (body), **Playfair Display** (serif accents).

## Contact form

The About page form uses a `mailto:` action that opens the visitor's email client. For a server-handled form, connect a provider such as **Netlify Forms** (add `data-netlify="true"` and a hidden form name) or **Formspree** (set the form `action` to your Formspree endpoint).

## Deployment

The site builds to a fully static `dist/` folder and deploys to any static host.

### Netlify

1. Connect the repository (the `dev` branch) at [netlify.com](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`

Or add `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Vercel

1. Import the repository at [vercel.com](https://vercel.com/).
2. Framework preset: **Astro** (Vercel auto-detects build command and output directory).

### GitHub Pages

If deploying to GitHub Pages, set `site` and `base` in `astro.config.mjs` to the deployed URL/path and use the `@astrojs/upgrade`-compatible Pages action with `npm run build` publishing `dist/`.

> The included `CNAME` points the custom domain to `forestchorusstudio.com`; keep it for Netlify/Vercel custom-domain deploys.

## Accessibility & performance notes

- All images use descriptive `alt` text.
- The lightbox is keyboard-navigable (arrows, Escape) and traps scroll while open.
- A "Skip to content" link is present for keyboard users.
- Animations are disabled under `prefers-reduced-motion`.
- Images lazy-load and are served as responsive WebP.
