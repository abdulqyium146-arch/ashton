import { MetadataRoute } from 'next'

// Canonical base — no www, no trailing slash
const BASE = 'https://ashtonlockandkey.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [

    // ─── Tier 0: Homepage ────────────────────────────────────────────────────
    {
      url: `${BASE}/`,
      lastModified: '2026-04-23',
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ─── Tier 1: Topical Pillars ──────────────────────────────────────────────
    // Auto Locksmith hub receives the most internal links — highest crawl priority
    {
      url: `${BASE}/auto-locksmith-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.98,
    },
    // Residential pillar
    {
      url: `${BASE}/locksmith-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // ─── Tier 2A: Hyper-local Auto Service Pages (Ashton-in-Makerfield silo) ──
    // Emergency intent — highest commercial urgency
    {
      url: `${BASE}/emergency-auto-locksmith-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.94,
    },
    {
      url: `${BASE}/car-lockout-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    // Key replacement / lost keys — high commercial intent
    {
      url: `${BASE}/car-key-replacement-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE}/lost-car-key-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.91,
    },
    // Key programming cluster
    {
      url: `${BASE}/transponder-key-programming-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.89,
    },
    {
      url: `${BASE}/smart-key-replacement-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE}/key-fob-programming-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: `${BASE}/remote-key-repair-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    // Mechanical / structural auto services
    {
      url: `${BASE}/ignition-repair-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE}/broken-key-extraction-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${BASE}/trunk-unlock-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/car-rekeying-ashton-in-makerfield`,
      lastModified: '2026-04-23',
      changeFrequency: 'monthly',
      priority: 0.84,
    },

    // ─── Tier 2B: Core Residential Service Pages ──────────────────────────────
    {
      url: `${BASE}/emergency-locksmith-ashton-in-makerfield`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${BASE}/key-cutting-ashton`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: `${BASE}/car-key-replacement-wigan`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ─── Tier 3: Geo Pages ────────────────────────────────────────────────────
    {
      url: `${BASE}/locksmith-wigan`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.83,
    },
    {
      url: `${BASE}/locksmith-near-me`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${BASE}/auto-locksmith-wigan`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${BASE}/auto-locksmith-leigh`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/auto-locksmith-st-helens`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/auto-locksmith-newton-le-willows`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // ─── Tier 4: Keyword-variant supporting pages ─────────────────────────────
    // These target alternative keyword forms; canonical intent is handled by
    // the hyper-local pages above. Lower priority = less crawl budget consumed.
    {
      url: `${BASE}/car-lockout-service-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.72,
    },
    {
      url: `${BASE}/car-key-replacement-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.72,
    },
    {
      url: `${BASE}/lost-car-keys-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${BASE}/car-key-programming-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${BASE}/spare-car-key-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.68,
    },
    {
      url: `${BASE}/car-key-fob-replacement-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.68,
    },
    {
      url: `${BASE}/transponder-key-programming-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.68,
    },
    {
      url: `${BASE}/broken-car-key-extraction-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.67,
    },
    {
      url: `${BASE}/car-ignition-repair-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.67,
    },
    {
      url: `${BASE}/van-locksmith-ashton`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.65,
    },

    // ─── Tier 5: Contact ──────────────────────────────────────────────────────
    {
      url: `${BASE}/contact`,
      lastModified: '2026-01-15',
      changeFrequency: 'yearly',
      priority: 0.70,
    },

    // ─── Tier 6: Blog ─────────────────────────────────────────────────────────
    {
      url: `${BASE}/blog`,
      lastModified: '2026-04-23',
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    // Topically aligned posts — highest value (support pillar pages directly)
    {
      url: `${BASE}/blog/auto-locksmith-ashton-in-makerfield`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.68,
    },
    {
      url: `${BASE}/blog/lost-car-keys-what-to-do-uk`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.68,
    },
    {
      url: `${BASE}/blog/car-key-replacement-cost-uk-2026`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.67,
    },
    {
      url: `${BASE}/blog/locked-keys-in-car-ashton-wigan`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.66,
    },
    {
      url: `${BASE}/blog/transponder-key-vs-smart-key-explained`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${BASE}/blog/what-to-do-if-locked-out`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${BASE}/blog/how-much-does-a-locksmith-cost-uk`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.62,
    },
    {
      url: `${BASE}/blog/car-key-replacement-guide`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.62,
    },
    {
      url: `${BASE}/blog/emergency-locksmith-response-time`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.60,
    },
    {
      url: `${BASE}/blog/how-to-improve-home-security`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.60,
    },
  ]
}
