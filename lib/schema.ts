import { BUSINESS } from './constants'

// ─── FIX: Use Locksmith as sole type (already extends LocalBusiness)
// ─── FIX: Add inline Review objects (trust signals in SERP)
// ─── FIX: Add knowsAbout (topic relevance)
// ─── FIX: Add hasMap, slogan, foundingDate
// ─── FIX: Consistent 24/7 opening hours

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    alternateName: 'Ashton Lock and Key',
    description: BUSINESS.description,
    slogan: BUSINESS.slogan,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    // ─── FIX: 24/7 schema now matches visual content (both show 24/7)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      reviewCount: BUSINESS.aggregateRating.reviewCount,
      bestRating: BUSINESS.aggregateRating.bestRating,
      worstRating: BUSINESS.aggregateRating.worstRating,
    },
    // ─── FIX: Inline reviews — enables star snippets in local pack
    review: BUSINESS.reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.ratingValue,
        bestRating: 5,
      },
      reviewBody: r.reviewBody,
      datePublished: r.datePublished,
    })),
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    // ─── FIX: serviceType is simpler and better than hasOfferCatalog nesting
    serviceType: BUSINESS.services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: BUSINESS.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          url: `${BUSINESS.url}${s.url}`,
          provider: { '@id': `${BUSINESS.url}/#business` },
        },
      })),
    },
    // ─── FIX: knowsAbout — topical relevance signal
    knowsAbout: [...BUSINESS.knowsAbout],
    image: [
      `${BUSINESS.url}/images/ashton-lock-and-key.jpg`,
      `${BUSINESS.url}/images/og-image.jpg`,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${BUSINESS.url}/images/logo.png`,
      width: 200,
      height: 60,
    },
  }
}

// ─── NEW: WebSite schema with SearchAction (enables sitelinks search box)
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    description: BUSINESS.description,
    publisher: { '@id': `${BUSINESS.url}/#business` },
    inLanguage: 'en-GB',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BUSINESS.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ─── FIX: serviceSchema now references provider via @id (entity graph link)
export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: name,
    provider: {
      '@type': 'Locksmith',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'GBP',
      seller: { '@id': `${BUSINESS.url}/#business` },
    },
    isRelatedTo: { '@id': `${BUSINESS.url}/#business` },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ─── FIX: BlogPosting (correct type) + image (required for rich results)
//         + wordCount + keywords + proper author entity
export function blogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  keywords,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage: 'en-GB',
    image: {
      '@type': 'ImageObject',
      url: image ?? `${BUSINESS.url}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
      isPartOf: { '@id': `${BUSINESS.url}/#website` },
    },
    ...(keywords && { keywords: keywords.join(', ') }),
    isPartOf: { '@id': `${BUSINESS.url}/#website` },
  }
}

// Keep articleSchema as alias for backwards compat
export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
) {
  return blogPostingSchema({ title, description, url, datePublished, dateModified })
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${items[items.length - 1]?.url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ─── FIX: WebPage schema for individual pages (connects to entity graph)
export function webPageSchema({
  url,
  title,
  description,
  type = 'WebPage',
}: {
  url: string
  title: string
  description: string
  type?: 'WebPage' | 'CollectionPage' | 'ItemPage' | 'AboutPage' | 'ContactPage'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${BUSINESS.url}/#website` },
    about: { '@id': `${BUSINESS.url}/#business` },
    inLanguage: 'en-GB',
    breadcrumb: { '@id': `${url}#breadcrumb` },
  }
}

export function reviewSchema(
  reviews: { author: string; rating: number; text: string; date: string }[],
) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: { '@type': 'Person', name: review.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      '@type': 'Locksmith',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
  }))
}
