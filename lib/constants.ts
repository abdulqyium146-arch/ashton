export const BUSINESS = {
  name: 'Ashton Lock & Key',
  phone: '+447711341668',
  phoneDisplay: '07711 341668',
  whatsapp: '447711341668',
  email: 'info@ashtonlockandkey.co.uk',
  address: {
    streetAddress: 'Ashton-in-Makerfield',
    addressLocality: 'Ashton-in-Makerfield',
    addressRegion: 'Wigan',
    postalCode: 'WN4',
    addressCountry: 'GB',
  },
  geo: {
    latitude: 53.4878,
    longitude: -2.6405,
  },
  // 24/7 — emergency line always open
  openingHoursSchema: ['Mo-Su 00:00-23:59'],
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  url: 'https://www.ashtonlockandkey.co.uk',
  description:
    'Professional locksmith in Ashton-in-Makerfield, Wigan. Emergency lockout, key cutting & car key replacement. Available 24/7. Fast 30-minute response.',
  slogan: 'Your trusted local locksmith — 24/7 fast response',
  priceRange: '££',
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  // Top reviews for inline schema
  reviews: [
    {
      author: 'Sarah M.',
      ratingValue: 5,
      reviewBody:
        'Absolutely brilliant service! Locked out at 11pm and the locksmith arrived within 25 minutes. Friendly, professional, and fair price.',
      datePublished: '2024-11-15',
    },
    {
      author: 'Dave R.',
      ratingValue: 5,
      reviewBody:
        'Lost my car keys on a Sunday and Ashton Lock & Key sorted me out quickly at a fraction of what the dealer quoted. Top service.',
      datePublished: '2024-10-22',
    },
    {
      author: 'Linda T.',
      ratingValue: 5,
      reviewBody:
        'Had new locks fitted after a break-in attempt. Felt so much safer. Proper local expert who clearly knows his trade.',
      datePublished: '2024-09-08',
    },
  ],
  serviceAreas: [
    'Ashton-in-Makerfield',
    'Wigan',
    'St Helens',
    'Newton-le-Willows',
    'Leigh',
    'Golborne',
    'Haydock',
    'Billinge',
    'Orrell',
    'Hindley',
    'Abram',
    'Ince-in-Makerfield',
  ],
  // Services for schema & sitelinks
  services: [
    {
      name: 'Emergency Locksmith',
      url: '/emergency-locksmith-ashton-in-makerfield',
      description:
        '24/7 emergency lockout service in Ashton-in-Makerfield and surrounding areas. Fast 30-minute response.',
    },
    {
      name: 'Key Cutting',
      url: '/key-cutting-ashton',
      description:
        'Professional key cutting in Ashton-in-Makerfield for all key types. Same-day service.',
    },
    {
      name: 'Car Key Replacement',
      url: '/car-key-replacement-wigan',
      description:
        'Car key replacement and programming for all makes and models across Wigan. Cheaper than dealers.',
    },
  ],
  knowsAbout: [
    'Locksmithing',
    'Emergency Lockout Service',
    'Key Cutting',
    'Car Key Replacement',
    'Lock Repair',
    'Home Security',
    'Anti-Snap Cylinders',
    'uPVC Door Locks',
  ],
} as const

export const NAP = {
  name: BUSINESS.name,
  phone: BUSINESS.phone,
  phoneDisplay: BUSINESS.phoneDisplay,
  address: `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressRegion}`,
} as const
