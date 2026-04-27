import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Auto Locksmith St Helens | Car Lockout & Key Replacement | 24/7',
  description: 'Auto locksmith covering St Helens and WA10/WA11 postcodes. Car lockouts, key replacement, transponder programming. Mobile 24/7 service. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/auto-locksmith-st-helens`,
  },
  other: {
    'geo.region': 'GB-SHN',
    'geo.placename': 'St Helens, Merseyside',
    'geo.position': '53.4550;-2.7360',
    'ICBM': '53.4550, -2.7360',
  },
}

const faqs = [
  {
    question: 'Do you cover St Helens for auto locksmith call-outs?',
    answer: 'Yes. We cover St Helens and the WA10/WA11 postcode area as part of our wider North West coverage. From our base in Ashton-in-Makerfield, St Helens is approximately 30â€“45 minutes depending on traffic. We attend call-outs in St Helens town centre, Haydock, Newton-le-Willows, and surrounding areas.',
  },
  {
    question: 'What auto locksmith services are available in St Helens?',
    answer: 'The full range â€” car lockouts (locked keys in vehicle), car key replacement and programming for all makes, transponder key programming, key fob repair and replacement, ignition repair, and van locksmith services.',
  },
  {
    question: 'Are your prices the same for St Helens as for Ashton-in-Makerfield?',
    answer: 'Standard jobs are quoted at the same rates. For call-outs at the furthest edges of our coverage area there may be a small additional travel contribution â€” we\'ll be upfront about this when you call and quote the all-in price before attending.',
  },
]

export default function AutoLocksmithStHelensPage() {
  const pageUrl = `${BUSINESS.url}/auto-locksmith-st-helens`
  const schemas = [
    serviceSchema(
      'Auto Locksmith St Helens',
      'Auto locksmith serving St Helens, Haydock and WA10/WA11 postcode areas. Car lockouts, key replacement and programming. Mobile 24/7 service from Ashton-in-Makerfield.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith Ashton', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Auto Locksmith St Helens', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Auto Locksmith St Helens | 24/7 Car Lockout & Key Replacement',
      description: 'Auto locksmith covering St Helens and WA10/WA11. 24/7 mobile service.',
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
        { label: 'Auto Locksmith St Helens' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Covering St Helens &amp; Haydock â€” 24/7
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Auto Locksmith <span className="text-brand-orange">St Helens</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Car lockouts, car key replacement, and auto locksmith services for St Helens,
            Haydock, and WA10/WA11 postcodes. Ashton Lock &amp; Key is mobile, 24/7, with
            fixed prices quoted before we attend.
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
          <h2>Auto Locksmith Services Available in St Helens</h2>
          <p>
            We attend auto locksmith call-outs across St Helens, Haydock, Sutton, Eccleston, and the wider
            WA10/WA11 area. All services from our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">Ashton-in-Makerfield auto locksmith hub</Link> are
            available here:
          </p>
          <ul>
            <li><Link href="/car-lockout-service-ashton">Car lockout</Link> â€” locked keys in vehicle, non-destructive entry</li>
            <li><Link href="/car-key-replacement-ashton">Car key replacement</Link> â€” all makes, cut and programmed on-site</li>
            <li><Link href="/lost-car-keys-ashton">Lost all car keys</Link> â€” AKL reprogramming from scratch</li>
            <li><Link href="/transponder-key-programming-ashton">Transponder key programming</Link></li>
            <li><Link href="/car-key-fob-replacement-ashton">Key fob replacement &amp; re-sync</Link></li>
            <li><Link href="/van-locksmith-ashton">Van locksmith</Link> â€” commercial vehicle coverage</li>
          </ul>

          <h2>Response Times for St Helens</h2>
          <p>
            St Helens is approximately 12â€“15 miles from our base in Ashton-in-Makerfield. Typical response time is
            35â€“50 minutes. We will give you an honest ETA when you call â€” not a 30-minute promise that turns into
            a 90-minute wait.
          </p>

          <h2>Area Coverage</h2>
          <p>
            We also cover neighbouring{' '}
            <Link href="/auto-locksmith-newton-le-willows">Newton-le-Willows</Link> and the wider North West.
            For auto locksmith work specifically in Wigan, see{' '}
            <Link href="/auto-locksmith-wigan">auto locksmith Wigan</Link>.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Auto Locksmith Needed in St Helens?"
        subtext="Call Ashton Lock & Key â€” 24/7, mobile, fixed price quoted before we attend."
      />
      <FAQSection faqs={faqs} heading="Auto Locksmith St Helens FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Auto Locksmith Ashton', desc: 'Our main auto locksmith hub â€” full service.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Auto Locksmith Newton-le-Willows', desc: 'Also covering nearby Newton-le-Willows.', href: '/auto-locksmith-newton-le-willows' },
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
