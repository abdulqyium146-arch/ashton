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
  title: 'Broken Key Extraction Ashton-in-Makerfield | Mobile',
  description: 'Key snapped in door lock or ignition in Ashton-in-Makerfield? We extract broken key fragments without damaging the barrel, then cut a replacement on the same visit. Call 07711 341668.',
  alternates: { canonical: `${BUSINESS.url}/broken-key-extraction-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'Can you extract a broken key without replacing the whole lock barrel?',
    answer: 'In the majority of cases, yes. Our extraction tools remove the broken key fragment cleanly without damaging the internal pins or wafers of the barrel. Once the fragment is out, the barrel typically works normally with a new cut key. Barrel replacement is only recommended if there was pre-existing wear or damage.',
  },
  {
    question: 'Can you extract a key broken in the ignition?',
    answer: 'Yes. Ignition extraction is slightly more involved than door lock extraction due to the barrel position and steering column, but we carry the correct tools for both. If the ignition barrel itself has been damaged by the break, we can assess and advise on repair or replacement on the same visit.',
  },
  {
    question: 'Can you cut a replacement key after extracting the broken piece?',
    answer: 'Yes — this is the most common scenario. Once the broken fragment is removed, we cut a new key to the barrel profile and, if it\'s a transponder or remote key, programme it to the vehicle on the same visit. You leave with a fully working key in most cases.',
  },
  {
    question: 'Why did my key snap in the lock?',
    answer: 'Most key breaks happen when there is existing wear on the key blade combined with some resistance in the barrel — often caused by a stiff lock, misalignment, or attempting to turn the key at an awkward angle. Keys with cuts near the tip are more prone to snapping. Worn keys should be replaced before they break completely.',
  },
  {
    question: 'How long does broken key extraction take?',
    answer: 'Extraction alone typically takes 15–30 minutes depending on how deep the fragment is and whether it has moved within the barrel. If we\'re cutting and programming a replacement key in the same visit, add a further 30–45 minutes for most transponder key types.',
  },
  {
    question: 'How much does broken key extraction cost?',
    answer: 'Extraction starts from £60–£80 depending on lock type and time of day. If a replacement key is needed, that is priced separately based on the key type. The full cost is confirmed over the phone before we attend.',
  },
]

export default function BrokenKeyExtractionAshtonPage() {
  const pageUrl = `${BUSINESS.url}/broken-key-extraction-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Broken Key Extraction Ashton-in-Makerfield', 'Professional broken key extraction in Ashton-in-Makerfield. Fragment removed without barrel damage — replacement key cut and programmed on the same visit.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Broken Key Extraction', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Broken Key Extraction Ashton-in-Makerfield | Mobile', description: 'Broken key extraction in door lock or ignition — Ashton-in-Makerfield. Fragment removed, replacement cut same visit.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Broken Key Extraction' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Mobile Broken Key Extraction — Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Broken Key Extraction in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Key snapped in the door lock or ignition? Don&apos;t try to dig it out yourself — improvised tools
            push fragments deeper and can damage the barrel pins. Ashton Lock &amp; Key provides professional
            broken key extraction across Ashton-in-Makerfield and Wigan, typically with a replacement key
            cut and programmed on the same visit.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            We use dedicated extraction hooks and spiral extractors that grip and draw out the broken fragment
            cleanly without contact with the barrel internals. In most cases the barrel is undamaged and
            fully functional with a new key immediately after the job.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'No Barrel Damage', 'Replacement Key Same Visit', '24/7 Service', 'Fixed Price Upfront'].map(t => (
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
          <h2>Professional Broken Key Extraction in Ashton-in-Makerfield</h2>
          <p>
            A snapped key in a door lock or ignition is one of the more frustrating vehicle emergencies —
            not only are you locked out, but there&apos;s a fragment lodged inside the mechanism that must
            be removed before any new key can function. The temptation to use a screwdriver, needle, or
            improvised tool nearly always makes the situation worse, pushing the fragment deeper or scoring
            the barrel pins.
          </p>
          <h3>Door Lock Extraction</h3>
          <p>
            For keys broken in the driver&apos;s door or boot lock, we first apply a small amount of
            penetrating lubricant to ease the fragment. Dedicated extraction tools — a combination of
            hook picks and spiral extractors — are then used to engage the fragment and draw it out
            without contacting the internal pin stack. The barrel is tested before we leave to confirm
            it operates correctly.
          </p>
          <h3>Ignition Barrel Extraction</h3>
          <p>
            Ignition extractions require a slightly different approach due to the barrel&apos;s position
            and orientation inside the steering column. We carry long-reach extraction tools designed
            specifically for ignition cylinders on common UK vehicles including Ford, Vauxhall, VW,
            Renault, and Peugeot. Once the fragment is removed, we assess the barrel condition and
            advise whether it&apos;s fully serviceable or requires repair.
          </p>
          <h3>Replacement Key on the Same Visit</h3>
          <p>
            In most cases we cut and programme a replacement key immediately after extraction.
            For transponder keys, remote fobs, and most smart keys, we carry the necessary blanks
            and programming equipment in the van. You should have one or more working keys before
            we leave — there is no need for a second visit or separate appointment.
          </p>
          <h3>Pricing</h3>
          <p>
            Extraction starts from <strong>£60</strong> (daytime) and <strong>£80</strong> (out-of-hours).
            If a replacement key is required, the cost is quoted separately based on key type. Full
            pricing is confirmed over the phone before we set off — no hidden extras.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Broken Key Extraction for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We extract broken keys from <strong>Ford, Vauxhall, VW, Audi, BMW, Mercedes-Benz, Renault,
            Peugeot, Nissan, Kia, Toyota, Honda, Skoda, Seat</strong>, and all other common UK makes.
            If your make isn&apos;t listed, call us — our extraction tool kit covers virtually every vehicle
            on UK roads.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> — we&apos;ll confirm coverage and give you a fixed price.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Broken Key Extraction Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Ashton Lock &amp; Key is based at{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>.
                We provide mobile broken key extraction across our full service area — no need to arrange
                recovery or transport the vehicle.
              </p>
              <p>We cover:</p>
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

      <CTASection variant="orange" heading="Key Snapped in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key — we extract the fragment and cut a replacement key on the same visit." />
      <FAQSection faqs={faqs} heading="Broken Key Extraction FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Ignition Repair & Replacement', desc: 'Key broken in the ignition? We repair and replace ignition barrels.', href: '/ignition-repair-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Need a new key cut and programmed after extraction?', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Car Lockout Service', desc: 'Locked out while the broken key is still inside? We open first.', href: '/car-lockout-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Replacement key needs chip programming — we do it on-site.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Remote Key Repair', desc: 'Remote functions not working after a key incident?', href: '/remote-key-repair-ashton-in-makerfield' },
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
