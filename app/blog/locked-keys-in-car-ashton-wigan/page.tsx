import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Locked Keys in Car Ashton & Wigan — What to Do | 2026',
  description: 'Locked your keys in your car near Ashton-in-Makerfield or Wigan? Here\'s exactly what to do — and what not to do — to get back in quickly without damage.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/locked-keys-in-car-ashton-wigan`,
  },
}

const faqs = [
  {
    question: 'How long does it take a locksmith to open a car in Ashton-in-Makerfield?',
    answer: 'Most car lockout jobs take 10–20 minutes on-site once the locksmith arrives. Response time from Ashton Lock & Key to locations in WN4 is typically 20–30 minutes. You\'re usually back in your car within an hour of calling.',
  },
  {
    question: 'Will a locksmith damage my car to get in?',
    answer: 'A professional using non-destructive entry techniques will leave no damage. The methods involve a small gap at the door frame and a long-reach tool — no drilling, no glass breaking. If anyone tells you they need to break a window, call someone else.',
  },
  {
    question: 'What if my child or pet is locked in the car?',
    answer: 'This is a priority emergency. Call 999 if there is any immediate risk to life — police can and will break a window lawfully. If the situation is not immediately life-threatening, call a locksmith for faster non-destructive entry. Don\'t delay in either direction.',
  },
  {
    question: 'Can I get back into my car using a coat hanger?',
    answer: 'In theory, on older vehicles with basic door mechanisms. On modern cars with complex central locking, it\'s almost impossible and risks triggering the immobiliser or damaging the weatherstrip. It\'s also visible from outside and looks exactly like a break-in attempt, which may attract attention.',
  },
]

export default function LockedKeysInCarBlogPage() {
  const datePublished = '2026-01-20'
  const dateModified = '2026-01-20'
  const pageUrl = `${BUSINESS.url}/blog/locked-keys-in-car-ashton-wigan`

  const schemas = [
    blogPostingSchema({
      title: 'Locked Keys in Car — Ashton-in-Makerfield & Wigan Guide',
      description: 'What to do when you\'ve locked your keys in your car near Ashton-in-Makerfield or Wigan. Practical steps, costs, and how to avoid making it worse.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['locked keys in car ashton', 'locked out of car wigan', 'car lockout ashton-in-makerfield'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Locked Keys in Car Ashton & Wigan', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'Locked Keys in Car Ashton & Wigan — What to Do', description: 'What to do when locked keys in car near Ashton-in-Makerfield or Wigan.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Locked Keys in Car — Ashton & Wigan' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-500/20 text-red-400 text-sm font-semibold px-3 py-1.5 rounded-full">Emergency</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>20 January 2026</time>
            <span className="text-white/50 text-sm">· 4 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Locked Keys in Car —{' '}
            <span className="text-brand-orange">Ashton &amp; Wigan</span>
          </h1>
          <p className="text-xl text-white/70">Calm down. Don&apos;t break anything. Here&apos;s exactly what to do — and what to avoid — to get back in your car quickly.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <h2>First: Don&apos;t Make It Worse</h2>
          <p>
            The instinct when locked out is to start problem-solving immediately — trying the other doors,
            looking for a way in through a window, calling someone who might have a spare. That&apos;s all reasonable.
            What&apos;s not reasonable: attempting to force your way in with improvised tools.
          </p>
          <p>
            A coat hanger, screwdriver, or any kind of improvised pry tool is likely to damage the door seal,
            scratch the paintwork, or — on modern cars — trigger the alarm or push the locking mechanism
            into a state that makes it harder to open. A professional locksmith will do this cleanly in minutes.
            Don&apos;t spend 30 minutes making it worse before calling.
          </p>

          <h2>Check the Obvious Things First</h2>
          <ul>
            <li>Try all four doors and the boot — it&apos;s more common than you&apos;d think for one to be unlocked</li>
            <li>Check whether you have a spare key somewhere accessible — a family member nearby, a key safe</li>
            <li>Check whether your car&apos;s app (if it has one) allows remote unlocking — some modern vehicles do</li>
            <li>If you&apos;re an RAC/AA member, check whether your membership covers vehicle access</li>
          </ul>

          <h2>If You Need to Call a Locksmith</h2>
          <p>
            If none of the above resolves it, call a local auto locksmith. In Ashton-in-Makerfield and
            Wigan, Ashton Lock &amp; Key offers a{' '}
            <Link href="/car-lockout-service-ashton">24/7 car lockout service</Link> with typical response
            times of 20–35 minutes. You speak directly to the locksmith — not a call centre — and you get
            a fixed price over the phone before we set off.
          </p>
          <p>
            Non-destructive entry is our standard approach. We use professional wedge and long-reach tools to
            open the vehicle cleanly. There are no scratches, no damage, and no evidence we were ever there.
            You pay the agreed price, and you&apos;re on your way.
          </p>

          <h2>Emergency: Child or Pet Inside a Hot Car</h2>
          <p>
            If a child or pet is locked in a vehicle and at risk from heat, call 999 immediately. This is
            a genuine emergency and the police have authority to break a window. A car window is replaceable.
          </p>
          <p>
            If the situation is not immediately life-threatening (e.g., the car is in shade and it&apos;s a mild
            day), calling a locksmith is the better option for avoiding damage. Assess the temperature and
            make the right judgement call.
          </p>

          <h2>After You&apos;re Back In — Sort a Spare Key</h2>
          <p>
            Being locked out once is enough of an incentive to make it never happen again. A{' '}
            <Link href="/spare-car-key-ashton">spare car key</Link> cut and programmed costs a fraction of a
            call-out charge and can be kept with a trusted neighbour, in a key safe, or with a family member.
          </p>
          <p>
            If you needed a locksmith anyway, ask about adding a spare on the same visit — it&apos;s the cheapest
            moment to do it.
          </p>

          <h2>What a Car Lockout Costs in Ashton-in-Makerfield</h2>
          <p>
            Standard daytime lockout (07:00–20:00): from £60. Out-of-hours: from £80. Price confirmed before
            we attend. For the full breakdown of auto locksmith costs in the area, see our{' '}
            <Link href="/blog/car-key-replacement-cost-uk-2026">2026 locksmith pricing guide</Link>.
          </p>
        </div>
      </article>

      <CTASection
        heading="Locked Out of Your Car in Ashton or Wigan?"
        subtext="Call Ashton Lock & Key — 24/7, non-destructive entry, fixed price, typically on-site in 30 minutes."
        variant="orange"
      />
      <FAQSection faqs={faqs} heading="Car Lockout FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Car Lockout Service — Ashton-in-Makerfield', href: '/car-lockout-service-ashton' },
              { title: 'What to Do If Locked Out of Your Home', href: '/blog/what-to-do-if-locked-out' },
              { title: 'How Much Does a Locksmith Cost?', href: '/blog/how-much-does-a-locksmith-cost-uk' },
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
