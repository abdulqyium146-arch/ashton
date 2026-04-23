import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { AUTO_SERVICES, COVERAGE_AREAS, VEHICLE_BRANDS } from '@/lib/auto-locksmith-data'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Key Fob Programming Ashton-in-Makerfield | Re-sync & Repair',
  description: 'Key fob not working in Ashton-in-Makerfield? We re-sync, repair, or replace remote fobs for all makes. Lost pairing, flat battery, or physical damage fixed on-site. Call 07711 341668.',
  alternates: { canonical: `${BUSINESS.url}/key-fob-programming-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'Why has my key fob stopped working?',
    answer: 'The most common causes are: flat battery (most likely if it stopped suddenly), lost pairing with the car (can happen after battery disconnection or certain ECU resets), physical damage to the fob circuit board, or worn buttons. We diagnose the root cause before recommending repair or replacement.',
  },
  {
    question: 'Can you re-sync a key fob that has lost pairing?',
    answer: 'Yes. If the fob has lost its pairing with the vehicle — but the internal circuit and transponder are intact — re-synchronisation is a straightforward process. We connect to the car via OBD diagnostics and re-register the fob. This is considerably cheaper than a full fob replacement.',
  },
  {
    question: 'My key fob works intermittently — is it worth repairing?',
    answer: 'Intermittent fob issues are often caused by worn button contacts or a hairline crack in the circuit board — both of which are repairable. We assess the fob and give you an honest recommendation: repair if cost-effective, replace if not. We won\'t charge for a replacement if a £20 repair will fix it.',
  },
  {
    question: 'Can I just replace the battery myself?',
    answer: 'Yes — a flat battery is the first thing to try, and it\'s a simple DIY fix for most fobs. The battery type is usually CR2032 or CR2025, available at any supermarket. If replacing the battery doesn\'t resolve the issue, the fob will need professional diagnosis.',
  },
  {
    question: 'Do you programme key fobs for all car makes?',
    answer: 'We programme and re-sync fobs for Vauxhall, Ford, VW, BMW, Audi, Mercedes-Benz, Toyota, Nissan, Renault, Peugeot, Kia, Hyundai, Honda, Skoda, Seat, Citroën, Fiat, and many more. Call us with your make and model to confirm.',
  },
  {
    question: 'How much does key fob programming cost?',
    answer: 'Re-synchronisation starts from £50. A full fob replacement (supply and programme) starts from £100, depending on make and model. Pricing is confirmed before we attend.',
  },
]

export default function KeyFobProgrammingAshtonPage() {
  const pageUrl = `${BUSINESS.url}/key-fob-programming-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Key Fob Programming Ashton-in-Makerfield', 'Remote key fob programming, re-sync, and repair in Ashton-in-Makerfield. All makes — diagnosed and fixed on-site.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Key Fob Programming', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Key Fob Programming Ashton-in-Makerfield | Re-sync & Repair', description: 'Key fob programming, re-sync and repair in Ashton-in-Makerfield. All makes — on-site service.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Key Fob Programming' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Key Fob Programming &amp; Repair — Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Key Fob Programming in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Remote key fob not working? Ashton Lock &amp; Key diagnoses and resolves key fob issues
            across Ashton-in-Makerfield and Wigan — re-syncing lost pairing, repairing damaged circuits,
            and supplying programmed replacement fobs for all common UK makes.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Before recommending a replacement, we always assess whether a repair or re-sync will solve
            the problem — saving you the cost of a new fob when only the pairing or battery contact
            needs attention.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'Diagnose Before Replacing', 'Re-sync & Repair', 'All UK Makes', 'On-Site Service'].map(t => (
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
          <h2>Key Fob Programming, Re-sync &amp; Repair in Ashton-in-Makerfield</h2>
          <p>
            A remote key fob that has stopped working is frustrating but rarely requires an expensive
            replacement. In many cases, the problem is a flat battery, a lost pairing signal, or a
            minor fault in the fob&apos;s circuit board — all of which are fixable without buying a
            new fob. Ashton Lock &amp; Key assesses the root cause before suggesting any path forward,
            and we always choose the most cost-effective solution that leaves you with a reliably
            working fob.
          </p>
          <h3>Diagnosis — What We Check</h3>
          <p>
            We test the battery voltage first, then check the transponder chip using a diagnostic reader.
            If the chip is functional and the vehicle&apos;s receiver is recognising the fob (even
            intermittently), the issue is almost certainly in the remote circuit or the button contacts
            — both repairable. If the chip isn&apos;t registering at all, we determine whether it&apos;s
            a lost pairing or a hardware failure.
          </p>
          <h3>Re-synchronisation</h3>
          <p>
            A fob that has lost its pairing with the car can be re-synchronised via OBD diagnostics.
            This commonly happens after a main battery disconnection, an ECU reset, or occasionally
            after another key was programmed by an inexperienced technician. Re-sync is quick —
            typically 15–20 minutes — and significantly cheaper than a full replacement.
          </p>
          <h3>Fob Repair</h3>
          <p>
            Physical damage — cracked housing, worn button contacts, broken circuit traces — can
            often be repaired rather than replaced. We carry fob shells and replacement button
            membranes for common makes, and we can transfer a working circuit board into a new housing.
            If the circuit board itself is beyond repair, we proceed to full fob replacement.
          </p>
          <h3>Full Fob Replacement</h3>
          <p>
            Where repair isn&apos;t viable, we supply and programme a replacement fob. We carry OEM-spec
            fob blanks for Ford, Vauxhall, VW, BMW, Audi, Mercedes-Benz, Renault, Peugeot, Nissan,
            Toyota, Kia, and other common UK makes. The new fob is programmed to your vehicle and tested
            before we leave — full remote and transponder function confirmed.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Key Fob Programming for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We programme and repair fobs for <strong>Vauxhall, Ford, VW, BMW, Audi, Mercedes-Benz,
            Toyota, Nissan, Renault, Peugeot, Kia, Hyundai, Honda, Skoda, Seat, Citroën, Fiat</strong>,
            and many more. Call to confirm your specific model.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> — we&apos;ll diagnose your fob issue over the phone where possible.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Key Fob Repair Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Ashton Lock &amp; Key operates from{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>.
                We come to your vehicle for all fob work — no need to visit a dealer or post your key away.
              </p>
              <p>Our mobile fob service covers:</p>
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

      <CTASection variant="orange" heading="Key Fob Not Working in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key — we diagnose and fix fobs on-site. Re-sync, repair, or replacement." />
      <FAQSection faqs={faqs} heading="Key Fob Programming FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Remote Key Repair', desc: 'Deeper assessment of remote circuit failures.', href: '/remote-key-repair-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Full transponder chip programming for the immobiliser.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Smart Key Replacement', desc: 'Proximity and push-button start key programming.', href: '/smart-key-replacement-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Need a complete replacement key and fob?', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Lost Car Key Replacement', desc: 'Lost the fob entirely? We do AKL programming.', href: '/lost-car-key-ashton-in-makerfield' },
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
