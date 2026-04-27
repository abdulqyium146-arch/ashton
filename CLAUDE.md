# CLAUDE.md — Ashton Lock & Key / Next.js Project

## 🔒 Project Overview
This is a **live production Next.js website** for a local locksmith business in Ashton-in-Makerfield, UK.
Site: https://ashtonlockandkey.co.uk
Stack: Next.js 14.2.5 (App Router), Tailwind CSS, TypeScript 5.5, deployed on Vercel

> ⚠️ This site is LIVE. Never break production. Always think before editing shared components, layouts, or config files.

---

## 🧠 Claude Code Ground Rules

1. **Never edit `.env` or `.env.local` directly** — ask me first
2. **Never run `npm run build` or `next build` unless I ask**
3. **Never delete files** — comment out or archive instead
4. **Always check if a component is shared** before editing it
5. **Prefer editing one file at a time** and explain what changed
6. **Use TypeScript types** if the file is already `.tsx`
7. **Mobile-first** — all UI must work on phones (most locksmith customers call from mobile)

---

## 📁 Project Structure

```
/app                  → Next.js App Router pages (one folder per URL slug)
/app/blog             → Blog posts (static TSX — no MDX)
/app/sitemap.ts       → Dynamic sitemap (MetadataRoute.Sitemap) — NOT public/sitemap.xml
/app/robots.ts        → Dynamic robots.txt
/components           → Shared UI components
/public               → Static assets (images, favicons, webmanifest)
/lib
  constants.ts        → BUSINESS object — single source of truth for name, phone, URL, address
  nav.ts              → All nav/footer links — imported by Header.tsx and Footer.tsx
  schema.ts           → JSON-LD schema helpers
  auto-locksmith-data.ts → AUTO_SERVICES list, VEHICLE_BRANDS, COVERAGE_AREAS
CLAUDE.md             → This file
next.config.mjs       → Next.js config (security headers, HSTS, redirects — edit carefully)
tailwind.config.ts    → Tailwind config
```

---

## 🗺️ Key Pages & URLs

| Page | Route |
|------|-------|
| Homepage | `/` |
| Auto Locksmith Hub | `/auto-locksmith-ashton-in-makerfield` |
| Emergency Locksmith | `/emergency-locksmith-ashton-in-makerfield` |
| Emergency Auto Locksmith | `/emergency-auto-locksmith-ashton-in-makerfield` |
| Car Key Replacement | `/car-key-replacement-ashton-in-makerfield` |
| Car Lockout | `/car-lockout-ashton-in-makerfield` |
| Lost Car Keys | `/lost-car-key-ashton-in-makerfield` |
| Locksmith Wigan | `/locksmith-wigan` |
| Auto Locksmith Wigan | `/auto-locksmith-wigan` |
| Blog Index | `/blog` |
| Contact | `/contact` |

---

## 🎯 SEO Rules (Critical — Do Not Break)

- Every page **must** have a unique `<title>` (≤60 chars) and `<meta description>` (≤160 chars, ending `Call 07309 903243`)
- Use Next.js `metadata` export — **never** raw `<head>` tags
- Every page **must** have exactly ONE `<h1>` tag
- Images **must** have descriptive `alt` text
- Internal links must use `<Link href="">` not `<a>`
- Every page **must** set `alternates: { canonical: \`${BUSINESS.url}/slug\` }`
- Schema markup (`serviceSchema`, `faqSchema`, `breadcrumbSchema`) must not be removed
- Sitemap is at `app/sitemap.ts` — add new pages here whenever a route is created
- Geo meta tags required on all service/location pages:
  ```ts
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  }
  ```

---

## 🎨 Design System

- **Primary colour:** `#0D1B2A` — `brand-navy` — dark navy (backgrounds, headings)
- **Secondary colour:** `#1B3A5C` — `brand-blue` — mid navy (gradients, secondary BGs)
- **Accent colour:** `#F97316` — `brand-orange` — all CTAs, highlights, trust signals
- **CTA hover:** `#EA6C0A` — `brand-orange-dark`
- **Light BG:** `#F0F4F8` — `brand-light` — section backgrounds, card fills
- **Font:** Inter — loaded via `next/font/google` (self-hosted, zero render-blocking)
- **CTA button style:** Large, high-contrast, phone number always visible and tappable
- **Trust signals:** Star rating (4.9 / 127 reviews), response time badge, 24/7 availability, "No call-out fee" — keep these on every service page

---

## 📞 Business Info (Use Exactly As Written)

```
Business Name:  Ashton Lock & Key
Phone:          07309 903243
E.164:          +447309903243
WhatsApp:       447309903243
Email:          info@ashtonlockandkey.co.uk
Address:        2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan, WN4 9AL
Canonical URL:  https://ashtonlockandkey.co.uk  (no www)
Service Area:   Ashton-in-Makerfield, Wigan, Leigh, St Helens, Newton-le-Willows, Golborne, Haydock
Hours:          24/7 Emergency · Mon–Fri 08:00–20:00 · Sat 08:00–18:00 · Sun 09:00–17:00
```

> All of the above lives in `lib/constants.ts` (`BUSINESS` export). **Never hardcode phone, URL, or address in a page file** — always import from `lib/constants.ts`.

---

## ✅ Before Every Change — Checklist

- [ ] Is this page live and indexed on Google?
- [ ] Will this change affect the `<head>` or metadata?
- [ ] Will this change affect any shared layout or component?
- [ ] Does this page have a `canonical` URL set?
- [ ] Are all images optimised with `next/image`?
- [ ] Is the phone number pulled from `BUSINESS.phone` (not hardcoded)?

---

## 🚀 Common Tasks & How To Do Them

### Add a new service page
1. Create `/app/[slug]/page.tsx`
2. Add `metadata` with unique `title`, `description`, `canonical`, geo tags
3. Add `serviceSchema`, `faqSchema`, `breadcrumbSchema`, `webPageSchema` JSON-LD
4. Breadcrumb: Home → pillar page → this page
5. Include the 12-service grid (use `AUTO_SERVICES` from `lib/auto-locksmith-data.ts`)
6. Add the URL to `app/sitemap.ts` with appropriate priority tier
7. Add an internal link from the hub page and/or `lib/nav.ts`

### Add a new blog post
1. Create `/app/blog/[slug]/page.tsx`
2. Export `metadata` with `publishedTime`, `modifiedTime`, `authors`
3. Add `Article` + `BreadcrumbList` JSON-LD
4. Link from `/app/blog/page.tsx` index
5. Add to `app/sitemap.ts`
6. Add to `FOOTER_GUIDES` in `lib/nav.ts` if it's a top post

### Update contact info / phone number
- Edit `lib/constants.ts` — this cascades to all components automatically
- Then grep for any hardcoded instances: `grep -rn "07309" app/`
- Phone must be consistent in: metadata descriptions, FAQ answers, visible page copy

---

## 🔧 Commands

```bash
npm run dev     # Local development — use this for all testing
npm run lint    # Check for errors before committing
npm run build   # Only run when asked — ~60 seconds
git push        # Triggers Vercel auto-deploy on origin/main
```

---

## 📌 Notes for Claude

- This is a **local SEO website** — rankings and page speed are everything
- Prioritise **Core Web Vitals**: LCP, CLS, FCP
- The business owner is non-technical — keep explanations simple
- When suggesting changes, always say "This is safe to do" or "Test this locally first"
- If something could hurt SEO, say so clearly before proceeding
- The canonical domain is **non-www** — `https://ashtonlockandkey.co.uk`. www 301s to non-www. Never change this in one place without updating `constants.ts`, `next.config.mjs`, and DNS together
- All 50 pages are statically generated — no server runtime required
