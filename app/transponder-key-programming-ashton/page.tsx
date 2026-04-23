import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Transponder Key Programming Ashton-in-Makerfield | All Makes | Same Day',
  description: 'Transponder key programming in Ashton-in-Makerfield. Chip programming for all makes and models — mobile, same day, cheaper than dealers. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/transponder-key-programming-ashton`,
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
    question: 'What is a transponder key?',
    answer: 'A transponder key contains a small microchip in the plastic head that communicates with your car\'s immobiliser. When you insert the key, the immobiliser reads the chip code. If it matches the stored code, the engine starts. If there\'s no chip or the chip isn\'t programmed, the fuel system cuts out and the engine won\'t run — even if the physical key fits the ignition.',
  },
  {
    question: 'My key turns in the ignition but the engine won\'t start — could it be the transponder?',
    answer: 'Yes, this is a classic symptom of a transponder issue. Other causes include a flat immobiliser ring antenna, a failing ECU, or a damaged transponder chip. We carry diagnostic equipment to identify the exact cause and resolve it on-site.',
  },
  {
    question: 'Can you programme a transponder key without the original?',
    answer: 'Yes — this is the all-keys-lost (AKL) scenario. We access the ECU, erase the existing key data, and programme a completely new key. It costs more than adding a key alongside an existing one, but it\'s very achievable. See our dedicated lost car keys page.',
  },
  {
    question: 'How long does transponder key programming take?',
    answer: 'For standard key addition (programming alongside a working original), typically 30–45 minutes. All-keys-lost jobs take 60–120 minutes. Some vehicles require pin code extraction first, which adds time — we\'ll advise when you call.',
  },
]

export default function TransponderKeyProgrammingPage() {
  const pageUrl = `${BUSINESS.url}/transponder-key-programming-ashton`
  const schemas = [
    serviceSchema(
      'Transponder Key Programming Ashton-in-Makerfield',
      'Transponder key programming for all makes and models in Ashton-in-Makerfield. Key addition, all-keys-lost, and immobiliser diagnostics. Mobile same-day service.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Transponder Key Programming', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Transponder Key Programming Ashton-in-Makerfield | All Makes',
      description: 'Transponder key programming in Ashton-in-Makerfield. All makes, mobile, same day.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[
        { label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' },
        { label: 'Transponder Key Programming' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Transponder Key Programming —{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            A correctly cut car key that hasn&apos;t been programmed won&apos;t start your engine. We programme
            transponder chips to your vehicle&apos;s immobiliser on-site — mobile, same day, for all makes and models.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>How Transponder Keys Work</h2>
          <p>
            Inside the plastic head of virtually every car key made since 1995 sits a small glass or plastic tube
            containing a microchip and a tiny antenna coil. When the key enters the ignition, a ring aerial around
            the ignition barrel energises the chip via radio frequency, and the chip broadcasts back a code. If that
            code matches what the immobiliser ECU expects, the fuel injection and spark circuits are enabled and the
            engine starts.
          </p>
          <p>
            Without a programmed chip, the immobiliser detects an unrecognised key and locks out the fuel system.
            The starter motor may crank but the engine won&apos;t fire. This is why a key can be cut perfectly and
            still fail to start the car.
          </p>

          <h2>When You Need Transponder Programming</h2>
          <ul>
            <li>New replacement key that hasn&apos;t been coded</li>
            <li>Spare key being added to a vehicle</li>
            <li>Key turning in ignition but engine not starting</li>
            <li>Immobiliser warning light on dashboard</li>
            <li>All keys lost — programming from scratch after ECU reset</li>
            <li>Transponder chip failed in existing key</li>
          </ul>

          <h2>What Equipment We Use</h2>
          <p>
            We use AUTEL MaxiIM and Xhorse VVDI programming devices alongside Advanced Diagnostics systems.
            These cover key programming for the vast majority of European, Asian, and domestic makes sold in the
            UK — including Ford, Vauxhall, VW, Audi, BMW, Mercedes, Toyota, Renault, Peugeot, and many more.
          </p>
          <p>
            Some vehicles require extracting a pin code or accessing the ECU via the OBD port before programming
            is possible. We handle this within the same visit where the platform supports it.
          </p>

          <h2>Transponder vs Smart Key — What&apos;s the Difference?</h2>
          <p>
            Transponder keys are physical keys that need to be inserted into the ignition. Smart keys (proximity
            keys) stay in your pocket — the car senses their presence and allows keyless entry and push-button
            start. Smart key programming is more complex and covered separately. For a plain-language comparison,
            read our{' '}
            <Link href="/blog/transponder-key-vs-smart-key-explained">transponder vs smart key guide</Link>.
          </p>
          <p>
            For full coverage of all{' '}
            <Link href="/car-key-programming-ashton">car key programming services in Ashton-in-Makerfield</Link> including
            smart keys, fob coding, and ECU pairing, see our dedicated programming page.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Need a Transponder Key Programmed?"
        subtext="Call Ashton Lock & Key — we bring the diagnostic equipment to your vehicle, same day."
      />
      <FAQSection faqs={faqs} heading="Transponder Key Programming FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Programming Ashton', desc: 'All programming types including smart keys.', href: '/car-key-programming-ashton' },
              { title: 'Lost Car Keys', desc: 'All-keys-lost AKL reprogramming.', href: '/lost-car-keys-ashton' },
              { title: 'Car Key Replacement Ashton', desc: 'Full cut and programme service.', href: '/car-key-replacement-ashton' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service overview.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Transponder vs Smart Key Guide', desc: 'Understand the difference.', href: '/blog/transponder-key-vs-smart-key-explained' },
              { title: 'Car Key Replacement Guide', desc: 'Complete UK guide to key types and costs.', href: '/blog/car-key-replacement-guide' },
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
