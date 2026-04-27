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
  title: 'Car Rekeying Ashton-in-Makerfield | Full Security Reset',
  description: 'Car rekeying in Ashton-in-Makerfield â€” new lock barrels, erase old transponder codes. Full vehicle security reset after key theft or second-hand purchase. Call 07309 903243.',
  alternates: { canonical: `${BUSINESS.url}/car-rekeying-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'What is car rekeying?',
    answer: 'Car rekeying is the process of replacing a vehicle\'s lock barrels and erasing all previously registered transponder key codes from the ECU, then programming new keys from scratch. The result is that no existing key â€” whether lost, stolen, or held by a previous owner â€” can unlock or start the vehicle. It\'s a complete security reset.',
  },
  {
    question: 'When should I have my car rekeyed?',
    answer: 'The most common reasons: you\'ve bought a second-hand vehicle and want certainty that the previous owner\'s keys no longer work; your keys have been stolen (even if later recovered); you\'ve had a break-in and are concerned about key cloning; or you\'ve lost a key and want to be sure it can\'t be used if found.',
  },
  {
    question: 'Is car rekeying the same as all-keys-lost programming?',
    answer: 'They are similar but not identical. AKL programming erases and reprogrammes the transponder system when no working keys exist. Car rekeying goes further â€” it also physically replaces the door lock barrels and ignition barrel, so that even a key with the correct blade profile cannot operate the locks mechanically. It\'s a more comprehensive security reset.',
  },
  {
    question: 'How long does car rekeying take?',
    answer: 'A full car rekeying â€” replacing door locks, ignition, and reprogramming the transponder system â€” typically takes 2â€“3 hours depending on the vehicle. Some makes require specific barrel kits that may need to be ordered in advance. We\'ll advise on lead time when you call.',
  },
  {
    question: 'Will I get new keys after rekeying?',
    answer: 'Yes. The rekeying process includes cutting new keys to the new barrel profile and programming new transponder chips. You\'ll receive fully functioning replacement keys â€” typically two â€” that start the engine and operate all remote functions.',
  },
  {
    question: 'How much does car rekeying cost in Ashton-in-Makerfield?',
    answer: 'Car rekeying is more involved than a standard key replacement due to the physical barrel replacement and full transponder reset. Costs typically start from Â£250â€“Â£400 depending on the vehicle make, model, and how many lock barrels are being replaced. Full pricing confirmed before we begin.',
  },
]

export default function CarRekeyingAshtonPage() {
  const pageUrl = `${BUSINESS.url}/car-rekeying-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Car Rekeying Ashton-in-Makerfield', 'Full vehicle security reset in Ashton-in-Makerfield â€” new lock barrels, erase old transponder codes, programme new keys. Mobile service to your vehicle.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Car Rekeying', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Car Rekeying Ashton-in-Makerfield | Full Security Reset', description: 'Car rekeying in Ashton-in-Makerfield. New lock barrels, transponder reset, new keys â€” full vehicle security reset.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Car Rekeying' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Full Vehicle Security Reset â€” Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Car Rekeying in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Want complete certainty that no previous key can access your vehicle? Ashton Lock &amp; Key
            provides full car rekeying in Ashton-in-Makerfield â€” replacing lock barrels and erasing all
            registered transponder codes, so only your new keys can unlock and start the car.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Ideal after a second-hand vehicle purchase, key theft, break-in, or whenever you need a
            complete security reset. Mobile service â€” we come to your vehicle.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'New Barrels + Transponder Reset', 'Old Keys Permanently Deactivated', 'New Keys Included', 'Fixed Price Upfront'].map(t => (
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
          <h2>Full Car Rekeying in Ashton-in-Makerfield</h2>
          <p>
            Standard key replacement removes one lost or damaged key from the equation â€” but it doesn&apos;t
            guarantee that another copy of the original key can&apos;t still operate the vehicle. Car
            rekeying goes further: by replacing the physical lock barrels and erasing all transponder
            data from the ECU, it ensures that only the new keys â€” in your possession â€” can access and
            start the car. It&apos;s the automotive equivalent of changing the locks on a house.
          </p>
          <h3>When Is Car Rekeying the Right Option?</h3>
          <p>
            Car rekeying makes sense in several situations:
          </p>
          <ul>
            <li><strong>Second-hand vehicle purchase</strong> â€” you have no way of knowing how many keys were made for the vehicle or who has copies</li>
            <li><strong>Key theft</strong> â€” even if the key is later recovered, you can&apos;t be certain it wasn&apos;t cloned</li>
            <li><strong>Domestic disputes or shared vehicles</strong> â€” where you need to restrict access to specific individuals</li>
            <li><strong>Fleet vehicle turnover</strong> â€” ensuring departing drivers can no longer access vehicles</li>
          </ul>
          <h3>What Car Rekeying Involves</h3>
          <p>
            The process covers three elements. First, the door lock barrels (driver&apos;s door and
            passenger door at minimum) are replaced with new units. Second, the ignition barrel is
            replaced to match the new door key profile. Third, the vehicle&apos;s ECU is accessed via
            OBD diagnostics to erase all previously registered transponder codes and programme
            fresh codes for the new keys. The result: physically new locks, electronically new key codes.
          </p>
          <h3>New Keys Provided</h3>
          <p>
            Car rekeying includes the supply and programming of replacement keys â€” typically two.
            These are cut to the new barrel profile and have transponder chips programmed to the
            now-clean ECU. If the vehicle uses a remote fob or smart key, those functions are
            programmed in the same session.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Car Rekeying for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We carry out full vehicle rekeying on <strong>Ford, Vauxhall, VW, Audi, BMW,
            Mercedes-Benz, Toyota, Nissan, Renault, Peugeot, Kia, Hyundai, Honda, Skoda,
            Land Rover</strong>, and other common UK makes. Call to confirm barrel availability
            for your specific vehicle.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> â€” we&apos;ll confirm parts availability and quote before attending.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Car Rekeying Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Based at <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>,
                we provide mobile car rekeying across Ashton-in-Makerfield and the wider Wigan area.
                We come to your vehicle â€” no need for recovery.
              </p>
              <p>Coverage areas:</p>
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

      <CTASection variant="orange" heading="Need a Full Security Reset in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key â€” new barrels, new keys, old codes permanently erased." />
      <FAQSection faqs={faqs} heading="Car Rekeying FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Lost Car Key Replacement', desc: 'AKL programming when no working keys exist.', href: '/lost-car-key-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Key programming without physical barrel replacement.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Standard key replacement â€” simpler than full rekeying.', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Ignition Repair & Replacement', desc: 'Ignition barrel replacement as part of a rekey.', href: '/ignition-repair-ashton-in-makerfield' },
              { title: 'Smart Key Replacement', desc: 'Rekeying a vehicle with keyless entry?', href: '/smart-key-replacement-ashton-in-makerfield' },
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
