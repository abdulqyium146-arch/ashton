import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Lost Car Keys Ashton-in-Makerfield | All Keys Lost | Same-Day Replacement',
  description: 'Lost all your car keys near Ashton-in-Makerfield? We replace and programme car keys from scratch — same day. All makes, cheaper than dealers. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/lost-car-keys-ashton`,
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
    question: 'Can you make a car key without the original?',
    answer: 'Yes. This is called an "all keys lost" job. We use specialist diagnostic equipment to wipe the existing key data from your vehicle\'s ECU, then programme brand new keys from scratch. It costs more than replacing a single lost key, but it\'s considerably cheaper than the dealer.',
  },
  {
    question: 'What do I need to have ready when you arrive?',
    answer: 'Have your V5C vehicle registration document (logbook) available to prove ownership. You\'ll need to be present at the vehicle throughout — we cannot programme keys and leave them with a neighbour or third party.',
  },
  {
    question: 'How much does "all keys lost" car key replacement cost?',
    answer: 'It varies by make, model, and key type. Typical AKL jobs start from around £120 for older transponder key vehicles, rising to £250+ for modern smart key / proximity key systems. We\'ll give you a firm quote over the phone before attending.',
  },
  {
    question: 'How long does it take to replace lost car keys?',
    answer: 'For most vehicles, an all keys lost job takes 60–120 minutes on-site. Some complex or rare vehicles may require a specialist key blank to be ordered, which can add a day. We\'ll be upfront about timescales when you call.',
  },
  {
    question: 'My car keys were stolen — should I replace them straight away?',
    answer: 'Yes, immediately. A thief who has your keys and knows which car they go to can return at any time. Ring us, report the theft to police for a crime reference number, and check whether your insurance covers key replacement. We can delete the stolen keys and programme new ones the same day.',
  },
]

export default function LostCarKeysPage() {
  const pageUrl = `${BUSINESS.url}/lost-car-keys-ashton`
  const schemas = [
    serviceSchema(
      'Lost Car Keys Ashton-in-Makerfield',
      'Car key replacement for lost or stolen keys in Ashton-in-Makerfield. All keys lost programming, same-day service, all makes and models. Cheaper than main dealers.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Lost Car Keys Ashton', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Lost Car Keys Ashton-in-Makerfield | All Keys Lost Replacement',
      description: 'Lost all car keys in Ashton-in-Makerfield? Same-day AKL replacement from scratch, all makes.',
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
        { label: 'Lost Car Keys Ashton' },
      ]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Same-Day Lost Key Replacement — Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Lost Car Keys —{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Lost your car keys and have no spare? We replace and programme car keys from scratch — same day, at your
            vehicle, for all makes and models. No recovery truck, no dealer booking, no waiting days for an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* COST COMPARISON */}
      <section className="section-padding bg-brand-light" aria-labelledby="cost-heading">
        <div className="container-max max-w-2xl">
          <h2 id="cost-heading" className="text-2xl font-black text-brand-navy mb-6 text-center">What Does &quot;All Keys Lost&quot; Replacement Cost?</h2>
          <div className="space-y-3">
            {[
              { label: 'Main Dealer — AKL', price: '£350–£600+', sub: 'Plus possible recovery cost', highlight: false },
              { label: 'Ashton Lock & Key — AKL', price: '£120–£280', sub: 'Mobile, same day, at your vehicle', highlight: true },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between p-4 rounded-2xl ${row.highlight ? 'bg-green-50 border-2 border-green-400' : 'bg-white border border-gray-200'}`}
              >
                <div>
                  <p className={`font-bold ${row.highlight ? 'text-green-800' : 'text-gray-700'}`}>
                    {row.highlight && <span className="text-green-600 mr-1">✓</span>}
                    {row.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.sub}</p>
                </div>
                <span className={`font-black text-lg ${row.highlight ? 'text-green-700' : 'text-gray-400 line-through'}`}>
                  {row.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">* Prices vary by make, model and key type. Exact quote given before attending.</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">

          <h2>What Is &quot;All Keys Lost&quot; Replacement?</h2>
          <p>
            When every key to a vehicle has been lost, the job is more involved than a standard key replacement.
            Because modern immobilisers register specific key transponder codes, simply cutting a new key isn&apos;t enough
            — the car&apos;s ECU needs to be accessed, the old key data wiped, and new keys programmed from scratch.
            This is called All Keys Lost (AKL) programming.
          </p>
          <p>
            It requires specialist diagnostic equipment and a higher level of technical expertise than a standard
            key replacement, which is why dealers charge so much for it. We carry AUTEL and Advanced Diagnostics
            equipment that covers AKL programming for the vast majority of makes and models on UK roads, and we
            bring it directly to wherever your vehicle is.
          </p>

          <h2>What We Need From You</h2>
          <p>
            To complete an AKL job, we need:
          </p>
          <ul>
            <li>Your V5C logbook (vehicle registration document) — to prove ownership</li>
            <li>You to be present at the vehicle throughout the job</li>
            <li>Your make, model, year, and VIN/registration — have this ready when you call so we can quote accurately</li>
          </ul>
          <p>
            We take vehicle ownership verification seriously. We will not programme keys if the V5C isn&apos;t present
            or if the person at the vehicle can&apos;t confirm ownership details.
          </p>

          <h2>Lost Keys vs Spare Key Replacement</h2>
          <p>
            If you&apos;ve lost one key but still have a working spare, the job is simpler and cheaper — we just need to
            cut and programme a new key alongside the existing one. This is a standard{' '}
            <Link href="/car-key-replacement-wigan">car key replacement</Link> job rather than a full AKL.
          </p>
          <p>
            Either way, it&apos;s worth sorting a spare at the same time. A{' '}
            <Link href="/spare-car-key-ashton">spare car key</Link> cut and programmed while we&apos;re on-site costs
            significantly less than a separate call-out later — and saves you from ever being in a full AKL
            situation again.
          </p>

          <h2>If Your Keys Were Stolen</h2>
          <p>
            Don&apos;t delay. A thief with your car keys who knows your registration can return for the vehicle at any time.
            Call us, and we will delete the stolen key codes and programme fresh ones the same day. In parallel:
          </p>
          <ul>
            <li>Report the theft to police and get a crime reference number</li>
            <li>Contact your insurer — stolen key replacement is often covered under comprehensive policies</li>
            <li>Consider a steering wheel lock or GPS tracker as an additional deterrent</li>
          </ul>
          <p>
            For more on the stolen key situation, see our{' '}
            <Link href="/blog/car-key-replacement-guide">complete car key replacement guide</Link>.
          </p>

          <h2>Service Area</h2>
          <p>
            We cover Ashton-in-Makerfield, Wigan, St Helens, Newton-le-Willows, Leigh, Golborne, Haydock, Hindley,
            and all surrounding WN postcodes. If you&apos;re unsure whether we cover your area, ring us — if we can get
            to you within a reasonable time, we will.
          </p>
          <p>
            For a full picture of our auto locksmith capabilities, visit our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith Ashton-in-Makerfield</Link> hub page.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        variant="orange"
        heading="Lost Your Car Keys?"
        subtext="Don't call the dealer. Call Ashton Lock & Key — same-day AKL replacement at your vehicle, cheaper and faster."
      />
      <FAQSection faqs={faqs} heading="Lost Car Keys FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement Wigan', desc: 'Have a spare? Replace your lost key alongside it.', href: '/car-key-replacement-wigan' },
              { title: 'Spare Car Key Ashton', desc: 'Get a spare cut now — prevent future lockouts.', href: '/spare-car-key-ashton' },
              { title: 'Transponder Key Programming', desc: 'Chip programming for all modern vehicles.', href: '/transponder-key-programming-ashton' },
              { title: 'Car Lockout Service', desc: 'Locked your keys inside the car? We open it.', href: '/car-lockout-service-ashton' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service overview.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Car Key Guide', desc: 'Full guide to car key types, costs and options.', href: '/blog/car-key-replacement-guide' },
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
