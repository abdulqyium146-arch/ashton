import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Auto Locksmith Newton-le-Willows | Car Lockout & Key Replacement | 24/7',
  description: 'Auto locksmith covering Newton-le-Willows and WA12 postcode. Car lockouts, key replacement, transponder programming. Mobile 24/7 service. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/auto-locksmith-newton-le-willows`,
  },
  other: {
    'geo.region': 'GB-SHN',
    'geo.placename': 'Newton-le-Willows, Merseyside',
    'geo.position': '53.4510;-2.6410',
    'ICBM': '53.4510, -2.6410',
  },
}

const faqs = [
  {
    question: 'Do you cover Newton-le-Willows for auto locksmith work?',
    answer: 'Yes. Newton-le-Willows is approximately 8–10 miles from our base in Ashton-in-Makerfield. Typical response time is 25–35 minutes. We cover Newton-le-Willows town centre, Earlestown, Haydock, and surrounding WA12 postcodes.',
  },
  {
    question: 'Can you replace car keys in Newton-le-Willows the same day?',
    answer: 'Yes. We carry key blanks and programming equipment on the van. For most makes and models we can cut and programme a replacement key at your vehicle in Newton-le-Willows the same day you call. Lost all keys? AKL programming from scratch is also available.',
  },
  {
    question: 'What are your call-out hours for Newton-le-Willows?',
    answer: 'We operate 24 hours a day, every day of the year. There is no extra call-out fee — just the standard rate (daytime from £60 for a lockout, with out-of-hours rates applying after 20:00). Price confirmed before we attend.',
  },
]

export default function AutoLocksmithNewtonLeWillowsPage() {
  const pageUrl = `${BUSINESS.url}/auto-locksmith-newton-le-willows`
  const schemas = [
    serviceSchema(
      'Auto Locksmith Newton-le-Willows',
      'Auto locksmith serving Newton-le-Willows, Earlestown, and WA12 postcodes. Car lockouts, key replacement and programming. Mobile 24/7 service from Ashton-in-Makerfield.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith Ashton', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Auto Locksmith Newton-le-Willows', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Auto Locksmith Newton-le-Willows | 24/7 Car Lockout & Key Replacement',
      description: 'Auto locksmith covering Newton-le-Willows and WA12. 24/7 mobile service.',
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
        { label: 'Auto Locksmith Newton-le-Willows' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Covering Newton-le-Willows &amp; Earlestown — 24/7
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Auto Locksmith{' '}
            <span className="text-brand-orange">Newton-le-Willows</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Car lockouts, car key replacement, and full auto locksmith services for Newton-le-Willows,
            Earlestown, and WA12. Ashton Lock &amp; Key is typically on-site within 30 minutes — mobile,
            24/7, fixed price.
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
          <h2>Auto Locksmith Services in Newton-le-Willows</h2>
          <p>
            Newton-le-Willows sits conveniently between our Ashton-in-Makerfield base and St Helens, making it
            one of our faster response areas. We cover the full WA12 postcode including Earlestown and Haydock.
            All services from our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith hub</Link> are available here:
          </p>
          <ul>
            <li><Link href="/car-lockout-service-ashton">Car lockout service</Link> — non-destructive entry, no damage</li>
            <li><Link href="/car-key-replacement-ashton">Car key replacement</Link> — all makes, cut and programmed on-site</li>
            <li><Link href="/lost-car-keys-ashton">Lost all car keys</Link> — AKL reprogramming from scratch</li>
            <li><Link href="/transponder-key-programming-ashton">Transponder key programming</Link></li>
            <li><Link href="/car-key-fob-replacement-ashton">Key fob replacement &amp; re-sync</Link></li>
            <li><Link href="/van-locksmith-ashton">Van locksmith</Link> — commercial vehicle coverage</li>
          </ul>

          <h2>Why Ashton Lock &amp; Key for Newton-le-Willows?</h2>
          <p>
            Newton-le-Willows is close enough to Ashton-in-Makerfield that we offer some of our fastest response
            times here. Unlike national call centre services that advertise everywhere and subcontract to whoever
            is nearest, you speak directly to us when you call — and we&apos;re the ones who show up.
          </p>

          <h2>Also Serving Nearby Areas</h2>
          <p>
            We also cover{' '}
            <Link href="/auto-locksmith-st-helens">St Helens</Link> and{' '}
            <Link href="/auto-locksmith-wigan">Wigan</Link> — so if you&apos;re searching from a location close
            to the border of those areas, we&apos;re still the right call.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Auto Locksmith in Newton-le-Willows"
        subtext="Call Ashton Lock & Key — typically on-site in under 30 minutes. 24/7, mobile, fixed price."
      />
      <FAQSection faqs={faqs} heading="Auto Locksmith Newton-le-Willows FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Auto Locksmith Ashton', desc: 'Our main auto locksmith hub — full service.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Auto Locksmith St Helens', desc: 'Also covering nearby St Helens and Haydock.', href: '/auto-locksmith-st-helens' },
              { title: 'Car Lockout Service', desc: 'Locked keys in car — non-destructive entry.', href: '/car-lockout-service-ashton' },
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
