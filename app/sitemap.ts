import { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url

  // ─── FIX 1: No trailing slash on homepage URL (matches canonical tag)
  // ─── FIX 2: Static lastModified dates per page (not `new Date()`)
  //     Using `now` caused every build to mark all pages as freshly updated,
  //     which wastes crawl budget as Googlebot refetches unchanged pages.
  //     Static dates also better reflect actual content freshness.
  // ─── FIX 3: priority is a hint, not a guarantee — set meaningful values

  return [
    // ── Core money pages ─────────────────────────────────
    {
      url: base,
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/emergency-locksmith-ashton-in-makerfield`,
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/key-cutting-ashton`,
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/car-key-replacement-wigan`,
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Location pages ────────────────────────────────────
    {
      url: `${base}/locksmith-ashton-in-makerfield`,
      lastModified: '2025-01-10T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/locksmith-wigan`,
      lastModified: '2025-01-10T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/locksmith-near-me`,
      lastModified: '2025-01-10T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Contact page ──────────────────────────────────────
    {
      url: `${base}/contact`,
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.75,
    },

    // ── Blog index ────────────────────────────────────────
    {
      url: `${base}/blog`,
      lastModified: '2024-11-01T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // ── Blog posts ────────────────────────────────────────
    {
      url: `${base}/blog/what-to-do-if-locked-out`,
      lastModified: '2024-11-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${base}/blog/how-much-does-a-locksmith-cost-uk`,
      lastModified: '2024-10-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${base}/blog/car-key-replacement-guide`,
      lastModified: '2024-09-20T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${base}/blog/how-to-improve-home-security`,
      lastModified: '2024-08-10T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/blog/emergency-locksmith-response-time`,
      lastModified: '2024-07-22T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
