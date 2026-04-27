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
  title: 'Remote Key Repair Ashton-in-Makerfield | Diagnose First',
  description: 'Remote car key not working in Ashton-in-Makerfield? We diagnose root cause before replacing â€” re-sync, circuit repair, or full replacement. Call 07309 903243.',
  alternates: { canonical: `${BUSINESS.url}/remote-key-repair-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'What\'s the difference between remote key repair and key fob programming?',
    answer: 'Key fob programming focuses on the pairing and synchronisation between fob and vehicle. Remote key repair is a deeper assessment of the physical fob itself â€” the remote circuit board, button contacts, antenna, and housing. We assess both aspects: sometimes the fob is electrically fine but has lost pairing; other times the circuit has failed and needs physical repair or replacement.',
  },
  {
    question: 'Can a remote key be repaired rather than replaced?',
    answer: 'Often yes. The transponder chip and key blade are frequently in perfect condition while only the remote circuit has failed. In these cases we can repair the remote component â€” replacing button membranes, re-soldering broken circuit traces, or installing a new remote circuit board into the existing housing â€” which is considerably cheaper than a full key replacement.',
  },
  {
    question: 'My remote key locks the car but won\'t unlock it â€” is that repairable?',
    answer: 'Yes, this is a classic partial remote failure â€” one button contact is worn while the other still works. It\'s a straightforward repair involving replacement of the button membrane pad. The fix typically takes 20â€“30 minutes and costs a fraction of a new key.',
  },
  {
    question: 'Will a remote key repair affect the transponder?',
    answer: 'No. The remote (RF) circuit and the transponder chip are separate components within the same key. Repairing the remote circuit does not affect the transponder programming â€” the key will continue to start the engine as before.',
  },
  {
    question: 'How long does remote key repair take?',
    answer: 'A simple button contact or re-sync job takes 20â€“40 minutes. Circuit board replacement takes 45â€“60 minutes. If the assessment reveals a full replacement is necessary, a standard transponder key replacement takes a further 30â€“45 minutes for programming.',
  },
  {
    question: 'How much does remote key repair cost in Ashton-in-Makerfield?',
    answer: 'Diagnosis is included in the call-out. Simple repairs (re-sync, button contacts) start from Â£50. Circuit board replacement starts from Â£80. If full replacement is required after assessment, that\'s priced separately. Full pricing confirmed before any work starts.',
  },
]

export default function RemoteKeyRepairAshtonPage() {
  const pageUrl = `${BUSINESS.url}/remote-key-repair-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Remote Key Repair Ashton-in-Makerfield', 'Remote car key diagnosis and repair in Ashton-in-Makerfield. We assess root cause before replacing â€” re-sync, circuit repair, or full replacement only when necessary.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Remote Key Repair', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Remote Key Repair Ashton-in-Makerfield | Diagnose First', description: 'Remote car key repair in Ashton-in-Makerfield. Diagnose before replacing â€” re-sync, circuit repair, or replacement.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Remote Key Repair' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Remote Key Repair â€” Diagnose Before Replacing â€” Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Remote Key Repair in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Remote key not working? Before paying for a full replacement, have it properly assessed.
            Ashton Lock &amp; Key diagnoses the root cause of remote key failures in Ashton-in-Makerfield
            and Wigan â€” many faults are repairable at a fraction of replacement cost.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            The transponder chip and key blade are often perfectly functional when only the remote circuit
            has failed. We identify whether re-sync, circuit repair, or genuine replacement is the right
            solution â€” and we only recommend replacement when repair isn&apos;t viable.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'Diagnose Before Replacing', 'Re-sync & Circuit Repair', 'All Common Makes', 'Fixed Price Upfront'].map(t => (
              <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay} â€” 24/7
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
          <h2>Remote Car Key Diagnosis &amp; Repair in Ashton-in-Makerfield</h2>
          <p>
            When a remote key stops working, the instinctive response is to assume a full replacement
            is needed. In practice, the majority of remote key failures in Ashton-in-Makerfield are
            caused by issues that don&apos;t require a new key: a flat or failing battery, a lost RF
            pairing, worn button contacts, or minor circuit board damage. A proper diagnosis before
            any repair or replacement saves time and money.
          </p>
          <h3>What We Assess</h3>
          <p>
            Our assessment covers the complete key: battery voltage, transponder chip function,
            RF transmission strength, button contact condition, and circuit board integrity.
            We also check the vehicle side â€” in some cases a failed antenna or receiver module
            inside the car is mimicking a key fault. Identifying this early prevents unnecessary
            key replacement.
          </p>
          <h3>Re-synchronisation</h3>
          <p>
            If the key&apos;s transponder is functional and the circuit is intact, but the RF pairing
            has been lost (common after battery disconnection, ECU work, or an accidental lock-out
            sequence), re-sync is the correct fix. We connect to the vehicle via OBD diagnostics
            and re-register the remote. Most re-syncs are completed in 20â€“30 minutes.
          </p>
          <h3>Circuit Board Repair</h3>
          <p>
            Physical damage to the remote circuit â€” cracked solder joints, broken antenna trace,
            or failed RF chip â€” is often repairable without replacing the whole key. We carry
            replacement circuit boards and button membranes for common makes. The working transponder
            is transferred to the repaired or replacement circuit and tested before we leave.
          </p>
          <h3>When Replacement Is Necessary</h3>
          <p>
            If the assessment reveals the key is beyond economic repair â€” typically when the
            transponder chip itself has failed or the damage is too extensive â€” we proceed to
            full replacement. We supply and programme a replacement key on the same visit where
            stock is available, so you leave with a working key regardless of the outcome.
          </p>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="section-padding bg-brand-light" aria-labelledby="services-heading">
        <div className="container-max">
          <h2 id="services-heading" className="text-2xl font-black text-brand-navy mb-2 text-center">All Auto Locksmith Services in Ashton-in-Makerfield</h2>
          <p className="text-center text-gray-500 text-sm mb-8">We cover every automotive locksmith situation â€” one call, one local specialist</p>
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Remote Key Repair for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We assess and repair remote keys for <strong>Ford, Vauxhall, VW, Audi, BMW,
            Mercedes-Benz, Toyota, Nissan, Renault, Peugeot, Kia, Hyundai, Honda, Skoda, Seat</strong>,
            and all other common UK makes. Call with your make and model to confirm.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> â€” we can often diagnose the fault over the phone before attending.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Remote Key Repair Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Based at <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>,
                we provide mobile remote key repair across Ashton-in-Makerfield and the surrounding area.
                We come to your vehicle â€” no need to travel.
              </p>
              <p>Coverage includes:</p>
              <ul>
                {COVERAGE_AREAS.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4">Response Times</h3>
                {[
                  { area: 'Ashton-in-Makerfield (WN4)', time: '20â€“25 minutes' },
                  { area: 'Wigan Town Centre', time: '25â€“35 minutes' },
                  { area: 'Golborne / Bryn', time: '20â€“30 minutes' },
                  { area: 'Newton-le-Willows', time: '25â€“35 minutes' },
                  { area: 'Leigh / Atherton', time: '30â€“40 minutes' },
                  { area: 'Haydock / St Helens', time: '30â€“40 minutes' },
                ].map(r => (
                  <div key={r.area} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 text-sm">{r.area}</span>
                    <span className="text-brand-orange font-semibold text-sm">{r.time}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-400 mt-3">Times are estimates â€” traffic conditions may vary.</p>
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

      <CTASection variant="orange" heading="Remote Key Not Working in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key â€” we diagnose first and only replace when necessary. Fair, transparent pricing." />
      <FAQSection faqs={faqs} heading="Remote Key Repair FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Key Fob Programming', desc: 'Fob programming, re-sync, and pairing.', href: '/key-fob-programming-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Full key replacement if repair isn\'t viable.', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Chip programming for the immobiliser system.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Smart Key Replacement', desc: 'Proximity key and push-button start systems.', href: '/smart-key-replacement-ashton-in-makerfield' },
              { title: 'Lost Car Key Replacement', desc: 'Lost your remote key entirely? AKL available.', href: '/lost-car-key-ashton-in-makerfield' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith hub â€” all vehicle situations.', href: '/auto-locksmith-ashton-in-makerfield' },
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
