import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Spare Car Key Ashton-in-Makerfield | Cut & Programmed | From £60',
  description: 'Get a spare car key cut and programmed in Ashton-in-Makerfield. All makes and models, mobile service. Protect yourself from lockouts. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/spare-car-key-ashton`,
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
    question: 'How much does a spare car key cost in Ashton-in-Makerfield?',
    answer: 'Standard transponder spare keys start from around £60–£80. Remote key fobs are typically £100–£150. Smart keys start from around £150. Getting a spare programmed while we\'re already on-site for another job costs even less — ask about our multi-key discount.',
  },
  {
    question: 'Why is getting a spare car key cheaper when added to another job?',
    answer: 'The majority of the cost is our attendance and the programming setup. Once we\'re already at your vehicle with the equipment running, adding a second key requires much less additional time — so we pass that saving on.',
  },
  {
    question: 'How long does it take to get a spare car key made?',
    answer: 'For most vehicles, 30–45 minutes. We cut the blade and programme the chip on-site. You leave with a fully working spare key ready to use.',
  },
  {
    question: 'Where should I keep a spare car key?',
    answer: 'Not in the car — that defeats the purpose. Good options: with a trusted family member, in a keysafe at home, or with a reliable neighbour. Don\'t keep it in an obvious place like a handbag that travels with you everywhere.',
  },
]

export default function SpareCarKeyPage() {
  const pageUrl = `${BUSINESS.url}/spare-car-key-ashton`
  const schemas = [
    serviceSchema(
      'Spare Car Key Ashton-in-Makerfield',
      'Spare car key cutting and programming in Ashton-in-Makerfield. Protect yourself from future lockouts and lost key situations. All makes and models.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Spare Car Key Ashton', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Spare Car Key Ashton-in-Makerfield | Cut & Programmed',
      description: 'Spare car key cut and programmed in Ashton-in-Makerfield. All makes, mobile service.',
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
        { label: 'Spare Car Key Ashton' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Spare Car Key —{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            A spare car key is cheap insurance against one of the most inconvenient situations you can face. We
            cut and programme spare keys for all makes and models — mobile, at your vehicle, while you wait.
            Getting one programmed during another visit saves you even more.
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
          <h2>Why You Should Have a Spare Car Key</h2>
          <p>
            Most people don&apos;t think about getting a spare until they&apos;ve already lost their main key. By that point,
            they face an all-keys-lost replacement job — which is significantly more expensive and time-consuming
            than simply having a spare programmed while everything is working normally.
          </p>
          <p>
            A spare key costs a fraction of an emergency{' '}
            <Link href="/lost-car-keys-ashton">all-keys-lost replacement</Link>. It also means a trusted person
            can get your car if you&apos;re in hospital, you can lend the car without handing over your main key,
            and you&apos;re never fully stranded if one key goes missing.
          </p>

          <h2>Getting a Spare Key Added During Another Visit</h2>
          <p>
            If you&apos;re having a{' '}
            <Link href="/car-key-replacement-ashton">car key replacement</Link> or any other programming work done,
            adding a spare at the same time is the most cost-effective option. Once the equipment is connected and
            the vehicle is in programming mode, the cost of adding a second key is much lower than a separate
            call-out.
          </p>

          <h2>What to Do With Your Spare</h2>
          <p>
            Keep the spare somewhere sensible — with a family member you trust, in a wall-mounted key safe at home,
            or with a reliable neighbour. Don&apos;t keep it in the glove box, on the same ring as the main key, or
            in a bag you carry daily. A spare that travels everywhere with you provides no protection against
            losing the main key.
          </p>

          <h2>Related Services</h2>
          <p>
            See our <Link href="/auto-locksmith-ashton-in-makerfield">full auto locksmith service in Ashton-in-Makerfield</Link> or
            our <Link href="/car-key-replacement-ashton">car key replacement Ashton</Link> page for full pricing and details.
            For context on why spare keys matter, our{' '}
            <Link href="/blog/lost-car-keys-what-to-do-uk">guide to what to do when you&apos;ve lost your car keys</Link>{' '}
            explains every option available.
          </p>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Get a Spare Car Key Today"
        subtext="Don't wait until you've lost your main key. Call Ashton Lock & Key — mobile, fast, all makes."
      />
      <FAQSection faqs={faqs} heading="Spare Car Key FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement Ashton', desc: 'Full replacement — lost, broken or stolen.', href: '/car-key-replacement-ashton' },
              { title: 'Lost Car Keys', desc: 'Lost all keys? AKL replacement from scratch.', href: '/lost-car-keys-ashton' },
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
