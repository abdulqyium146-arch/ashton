import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { AUTO_SERVICES, COVERAGE_AREAS, VEHICLE_BRANDS, VEHICLE_MODELS, BUSINESS_ADDRESS } from '@/lib/auto-locksmith-data'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Lockout Service Ashton-in-Makerfield | 24/7',
  description: 'Locked out of your car in Ashton-in-Makerfield? We open vehicles 24/7 without damage. 20â€“30 min response. No call-out fee. Call 07309 903243 now.',
  alternates: { canonical: `${BUSINESS.url}/car-lockout-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'How long does it take to unlock a car in Ashton-in-Makerfield?',
    answer: 'From the moment you call, we typically arrive within 20â€“30 minutes for locations in WN4. Opening the vehicle takes a further 10â€“20 minutes on-site using professional non-destructive entry tools. Most customers are back in their car within an hour of calling.',
  },
  {
    question: 'Will my car be damaged when you open it?',
    answer: 'No. We use professional wedge sets and long-reach tools that create a temporary, controlled gap in the door frame. No glass is broken, no paintwork is scratched, and no locking mechanisms are damaged. Your car will look and function exactly the same as before we arrived.',
  },
  {
    question: 'What if my keys are locked in the ignition?',
    answer: 'This is a common variation of the car lockout scenario. We open the vehicle using non-destructive entry, then assess the key situation. If the key is stuck in the ignition we can address that separately â€” see our ignition repair service.',
  },
  {
    question: 'How much does a car lockout service cost in Ashton-in-Makerfield?',
    answer: 'Standard daytime lockout (07:00â€“20:00) starts from Â£60. Out-of-hours (20:00â€“07:00) starts from Â£80. The exact price is confirmed over the phone before we attend â€” what we quote is what you pay.',
  },
  {
    question: 'Do you cover car lockouts across the Wigan area?',
    answer: 'Yes. We cover Ashton-in-Makerfield, Wigan, Golborne, Bryn, Haydock, Newton-le-Willows, Leigh, Garswood, and Billinge. If you\'re unsure whether we reach your location, call us â€” we\'ll give you an honest answer.',
  },
  {
    question: 'Do you open vans and commercial vehicles too?',
    answer: 'Yes. We open cars, vans, and light commercial vehicles. Transit, Vivaro, Sprinter, Transporter â€” all common van makes are covered using the same non-destructive entry approach.',
  },
]

export default function CarLockoutAshtonPage() {
  const pageUrl = `${BUSINESS.url}/car-lockout-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Car Lockout Service Ashton-in-Makerfield', 'Professional car lockout service in Ashton-in-Makerfield. Non-destructive vehicle entry â€” 24/7, 20â€“30 min response, no damage guaranteed.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Car Lockout Service', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Car Lockout Service Ashton-in-Makerfield | 24/7', description: 'Non-destructive car lockout service in Ashton-in-Makerfield. 24/7, 20â€“30 min response.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Car Lockout Service' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Available Now â€” 24/7 Car Lockout Service, Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Car Lockout Service in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Locked out of your car in Ashton-in-Makerfield? Whether your keys are on the seat, in the boot, or you've
            simply lost them, Ashton Lock &amp; Key is your nearest mobile car locksmith â€” available 24 hours a day,
            seven days a week with no call-out fee.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            We use professional non-destructive entry techniques to open your vehicle cleanly â€” no broken glass,
            no scratched paintwork, no damage of any kind. Our team serves Ashton-in-Makerfield, Wigan, Bryn,
            Golborne, Haydock, Newton-le-Willows, Leigh, Garswood, and Billinge, typically arriving within
            20â€“30 minutes of your call.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', '24/7 Service', '20â€“30 Min Response', 'No Damage Guaranteed', 'Fixed Price Upfront'].map(t => (
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
          <h2>Professional Car Lockout Service in Ashton-in-Makerfield</h2>
          <p>
            Being locked out of your car is stressful at any time â€” but especially at night, in an unfamiliar
            area, or when you're running late. Ashton Lock &amp; Key provides a fast, professional car lockout
            service across Ashton-in-Makerfield and the surrounding WN postcode area. When you call us, you
            speak directly to the locksmith â€” not a national call centre that patches you through to whoever
            happens to be nearby.
          </p>
          <h3>How We Open Your Car Without Damage</h3>
          <p>
            Every vehicle entry job is performed using industry-standard non-destructive entry (NDE) techniques.
            We use air wedge sets to create a controlled, temporary gap between the door and frame â€” wide enough
            to insert a long-reach tool that operates the internal handle or unlock button. The process leaves no
            mark on the bodywork, no damage to the weatherstrip, and no impairment to the locking mechanism.
          </p>
          <p>
            We open the vast majority of vehicles this way, including modern central-locking systems with
            deadlocking. In rare cases where a particular vehicle's geometry makes standard NDE difficult, we
            discuss alternative options with you before touching anything. We never start work without your
            agreement, and we never cause unnecessary damage.
          </p>
          <h3>What to Do While You Wait</h3>
          <ul>
            <li>Stay with or near the vehicle if it is safe to do so</li>
            <li>Keep your phone on â€” we may call to confirm your exact position</li>
            <li>If you're in an unsafe location (dark car park, roadside on a fast road), move to a safer spot nearby</li>
            <li>Do not attempt to force entry yourself â€” improvised tools damage seals and can trigger deadlocking</li>
          </ul>
          <h3>Child or Pet Locked Inside</h3>
          <p>
            If a child or pet is locked in a vehicle and there is any immediate risk from heat or distress,
            call 999 first â€” police have authority to break a window lawfully. If the situation is not
            immediately dangerous and you need non-destructive access, we can often reach WN4 locations
            faster than emergency services for a routine lockout.
          </p>
          <h3>Pricing â€” Confirmed Before We Attend</h3>
          <p>
            Standard daytime lockout (07:00â€“20:00): from <strong>Â£60</strong>. Out-of-hours: from <strong>Â£80</strong>.
            All prices are fixed and confirmed over the phone before we set off. There are no hidden extras â€”
            the price quoted is the price on the invoice.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">We Work With All Vehicle Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Our car lockout service covers every make on UK roads. We regularly open{' '}
            <strong>Vauxhall Corsa, Astra</strong> and <strong>Insignia</strong>; <strong>Ford Focus, Fiesta</strong> and <strong>Mondeo</strong>;{' '}
            <strong>Volkswagen Golf, Polo</strong> and <strong>Passat</strong>; <strong>BMW 3 Series</strong> and <strong>5 Series</strong>;{' '}
            <strong>Audi A3, A4</strong> and <strong>Q5</strong>; <strong>Mercedes C-Class, E-Class</strong> and <strong>GLC</strong>;{' '}
            <strong>Toyota Qashqai</strong>, <strong>Nissan Juke</strong>, <strong>Kia Sportage</strong>, <strong>Hyundai Tucson</strong>,{' '}
            <strong>Renault Clio</strong>, <strong>Peugeot 208</strong>, <strong>Honda Civic</strong>, and many more.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {VEHICLE_BRANDS.map(b => (
              <span key={b} className="bg-brand-light text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            Don&apos;t see your make? <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call us</a> â€” we almost certainly cover it.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-padding bg-brand-light" aria-labelledby="local-heading">
        <div className="container-max max-w-4xl mx-auto">
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Auto Locksmith Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                If you're searching for a <strong>car lockout service near me</strong> in the Wigan area,
                Ashton Lock &amp; Key is your closest genuinely local option. We're based at{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong> â€”
                putting us within 20â€“30 minutes of the vast majority of WN4 call-outs.
              </p>
              <p>
                As a <strong>mobile locksmith near Ashton-in-Makerfield</strong>, we come to wherever you and
                your vehicle are â€” home, work, a supermarket car park, roadside, anywhere within our service
                radius. Our coverage area includes:
              </p>
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

      <CTASection variant="orange" heading="Locked Out of Your Car in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key now â€” 24/7, no call-out fee, fixed price, typically on-site in 20â€“30 minutes." />
      <FAQSection faqs={faqs} heading="Car Lockout Service FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Emergency Auto Locksmith', desc: '24/7 emergency auto locksmith â€” any situation, fast response.', href: '/emergency-auto-locksmith-ashton-in-makerfield' },
              { title: 'Car Key Replacement', desc: 'Keys inside the car? We can cut and programme a replacement too.', href: '/car-key-replacement-ashton-in-makerfield' },
              { title: 'Boot / Trunk Unlocking', desc: 'Keys locked in the boot? We open it without damage.', href: '/trunk-unlock-ashton-in-makerfield' },
              { title: 'Broken Key Extraction', desc: 'Key snapped in the lock? Extracted professionally.', href: '/broken-key-extraction-ashton-in-makerfield' },
              { title: 'Auto Locksmith Ashton', desc: 'Full auto locksmith service hub â€” all vehicle situations.', href: '/auto-locksmith-ashton-in-makerfield' },
              { title: 'Van Locksmith Ashton', desc: 'Van lockouts and commercial vehicle entry.', href: '/van-locksmith-ashton' },
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
