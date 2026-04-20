import { BUSINESS } from '@/lib/constants'

interface CTASectionProps {
  heading?: string
  subtext?: string
  variant?: 'orange' | 'navy' | 'gradient'
}

export default function CTASection({
  heading = 'Locked Out? Need a Locksmith Fast?',
  subtext = 'Don\'t panic — Ashton Lock & Key is available 24/7. We aim to reach you within 30 minutes anywhere in Ashton-in-Makerfield and the Wigan area.',
  variant = 'orange',
}: CTASectionProps) {
  const bgClass =
    variant === 'orange'
      ? 'bg-brand-orange'
      : variant === 'navy'
      ? 'bg-brand-navy'
      : 'bg-gradient-to-r from-brand-navy to-brand-blue'

  return (
    <section className={`${bgClass} section-padding`} aria-labelledby="cta-heading">
      <div className="container-max text-center">
        <div className="max-w-2xl mx-auto">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Available Now — 24/7 Emergency Service
          </div>

          <h2 id="cta-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-navy font-black text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              aria-label={`Call us now at ${BUSINESS.phoneDisplay}`}
            >
              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              aria-label="WhatsApp us"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <p className="mt-6 text-white/60 text-sm">
            No call-out fee · No VAT surprises · Fully insured
          </p>
        </div>
      </div>
    </section>
  )
}
