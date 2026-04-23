import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { blogPostingSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Transponder Key vs Smart Key — What\'s the Difference? | 2026',
  description: 'What\'s the difference between a transponder key and a smart key? Plain-language guide to car key types, how they work, and what replacement involves.',
  alternates: {
    canonical: `${BUSINESS.url}/blog/transponder-key-vs-smart-key-explained`,
  },
}

const faqs = [
  {
    question: 'Is a transponder key the same as a chip key?',
    answer: 'Yes — "chip key," "transponder key," and "electronic key" all refer to the same thing: a physical key with a microchip embedded in the plastic head that communicates with the car\'s immobiliser.',
  },
  {
    question: 'Can a smart key be copied like a normal key?',
    answer: 'Not by a standard key cutting machine. Smart keys use encrypted rolling codes and require specialist diagnostic programming equipment to replicate. A copy made by a hardware store would cut the physical blade correctly but wouldn\'t communicate with the car at all.',
  },
  {
    question: 'Is a smart key more secure than a transponder key?',
    answer: 'In theory yes — smart keys use more sophisticated encryption. In practice, both are vulnerable to relay attacks (where thieves amplify the key\'s signal to open the car remotely), which is why adding a physical deterrent like a steering wheel lock is still recommended for high-value vehicles.',
  },
  {
    question: 'What happens if the battery in my smart key dies?',
    answer: 'Most smart keys have a hidden physical key blade for emergencies — check the back of your fob. You can also hold the dead fob directly against the start button on some vehicles, which allows a one-time start by using passive induction rather than the battery. See your vehicle handbook for the specific procedure.',
  },
]

export default function TransponderVsSmartKeyPage() {
  const datePublished = '2026-01-20'
  const dateModified = '2026-01-20'
  const pageUrl = `${BUSINESS.url}/blog/transponder-key-vs-smart-key-explained`

  const schemas = [
    blogPostingSchema({
      title: 'Transponder Key vs Smart Key — What\'s the Difference?',
      description: 'Plain-language guide to car key types — how transponder keys and smart keys work and what replacement involves.',
      url: pageUrl,
      datePublished,
      dateModified,
      keywords: ['transponder key vs smart key', 'what is a transponder key', 'proximity key explained', 'car key types uk'],
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Blog', url: `${BUSINESS.url}/blog` },
      { name: 'Transponder vs Smart Key', url: pageUrl },
    ]),
    webPageSchema({ url: pageUrl, title: 'Transponder Key vs Smart Key — What\'s the Difference?', description: 'Plain-language guide to car key types.', type: 'ItemPage' }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Transponder vs Smart Key' }]} />

      <section className="bg-brand-navy section-padding" aria-labelledby="article-heading">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-500/20 text-blue-400 text-sm font-semibold px-3 py-1.5 rounded-full">Explainer</span>
            <time className="text-white/50 text-sm" dateTime={datePublished}>20 January 2026</time>
            <span className="text-white/50 text-sm">· 5 min read</span>
          </div>
          <h1 id="article-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Transponder Key vs Smart Key —{' '}
            <span className="text-brand-orange">What&apos;s the Difference?</span>
          </h1>
          <p className="text-xl text-white/70">A clear, jargon-free explanation of how modern car keys work — so you know what you have and what replacement involves.</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto prose-custom">

          <p>
            If you&apos;ve ever been quoted different prices for key replacement on different vehicles, or wondered
            why your car needs a locksmith with special equipment while your parents&apos; old Fiesta doesn&apos;t —
            it all comes down to the key type. Here&apos;s what&apos;s actually going on.
          </p>

          <h2>The Basic Cut Key (Pre-1995)</h2>
          <p>
            Before the mid-1990s, car keys were simple: a shaped metal blade, no electronics. The lock mechanism
            recognises the blade shape and either turns or doesn&apos;t. A locksmith can cut a replacement using a
            blank and a profile — no programming needed. These are cheap and quick to sort, but also easy
            for thieves to copy.
          </p>

          <h2>The Transponder Key (1995–present)</h2>
          <p>
            In the mid-1990s, insurers pushed manufacturers to adopt immobilisers after car theft peaked.
            The solution was the transponder key: a conventional metal blade with a microchip embedded in
            the plastic head.
          </p>
          <p>
            Here&apos;s how it works: a ring aerial around the ignition barrel continuously broadcasts a low-power
            radio signal. When the key enters, this energises the microchip via induction (no battery needed
            in the key — the aerial powers it). The chip broadcasts back a unique code, the immobiliser ECU
            checks it, and if it matches a registered code, the fuel system is enabled.
          </p>
          <p>
            A key cut perfectly to fit the ignition but with no chip — or with an unprogrammed chip — will
            turn, but the engine won&apos;t start. Both cutting and programming are required.
          </p>

          <h2>The Remote Key Fob (2000s onwards)</h2>
          <p>
            A remote key fob is essentially a transponder key with an integrated remote control for the
            central locking. It has its own battery (usually a CR2032 coin cell) to power the remote
            transmitter. The transponder chip itself still works via induction from the ignition ring.
          </p>
          <p>
            Replacement involves cutting the blade, programming the chip to the immobiliser, and separately
            coding the remote to the car&apos;s body control module. If the battery dies, the remote stops
            working but the key still starts the car.
          </p>

          <h2>The Smart Key / Proximity Key (2010s onwards)</h2>
          <p>
            Smart keys (also called proximity keys, keyless entry keys, or intelligent keys depending on the
            manufacturer) work differently. Instead of being inserted into the ignition, they stay in your
            pocket. The vehicle constantly broadcasts a short-range signal and detects the key&apos;s presence.
            When you touch the door handle, it unlocks. When you press the start button, it starts.
          </p>
          <p>
            The encryption is more sophisticated than a standard transponder key, and the two-way communication
            uses rolling codes (the code changes after every use) rather than a fixed code. Replacing a smart
            key requires deeper ECU access and more sophisticated diagnostic equipment, which is why it costs
            more.
          </p>

          <div className="bg-brand-light rounded-2xl p-5 my-6">
            <h3 className="font-bold text-brand-navy mb-3">Quick Reference</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 text-left text-brand-navy">Feature</th>
                    <th className="pb-2 text-center text-brand-navy">Transponder</th>
                    <th className="pb-2 text-center text-brand-navy">Smart Key</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  {[
                    ['Physical blade required', '✓ Yes', '✓ Hidden blade'],
                    ['Key inserted to start', '✓ Yes', '✗ Stays in pocket'],
                    ['Chip battery needed', '✗ No (passive)', '✓ Yes'],
                    ['Programming required', '✓ Yes', '✓ Yes (more complex)'],
                    ['Replacement cost', 'Lower', 'Higher'],
                    ['Vulnerable to relay attacks', 'Less so', 'Yes — use signal blocker'],
                  ].map(([feat, trans, smart]) => (
                    <tr key={feat} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 text-gray-700">{feat}</td>
                      <td className="py-2 text-center text-gray-600">{trans}</td>
                      <td className="py-2 text-center text-gray-600">{smart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2>What This Means for Replacement</h2>
          <p>
            When you call an auto locksmith about a replacement key, telling them your vehicle&apos;s make,
            model, and year is the quickest way to get an accurate quote — because that determines the key
            type. If you&apos;re curious which type you have, look at your existing key: if it has buttons and
            a thick plastic head, it&apos;s a remote fob or smart key. If it has no buttons and a thin plastic
            head, it&apos;s a basic transponder key.
          </p>
          <p>
            For our full{' '}
            <Link href="/transponder-key-programming-ashton">transponder key programming service</Link> and{' '}
            <Link href="/car-key-programming-ashton">car key programming</Link> in Ashton-in-Makerfield, or
            for a cost comparison by key type, see our{' '}
            <Link href="/blog/car-key-replacement-cost-uk-2026">2026 car key replacement cost guide</Link>.
          </p>
        </div>
      </article>

      <CTASection
        heading="Need Your Car Key Programmed?"
        subtext="Ashton Lock & Key covers transponder and smart key programming for all makes — mobile, same day."
        variant="navy"
      />
      <FAQSection faqs={faqs} heading="Transponder & Smart Key FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Car Key Replacement: Complete UK Guide', href: '/blog/car-key-replacement-guide' },
              { title: 'Car Key Replacement Cost UK 2026', href: '/blog/car-key-replacement-cost-uk-2026' },
              { title: 'Lost Your Car Keys? What to Do', href: '/blog/lost-car-keys-what-to-do-uk' },
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
