import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Broken Car Key Extraction Ashton-in-Makerfield | Key Snapped in Lock | Same Day',
  description: 'Key broken in car door or ignition near Ashton-in-Makerfield? We extract snapped keys without damage and replace them on the spot. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/broken-car-key-extraction-ashton`,
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
    question: 'Can you remove a broken key without damaging the lock?',
    answer: 'Yes, in almost all cases. We use professional extraction tools â€” key extractors and broken key removers â€” designed specifically for this purpose. The goal is always to remove the fragment without damaging the lock barrel, so you don\'t need to replace the whole lock.',
  },
  {
    question: 'Can you cut a replacement key after extracting the broken one?',
    answer: 'Yes â€” we carry blanks and cutting equipment on the van. In most cases we can cut and programme a replacement key on the same visit. You\'ll leave with the broken fragment removed and a working key in your hand.',
  },
  {
    question: 'What if the key broke off in the ignition?',
    answer: 'Ignition extraction is more complex than door lock extraction, but it\'s a job we handle regularly. Don\'t try to drive with the broken fragment in place â€” call us and we\'ll extract it and assess whether the ignition barrel has been damaged.',
  },
  {
    question: 'Why do car keys break?',
    answer: 'Most keys break due to metal fatigue from years of use, or because someone has forced the key at an angle. Transponder keys are more vulnerable than old-style solid metal keys because the plastic head distributes force poorly. If your key is visibly worn or has a crack in the metal, it\'s worth replacing before it snaps.',
  },
]

export default function BrokenCarKeyExtractionPage() {
  const pageUrl = `${BUSINESS.url}/broken-car-key-extraction-ashton`
  const schemas = [
    serviceSchema(
      'Broken Car Key Extraction Ashton-in-Makerfield',
      'Broken car key extraction in Ashton-in-Makerfield. Snapped keys removed from door locks and ignitions without damage. Same-day replacement available.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Broken Car Key Extraction', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Broken Car Key Extraction Ashton-in-Makerfield | Key Snapped in Lock',
      description: 'Broken car key extraction in Ashton-in-Makerfield. No damage, same-day replacement.',
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
        { label: 'Broken Car Key Extraction' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Broken Car Key Extraction â€”{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Key snapped in the car door or ignition? Don&apos;t try to dig it out yourself â€” you risk pushing the
            fragment deeper and damaging the barrel. We extract broken keys professionally without lock damage, then
            replace the key on the same visit.
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
          <h2>Why You Shouldn&apos;t Try to Extract It Yourself</h2>
          <p>
            The temptation when a key snaps in a lock is to grab a pair of pliers, a thin screwdriver, or even
            a pen knife and try to lever it out. In the majority of cases, this pushes the fragment further in,
            makes it harder to grip, and damages the delicate tumbler pins inside the barrel. A job that should
            cost Â£40â€“Â£60 can turn into a full lock barrel replacement.
          </p>
          <p>
            Professional extraction tools are specifically designed for this â€” narrow enough to reach past the
            remaining fragment, with a barbed or hooked end that grips the key metal and pulls it out cleanly.
          </p>

          <h2>What Happens on the Visit</h2>
          <p>
            We assess whether the fragment is visible and how far it&apos;s gone in, then use the appropriate extraction
            tool. In the majority of cases the fragment comes out intact and the lock barrel is undamaged. We then
            assess whether the lock needs any attention and cut a replacement key on-site.
          </p>
          <p>
            If the barrel has been damaged â€” whether from the initial break or a previous extraction attempt â€” we
            can replace it on the same visit as part of our{' '}
            <Link href="/emergency-locksmith-ashton-in-makerfield">lock repair service</Link>.
          </p>

          <h2>Broken Key in the Ignition</h2>
          <p>
            Ignition extraction is more technically involved â€” the ignition barrel is less accessible and the
            consequences of damaging it are more significant. If your key has broken in the ignition, don&apos;t attempt
            any extraction and don&apos;t try to start the car with the fragment in place. Call us, and we&apos;ll extract it
            and assess the ignition for any damage. If the ignition barrel needs replacing, see our{' '}
            <Link href="/car-ignition-repair-ashton">ignition repair service</Link>.
          </p>

          <h2>After the Extraction</h2>
          <p>
            Once the broken fragment is out, we can cut and programme a replacement key on the same visit for most
            makes and models. If your key was worn before it snapped, it&apos;s also worth considering getting a{' '}
            <Link href="/spare-car-key-ashton">spare car key</Link> made at the same time.
          </p>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Key Broken in the Lock?"
        subtext="Don't make it worse. Call Ashton Lock & Key â€” professional extraction, no damage, replacement on the spot."
      />
      <FAQSection faqs={faqs} heading="Broken Key Extraction FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement Ashton', desc: 'Replacement key cut and programmed same visit.', href: '/car-key-replacement-ashton' },
              { title: 'Car Ignition Repair', desc: 'Ignition barrel repair after key breakage.', href: '/car-ignition-repair-ashton' },
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
