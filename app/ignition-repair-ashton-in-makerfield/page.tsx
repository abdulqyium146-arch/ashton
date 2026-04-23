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
  title: 'Ignition Repair & Replacement Ashton-in-Makerfield',
  description: 'Stiff ignition, key won\'t turn, or barrel failed in Ashton-in-Makerfield? We diagnose and repair ignition barrels on-site. Re-pinned to your existing key where possible. Call 07711 341668.',
  alternates: { canonical: `${BUSINESS.url}/ignition-repair-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'Why won\'t my key turn in the ignition?',
    answer: 'The most common causes are: steering wheel lock engaged (turn the wheel slightly while turning the key), a worn key blade that no longer moves the wafers correctly, a worn or sticky ignition barrel, or in some cases a faulty immobiliser signal. We diagnose the root cause before recommending any repair.',
  },
  {
    question: 'Can you repair the ignition without replacing it?',
    answer: 'Often yes. If the barrel has wear in specific wafers or has become stiff through debris or corrosion, it can sometimes be cleaned, lubricated, or have individual pins replaced. A full barrel replacement is only necessary when the mechanism has failed beyond repair. We always explore the most cost-effective route first.',
  },
  {
    question: 'If you replace the ignition barrel, will I need a new key?',
    answer: 'Not necessarily. Where possible, we re-pin the new barrel to work with your existing key — this avoids the cost of key cutting and transponder programming. If the barrel can\'t be re-pinned to your key profile, we cut and programme a new key on the same visit.',
  },
  {
    question: 'How long does ignition repair or replacement take?',
    answer: 'A straightforward ignition barrel replacement on a common UK vehicle typically takes 1–1.5 hours on-site. Diagnosis adds 15–20 minutes at the start of the job. If a new key needs to be cut and programmed, allow a total of 1.5–2 hours.',
  },
  {
    question: 'Can you fix an ignition on any make of car?',
    answer: 'We cover all common UK makes including Ford, Vauxhall, VW, Audi, BMW, Mercedes-Benz, Renault, Peugeot, Citroën, Nissan, Toyota, Kia, and more. For some older or rarer vehicles we may need to source a specific barrel — call us and we\'ll advise on availability and lead time.',
  },
  {
    question: 'How much does ignition repair cost in Ashton-in-Makerfield?',
    answer: 'Ignition diagnosis and repair starts from £80. Full barrel replacement starts from £120, depending on the vehicle and whether re-pinning or key cutting is required. The full price is quoted before work begins.',
  },
]

export default function IgnitionRepairAshtonPage() {
  const pageUrl = `${BUSINESS.url}/ignition-repair-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Ignition Repair & Replacement Ashton-in-Makerfield', 'Ignition barrel diagnosis, repair, and replacement in Ashton-in-Makerfield. Re-pinned to your existing key where possible — mobile, on-site service.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Ignition Repair & Replacement', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Ignition Repair & Replacement Ashton-in-Makerfield', description: 'Ignition barrel repair and replacement in Ashton-in-Makerfield. Mobile, on-site, re-pinned to existing key where possible.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Ignition Repair & Replacement' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Ignition Repair &amp; Replacement — Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ignition Repair &amp; Replacement in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Stiff ignition? Key won&apos;t turn? Barrel completely seized? Ashton Lock &amp; Key diagnoses
            and repairs vehicle ignition systems on-site across Ashton-in-Makerfield and Wigan. We always
            explore repair before replacement — and where a new barrel is required, we re-pin it to your
            existing key wherever possible.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Don&apos;t pay dealer prices for ignition work. Our mobile service brings the repair to your
            vehicle — no recovery required. Most ignition jobs are completed within 1.5 hours,
            with a full price confirmed before we begin.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'Diagnose Before Replacing', 'Re-Pinned to Existing Key', 'All Common Makes', 'Fixed Price Upfront'].map(t => (
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
          <h2>Ignition Barrel Diagnosis, Repair &amp; Replacement in Ashton-in-Makerfield</h2>
          <p>
            An ignition that won&apos;t turn or feels stiff is a common fault across all vehicle ages and
            makes. The causes range from a simple steering lock engagement — which is resolved in seconds —
            to a worn barrel that has finally failed after years of use. Ashton Lock &amp; Key diagnoses
            the root cause before recommending any work, ensuring you don&apos;t pay for a replacement when
            a repair will do.
          </p>
          <h3>Ignition Diagnosis</h3>
          <p>
            We start every ignition job with a diagnosis. We test the key condition, check for steering
            lock, inspect the barrel for wear or debris, and in cases of total failure, test for immobiliser
            or electrical faults that may be contributing to the problem. You&apos;ll receive a clear
            explanation and a fixed price before any work begins.
          </p>
          <h3>Ignition Barrel Repair</h3>
          <p>
            In some cases — particularly where the barrel is stiff due to debris, a worn spring, or
            minor wafer damage — repair is possible without full replacement. We clean, lubricate, and
            where applicable replace individual components to restore normal operation. This is always
            the preferred route where the barrel is otherwise sound.
          </p>
          <h3>Ignition Barrel Replacement</h3>
          <p>
            Where the barrel has failed completely or is beyond economic repair, we supply and fit a
            replacement. Our priority is always to re-pin the new barrel to your existing key — this
            avoids the inconvenience and cost of cutting and programming a new transponder key. For
            most Ford, Vauxhall, VW, Peugeot, Renault, and Nissan models this is straightforward.
          </p>
          <h3>Broken Key in Ignition</h3>
          <p>
            If your key has snapped inside the ignition barrel, we handle extraction first —
            see our <Link href="/broken-key-extraction-ashton-in-makerfield" className="text-brand-orange hover:underline">broken key extraction service</Link>.
            Once the fragment is removed, we assess the barrel condition and proceed with repair or
            replacement as required, cutting and programming a new key on the same visit.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Ignition Repair for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We repair and replace ignition barrels on <strong>Ford Focus, Fiesta, Mondeo</strong>;{' '}
            <strong>Vauxhall Corsa, Astra, Insignia</strong>; <strong>VW Golf, Polo, Passat</strong>;{' '}
            <strong>Audi A3, A4, A6</strong>; <strong>BMW 3 Series, 5 Series</strong>;{' '}
            <strong>Renault Clio, Megane</strong>; <strong>Peugeot 208, 308</strong>;{' '}
            <strong>Nissan Qashqai, Juke</strong>; <strong>Kia Sportage</strong>; and many more.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> — we&apos;ll confirm coverage and quote before we attend.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Ignition Repair Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Based at <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>,
                we provide mobile ignition repair and replacement across our full service area.
                We come to your vehicle — no recovery needed.
              </p>
              <p>Coverage areas include:</p>
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

      <CTASection variant="orange" heading="Ignition Problem in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key — we diagnose and repair on-site, re-pinned to your existing key where possible." />
      <FAQSection faqs={faqs} heading="Ignition Repair FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Broken Key Extraction', desc: 'Key snapped in the ignition? We extract it first.', href: '/broken-key-extraction-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Need a new key after ignition repair?', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'New ignition key needs chip programming.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Car Lockout Service', desc: 'Can\'t get in because the ignition key is broken?', href: '/car-lockout-ashton-in-makerfield' },
              { title: 'Emergency Auto Locksmith', desc: '24/7 emergency auto locksmith — any situation.', href: '/emergency-auto-locksmith-ashton-in-makerfield' },
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
