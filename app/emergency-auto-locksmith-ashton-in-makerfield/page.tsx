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
  title: 'Emergency Auto Locksmith Ashton-in-Makerfield | 24/7',
  description: '24/7 emergency auto locksmith in Ashton-in-Makerfield. Any vehicle situation â€” lockout, lost keys, broken key. 20â€“30 min response. No call-out fee. Call 07309 903243 now.',
  alternates: { canonical: `${BUSINESS.url}/emergency-auto-locksmith-ashton-in-makerfield` },
  other: {
    'geo.region': 'GB-WGN',
    'geo.placename': 'Ashton-in-Makerfield',
    'geo.position': '53.4878;-2.6405',
    'ICBM': '53.4878, -2.6405',
  },
}

const faqs = [
  {
    question: 'What counts as an automotive emergency locksmith situation?',
    answer: 'Any situation where you cannot access or operate your vehicle due to a key or lock problem: locked keys inside the car, lost all keys, broken key in the lock or ignition, failed key fob, seized ignition barrel, or keys locked in the boot. We handle all of these 24 hours a day, seven days a week.',
  },
  {
    question: 'How quickly can you reach Ashton-in-Makerfield in an emergency?',
    answer: 'We are based in Ashton-in-Makerfield at WN4 â€” most call-outs within the WN4 postcode are reached within 20â€“25 minutes. Wigan and surrounding areas are typically 25â€“35 minutes. The exact ETA is confirmed when you call.',
  },
  {
    question: 'Is there a call-out fee for emergency auto locksmith work?',
    answer: 'No. There is no call-out fee. You pay a fixed price for the job itself â€” confirmed over the phone before we set off. There are no hidden extras, no surcharges for out-of-hours work beyond the stated out-of-hours rate.',
  },
  {
    question: 'Do you operate 24 hours including weekends and bank holidays?',
    answer: 'Yes. The emergency auto locksmith line is staffed 24 hours a day, 365 days a year. When you call, you speak directly to the locksmith â€” not a call centre. Bank holidays, Christmas Day, New Year\'s Eve â€” we answer.',
  },
  {
    question: 'What if I\'m broken down on the roadside in the Wigan area?',
    answer: 'Call us directly. If your vehicle is on a motorway or major A-road, make sure you\'re in a safe position (behind the crash barrier if possible) and follow highway code guidance. We serve all areas within our coverage radius including roadside call-outs.',
  },
  {
    question: 'Can you handle emergency auto locksmith situations for vans and commercial vehicles?',
    answer: 'Yes. We cover cars, vans, and light commercial vehicles. If you\'re a tradesperson locked out of your van in Ashton-in-Makerfield or Wigan, call us â€” we open Transit, Vivaro, Sprinter, Transporter, and all other common van makes.',
  },
]

export default function EmergencyAutoLocksmithAshtonPage() {
  const pageUrl = `${BUSINESS.url}/emergency-auto-locksmith-ashton-in-makerfield`
  const schemas = [
    serviceSchema('Emergency Auto Locksmith Ashton-in-Makerfield', '24/7 emergency auto locksmith in Ashton-in-Makerfield. Any vehicle situation â€” 20â€“30 min response, no call-out fee, fixed price.', pageUrl),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }, { name: 'Auto Locksmith', url: `${BUSINESS.url}/auto-locksmith-ashton-in-makerfield` }, { name: 'Emergency Auto Locksmith', url: pageUrl }]),
    webPageSchema({ url: pageUrl, title: 'Emergency Auto Locksmith Ashton-in-Makerfield | 24/7', description: '24/7 emergency auto locksmith in Ashton-in-Makerfield. 20â€“30 min response, no call-out fee.', type: 'WebPage' }),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Breadcrumb items={[{ label: 'Auto Locksmith', href: '/auto-locksmith-ashton-in-makerfield' }, { label: 'Emergency Auto Locksmith' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Available Now â€” 24/7 Emergency Auto Locksmith, Ashton-in-Makerfield
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Emergency Auto Locksmith in{' '}
            <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Vehicle emergency in Ashton-in-Makerfield? Whether you&apos;re locked out, have lost your keys,
            snapped a key in the lock, or your ignition has seized â€” Ashton Lock &amp; Key is your local
            24/7 emergency auto locksmith. We respond to WN4 call-outs within 20â€“30 minutes and you speak
            directly to the locksmith when you call.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            No call-out fee. Fixed price confirmed before we set off. No call centres â€” when you ring
            {' '}{BUSINESS.phoneDisplay}, you get the locksmith. Available every hour of every day,
            including bank holidays.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Call-Out Fee', '24/7 Including Bank Holidays', '20â€“30 Min WN4 Response', 'Speak to the Locksmith Direct', 'Fixed Price Before We Set Off'].map(t => (
              <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay} Now â€” 24/7
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
          <h2>24/7 Emergency Auto Locksmith in Ashton-in-Makerfield</h2>
          <p>
            A vehicle emergency can happen at any hour â€” and when it does, you need a local locksmith
            who answers the phone immediately, gives you a fixed price, and arrives quickly. Ashton Lock
            &amp; Key is based in Ashton-in-Makerfield and provides 24-hour emergency auto locksmith
            cover across WN4 and the wider Wigan area. There is no national call centre between you and
            the person who will actually do the job.
          </p>
          <h3>Emergency Situations We Cover</h3>
          <ul>
            <li><strong>Car lockout</strong> â€” keys on the seat, in the boot, or left in the ignition</li>
            <li><strong>Lost all keys</strong> â€” all-keys-lost programming, V5C required</li>
            <li><strong>Broken key in lock or ignition</strong> â€” extraction and replacement same visit</li>
            <li><strong>Failed key fob</strong> â€” re-sync, repair, or emergency replacement</li>
            <li><strong>Seized ignition</strong> â€” diagnosis, repair, or barrel replacement</li>
            <li><strong>Boot locked with keys inside</strong> â€” non-destructive boot access</li>
            <li><strong>Van lockout</strong> â€” all common makes including Transit, Vivaro, Sprinter</li>
          </ul>
          <h3>How Emergency Calls Work</h3>
          <p>
            Call {BUSINESS.phoneDisplay}. You&apos;ll speak directly to the locksmith. We&apos;ll ask
            for your location, the make and model of vehicle, and a brief description of the situation.
            You&apos;ll receive a fixed price and an ETA before we set off. We accept cash and card payment
            on completion.
          </p>
          <h3>Why Choose Ashton Lock &amp; Key for Emergencies</h3>
          <p>
            We&apos;re genuinely local â€” based in Ashton-in-Makerfield, not a national franchise routing
            calls to whoever is available. Our response times are honest estimates, not marketing promises.
            And unlike some emergency locksmith services that charge inflated out-of-hours rates, our
            pricing is transparent and confirmed before we attend.
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
          <h2 id="vehicles-heading" className="text-2xl font-black text-brand-navy mb-4 text-center">Emergency Auto Locksmith for All Makes &amp; Models</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We handle emergency situations for all common UK vehicles including{' '}
            <strong>Ford, Vauxhall, VW, BMW, Audi, Mercedes-Benz, Toyota, Nissan, Renault,
            Peugeot, Kia, Hyundai, Honda, Skoda, Land Rover</strong>, and all vans.
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
          <h2 id="local-heading" className="text-2xl font-black text-brand-navy mb-6">Emergency Auto Locksmith Near Ashton-in-Makerfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-custom">
              <p>
                When you search <strong>emergency auto locksmith near me</strong> in Wigan or Ashton-in-Makerfield,
                you want the closest genuinely local option. We&apos;re based at{' '}
                <strong>2, Market Approach, 1 Gerard St, Ashton-in-Makerfield, Wigan WN4 9AL</strong> â€”
                giving us the fastest possible response for WN4 and surrounding postcodes.
              </p>
              <p>Emergency coverage includes:</p>
              <ul>
                {COVERAGE_AREAS.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4">Emergency Response Times</h3>
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

      <CTASection variant="orange" heading="Vehicle Emergency in Ashton-in-Makerfield?" subtext="Call Ashton Lock & Key now â€” 24/7, no call-out fee, fixed price, 20â€“30 min WN4 response." />
      <FAQSection faqs={faqs} heading="Emergency Auto Locksmith FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Car Lockout Service', desc: 'Locked out? Non-destructive entry â€” 24/7.', href: '/car-lockout-ashton-in-makerfield' },
              { title: 'Lost Car Key Replacement', desc: 'Lost all keys? AKL programming on-site.', href: '/lost-car-key-ashton-in-makerfield' },
              { title: 'Broken Key Extraction', desc: 'Key snapped in lock or ignition? We extract it.', href: '/broken-key-extraction-ashton-in-makerfield' },
              { title: 'Ignition Repair & Replacement', desc: 'Ignition seized or barrel failed?', href: '/ignition-repair-ashton-in-makerfield' },
              { title: 'Boot / Trunk Unlocking', desc: 'Keys locked in the boot? We access it without damage.', href: '/trunk-unlock-ashton-in-makerfield' },
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
