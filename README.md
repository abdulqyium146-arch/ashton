# Ashton Lock & Key — Production Website

Next.js 14 (App Router) website for Ashton Lock & Key, a locksmith business in Ashton-in-Makerfield, Wigan.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── layout.tsx                          # Root layout (NAP, schema, header, footer)
├── page.tsx                            # Home page (money page)
├── sitemap.ts                          # Auto-generated XML sitemap
├── robots.ts                           # Robots.txt
├── not-found.tsx                       # 404 page
│
├── emergency-locksmith-ashton-in-makerfield/page.tsx   # Service page 1
├── key-cutting-ashton/page.tsx         # Service page 2
├── car-key-replacement-wigan/page.tsx  # Service page 3
│
├── locksmith-ashton-in-makerfield/page.tsx  # Location page 1
├── locksmith-wigan/page.tsx            # Location page 2
├── locksmith-near-me/page.tsx          # Location page 3
│
└── blog/
    ├── page.tsx                        # Blog index
    ├── what-to-do-if-locked-out/       # Blog post 1
    ├── how-much-does-a-locksmith-cost-uk/  # Blog post 2
    ├── car-key-replacement-guide/      # Blog post 3
    ├── how-to-improve-home-security/   # Blog post 4
    └── emergency-locksmith-response-time/  # Blog post 5

components/
├── Header.tsx          # Sticky nav with dropdowns
├── Footer.tsx          # Full footer with NAP
├── FloatingButtons.tsx # Sticky call bar (mobile) + WhatsApp bubble (desktop)
├── CTASection.tsx      # Reusable CTA block
├── FAQSection.tsx      # Accordion FAQ with Schema
├── ReviewsSection.tsx  # Google Reviews display
├── TrustBadges.tsx     # 6 trust signals
└── Breadcrumb.tsx      # Schema-marked breadcrumbs

lib/
├── constants.ts        # Business data (NAP, service areas, etc.)
└── schema.ts           # JSON-LD schema generators
```

## SEO Features

- **Schema Markup**: LocalBusiness, Locksmith, Service, FAQPage, Article, BreadcrumbList, Review
- **Metadata**: Optimised title tags, meta descriptions, OG tags, canonical URLs
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Proper crawl directives at `/robots.txt`
- **Core Web Vitals**: Server Components, Image optimisation, no layout shift
- **Internal Linking**: Full silo structure with keyword-rich anchors

## Conversion Features

- Click-to-call CTAs on every page
- Sticky bottom bar (mobile) with call + WhatsApp
- Floating WhatsApp button (desktop)
- Urgency messaging ("30-min response", "24/7")
- Trust badges and star ratings

## Before Going Live

1. Replace `https://www.ashtonlockandkey.co.uk` with your real domain in `lib/constants.ts`
2. Add real images to `public/images/`
   - `og-image.jpg` (1200×630) for social sharing
   - `logo.png` for schema
   - `ashton-lock-and-key.jpg` for LocalBusiness schema
3. Update Google Maps embed URL in `locksmith-ashton-in-makerfield/page.tsx`
4. Add real Google My Business CID to `lib/schema.ts`
5. Add Google Search Console verification in `app/layout.tsx`
6. Set up Google Analytics (add to layout)
7. Configure your domain in Vercel/hosting
