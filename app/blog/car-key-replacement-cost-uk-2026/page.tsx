import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Key Replacement Cost UK 2026 | Prices by Key Type & Vehicle',
  description: 'Honest 2026 guide to car key replacement costs in the UK. Transponder keys, smart keys, all-keys-lost — locksmith vs dealer prices explained. No fluff.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/car-key-replacement-cost-uk-2026`,
  },
}

const faqs = [
  {
    question: 'What\'s the average cost of car key replacement in the UK in 2026?',
    answer: 'For a standard transponder key replacement with a working spare: £80–£120 with an automotive locksmith. Remote key fobs: £100–£180. Smart keys: £180–£300. All-keys-lost (AKL) jobs: £120–£280 depending on vehicle. Dealer prices are typically 40–100% higher.',
  },
  {
    question: 'Why does all-keys-lost replacement cost more?',
    answer: 'Because the entire programming process is more complex — the ECU must be accessed to wipe old key data before new keys can be added. This requires a higher level of diagnostic access and takes longer than simply adding a key alongside an existing one.',
  },
  {
    question: 'Are there any hidden costs to watch out for?',
    answer: 'With a reputable locksmith, no — you get a fixed price over the phone before they attend. Watch out for locksmiths who quote a low call-out price and then add on "parts" and "labour" separately once they\'re at your door. Always ask for the all-in price upfront.',
  },
]

const priceTable = [
  { type: 'Basic cut key (pre-1995, no chip)', locksmith: '£15–£30', dealer: '£20–£60' },
  { type: 'Transponder key (1995–2010)', locksmith: '£80–£120', dealer: '£150–£280' },
  { type: 'Remote key fob (central locking)', locksmith: '£100–£180', dealer: '£180–£350' },
  { type: 'Smart / proximity key', locksmith: '£180–£300', dealer: '£300–£600+' },
  { type: 'All keys lost — transponder', locksmith: '£120–£200', dealer: '£250–£500' },
  { type: 'All keys lost — smart key', locksmith: '£200–£320', dealer: '£400–£800+' },
  { type: 'Key fob re-sync only', locksmith: '£40–£70', dealer: '£80–£150' },
  { type: 'Broken key extraction', locksmith: '£40–£80', dealer: 'Varies' },
]

export default function CarKeyReplacementCostPage() {
  const datePublished = '2026-01-20'
  const dateModified = '2026-01-20'
  const pageUrl = `${BUSINESS.url}/blog/car-key-replacement-cost-uk-2026`

  const schemas = [
    blogPostingSchema({
      title: 'Car Key Replacement Cost UK 2026',
      description: 'Transparent guide to car key replacement costs in the UK — all key types, locksmith vs dealer comparison.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['car key replacement cost uk 2026', 'how much to replace car key uk', 'car key replacement price'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Car Key Replacement Cost UK 2026', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'Car Key Replacement Cost UK 2026', description: 'Transparent 2026 guide to car key replacement costs in the UK.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Car Key Replacement Cost UK 2026' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1.5 rounded-full">Pricing</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>20 January 2026</time>
            <span className="text-white/50 text-sm">· 5 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Car Key Replacement Cost UK{' '}
            <span className="text-brand-orange">2026</span>
          </h1>
          <p className="text-xl text-white/70">Transparent, honest pricing for every car key scenario — so you know what&apos;s fair before you call anyone.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="prose-custom mb-10">
            <p>
              Car key replacement pricing in the UK is genuinely confusing — the cost varies significantly
              by key type, vehicle make and model, and who you call. This guide gives you honest,
              up-to-date figures so you can compare quotes with confidence.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-black text-brand-navy mb-4">Price Comparison Table — 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="p-3 text-left rounded-tl-xl">Key Type</th>
                    <th className="p-3 text-center">Auto Locksmith</th>
                    <th className="p-3 text-center rounded-tr-xl">Main Dealer</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? 'bg-brand-light' : 'bg-white'}>
                      <td className="p-3 text-gray-700">{row.type}</td>
                      <td className="p-3 text-center font-semibold text-green-700">{row.locksmith}</td>
                      <td className="p-3 text-center text-gray-500">{row.dealer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Prices are indicative for 2026. Actual cost depends on make, model, and location. Always get a fixed all-in quote before any work starts.
            </p>
          </div>

          <div className="prose-custom">
            <h2>What Affects the Price?</h2>
            <h3>Key Type</h3>
            <p>
              The biggest pricing driver is the key type. A basic cut key for a pre-1995 vehicle with no
              electronics is almost trivially cheap. A smart key for a current BMW or Mercedes requires
              specialist diagnostic access and proprietary software licences — hence the higher cost. See our{' '}
              <Link href="/blog/transponder-key-vs-smart-key-explained">transponder vs smart key guide</Link>{' '}
              for a plain-language explanation of the differences.
            </p>

            <h3>All Keys Lost vs Key Addition</h3>
            <p>
              Having a working spare key makes replacement significantly simpler and cheaper. The locksmith
              programmes the new key alongside the existing one — no ECU access required, no immobiliser
              reset. If all keys are genuinely lost, the ECU must be accessed and the key register wiped —
              a more involved process that takes longer and costs more.
            </p>

            <h3>Vehicle Make and Model</h3>
            <p>
              Some manufacturers use proprietary immobiliser systems that require specific software licences
              or hardware adapters to programme. Land Rover and Jaguar, for example, tend to cost more than
              Ford or Vauxhall because of the additional equipment required.
            </p>

            <h2>What You Should Always Ask For</h2>
            <p>
              Before any locksmith attends, ask for a fixed all-in price that includes the call-out, the key
              blank, cutting, and programming. If they won&apos;t give you a fixed price, don&apos;t use them.
              Legitimate locksmiths can and do give fixed quotes over the phone — it&apos;s a basic professional
              standard.
            </p>

            <h2>Getting a Replacement in the Ashton-in-Makerfield Area</h2>
            <p>
              Ashton Lock &amp; Key provides car key replacement across Ashton-in-Makerfield, Wigan, and the wider
              North West. All prices are quoted and fixed over the phone before we attend. See our{' '}
              <Link href="/car-key-replacement-ashton">car key replacement Ashton</Link> and{' '}
              <Link href="/car-key-replacement-wigan">car key replacement Wigan</Link> pages for service details.
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Need a Car Key Replacement?"
        subtext="Call Ashton Lock & Key — fixed price quoted upfront, mobile, all makes covered."
        variant="orange"
      />
      <FAQSection faqs={faqs} heading="Car Key Cost FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement: Complete UK Guide', href: '/blog/car-key-replacement-guide' },
              { title: 'Lost Your Car Keys? What to Do', href: '/blog/lost-car-keys-what-to-do-uk' },
              { title: 'Transponder vs Smart Key Explained', href: '/blog/transponder-key-vs-smart-key-explained' },
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
