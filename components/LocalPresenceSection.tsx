import { BUSINESS } from '@/lib/constants'

/**
 * LOCAL PRESENCE SECTION — Pro Local SEO
 *
 * Strategy:
 * 1. GMB iframe embed  →  geographic relevance signal on the page
 * 2. Full NAP block alongside the map  →  reinforces NAP consistency
 * 3. Opening hours  →  mirrors GMB data (consistency = trust signal)
 * 4. "Get Directions" CTA  →  drives clicks to GMB listing (ranking signal)
 * 5. Service area pill list  →  geo-keyword density around the embed
 * 6. Schema-aligned markup  →  section headings match LocalBusiness schema data
 *
 * TO REPLACE THE MAP WITH YOUR REAL GMB EMBED:
 * 1. Open Google Maps → search your business name
 * 2. Click "Share" → "Embed a map" → copy the src="" URL
 * 3. Paste it into the `GMB_EMBED_SRC` constant below
 */

const GMB_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9479.254761703516!2d-2.6499!3d53.4878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b08b27bb5c9f1%3A0x91b1b5f5f5f5f5f5!2sAshton-in-Makerfield%2C%20Wigan!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'

const openingHours = [
  { day: 'Monday – Friday', hours: '8:00am – 8:00pm' },
  { day: 'Saturday', hours: '8:00am – 6:00pm' },
  { day: 'Sunday', hours: '9:00am – 5:00pm' },
  { day: 'Emergency (24/7)', hours: 'Always available', highlight: true },
]

const nearbyAreas = [
  'Ashton-in-Makerfield WN4',
  'Wigan WN1',
  'Golborne WA3',
  'Newton-le-Willows WA12',
  'St Helens WA10',
  'Leigh WN7',
  'Haydock WA11',
  'Billinge WN5',
  'Orrell WN5',
  'Hindley WN2',
  'Abram WN2',
  'Ince WN2',
]

export default function LocalPresenceSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="location-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Hidden machine-readable NAP for schema */}
      <meta itemProp="name" content={BUSINESS.name} />
      <meta itemProp="telephone" content={BUSINESS.phone} />
      <meta itemProp="address" content={`${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressRegion}, ${BUSINESS.address.postalCode}`} />

      <div className="container-max">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-brand-light text-brand-navy text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Genuinely Local — Based in Ashton-in-Makerfield
          </span>
          <h2 id="location-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
            Find Your Local Locksmith in Ashton
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re not a call centre. Ashton Lock &amp; Key is a real, local locksmith based right here in
            Ashton-in-Makerfield — covering the whole WN4 postcode and beyond.
          </p>
        </div>

        {/* ── Main grid: map left, info right ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">

          {/* Map — 3 columns */}
          <div className="lg:col-span-3 relative">
            {/* Decorative border frame */}
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-orange/30 to-brand-blue/30 rounded-3xl blur-sm" aria-hidden="true" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
              <iframe
                src={GMB_EMBED_SRC}
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${BUSINESS.name} location map — Ashton-in-Makerfield, Wigan`}
              />
            </div>

            {/* Get Directions CTA — overlaid at bottom of map */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}&travelmode=driving`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white hover:bg-brand-light text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full shadow-xl border border-gray-100 transition-all hover:shadow-2xl hover:-translate-x-1/2 hover:-translate-y-0.5 whitespace-nowrap"
              aria-label="Get directions to Ashton Lock & Key on Google Maps"
            >
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Get Directions
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Info panel — 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* NAP Card */}
            <div className="bg-brand-navy rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-lg leading-tight">{BUSINESS.name}</p>
                  <p className="text-brand-orange text-xs font-semibold tracking-wide uppercase">Your Local Locksmith</p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Call us on ${BUSINESS.phoneDisplay}`}
                >
                  <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors">
                    <svg className="w-3.5 h-3.5 text-brand-orange group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-bold group-hover:text-brand-orange transition-colors"
                    itemProp="telephone"
                  >
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <address
                    className="text-white/80 text-sm not-italic leading-relaxed"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">{BUSINESS.address.streetAddress}</span>,{' '}
                    <span itemProp="addressLocality">{BUSINESS.address.addressRegion}</span>,{' '}
                    <span itemProp="postalCode">{BUSINESS.address.postalCode}</span>
                  </address>
                </div>

                {/* Live status */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse block" aria-hidden="true" />
                  </div>
                  <span className="text-green-400 font-semibold text-sm">Available Now — Emergency Line Open</span>
                </div>
              </div>

              {/* Call CTA */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="mt-5 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors w-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-brand-light rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-brand-navy">Opening Hours</h3>
              </div>
              <ul className="space-y-2" aria-label="Opening hours">
                {openingHours.map((row) => (
                  <li
                    key={row.day}
                    className={`flex items-center justify-between text-sm rounded-lg px-3 py-2 ${
                      row.highlight
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-white border border-gray-100'
                    }`}
                  >
                    <span className={`font-medium ${row.highlight ? 'text-green-800' : 'text-brand-navy'}`}>
                      {row.day}
                    </span>
                    <span className={`font-bold ${row.highlight ? 'text-green-700' : 'text-gray-700'}`}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Emergency line always open — including Christmas &amp; bank holidays
              </p>
            </div>

          </div>
        </div>

        {/* ── Service radius strip ────────────────────────────── */}
        <div className="bg-brand-navy rounded-2xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0">
              <p className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-1">
                Service Radius — 15+ Miles
              </p>
              <p className="text-white/60 text-xs">
                Based in Ashton-in-Makerfield (WN4). Fast response to all postcodes below.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:ml-auto">
              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="bg-white/10 hover:bg-brand-orange text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
