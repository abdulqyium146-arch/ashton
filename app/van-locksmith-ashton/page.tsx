import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Van Locksmith Ashton-in-Makerfield | Commercial Vehicle Locks | 24/7',
  description: 'Van locksmith in Ashton-in-Makerfield. Van lockouts, van key replacement, deadlock fitting, and slam lock installation. 24/7 commercial vehicle service. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/van-locksmith-ashton`,
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
    question: 'Can you open a van if I\'ve locked my keys inside?',
    answer: 'Yes. We use non-destructive entry techniques designed for commercial vehicles including Transit, Vivaro, Sprinter, and Ducato vans. We open the vehicle cleanly without damage to the bodywork, glass, or door seals.',
  },
  {
    question: 'Do you fit deadlocks to vans?',
    answer: 'Yes. Van deadlocks are one of the most effective deterrents against van break-ins â€” the standard slam lock is vulnerable to relay attacks and physical compromise, while a properly fitted deadlock requires the key to be present. We supply and fit Deadlocks, Van Vault locks, and slam locks from leading manufacturers.',
  },
  {
    question: 'Can you replace van keys including Vauxhall Vivaro, Ford Transit, and Mercedes Sprinter?',
    answer: 'Yes. We cover key replacement and programming for all common commercial vans including Ford Transit, Ford Transit Custom, Vauxhall Vivaro, Renault Trafic, Mercedes Sprinter, Volkswagen Transporter, CitroÃ«n Dispatch, Peugeot Expert, and Fiat Ducato.',
  },
  {
    question: 'I\'m a sole trader â€” can you come to wherever my van is broken down?',
    answer: 'Yes. We\'re mobile â€” we come to wherever your vehicle is. If your van is at a job site, a depot, a roadside, or your home address, we\'ll attend. For urgent commercial call-outs, ring us and we\'ll give you an honest ETA.',
  },
]

export default function VanLocksmithPage() {
  const pageUrl = `${BUSINESS.url}/van-locksmith-ashton`
  const schemas = [
    serviceSchema(
      'Van Locksmith Ashton-in-Makerfield',
      'Van locksmith service in Ashton-in-Makerfield. Van lockouts, van key replacement, deadlock fitting, and commercial vehicle security. Available 24/7.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Van Locksmith Ashton', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Van Locksmith Ashton-in-Makerfield | 24/7 Commercial Vehicle Locks',
      description: 'Van locksmith in Ashton-in-Makerfield. Lockouts, key replacement, deadlock fitting. 24/7.',
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
        { label: 'Van Locksmith Ashton' },
      ]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Commercial Vehicle Specialists â€” Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Van Locksmith â€”{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Locked out of your van? Lost your van keys? Need a deadlock fitted to protect your tools?
            We cover all commercial vehicle locksmith needs in Ashton-in-Makerfield â€” 24/7, mobile, fast.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay} â€” 24/7
          </a>
        </div>
      </section>

      <section className="section-padding bg-brand-light" aria-labelledby="vanservices-heading">
        <div className="container-max max-w-3xl">
          <h2 id="vanservices-heading" className="text-2xl font-black text-brand-navy mb-8 text-center">Van Locksmith Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Van Lockout Service', desc: 'Locked keys in van â€” non-destructive entry for all common makes.' },
              { title: 'Van Key Replacement', desc: 'Lost or stolen van keys replaced and programmed on-site.' },
              { title: 'Deadlock Fitting', desc: 'High-security deadlocks fitted to van load doors â€” protects tools.' },
              { title: 'Slam Lock Fitting', desc: 'Slam locks for delivery drivers and fleet vehicles.' },
              { title: 'Van Ignition Repair', desc: 'Stiff or failed ignition barrels repaired or replaced on-site.' },
              { title: 'Broken Key Extraction', desc: 'Key snapped in van door or ignition â€” removed without damage.' },
            ].map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-1">{svc.title}</h3>
                <p className="text-gray-600 text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>Van Security â€” Why Deadlocks Matter</h2>
          <p>
            Van break-ins are a significant problem across the North West. Standard OEM slam locks on most vans
            can be compromised relatively quickly using techniques that don&apos;t damage the exterior â€” making it look
            like the vehicle was never touched. If your van is your livelihood and carries thousands of pounds of
            tools, the cost of a deadlock (typically Â£80â€“Â£150 fitted) is negligible compared to a single theft.
          </p>
          <p>
            We supply and fit deadlocks from Mul-T-Lock, Slamlock, and other leading brands to the rear and side
            doors of most common UK vans. Call us with your van make and model to confirm compatibility and get a quote.
          </p>

          <h2>Van Makes We Cover</h2>
          <p>
            Ford Transit, Ford Transit Custom, Vauxhall Vivaro, Vauxhall Movano, Renault Trafic, Renault Master,
            Mercedes Sprinter, Volkswagen Transporter (T5/T6), CitroÃ«n Dispatch / Relay, Peugeot Expert / Boxer,
            Fiat Ducato, Nissan NV200 / NV300 / NV400, Toyota Proace, Iveco Daily.
          </p>
          <p>
            Don&apos;t see your van listed? Call us â€” we almost certainly cover it.
          </p>

          <h2>Emergency Van Lockout â€” Any Hour, Any Location</h2>
          <p>
            Being locked out of your van at a job site first thing in the morning, or late at night when your last
            delivery is done, costs you time and money. We run a true 24/7 van lockout service across Ashton-in-Makerfield
            and the wider Wigan area. Ring us, tell us where you are, and we&apos;ll give you a confirmed ETA and fixed price.
          </p>
          <p>
            For full coverage of our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith services in Ashton-in-Makerfield</Link>, or
            for residential locksmith work, see our{' '}
            <Link href="/emergency-locksmith-ashton-in-makerfield">emergency locksmith service</Link>.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Van Locksmith in Ashton-in-Makerfield"
        subtext="Locked out, lost keys, or need a deadlock fitted? Call Ashton Lock & Key â€” 24/7, mobile, fixed price."
      />
      <FAQSection faqs={faqs} heading="Van Locksmith FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service including car and van.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Car Lockout Service', desc: 'Non-destructive entry for cars and vans.', href: '/car-lockout-service-ashton' },
              { title: 'Car Key Replacement', desc: 'Van and car keys replaced and programmed.', href: '/car-key-replacement-ashton' },
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
