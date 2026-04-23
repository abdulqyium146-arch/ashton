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
  title: 'Transponder Key Programming Ashton-in-Makerfield',
  description: 'Transponder key programming for all UK makes in Ashton-in-Makerfield. AUTEL & Xhorse diagnostic equipment. Key addition, AKL & immobiliser resets. Call 07711 341668.',
  alternates: { canonical: `${BUSINESS.url}/transponder-key-programming-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'What is a transponder key and why does it need programming?',
    answer: 'A transponder key contains a small RFID chip in the head. When the key is inserted and turned, the car\'s immobiliser reads the chip\'s unique code. If the code matches a registered key, the immobiliser disables and the engine starts. If the chip is unprogrammed, blank, or not recognised, the engine cranks but won\'t fire. Programming writes the correct code to the chip for your specific vehicle.',
  },
  {
    question: 'Can you programme a transponder key I\'ve already purchased?',
    answer: 'Often yes, but it depends on the key type and vehicle. Some aftermarket transponder blanks are compatible with our programming equipment; others aren\'t. Before buying a key elsewhere, call us — we can confirm compatibility and advise whether it\'s worth purchasing independently or whether we should supply the blank ourselves.',
  },
  {
    question: 'Do I need my existing key present for transponder programming?',
    answer: 'For a standard key addition, yes — you\'ll need at least one working key to authorise the new key. If you have no working keys, that requires all-keys-lost (AKL) programming, which is a different process — see our lost car key service.',
  },
  {
    question: 'Which makes and models do you programme transponder keys for?',
    answer: 'Using AUTEL MaxiIM and Xhorse VVDI equipment, we cover the vast majority of UK-sold vehicles from 1995 onwards. This includes Ford, Vauxhall, VW, Audi, BMW, Mercedes-Benz, Renault, Peugeot, Citroën, Nissan, Toyota, Kia, Hyundai, Honda, Skoda, Seat, Fiat, and many others. Call us if you have a specific model to confirm.',
  },
  {
    question: 'How long does transponder key programming take?',
    answer: 'Standard key addition (programming a second key to a vehicle with one working key) takes around 20–40 minutes on-site. All-keys-lost programming takes 1–2 hours. Smart key and proximity key programming may take slightly longer depending on the make.',
  },
  {
    question: 'What does transponder key programming cost?',
    answer: 'Pricing depends on key type, make/model, and whether it\'s a key addition or AKL job. Transponder key addition starts from £80–£120. AKL starts from £180. Prices are confirmed over the phone — call us with the make, model, and year for an accurate quote.',
  },
]

export default function TransponderKeyProgrammingAshtonPage() {
  const pageUrl = `${BUSINESS.url}/transponder-key-programming-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Transponder Key Programming Ashton-in-Makerfield', 'Professional transponder key programming in Ashton-in-Makerfield using AUTEL and Xhorse equipment. Key addition, AKL, and immobiliser resets for all common UK makes.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Transponder Key Programming', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Transponder Key Programming Ashton-in-Makerfield', description: 'Transponder key programming in Ashton-in-Makerfield. AUTEL & Xhorse equipment — all common UK makes.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Transponder Key Programming' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Professional Transponder Programming — Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Transponder Key Programming in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Every car built since 1995 uses a transponder chip that must be programmed specifically to start
            that vehicle. Ashton Lock &amp; Key programmes transponder keys for all common UK makes and models
            on-site in Ashton-in-Makerfield — using AUTEL MaxiIM and Xhorse VVDI diagnostic equipment,
            the same tools used by main dealers.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Key addition, all-keys-lost programming, and immobiliser resets — all carried out at your vehicle,
            no recovery required. Most standard key additions are completed within 30–40 minutes.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'AUTEL & Xhorse Equipment', 'Key Addition & AKL', 'All Common UK Makes', 'On-Site at Your Vehicle'].map(t => (
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
          <h2>Transponder Key Programming in Ashton-in-Makerfield</h2>
          <p>
            A transponder key that hasn&apos;t been programmed to your vehicle will turn the ignition but
            the engine won&apos;t start — the immobiliser cuts fuel and spark before the engine fires.
            This is the most common reason a newly cut key fails to start a car, and it&apos;s why key
            cutting alone is never sufficient for vehicles built after 1995. Ashton Lock &amp; Key
            handles the complete process: cutting the blade <em>and</em> programming the chip, in a
            single on-site visit.
          </p>
          <h3>Equipment We Use</h3>
          <p>
            We use <strong>AUTEL MaxiIM IM608 Pro</strong> and <strong>Xhorse VVDI2</strong> diagnostic
            programmers — industry-standard tools that support the vast majority of vehicle makes sold
            in the UK. These are the same devices used by franchised dealers, which means our
            programming is not a workaround or aftermarket approximation — it&apos;s the correct
            OEM-level process for your vehicle.
          </p>
          <h3>Key Addition</h3>
          <p>
            The most common transponder programming job. You have at least one working key and need
            a second (or a replacement for a lost spare). We connect to the OBD port, authorise the
            new key using the existing one, and programme the chip. The new key is then tested in the
            ignition to confirm it starts the engine and operates all remote functions.
          </p>
          <h3>All-Keys-Lost (AKL) Programming</h3>
          <p>
            When there are no working keys, the standard addition process isn&apos;t possible. AKL
            requires direct ECU access to erase all existing key codes and programme new ones from
            scratch. We carry the tools required for AKL on most common UK vehicles — see our
            dedicated <Link href="/lost-car-key-ashton-in-makerfield" className="text-brand-orange hover:underline">lost car key service</Link> for full details.
          </p>
          <h3>Immobiliser Resets</h3>
          <p>
            If the immobiliser is triggering incorrectly — preventing a correctly programmed key from
            starting the vehicle — we can diagnose and reset the system using our diagnostic equipment.
            This is sometimes required after an ECU replacement, battery disconnection, or failed
            previous programming attempt by another technician.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Transponder Programming for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Our equipment covers <strong>Ford, Vauxhall, VW, Audi, BMW, Mercedes-Benz, Renault,
            Peugeot, Citroën, Nissan, Toyota, Kia, Hyundai, Honda, Skoda, Seat, Fiat, Volvo,
            Land Rover, Jaguar, MINI, Mazda</strong> and more. If your make isn&apos;t listed, call us to confirm.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> with your make, model, and year for an instant quote.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Transponder Key Programming Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Ashton Lock &amp; Key is based at{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>.
                We programme transponder keys on-site at your vehicle across our full mobile service area.
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

      <CTASection variant="orange" heading="Need a Transponder Key Programmed in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key — AUTEL & Xhorse equipment, on-site programming, all common UK makes." />
      <FAQSection faqs={faqs} heading="Transponder Key Programming FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement', desc: 'Need a full replacement key cut and programmed?', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Lost Car Key Replacement', desc: 'No working keys? We do all-keys-lost programming.', href: '/lost-car-key-ashton-in-makerfield' },
              { title: 'Smart Key Replacement', desc: 'Proximity and push-button start key programming.', href: '/smart-key-replacement-ashton-in-makerfield' },
              { title: 'Key Fob Programming', desc: 'Remote locking fob repair and re-sync.', href: '/key-fob-programming-ashton-in-makerfield' },
              { title: 'Car Rekeying', desc: 'Full security reset — erase all old key codes.', href: '/car-rekeying-ashton-in-makerfield' },
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
