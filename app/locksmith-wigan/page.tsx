import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Locksmith Wigan | 24/7 Emergency & Key Cutting',
  description: 'Need a locksmith in Wigan? Ashton Lock & Key provides emergency lockouts, key cutting & car key replacement across Wigan. 24/7, fast response. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/locksmith-wigan`,
  },
}

const wiganAreas = [
  'Wigan Town Centre', 'Ince-in-Makerfield', 'Abram', 'Hindley', 'Hindley Green',
  'Aspull', 'Orrell', 'Billinge', 'Pemberton', 'Newtown',
  'Lamberhead Green', 'Kitt Green', 'Worsley Mesnes',
]

const faqs = [
  {
    question: 'Do you cover all of Wigan for locksmith work?',
    answer: 'Yes — we cover the whole of the Wigan Metropolitan Borough. We\'re based in Ashton-in-Makerfield, which puts us within 30–40 minutes of most Wigan locations. Wigan town centre, Leigh, Hindley, Aspull, Golborne, Orrell — all covered.',
  },
  {
    question: 'Is there a 24/7 locksmith available in Wigan?',
    answer: 'Yes. We\'re available 24 hours a day, 365 days a year — bank holidays and Christmas included. Call 07711 341668 at any hour and you\'ll get through to a locksmith, not an answering service.',
  },
  {
    question: 'How much does a locksmith charge in Wigan?',
    answer: 'Standard daytime lockouts from £60. Out-of-hours from £80. Key cutting from £3 per key. Car key replacement from £80 depending on the vehicle. All prices include VAT and are confirmed before we start anything.',
  },
]

export default function LocksmithWiganPage() {
  const pageUrl = `${BUSINESS.url}/locksmith-wigan`
  const schemas = [
    serviceSchema(
      'Locksmith Wigan',
      'Professional locksmith services across the Wigan borough — emergency lockouts, key cutting, car key replacement. Based in Ashton-in-Makerfield, covering all WN postcodes. Available 24/7.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Locksmith Wigan', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Locksmith Wigan | 24/7 Emergency & Key Cutting',
      description: 'Professional locksmith covering the whole Wigan borough. Emergency lockouts, key cutting & car keys. Fast local response.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Locksmith Wigan' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Serving All of Wigan Borough — 24/7
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Locksmith <span className="text-brand-orange">Wigan</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Locked out in Wigan at an awkward hour? Lost your car keys in Hindley? Need spare keys for a new employee?
            Ashton Lock & Key covers the whole of the Wigan borough — 24 hours a day, 7 days a week.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* AREAS */}
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

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/ashton-lock-key-locksmith-van-wigan.webp"
                alt="Ashton Lock & Key locksmith van serving Wigan borough — Ford Transit fully equipped for all locksmith services"
                width={600}
                height={450}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/locksmith-security-products-shop-ashton.webp"
                alt="Ashton Lock & Key security products and locksmith supplies — extensive stock available for Wigan area customers"
                width={600}
                height={450}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="prose-custom">
          <h2>Your Local Locksmith for the Whole Wigan Borough</h2>
          <p>
            Ashton Lock & Key is based in Ashton-in-Makerfield, just minutes from Wigan town centre. We cover the full
            Wigan Metropolitan Borough — from Wigan itself through to Leigh, Atherton, Golborne, Hindley, and Aspull.
            Most locations in the borough are within 30–40 minutes of us.
          </p>
          <p>
            We&apos;re a genuine local operation. When you call, you speak directly to a locksmith — not a call centre that
            subcontracts to whoever is available. That means honest pricing, accurate ETAs, and proper accountability.
          </p>

          <h2>Emergency Locksmith in Wigan — 24/7</h2>
          <p>
            Locked out in the middle of the night in Wigan? Snapped a key in the lock? We run a genuine
            round-the-clock <Link href="/emergency-locksmith-ashton-in-makerfield">emergency locksmith service</Link> with
            no extra charge just for calling outside office hours — only the standard out-of-hours rate applies, and
            you&apos;ll know it before we set off.
          </p>

          <h2>Key Cutting Across Wigan</h2>
          <p>
            Our mobile <Link href="/key-cutting-ashton">key cutting service</Link> covers the whole of the Wigan area.
            We carry blanks for Yale keys, Chubb mortice keys, euro cylinders, padlocks, and high-security locks.
            All cut on-site in minutes — no need to come to us.
          </p>

          <h2>Car Key Replacement in Wigan</h2>
          <p>
            Lost your car keys somewhere in Wigan? Our <Link href="/car-key-replacement-wigan">car key replacement service</Link>{' '}
            covers all makes and models. We come to wherever the vehicle is — home, work, roadside — and programme
            the replacement on the spot. Far cheaper than going to the dealer, and a lot less hassle.
          </p>

          <h2>Know Before You Call</h2>
          <p>
            If this is your first time using a locksmith, it helps to know what a fair price looks like. Our{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">UK locksmith price guide</Link> covers typical costs for
            every job — lockouts, key cutting, car keys — so you know what to expect and how to spot a rogue trader.
            Locked out right now and not sure what to do next? Read our guide on{' '}
            <Link href="/blog/what-to-do-if-locked-out">what to do when you&apos;re locked out</Link> before you do anything drastic.
          </p>

          <h2>Also Serving</h2>
          <p>
            Based in <Link href="/locksmith-ashton-in-makerfield">Ashton-in-Makerfield</Link>, we&apos;re perfectly placed
            to reach the whole borough quickly. If you&apos;re searching for a{' '}
            <Link href="/locksmith-near-me">locksmith near me</Link> anywhere in the WN postcode area, we&apos;re the closest
            genuinely local option — no national call centres, no subcontractors.
          </p>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" heading="Need a Locksmith in Wigan?" subtext="Call Ashton Lock & Key now. Fast response across the whole Wigan area, 24 hours a day." />
      <FAQSection faqs={faqs} heading="Wigan Locksmith FAQs" />
    </>
  )
}
