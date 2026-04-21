import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  // ─── FIX: removed brand name — template adds it
  title: 'What to Do If You\'re Locked Out of Your House | Step-by-Step Guide',
  description: 'Locked out of your house? Don\'t panic — follow these steps to stay safe and get back inside fast. Expert advice from your local Ashton-in-Makerfield locksmith.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/what-to-do-if-locked-out`,
  },
}

const faqs = [
  {
    question: 'Can I break into my own house if I\'m locked out?',
    answer: 'Technically yes — it\'s your property. But practically, it\'s a bad idea unless there\'s an urgent reason (someone unwell inside, for example). Forcing a door usually damages the frame, the lock, or both, and the repair bill often comes to more than a locksmith would have charged. Call a professional first.',
  },
  {
    question: 'Will my insurance cover a locksmith callout?',
    answer: 'Quite possibly. Many home insurance policies include emergency home assistance cover that pays for a locksmith if you\'re locked out. Check your policy documents or ring your insurer\'s emergency line before you arrange anything yourself — you could save yourself the bill entirely.',
  },
  {
    question: 'How long does it take a locksmith to open a door?',
    answer: 'The physical work — actually getting the door open — usually takes between 5 and 15 minutes once the locksmith is there. Total time from your call to being back inside is typically 30–45 minutes, depending on where you are.',
  },
]

export default function WhatToDoLockedOutPage() {
  const datePublished = '2024-11-01'
  const dateModified = '2026-01-15'
  const pageUrl = `${BUSINESS.url}/blog/what-to-do-if-locked-out`

  const schemas = [
    blogPostingSchema({
      title: 'What to Do If You\'re Locked Out of Your House',
      description: 'Step-by-step guide for handling a home lockout safely, from your local Ashton-in-Makerfield locksmith.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['locked out', 'house lockout', 'emergency locksmith', 'ashton locksmith'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'What to Do If Locked Out', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'What to Do If You\'re Locked Out of Your House',
      description: 'Step-by-step guide for handling a home lockout safely.',
      type: 'ItemPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'What to Do If Locked Out' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-500/20 text-red-400 text-sm font-semibold px-3 py-1.5 rounded-full">Emergency</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>1 November 2024</time>
            <span className="text-white/50 text-sm">· 5 min read</span>
            <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              <time dateTime={dateModified}>Updated Jan 2026</time>
            </span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            What to Do If You&apos;re Locked Out of Your House
          </h1>
          <p className="text-xl text-white/70">
            It&apos;s one of those situations where panic sets in fast. Door shut, keys on the other side, no obvious way in.
            Here&apos;s what to actually do — and what not to do — so you get back inside with the least stress and expense possible.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <div className="bg-orange-50 border border-brand-orange rounded-2xl p-5 mb-8">
            <p className="font-bold text-brand-navy text-lg mb-1">Need help right now?</p>
            <p className="text-gray-700 text-sm mb-3">If you&apos;re locked out in Ashton-in-Makerfield or Wigan, call us now. We&apos;ll be with you in 30 minutes.</p>
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>

          <h2>Step 1 — Don&apos;t Force the Door</h2>
          <p>
            The instinct to shove your shoulder against it or shove a card into the frame is understandable, but resist it.
            Forcing a door can split the frame, damage the lock mechanism, and warp the door itself — repairs often run to
            a few hundred pounds. You can also hurt yourself in the process.
          </p>
          <p>
            Take a breath. Find somewhere sensible to wait — your car, a neighbour&apos;s doorstep, the café on the corner —
            and work through the steps below before doing anything drastic.
          </p>

          <h2>Step 2 — Check Whether You Can Actually Get In</h2>
          <p>Worth a proper look before you call anyone:</p>
          <ul>
            <li>Back door — did you lock it this morning?</li>
            <li>Side gate — could you get into the garden and try a back window?</li>
            <li>Any ground-floor windows open a crack?</li>
            <li>Do you have a key safe fitted outside? (If not, after this experience you might want one)</li>
          </ul>
          <p>
            A slightly open window at ground level might get you back in without a penny spent. Just make sure it&apos;s
            definitely your house before you start climbing in.
          </p>

          <h2>Step 3 — Does Anyone Have a Spare Key?</h2>
          <p>
            A trusted neighbour, a family member nearby, a friend with a key to feed the cat — if there&apos;s anyone who
            might have a copy, now is the time to ring them. Free, fast, and the best outcome if it&apos;s available.
          </p>
          <p>
            Once you&apos;re back inside, sort out a spare. Our <Link href="/key-cutting-ashton">key cutting service in Ashton</Link> starts
            from £3 — it&apos;s cheap insurance against this happening again. Leave one with a neighbour you trust, or get
            a wall-mounted key safe fitted outside.
          </p>

          <h2>Step 4 — Check Your Home Insurance First</h2>
          <p>
            A lot of people don&apos;t realise their home insurance includes emergency home assistance cover. Before you pay
            a locksmith out of your own pocket, ring your insurer&apos;s emergency line — they may dispatch someone at no
            extra cost to you.
          </p>
          <p>
            There&apos;s usually a helpline number on the back of your policy documents or in your app. Worth a 2-minute
            check before anything else.
          </p>

          <h2>Step 5 — Call a Locksmith You Can Trust</h2>
          <p>
            If the free options haven&apos;t worked out, it&apos;s time to call a locksmith. Don&apos;t just call the first number
            on Google — the rogue trader problem in this industry is very real. Look for someone who:
          </p>
          <ul>
            <li>Gives a fixed, all-inclusive price over the phone before they leave</li>
            <li>Is genuinely local, not a national number that patches you through</li>
            <li>Has real Google Reviews mentioning your area</li>
            <li>Is fully insured</li>
          </ul>
          <p>
            Not sure what a fair price looks like? Our{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">UK locksmith price guide</Link> gives you exact figures
            for every job type — so you can tell straight away if you&apos;re being overcharged. In Ashton-in-Makerfield,
            Wigan, or anywhere in the surrounding area, call our{' '}
            <Link href="/emergency-locksmith-ashton-in-makerfield">24/7 emergency locksmith in Ashton</Link> on{' '}
            <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>. You&apos;ll get a fixed quote immediately
            and we&apos;ll be with you in 30 minutes.
          </p>

          <h2>Step 6 — Get That Spare Key Cut</h2>
          <p>
            Once you&apos;re safely back inside, do this before you forget. A <Link href="/key-cutting-ashton">spare key from our Ashton cutting service</Link>{' '}
            starts from £3. One lockout experience is usually enough to make it feel like the best £3 you&apos;ve ever spent.
          </p>

          <h2>What NOT to Do When You&apos;re Locked Out</h2>
          <ul>
            <li><strong>Don&apos;t post on social media</strong> that you can&apos;t get in — opportunist thieves do monitor Facebook and X</li>
            <li><strong>Don&apos;t call the first result on Google</strong> without checking reviews first</li>
            <li><strong>Don&apos;t agree to any work without a fixed quote</strong> — a reputable locksmith will always confirm the price upfront</li>
            <li><strong>Don&apos;t try credit cards, screwdrivers, or brute force</strong> — it almost never works and usually causes damage that costs more to fix than the locksmith would have</li>
          </ul>

          <div className="bg-brand-light rounded-2xl p-5 mt-8">
            <h3 className="text-brand-navy font-bold mb-2">Key Takeaways</h3>
            <ul className="space-y-1 text-sm">
              <li>✓ Stay calm and check all entry points first</li>
              <li>✓ Try to find a spare key before calling anyone</li>
              <li>✓ Check your home insurance — you may be covered</li>
              <li>✓ Only call a locksmith with fixed, upfront pricing</li>
              <li>✓ Get a spare key cut so it doesn&apos;t happen again</li>
            </ul>
          </div>
        </div>
      </article>

      <CTASection
        heading="Locked Out Right Now?"
        subtext="Call Ashton Lock & Key. We'll be with you in 30 minutes, anywhere in Ashton-in-Makerfield or Wigan."
        variant="orange"
      />

      <FAQSection faqs={faqs} heading="Lockout FAQs" />

      {/* RELATED */}
      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'How Much Does a Locksmith Cost?', href: '/blog/how-much-does-a-locksmith-cost-uk' },
              { title: 'How Long Should a Locksmith Take?', href: '/blog/emergency-locksmith-response-time' },
              { title: 'How to Improve Home Security', href: '/blog/how-to-improve-home-security' },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="card hover:-translate-y-0.5 transition-transform group block">
                <p className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{post.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
