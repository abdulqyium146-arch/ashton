import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  // ─── FIX: removed brand name — template adds it → "Car Key... | Ashton Lock & Key"
  title: 'Car Key Replacement Wigan | Lost Car Keys | All Makes & Models — Save up to £200',
  description: 'Car key replacement in Wigan & Ashton-in-Makerfield. Lost, broken or stolen car keys replaced and programmed for all makes and models. Much cheaper than dealers. Call 07711 341668.',
  alternates: {
    canonical: `${BUSINESS.url}/car-key-replacement-wigan`,
  },
}

const faqs = [
  {
    question: 'How much does car key replacement cost in Wigan?',
    answer: 'It depends on the make, model, and key type. Basic transponder keys come in around £80–£120 all-in. Remote and smart keys are typically £120–£250. Either way, you\'re looking at a significant saving over what a main dealer would charge.',
  },
  {
    question: 'Can you replace car keys without the original?',
    answer: 'Yes. This is called an "all keys lost" job — we programme brand new keys to your vehicle from scratch with nothing to work from. It costs a bit more than replacing a single lost key, but it\'s very much doable. Have your V5 logbook handy as proof of ownership.',
  },
  {
    question: 'How long does car key replacement take?',
    answer: 'Most jobs take between 30 and 90 minutes on-site, depending on the vehicle. We come to wherever your car is — home, work, a car park — so there\'s no need to arrange a recovery truck.',
  },
  {
    question: 'Do you cover all car makes and models?',
    answer: 'We cover the vast majority — Ford, Vauxhall, VW, Audi, BMW, Mercedes, Toyota, Renault, Peugeot, Citroën, Nissan, Honda, Kia, and plenty more. Call with your make, model, and year and we\'ll confirm straight away.',
  },
  {
    question: 'What if my car key fob has stopped working?',
    answer: 'More often than not it\'s a flat battery — a 2-minute fix. If the fob has lost its pairing, we can re-sync it. If it\'s physically broken, we can supply and programme a replacement fob. Call us and describe the problem and we\'ll advise.',
  },
]

const brands = [
  'Ford', 'Vauxhall', 'Volkswagen', 'Audi', 'BMW', 'Mercedes',
  'Toyota', 'Renault', 'Peugeot', 'Citroën', 'Nissan', 'Honda',
  'Kia', 'Hyundai', 'Seat', 'Skoda', 'Fiat', 'Volvo',
  'Land Rover', 'Jeep', 'Mazda', 'Mitsubishi',
]

export default function CarKeyReplacementPage() {
  const schemas = [
    serviceSchema(
      'Car Key Replacement Wigan',
      'Car key replacement and programming for all makes and models in Wigan and Ashton-in-Makerfield.',
      `${BUSINESS.url}/car-key-replacement-wigan`,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Car Key Replacement Wigan', url: `${BUSINESS.url}/car-key-replacement-wigan` },
    ]),
    webPageSchema({
      url: `${BUSINESS.url}/car-key-replacement-wigan`,
      title: 'Car Key Replacement Wigan | All Makes & Models',
      description: 'Car key replacement and programming in Wigan. All makes, cheaper than dealers.',
      type: 'ItemPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Car Key Replacement Wigan' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5-1.5M6 16H3" />
              </svg>
              Car Key Specialists — Wigan & Ashton-in-Makerfield
            </div>
            <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Car Key Replacement <span className="text-brand-orange">Wigan</span>
            </h1>
            <p className="text-xl text-white/70 mb-6 leading-relaxed">
              Lost your car keys? Had them stolen? Key fob stopped working? We replace and programme car keys for all
              makes and models across Wigan and Ashton-in-Makerfield — and we come to wherever your car is.
              Typically 40–60% cheaper than main dealers.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['All Makes & Models', 'Mobile Service', 'Cheaper Than Dealers', '30-Min Response', 'Fully Programmed'].map((t) => (
                <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
          {/* Price comparison */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-brand-navy mb-4">Price Comparison</h2>
            <div className="space-y-3">
              {[
                { label: 'Main Dealer', price: '£250–£400+', highlight: false },
                { label: 'Ashton Lock & Key', price: '£80–£200', highlight: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between p-3 rounded-xl ${
                    row.highlight ? 'bg-green-50 border-2 border-green-400' : 'bg-gray-50'
                  }`}
                >
                  <span className={`font-semibold ${row.highlight ? 'text-green-800' : 'text-gray-600'}`}>
                    {row.highlight && <span className="text-green-600 mr-1">✓</span>}
                    {row.label}
                  </span>
                  <span className={`font-black text-lg ${row.highlight ? 'text-green-700' : 'text-gray-400 line-through'}`}>
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Prices vary by make, model & key type. Indicative comparison only.
            </p>
            <div className="mt-4 p-3 bg-brand-light rounded-xl text-center">
              <p className="text-brand-navy font-semibold text-sm">You could save up to <span className="text-brand-orange font-black text-xl">£200</span></p>
              <p className="text-gray-500 text-xs mt-1">vs going to your car dealer</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-padding bg-brand-light" aria-labelledby="brands-heading">
        <div className="container-max">
          <h2 id="brands-heading" className="text-2xl font-black text-brand-navy mb-6 text-center">Car Makes We Cover</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((brand) => (
              <span key={brand} className="bg-white text-brand-navy font-semibold text-sm px-4 py-2 rounded-full border border-gray-200 hover:border-brand-orange transition-colors">
                {brand}
              </span>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-500 text-sm">Don&apos;t see your make? <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold hover:underline">Call us</a> — we likely cover it.</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>We Come to Wherever Your Car Is</h2>
          <p>
            When you&apos;ve lost your car keys, being told to arrange recovery to a dealer and wait several days for a
            replacement is the last thing you want to hear. Our mobile car key service means we come directly to you —
            home, work, a car park, anywhere in the Wigan area — and get it sorted on the spot.
          </p>

          <h2>What&apos;s Included in Our Car Key Replacement Service?</h2>
          <h3>Key Cutting</h3>
          <p>
            We cut the physical blade to match your car&apos;s locks. Even without an original key to copy, we can often pull
            the key code from the vehicle&apos;s lock barrel or VIN data.
          </p>
          <h3>Transponder Programming</h3>
          <p>
            Since the mid-90s, virtually every car key contains a small chip that has to be recognised by the immobiliser
            before the engine will start. A correctly cut key that hasn&apos;t been programmed is useless. We programme the
            new key to your specific vehicle so it starts first time.
          </p>
          <h3>Remote / Fob Programming</h3>
          <p>
            If your key controls central locking, we programme the remote at the same time. You leave with a fully working
            key — not just something that turns in the ignition.
          </p>

          <h2>Lost All Your Car Keys? We Can Still Sort It</h2>
          <p>
            Dealers often quote £400+ for an &quot;all keys lost&quot; job — and that&apos;s before you pay for recovery. We carry
            specialist diagnostic equipment for this exact scenario and offer a much more competitive price. Call us with
            your make, model, and year and we&apos;ll give you a quote.
          </p>

          <h2>Serving Wigan, Ashton, and Surrounding Areas</h2>
          <p>
            Our mobile car key service covers Wigan, <Link href="/locksmith-ashton-in-makerfield">Ashton-in-Makerfield</Link>,
            St Helens, Newton-le-Willows, Leigh, Golborne, and all surrounding WN postcodes. Want to understand more
            about what&apos;s involved? Read our <Link href="/blog/car-key-replacement-guide">complete car key replacement guide</Link>.
          </p>
        </div>
      </section>

      <CTASection heading="Lost Your Car Keys in Wigan?" subtext="Don't pay dealer prices. Call Ashton Lock & Key for affordable car key replacement across Wigan and Ashton-in-Makerfield." variant="navy" />

      <FAQSection faqs={faqs} heading="Car Key Replacement FAQs" />

      <section className="section-padding bg-brand-light">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link href="/emergency-locksmith-ashton-in-makerfield" className="card hover:-translate-y-0.5 transition-transform group">
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">Emergency Locksmith</h3>
              <p className="text-gray-600 text-sm">24/7 emergency lockout service in Ashton-in-Makerfield.</p>
            </Link>
            <Link href="/key-cutting-ashton" className="card hover:-translate-y-0.5 transition-transform group">
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">Key Cutting Ashton</h3>
              <p className="text-gray-600 text-sm">Spare keys cut while you wait. All key types.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
