import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Car Key Replacement UK Guide | Lost, Broken or Stolen Keys | 2025',
  description: 'Complete guide to car key replacement in the UK. What it costs, how long it takes, dealer vs locksmith — and how to get the best deal. Expert advice from Ashton Lock & Key.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/car-key-replacement-guide`,
  },
}

const faqs = [
  {
    question: 'Is it cheaper to get a replacement car key from a locksmith or a dealer?',
    answer: 'Almost always a locksmith is significantly cheaper. Main dealers typically charge £200–£500+ for car key replacement. An automotive locksmith can usually do the same job for £80–£250 depending on the key type and vehicle.',
  },
  {
    question: 'What happens if I lose all my car keys?',
    answer: 'This is called an "all keys lost" situation. It\'s more complex because the car\'s immobiliser must be reset and new keys programmed from scratch, requiring diagnostic equipment. It costs more than replacing one key when you have a spare, but an automotive locksmith is still much cheaper than a dealer.',
  },
  {
    question: 'How long does it take to get a replacement car key?',
    answer: 'A standard cut-and-programme job typically takes 30–90 minutes with a mobile locksmith. Some complex vehicles or rare models may require ordering a special blank, which can add a day or two.',
  },
]

export default function CarKeyGuide() {
  const datePublished = '2024-09-20'
  const pageUrl = `${BUSINESS.url}/blog/car-key-replacement-guide`

  const schemas = [
    blogPostingSchema({
      title: 'Car Key Replacement: The Complete UK Guide',
      description: 'Everything you need to know about replacing car keys in the UK — costs, options, and expert tips.',
      url: pageUrl,
      datePublished,
      dateModified: datePublished,
      keywords: ['car key replacement uk', 'lost car keys', 'car key programming', 'car key replacement wigan'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Car Key Replacement Guide', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'Car Key Replacement: The Complete UK Guide', description: 'Complete guide to car key replacement in the UK.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Car Key Replacement Guide' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-500/20 text-purple-400 text-sm font-semibold px-3 py-1.5 rounded-full">Car Keys</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>20 September 2024</time>
            <span className="text-white/50 text-sm">· 8 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Car Key Replacement:{' '}
            <span className="text-brand-orange">The Complete UK Guide</span>
          </h1>
          <p className="text-xl text-white/70">Lost, broken, or nicked — whatever the situation, here&apos;s exactly what your options are, what it costs, and why a locksmith almost always beats the dealer.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <h2>What Type of Car Key Do You Have?</h2>
          <p>
            Before you call anyone, it&apos;s worth knowing what you&apos;re dealing with — because the type of key significantly
            affects what the job involves and what it costs.
          </p>

          <h3>Basic Cut Key (Pre-1995 vehicles)</h3>
          <p>
            Older cars use a simple metal key with no electronics at all. Replacement is straightforward — the right blank
            and a cutting machine is all that&apos;s needed. These are cheap and quick to sort.
          </p>

          <h3>Transponder Key (Most vehicles 1995–2010)</h3>
          <p>
            Looks like a standard key but there&apos;s a small microchip embedded in the plastic head. That chip communicates
            with the car&apos;s immobiliser — if it&apos;s not been programmed correctly, the engine won&apos;t start even if the key
            turns in the ignition. You need both cutting and programming.
          </p>

          <h3>Remote Key / Key Fob (2000s onwards)</h3>
          <p>
            A transponder key with a built-in remote for central locking. Replacing one means cutting the blade,
            programming the chip, and synchronising the remote. A bit more involved, and priced accordingly.
          </p>

          <h3>Smart / Proximity Key (2010s onwards)</h3>
          <p>
            Stays in your pocket and the car senses it as you approach — keyless entry, push-button start. The most complex
            to replace, requiring specialist diagnostic equipment. Also the most expensive — but still considerably cheaper
            with a locksmith than at a dealer.
          </p>

          <h2>Locksmith vs Main Dealer — The Real Comparison</h2>
          <div className="bg-brand-light rounded-2xl p-5 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-brand-navy mb-2">Main Dealer</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✗ £200–£500+ for basic keys</li>
                  <li>✗ Often requires booking in advance</li>
                  <li>✗ May need vehicle recovered to them</li>
                  <li>✗ Can take days for some models</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-700 mb-2">Automotive Locksmith</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ £80–£250 for same job</li>
                  <li>✓ Same-day service</li>
                  <li>✓ Mobile — comes to you</li>
                  <li>✓ Usually faster turnaround</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Lost All Your Car Keys?</h2>
          <p>
            This is the worst-case scenario — and the one where people get stung the hardest at dealers. When there are
            no working keys left, the car&apos;s ECU has to be accessed, existing keys wiped, and new ones programmed
            completely from scratch. This is called &quot;all keys lost&quot; (AKL) programming.
          </p>
          <p>
            Dealers often charge £400+ for this. Here&apos;s what to do:
          </p>
          <ul>
            <li>Don&apos;t panic — it&apos;s fixable, it just costs more than a one-key replacement</li>
            <li>Call an automotive locksmith before you call the dealer — the saving is significant</li>
            <li>Have your V5 logbook ready to prove ownership</li>
            <li>Be at the vehicle when the locksmith arrives</li>
          </ul>

          <h2>What to Do If Your Car Keys Were Stolen</h2>
          <p>
            If your keys were taken rather than just lost, don&apos;t assume the thief won&apos;t come back for the car. Act quickly:
          </p>
          <ul>
            <li>Report the theft to police and get a crime reference number</li>
            <li>Ring your insurer — stolen key replacement may be covered on your policy</li>
            <li>Have the old key codes deleted and new keys programmed straight away</li>
            <li>Consider a steering wheel lock or a tracker for extra peace of mind</li>
          </ul>

          <h2>Car Key Replacement in Wigan & Ashton-in-Makerfield</h2>
          <p>
            Our <Link href="/car-key-replacement-wigan">car key replacement service</Link> covers Wigan, Ashton-in-Makerfield,
            and the wider WN area. We carry diagnostic equipment for all common makes and models, and we come to wherever
            your car is — no recovery truck needed.
          </p>
        </div>
      </article>

      <CTASection heading="Lost Your Car Keys?" subtext="Call Ashton Lock & Key for affordable car key replacement anywhere in Wigan or Ashton-in-Makerfield." variant="orange" />
      <FAQSection faqs={faqs} heading="Car Key Replacement FAQs" />
    </>
  )
}
