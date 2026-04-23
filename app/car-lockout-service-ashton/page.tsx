import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Lockout Service Ashton-in-Makerfield | Locked Keys in Car | 24/7',
  description: 'Locked your keys in your car near Ashton-in-Makerfield? Ashton Lock & Key opens vehicles without damage — 24/7, 30-min response, no call-out fee. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/car-lockout-service-ashton`,
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
    question: 'How do you open a car without the key?',
    answer: 'We use professional non-destructive entry tools — specialised wedge sets and long-reach tools that allow us to operate the internal handle or unlock button without touching the glass, paintwork, or door seals. No drilling, no damage. The technique varies by vehicle make and model.',
  },
  {
    question: 'Will my car be damaged when you open it?',
    answer: 'No. Non-destructive entry is the industry standard technique and causes no damage when performed correctly by an experienced auto locksmith. We open cars professionally every day — your vehicle will look exactly the same as it did before we arrived.',
  },
  {
    question: 'I\'ve locked my keys in my car at night — can you still come out?',
    answer: 'Yes. We operate 24 hours a day, every day of the year including bank holidays and Christmas. The out-of-hours rate applies, but you\'ll be quoted the exact price before we set off.',
  },
  {
    question: 'What if I\'ve broken the key off in the lock?',
    answer: 'That\'s a different job but equally fixable. Our broken key extraction service removes the snapped fragment without damaging the lock barrel. We can then cut you a replacement key on the spot if needed.',
  },
]

export default function CarLockoutPage() {
  const pageUrl = `${BUSINESS.url}/car-lockout-service-ashton`
  const schemas = [
    serviceSchema(
      'Car Lockout Service Ashton-in-Makerfield',
      'Professional car lockout service in Ashton-in-Makerfield. Non-destructive vehicle entry — no damage, fast response. Available 24/7 across Wigan.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` },
      { name: 'Car Lockout Service', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Car Lockout Service Ashton-in-Makerfield | Locked Keys in Car',
      description: 'Car lockout service in Ashton-in-Makerfield. Non-destructive entry, 24/7, 30-min response.',
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
        { label: 'Car Lockout Service' },
      ]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Available Now — 24/7 Car Lockout Service
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Locked Keys in Car —{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Keys locked inside your car? Don&apos;t panic. Ashton Lock &amp; Key opens vehicles professionally
            without causing any damage — 24 hours a day, 7 days a week. We&apos;re based in Ashton-in-Makerfield
            so most WN4 call-outs see us arrive in under 30 minutes.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay} — 24/7
          </a>
        </div>
      </section>

      {/* STEPS */}
      <section className="section-padding bg-brand-light" aria-labelledby="steps-heading">
        <div className="container-max max-w-3xl">
          <h2 id="steps-heading" className="text-2xl font-black text-brand-navy mb-8 text-center">What Happens When You Call</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'You Call — We Answer', desc: 'Ring 07711 341668 any time. You speak directly to the locksmith, not a call centre. Tell us where you are and what\'s happened.' },
              { step: '2', title: 'Fixed Price Quoted Upfront', desc: 'We give you a confirmed, all-inclusive price over the phone before we set off. No surprises, no hidden extras.' },
              { step: '3', title: 'We Come to You', desc: 'We head directly to your location — car park, roadside, home, work, wherever. Most Ashton-in-Makerfield call-outs take under 30 minutes.' },
              { step: '4', title: 'Non-Destructive Entry', desc: 'Using professional entry tools, we open your vehicle cleanly with zero damage to the bodywork, glass, or locking mechanism.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white rounded-2xl p-5">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">

          <h2>Non-Destructive Car Entry — No Damage Guaranteed</h2>
          <p>
            Professional car lockout service works by using precision wedge tools to create a small, temporary gap
            in the door frame, then manoeuvring a long-reach tool to operate the internal handle or unlock button.
            It leaves no trace — no scratches, no bent frames, no cracked seals.
          </p>
          <p>
            This is the technique used by all professional auto locksmiths. It works on the overwhelming majority
            of vehicles including modern central-locking systems. In the rare scenario where non-destructive entry
            isn&apos;t possible for a specific vehicle, we&apos;ll tell you that upfront and discuss alternatives —
            we won&apos;t start work without your agreement.
          </p>

          <h2>Common Car Lockout Situations We Handle</h2>
          <ul>
            <li>Keys locked inside the car — including with engine running</li>
            <li>Key fob battery flat — central locking not responding</li>
            <li>Key left in the ignition, door locked from outside</li>
            <li>Child or pet locked inside a vehicle</li>
            <li>Frozen door lock in winter (we carry de-icer and penetrating oil)</li>
            <li>Key broken off in the door lock — see our <Link href="/broken-car-key-extraction-ashton">broken key extraction service</Link></li>
          </ul>

          <h2>Pricing — Transparent &amp; Fixed</h2>
          <p>
            Standard daytime car lockout (07:00–20:00): from <strong>£60</strong>.<br />
            Out-of-hours (20:00–07:00): from <strong>£80</strong>.<br />
            Prices confirmed over the phone before we attend. What we quote is what you pay — full stop.
          </p>
          <p>
            For a broader breakdown of auto locksmith costs, see our{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">UK locksmith pricing guide for 2026</Link>.
          </p>

          <h2>What to Do While You Wait</h2>
          <p>
            Once you&apos;ve called us, there&apos;s not a lot to do — but here&apos;s what helps:
          </p>
          <ul>
            <li>Stay with or near the vehicle if it&apos;s safe to do so</li>
            <li>Keep your phone on — we may call to confirm your exact location</li>
            <li>If you&apos;re in an unsafe location (e.g. a dark car park late at night), move to a visible, lit area nearby</li>
            <li>Don&apos;t attempt to break in yourself — you risk damaging the door, and some techniques (coat hanger, screwdriver) will trigger the central locking immobiliser</li>
          </ul>

          <h2>Locked Out of Your Home Too?</h2>
          <p>
            If your house keys were on the same ring as your car keys, we can handle both on the same call-out.
            Our <Link href="/emergency-locksmith-ashton-in-makerfield">24/7 emergency locksmith service</Link> covers
            residential lockouts across Ashton-in-Makerfield and Wigan. One call, one locksmith, both problems sorted.
          </p>

          <h2>Auto Locksmith Services in Ashton-in-Makerfield</h2>
          <p>
            A car lockout is the most common auto locksmith job, but not the only one. If you need a{' '}
            <Link href="/car-key-replacement-wigan">replacement car key</Link> cut and programmed, a{' '}
            <Link href="/car-key-fob-replacement-ashton">key fob repaired or replaced</Link>, or a{' '}
            <Link href="/transponder-key-programming-ashton">transponder key programmed</Link>, we handle all of
            it — often on the same visit. See our full list of{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith services in Ashton-in-Makerfield</Link>.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        variant="navy"
        heading="Locked Out of Your Car?"
        subtext="Call Ashton Lock & Key now. Non-destructive entry, 24/7, fixed price given before we set off."
      />
      <FAQSection faqs={faqs} heading="Car Lockout FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service — all vehicle situations.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Lost or broken keys replaced and programmed on-site.', href: '/car-key-replacement-wigan' },
              { title: 'Broken Key Extraction', desc: 'Key snapped in door or ignition? Removed cleanly.', href: '/broken-car-key-extraction-ashton' },
              { title: 'Lost Car Keys', desc: 'All keys lost? We programme from scratch.', href: '/lost-car-keys-ashton' },
              { title: 'Emergency Locksmith', desc: 'House lockouts and lock repairs 24/7.', href: '/emergency-locksmith-ashton-in-makerfield' },
              { title: 'Car Key Fob Replacement', desc: 'Fob not working? Re-synced, repaired, or replaced.', href: '/car-key-fob-replacement-ashton' },
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
