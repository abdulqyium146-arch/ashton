import { BUSINESS } from '@/lib/constants'

interface CTASectionProps {
  heading?: string
  subtext?: string
  variant?: 'orange' | 'navy' | 'gradient'
}

const WA_SVG = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function CTASection({
  heading = 'Need a Locksmith Right Now?',
  subtext = 'We answer every call personally — no call centres, no hold music. Tell us where you are and we\'ll be on our way.',
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
      <div className="container-max">
        <div className="max-w-3xl mx-auto">

          {/* Social proof row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6">
            <div className="flex items-center gap-1.5">
              {/* 5 stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white font-bold text-sm ml-1">4.9</span>
            </div>
            <span className="text-white/70 text-sm">127 reviews on Google</span>
            <span className="hidden sm:block text-white/30">·</span>
            <span className="flex items-center gap-1.5 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              Available right now — 30-min response
            </span>
          </div>

          {/* Heading */}
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-black text-white mb-3 text-center leading-tight">
            {heading}
          </h2>
          <p className="text-white/80 text-lg mb-6 text-center">
            {subtext}
          </p>

          {/* Phone number — big, prominent, standalone */}
          <div className="text-center mb-6">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-block text-4xl md:text-5xl font-black text-white tracking-tight hover:text-yellow-300 transition-colors"
              aria-label={`Call us now at ${BUSINESS.phoneDisplay}`}
            >
              {BUSINESS.phoneDisplay}
            </a>
            <p className="text-white/60 text-xs mt-1 uppercase tracking-widest">Tap to call — we answer 24/7</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-navy font-black text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[220px]"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%2C%20I%20need%20a%20locksmith.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[220px]"
              aria-label="Message us on WhatsApp"
            >
              {WA_SVG}
              WhatsApp Us
            </a>
          </div>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {['No call-out fee', 'Fixed prices quoted upfront', 'Fully insured', 'Speak directly to your locksmith'].map((trust) => (
              <span key={trust} className="flex items-center gap-1.5 text-white/70 text-xs">
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {trust}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
