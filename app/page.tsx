import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/constants'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import TrustBadges from '@/components/TrustBadges'
import LocalPresenceSection from '@/components/LocalPresenceSection'

export const metadata: Metadata = {
  // â”€â”€â”€ FIX: Use 'absolute' so template doesn't append brand name twice
  //     Without 'absolute', the parent template would produce:
  //     "Emergency Locksmith... | Ashton Lock & Key | Ashton Lock & Key"
  title: {
    absolute: 'Emergency Locksmith Ashton-in-Makerfield | 24/7 Fast Response | Ashton Lock & Key',
  },
  description:
    'Locked out in Ashton-in-Makerfield or Wigan? Ashton Lock & Key is your local 24/7 locksmith â€” emergency lockouts, key cutting & car key replacement. 30-minute response. Call 07309 903243.',
  alternates: {
    canonical: BUSINESS.url,
    languages: { 'en-GB': BUSINESS.url, 'x-default': BUSINESS.url },
  },
  openGraph: {
    title: 'Emergency Locksmith Ashton-in-Makerfield | 24/7 Fast Response | Ashton Lock & Key',
    description:
      'Locked out in Ashton-in-Makerfield or Wigan? Ashton Lock & Key is your local 24/7 locksmith â€” emergency lockouts, key cutting & car key replacement. 30-minute response. Call 07309 903243.',
    url: BUSINESS.url,
    type: 'website',
  },
}

const services = [
  {
    title: 'Emergency Locksmith',
    description: 'Stepped outside and the door slammed behind you? Left your keys on the kitchen table? We\'ll be with you in 30 minutes â€” day or night, 365 days a year.',
    href: '/emergency-locksmith-ashton-in-makerfield',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5C2.57 18.333 3.532 20 5.072 20z" />
      </svg>
    ),
    badge: '24/7',
    badgeColor: 'bg-red-100 text-red-700',
    cta: 'Emergency Call-Out',
  },
  {
    title: 'Key Cutting Ashton',
    description: 'Don\'t get caught out with only one key. We cut house keys, office keys, padlock keys and more â€” precision-cut while you wait, usually in under 5 minutes.',
    href: '/key-cutting-ashton',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    badge: 'Same Day',
    badgeColor: 'bg-blue-100 text-blue-700',
    cta: 'Get Keys Cut',
  },
  {
    title: 'Car Key Replacement',
    description: 'Lost your car keys and the dealer wants Â£300? We replace and programme keys for all makes and models on-site â€” typically saving you Â£100â€“200 compared to main dealer prices.',
    href: '/car-key-replacement-wigan',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    badge: 'All Makes',
    badgeColor: 'bg-green-100 text-green-700',
    cta: 'Replace Car Keys',
  },
]

const faqs = [
  {
    question: 'How quickly can you reach me in an emergency?',
    answer: 'Most of the time we\'re with you within 30 minutes anywhere in Ashton-in-Makerfield or central Wigan. Sometimes faster. We\'re available round the clock â€” weekends, Christmas Day, bank holidays, 3am. Call us any time.',
  },
  {
    question: 'How much does an emergency locksmith cost?',
    answer: 'Standard daytime lockouts start from Â£60. Out-of-hours (evenings and weekends) from Â£80. We always give you a fixed quote before we set off â€” what we quote is what you pay. There\'s no call-out charge on top and no VAT surprises.',
  },
  {
    question: 'Are you a local locksmith or a national call centre?',
    answer: 'We\'re a genuine local locksmith based in Ashton-in-Makerfield. When you ring us, you\'re speaking directly to the person who\'ll be turning up at your door â€” nobody is putting you on hold and farming the job out to a subcontractor.',
  },
  {
    question: 'Can you open my lock without damaging it?',
    answer: 'Yes, in the vast majority of cases. Non-destructive entry is always our first approach â€” proper locksmith picks and bypass tools, not brute force. If a lock genuinely can\'t be saved, we carry replacements and can fit one straight away.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We cover Ashton-in-Makerfield, Wigan, St Helens, Newton-le-Willows, Leigh, Golborne, Haydock, Billinge, Orrell, Hindley, Abram, Bryn, and all WN postcodes. Not sure if we reach you? Just call â€” if we can get there, we will.',
  },
]

export default function HomePage() {
  const schemaData = [
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: BUSINESS.url }]),
  ]

  return (
    <>
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative bg-brand-navy overflow-hidden" aria-labelledby="hero-heading">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
              Available Now â€” Serving Ashton-in-Makerfield & Wigan
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Emergency Locksmith{' '}
              <span className="text-brand-orange">Ashton-in-Makerfield</span>
              <br />
              <span className="text-3xl md:text-4xl text-white/80">Available 24/7 Â· Fast 30-Min Response</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
              Standing on your own doorstep at midnight with no way in is not a good feeling. We know â€” we get the calls.
              Ashton Lock & Key is your local locksmith in Ashton-in-Makerfield and Wigan, and we&apos;re ready when you need us.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: '30 min', label: 'Average response time' },
                { value: '4.9â˜…', label: '127+ verified reviews' },
                { value: '24/7', label: 'Always available' },
                { value: 'Â£60+', label: 'From (no hidden fees)' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-brand-orange">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-xl py-5 px-8 rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200"
                aria-label={`Call us now on ${BUSINESS.phoneDisplay}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg py-5 px-8 rounded-xl transition-all duration-200"
                aria-label="WhatsApp us"
              >
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            <p className="mt-5 text-white/50 text-sm">
              âœ“ No call-out charge &nbsp;Â·&nbsp; âœ“ Fixed price quotes &nbsp;Â·&nbsp; âœ“ Fully insured
            </p>
          </div>

          {/* Hero image â€” van shot, above the fold */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ashton-lock-key-locksmith-van-wigan.webp"
                alt="Ashton Lock & Key mobile locksmith van fully equipped for emergency callouts across Wigan and Ashton-in-Makerfield"
                width={600}
                height={450}
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur rounded-xl px-4 py-3">
                <p className="text-white text-sm font-semibold">Mobile locksmith serving Wigan &amp; Ashton-in-Makerfield</p>
                <p className="text-brand-orange text-xs font-bold mt-0.5">Full locksmith services available â€” 24/7</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ SERVICES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-brand-light" aria-labelledby="services-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
              Our Locksmith Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From being stuck on your doorstep at midnight to needing a spare key cut on your lunch break â€” here&apos;s how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <article key={service.href} className="card flex flex-col group hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all text-sm"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ TRUST BADGES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <TrustBadges />

      {/* â”€â”€ HOW IT WORKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-brand-navy" aria-labelledby="how-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-black text-white mb-3">
              How It Works
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">Three simple steps to get you back inside fast.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Call or WhatsApp Us',
                desc: 'Ring us on 07309 903243 or send a WhatsApp. You\'ll speak directly to a locksmith â€” not a call centre, not a switchboard. Just straight through to someone who can help.',
              },
              {
                step: '02',
                title: 'We Give You a Fixed Quote',
                desc: 'We\'ll ask about the lock type and where you are, then give you a firm price over the phone. That\'s what you pay. No surprises when we arrive.',
              },
              {
                step: '03',
                title: 'We\'re With You in 30 Minutes',
                desc: 'We set off immediately. Most jobs in Ashton-in-Makerfield and central Wigan, we\'re knocking on your door in under 30 minutes.',
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-lg py-4 px-8">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay} Now
            </a>
          </div>
        </div>
      </section>

      {/* â”€â”€ REVIEWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <ReviewsSection />

      {/* â”€â”€ AREAS SERVED â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-brand-light" aria-labelledby="areas-heading">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 id="areas-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
              Areas We Cover
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Based in Ashton-in-Makerfield (WN4), we cover the whole of Wigan borough and beyond. If you&apos;re in the WN postcode area, we can almost certainly reach you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {BUSINESS.serviceAreas.map((area) => (
              <div key={area} className="bg-white rounded-xl p-3 text-center border border-gray-100 hover:border-brand-orange hover:shadow-sm transition-all">
                <svg className="w-4 h-4 text-brand-orange mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold text-brand-navy">{area}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link href="/locksmith-ashton-in-makerfield" className="btn-secondary justify-center text-sm">Locksmith Ashton</Link>
            <Link href="/locksmith-wigan" className="btn-secondary justify-center text-sm">Locksmith Wigan</Link>
            <Link href="/locksmith-near-me" className="btn-secondary justify-center text-sm">Locksmith Near Me</Link>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
            Need us urgently?{' '}
            <Link href="/emergency-locksmith-ashton-in-makerfield" className="text-brand-orange font-semibold hover:underline">Emergency locksmith Ashton-in-Makerfield</Link>{' '}
            is available right now â€” 24/7, 30-minute response.
          </p>
        </div>
      </section>

      {/* â”€â”€ SHOPFRONT TRUST SIGNAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-white" aria-labelledby="about-heading">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/ashton-lock-key-shopfront-ashton-in-makerfield.webp"
                alt="Ashton Lock & Key shop on the high street in Ashton-in-Makerfield â€” your local locksmith and key cutting centre"
                width={640}
                height={480}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 id="about-heading" className="text-3xl font-black text-brand-navy mb-4">
                A Real Local Business â€” Not a Call Centre
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ashton Lock & Key is based right here in Ashton-in-Makerfield. We have a shop on the high street,
                a fully equipped mobile van, and a team you can actually speak to. When you call, you get the locksmith â€”
                not an operator 200 miles away who farms the job out.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That local presence means faster response times, honest prices, and genuine accountability.
                We&apos;re not going anywhere â€” our reputation depends on every single job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ LOCAL PRESENCE: GMB MAP + NAP + HOURS + SERVICE RADIUS â”€â”€ */}
      <LocalPresenceSection />

      {/* â”€â”€ FAQs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <FAQSection faqs={faqs} heading="Common Questions About Our Locksmith Service" />

      {/* â”€â”€ BLOG PREVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-white" aria-labelledby="blog-heading">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 id="blog-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
              Locksmith Advice & Tips
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Expert advice from your local Ashton locksmith.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'What to Do If You\'re Locked Out of Your House',
                excerpt: 'Don\'t force the door. Check your insurance. And whatever you do, don\'t call the first number that comes up on Google. Here\'s what to actually do.',
                href: '/blog/what-to-do-if-locked-out',
                category: 'Emergency',
                color: 'bg-red-50 text-red-700',
              },
              {
                title: 'How Much Does a Locksmith Cost in the UK?',
                excerpt: 'The industry has a rogue trader problem. Here\'s the honest breakdown of what things should cost â€” and how to spot when you\'re being overcharged.',
                href: '/blog/how-much-does-a-locksmith-cost-uk',
                category: 'Pricing',
                color: 'bg-blue-50 text-blue-700',
              },
              {
                title: 'How to Improve Your Home Security on a Budget',
                excerpt: 'Most burglaries are opportunistic. A few sensible, affordable upgrades can make your home look like too much effort â€” and that\'s often enough.',
                href: '/blog/how-to-improve-home-security',
                category: 'Security',
                color: 'bg-green-50 text-green-700',
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="card group hover:-translate-y-1 transition-transform duration-200 block">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.color} mb-3 inline-block`}>{post.category}</span>
                <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-orange transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-brand-orange text-sm font-semibold flex items-center gap-1">
                  Read more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-secondary">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <CTASection variant="gradient" />

      {/* â”€â”€ CONTACT NUDGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-6 bg-brand-navy">
        <div className="container-max text-center">
          <p className="text-white/60 text-sm">
            Prefer to send a message?{' '}
            <Link href="/contact" className="text-white underline hover:text-brand-orange transition-colors">Use our contact form</Link>{' '}
            and we&apos;ll get back to you promptly.
          </p>
        </div>
      </section>
    </>
  )
}
