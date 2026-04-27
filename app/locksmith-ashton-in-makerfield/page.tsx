import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Locksmith Ashton-in-Makerfield | 24/7 Local Expert',
  description: 'Looking for a locksmith in Ashton-in-Makerfield? Ashton Lock & Key is your local expert. Emergency lockouts, key cutting & car keys. Call 07309 903243.',
  alternates: {
    canonical: `${BUSINESS.url}/locksmith-ashton-in-makerfield`,
  },
}

const faqs = [
  {
    question: 'Is there a local locksmith in Ashton-in-Makerfield?',
    answer: 'Yes â€” Ashton Lock & Key is based right here in Ashton-in-Makerfield. When you call us, you speak to the locksmith directly, not a national call centre that farms the job out. We know the area and we\'re close by.',
  },
  {
    question: 'What locksmith services are available in Ashton-in-Makerfield?',
    answer: 'Emergency lockouts, key cutting, car key replacement and programming, lock repairs, lock upgrades, and security advice. Emergencies are available 24/7 â€” for non-urgent work, call any time and we\'ll arrange a convenient time.',
  },
  {
    question: 'How much does a locksmith cost in Ashton-in-Makerfield?',
    answer: 'Standard lockouts from Â£60 during the day, Â£80 out-of-hours. Key cutting from Â£3 per key. Car key replacement from Â£80 depending on the vehicle. You get a fixed quote upfront â€” nothing gets added on when we arrive.',
  },
]

export default function LocksmithAshtonPage() {
  const pageUrl = `${BUSINESS.url}/locksmith-ashton-in-makerfield`
  const schemas = [
    serviceSchema(
      'Locksmith Ashton-in-Makerfield',
      'Professional locksmith services in Ashton-in-Makerfield â€” emergency lockouts, key cutting, car key replacement, and lock upgrades. Available 24/7.',
      pageUrl,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Locksmith Ashton-in-Makerfield', url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      title: 'Locksmith Ashton-in-Makerfield | 24/7 Local Expert',
      description: 'Professional locksmith in Ashton-in-Makerfield. Emergency lockouts, key cutting & car keys. Genuinely local, fast response.',
      type: 'WebPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Locksmith Ashton-in-Makerfield' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="page-heading">
        <div className="container-max max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Your Local Ashton-in-Makerfield Locksmith
          </div>
          <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Locksmith <span className="text-brand-orange">Ashton-in-Makerfield</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Ashton Lock & Key is a genuine local locksmith based right here in Ashton-in-Makerfield. We cover the whole
            WN4 area â€” from emergency lockouts and key cutting through to car keys and security upgrades.
            When you call, you speak to the locksmith. No middleman, no call centre.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-max">
          <h2 id="services-heading" className="text-3xl font-black text-brand-navy mb-8 text-center">
            Locksmith Services in Ashton-in-Makerfield
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Emergency Lockout',
                desc: '24/7 emergency locksmith service in Ashton-in-Makerfield. Locked out? We\'ll be with you in 30 minutes.',
                href: '/emergency-locksmith-ashton-in-makerfield',
              },
              {
                title: 'Key Cutting',
                desc: 'Spare keys cut while you wait. All types of keys â€” from standard Yale to high-security locks.',
                href: '/key-cutting-ashton',
              },
              {
                title: 'Car Key Replacement',
                desc: 'Lost your car keys? We replace and programme car keys at prices well below main dealers.',
                href: '/car-key-replacement-wigan',
              },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card group hover:-translate-y-1 transition-transform block">
                <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors text-xl mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-brand-light">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
            <div className="prose-custom">
              <h2>A Locksmith Who Actually Knows Ashton-in-Makerfield</h2>
              <p>
                We&apos;re not a national franchise that routes your call to whoever&apos;s on the database nearest your postcode.
                Ashton Lock & Key is a local business, based in Ashton-in-Makerfield, serving WN4 and the surrounding
                area every single day. We know the streets, we know the housing stock, and we know the kinds of locks you&apos;ll
                find on the doors round here.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/ashton-lock-key-shopfront-ashton-in-makerfield.webp"
                  alt="Ashton Lock & Key shop on the high street in Ashton-in-Makerfield â€” your local locksmith since day one"
                  width={560}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/locksmith-shop-interior-keys-display-ashton.webp"
                  alt="Inside Ashton Lock & Key â€” extensive range of locks, keys and security products in Ashton-in-Makerfield"
                  width={560}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="prose-custom">
          <p>
            Whether you&apos;re locked out of a terraced house on Bryn Road, need a spare key for your business unit on the
            Stubshaw Cross estate, or you&apos;ve lost your car keys in Garswood â€” we&apos;re 30 minutes away.
          </p>

          <h2>Ashton-in-Makerfield Areas We Cover</h2>
          <p>
            We cover the whole of Ashton-in-Makerfield including the Town Centre, Bryn, Stubshaw Cross, Garswood, Haydock
            border, Golborne Road, Wigan Road, and all surrounding streets and residential estates.
          </p>

          <h2>Why Going Local Makes a Difference</h2>
          <p>
            A locksmith who is actually based nearby gets to you faster. They understand the local housing stock â€” the
            types of locks common to the area, the uPVC door systems used on estates built in the 90s, the older
            properties in the town centre with mortice locks. They also don&apos;t need to inflate prices to cover
            fuel and travel time from a depot 40 miles away.
          </p>
          <p>
            We also cover <Link href="/locksmith-wigan">Wigan town centre</Link> and the wider borough. If you&apos;re
            searching for a <Link href="/locksmith-near-me">locksmith near me</Link> anywhere in the WN postcodes,
            Ashton Lock & Key is who to call.
          </p>

          <h2>Helpful Resources for Ashton Residents</h2>
          <p>
            If you&apos;ve ever been caught out by a lockout, our step-by-step guide on{' '}
            <Link href="/blog/what-to-do-if-locked-out">what to do when you&apos;re locked out</Link> covers everything
            from checking your insurance to picking the right locksmith. Once you&apos;re back inside, it&apos;s worth reviewing
            your home security â€” our{' '}
            <Link href="/blog/how-to-improve-home-security">practical home security guide</Link> explains the upgrades
            that make the most difference on a tight budget, including which lock standards your insurer actually requires.
          </p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-padding bg-white" aria-labelledby="map-heading">
        <div className="container-max">
          <h2 id="map-heading" className="text-2xl font-black text-brand-navy mb-6 text-center">Find Us in Ashton-in-Makerfield</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9478.8!2d-2.6405!3d53.4878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1c3b3b3b3b3b%3A0x0!2sAshton-in-Makerfield%2C+Wigan!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashton Lock & Key location in Ashton-in-Makerfield"
            />
          </div>
        </div>
      </section>

      <ReviewsSection />
      <CTASection variant="orange" />
      <FAQSection faqs={faqs} heading="Ashton-in-Makerfield Locksmith FAQs" />
    </>
  )
}
