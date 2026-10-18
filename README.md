# Lydia Murphy — Portfolio

Personal portfolio site for Lydia Murphy, UX/UI Designer & Front-End Developer.

A plain static site — no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Structure

- `index.html` — page content and sections
- `styles.css` — palette (CSS variables at the top), typography, layout
- `script.js` — project data (edit the `projects` array to add, remove or reorder work), project pop-up, mobile menu
- `images/` — portraits and project screenshots (WebP), the floral pattern, and `og-image.jpg` (link-preview card)
- `og-src/og.html` — source for the link-preview card; open it at 1200×630 and screenshot to regenerate

## Visitor stats

Uses [GoatCounter](https://www.goatcounter.com) (free, no cookies). Set `GOATCOUNTER_CODE` at the top of `script.js` to switch it on. Tracks page views, project pop-up opens, and contact-link clicks.

## Hosting

Deployed on Netlify from the `main` branch. `netlify.toml` publishes the repo root and fills in the site address for the link-preview tags, so every push to `main` redeploys the site automatically.
