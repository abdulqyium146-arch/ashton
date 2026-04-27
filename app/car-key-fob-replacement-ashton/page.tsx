import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Key Fob Replacement Ashton-in-Makerfield | Re-sync & Repair | Same Day',
  description: 'Key fob not working in Ashton-in-Makerfield? We re-sync, repair, or replace car key fobs for all makes. Mobile same-day service. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/car-key-fob-replacement-ashton`,
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
    question: 'Why has my car key fob stopped working?',
    answer: 'The most common cause is a flat battery â€” easy to rule out by replacing the battery yourself (CR2032 in most cases). If that doesn\'t fix it, the fob may have lost its pairing with the car (common after a battery replacement or jump start), the internal circuit may be damaged, or the transponder chip may be failing. We can diagnose which it is.',
  },
  {
    question: 'Can you re-sync a key fob that has lost its pairing?',
    answer: 'Yes. We re-sync fobs to vehicles using manufacturer-compatible programming equipment. Some vehicles allow fob re-sync through a simple button sequence â€” others require diagnostic access. Either way, we handle it on-site.',
  },
  {
    question: 'How much does key fob replacement cost in Ashton-in-Makerfield?',
    answer: 'If just re-syncing is needed, from around Â£40â€“Â£60. A fully replaced fob (new unit, programmed) typically runs Â£80â€“Â£150 depending on make and model. Smart key / proximity key fobs are more complex and priced accordingly.',
  },
  {
    question: 'My fob\'s buttons are physically broken â€” can it be repaired?',
    answer: 'Sometimes. The internal circuit board is often fine even when the outer casing is cracked or buttons have broken off. We can assess whether a new casing and circuit transplant is viable, or whether a full fob replacement is the better option.',
  },
]

export default function CarKeyFobReplacementPage() {
  const pageUrl = `${BUSINESS.url}/car-key-fob-replacement-ashton`
  const schemas = [
    serviceSchema(
      'Car Key Fob Replacement Ashton-in-Makerfield',
      'Car key fob re-sync, repair, and replacement in Ashton-in-Makerfield. Mobile same-day service for all makes and models.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Car Key Fob Replacement', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Car Key Fob Replacement Ashton-in-Makerfield | Re-sync & Repair',
      description: 'Key fob re-sync, repair and replacement in Ashton-in-Makerfield. All makes, same day.',
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
        { label: 'Car Key Fob Replacement' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Car Key Fob Replacement â€”{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Key fob not responding? Central locking stopped working? We diagnose, re-sync, repair, or replace
            car key fobs for all makes and models â€” mobile, at your location, same day.
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
          <h2>What We Check Before Replacing Anything</h2>
          <p>
            A non-working fob doesn&apos;t always mean you need a replacement. The most common fob issue is a flat battery
            â€” a cheap fix you can do yourself with a CR2032 coin cell from any supermarket. If that doesn&apos;t resolve
            it, we diagnose the actual cause before recommending a solution:
          </p>
          <ul>
            <li>Lost pairing (syncronisation dropped) â€” common after battery replacement, jump starts, or ECU updates</li>
            <li>Damaged transponder chip â€” often from water ingress or physical impact</li>
            <li>Broken circuit board or button contacts â€” from drops or wear</li>
            <li>Receiver antenna fault on the vehicle â€” if multiple fobs fail on the same car</li>
          </ul>

          <h2>Re-Sync vs Full Replacement</h2>
          <p>
            If the fob itself is intact but has simply lost its pairing, a re-sync is faster and cheaper than a
            full replacement. We use diagnostic equipment to re-pair the fob to your vehicle&apos;s ECU â€” on-site,
            in most cases within 20â€“30 minutes.
          </p>
          <p>
            If the fob is physically damaged or the chip has failed, we supply and programme a replacement unit.
            For full{' '}
            <Link href="/car-key-replacement-ashton">car key replacement in Ashton-in-Makerfield</Link> including
            a new blade, see our dedicated page.
          </p>

          <h2>Smart Key Fobs â€” More Complex, Still Fixable</h2>
          <p>
            Modern proximity keys (smart keys) that allow push-button start without inserting anything are a more
            involved job â€” the programming requires deeper diagnostic access than a standard remote fob. We cover
            smart key fob replacement through our{' '}
            <Link href="/transponder-key-programming-ashton">transponder and smart key programming service</Link>.
            Call us with your vehicle details and we&apos;ll confirm whether we can sort it on a same-day basis.
          </p>

          <h2>Full Auto Locksmith Services</h2>
          <p>
            Key fob work is part of our wider{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith service in Ashton-in-Makerfield</Link>,
            which also covers car lockouts, car key replacement, transponder programming, ignition repair, and
            broken key extraction.
          </p>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Key Fob Not Working?"
        subtext="Don't guess â€” call us and describe the problem. We'll diagnose and fix it on-site, same day."
      />
      <FAQSection faqs={faqs} heading="Key Fob FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement Ashton', desc: 'Full cut-and-programme replacement.', href: '/car-key-replacement-ashton' },
              { title: 'Transponder Key Programming', desc: 'Chip programming and smart key coding.', href: '/transponder-key-programming-ashton' },
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
