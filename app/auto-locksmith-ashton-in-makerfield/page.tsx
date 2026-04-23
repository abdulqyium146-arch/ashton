import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Auto Locksmith Ashton-in-Makerfield | 24/7 Car Lockout & Key Replacement',
  description: 'Auto locksmith in Ashton-in-Makerfield available 24/7. Car lockouts, car key replacement, transponder programming & key fob repair. No call-out fee. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield`,
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
    question: 'What does an auto locksmith do?',
    answer: 'An auto locksmith specialises in vehicle security — unlocking cars without damaging them, replacing and programming car keys (including transponder and smart keys), repairing or replacing ignitions, and extracting broken keys from locks. We carry specialist diagnostic equipment to programme keys to your vehicle\'s immobiliser on the spot.',
  },
  {
    question: 'How fast can you get to me in Ashton-in-Makerfield?',
    answer: 'We\'re based in Ashton-in-Makerfield, so for most WN4 postcodes we\'re with you in 20–30 minutes. For surrounding areas in the Wigan borough, typical response time is 30–45 minutes. We operate 24 hours a day, every day of the year.',
  },
  {
    question: 'Is it cheaper to use an auto locksmith or the dealer?',
    answer: 'An auto locksmith is almost always significantly cheaper. Main dealers typically charge £200–£500+ for car key replacement and require you to book in, often days in advance. We offer mobile same-day service at typically 40–60% less, with no recovery truck required.',
  },
  {
    question: 'Can you help if I\'ve locked my keys in my car?',
    answer: 'Yes — this is one of our most common call-outs. We open vehicles without causing any damage to the bodywork, glass, or locking mechanism. We use professional non-destructive entry tools and can usually have you back in your car within minutes of arriving.',
  },
]

const brands = [
  'Ford', 'Vauxhall', 'Volkswagen', 'Audi', 'BMW', 'Mercedes-Benz',
  'Toyota', 'Renault', 'Peugeot', 'Citroën', 'Nissan', 'Honda',
  'Kia', 'Hyundai', 'Seat', 'Skoda', 'Fiat', 'Volvo',
  'Land Rover', 'Range Rover', 'Mazda', 'Mitsubishi', 'Jeep', 'Jaguar',
]

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: 'Car Key Replacement',
    desc: 'Lost, broken, or stolen — all key types cut and programmed on-site.',
    href: '/car-key-replacement-wigan',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5-1.5M6 16H3" />
      </svg>
    ),
    title: 'Car Lockout Service',
    desc: 'Locked out of your car? Non-destructive entry — no damage, fast access.',
    href: '/car-lockout-service-ashton',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'Transponder & Smart Key Programming',
    desc: 'Chip key and proximity key programming for modern vehicles.',
    href: '/transponder-key-programming-ashton',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2v-2H6v2a2 2 0 002 2zM12 3a6 6 0 016 6v4H6V9a6 6 0 016-6z" />
      </svg>
    ),
    title: 'Key Fob Replacement & Repair',
    desc: 'Fob stopped working? We re-sync, repair, or supply a new one.',
    href: '/car-key-fob-replacement-ashton',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Ignition Repair & Replacement',
    desc: 'Key stuck or won\'t turn? We repair and replace ignition barrels.',
    href: '/car-ignition-repair-ashton',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Broken Key Extraction',
    desc: 'Key snapped in the lock or ignition? Extracted without damage.',
    href: '/broken-car-key-extraction-ashton',
  },
]

export default function AutoLocksmithAshtonPage() {
  const pageUrl = `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield`
  const schemas = [
    serviceSchema(
      'Auto Locksmith Ashton-in-Makerfield',
      'Professional auto locksmith service in Ashton-in-Makerfield covering car lockouts, car key replacement, transponder programming, key fob repair, and ignition work. Available 24/7 across Wigan.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith Ashton-in-Makerfield', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Auto Locksmith Ashton-in-Makerfield | 24/7 Car Lockout & Key Replacement',
      description: '24/7 auto locksmith in Ashton-in-Makerfield. Car lockouts, key replacement and transponder programming.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Auto Locksmith Ashton-in-Makerfield' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Available Now — 24/7 Auto Locksmith in Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Auto Locksmith{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Locked out of your car? Lost your car keys? Need a transponder key programmed? Ashton Lock &amp; Key is
            your local auto locksmith in Ashton-in-Makerfield — available 24 hours a day, with no call-out fee and
            upfront fixed prices before we leave the yard.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', '24/7 Service', '30-Min Response', 'Non-Destructive Entry', 'All Makes & Models'].map((t) => (
              <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xl py-5 px-8">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding bg-brand-light" aria-labelledby="services-heading">
        <div className="container-max">
          <h2 id="services-heading" className="text-2xl font-black text-brand-navy mb-2 text-center">Auto Locksmith Services</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Everything you need for your vehicle — one call, one local expert</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-orange transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-3">
                  {svc.icon}
                </div>
                <h3 className="font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">{svc.title}</h3>
                <p className="text-gray-500 text-sm">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">

          <h2>What Does an Auto Locksmith Do?</h2>
          <p>
            An auto locksmith is a specialist who works exclusively on vehicle security — not just cutting keys, but
            diagnosing and resolving any situation where you can&apos;t get into or start your car. The most common
            call-outs we handle in Ashton-in-Makerfield are car lockouts (keys locked inside the vehicle), lost or
            broken car keys that need to be replaced and programmed, and key fobs that have stopped working.
          </p>
          <p>
            Unlike a general locksmith, an auto locksmith carries diagnostic equipment that communicates with a
            vehicle&apos;s ECU. This is what allows us to programme a new transponder or smart key to your car&apos;s
            immobiliser — without it, the engine simply won&apos;t start even if the key physically turns.
          </p>

          <h2>Car Lockout Service — Ashton-in-Makerfield</h2>
          <p>
            Locking your keys in your car is more common than people realise, and it&apos;s one of the most stressful
            situations to be in — especially at night, in a car park, or in the middle of a working day. Our{' '}
            <Link href="/car-lockout-service-ashton">car lockout service in Ashton-in-Makerfield</Link> uses professional
            non-destructive entry tools to open your vehicle without a single scratch to the paintwork, glass, or
            door seals.
          </p>
          <p>
            We don&apos;t drill, pry, or break. Modern non-destructive entry techniques mean we can open the vast
            majority of vehicles — including modern central-locking systems — cleanly and quickly. You&apos;d never
            know we&apos;d been there.
          </p>

          <h2>Car Key Replacement &amp; Programming</h2>
          <p>
            Whether you&apos;ve lost one key, lost all keys, or your key has snapped, our{' '}
            <Link href="/car-key-replacement-wigan">car key replacement service</Link> covers all situations. We cut
            and programme replacement keys on-site — no recovery truck, no booking in, no waiting days for a dealer
            appointment.
          </p>
          <p>
            For &quot;all keys lost&quot; situations — where there are no working keys left — we use specialist diagnostic
            equipment to erase the existing key data from your vehicle&apos;s ECU and programme brand new keys from
            scratch. This is a significantly more involved process than replacing a single key, but we offer it at a
            fraction of the price most dealers charge.
          </p>
          <p>
            If you want to understand the cost before calling, our{' '}
            <Link href="/blog/car-key-replacement-guide">complete car key replacement guide</Link> covers all key
            types, the dealer vs locksmith comparison, and what to expect from each type of job.
          </p>

          <h2>Transponder Keys &amp; Smart Key Programming</h2>
          <p>
            Virtually every car built after 1995 uses a transponder key — a key with a microchip in the plastic head
            that communicates with the vehicle&apos;s immobiliser. If the chip isn&apos;t programmed, the engine won&apos;t
            start. Modern vehicles increasingly use smart keys (proximity keys) that allow keyless entry and
            push-button starts.
          </p>
          <p>
            Our <Link href="/transponder-key-programming-ashton">transponder and smart key programming service</Link> in
            Ashton-in-Makerfield covers both types. We carry AUTEL, Xhorse, and Advanced Diagnostics programming
            equipment covering the vast majority of makes and models on UK roads.
          </p>

          <h2>Car Makes We Cover</h2>
          <p>
            We cover almost every make sold in the UK. If your vehicle isn&apos;t listed below, call us — we almost
            certainly cover it.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-padding bg-brand-light" aria-labelledby="brands-heading">
        <div className="container-max">
          <h2 id="brands-heading" className="sr-only">Car Makes Covered</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((brand) => (
              <span key={brand} className="bg-white text-brand-navy font-semibold text-sm px-4 py-2 rounded-full border border-gray-200 hover:border-brand-orange transition-colors">
                {brand}
              </span>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-500 text-sm">
            Don&apos;t see your make?{' '}
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call us</a>{' '}
            — we likely cover it.
          </p>
        </div>
      </section>

      {/* WHY US + SERVICE AREA */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">

          <h2>Why Choose Ashton Lock &amp; Key for Auto Locksmith Work?</h2>
          <p>
            There are plenty of national call centre operations that advertise in Ashton-in-Makerfield — they take your
            call, then subcontract to whoever is available. You might wait two hours, and you won&apos;t always get a
            fair price.
          </p>
          <p>
            When you ring Ashton Lock &amp; Key, you speak directly to the locksmith who&apos;s coming out to you. That means
            an accurate ETA, a fixed price given upfront, and someone who is personally accountable for the quality of
            the work. We&apos;ve built our reputation on Google Reviews from real local customers over 25+ years of
            trading in this area.
          </p>
          <ul>
            <li>Fixed prices quoted before we set off — no surprises on the bill</li>
            <li>Speak directly to the locksmith, not a call centre</li>
            <li>Fully insured, with 25+ years of local experience</li>
            <li>4.9★ rating from 127+ genuine Google Reviews</li>
            <li>No call-out fee — you only pay when the job is done</li>
          </ul>

          <h2>Service Area — Ashton-in-Makerfield &amp; Beyond</h2>
          <p>
            Our auto locksmith service is based in Ashton-in-Makerfield and covers the full WN postcode area and
            beyond. We regularly attend call-outs in{' '}
            <Link href="/auto-locksmith-wigan">Wigan</Link>,{' '}
            <Link href="/auto-locksmith-leigh">Leigh</Link>,{' '}
            <Link href="/auto-locksmith-st-helens">St Helens</Link>,{' '}
            <Link href="/auto-locksmith-newton-le-willows">Newton-le-Willows</Link>,
            Golborne, Haydock, Billinge, and across the wider North West.
          </p>
          <p>
            Need a residential locksmith rather than auto?{' '}
            <Link href="/emergency-locksmith-ashton-in-makerfield">Our 24/7 emergency locksmith service</Link> covers
            house lockouts, lock repairs, and cylinder replacements across the same area.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        variant="orange"
        heading="Need an Auto Locksmith in Ashton-in-Makerfield?"
        subtext="Call Ashton Lock & Key — available 24/7, no call-out fee, fixed price given before we set off."
      />
      <FAQSection faqs={faqs} heading="Auto Locksmith FAQs" />

      {/* RELATED SERVICES */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Lockout Service', desc: 'Locked keys in car? Non-destructive entry.', href: '/car-lockout-service-ashton' },
              { title: 'Car Key Replacement Wigan', desc: 'All makes, programmed on-site. Cheaper than dealers.', href: '/car-key-replacement-wigan' },
              { title: 'Lost Car Keys Ashton', desc: 'Lost all your keys? We start from scratch.', href: '/lost-car-keys-ashton' },
              { title: 'Transponder Key Programming', desc: 'Chip key programming for modern vehicles.', href: '/transponder-key-programming-ashton' },
              { title: 'Emergency Locksmith', desc: '24/7 house lockouts and lock repairs.', href: '/emergency-locksmith-ashton-in-makerfield' },
              { title: 'Locksmith Ashton-in-Makerfield', desc: 'Full locksmith service for home & business.', href: '/locksmith-ashton-in-makerfield' },
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
