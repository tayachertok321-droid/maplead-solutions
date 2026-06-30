# MapLead Solutions — Marketing Website

One-page marketing site for MapLead Solutions, built with Next.js 14 + Tailwind CSS.

## Local Development

**Prerequisites:** Node.js 18+

```bash
# 1. Navigate into the project
cd mapleadsolutions

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install the Vercel CLI if you haven't already
npm install -g vercel

# From inside the project folder:
vercel

# Follow the prompts:
#   Set up and deploy? → Y
#   Which scope? → your account
#   Link to existing project? → N
#   Project name? → mapleadsolutions (or any name)
#   Directory? → ./  (press Enter)
#   Override settings? → N

# For production deployment:
vercel --prod
```

Your site will be live at a `*.vercel.app` URL within ~60 seconds.

### Option B — GitHub + Vercel Dashboard (recommended for ongoing updates)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/mapleadsolutions.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**

3. Import your GitHub repository

4. Vercel auto-detects Next.js — no build settings needed. Click **Deploy**.

5. Every `git push` to `main` automatically redeploys the site.

---

## Customization

| What to change | Where |
|---|---|
| Phone number | `app/page.tsx` — update `phone` and `phoneTel` vars at top |
| Colors | `tailwind.config.ts` and inline `[#hex]` values in `page.tsx` |
| Section content | Edit directly in `app/page.tsx` |
| SEO title/description | `app/layout.tsx` → `metadata` object |
| Favicon | Add `app/favicon.ico` |

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Inter font](https://fonts.google.com/specimen/Inter) via `next/font/google`
- Zero external dependencies beyond Next.js
