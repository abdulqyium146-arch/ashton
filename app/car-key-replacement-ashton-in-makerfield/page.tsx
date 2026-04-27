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
  title: 'Car Key Replacement Ashton-in-Makerfield | Mobile',
  description: 'Mobile car key replacement in Ashton-in-Makerfield. Transponder keys, remote fobs & smart keys cut & programmed on-site. 40â€“60% cheaper than dealer. Call 07309 903243.',
  alternates: { canonical: `${BUSINESS.url}/car-key-replacement-ashton-in-makerfield` },
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
    answer: 'Pricing depends on key type. A basic transponder key starts from around Â£80â€“Â£120 including programming. Remote fobs start from Â£100â€“Â£160. Smart/proximity keys start from Â£180â€“Â£280. All prices are quoted over the phone before we attend and are fixed â€” no surprises.',
  },
  {
    question: 'Can you replace a car key without the original?',
    answer: 'Yes, as long as you have at least one working key. We cut a new blade to match and programme a new transponder to the vehicle. If you have no working keys at all, that becomes an all-keys-lost (AKL) job â€” see our lost car key service for that scenario.',
  },
  {
    question: 'How long does car key replacement take?',
    answer: 'For most straightforward transponder key or remote fob replacements, we complete the job in 30â€“60 minutes on-site. Smart key programming can take slightly longer. We come directly to your vehicle, so there\'s no need for you to arrange recovery or travel anywhere.',
  },
  {
    question: 'Is a mobile car key replacement as good as the dealer?',
    answer: 'Yes â€” we use the same AUTEL and Xhorse diagnostic equipment that main dealers use, along with OEM-specification key blanks. The programming is identical. The key will start your engine and operate all remote functions exactly as a dealer replacement would, at 40â€“60% of the cost.',
  },
  {
    question: 'Do you cover car key replacement across Wigan?',
    answer: 'We cover Ashton-in-Makerfield, Wigan, Golborne, Bryn, Haydock, Newton-le-Willows, Leigh, Garswood, Billinge, and surrounding areas. Call us to confirm coverage for your specific location.',
  },
  {
    question: 'What do I need to have ready for car key replacement?',
    answer: 'Have your V5C logbook, photo ID (driving licence or passport), and proof of address ready. This is standard practice for any responsible locksmith â€” it protects you and ensures we only programme keys to the rightful owner of the vehicle.',
  },
]

export default function CarKeyReplacementAshtonPage() {
  const pageUrl = `${BUSINESS.url}/car-key-replacement-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Car Key Replacement Ashton-in-Makerfield', 'Mobile car key replacement in Ashton-in-Makerfield. Transponder keys, remote fobs, and smart keys cut and programmed on-site â€” same day, 40â€“60% cheaper than dealer.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Car Key Replacement', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Car Key Replacement Ashton-in-Makerfield | Mobile', description: 'Mobile car key replacement in Ashton-in-Makerfield. All key types, on-site programming, same day.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Car Key Replacement' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Same-Day Car Key Replacement â€” Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Car Key Replacement in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Need a replacement car key in Ashton-in-Makerfield? Ashton Lock &amp; Key is your mobile car key
            specialist â€” we cut and programme transponder keys, remote fobs, and smart keys on-site at your vehicle,
            same day, anywhere in WN4 and surrounding areas.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            No recovery truck. No dealer waiting times. No inflated main dealer prices. We use the same professional
            diagnostic equipment as franchised dealers, typically delivering a fully programmed replacement key
            for 40â€“60% less than the main dealer quote.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'Same-Day Service', '40â€“60% Cheaper Than Dealer', 'All Key Types', 'Fixed Price Upfront'].map(t => (
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
          <h2>Mobile Car Key Replacement in Ashton-in-Makerfield</h2>
          <p>
            Modern car keys are far more complex than they appear. Every key produced since 1995 contains a
            transponder chip that communicates with your vehicle&apos;s immobiliser â€” if the chip isn&apos;t
            programmed to your specific car, the engine simply won&apos;t start, even if the blade fits perfectly.
            Ashton Lock &amp; Key carries the diagnostic tools required to programme keys to your vehicle on-site,
            without any need for recovery to a dealer.
          </p>
          <h3>Transponder Key Replacement</h3>
          <p>
            The most common type of car key replacement in Ashton-in-Makerfield. We cut a new blade to match your
            lock barrels, then use AUTEL diagnostic software to programme a new transponder chip to your vehicle&apos;s
            ECU. This covers the majority of Ford, Vauxhall, Volkswagen, Renault, Peugeot, and CitroÃ«n models
            on UK roads. Work is completed on-site, typically within 30â€“45 minutes.
          </p>
          <h3>Remote Key Fob Replacement</h3>
          <p>
            If your key has a remote locking function, the replacement must include both transponder programming
            (for the immobiliser) and fob synchronisation (for the central locking). We carry OEM-specification
            fob shells and electronics for all common UK makes, ensuring the replacement operates all remote
            functions including central locking, boot release, and alarm arming.
          </p>
          <h3>Smart Key &amp; Proximity Key Replacement</h3>
          <p>
            Keyless entry and push-button start systems require a more in-depth programming process. We programme
            smart keys for BMW, Mercedes-Benz, Audi, Ford (including Ford Keyless-Go), Toyota, and several other
            makes. The key is supplied and programmed to your vehicle in a single visit â€” no dealer appointment
            required.
          </p>
          <h3>Pricing &amp; What to Have Ready</h3>
          <p>
            Prices are confirmed over the phone once we understand the make, model, year, and key type. As a
            guide: transponder keys from <strong>Â£80</strong>, remote fobs from <strong>Â£100</strong>, smart
            keys from <strong>Â£180</strong>. Have your V5C logbook and photo ID ready â€” a responsible locksmith
            will always verify ownership before programming a key.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Car Key Replacement for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We regularly programme replacement keys for <strong>Vauxhall Corsa, Astra, Insignia</strong>;{' '}
            <strong>Ford Focus, Fiesta, Mondeo, Kuga</strong>; <strong>VW Golf, Polo, Passat, Tiguan</strong>;{' '}
            <strong>BMW 3 Series, 5 Series, X5</strong>; <strong>Audi A3, A4, A6, Q5</strong>;{' '}
            <strong>Mercedes C-Class, E-Class, GLC</strong>; <strong>Nissan Qashqai, Juke</strong>;{' '}
            <strong>Renault Clio, Megane</strong>; <strong>Kia Sportage</strong>; <strong>Honda Civic</strong>;{' '}
            and many more.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            Don&apos;t see your make? <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call us</a> â€” we almost certainly cover it.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Car Key Replacement Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Searching for <strong>car key replacement near me</strong> in Wigan or Ashton-in-Makerfield?
                Ashton Lock &amp; Key operates from{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>,
                placing us centrally within our service area.
              </p>
              <p>
                We come directly to your vehicle â€” at home, work, or wherever you are. Our mobile service
                covers:
              </p>
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

      <CTASection variant="orange" heading="Need a Car Key in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key â€” mobile, same-day, all key types. 40â€“60% cheaper than the main dealer." />
      <FAQSection faqs={faqs} heading="Car Key Replacement FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Lost Car Key Replacement', desc: 'No keys at all? We do all-keys-lost (AKL) programming.', href: '/lost-car-key-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Specialist chip programming for all UK makes.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Smart Key Replacement', desc: 'Keyless entry and push-button start key replacement.', href: '/smart-key-replacement-ashton-in-makerfield' },
              { title: 'Key Fob Programming', desc: 'Remote fob repair, re-sync, and replacement.', href: '/key-fob-programming-ashton-in-makerfield' },
              { title: 'Car Lockout Service', desc: 'Locked out? We open vehicles without damage, 24/7.', href: '/car-lockout-ashton-in-makerfield' },
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
