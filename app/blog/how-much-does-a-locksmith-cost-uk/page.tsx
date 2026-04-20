import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'How Much Does a Locksmith Cost in the UK? (2025 Price Guide)',
  description: 'Complete UK locksmith pricing guide for 2025. Emergency lockouts, key cutting, car keys — see what\'s fair and avoid rogue traders. Local Wigan prices included.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/how-much-does-a-locksmith-cost-uk`,
  },
}

const faqs = [
  {
    question: 'What is the average cost of an emergency locksmith in the UK?',
    answer: 'The average cost for a standard residential lockout in the UK ranges from £60–£120 during daytime hours. Out-of-hours (evenings, weekends) typically costs £80–£150. Always get a fixed quote before agreeing to any work.',
  },
  {
    question: 'Why do some locksmiths charge so much more than others?',
    answer: 'Rogue traders advertise very low "from" prices but then add hidden charges on arrival — call-out fees, VAT not included, additional drilling fees, etc. Reputable locksmiths like Ashton Lock & Key give you an all-inclusive fixed price upfront.',
  },
  {
    question: 'Can I negotiate a locksmith price?',
    answer: 'It\'s always worth asking, especially for non-emergency work. Many locksmiths offer discounts for getting multiple keys cut at once, or for repeat customers. For emergencies, the price is usually fixed.',
  },
]

const priceData = [
  { service: 'Standard residential lockout (daytime)', low: 60, high: 100, notes: 'Mon–Fri 8am–6pm' },
  { service: 'Emergency lockout (evenings/weekends)', low: 80, high: 150, notes: 'After 6pm / weekends' },
  { service: 'Late-night lockout (midnight–6am)', low: 100, high: 180, notes: 'Antisocial hours premium' },
  { service: 'Commercial lockout', low: 80, high: 200, notes: 'Depending on lock type' },
  { service: 'Lock replacement (standard)', low: 40, high: 120, notes: 'Parts + labour' },
  { service: 'Broken key extraction', low: 50, high: 90, notes: 'Non-destructive preferred' },
  { service: 'Standard key cutting', low: 3, high: 12, notes: 'Per key, type dependent' },
  { service: 'High-security key cutting', low: 15, high: 40, notes: 'Patented blanks extra' },
  { service: 'Car key replacement (basic transponder)', low: 80, high: 150, notes: 'Cut + programme' },
  { service: 'Car key replacement (smart/remote)', low: 120, high: 250, notes: 'Full key + fob' },
  { service: 'All keys lost (car)', low: 180, high: 350, notes: 'vs £400+ at dealers' },
]

export default function LocksmithCostPage() {
  const datePublished = '2024-10-15'
  const pageUrl = `${BUSINESS.url}/blog/how-much-does-a-locksmith-cost-uk`

  const schemas = [
    blogPostingSchema({
      title: 'How Much Does a Locksmith Cost in the UK? (2025 Guide)',
      description: 'Complete UK locksmith pricing guide covering emergency lockouts, key cutting, and car keys.',
      url: pageUrl,
      datePublished,
      dateModified: datePublished,
      keywords: ['locksmith cost uk', 'how much does a locksmith cost', 'emergency locksmith price', 'locksmith prices wigan'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Locksmith Cost UK', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'How Much Does a Locksmith Cost in the UK?', description: 'UK locksmith pricing guide 2025.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Locksmith Cost UK 2025' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-500/20 text-blue-400 text-sm font-semibold px-3 py-1.5 rounded-full">Pricing</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>15 October 2024</time>
            <span className="text-white/50 text-sm">· 7 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            How Much Does a Locksmith Cost in the UK?{' '}
            <span className="text-brand-orange">(2025 Guide)</span>
          </h1>
          <p className="text-xl text-white/70">
            The locksmith industry has a serious rogue trader problem. Knowing what things should actually cost means you
            can spot an inflated bill before it arrives — and choose someone honest in the first place.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <h2>UK Locksmith Price Table 2025</h2>
          <p>
            Prices vary by region — London is generally at the top end, and northern England (including Wigan and Ashton)
            tends to be more competitive. Here&apos;s what to expect across the board:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th className="p-3 text-left font-bold">Service</th>
                  <th className="p-3 text-right font-bold">From</th>
                  <th className="p-3 text-right font-bold">Up To</th>
                  <th className="p-3 text-left font-bold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-light'}>
                    <td className="p-3 font-medium text-brand-navy">{row.service}</td>
                    <td className="p-3 text-right text-green-700 font-semibold">£{row.low}</td>
                    <td className="p-3 text-right text-gray-600">£{row.high}</td>
                    <td className="p-3 text-gray-400 text-xs hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 -mt-4 mb-6">
            All prices include VAT. These are representative ranges — always get a fixed quote before agreeing to work.
          </p>

          <h2>What Makes Prices Go Up or Down?</h2>
          <h3>Time of Day</h3>
          <p>
            This is the single biggest factor. A locksmith charging £70 during office hours might charge £100+ in the evening
            and £130+ at 3am. That&apos;s not unreasonable — it reflects the reality of working unsocial hours. What matters is
            that they tell you upfront, before you agree to anything.
          </p>

          <h3>Type of Lock</h3>
          <p>
            A basic Yale cylinder is a very different job to a multipoint uPVC door lock with five locking points. More
            complex locks take longer and need specialist tools, which should be reflected in the quote — not sprung on
            you once they&apos;ve started.
          </p>

          <h3>Location</h3>
          <p>
            In cities with more competition, prices tend to be sharper. Rural or remote addresses may attract a travel
            supplement. In the Wigan area, you should expect pricing that&apos;s on the more competitive end of the UK scale.
          </p>

          <h3>Planned Work vs Emergency Call-Out</h3>
          <p>
            Being locked out at midnight costs more than booking a locksmith to change your locks on a Tuesday afternoon.
            That&apos;s fair enough. If you can plan ahead — new locks, spare keys, a security check — you&apos;ll always
            pay less than in an emergency.
          </p>

          <h2>Rogue Locksmith Warning Signs</h2>
          <p>
            Know what to watch for before you call anyone:
          </p>
          <ul>
            <li><strong>&quot;From £25&quot; or &quot;from £15&quot; advertised prices</strong> — almost always teaser rates that triple on arrival</li>
            <li><strong>Won&apos;t give a fixed price over the phone</strong> — every reputable locksmith can quote before they leave</li>
            <li><strong>Immediately says the lock needs drilling</strong> without trying anything else — drilling means they sell you a replacement lock</li>
            <li><strong>No verifiable name, address, or genuine reviews</strong> — anonymous traders are a red flag</li>
            <li><strong>Cash only, no receipt</strong> — speaks for itself</li>
          </ul>

          <h2>What We Charge in Ashton-in-Makerfield & Wigan</h2>
          <p>
            At Ashton Lock & Key, the price is confirmed over the phone before we move an inch. No call-out charge
            bolted on at the end, no VAT added at the door, no recommendation to drill when the lock doesn&apos;t need it.
          </p>
          <p>
            Whether you need an <Link href="/emergency-locksmith-ashton-in-makerfield">emergency locksmith in Ashton-in-Makerfield</Link>,
            <Link href="/key-cutting-ashton"> keys cut in Ashton</Link>, or{' '}
            <Link href="/car-key-replacement-wigan">car keys replaced in Wigan</Link>, call us for a straightforward quote.
          </p>
        </div>
      </article>

      <CTASection heading="Want a Fair, Fixed Price?" subtext="Call Ashton Lock & Key for an honest upfront quote. No hidden fees, no surprises." variant="orange" />
      <FAQSection faqs={faqs} heading="Locksmith Pricing FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'What to Do If Locked Out', href: '/blog/what-to-do-if-locked-out' },
              { title: 'Car Key Replacement Guide', href: '/blog/car-key-replacement-guide' },
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
