import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'How Long Should an Emergency Locksmith Take? | Response Times Explained',
  description: 'What\'s a realistic emergency locksmith response time in the UK? Learn what to expect, what\'s too slow, and red flags to watch for. Expert advice from Ashton Lock & Key.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/emergency-locksmith-response-time`,
  },
}

const faqs = [
  {
    question: 'What is a realistic emergency locksmith response time?',
    answer: 'In an urban or suburban area, 30–45 minutes is a realistic and reasonable response time for a local locksmith. Some companies claim 15–20 minutes — while occasionally possible, treat this as optimistic rather than guaranteed. Rural areas may take longer.',
  },
  {
    question: 'What should I do if the locksmith is taking much longer than quoted?',
    answer: 'Call them for an update. If they\'re significantly over their quoted ETA and aren\'t communicating, it\'s reasonable to call another locksmith. A professional company will keep you informed if there are delays.',
  },
  {
    question: 'Is a 24/7 locksmith actually available at 3am?',
    answer: 'Genuine 24/7 locksmiths are available at any hour, but response times at 3am may be slightly longer than during normal hours. The phone should still be answered immediately — if you\'re getting voicemail, they may not be genuinely 24/7.',
  },
]

export default function ResponseTimePage() {
  const datePublished = '2024-07-22'
  const dateModified = '2026-01-15'
  const pageUrl = `${BUSINESS.url}/blog/emergency-locksmith-response-time`

  const schemas = [
    blogPostingSchema({
      title: 'How Long Should an Emergency Locksmith Take?',
      description: 'Understanding realistic emergency locksmith response times in the UK.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['emergency locksmith response time', 'how long does a locksmith take', 'locksmith arrival time', '30 minute locksmith'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Emergency Locksmith Response Time', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'How Long Should an Emergency Locksmith Take?', description: 'Realistic emergency locksmith response times explained.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Emergency Locksmith Response Time' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-500/20 text-orange-400 text-sm font-semibold px-3 py-1.5 rounded-full">Emergency</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>22 July 2024</time>
            <span className="text-white/50 text-sm">· 4 min read</span>
            <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              <time dateTime={dateModified}>Updated Jan 2026</time>
            </span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            How Long Should an Emergency Locksmith Take?
          </h1>
          <p className="text-xl text-white/70">
            Some locksmiths claim they&apos;ll be with you in 10 minutes. Some take two hours. Here&apos;s what&apos;s genuinely realistic,
            what&apos;s a red flag, and what you should always confirm before you hang up.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <h2>The Honest Answer: 30–45 Minutes in Most Cases</h2>
          <p>
            In a suburban area like Ashton-in-Makerfield or Wigan town centre, a genuinely local locksmith should reach
            you within 30–45 minutes during normal hours. Sometimes faster — we regularly arrive in 20–25 minutes when
            we&apos;re close by — but 30–45 minutes is the realistic, honest benchmark. Not 10 minutes.
          </p>
          <p>
            At 3am, or if you&apos;re somewhere more rural, build in 45–60 minutes. Traffic, distance, and the time it takes
            to get the van on the road all factor in.
          </p>

          <h2>What You Should Be Told on the Call</h2>
          <p>
            Before agreeing to anything, a professional locksmith should confirm three things over the phone:
          </p>
          <ul>
            <li><strong>A specific ETA</strong> — not &quot;as soon as possible,&quot; but an actual time window</li>
            <li><strong>A fixed, all-inclusive price</strong> — confirmed before they move</li>
            <li><strong>Their name</strong> — you should know who to expect at the door</li>
          </ul>
          <p>
            If they won&apos;t give you any of those, put the phone down and call someone else.
          </p>

          <h2>Red Flags to Watch For</h2>
          <ul>
            <li>&quot;I can be with you in 10 minutes&quot; when you know they can&apos;t possibly be that close — a common tactic to stop you calling competitors</li>
            <li>Won&apos;t quote a price until they see the lock — a genuine locksmith can always give a range at minimum</li>
            <li>Answers with &quot;hello&quot; rather than a business name</li>
            <li>Can&apos;t tell you where they currently are</li>
          </ul>

          <h2>Once They Arrive: How Long Does the Job Take?</h2>
          <p>
            Once the locksmith is at your door, the actual work is faster than most people expect. A non-destructive
            entry on a standard Yale or mortice lock typically takes 5–15 minutes. Multipoint uPVC locks and high-security
            deadbolts might run to 15–30 minutes.
          </p>
          <p>
            If the first thing they say is &quot;it&apos;ll need drilling&quot; without attempting anything else, that&apos;s a red flag.
            Drilling means they sell you a replacement lock. A good locksmith tries non-destructive entry first, always.
          </p>

          <h2>What We Commit To</h2>
          <p>
            At Ashton Lock & Key, we aim to reach you within 30 minutes of your call anywhere in Ashton-in-Makerfield.
            For the wider Wigan area, we aim for 35–45 minutes. You get an honest ETA on the call and a heads-up if
            anything changes.
          </p>
          <p>
            Need our <Link href="/emergency-locksmith-ashton-in-makerfield">emergency locksmith in Ashton-in-Makerfield</Link>?
            Call <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a> — we&apos;ll pick up and be with you as fast
            as we can. If you&apos;re wondering what to do while you wait,{' '}
            <Link href="/blog/what-to-do-if-locked-out">our step-by-step lockout guide</Link> covers everything from
            checking your insurance to staying safe. And if you want a clear idea of what the job will cost,{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">our 2026 locksmith price guide</Link> gives you honest
            figures for every type of call-out, including out-of-hours rates.
          </p>
        </div>
      </article>

      <CTASection heading="Need a Fast Locksmith Response?" subtext="Ashton Lock & Key aims to reach you within 30 minutes in Ashton-in-Makerfield and Wigan." variant="orange" />
      <FAQSection faqs={faqs} heading="Response Time FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'What to Do If Locked Out', href: '/blog/what-to-do-if-locked-out' },
              { title: 'How Much Does a Locksmith Cost?', href: '/blog/how-much-does-a-locksmith-cost-uk' },
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
