import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Auto Locksmith Wigan | 24/7 Car Lockout & Key Replacement',
  description: 'Auto locksmith covering the whole Wigan borough. Car lockouts, car key replacement & transponder programming. 24/7, mobile, fixed price. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/auto-locksmith-wigan`,
  },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Wigan',
    'geo.position': '53.5452;-2.6333',
    'ICBM': '53.5452, -2.6333',
  },
}

const faqs = [
  {
    question: 'Do you cover the whole Wigan borough for auto locksmith work?',
    answer: 'Yes â€” we cover the full Wigan Metropolitan Borough including Wigan town centre, Leigh, Atherton, Hindley, Aspull, Golborne, Ince-in-Makerfield, Abram, Orrell, and all surrounding areas. We\'re based in Ashton-in-Makerfield, which puts us within 30â€“40 minutes of most Wigan locations.',
  },
  {
    question: 'How much does an auto locksmith cost in Wigan?',
    answer: 'Car lockouts start from Â£60 daytime, Â£80 out-of-hours. Car key replacement from Â£80 depending on key type and vehicle. All prices confirmed before we attend â€” what we quote is what you pay.',
  },
  {
    question: 'Is there a 24/7 auto locksmith available in Wigan?',
    answer: 'Yes. We operate 24 hours a day, every day of the year including bank holidays. Call 07309 903243 at any hour and you\'ll speak directly to the locksmith, not an answering service.',
  },
]

const wiganAreas = [
  'Wigan Town Centre', 'Leigh', 'Atherton', 'Tyldesley', 'Hindley', 'Hindley Green',
  'Aspull', 'Golborne', 'Ince-in-Makerfield', 'Abram', 'Orrell', 'Billinge',
  'Pemberton', 'Newtown', 'Lamberhead Green', 'Kitt Green',
]

export default function AutoLocksmithWiganPage() {
  const pageUrl = `${BUSINESS.url}/auto-locksmith-wigan`
  const schemas = [
    serviceSchema(
      'Auto Locksmith Wigan',
      'Auto locksmith service covering the whole Wigan borough â€” car lockouts, car key replacement, transponder programming. Based in Ashton-in-Makerfield. Available 24/7.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith Ashton', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Auto Locksmith Wigan', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Auto Locksmith Wigan | 24/7 Car Lockout & Key Replacement',
      description: 'Auto locksmith covering the whole Wigan borough. 24/7, mobile, fixed price.',
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
        { label: 'Auto Locksmith Wigan' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Serving All of Wigan Borough â€” 24/7
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Auto Locksmith <span className="text-brand-orange">Wigan</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Locked out of your car in Wigan? Lost your van keys? Need a transponder key programmed?
            Ashton Lock &amp; Key covers the whole Wigan Metropolitan Borough â€” 24 hours a day, fixed prices,
            no call-out fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['All of Wigan Borough', '24/7 Service', 'No Call-Out Fee', 'Fixed Price', 'All Makes & Models'].map((t) => (
              <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-padding bg-brand-light" aria-labelledby="areas-heading">
        <div className="container-max">
          <h2 id="areas-heading" className="text-2xl font-black text-brand-navy mb-6 text-center">Wigan Areas We Cover</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {wiganAreas.map((area) => (
              <div key={area} className="bg-white rounded-xl p-3 text-center border border-gray-100 hover:border-brand-orange transition-colors">
                <p className="text-sm font-semibold text-brand-navy">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>Auto Locksmith Services in Wigan</h2>
          <p>
            We provide a full auto locksmith service across the Wigan borough â€” everything from car lockouts to
            full car key replacement and programming. Our base in Ashton-in-Makerfield puts us within
            30â€“40 minutes of most Wigan locations, and we operate around the clock.
          </p>
          <ul>
            <li><Link href="/car-lockout-service-ashton">Car lockout service</Link> â€” non-destructive entry, no damage</li>
            <li><Link href="/car-key-replacement-wigan">Car key replacement across Wigan</Link> â€” all makes, programmed on-site</li>
            <li><Link href="/lost-car-keys-ashton">Lost car keys</Link> â€” all-keys-lost AKL replacement from scratch</li>
            <li><Link href="/transponder-key-programming-ashton">Transponder key programming</Link> â€” chip programming for all modern vehicles</li>
            <li><Link href="/car-key-fob-replacement-ashton">Key fob replacement</Link> â€” re-sync, repair, or replace</li>
            <li><Link href="/car-ignition-repair-ashton">Ignition repair</Link> â€” stiff or failed ignition barrel replacement</li>
            <li><Link href="/van-locksmith-ashton">Van locksmith</Link> â€” commercial vehicle lockouts and deadlock fitting</li>
          </ul>

          <h2>Why Use Ashton Lock &amp; Key for Auto Work in Wigan?</h2>
          <p>
            We&apos;re a genuine local business â€” when you call, you speak to the locksmith who&apos;s coming out.
            No call centres, no subcontractors. You get an honest ETA, a fixed price before we attend, and
            someone who stands behind the work they do.
          </p>
          <p>
            For general (non-auto) locksmith work in Wigan, see our{' '}
            <Link href="/locksmith-wigan">Locksmith Wigan</Link> page. For the full auto locksmith
            service hub, see{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">Auto Locksmith Ashton-in-Makerfield</Link>.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        variant="orange"
        heading="Auto Locksmith in Wigan â€” Call Now"
        subtext="Ashton Lock & Key covers the whole Wigan borough. 24/7, fixed price, no call-out fee."
      />
      <FAQSection faqs={faqs} heading="Auto Locksmith Wigan FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Auto Locksmith Ashton', desc: 'Our main auto locksmith hub â€” full service.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Car Key Replacement Wigan', desc: 'All makes, programmed on-site, cheaper than dealers.', href: '/car-key-replacement-wigan' },
              { title: 'Locksmith Wigan', desc: 'Home & business locksmith across Wigan.', href: '/locksmith-wigan' },
              { title: 'Car Lockout Service', desc: 'Locked keys in car â€” non-destructive entry.', href: '/car-lockout-service-ashton' },
              { title: 'Lost Car Keys', desc: 'All keys lost? AKL replacement from scratch.', href: '/lost-car-keys-ashton' },
              { title: 'Van Locksmith', desc: 'Commercial vehicle lockouts and deadlock fitting.', href: '/van-locksmith-ashton' },
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
