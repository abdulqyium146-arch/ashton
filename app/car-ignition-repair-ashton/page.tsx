import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Ignition Repair Ashton-in-Makerfield | Key Won\'t Turn | Replacement',
  description: 'Car ignition repair and replacement in Ashton-in-Makerfield. Key stuck, won\'t turn, or snapped in ignition — fixed on-site same day. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/car-ignition-repair-ashton`,
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
    question: 'Why is my car key not turning in the ignition?',
    answer: 'The most common causes are: the steering wheel lock has engaged (try gently turning the wheel while turning the key), a worn or damaged key, a worn ignition barrel, or a stiff/corroded ignition. If the key is correct for the vehicle but won\'t turn at all, the barrel has likely worn and needs replacing.',
  },
  {
    question: 'Can you replace a car ignition barrel without replacing the whole ignition?',
    answer: 'In many cases, yes. The barrel is the cylinder that the key turns — it\'s separate from the ignition switch assembly in many vehicles. Replacing just the barrel is cheaper and less involved than replacing the full ignition switch.',
  },
  {
    question: 'My key snapped in the ignition — what do I do?',
    answer: 'Don\'t try to extract it yourself. Call us. We extract broken keys from ignitions professionally without causing additional damage, then assess whether the barrel needs replacing. If it does, we can replace it on the same visit.',
  },
  {
    question: 'Will a new ignition barrel require new keys?',
    answer: 'It depends on the job. In some cases we can re-pin the new barrel to work with your existing keys. If new keys are required, we cut and programme them on the same visit. We\'ll explain the options and costs upfront before starting any work.',
  },
]

export default function CarIgnitionRepairPage() {
  const pageUrl = `${BUSINESS.url}/car-ignition-repair-ashton`
  const schemas = [
    serviceSchema(
      'Car Ignition Repair Ashton-in-Makerfield',
      'Car ignition repair and barrel replacement in Ashton-in-Makerfield. Stuck or stiff ignition, snapped key extraction, and barrel replacement — mobile same-day service.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Car Ignition Repair', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Car Ignition Repair Ashton-in-Makerfield | Barrel Replacement',
      description: 'Car ignition repair and barrel replacement in Ashton-in-Makerfield. Mobile, same day.',
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
        { label: 'Car Ignition Repair' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Car Ignition Repair —{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Key stuck in the ignition, won&apos;t turn, or snapped off? We repair and replace car ignition barrels
            on-site in Ashton-in-Makerfield — same day, mobile, no recovery truck needed.
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
          <h2>Common Ignition Problems We Fix</h2>
          <ul>
            <li>Key won&apos;t turn at all — worn barrel or steering lock engaged</li>
            <li>Key stiff or difficult to turn — worn tumblers, corrosion, or damaged key</li>
            <li>Key stuck in the ignition — won&apos;t come out</li>
            <li>Key snapped off in the ignition — see our <Link href="/broken-car-key-extraction-ashton">broken key extraction service</Link></li>
            <li>Ignition turns but car won&apos;t start — may be transponder rather than ignition</li>
          </ul>

          <h2>Ignition Barrel Replacement</h2>
          <p>
            The ignition barrel is the mechanical cylinder that the key turns — separate from the ignition switch
            electronics in many vehicles. When a barrel wears out (usually after many years and thousands of starts),
            it becomes stiff, then unreliable, then fails entirely.
          </p>
          <p>
            Barrel replacement is the standard fix. We source OEM-grade replacement barrels for most common makes and
            models and fit them on-site. Where possible, the new barrel is re-pinned to work with your existing key —
            saving you the cost of a new key. Where that isn&apos;t possible, we cut and programme a replacement key on
            the same visit.
          </p>

          <h2>Don&apos;t Confuse an Ignition Problem With a Transponder Problem</h2>
          <p>
            If your key turns smoothly but the engine doesn&apos;t start, the issue is likely the{' '}
            <Link href="/transponder-key-programming-ashton">transponder chip</Link> rather than the ignition barrel.
            The symptoms are similar from the driver&apos;s seat — key goes in, turns, nothing happens — but the
            cause and fix are different. We diagnose on-site to identify which it is before recommending anything.
          </p>

          <h2>Part of Our Auto Locksmith Service</h2>
          <p>
            Ignition repair is one aspect of our full{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith service in Ashton-in-Makerfield</Link>.
            If your vehicle also needs a replacement car key or broken key extraction, we handle everything on the
            same visit.
          </p>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Ignition Problems?"
        subtext="Call Ashton Lock & Key — we diagnose and repair car ignitions on-site in Ashton-in-Makerfield, same day."
      />
      <FAQSection faqs={faqs} heading="Car Ignition Repair FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Broken Car Key Extraction', desc: 'Snapped key in ignition removed cleanly.', href: '/broken-car-key-extraction-ashton' },
              { title: 'Transponder Key Programming', desc: 'Engine not starting? May be the chip, not ignition.', href: '/transponder-key-programming-ashton' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service overview.', href: '/auto-locksmith-ashton-in-makerfield' },
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
