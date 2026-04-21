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
  // Top reviews for inline schema (real Google reviews)
  reviews: [
    {
      author: 'thomas berry',
      ratingValue: 5,
      reviewBody:
        'Best lock smith in the uk honest and reliable been using neil for 25yrs never I won\'t use no one else.',
      datePublished: '2025-04-20',
    },
    {
      author: 'Ian White',
      ratingValue: 5,
      reviewBody:
        'Great service! 10 minutes after putting down the phone, Neal had arrived at my house. Repair done to my front door lock. No fuss, happy with the price and service.',
      datePublished: '2025-06-20',
    },
    {
      author: 'Cecilia Frodsham',
      ratingValue: 5,
      reviewBody:
        'Great service from Ashton Lock & Key. I rang first thing as our front door wouldn\'t open and within 30 minutes, the gentleman arrived and was able to fix the problem. Excellent.',
      datePublished: '2025-04-20',
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
