# CLAUDE.md — Ashton Lock & Key

## Project Overview

Live production Next.js website for a local locksmith in Ashton-in-Makerfield, UK.

- **URL:** https://ashtonlockandkey.co.uk
- **Stack:** Next.js 14.2.5 · React 18.3.1 · TypeScript 5.5 · Tailwind CSS · App Router
- **Deployed on:** Vercel (or check deployment settings)
- **Repository:** https://github.com/abdulqyium146-arch/ashton

> This site is LIVE and indexed on Google. Never break production. Always check whether a component is shared before editing it.

---

## Ground Rules

1. **Never edit `.env` or `.env.local` directly** — ask first
2. **Never run `npm run build` unless explicitly asked** — use `npm run dev` for local checks
3. **Never delete files** — comment out or archive instead
4. **Always check if a component is shared** before editing it (Header, Footer, CTASection, FloatingButtons, TrustBadges affect every page)
5. **Edit one file at a time** when making structural changes
6. **Always use TypeScript** — all files are `.tsx`/`.ts`; never drop to plain JS
7. **Mobile-first** — most locksmith customers call from a phone mid-emergency

---

## Project Structure

```
/app                        → Next.js App Router pages (one folder per route)
/app/blog/[slug]            → Blog posts (static TSX)
/app/sitemap.ts             → Dynamic sitemap (typed MetadataRoute.Sitemap)
/app/robots.ts              → Dynamic robots.txt
/components                 → Shared UI components
/lib
  constants.ts              → BUSINESS object — single source of truth for name, phone, URL, address
  nav.ts                    → NAV_LOCKSMITH, NAV_AUTO, NAV_AREAS, FOOTER_* — single source for all nav links
  schema.ts                 → JSON-LD schema helpers (localBusinessSchema, serviceSchema, etc.)
  auto-locksmith-data.ts    → AUTO_SERVICES, VEHICLE_BRANDS, COVERAGE_AREAS, BUSINESS_ADDRESS
/public                     → Static assets (images, favicons, webmanifest)
/styles / globals.css       → Global CSS + Tailwind base
next.config.mjs             → Next.js config (security headers, HSTS, www redirect, image optimisation)
tailwind.config.ts          → Tailwind config
```

---

## Business Info — Use Exactly As Written

```
Business Name:  Ashton Lock & Key
Phone:          07309 903243
E.164:          +447309903243
WhatsApp:       447309903243
Email:          info@ashtonlockandkey.co.uk
Address:        2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan, WN4 9AL
Canonical URL:  https://ashtonlockandkey.co.uk   (no www — enforced by 301 redirect)
Service Area:   Ashton-in-Makerfield, Wigan, Leigh, St Helens, Newton-le-Willows, Golborne, Haydock
Hours:          24/7 emergency; shop Mon–Fri 08:00–20:00, Sat 08:00–18:00, Sun 09:00–17:00
```

**All of the above lives in `lib/constants.ts` (`BUSINESS` export). Never hardcode phone, URL, or address in page files — always import from there.**

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `brand-navy` | `#0D1B2A` | Primary background, headings |
| `brand-blue` | `#1B3A5C` | Secondary backgrounds, gradients |
| `brand-orange` | `#F97316` | CTAs, highlights, trust signals |
| `brand-orange-dark` | `#EA6C0A` | CTA hover state |
| `brand-light` | `#F0F4F8` | Section backgrounds, card fills |
| Font | Inter (via `next/font/google`) | Self-hosted, zero render-blocking |

CTA buttons: large, high-contrast white-on-orange or white-on-navy. Phone number must be visible and tappable on every page — use `tel:${BUSINESS.phone}`.

---

## Key Pages & URLs

| Tier | Page | Route |
|---|---|---|
| 0 | Homepage | `/` |
| 1 | Auto Locksmith Hub | `/auto-locksmith-ashton-in-makerfield` |
| 1 | Locksmith Hub | `/locksmith-ashton-in-makerfield` |
| 2 | Emergency Locksmith | `/emergency-locksmith-ashton-in-makerfield` |
| 2 | Emergency Auto Locksmith | `/emergency-auto-locksmith-ashton-in-makerfield` |
| 2 | Car Key Replacement | `/car-key-replacement-ashton-in-makerfield` |
| 2 | Car Lockout | `/car-lockout-ashton-in-makerfield` |
| 2 | Lost Car Keys (AKL) | `/lost-car-key-ashton-in-makerfield` |
| 2 | Transponder Programming | `/transponder-key-programming-ashton-in-makerfield` |
| 2 | Smart Key Replacement | `/smart-key-replacement-ashton-in-makerfield` |
| 2 | Key Fob Programming | `/key-fob-programming-ashton-in-makerfield` |
| 2 | Remote Key Repair | `/remote-key-repair-ashton-in-makerfield` |
| 2 | Ignition Repair | `/ignition-repair-ashton-in-makerfield` |
| 2 | Broken Key Extraction | `/broken-key-extraction-ashton-in-makerfield` |
| 2 | Boot/Trunk Unlock | `/trunk-unlock-ashton-in-makerfield` |
| 2 | Car Rekeying | `/car-rekeying-ashton-in-makerfield` |
| 3 | Locksmith Wigan | `/locksmith-wigan` |
| 3 | Auto Locksmith Wigan | `/auto-locksmith-wigan` |
| 3 | Auto Locksmith Leigh | `/auto-locksmith-leigh` |
| 3 | Auto Locksmith St Helens | `/auto-locksmith-st-helens` |
| 3 | Auto Locksmith Newton-le-Willows | `/auto-locksmith-newton-le-willows` |
| — | Blog Index | `/blog` |
| — | Contact | `/contact` |

---

## SEO Rules — Do Not Break These

- Every page **must** export a `metadata` object with a unique `title` (≤60 chars) and `description` (≤160 chars, ending with `Call 07309 903243`)
- Use Next.js `metadata` export — never raw `<head>` tags
- Every page **must** have exactly **one `<h1>`**
- Every page **must** set `alternates: { canonical: \`${BUSINESS.url}/slug\` }`
- All images need descriptive `alt` text
- Internal links must use `<Link href="">` not `<a>`
- Schema markup (`serviceSchema`, `faqSchema`, `breadcrumbSchema`) must not be removed from service pages
- `app/sitemap.ts` is the sitemap — update it whenever a new page is added
- The `app/robots.ts` dynamic route must not be removed

### Geo meta tags (required on all service/location pages)
```tsx
other: {
  'geo.region': 'GB-WGN',
  'geo.placename': 'Ashton-in-Makerfield',
  'geo.position': '53.4878;-2.6405',
  'ICBM': '53.4878, -2.6405',
}
```

---

## Shared Components — Handle With Care

| Component | Used on | Risk if broken |
|---|---|---|
| `Header.tsx` | Every page | Entire site navigation goes down |
| `Footer.tsx` | Every page | Sitewide footer links, NAP, trust signals |
| `CTASection.tsx` | ~40 pages | Main lead conversion element |
| `FloatingButtons.tsx` | Every page | Mobile call/WhatsApp buttons |
| `TrustBadges.tsx` | Most pages | Social proof |
| `ReviewsSection.tsx` | Most pages | Google review schema |

Nav data lives in `lib/nav.ts` — edit that file to change any navigation link. Never hardcode nav links inside Header or Footer.

---

## Adding a New Service Page — Checklist

1. Create `/app/[slug]/page.tsx`
2. Export `metadata` with unique `title`, `description`, `canonical`, geo tags
3. Add `serviceSchema`, `faqSchema`, `breadcrumbSchema`, `webPageSchema` JSON-LD
4. Breadcrumb: Home → parent pillar → this page
5. Include the full 12-service grid (`AUTO_SERVICES` from `lib/auto-locksmith-data.ts`)
6. Add the URL to `app/sitemap.ts` with appropriate priority
7. Add an internal link from the hub page and/or `lib/nav.ts`

## Adding a New Blog Post — Checklist

1. Create `/app/blog/[slug]/page.tsx`
2. Export `metadata` with `publishedTime`, `modifiedTime`, `authors`
3. Add `Article` + `BreadcrumbList` JSON-LD
4. Link from `/app/blog/page.tsx` index
5. Add to `app/sitemap.ts`
6. Add to `FOOTER_GUIDES` in `lib/nav.ts` if it's a top blog post

---

## Commands

```bash
npm run dev     # Local dev server — use this for all testing
npm run lint    # Run before committing
npm run build   # Only when explicitly asked — takes ~60 seconds
git push        # Triggers Vercel auto-deploy on origin/main
```

---

## Config Files — Edit With Caution

| File | What it controls | Safe to edit? |
|---|---|---|
| `next.config.mjs` | Security headers, HSTS, www redirect, image formats | Ask first |
| `tailwind.config.ts` | Brand colours, font stack | Yes, carefully |
| `app/layout.tsx` | Global metadata, font loading, schema on every page | Ask first |
| `lib/constants.ts` | All business info — cascades sitewide | Yes — this is the right place |
| `lib/nav.ts` | All navigation links — cascades to Header + Footer | Yes |

---

## Notes

- Rankings and page speed are the primary business metrics — every change is measured against Core Web Vitals (LCP, CLS, FCP)
- The business owner is non-technical. Explain changes in plain English, not technical jargon
- When a change could affect SEO, say so explicitly before proceeding
- The canonical domain is **non-www** (`ashtonlockandkey.co.uk`). www requests 301 to non-www. Never change this without changing DNS + hosting + `constants.ts` + `sitemap.ts` together
- All 50 pages are statically generated (`○ Static`) — no server-side runtime required
