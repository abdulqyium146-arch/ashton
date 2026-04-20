import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { BUSINESS } from '@/lib/constants'
import { localBusinessSchema, websiteSchema } from '@/lib/schema'

// ─── FIX 1: next/font/google — self-hosted, zero render-blocking, zero CLS
//            Replaces: @import in globals.css + <link> tags in <head>
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  weight: ['400', '500', '600', '700', '800', '900'],
})

// ─── FIX 2: Viewport export (Next.js 14 recommended pattern)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0D1B2A' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1B2A' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  // ─── FIX 3: Template only adds brand — child pages supply keyword-rich title
  title: {
    default: `${BUSINESS.name} | Emergency Locksmith Ashton-in-Makerfield | 24/7`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: 'Locksmith Services',
  // ─── keywords meta tag (minor signal but consistent with content)
  keywords: [
    'locksmith ashton-in-makerfield',
    'emergency locksmith wigan',
    'locksmith near me',
    'key cutting ashton',
    'car key replacement wigan',
    '24/7 locksmith',
    'locked out ashton',
    'locksmith WN4',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Emergency Locksmith Ashton-in-Makerfield | 24/7`,
    description: BUSINESS.description,
    images: [
      {
        url: `/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Professional Locksmith in Ashton-in-Makerfield, Wigan`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Emergency Locksmith 24/7`,
    description: BUSINESS.description,
    images: [`/images/og-image.jpg`],
  },
  alternates: {
    canonical: BUSINESS.url,
    // ─── FIX 4: hreflang — declares language/region to Google
    languages: {
      'en-GB': BUSINESS.url,
      'x-default': BUSINESS.url,
    },
  },
  // ─── Remove placeholder verification (causes Search Console validation error)
  // verification: { google: 'ADD_REAL_CODE_FROM_SEARCH_CONSOLE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ─── FIX 5: Apply CSS variable from next/font
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/*
         * ─── FIX 6: NO manual Google Fonts <link> here.
         *     next/font handles preloading, self-hosting, and font-display:swap
         *     automatically. Manual links caused double-load + render-blocking.
         *
         * ─── FIX 7: Preconnect to domains used in pages (Google Maps iframe)
         */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />

        {/*
         * ─── Favicon chain — provides all device sizes
         *     Replace with real PNG versions before go-live
         */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

        {/*
         * ─── FIX 8: LocalBusiness + WebSite schemas on every page
         *     Two separate JSON-LD blocks = cleaner entity graph
         */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="flex flex-col min-h-screen pb-16 lg:pb-0 font-sans antialiased bg-white text-gray-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-brand-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <Header />
        <main className="flex-grow" id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
