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
  title: 'Smart Key Replacement Ashton-in-Makerfield | Proximity Keys',
  description: 'Smart key & proximity key replacement in Ashton-in-Makerfield. BMW, Mercedes, Audi, Ford, Toyota & more â€” supplied & programmed on-site. Call 07309 903243.',
  alternates: { canonical: `${BUSINESS.url}/smart-key-replacement-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'What is a smart key and how is it different from a standard key?',
    answer: 'A smart key (also called a proximity key or keyless entry key) uses short-range radio frequency to communicate with the vehicle continuously. When the key is within range, the car unlocks automatically on touch â€” you never need to press a button or insert it into the ignition. Starting is done with a push-button on the dashboard. This differs from a standard transponder key, which must be physically inserted and turned.',
  },
  {
    question: 'Can you replace a smart key if it\'s been lost completely?',
    answer: 'Yes. If all smart keys have been lost, this becomes an all-keys-lost (AKL) scenario. We gain entry to the vehicle, access the ECU, erase all previously registered key data, and programme brand new smart keys from scratch. V5C logbook and photo ID are required.',
  },
  {
    question: 'How long does smart key programming take?',
    answer: 'Smart key programming is typically more involved than standard transponder key addition. Most jobs take 1â€“1.5 hours on-site, depending on the make and model. Some premium brands (BMW, Mercedes, Audi) have additional security layers that may extend this slightly.',
  },
  {
    question: 'Why is my smart key not being detected by the car?',
    answer: 'Common causes include: flat key battery (the smart key has an internal battery â€” replace it first), lost pairing after an ECU reset or battery disconnection, water damage to the key internals, or a faulty antenna in the vehicle. We diagnose the cause before recommending a repair or replacement.',
  },
  {
    question: 'Which smart key systems do you programme?',
    answer: 'We programme smart keys for BMW Comfort Access, Mercedes-Benz Keyless-Go, Audi Advanced Key, Ford Intelligent Access, Toyota Smart Entry, Nissan Intelligent Key, Kia Smart Key, and other keyless systems found on common UK vehicles. Call with your make and model to confirm.',
  },
  {
    question: 'How much does smart key replacement cost?',
    answer: 'Smart key replacement is typically more expensive than standard transponder keys due to the programming complexity and hardware cost. Prices start from around Â£180â€“Â£320 depending on the make and model. Pricing is confirmed before we attend.',
  },
]

export default function SmartKeyReplacementAshtonPage() {
  const pageUrl = `${BUSINESS.url}/smart-key-replacement-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Smart Key Replacement Ashton-in-Makerfield', 'Smart key and proximity key replacement in Ashton-in-Makerfield. Supplied and programmed on-site for BMW, Mercedes, Audi, Ford, Toyota, and more.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Smart Key Replacement', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Smart Key Replacement Ashton-in-Makerfield | Proximity Keys', description: 'Smart key and proximity key replacement in Ashton-in-Makerfield. On-site programming for all common keyless entry systems.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Smart Key Replacement' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Smart Key &amp; Proximity Key Specialists â€” Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Smart Key Replacement in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Proximity key or push-button start system failed? Ashton Lock &amp; Key supplies and programmes
            smart keys for BMW, Mercedes-Benz, Audi, Ford, Toyota, Nissan, Kia, and other makes across
            Ashton-in-Makerfield and Wigan â€” on-site at your vehicle, no dealer appointment required.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Smart key systems require specialist diagnostic programming that goes beyond basic transponder
            key addition. We carry the correct equipment and key hardware for all common UK keyless entry
            systems, with pricing that is typically significantly below dealer rates.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'BMW, Mercedes, Audi & More', 'AKL Smart Key Capable', 'On-Site Programming', 'Fixed Price Upfront'].map(t => (
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
          <h2>Smart Key &amp; Proximity Key Replacement in Ashton-in-Makerfield</h2>
          <p>
            Smart keys â€” also called proximity keys, keyless entry keys, or comfort keys â€” are the highest
            tier of automotive key technology found on newer and premium vehicles. Unlike transponder keys
            that are inserted and turned, smart keys communicate wirelessly with the vehicle at short range:
            the door unlocks when you touch the handle and the engine starts at the press of a dashboard button.
            This convenience comes with added programming complexity when a key needs replacing.
          </p>
          <h3>What Makes Smart Key Programming Different</h3>
          <p>
            Smart keys contain a more sophisticated transponder chip, a two-way RF communication module,
            and often rolling-code security that changes with each use. Programming requires specialist
            software that can communicate with the vehicle&apos;s body control module (BCM) and immobiliser
            unit simultaneously. We use AUTEL MaxiIM and Xhorse VVDI tools â€” both of which support smart
            key programming for all common UK makes.
          </p>
          <h3>BMW Comfort Access</h3>
          <p>
            BMW&apos;s Comfort Access system is one of the most common smart key replacements we carry out
            in Ashton-in-Makerfield. We cover 1 Series, 2 Series, 3 Series, 4 Series, 5 Series, X1, X3,
            and X5 models with Comfort Access. BMW smart key programming is completed on-site at your vehicle.
          </p>
          <h3>Mercedes-Benz Keyless-Go</h3>
          <p>
            Mercedes Keyless-Go is found across the A-Class, C-Class, E-Class, GLC, and other models.
            We supply and programme both the standard Keyless-Go fob and the newer card-style keys found
            on newer S-Class and EQS models where our equipment supports them.
          </p>
          <h3>Ford, Toyota, Nissan &amp; Others</h3>
          <p>
            We also programme Ford Intelligent Access keys (Kuga, Focus, Mondeo), Toyota Smart Entry
            (RAV4, Yaris, Corolla), Nissan Intelligent Key (Qashqai, Juke), Kia Smart Key (Sportage,
            Sorento), and Hyundai proximity keys. Call with your make and model to confirm coverage.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Smart Key Programming for All Makes</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We programme smart and proximity keys for <strong>BMW, Mercedes-Benz, Audi, Ford, Toyota,
            Nissan, Kia, Hyundai, Volvo, Land Rover, Jaguar, MINI, Mazda</strong>, and other makes
            with keyless entry systems. Call to confirm your specific model.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> with your make, model, and year â€” we&apos;ll confirm support and quote upfront.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Smart Key Replacement Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Based at <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>,
                we provide mobile smart key replacement across our full service area.
                We come to your vehicle â€” wherever it is parked.
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

      <CTASection variant="orange" heading="Smart Key Issue in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key â€” specialist smart key programming, on-site, all common keyless systems." />
      <FAQSection faqs={faqs} heading="Smart Key Replacement FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement', desc: 'Standard transponder and remote key replacement.', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Key Fob Programming', desc: 'Remote fob re-sync, repair, and programming.', href: '/key-fob-programming-ashton-in-makerfield' },
              { title: 'Lost Car Key Replacement', desc: 'Lost your only smart key? AKL programming available.', href: '/lost-car-key-ashton-in-makerfield' },
              { title: 'Transponder Key Programming', desc: 'Chip programming for standard transponder keys.', href: '/transponder-key-programming-ashton-in-makerfield' },
              { title: 'Car Lockout Service', desc: 'Smart key dead? We open the vehicle without damage.', href: '/car-lockout-ashton-in-makerfield' },
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
