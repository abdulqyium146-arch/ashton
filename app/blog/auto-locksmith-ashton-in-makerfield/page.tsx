import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Auto Locksmith Ashton-in-Makerfield — What to Expect | 2026',
  description: 'What does an auto locksmith actually do? From car lockouts to transponder programming — a practical guide from your local Ashton-in-Makerfield specialist.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/auto-locksmith-ashton-in-makerfield`,
  },
}

const faqs = [
  {
    question: 'Is an auto locksmith the same as a regular locksmith?',
    answer: 'No — there\'s significant overlap, but auto locksmiths specialise in vehicles. They carry diagnostic programming equipment that a standard residential locksmith typically doesn\'t have. Some locksmiths do both, which is the case with Ashton Lock & Key.',
  },
  {
    question: 'When should I call an auto locksmith vs the AA or RAC?',
    answer: 'If you\'re locked out of your car, either will do the job — though breakdown services can have longer wait times and the technician may not carry key programming equipment. For key replacement or programming, you specifically need an auto locksmith.',
  },
  {
    question: 'How much does an auto locksmith cost in Ashton-in-Makerfield?',
    answer: 'Car lockouts start from £60 daytime. Car key replacement from £80 depending on key type. Prices are confirmed over the phone before attending — what\'s quoted is what you pay.',
  },
]

export default function AutoLocksmithBlogPage() {
  const datePublished = '2026-01-20'
  const dateModified = '2026-01-20'
  const pageUrl = `${BUSINESS.url}/blog/auto-locksmith-ashton-in-makerfield`

  const schemas = [
    blogPostingSchema({
      title: 'Auto Locksmith Ashton-in-Makerfield — What to Expect',
      description: 'A practical guide to auto locksmith services in Ashton-in-Makerfield — car lockouts, key programming, and how to choose the right specialist.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['auto locksmith ashton-in-makerfield', 'car locksmith wigan', 'auto locksmith near me'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Auto Locksmith Ashton-in-Makerfield', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'Auto Locksmith Ashton-in-Makerfield — What to Expect', description: 'Practical guide to auto locksmith services in Ashton-in-Makerfield.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Auto Locksmith Ashton-in-Makerfield' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-orange/20 text-brand-orange text-sm font-semibold px-3 py-1.5 rounded-full">Auto Locksmith</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>20 January 2026</time>
            <span className="text-white/50 text-sm">· 6 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Auto Locksmith Ashton-in-Makerfield —{' '}
            <span className="text-brand-orange">What to Expect</span>
          </h1>
          <p className="text-xl text-white/70">A practical guide to auto locksmith services — what they do, when to call one, and what it costs.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <p>
            The term &quot;auto locksmith&quot; is used loosely online, and it&apos;s not always clear what you&apos;re actually
            getting when you call one. This guide explains what a proper auto locksmith service involves,
            what distinguishes a specialist from a general locksmith, and what to expect when you call
            Ashton Lock &amp; Key in Ashton-in-Makerfield.
          </p>

          <h2>What an Auto Locksmith Actually Does</h2>
          <p>
            An auto locksmith specialises in vehicle access and security — specifically situations where
            you can&apos;t get into or start your car. The most common jobs are:
          </p>
          <ul>
            <li><strong>Car lockouts</strong> — opening a vehicle when the keys are locked inside, using non-destructive entry techniques</li>
            <li><strong>Car key replacement</strong> — cutting and programming new keys when the original is lost, broken, or stolen</li>
            <li><strong>Transponder programming</strong> — linking a key&apos;s microchip to the vehicle&apos;s immobiliser</li>
            <li><strong>Key fob repair</strong> — re-syncing or replacing remote fobs</li>
            <li><strong>Ignition repair</strong> — fixing or replacing ignition barrels</li>
            <li><strong>Broken key extraction</strong> — removing key fragments from locks or ignitions</li>
          </ul>
          <p>
            What distinguishes a genuine auto locksmith from a general one is the diagnostic equipment. Modern
            car keys can&apos;t just be cut — they need to be programmed to the vehicle&apos;s ECU. This requires
            specialist tools that a standard residential locksmith typically doesn&apos;t carry.
          </p>

          <h2>Car Lockouts — What Happens</h2>
          <p>
            Locking your keys in your car is the most common reason people call an auto locksmith. The process
            is simpler than most people expect: a trained locksmith uses precision wedge tools to create a small
            temporary gap in the door frame, inserts a long-reach tool through the gap, and operates the internal
            handle or unlock button. No drilling, no broken glass, no damage.
          </p>
          <p>
            In the Ashton-in-Makerfield area, a car lockout typically takes 10–20 minutes on-site once the
            locksmith arrives. Read more about the{' '}
            <Link href="/car-lockout-service-ashton">car lockout service</Link> and what to do while you wait.
          </p>

          <h2>Car Key Replacement — The Steps</h2>
          <p>
            Replacing a modern car key involves three steps: cutting the physical blade, programming the
            transponder chip to the immobiliser, and (if applicable) syncing the remote central locking.
            All three must be done correctly for the key to work.
          </p>
          <p>
            When all keys are lost, there&apos;s an additional step: the ECU must be accessed to erase the old
            key data before new keys can be added. This is called &quot;all keys lost&quot; (AKL) programming and is
            significantly more complex than a standard replacement — and much cheaper with a locksmith than at
            a dealer. See our{' '}
            <Link href="/lost-car-keys-ashton">lost car keys page</Link> for full details.
          </p>

          <h2>How to Choose an Auto Locksmith in Ashton-in-Makerfield</h2>
          <p>
            The auto locksmith market has the same rogue trader problem as general locksmiths. A few things
            to check before calling anyone:
          </p>
          <ul>
            <li>Do they give a fixed price over the phone before attending? If not, walk away.</li>
            <li>Do you speak directly to the locksmith, or a call centre that subcontracts?</li>
            <li>Do their Google reviews mention real local places and specific jobs?</li>
            <li>Are they genuinely local, or just advertising in your area from a national operation?</li>
          </ul>
          <p>
            Ashton Lock &amp; Key is based in Ashton-in-Makerfield. When you call, you speak to the locksmith
            who&apos;s coming out. The price quoted is the price you pay. That&apos;s how it should work.
          </p>

          <h2>Ashton-in-Makerfield Coverage Area</h2>
          <p>
            Our auto locksmith service covers Ashton-in-Makerfield, Wigan, St Helens, Newton-le-Willows, Leigh,
            Golborne, Haydock, and all surrounding areas. For a full overview of services, see our{' '}
            <Link href="/auto-locksmith-ashton-in-makerfield">auto locksmith Ashton-in-Makerfield</Link> page.
          </p>
        </div>
      </article>

      <CTASection
        heading="Need an Auto Locksmith in Ashton-in-Makerfield?"
        subtext="Call Ashton Lock & Key — 24/7, fixed price, genuine local specialist."
        variant="orange"
      />
      <FAQSection faqs={faqs} heading="Auto Locksmith FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Lost Your Car Keys? Here\'s What to Do', href: '/blog/lost-car-keys-what-to-do-uk' },
              { title: 'Car Key Replacement: Complete UK Guide', href: '/blog/car-key-replacement-guide' },
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
