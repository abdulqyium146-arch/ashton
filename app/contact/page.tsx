import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Contact Our Locksmith | Call or WhatsApp | Ashton-in-Makerfield & Wigan',
  description:
    'Contact Ashton Lock & Key â€” your local locksmith in Ashton-in-Makerfield. Call 07309 903243 for 24/7 emergency lockouts, key cutting & car key replacement.',
  alternates: {
    canonical: `${BUSINESS.url}/contact`,
  },
  openGraph: {
    title: 'Contact Ashton Lock & Key | 24/7 Locksmith Ashton-in-Makerfield',
    description: 'Call or WhatsApp your local Ashton locksmith. Available 24/7.',
    url: `${BUSINESS.url}/contact`,
  },
}

const contactMethods = [
  {
    title: 'Call Us â€” 24/7',
    value: BUSINESS.phoneDisplay,
    href: `tel:${BUSINESS.phone}`,
    description: 'Speak directly to your locksmith. No call centres, no hold music.',
    action: 'Call Now',
    bg: 'bg-brand-orange',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    value: 'Message Us',
    href: `https://wa.me/${BUSINESS.whatsapp}`,
    description: 'Send a WhatsApp message and we\'ll reply as fast as possible.',
    action: 'Open WhatsApp',
    bg: 'bg-green-600',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    description: 'For non-urgent enquiries. We aim to reply within 4 hours during business hours.',
    action: 'Send Email',
    bg: 'bg-brand-blue',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const pageUrl = `${BUSINESS.url}/contact`

  const schemas = [
    webPageSchema({
      url: pageUrl,
      title: 'Contact Ashton Lock & Key',
      description: 'Contact your local locksmith in Ashton-in-Makerfield, Wigan.',
      type: 'ContactPage',
    }),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Contact', url: pageUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${pageUrl}#contactpage`,
      name: `Contact ${BUSINESS.name}`,
      url: pageUrl,
      description: 'Contact page for Ashton Lock & Key â€” your local locksmith in Ashton-in-Makerfield, Wigan.',
      mainEntity: {
        '@type': 'Locksmith',
        '@id': `${BUSINESS.url}/#business`,
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.address.streetAddress,
          addressLocality: BUSINESS.address.addressLocality,
          addressRegion: BUSINESS.address.addressRegion,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: 'GB',
        },
      },
    },
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="contact-heading">
        <div className="container-max max-w-2xl">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Contact <span className="text-brand-orange">Ashton Lock & Key</span>
          </h1>
          <p className="text-xl text-white/70 mb-4">
            Based in <strong className="text-white">Ashton-in-Makerfield, Wigan (WN4)</strong>.
            Available 24/7 for emergencies â€” no call centres, no waiting around.
          </p>
          <div className="flex items-center gap-2 text-green-400 font-semibold">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            Available right now
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="section-padding bg-white" aria-labelledby="methods-heading">
        <div className="container-max">
          <h2 id="methods-heading" className="text-2xl font-black text-brand-navy mb-8 text-center">
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <div key={method.title} className="card text-center hover:-translate-y-1 transition-transform">
                <div className={`w-16 h-16 ${method.bg} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                  {method.icon}
                </div>
                <h3 className="font-bold text-brand-navy text-xl mb-1">{method.title}</h3>
                <p className="font-semibold text-brand-orange mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{method.description}</p>
                <a
                  href={method.href}
                  className="btn-primary justify-center w-full"
                  {...(method.href.startsWith('https') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>

          {/* NAP block â€” for local SEO consistency */}
          <div
            className="bg-brand-light rounded-2xl p-8 max-w-2xl mx-auto text-center"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content={BUSINESS.name} />
            <h2 className="text-xl font-bold text-brand-navy mb-4">Our Details</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold text-brand-navy" itemProp="telephone">{BUSINESS.phoneDisplay}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700" itemProp="email">{BUSINESS.email}</span>
              </div>
              <div
                className="flex items-center justify-center gap-2"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-gray-700">
                  <span itemProp="addressLocality">Ashton-in-Makerfield</span>,{' '}
                  <span itemProp="addressRegion">Wigan</span>,{' '}
                  <span itemProp="postalCode">WN4</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-padding bg-brand-light" aria-labelledby="map-contact-heading">
        <div className="container-max">
          <h2 id="map-contact-heading" className="text-2xl font-black text-brand-navy mb-6 text-center">
            We Cover All of Ashton-in-Makerfield & Wigan
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9479.254761703516!2d-2.6499!3d53.4878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b08b27bb5c9f1%3A0x91b1b5f5f5f5f5f5!2sAshton-in-Makerfield%2C%20Wigan!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashton Lock & Key â€” service area map, Ashton-in-Makerfield, Wigan WN4"
            />
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Serving <strong>Ashton-in-Makerfield (WN4)</strong>, Wigan, St Helens, Newton-le-Willows,
            Leigh, Golborne, Haydock, Billinge, Orrell, Hindley, and surrounding areas.
          </p>
        </div>
      </section>

      {/* SERVICES â€” internal links from contact page to service pages */}
      <section className="section-padding bg-white" aria-labelledby="services-contact-heading">
        <div className="container-max max-w-3xl mx-auto">
          <h2 id="services-contact-heading" className="text-2xl font-black text-brand-navy mb-2 text-center">
            Our Locksmith Services
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            Not sure what you need? Browse our services â€” each page has full details, pricing, and FAQs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Emergency Locksmith Ashton-in-Makerfield', desc: '24/7 lockout response â€” we\'ll be with you in 30 minutes', href: '/emergency-locksmith-ashton-in-makerfield' },
              { title: 'Key Cutting Ashton', desc: 'Spare keys cut while you wait â€” from Â£3', href: '/key-cutting-ashton' },
              { title: 'Car Key Replacement Wigan', desc: 'Lost or broken car keys replaced on-site', href: '/car-key-replacement-wigan' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card hover:-translate-y-0.5 transition-transform group block">
                <p className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">{s.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            Covering{' '}
            <Link href="/locksmith-ashton-in-makerfield" className="text-brand-orange hover:underline font-medium">Ashton-in-Makerfield</Link>
            {', '}
            <Link href="/locksmith-wigan" className="text-brand-orange hover:underline font-medium">Wigan</Link>
            {', and '}
            <Link href="/locksmith-near-me" className="text-brand-orange hover:underline font-medium">all surrounding WN postcodes</Link>.
            Read our{' '}
            <Link href="/blog" className="text-brand-orange hover:underline font-medium">locksmith guides</Link>{' '}
            for advice before you book.
          </p>
        </div>
      </section>

      <CTASection
        heading="Emergency? Call Now."
        subtext="For urgent locksmith help in Ashton-in-Makerfield or Wigan â€” call us directly. We answer 24/7."
        variant="orange"
      />
    </>
  )
}
