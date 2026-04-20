import { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // ─── FIX: REMOVED '/_next/' disallow.
        //     /_next/ contains compiled CSS and JS that Googlebot MUST fetch
        //     to render the page correctly. Disallowing it caused Google to see
        //     unstyled HTML with no layout, tanking Core Web Vitals scores.
        //     Also removed '/static/' — Next.js doesn't use that path.
        disallow: ['/api/'],
      },
      // ─── Block AI training bots (does not affect Google/Bing)
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
    // ─── FIX: Removed non-standard 'host' directive.
    //     'host:' is not in the robots.txt spec — Google ignores it.
    //     Canonical domain preference is set via GSC, not robots.txt.
  }
}
