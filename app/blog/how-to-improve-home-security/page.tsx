import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'How to Improve Home Security on a Budget | Expert Locksmith Tips',
  description: 'Practical home security tips from your local Ashton locksmith. Simple, affordable upgrades to protect your home against break-ins. No fluff, just expert advice.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/how-to-improve-home-security`,
  },
}

const faqs = [
  {
    question: 'What is the most effective way to improve home security?',
    answer: 'The single most effective upgrade is fitting good quality locks — a 5-lever mortice deadlock on your front and back doors dramatically increases resistance to forced entry. Beyond that, a visible alarm system and good outdoor lighting are highly effective deterrents.',
  },
  {
    question: 'What lock standard should I look for?',
    answer: 'Look for locks that conform to BS 3621 (the British Standard for locks). This is required by most home insurance policies. For cylinder locks (euro profile), look for Sold Secure or TS007 3-star rated cylinders.',
  },
  {
    question: 'Are smart locks worth it?',
    answer: 'Smart locks offer convenience features like remote access and activity logs, but they shouldn\'t replace a high-quality mechanical lock — they should supplement it. Always ensure a smart lock has a physical key override.',
  },
]

const tips = [
  {
    priority: 'High Priority',
    color: 'text-red-600 bg-red-50',
    items: [
      { title: 'Upgrade to BS 3621 Locks', desc: 'Your insurer likely requires this already — and won\'t pay out if they don\'t. A 5-lever mortice deadlock front and back is the foundation of genuinely secure locks.' },
      { title: 'Anti-Snap Cylinder for uPVC Doors', desc: 'A cheap standard euro cylinder can be snapped in under 30 seconds. A TS007 3-star anti-snap cylinder is a simple, affordable swap that closes that vulnerability completely.' },
      { title: 'Secure Your Back Gate', desc: 'Most break-ins happen via the rear. A heavy-duty padlock on the back gate is inexpensive and removes the easy route that most opportunists are looking for.' },
    ],
  },
  {
    priority: 'Medium Priority',
    color: 'text-orange-600 bg-orange-50',
    items: [
      { title: 'Fit Door Chains & Viewers', desc: 'Never open the front door blind. A door chain costs £5–15 and gives you the option to partially open without being pushed in. A viewer lets you see who\'s there before you touch the handle.' },
      { title: 'Install a Key Safe', desc: 'A quality wall-mounted key safe means a trusted person can always get in if needed — and massively reduces the chance of an expensive lockout. Look for ones with a BS kite mark.' },
      { title: 'Outdoor Lighting with PIR', desc: 'Motion-activated lights are one of the most effective cheap deterrents going. Being lit up unexpectedly is something most opportunists actively avoid. Cover all sides of the house.' },
    ],
  },
  {
    priority: 'Additional Measures',
    color: 'text-green-600 bg-green-50',
    items: [
      { title: 'Window Locks on All Ground Floor Windows', desc: 'Windows are a very common entry point. Fit key-operated locks to all accessible ones. Keep the keys somewhere accessible for you — just not where they\'re visible from outside.' },
      { title: 'Door Frame Reinforcement', desc: 'Your lock is only as strong as the frame it\'s bolted to. Door frame reinforcement kits add steel to the weak spots around the latch, deadbolt, and hinges — and they\'re cheap.' },
      { title: 'Consider a Monitored Alarm', desc: 'A visible alarm bell box deters most opportunists before they even try. A monitored system that alerts a response centre adds another layer — and can make your insurance cheaper too.' },
    ],
  },
]

export default function HomeSecurityPage() {
  const datePublished = '2024-08-10'
  const dateModified = '2026-01-15'
  const pageUrl = `${BUSINESS.url}/blog/how-to-improve-home-security`

  const schemas = [
    blogPostingSchema({
      title: 'How to Improve Your Home Security on a Budget',
      description: 'Practical, affordable home security tips from an expert locksmith. Updated 2026.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['home security tips', 'improve home security', 'anti-snap cylinder', 'BS 3621 locks', 'home security ashton'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'How to Improve Home Security', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'How to Improve Your Home Security on a Budget', description: 'Practical home security tips.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Improve Home Security' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1.5 rounded-full">Security</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>10 August 2024</time>
            <span className="text-white/50 text-sm">· 6 min read</span>
            <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              <time dateTime={dateModified}>Updated Jan 2026</time>
            </span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            How to Improve Your Home Security{' '}
            <span className="text-brand-orange">on a Budget</span>
          </h1>
          <p className="text-xl text-white/70">Practical, proven security upgrades that make a real difference — without breaking the bank.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="prose-custom">
            <p>
              You don&apos;t need a smart alarm system and six cameras to make your home a lot more secure. Most residential
              burglaries are opportunistic — the burglar is looking for the easiest target on the street, not your house
              specifically. Make your home look like more effort than the next one and they&apos;ll move on.
            </p>
            <p>
              Here&apos;s what actually makes a difference, in order of impact and cost.
            </p>
          </div>

          {tips.map((section) => (
            <div key={section.priority} className="mt-10">
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold mb-5 ${section.color}`}>
                {section.priority}
              </div>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.title} className="border border-gray-100 rounded-2xl p-5 hover:border-brand-orange transition-colors">
                    <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="prose-custom mt-10">
            <h2>The Lock Standard That Matters Most: BS 3621</h2>
            <p>
              One thing worth taking away from this: check whether your locks conform to BS 3621. That&apos;s the British
              Standard for external door locks, and most home insurance policies require it. If you&apos;ve been burgled
              through a sub-standard lock, your insurer may refuse to pay out.
            </p>
            <p>
              Not sure if yours meet it? Give us a ring. As your local{' '}
              <Link href="/locksmith-ashton-in-makerfield">locksmith in Ashton-in-Makerfield</Link>, we can take a look
              and give you an honest assessment — no unnecessary upsell, just straight advice.
            </p>

            <h2>Anti-Snap Cylinders — A Specific Warning for Wigan Homes</h2>
            <p>
              Cylinder snapping is one of the most common break-in methods used on uPVC-doored homes across the North West.
              It takes under 30 seconds with a basic tool from any hardware shop, and a standard cheap euro cylinder offers
              virtually no resistance.
            </p>
            <p>
              We see this a lot in the Wigan area — it&apos;s a known local issue. If your front or back door has a euro
              cylinder (the oval-shaped lock fitted to most uPVC and composite doors), it&apos;s worth swapping it for
              an anti-snap TS007 3-star cylinder. We supply and fit these as part of our{' '}
              <Link href="/emergency-locksmith-ashton-in-makerfield">locksmith service in Ashton-in-Makerfield</Link>.
            </p>

            <h2>While You&apos;re Thinking About Security</h2>
            <p>
              If you don&apos;t have a spare key cut yet, now is a good time to sort it. A spare key left with a trusted
              neighbour is one of the simplest security measures there is — and our{' '}
              <Link href="/key-cutting-ashton">key cutting service in Ashton</Link> starts from £3. If you&apos;ve ever
              been locked out and want to know how to handle it properly next time, our{' '}
              <Link href="/blog/what-to-do-if-locked-out">lockout step-by-step guide</Link> walks through every option
              in the right order. Want to know what lock upgrades actually cost?{' '}
              <Link href="/blog/how-much-does-a-locksmith-cost-uk">Our UK locksmith pricing guide</Link> covers lock
              replacement, cylinder upgrades, and key cutting — all with honest, transparent figures.
            </p>
          </div>
        </div>
      </article>

      <CTASection heading="Want a Security Assessment?" subtext="Our local locksmith in Ashton-in-Makerfield can advise on the best upgrades for your home. Call us today." variant="navy" />
      <FAQSection faqs={faqs} heading="Home Security FAQs" />
    </>
  )
}
