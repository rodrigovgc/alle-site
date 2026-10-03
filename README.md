# Alle — marketing site

A standalone static site (Vite, no framework) that explains Alle and links to the app.

## Run it
```bash
npm install
npm run dev
```

## The app link
The "Log in" and "Open app" buttons point to `https://alle-app.vercel.app`. If your app's
address changes, edit the two `__APP__` links in `index.html` (search for the URL) and the
footer, then rebuild.

## Deploy (separate from the app)
This is its own Vercel project, so it can have its own domain (e.g. `alle.app`):
1. Put this folder in its own GitHub repo (e.g. `alle-site`).
2. Import it in Vercel as a new project. Vite is detected automatically.
3. Add your domain in Vercel → Settings → Domains when you have one.

## SEO / AEO built in
- Title, meta description, canonical, Open Graph + Twitter card, theme-color.
- `og.png` (1200×630) social preview.
- JSON-LD structured data: SoftwareApplication + FAQPage (helps AI answer engines).
- `robots.txt` and `sitemap.xml`.
- Semantic headings, fast static HTML, and reduced-motion support.

When you have the real domain, update the `https://alle.app/` URLs in `index.html`,
`sitemap.xml` and `robots.txt`.
