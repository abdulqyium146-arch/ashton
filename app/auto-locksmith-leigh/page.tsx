import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Auto Locksmith Leigh | Car Lockout & Key Replacement | 24/7',
  description: 'Auto locksmith serving Leigh, Atherton and Tyldesley. Car lockouts, car key replacement & programming. 24/7 mobile service, fixed price. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/auto-locksmith-leigh`,
  },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Leigh, Greater Manchester',
    'geo.position': '53.4966;-2.5163',
    'ICBM': '53.4966, -2.5163',
  },
}

const faqs = [
  {
    question: 'How far is Ashton-in-Makerfield from Leigh?',
    answer: 'Approximately 7â€“9 miles depending on the route. Our typical response time to Leigh, Atherton, and Tyldesley is 25â€“40 minutes. We\'re on the road 24/7 so late-night and early-morning call-outs are no problem.',
  },
  {
    question: 'Do you replace car keys in Leigh?',
    answer: 'Yes â€” we carry programming equipment and key blanks on the van. For most makes we can cut and programme a replacement key at your vehicle in Leigh the same day. Lost all keys? We handle AKL (all-keys-lost) jobs too.',
  },
  {
    question: 'What auto locksmith services do you offer in Leigh?',
    answer: 'The full range â€” car lockouts, car key replacement and programming, transponder key programming, key fob repair, ignition repair, broken key extraction, and van locksmith services including deadlock fitting.',
  },
]

export default function AutoLocksmithLeighPage() {
  const pageUrl = `${BUSINESS.url}/auto-locksmith-leigh`
  const schemas = [
    serviceSchema(
      'Auto Locksmith Leigh',
      'Auto locksmith serving Leigh, Atherton and Tyldesley. Car lockouts, key replacement and programming. Mobile 24/7 service from Ashton-in-Makerfield.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith Ashton', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Auto Locksmith Leigh', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Auto Locksmith Leigh | 24/7 Car Lockout & Key Replacement',
      description: 'Auto locksmith serving Leigh, Atherton and Tyldesley. 24/7 mobile service.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[
        { label: 'Auto Locksmith Ashton', href: '/auto-locksmith-ashton-in-makerfield' },
        { label: 'Auto Locksmith Leigh' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Covering Leigh, Atherton &amp; Tyldesley â€” 24/7
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Auto Locksmith <span className="text-brand-orange">Leigh</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Car lockouts, key replacement, and transponder programming for Leigh, Atherton, and Tyldesley.
            Ashton Lock &amp; Key is typically on-site within 30â€“40 minutes â€” 24 hours a day, fixed prices upfront.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>Auto Locksmith Services in Leigh</h2>
          <p>
            We attend vehicle locksmith call-outs in Leigh, Atherton, Tyldesley, and the surrounding WN7 and
            M46 postcode areas. The full range of our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith service</Link> is available in
            this area:
          </p>
          <ul>
            <li><Link href="/car-lockout-service-ashton">Car lockout service</Link> â€” non-destructive entry, no damage, any hour</li>
            <li><Link href="/car-key-replacement-ashton">Car key replacement</Link> â€” cut and programmed at your vehicle</li>
            <li><Link href="/lost-car-keys-ashton">Lost car keys / AKL</Link> â€” all keys lost programming from scratch</li>
            <li><Link href="/transponder-key-programming-ashton">Transponder key programming</Link> â€” chip programming for all makes</li>
            <li><Link href="/car-key-fob-replacement-ashton">Key fob replacement</Link> â€” re-sync, repair, or full replacement</li>
            <li><Link href="/van-locksmith-ashton">Van locksmith</Link> â€” commercial vehicle lockouts and security</li>
          </ul>

          <h2>Response Times for Leigh</h2>
          <p>
            From our base in Ashton-in-Makerfield to central Leigh is approximately 7â€“9 miles via the A579.
            Typical response time is 25â€“40 minutes, depending on traffic. At night and on weekends when roads are
            clearer, we&apos;re often faster. We&apos;ll give you a realistic ETA when you call â€” not an optimistic
            estimate that turns into a longer wait.
          </p>

          <h2>Pricing</h2>
          <p>
            All prices are quoted over the phone before we attend. Standard daytime car lockout from Â£60.
            Out-of-hours from Â£80. Car key replacement from Â£80 depending on key type. For transparent pricing
            across all auto locksmith services, see our{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">locksmith pricing guide for 2026</Link>.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Auto Locksmith in Leigh"
        subtext="Call Ashton Lock & Key â€” typically on-site in 30â€“40 minutes, 24/7, fixed price."
      />
      <FAQSection faqs={faqs} heading="Auto Locksmith Leigh FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Auto Locksmith Ashton', desc: 'Our main auto locksmith hub â€” full service.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Auto Locksmith Wigan', desc: 'Also covering the wider Wigan borough.', href: '/auto-locksmith-wigan' },
              { title: 'Car Lockout Service', desc: 'Locked keys in car â€” non-destructive entry.', href: '/car-lockout-service-ashton' },
              { title: 'Car Key Replacement', desc: 'All makes, programmed on-site.', href: '/car-key-replacement-ashton' },
              { title: 'Lost Car Keys', desc: 'All-keys-lost AKL replacement.', href: '/lost-car-keys-ashton' },
              { title: 'Van Locksmith', desc: 'Commercial vehicle lockouts and security.', href: '/van-locksmith-ashton' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card hover:-translate-y-0.5 transition-transform group block">
                <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
