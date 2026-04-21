import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Locksmith Near Me — Wigan & Ashton-in-Makerfield | 24/7',
  description: 'Searching for a locksmith near me in Wigan or Ashton-in-Makerfield? Ashton Lock & Key is your nearest local locksmith. 24/7 emergency service, 30-min response. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/locksmith-near-me`,
  },
}

const faqs = [
  {
    question: 'Who is the nearest locksmith to Ashton-in-Makerfield?',
    answer: 'We\'re based in Ashton-in-Makerfield itself — it doesn\'t get more local. For most addresses in WN4, we\'re knocking on your door within 20–30 minutes of calling.',
  },
  {
    question: 'How do I find a reliable locksmith near me?',
    answer: 'The key things to check: do they give a fixed price upfront, do you speak to the locksmith directly (not a call centre), do they have genuine local Google Reviews, and are they fully insured? Ashton Lock & Key ticks every box.',
  },
  {
    question: 'What if I\'m not sure if you cover my area?',
    answer: 'Just ring us on 07711 341668 and tell us where you are. If we can reach you within a reasonable time, we will. We cover a wide radius from Ashton-in-Makerfield, including areas bordering Greater Manchester and Merseyside.',
  },
]

export default function LocksmithNearMePage() {
  const pageUrl = `${BUSINESS.url}/locksmith-near-me`
  const schemas = [
    serviceSchema(
      'Locksmith Near Me — Wigan & Ashton-in-Makerfield',
      'Local locksmith serving Wigan, Ashton-in-Makerfield, and surrounding WN postcodes. Emergency lockouts, key cutting, car key replacement. 30-minute response, available 24/7.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Locksmith Near Me', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Locksmith Near Me — Wigan & Ashton-in-Makerfield | 24/7',
      description: 'Your nearest local locksmith in Wigan and Ashton-in-Makerfield. Emergency lockouts, key cutting & car keys. Fast 30-min response.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Locksmith Near Me' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Genuinely Local — Ashton-in-Makerfield Based
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Locksmith <span className="text-brand-orange">Near Me</span> — Wigan & Ashton
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            If you&apos;re in the Wigan area, you&apos;ve found your nearest locksmith. Ashton Lock & Key is based in
            Ashton-in-Makerfield — genuinely local, genuinely fast, and upfront about pricing.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SERVICE AREAS MAP */}
      <section className="section-padding bg-white" aria-labelledby="coverage-heading">
        <div className="container-max">
          <h2 id="coverage-heading" className="text-2xl font-black text-brand-navy mb-8 text-center">
            Our Service Coverage Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {BUSINESS.serviceAreas.map((area) => (
              <div key={area} className="bg-brand-light rounded-xl p-3 text-center hover:bg-orange-50 hover:border-brand-orange border border-transparent transition-all">
                <svg className="w-4 h-4 text-brand-orange mx-auto mb-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold text-brand-navy">{area}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto">
            Don&apos;t see your area? Call us anyway — if we can reach you, we will.
            Our typical coverage radius is approximately 15–20 miles from Ashton-in-Makerfield.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-brand-light">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>How to Tell a Good Locksmith from a Rogue Trader</h2>
          <p>
            Typing &quot;locksmith near me&quot; into Google during an emergency is a bit of a minefield. The industry has a
            well-documented problem with rogue traders — companies that advertise £25 call-outs, then hit you with
            inflated bills for unnecessary drilling once they&apos;re standing at your door and you have no choice.
          </p>
          <p>Here&apos;s what to look for before you call anyone:</p>
          <h3>They Give You a Fixed Price Before They Leave</h3>
          <p>
            Any trustworthy locksmith can give you a firm, all-inclusive quote over the phone before they set off.
            Not a &quot;rough estimate.&quot; A fixed price. If they won&apos;t commit to one, put the phone down and call someone else.
            At Ashton Lock & Key, the price you&apos;re quoted is the price you pay — full stop.
          </p>
          <h3>You Speak to the Locksmith, Not a Call Centre</h3>
          <p>
            When you ring us, you speak directly to the person coming out to you. That means honest ETAs, no confusion
            about the job, and someone who is personally accountable for the work they do.
          </p>
          <h3>Their Google Reviews Mention Real Local Places</h3>
          <p>
            A five-star rating means nothing if the reviews are vague or identical. Look for reviews that mention
            specific local streets, areas, or circumstances. Ashton Lock & Key has 127+ reviews with a 4.9★ rating
            from real customers in Ashton, Wigan, Leigh, Golborne, and the surrounding area.
          </p>
          <h3>They&apos;re Fully Insured</h3>
          <p>
            We carry full public liability insurance. It rarely matters — but when it does, you want it in place.
          </p>

          <h2>Our Locksmith Services Near You</h2>
          <ul>
            <li><Link href="/emergency-locksmith-ashton-in-makerfield">Emergency Locksmith Ashton-in-Makerfield</Link> — 24/7 lockout service</li>
            <li><Link href="/key-cutting-ashton">Key Cutting Ashton</Link> — All key types, while you wait</li>
            <li><Link href="/car-key-replacement-wigan">Car Key Replacement Wigan</Link> — All makes, cheaper than dealers</li>
            <li><Link href="/locksmith-wigan">Locksmith Wigan</Link> — Full coverage across Wigan Borough</li>
          </ul>

          <h2>Before You Book</h2>
          <p>
            Want to know what a genuine local locksmith should charge? Our{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">locksmith pricing guide for 2026</Link> gives you
            honest, transparent figures — so you can compare quotes with confidence and avoid the inflated bills that
            rogue traders rely on. For urgent situations,{' '}
            <Link href="/blog/emergency-locksmith-response-time">our guide to realistic emergency response times</Link>{' '}
            explains what 30 minutes actually means and what to do if a locksmith keeps you waiting.
          </p>
        </div>
      </section>

      <TrustBadges />
      <CTASection variant="orange" heading="Found Your Local Locksmith?" subtext="Call Ashton Lock & Key — your nearest trusted locksmith in Ashton-in-Makerfield and Wigan." />
      <FAQSection faqs={faqs} heading="Locksmith Near Me FAQs" />
    </>
  )
}
