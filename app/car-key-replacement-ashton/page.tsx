import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Key Replacement Ashton-in-Makerfield | Cut & Programmed | Same Day',
  description: 'Car key replacement in Ashton-in-Makerfield. Lost, broken or stolen keys replaced and programmed on-site for all makes. Cheaper than dealers. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/car-key-replacement-ashton`,
  },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'How much does car key replacement cost in Ashton-in-Makerfield?',
    answer: 'Standard transponder keys start from around £80–£120 all-in. Remote key fobs are typically £120–£180. Smart / proximity keys range from £180–£280 depending on the vehicle. All-keys-lost jobs start from around £120 and rise depending on complexity. Exact quotes given over the phone.',
  },
  {
    question: 'Do you come to me or do I need to bring the car to you?',
    answer: 'We come to you. Our car key replacement service is fully mobile — we arrive at wherever your vehicle is, whether that\'s home, work, a car park, or a roadside location. You don\'t need to arrange recovery.',
  },
  {
    question: 'How long does car key replacement take in Ashton-in-Makerfield?',
    answer: 'Most standard key replacements take 30–60 minutes on-site. All-keys-lost jobs typically take 60–120 minutes. Some rare vehicle models may require a specialist blank to be ordered, adding a day — we\'ll tell you this in advance.',
  },
  {
    question: 'Can you replace a car key if I still have my spare?',
    answer: 'Yes — and if you have a working spare, the job is simpler and quicker. We can programme a new key alongside your existing one. It\'s also cheaper than an all-keys-lost replacement, so sort it before you lose the spare too.',
  },
]

const keyTypes = [
  {
    title: 'Basic Cut Keys',
    period: 'Pre-1995 vehicles',
    desc: 'Simple metal key with no electronics. Cut to match the lock — no programming needed. Fast and inexpensive.',
    price: 'From £20',
  },
  {
    title: 'Transponder Keys',
    period: '1995–2010 vehicles',
    desc: 'Metal key with a microchip in the head. Must be programmed to the immobiliser after cutting or the engine won\'t start.',
    price: 'From £80',
  },
  {
    title: 'Remote Key Fobs',
    period: '2000s onwards',
    desc: 'Transponder key with built-in central locking remote. Requires cutting, chip programming, and remote sync.',
    price: 'From £120',
  },
  {
    title: 'Smart / Proximity Keys',
    period: '2010s onwards',
    desc: 'Keyless entry and push-button start. Most complex to replace — requires specialist diagnostic equipment.',
    price: 'From £180',
  },
]

export default function CarKeyReplacementAshtonPage() {
  const pageUrl = `${BUSINESS.url}/car-key-replacement-ashton`
  const schemas = [
    serviceSchema(
      'Car Key Replacement Ashton-in-Makerfield',
      'Mobile car key replacement in Ashton-in-Makerfield. All key types cut and programmed on-site — transponder, remote fob, and smart keys. Same-day service, cheaper than dealers.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Car Key Replacement Ashton', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Car Key Replacement Ashton-in-Makerfield | Same Day',
      description: 'Mobile car key replacement in Ashton-in-Makerfield. All key types, all makes. Same day.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[
        { label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' },
        { label: 'Car Key Replacement Ashton' },
      ]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            Car Key Specialists — Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Car Key Replacement{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Lost, broken, or stolen car keys replaced and programmed on-site — at your vehicle, same day. All makes
            and models covered. Typically 40–60% cheaper than going to your main dealer.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Mobile Service', 'All Makes & Models', 'Fixed Price Upfront', 'Same Day', 'No Recovery Needed'].map((t) => (
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

      {/* KEY TYPES */}
      <section className="section-padding bg-brand-light" aria-labelledby="keytypes-heading">
        <div className="container-max">
          <h2 id="keytypes-heading" className="text-2xl font-black text-brand-navy mb-2 text-center">Every Car Key Type Covered</h2>
          <p className="text-center text-gray-500 text-sm mb-8">The type of key affects what the job involves — and what it costs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyTypes.map((kt) => (
              <div key={kt.title} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-orange transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-brand-navy">{kt.title}</h3>
                  <span className="text-brand-orange font-black text-sm">{kt.price}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{kt.period}</p>
                <p className="text-gray-600 text-sm">{kt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">

          <h2>Mobile Car Key Replacement — We Come to You</h2>
          <p>
            When you need a car key replaced, the last thing you want is to arrange recovery to a dealer, wait
            for a booking slot, and pay inflated prices. Our mobile service means we drive to wherever your car
            is — home, work, a supermarket car park, anywhere in the Ashton-in-Makerfield and Wigan area — and
            complete the job on-site.
          </p>
          <p>
            We carry key blanks for the most common UK makes and models, and we have cutting and programming
            equipment on the van. Most jobs are done within an hour of arriving, with no disruption to your day.
          </p>

          <h2>What&apos;s Included</h2>
          <p>
            Every car key replacement we carry out includes cutting the physical blade, programming the transponder
            chip to your vehicle&apos;s immobiliser, and synchronising the remote (where applicable). What you get
            is a fully working key — not just a cut blade that won&apos;t start the car.
          </p>
          <p>
            If you&apos;ve lost all your keys, we handle full{' '}
            <Link href="/lost-car-keys-ashton">all-keys-lost replacement</Link> too — erasing existing key data
            from the ECU and programming new keys from scratch.
          </p>

          <h2>Ashton-in-Makerfield vs Wigan — What&apos;s the Difference?</h2>
          <p>
            This page covers car key replacement specifically in Ashton-in-Makerfield (WN4 postcode). If you&apos;re
            based in the wider Wigan borough — Wigan town centre, Leigh, Hindley, Aspull — see our{' '}
            <Link href="/car-key-replacement-wigan">car key replacement Wigan page</Link>.
            Both pages cover the same service; the difference is geography and Google.
          </p>

          <h2>Should You Get a Spare Key at the Same Time?</h2>
          <p>
            While we&apos;re on-site, getting a{' '}
            <Link href="/spare-car-key-ashton">spare key programmed</Link> costs a fraction of what a second
            call-out would later. It&apos;s the single most effective way to avoid an expensive AKL (all-keys-lost)
            job in the future — and it gives you peace of mind that you&apos;ll never be completely stranded.
          </p>

          <h2>Understand the Costs Before You Call</h2>
          <p>
            Our{' '}
            <Link href="/blog/car-key-replacement-guide">complete UK car key replacement guide</Link> explains all
            key types, the full dealer vs locksmith comparison, and what to expect for every scenario including
            all-keys-lost and stolen key situations. For transparent pricing across all locksmith services,{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">our 2026 locksmith price guide</Link> is the
            most honest reference you&apos;ll find.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        variant="orange"
        heading="Need a Car Key Replacement in Ashton-in-Makerfield?"
        subtext="Call Ashton Lock & Key — mobile, same-day, fixed price. We come to wherever your car is."
      />
      <FAQSection faqs={faqs} heading="Car Key Replacement FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement Wigan', desc: 'Wider Wigan area car key replacement.', href: '/car-key-replacement-wigan' },
              { title: 'Lost Car Keys Ashton', desc: 'Lost all keys? AKL replacement from scratch.', href: '/lost-car-keys-ashton' },
              { title: 'Spare Car Key', desc: 'Get a spare programmed now while we\'re here.', href: '/spare-car-key-ashton' },
              { title: 'Transponder Key Programming', desc: 'Chip-only reprogramming for existing keys.', href: '/transponder-key-programming-ashton' },
              { title: 'Car Key Fob Replacement', desc: 'Remote fob stopped working? Fixed or replaced.', href: '/car-key-fob-replacement-ashton' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service overview.', href: '/auto-locksmith-ashton-in-makerfield' },
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
