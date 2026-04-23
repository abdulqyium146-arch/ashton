import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import {
  FOOTER_RESIDENTIAL,
  FOOTER_AUTO,
  FOOTER_AREAS,
  FOOTER_GUIDES,
  type NavLink,
} from '@/lib/nav'

// ─── Shared sub-components ───────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
      {children}
    </h3>
  )
}

function FooterLinkList({ items }: { items: readonly NavLink[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex items-start gap-2 text-gray-400 hover:text-brand-orange transition-colors text-sm leading-snug group"
          >
            <svg
              className="w-3 h-3 text-brand-orange mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="group-hover:underline underline-offset-2">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">

      {/* ─── Main columns ─────────────────────────────────────────────────── */}
      <div className="section-padding">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10">

          {/* Col 1 — Brand + Contact ──────────────────────────────────────── */}
          <div className="sm:col-span-2 xl:col-span-1">
            <div className="mb-4">
              <img
                src="/images/ashton_locksmith_logo.svg"
                alt="Ashton Lock & Key — professional locksmith in Ashton-in-Makerfield"
                width={220}
                height={110}
                className="h-14 w-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted local locksmith in Ashton-in-Makerfield. Emergency lockouts, key cutting, and
              full auto locksmith service. Available 24/7.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Available Now — 24/7 Service
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Call us: ${BUSINESS.phoneDisplay}`}
                >
                  <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call 24/7</p>
                    <p className="text-white font-bold group-hover:text-brand-orange transition-colors text-sm">
                      {BUSINESS.phoneDisplay}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="text-white font-bold group-hover:text-green-400 transition-colors text-sm">Message Us</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <address className="not-italic text-sm">
                    <p className="text-white font-medium">2, Market Approach, 1 Gerard St</p>
                    <p className="text-gray-400 text-xs">Ashton-in-Makerfield, Wigan WN4 9AL</p>
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 2 — Locksmith Services (residential cluster) ─────────────── */}
          <div>
            <FooterHeading>Locksmith Services</FooterHeading>
            <FooterLinkList items={FOOTER_RESIDENTIAL} />
          </div>

          {/* Col 3 — Auto Locksmith (vehicle cluster) ────────────────────── */}
          <div>
            <FooterHeading>Auto Locksmith</FooterHeading>
            <FooterLinkList items={FOOTER_AUTO} />
            <Link
              href="/auto-locksmith-ashton-in-makerfield"
              className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-brand-orange hover:underline"
            >
              All 12 auto services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Col 4 — Areas We Cover (geo cluster) ───────────────────────── */}
          <div>
            <FooterHeading>Areas We Cover</FooterHeading>
            <ul className="space-y-2">
              {FOOTER_AREAS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-2 text-gray-400 hover:text-brand-orange transition-colors text-sm group"
                  >
                    <svg
                      className="w-3 h-3 text-brand-orange mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:underline underline-offset-2">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Locksmith Guides (editorial cluster) ────────────────── */}
          <div>
            <FooterHeading>Locksmith Guides</FooterHeading>
            <ul className="space-y-2">
              {FOOTER_GUIDES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-2 text-gray-400 hover:text-brand-orange transition-colors text-sm group"
                  >
                    <svg
                      className="w-3 h-3 text-brand-orange mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    <span className="group-hover:underline underline-offset-2 leading-snug">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-brand-orange hover:underline"
            >
              All locksmith guides
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Trusted Partners ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10 py-6">
        <div className="container-max">
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Trusted Partners</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="flex items-start gap-3">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" aria-hidden="true" />
              <p className="text-gray-500 text-xs leading-relaxed">
                For auto locksmith services in the Stockport and SK postcode area, we refer customers to{' '}
                <a
                  href="https://carkeysinstockport.co.uk/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 hover:text-brand-orange transition-colors underline underline-offset-2"
                  aria-label="Car Keys in Stockport — automotive locksmith specialist covering Stockport and SK areas (opens in new tab)"
                >
                  Car Keys in Stockport
                </a>
                {' '}— an automotive locksmith specialist covering Stockport, Cheadle, and surrounding SK areas.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" aria-hidden="true" />
              <p className="text-gray-500 text-xs leading-relaxed">
                For mobile auto locksmith cover across the wider North West, we recommend{' '}
                <a
                  href="https://mobileautolocksmiths.co.uk/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 hover:text-brand-orange transition-colors underline underline-offset-2"
                  aria-label="Excalibur's Mobile Locksmiths — mobile auto locksmith covering the North West 24/7 (opens in new tab)"
                >
                  Excalibur&apos;s Mobile Locksmiths
                </a>
                {' '}— Excalibur&apos;s mobile locksmiths come to you anywhere across the North West, 24 hours a day, always cheaper than the main dealer.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ─── Bottom bar ──────────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 lg:px-8 gap-3">
          <p className="text-gray-500 text-sm">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/blog" className="hover:text-brand-orange transition-colors">Guides</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <span className="text-gray-600">Official website:</span>
              <a
                href="https://ashtonlockandkey.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
                aria-label="Ashton Lock and Key — official .com website (opens in new tab)"
              >
                ashtonlockandkey.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
