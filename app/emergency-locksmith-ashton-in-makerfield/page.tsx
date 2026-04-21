import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Emergency Locksmith Ashton-in-Makerfield | 24/7 Lockout Service | 30-Min Response',
  description: 'Emergency locksmith in Ashton-in-Makerfield available 24/7. Locked out of your home or office? We arrive in 30 minutes. Fixed prices, no call-out fee. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/emergency-locksmith-ashton-in-makerfield`,
  },
  openGraph: {
    title: 'Emergency Locksmith Ashton-in-Makerfield | 24/7 | 30-Min Response',
    description: 'Locked out? Our emergency locksmith in Ashton-in-Makerfield is on call 24/7. Fixed prices, 30-minute response. Call now.',
    url: `${BUSINESS.url}/emergency-locksmith-ashton-in-makerfield`,
  },
}

const faqs = [
  {
    question: 'How fast is your emergency locksmith response in Ashton-in-Makerfield?',
    answer: 'We\'re with most customers in Ashton-in-Makerfield within 30 minutes of calling. Sometimes it\'s 20. We won\'t give you a time we can\'t keep — you\'ll get an honest ETA on the call, and we\'ll let you know if anything changes.',
  },
  {
    question: 'How much does an emergency lockout cost in Ashton?',
    answer: 'Standard daytime lockouts start from £60 all-in. Out-of-hours (evenings, weekends, bank holidays) from £80. You get a fixed, confirmed price before we set off. Nothing gets added on when we arrive.',
  },
  {
    question: 'Can you open my door without breaking the lock?',
    answer: 'In most cases, yes. Non-destructive entry is always our first approach — we use proper locksmith tools, not brute force. If the lock is beyond saving, we carry replacements and can fit one straight away so you\'re secure.',
  },
  {
    question: 'Do you cover home and commercial lockouts?',
    answer: 'Yes — houses, flats, HMOs, offices, shops, warehouses. If you\'re locked out of any building in the Ashton-in-Makerfield or Wigan area, give us a ring. Commercial jobs are dealt with just as quickly as residential.',
  },
  {
    question: 'What if I\'ve broken a key in the lock?',
    answer: 'Happens more often than you\'d think, especially with older keys. We can usually extract the broken piece without removing the lock, then cut you a replacement key on the spot. Give us a call and we\'ll talk you through it.',
  },
]

export default function EmergencyLocksmithPage() {
  const pageUrl = `${BUSINESS.url}/emergency-locksmith-ashton-in-makerfield`
  const schemas = [
    serviceSchema(
      'Emergency Locksmith Ashton-in-Makerfield',
      '24/7 emergency lockout service in Ashton-in-Makerfield and Wigan. Fast 30-minute response.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Emergency Locksmith', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Emergency Locksmith Ashton-in-Makerfield | 24/7 Lockout Service | 30-Min Response',
      description: 'Emergency locksmith in Ashton-in-Makerfield available 24/7. Locked out? We arrive in 30 minutes.',
      type: 'ItemPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Emergency Locksmith Ashton-in-Makerfield' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" aria-hidden="true"></span>
              Emergency Service — Available Right Now
            </div>
            <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Emergency Locksmith{' '}
              <span className="text-brand-orange">Ashton-in-Makerfield</span>
            </h1>
            <p className="text-xl text-white/70 mb-6 leading-relaxed">
              Locked out in Ashton? Whether it&apos;s 2pm on a Tuesday or 2am on a bank holiday weekend, we&apos;re available.
              Call now and we&apos;ll be with you in 30 minutes — no fuss, no call centre, just a locksmith who gets on with it.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['24/7 Available', '30-Min Response', 'Fixed Prices', 'Non-Destructive Entry', 'Fully Insured'].map((t) => (
                <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          {/* Info card */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white space-y-4">
            <h2 className="text-xl font-bold">What We Can Help With</h2>
            {[
              'House lockouts — locked out of your home',
              'Flat & apartment lockouts',
              'Office & commercial lockouts',
              'Broken key extraction',
              'Snapped or bent key replacement',
              'Lock damage from break-in attempts',
              'Urgent lock replacement after burglary',
              'uPVC door & composite door problems',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>Locked Out in Ashton-in-Makerfield? We&apos;ll Be There in 30 Minutes</h2>
          <p>
            It happens to everyone at some point. You step outside to put the bins out, the door blows shut behind you,
            and your keys are sitting on the kitchen table. Or maybe the key snapped in the lock at midnight with the kids
            already in bed. Whatever the situation, being locked out of your own home is stressful — and the last thing you
            need is a call centre making it worse.
          </p>
          <p>
            Ashton Lock & Key is a genuine local locksmith covering Ashton-in-Makerfield and Wigan, 24 hours a day. When
            you call us, you get a <strong>fixed, all-inclusive price over the phone</strong> before we leave. No hidden
            call-out charges. No VAT added on the doorstep. What we say is what you pay.
          </p>

          <h2>What Happens When You Call Us</h2>
          <h3>You Call — We Pick Up</h3>
          <p>
            Ring <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a> and you&apos;ll speak to a locksmith directly.
            No automated menus, no &quot;press 1 for emergencies.&quot; Just straight through to someone who can actually sort it.
          </p>
          <h3>We Quote You a Fixed Price</h3>
          <p>
            We&apos;ll ask what kind of lock it is and whereabouts you are. Based on that, we give you a fixed price on the call.
            No ambiguity, no &quot;we&apos;ll need to see it first.&quot; You know exactly what you&apos;re paying before we set off.
          </p>
          <h3>We Head Straight to You</h3>
          <p>
            We aim to reach anywhere in Ashton-in-Makerfield within 30 minutes of your call. For locations in the wider
            Wigan area — <Link href="/locksmith-wigan">Wigan town centre</Link>, Hindley, Newton-le-Willows — allow
            35–45 minutes. We&apos;ll give you an honest ETA and stick to it.
          </p>
          <h3>Non-Destructive Entry First, Always</h3>
          <p>
            A good locksmith doesn&apos;t reach for the drill straight away. We use specialist picks and bypass tools and can
            open the vast majority of locks without causing any damage at all. If a lock genuinely has to be replaced, we
            carry a good range of cylinders and deadbolts in the van and can fit a new one on the spot.
          </p>

          <h2>Emergency Locksmith Prices in Ashton</h2>
          <p>
            Prices vary depending on lock type, time of day, and complexity. Here&apos;s a straightforward guide:
          </p>
          <ul>
            <li><strong>Standard residential lockout (daytime, Mon–Fri):</strong> From £60</li>
            <li><strong>Out-of-hours lockout (evenings, weekends):</strong> From £80</li>
            <li><strong>Late night / early morning (midnight–6am):</strong> From £100</li>
            <li><strong>Broken key extraction:</strong> From £50</li>
            <li><strong>Lock replacement (on top of lockout charge):</strong> From £40 + parts</li>
          </ul>
          <p>
            All prices include VAT. You&apos;ll get your exact quote before we touch anything.
          </p>

          <h2>Areas We Cover for Emergency Lockouts</h2>
          <p>
            We cover Ashton-in-Makerfield (WN4), <Link href="/locksmith-wigan">Wigan</Link>, St Helens, Newton-le-Willows,
            Leigh, Golborne, Haydock, Billinge, Orrell, Hindley, Abram, and Bryn. Not sure if you&apos;re in our area? Just ring us —
            if we can reach you quickly, we will.
          </p>

          <div className="my-8 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/ashton-lock-key-mobile-van-citroen.webp"
              alt="Ashton Lock & Key emergency locksmith van on call in Ashton-in-Makerfield — mobile key cutting and locksmith service"
              width={800}
              height={534}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2>Useful Guides</h2>
          <p>
            Not sure what to expect or whether you&apos;re being quoted fairly? Our guide on{' '}
            <Link href="/blog/what-to-do-if-locked-out">what to do if you&apos;re locked out</Link> walks through every
            step — from checking your insurance to choosing a locksmith you can trust. If you&apos;re wondering whether the
            price you&apos;ve been given sounds right, the{' '}
            <Link href="/blog/emergency-locksmith-response-time">emergency locksmith response time guide</Link> explains
            realistic timings and what to watch out for.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Need an Emergency Locksmith Right Now?"
        subtext="We're on call 24/7 in Ashton-in-Makerfield and across Wigan. Call now for a fast, fixed-price response."
        variant="orange"
      />

      <ReviewsSection />

      <FAQSection faqs={faqs} heading="Emergency Locksmith FAQs" />

      {/* RELATED SERVICES */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link href="/key-cutting-ashton" className="card hover:-translate-y-0.5 transition-transform group">
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">Key Cutting Ashton</h3>
              <p className="text-gray-600 text-sm">Need a spare key cut? Same-day key cutting in Ashton.</p>
            </Link>
            <Link href="/car-key-replacement-wigan" className="card hover:-translate-y-0.5 transition-transform group">
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">Car Key Replacement Wigan</h3>
              <p className="text-gray-600 text-sm">Lost your car keys? We replace and programme car keys for all makes.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
