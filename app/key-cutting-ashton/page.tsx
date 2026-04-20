import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Key Cutting Ashton-in-Makerfield | Spare Keys & All Key Types | Fast & Affordable',
  description: 'Professional key cutting in Ashton-in-Makerfield. House keys, office keys, padlock keys — precision-cut while you wait. Call 07711 341668 for same-day key cutting.',
  alternates: {
    canonical: `${BUSINESS.url}/key-cutting-ashton`,
  },
}

const faqs = [
  {
    question: 'How much does key cutting cost in Ashton?',
    answer: 'Standard house keys start from £3–£6 each. High-security keys (Mul-T-Lock, Abloy, Banham) cost more depending on the blank. We always tell you the price before we cut anything.',
  },
  {
    question: 'Can you cut keys from a worn original?',
    answer: 'Usually, yes. We can decode most worn keys and produce an accurate copy. If the key is too far gone to read, we can sometimes pull a code directly from the lock barrel instead.',
  },
  {
    question: 'Do you cut keys for all types of locks?',
    answer: 'We cover Yale locks, Chubb locks, mortice locks, euro cylinders, padlocks, window locks, cabinet keys, and more. If you\'re unsure whether we can help with yours, just bring it in or give us a ring.',
  },
  {
    question: 'How long does key cutting take?',
    answer: 'Most standard keys take under 5 minutes. High-security keys can take a little longer. Either way, it\'s a quick job — we won\'t keep you hanging around.',
  },
  {
    question: 'Can you cut keys without the original?',
    answer: 'In many cases, yes. If you have the key code, lock number, or we can access the lock directly, we can often cut a key from scratch. Call us with the details and we\'ll tell you straight away whether we can help.',
  },
]

const keyTypes = [
  { name: 'Yale Keys', desc: 'Standard Yale and similar flat-blade keys for front and back door cylinder locks.' },
  { name: 'Chubb Keys', desc: 'Mortice lock keys for 2, 3 and 5-lever locks — the type you\'ll find on most older doors.' },
  { name: 'Euro Cylinder Keys', desc: 'Double-sided euro profile keys for modern uPVC and composite doors.' },
  { name: 'High-Security Keys', desc: 'Mul-T-Lock, Banham, Abloy and other patented keys — with proper authorisation.' },
  { name: 'Padlock Keys', desc: 'From small shed padlocks to heavy-duty security padlocks. All sizes covered.' },
  { name: 'Window Lock Keys', desc: 'Window handle and espagnolette lock keys for uPVC and timber-framed windows.' },
  { name: 'Cabinet & Drawer Keys', desc: 'Filing cabinets, desks, lockers, office furniture. Bring in the lock and we\'ll sort it.' },
  { name: 'Garage Lock Keys', desc: 'Keys for up-and-over garage doors, side-entry locks, and roller door mechanisms.' },
]

export default function KeyCuttingPage() {
  const schemas = [
    serviceSchema(
      'Key Cutting Ashton-in-Makerfield',
      'Professional key cutting service in Ashton-in-Makerfield for all key types.',
      `${BUSINESS.url}/key-cutting-ashton`,
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: BUSINESS.url },
      { name: 'Key Cutting Ashton', url: `${BUSINESS.url}/key-cutting-ashton` },
    ]),
    webPageSchema({
      url: `${BUSINESS.url}/key-cutting-ashton`,
      title: 'Key Cutting Ashton-in-Makerfield | All Key Types | Same-Day Service',
      description: 'Professional key cutting in Ashton-in-Makerfield for all key types. From £3.',
      type: 'ItemPage',
    }),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Breadcrumb items={[{ label: 'Key Cutting Ashton' }]} />

      {/* HERO */}
      <section className="bg-brand-blue section-padding" aria-labelledby="page-heading">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              Professional Key Cutting — Ashton-in-Makerfield
            </div>
            <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Key Cutting <span className="text-brand-orange">Ashton</span>
            </h1>
            <p className="text-xl text-white/70 mb-6 leading-relaxed">
              Need a spare for your son who keeps losing his, or a key for the new tenant? We cut all key types while you wait —
              usually in under 5 minutes. Fast, accurate, and affordable.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['From £3 Per Key', 'All Key Types', 'Same-Day Service', 'High Security Keys', 'No Appointment Needed'].map((t) => (
                <span key={t} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-xl py-5 px-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {keyTypes.slice(0, 4).map((kt) => (
              <div key={kt.name} className="bg-white/10 backdrop-blur rounded-xl p-4 text-white">
                <p className="font-bold text-sm mb-1">{kt.name}</p>
                <p className="text-white/60 text-xs">{kt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY TYPES */}
      <section className="section-padding bg-white" aria-labelledby="keytypes-heading">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 id="keytypes-heading" className="text-3xl font-black text-brand-navy mb-3">Keys We Cut</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We cut an extensive range of keys using the latest cutting machines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTypes.map((kt) => (
              <div key={kt.name} className="card border border-gray-100 hover:border-brand-orange transition-colors">
                <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-orange mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-brand-navy mb-1">{kt.name}</h3>
                <p className="text-gray-600 text-sm">{kt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-brand-light">
        <div className="container-max max-w-4xl mx-auto prose-custom">
          <h2>Key Cutting in Ashton-in-Makerfield — Quick and Reliable</h2>
          <p>
            Getting a key cut is one of those jobs that takes five minutes and saves you a world of grief later. At Ashton Lock & Key,
            we use precision cutting machines and carry blanks for an enormous range of key types — Yale, Chubb, euro cylinder,
            high-security, padlocks, window locks, and more. If you bring us the original, we&apos;ll have a copy done while you wait.
          </p>

          <h2>Get a Spare Key — Before You Need It</h2>
          <p>
            One of the most common reasons people end up needing an <Link href="/emergency-locksmith-ashton-in-makerfield">emergency locksmith</Link> is
            that they had only one key and lost it. A spare key costs a few pounds. A lockout at midnight costs considerably more.
            We&apos;d suggest keeping at least two spare keys per lock — one with a trusted neighbour, one in a safe place at work.
          </p>

          <h2>High-Security Key Cutting in Ashton</h2>
          <p>
            Mul-T-Lock, Abloy, Banham — high-security keys with patented blanks can&apos;t just be cut on any machine. They
            require the right equipment and proper authorisation. We handle high-security key cutting correctly, which means
            your key security stays intact.
          </p>

          <h2>Key Cutting Prices</h2>
          <ul>
            <li><strong>Standard Yale / flat-blade key:</strong> From £3</li>
            <li><strong>Mortice / Chubb key:</strong> From £5</li>
            <li><strong>Euro cylinder key:</strong> From £6</li>
            <li><strong>High-security / patented key:</strong> From £15 (+ authorisation)</li>
            <li><strong>Padlock key:</strong> From £3</li>
          </ul>
          <p>
            Prices are per key. Cutting multiple keys at the same time? We can offer a discount.
            Car key replacement is a different job — see our <Link href="/car-key-replacement-wigan">car key replacement service in Wigan</Link> for that.
          </p>

          <h2>Thinking About Home Security While You&apos;re Here?</h2>
          <p>
            While getting a spare key cut is a smart first step, it&apos;s worth knowing whether your locks are actually
            up to scratch too. Our guide on{' '}
            <Link href="/blog/how-to-improve-home-security">how to improve home security on a budget</Link> covers the
            practical upgrades that make a real difference — including whether your cylinders are anti-snap rated. If you
            want to know what everything should cost,{' '}
            <Link href="/blog/how-much-does-a-locksmith-cost-uk">our 2025 locksmith price guide</Link> has transparent
            figures for every job we do.
          </p>
        </div>
      </section>

      <CTASection heading="Need Keys Cut in Ashton?" subtext="Call or WhatsApp us for same-day key cutting in Ashton-in-Makerfield." variant="orange" />

      <FAQSection faqs={faqs} heading="Key Cutting FAQs" />

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-black text-brand-navy mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link href="/emergency-locksmith-ashton-in-makerfield" className="card hover:-translate-y-0.5 transition-transform group">
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">Emergency Locksmith</h3>
              <p className="text-gray-600 text-sm">Locked out? 24/7 emergency lockout service in Ashton-in-Makerfield.</p>
            </Link>
            <Link href="/car-key-replacement-wigan" className="card hover:-translate-y-0.5 transition-transform group">
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">Car Key Replacement</h3>
              <p className="text-gray-600 text-sm">Lost car keys? We replace and programme car keys across Wigan.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
