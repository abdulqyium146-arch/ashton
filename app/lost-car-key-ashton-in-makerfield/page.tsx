import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { AUTO_SERVICES, COVERAGE_AREAS, VEHICLE_BRANDS, BUSINESS_ADDRESS } from '@/lib/auto-locksmith-data'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Lost Car Keys Ashton-in-Makerfield | AKL Replacement',
  description: 'Lost all your car keys in Ashton-in-Makerfield? We carry out all-keys-lost (AKL) programming on-site. Have your V5C ready. Call 07711 341668 — mobile service to your vehicle.',
  alternates: { canonical: `${BUSINESS.url}/lost-car-key-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'What is all-keys-lost (AKL) car key programming?',
    answer: 'AKL is the process required when there are no working keys remaining for a vehicle. Unlike a standard key addition — where at least one working key is needed — AKL involves accessing the vehicle\'s ECU directly, erasing all previously registered key data, and programming brand new keys from scratch. It requires specialist diagnostic equipment and is more involved than a standard replacement.',
  },
  {
    question: 'Can you get into my car if I\'ve lost all my keys?',
    answer: 'Yes — we handle both parts of the job. First, we use non-destructive entry tools to open the vehicle. Then we carry out AKL programming to provide you with new working keys. The whole process is completed on-site at your vehicle in a single visit where possible.',
  },
  {
    question: 'What do I need to prove I own the vehicle?',
    answer: 'You\'ll need your V5C logbook (vehicle registration certificate), a valid photo ID such as a driving licence or passport, and proof of address. This is a legal safeguard that any reputable locksmith will insist on for AKL work — it protects you and ensures keys are only programmed to the rightful owner.',
  },
  {
    question: 'How long does all-keys-lost programming take?',
    answer: 'AKL jobs typically take between 1 and 2 hours on-site, depending on the vehicle make and model. Some European and luxury vehicles with additional security layers can take longer. We\'ll give you an honest time estimate when you call.',
  },
  {
    question: 'How much does lost car key replacement cost?',
    answer: 'AKL pricing is higher than standard key addition due to the additional diagnostic time and process complexity. Costs typically range from £180 to £350 depending on the vehicle. The price is confirmed over the phone before we attend — you won\'t be surprised on the day.',
  },
  {
    question: 'Do you cover lost car keys across the Wigan area?',
    answer: 'Yes. We carry out AKL programming across Ashton-in-Makerfield, Wigan, Golborne, Bryn, Haydock, Newton-le-Willows, Leigh, Garswood, Billinge, and surrounding areas. We come to wherever your vehicle is located.',
  },
]

export default function LostCarKeyAshtonPage() {
  const pageUrl = `${BUSINESS.url}/lost-car-key-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Lost Car Key Replacement Ashton-in-Makerfield', 'All-keys-lost (AKL) car key programming in Ashton-in-Makerfield. Mobile service to your vehicle — open, erase, and programme new keys on-site.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Lost Car Key Replacement', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Lost Car Keys Ashton-in-Makerfield | AKL Replacement', description: 'AKL car key programming in Ashton-in-Makerfield. Mobile, on-site, all makes and models.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Lost Car Key Replacement' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Lost All Keys? Mobile AKL Service — Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Lost Car Key Replacement in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Lost all your car keys? Ashton Lock &amp; Key provides all-keys-lost (AKL) programming across
            Ashton-in-Makerfield and Wigan. We come to your vehicle, gain non-destructive entry, erase all
            previously registered key data, and programme brand new keys — in a single on-site visit.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Have your V5C logbook and photo ID ready. AKL is a more specialist process than standard key
            addition, but we carry the diagnostic equipment required for all common UK makes and models.
            No recovery, no dealer waiting list — we come to you.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'All-Keys-Lost Specialists', 'Open + Programme in One Visit', 'All Common Makes', 'V5C Verification Required'].map(t => (
              <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay} — 24/7
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xl py-5 px-8">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* PRIMARY SERVICE */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>All-Keys-Lost Car Key Programming in Ashton-in-Makerfield</h2>
          <p>
            Losing your last working car key creates a more complex situation than simply needing a spare.
            Standard key addition — where a new key is programmed alongside an existing one — is not possible
            when there are no working keys remaining. Instead, the procedure requires direct access to the
            vehicle&apos;s ECU, erasure of all previously registered transponder data, and programming of
            entirely new keys from scratch. This is known as all-keys-lost (AKL) programming.
          </p>
          <h3>Step 1 — Non-Destructive Vehicle Entry</h3>
          <p>
            If you&apos;re locked out because your only key is lost, we first open the vehicle using professional
            non-destructive entry tools. This gives us access to the OBD port inside the car, which is required
            for the AKL programming process. No damage to glass, bodywork, or locking mechanisms.
          </p>
          <h3>Step 2 — ECU Access &amp; Key Data Erasure</h3>
          <p>
            Using AUTEL and Xhorse diagnostic equipment, we connect to the vehicle&apos;s ECU via the OBD port.
            The existing transponder data — representing all previously programmed keys — is erased. This is a
            critical security step: once complete, any lost or stolen keys are permanently deactivated and cannot
            start the engine.
          </p>
          <h3>Step 3 — New Key Programming</h3>
          <p>
            We then programme one or two new keys to the now-blank ECU. Each key is cut to match the vehicle&apos;s
            lock barrels, and the transponder chip is registered as the sole authorised key. If the vehicle uses
            a remote fob or smart key, the remote functions are also programmed in the same session.
          </p>
          <h3>What to Have Ready</h3>
          <p>
            Before we begin any AKL job, we require: your <strong>V5C logbook</strong> (vehicle registration
            certificate), <strong>photo ID</strong> (driving licence or passport), and <strong>proof of
            address</strong>. This is non-negotiable — it protects you, ensures we are programming keys to the
            rightful owner, and is standard practice for any reputable locksmith.
          </p>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="section-padding bg-brand-light" aria-labelledby="services-heading">
        <div className="container-max">
          <h2 id="services-heading" className="text-2xl font-black text-brand-navy mb-2 text-center">All Auto Locksmith Services in Ashton-in-Makerfield</h2>
          <p className="text-center text-gray-500 text-sm mb-8">We cover every automotive locksmith situation — one call, one local specialist</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTO_SERVICES.map(svc => (
              <Link key={svc.slug} href={svc.slug} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-orange transition-all group">
                <h3 className="font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="section-padding bg-white" aria-labelledby="vehicles-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">AKL Programming for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We carry out all-keys-lost programming on <strong>Vauxhall Corsa, Astra</strong>;{' '}
            <strong>Ford Focus, Fiesta, Kuga</strong>; <strong>VW Golf, Polo, Tiguan</strong>;{' '}
            <strong>BMW 3 Series, 5 Series, X5</strong>; <strong>Audi A3, A4, Q5</strong>;{' '}
            <strong>Mercedes C-Class, E-Class</strong>; <strong>Nissan Qashqai</strong>;{' '}
            <strong>Renault Clio, Megane</strong>; <strong>Kia Sportage</strong>; <strong>Skoda Octavia</strong>;{' '}
            and many more UK-common vehicles.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            Call us before assuming we can&apos;t help — our coverage for AKL is wider than most local locksmiths.{' '}
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Ring {BUSINESS.phoneDisplay}</a>
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Lost Car Keys — Ashton-in-Makerfield &amp; Surrounding Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Ashton Lock &amp; Key is based at{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>.
                We carry out AKL key replacement across our full service area — we come to wherever the
                vehicle is located.
              </p>
              <p>Our mobile AKL service covers:</p>
              <ul>
                {COVERAGE_AREAS.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4">Response Times</h3>
                {[
                  { area: 'Ashton-in-Makerfield (WN4)', time: '20–25 minutes' },
                  { area: 'Wigan Town Centre', time: '25–35 minutes' },
                  { area: 'Golborne / Bryn', time: '20–30 minutes' },
                  { area: 'Newton-le-Willows', time: '25–35 minutes' },
                  { area: 'Leigh / Atherton', time: '30–40 minutes' },
                  { area: 'Haydock / St Helens', time: '30–40 minutes' },
                ].map(r => (
                  <div key={r.area} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 text-sm">{r.area}</span>
                    <span className="text-brand-orange font-semibold text-sm">{r.time}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-400 mt-3">Times are estimates — traffic conditions may vary.</p>
              </div>
              <address className="not-italic mt-4 bg-white rounded-2xl p-5 border border-gray-100 text-sm text-gray-700">
                <strong className="text-brand-navy block mb-1">Ashton Lock &amp; Key</strong>
                2, Market Approach, 1 Gerard St<br />
                Ashton-in-Makerfield<br />
                Wigan WN4 9AL<br />
                United Kingdom<br />
                <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold mt-2 block hover:underline">{BUSINESS.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="orange" heading="Lost All Your Car Keys in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key — AKL specialists, mobile, same-day. Have your V5C ready before you call." />
      <FAQSection faqs={faqs} heading="Lost Car Key FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement', desc: 'Still have one key? Standard replacement is faster and cheaper.', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Key blade without chip programming? We handle that too.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Car Lockout Service', desc: 'Locked out? Non-destructive entry — 24/7.', href: '/car-lockout-ashton-in-makerfield' },
              { title: 'Car Rekeying', desc: 'Want a full security reset after a theft or sale?', href: '/car-rekeying-ashton-in-makerfield' },
              { title: 'Smart Key Replacement', desc: 'Lost a proximity or push-button start key?', href: '/smart-key-replacement-ashton-in-makerfield' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith hub — all vehicle situations.', href: '/auto-locksmith-ashton-in-makerfield' },
            ].map(item => (
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
