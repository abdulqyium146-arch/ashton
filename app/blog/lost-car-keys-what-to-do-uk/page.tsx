import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Lost Your Car Keys? What to Do in the UK | 2026 Guide',
  description: 'Lost your car keys and don\'t know where to start? This step-by-step guide covers exactly what to do — from checking the obvious to AKL replacement. Expert advice from Ashton Lock & Key.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/lost-car-keys-what-to-do-uk`,
  },
}

const faqs = [
  {
    question: 'Can I drive my car without a key?',
    answer: 'Only in an emergency and only if you can start it. In the UK it\'s legal to drive a car you own without a key if you can lawfully start it, but if your immobiliser won\'t let the engine start because the key is missing, there\'s no bypass — you need the key (or a replacement) to legally start the vehicle.',
  },
  {
    question: 'Will my insurance cover lost car keys?',
    answer: 'Many comprehensive policies include key cover, but not all. Check your policy documents under "personal belongings" or "key cover." If covered, you\'ll need a crime reference number if stolen, and you may need to pay an excess. Even with insurance, calling an auto locksmith first (before the insurer) often results in faster resolution.',
  },
  {
    question: 'How long does it take to get a replacement car key?',
    answer: 'With a mobile auto locksmith, typically 30–90 minutes on-site for most vehicles. All-keys-lost jobs take 60–120 minutes. Dealer booking can take days — plus you\'d need to arrange recovery of the vehicle to them.',
  },
]

const steps = [
  { step: '1', title: 'Check the Obvious Places', body: 'Before calling anyone, do a systematic search: all jacket pockets, bags, surfaces at home, the car itself (check under seats), and any recent locations. Keys have a habit of turning up in places you didn\'t expect them. Ask anyone who was with you.' },
  { step: '2', title: 'Check Whether You Have a Spare', body: 'If you have a spare key somewhere, now\'s the time to use it. If you do have a spare, you can still get into the car and deal with the lost key at leisure — and getting a replacement is simpler and cheaper when you have a working key to programme alongside.' },
  { step: '3', title: 'If Stolen — Report to Police First', body: 'If you believe the keys were stolen rather than lost, report it to the police immediately and get a crime reference number. You\'ll need this for your insurer. Once reported, call an auto locksmith to delete the stolen key codes and programme new ones — don\'t delay on this step.' },
  { step: '4', title: 'Check Your Insurance Policy', body: 'Many comprehensive car insurance policies include key cover. Check your policy documents or call your insurer to ask. If covered, you may be able to claim for the replacement cost (subject to excess). Even if covered, an auto locksmith will be significantly faster than the insurer\'s own process.' },
  { step: '5', title: 'Call an Auto Locksmith — Not the Dealer', body: 'An automotive locksmith can replace and programme most car keys at your vehicle the same day, for 40–60% less than a dealer. There\'s no need to arrange recovery. Call with your make, model, year, and registration, and get a firm fixed price quoted over the phone before they attend.' },
]

export default function LostCarKeysBlogPage() {
  const datePublished = '2026-01-20'
  const dateModified = '2026-01-20'
  const pageUrl = `${BUSINESS.url}/blog/lost-car-keys-what-to-do-uk`

  const schemas = [
    blogPostingSchema({
      title: 'Lost Your Car Keys? What to Do in the UK',
      description: 'Step-by-step guide for when you\'ve lost your car keys in the UK — what to check, who to call, and how to avoid paying over the odds.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['lost car keys uk', 'lost car keys what to do', 'all keys lost replacement uk'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Lost Car Keys — What to Do', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'Lost Your Car Keys? What to Do in the UK', description: 'Step-by-step guide for lost car keys in the UK.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Lost Car Keys — What to Do' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-500/20 text-purple-400 text-sm font-semibold px-3 py-1.5 rounded-full">Car Keys</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>20 January 2026</time>
            <span className="text-white/50 text-sm">· 7 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Lost Your Car Keys?{' '}
            <span className="text-brand-orange">Here&apos;s Exactly What to Do</span>
          </h1>
          <p className="text-xl text-white/70">A step-by-step guide for UK drivers — from the obvious checks to replacement options. Don&apos;t call the dealer until you&apos;ve read this.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="prose-custom mb-10">
            <p>
              Losing your car keys is one of those situations that starts with mild inconvenience and can
              rapidly escalate into a significant expense if you make the wrong call. The good news: it&apos;s
              almost always fixable, usually faster than you think, and nearly always cheaper than whatever
              your dealer would charge.
            </p>
            <p>Here&apos;s the right sequence of steps.</p>
          </div>

          <div className="space-y-6 mb-10">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5 bg-brand-light rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  {s.step}
                </div>
                <div className="prose-custom">
                  <h2 className="!mt-0 !mb-2">{s.title}</h2>
                  <p className="!mb-0">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose-custom">
            <h2>All Keys Lost — What Actually Happens</h2>
            <p>
              If you&apos;ve exhausted every search option and confirmed there&apos;s no spare, you&apos;re in an
              &quot;all keys lost&quot; situation. This is more involved than standard key replacement:
            </p>
            <ul>
              <li>The locksmith needs to access the vehicle&apos;s ECU via the OBD diagnostic port</li>
              <li>Existing key data is erased from the immobiliser</li>
              <li>Brand new keys are programmed from scratch</li>
              <li>You&apos;ll need your V5C logbook to prove ownership — have it ready</li>
              <li>You must be present at the vehicle throughout</li>
            </ul>
            <p>
              The process takes 60–120 minutes and costs considerably more than a standard key replacement —
              but considerably less than what a dealer charges. See our full{' '}
              <Link href="/lost-car-keys-ashton">lost car keys service page</Link> for pricing and details.
            </p>

            <h2>Dealer vs Auto Locksmith — The Numbers</h2>
            <p>
              Main dealers typically charge £200–£500+ for a standard key replacement, and £400–£800+ for
              all-keys-lost programming. They also require the vehicle to be delivered to them (recovery cost),
              and they often can&apos;t see you for days. An auto locksmith comes to you, the same day, for
              40–60% less.
            </p>
            <p>
              For exact pricing on all car key scenarios, see our{' '}
              <Link href="/blog/car-key-replacement-cost-uk-2026">car key replacement cost guide for 2026</Link>.
            </p>

            <h2>After Getting New Keys — Sort a Spare Immediately</h2>
            <p>
              Once you have a replacement key in your hand, the single most important thing you can do is get
              a spare programmed on the same visit. It&apos;s much cheaper than a separate call-out, and it means
              you&apos;ll never be in a full AKL situation again. See our{' '}
              <Link href="/spare-car-key-ashton">spare car key service</Link> for details.
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Lost Your Car Keys Near Ashton-in-Makerfield?"
        subtext="Call Ashton Lock & Key — same-day AKL replacement, cheaper than dealers, mobile to your vehicle."
        variant="orange"
      />
      <FAQSection faqs={faqs} heading="Lost Car Keys FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement: Complete UK Guide', href: '/blog/car-key-replacement-guide' },
              { title: 'Car Key Replacement Cost UK 2026', href: '/blog/car-key-replacement-cost-uk-2026' },
              { title: 'Transponder vs Smart Key — What\'s the Difference?', href: '/blog/transponder-key-vs-smart-key-explained' },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="card hover:-translate-y-0.5 transition-transform group block">
                <p className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{post.title}</p>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/blog" className="text-brand-orange hover:underline text-sm font-semibold">
              ← Browse all locksmith guides
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
