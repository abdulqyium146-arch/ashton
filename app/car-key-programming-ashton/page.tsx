import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Key Programming Ashton-in-Makerfield | Transponder & Smart Key | Same Day',
  description: 'Car key programming in Ashton-in-Makerfield. Transponder chip programming, smart key coding, ECU pairing â€” all makes. Mobile, same day. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/car-key-programming-ashton`,
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
    question: 'What is car key programming?',
    answer: 'Car key programming is the process of linking a new key\'s transponder chip (or smart key module) to your vehicle\'s immobiliser ECU. Without this step, the engine won\'t start even if the physical key blade fits perfectly. Since the mid-90s, virtually every car key requires programming.',
  },
  {
    question: 'Can you programme a key I\'ve bought online?',
    answer: 'Sometimes â€” but it depends on the make and model. Keys bought online are often uncoded blanks that need to be both cut and programmed. Call us with your registration and key part number and we\'ll confirm whether we can programme it.',
  },
  {
    question: 'My car starts but the immobiliser light is on â€” can you fix it?',
    answer: 'An immobiliser warning that stays on while driving usually means the transponder communication is intermittent or the key chip is failing. We carry diagnostic equipment to read fault codes and identify whether it\'s the key, the antenna ring, or the ECU itself.',
  },
  {
    question: 'How much does car key programming cost?',
    answer: 'Programming only (e.g. for a key you already have cut) typically starts from Â£60â€“Â£80 for a standard transponder key. Smart key and proximity key programming is typically Â£100â€“Â£160. All-keys-lost (AKL) programming starts from Â£120. Exact quotes given over the phone.',
  },
]

const programmingTypes = [
  {
    title: 'Transponder Key Programming',
    desc: 'Programmes the microchip embedded in a standard metal key to your vehicle\'s immobiliser. Required on virtually all cars made after 1995. See our dedicated <a href="/transponder-key-programming-ashton">transponder key programming</a> page.',
  },
  {
    title: 'Remote Key Fob Coding',
    desc: 'Syncs the central locking remote to your vehicle, alongside transponder programming. A remote that isn\'t coded will lock and unlock nothing.',
  },
  {
    title: 'Smart Key / Proximity Key Programming',
    desc: 'Full keyless entry and push-button start system coding for modern vehicles. Requires specialist diagnostic tools. More complex and priced accordingly.',
  },
  {
    title: 'All Keys Lost (AKL) Programming',
    desc: 'When no working keys remain, existing key data is erased from the ECU and new keys are programmed from scratch. See our <a href="/lost-car-keys-ashton">lost car keys</a> page.',
  },
  {
    title: 'Key Cloning',
    desc: 'Copies the chip data from an existing working key onto a new blank. Faster and cheaper than full ECU programming where the vehicle supports it.',
  },
  {
    title: 'ECU Pairing',
    desc: 'Used after ECU replacement â€” re-links the new ECU to the existing vehicle keys so the immobiliser recognises them.',
  },
]

export default function CarKeyProgrammingPage() {
  const pageUrl = `${BUSINESS.url}/car-key-programming-ashton`
  const schemas = [
    serviceSchema(
      'Car Key Programming Ashton-in-Makerfield',
      'Car key programming in Ashton-in-Makerfield â€” transponder keys, smart keys, remote fobs, AKL, and ECU pairing. Mobile same-day service for all makes and models.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Car Key Programming Ashton', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Car Key Programming Ashton-in-Makerfield | Same Day',
      description: 'Car key programming in Ashton-in-Makerfield. All types, all makes, mobile same-day service.',
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
        { label: 'Car Key Programming Ashton' },
      ]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            Diagnostic Key Programming â€” Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Car Key Programming{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            A correctly cut key that hasn&apos;t been programmed won&apos;t start your car. We carry specialist diagnostic
            equipment to programme transponder chips, smart keys, and remote fobs on-site â€” at your vehicle,
            same day, for all makes and models.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* PROGRAMMING TYPES */}
      <section className="section-padding bg-brand-light" aria-labelledby="types-heading">
        <div className="container-max">
          <h2 id="types-heading" className="text-2xl font-black text-brand-navy mb-8 text-center">Programming Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmingTypes.map((pt) => (
              <div key={pt.title} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-orange transition-colors">
                <h3 className="font-bold text-brand-navy mb-2">{pt.title}</h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pt.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">

          <h2>Why Key Programming Is Non-Negotiable on Modern Vehicles</h2>
          <p>
            Since the mid-1990s, car manufacturers have built immobilisers into their vehicles as standard â€” initially
            required by insurance companies to reduce the wave of car theft that peaked in that decade. An immobiliser
            works by requiring the key to broadcast a specific transponder code before the engine will start. If that
            code isn&apos;t present or isn&apos;t recognised, the fuel system cuts out and the car won&apos;t run.
          </p>
          <p>
            This means a key cut perfectly to fit your ignition barrel is still useless without programming. The cut
            lets you turn the key â€” the chip lets the engine start. Both steps are required.
          </p>

          <h2>Our Diagnostic Equipment</h2>
          <p>
            We use AUTEL, Xhorse, and Advanced Diagnostics programming platforms covering the vast majority of
            makes and models sold in the UK. These communicate directly with the vehicle&apos;s ECU via the OBD port
            to perform key additions, all-keys-lost wipes, and immobiliser resets.
          </p>
          <p>
            Some complex or niche vehicles require pin code extraction before programming can begin â€” we handle
            this within the same visit where supported by the platform. Call us with your make, model, and year
            and we&apos;ll confirm compatibility before attending.
          </p>

          <h2>Key Programming Without Cutting â€” Is It Possible?</h2>
          <p>
            In some cases, yes. Key cloning duplicates the transponder chip data from a working original onto a
            new blank without ECU access â€” it&apos;s faster, cheaper, and doesn&apos;t require the working key to be
            present for the full duration. However, not every vehicle supports cloning (many modern immobilisers
            use rolling codes that can&apos;t be cloned), so we&apos;ll advise which method is appropriate for
            your vehicle.
          </p>

          <h2>Can You Programme a Key I&apos;ve Already Bought?</h2>
          <p>
            Sometimes. Online marketplaces sell uncoded key blanks for many common vehicles. If you&apos;ve purchased
            one, call us with the part number and your registration â€” we&apos;ll confirm whether we can programme it
            and what it will cost. Note that the cut blade still needs to be done correctly; if it&apos;s already been
            cut poorly, no amount of programming will make the key work smoothly in the ignition.
          </p>

          <h2>Ashton-in-Makerfield Service Area</h2>
          <p>
            We&apos;re based in Ashton-in-Makerfield and cover WN4 and the surrounding area. For car key programming
            in the wider Wigan borough, see{' '}
            <Link href="/car-key-replacement-wigan">car key replacement across Wigan</Link>. For a full overview
            of our auto locksmith capabilities, visit our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith Ashton-in-Makerfield</Link> hub page.
          </p>
          <p>
            Want to understand more about key types and what programming involves?{' '}
            <Link href="/blog/transponder-key-vs-smart-key-explained">Our guide to transponder vs smart keys</Link>{' '}
            explains the technical differences in plain language â€” useful reading before you call.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        variant="orange"
        heading="Need a Car Key Programmed in Ashton-in-Makerfield?"
        subtext="We carry diagnostic equipment for all common makes. Call Ashton Lock & Key â€” mobile, same day, fixed price."
      />
      <FAQSection faqs={faqs} heading="Car Key Programming FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Transponder Key Programming', desc: 'Dedicated transponder chip programming service.', href: '/transponder-key-programming-ashton' },
              { title: 'Car Key Replacement Ashton', desc: 'Full cut-and-programme replacement service.', href: '/car-key-replacement-ashton' },
              { title: 'Lost Car Keys', desc: 'All-keys-lost AKL programming from scratch.', href: '/lost-car-keys-ashton' },
              { title: 'Car Key Fob Replacement', desc: 'Remote fob coding and replacement.', href: '/car-key-fob-replacement-ashton' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service overview.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Transponder vs Smart Key Guide', desc: 'Understand key types before you call.', href: '/blog/transponder-key-vs-smart-key-explained' },
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
