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
  title: 'Boot & Trunk Unlocking Ashton-in-Makerfield | Mobile',
  description: 'Boot won\'t open or keys locked in the boot in Ashton-in-Makerfield? We access vehicle boots without damage â€” failed remote, mechanical fault, or locked inside. Call 07309 903243.',
  alternates: { canonical: `${BUSINESS.url}/trunk-unlock-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'How do you open a car boot without keys?',
    answer: 'The approach depends on the situation. If the keys are locked inside the vehicle cabin, we gain entry to the car first via non-destructive entry, then operate the boot release from inside. If the boot lock mechanism has failed mechanically, we access via the cabin or use specialised tools to operate the latch directly. We never drill or force the lock.',
  },
  {
    question: 'Can you open a boot if the remote has stopped working?',
    answer: 'Yes. If the remote release has failed but the mechanical lock is intact, we gain entry to the cabin and operate the internal boot release. If the vehicle doesn\'t have an internal release (some saloons and sports cars), we use other access methods. We assess the situation when we arrive and advise before doing anything.',
  },
  {
    question: 'My keys are locked in the boot â€” can I still get my car open?',
    answer: 'Yes. This is one of the most common boot-lock situations. We use non-destructive entry tools to open the car door, which gives access to the internal boot release. Once the boot is open and the keys are retrieved, we also confirm the vehicle locks and remote are functioning correctly before leaving.',
  },
  {
    question: 'Will opening the boot leave any damage?',
    answer: 'No â€” we only use non-destructive methods. We will not drill, force, or use destructive techniques unless every non-destructive option has been exhausted and you have explicitly agreed. In practice, we achieve successful non-destructive access in the vast majority of boot-unlock situations.',
  },
  {
    question: 'What if the boot lock has mechanically failed, not just stuck?',
    answer: 'Mechanical boot lock failures â€” where the latch isn\'t releasing despite the remote or button operating â€” are usually caused by a failed actuator or a broken latch cable. We can diagnose and often repair these on-site. If a replacement part is required, we\'ll advise on sourcing and a follow-up visit.',
  },
  {
    question: 'How much does boot unlocking cost in Ashton-in-Makerfield?',
    answer: 'Boot unlocking as part of a car lockout starts from Â£60 (daytime). If the boot lock mechanism requires additional repair work, that is quoted separately before any additional work begins.',
  },
]

export default function TrunkUnlockAshtonPage() {
  const pageUrl = `${BUSINESS.url}/trunk-unlock-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Boot & Trunk Unlocking Ashton-in-Makerfield', 'Professional boot and trunk unlocking in Ashton-in-Makerfield. Non-destructive access â€” failed remote, mechanical fault, or keys locked inside.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Boot / Trunk Unlocking', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Boot & Trunk Unlocking Ashton-in-Makerfield | Mobile', description: 'Boot and trunk unlocking in Ashton-in-Makerfield. Non-destructive, mobile service â€” all situations covered.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Boot / Trunk Unlocking' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Boot &amp; Trunk Unlocking â€” Ashton-in-Makerfield &amp; Wigan
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Boot &amp; Trunk Unlocking in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Boot won&apos;t open? Keys locked inside the boot? Remote release not working? Ashton Lock
            &amp; Key provides mobile boot and trunk unlocking across Ashton-in-Makerfield and Wigan â€”
            without damage to your vehicle, 24 hours a day.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Whether the issue is a failed remote, a mechanical latch fault, or keys accidentally locked
            inside, we gain access using non-destructive techniques. No drilled locks, no broken seals,
            no damage of any kind.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', 'No Damage Guaranteed', '24/7 Service', 'All Access Scenarios Covered', 'Fixed Price Upfront'].map(t => (
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
          <h2>Professional Boot &amp; Trunk Unlocking in Ashton-in-Makerfield</h2>
          <p>
            A locked or stuck boot creates a frustrating situation â€” particularly when your keys are
            inside it, your shopping is inaccessible, or you need something urgently from the load
            area. Ashton Lock &amp; Key handles all boot and trunk access situations across
            Ashton-in-Makerfield and the Wigan area, using non-destructive techniques that leave
            the vehicle exactly as we found it.
          </p>
          <h3>Keys Locked Inside the Boot</h3>
          <p>
            This is the most common boot-unlock scenario. When keys are locked in the boot and
            there is no spare, we first open the vehicle door using standard non-destructive entry â€”
            the same technique used for a regular car lockout. Once inside, we operate the internal
            boot release to retrieve the keys. The whole process typically takes 20â€“40 minutes
            from arrival.
          </p>
          <h3>Remote Release Not Working</h3>
          <p>
            If the key fob or dashboard button isn&apos;t releasing the boot, the issue may be a
            failed remote signal, a blown fuse, or a faulty actuator within the boot latch. We
            diagnose the cause on-site. In most cases, the boot can be opened immediately via
            alternative means while the underlying fault is identified and addressed.
          </p>
          <h3>Mechanical Boot Lock Failure</h3>
          <p>
            Boot latch mechanisms can fail due to worn cables, failed actuators, or debris in the
            latch assembly. We carry tools to operate stuck latches directly in many cases,
            and can often repair cable-operated boots on-site. Where an actuator replacement is
            required, we advise on parts and can often complete the repair on a follow-up visit.
          </p>
          <h3>Saloon &amp; Sports Cars Without Internal Releases</h3>
          <p>
            Some vehicles â€” particularly older saloons and certain sports cars â€” don&apos;t have
            an internal boot release accessible from the cabin. For these, we use alternative
            access methods specific to the vehicle layout. Call us with your make, model, and
            year and we&apos;ll advise on the approach before attending.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Boot Unlocking for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We access boots on all common UK vehicles including <strong>Ford, Vauxhall, VW, BMW,
            Audi, Mercedes-Benz, Toyota, Nissan, Renault, Peugeot, Kia, Honda, Skoda,
            Land Rover</strong>, and more. Hatchback, saloon, estate, or SUV.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call {BUSINESS.phoneDisplay}</a> â€” available 24/7, fixed price, no call-out fee.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Boot Unlocking Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                Based at <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong>,
                we provide mobile boot unlocking across Ashton-in-Makerfield and the surrounding area.
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

      <CTASection variant="orange" heading="Boot Won't Open in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key â€” non-destructive boot access, 24/7, no call-out fee." />
      <FAQSection faqs={faqs} heading="Boot Unlocking FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Lockout Service', desc: 'Keys in the boot? We open the car door first.', href: '/car-lockout-ashton-in-makerfield' },
              { title: 'Emergency Auto Locksmith', desc: '24/7 emergency â€” any vehicle access situation.', href: '/emergency-auto-locksmith-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Retrieved your key but need a spare cut?', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Key Fob Programming', desc: 'Boot remote not working? We repair fobs too.', href: '/key-fob-programming-ashton-in-makerfield' },
              { title: 'Broken Key Extraction', desc: 'Key snapped in the boot lock?', href: '/broken-key-extraction-ashton-in-makerfield' },
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
