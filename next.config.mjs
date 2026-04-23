/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Compress all responses
  compress: true,

  // ─── Remove X-Powered-By: Next.js header (security + minor perf)
  poweredByHeader: false,

  // ─── Image optimisation: serve AVIF first, WebP fallback
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },

  // ─── Experimental: optimise package imports for smaller bundles
  experimental: {
    optimizePackageImports: ['next/font'],
  },

  headers: async () => [
    // ─── Security + SEO headers on all routes
    {
      source: '/(.*)',
      headers: [
        // Prevent MIME-type sniffing
        { key: 'X-Content-Type-Options', value: 'nosniff' },

        // Prevent our pages from being embedded in iframes on other sites
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },

        // ─── FIX: Content-Security-Policy now includes frame-src for Google Maps
        //     Without this, Google Maps iframes are blocked by some browsers
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            // Scripts: self + inline (needed for JSON-LD) + Google Analytics placeholder
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
            // Styles: self + inline (Tailwind injects some inline styles)
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            // Fonts: Google Fonts (preconnect) — next/font self-hosts but keep as fallback
            "font-src 'self' https://fonts.gstatic.com data:",
            // Images: self + data URIs + Google (for map tiles)
            "img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://streetviewpixels-pa.googleapis.com",
            // ─── KEY: Allow Google Maps iframe and Google Analytics
            "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com",
            // Connect: Google Analytics + Maps API
            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://maps.googleapis.com https://region1.google-analytics.com",
            // Block plugins
            "object-src 'none'",
            // Base URI
            "base-uri 'self'",
            // Form submissions: self only
            "form-action 'self'",
            // Upgrade HTTP to HTTPS
            'upgrade-insecure-requests',
          ].join('; '),
        },

        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

        // Permissions policy — disable unused browser features
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
        },

        // HSTS: force HTTPS for 2 years, include subdomains, eligible for preload list
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },

    // ─── Aggressive caching for static assets (content-hashed filenames)
    {
      source: '/_next/static/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/(.*)\\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },

    // ─── Short cache for HTML pages (allows fast updates)
    {
      source: '/((?!_next).*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' },
      ],
    },
  ],

  // ─── Redirects: enforce www + no trailing slashes
  redirects: async () => [
    // non-www → www: canonical is www.ashtonlockandkey.co.uk (matches constants.ts)
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'ashtonlockandkey.co.uk' }],
      destination: 'https://www.ashtonlockandkey.co.uk/:path*',
      permanent: true,
    },
  ],
}

export default nextConfig
