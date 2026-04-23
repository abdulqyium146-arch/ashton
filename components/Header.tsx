'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { NAV_LOCKSMITH, NAV_AUTO, NAV_AREAS, type MegaColumn, type NavLink } from '@/lib/nav'

// ─── Icon primitives ─────────────────────────────────────────────────────────

function ChevronDown({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Desktop: standard single-column dropdown ────────────────────────────────

function SimpleDropdown({ items }: { items: readonly NavLink[] }) {
  return (
    <div className="absolute left-0 top-full pt-1.5 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-150 z-50">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col px-4 py-3 hover:bg-brand-light transition-colors first:pt-3.5 last:pb-3.5 group/item border-b border-gray-50 last:border-0"
          >
            <span className="text-sm font-semibold text-gray-800 group-hover/item:text-brand-orange transition-colors">
              {item.label}
            </span>
            {item.desc && (
              <span className="text-xs text-gray-500 mt-0.5">{item.desc}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Desktop: two-column mega dropdown ───────────────────────────────────────

function MegaDropdown({ columns, pillar }: { columns: readonly MegaColumn[]; pillar: string }) {
  return (
    <div className="absolute left-0 top-full pt-1.5 w-[580px] opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-150 z-50">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-gray-100">
          {columns.map((col) => (
            <div key={col.heading} className="p-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-3 pt-1">
                {col.heading}
              </p>
              <ul>
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-brand-light transition-colors group/item"
                    >
                      <span className="text-sm font-semibold text-gray-800 group-hover/item:text-brand-orange transition-colors leading-snug">
                        {item.label}
                      </span>
                      {item.desc && (
                        <span className="text-xs text-gray-500 mt-0.5">{item.desc}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 bg-brand-light px-5 py-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">All vehicle locksmith services — Ashton-in-Makerfield &amp; Wigan</span>
          <Link
            href={pillar}
            className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1 flex-shrink-0 ml-4"
          >
            View all 12 services
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Mobile: accordion section ───────────────────────────────────────────────

function MobileSection({
  label,
  pillar,
  sectionKey,
  expanded,
  onToggle,
  onClose,
  children,
}: {
  label: string
  pillar: string
  sectionKey: string
  expanded: string | null
  onToggle: (key: string) => void
  onClose: () => void
  children: React.ReactNode
}) {
  const isOpen = expanded === sectionKey
  return (
    <div className="border-b border-gray-100">
      <div className="flex items-stretch">
        <Link
          href={pillar}
          onClick={onClose}
          className="flex-1 py-3.5 pl-4 pr-2 text-sm font-semibold text-gray-800 hover:text-brand-orange transition-colors"
        >
          {label}
        </Link>
        <button
          onClick={() => onToggle(sectionKey)}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${label}`}
          className="px-4 text-gray-400 hover:text-brand-orange transition-colors"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className="bg-gray-50 pb-2">
          {children}
        </div>
      )}
    </div>
  )
}

// ─── Main Header ─────────────────────────────────────────────────────────────

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection = (key: string) => setExpanded(prev => prev === key ? null : key)
  const closeMobile = () => { setMobileOpen(false); setExpanded(null) }

  // Flatten auto columns for mobile list
  const mobileAutoItems = NAV_AUTO.columns.flatMap(col => col.items)

  return (
    <>
      {/* ─── Utility bar — phone number on every page load = NAP signal */}
      <div className="bg-brand-navy text-white text-sm py-2 px-4">
        <div className="container-max flex items-center justify-between">
          <span className="flex items-center gap-2 text-white/80">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
            Available 24/7 — Fast 30-Minute Response
          </span>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="font-bold text-brand-orange hover:text-orange-300 transition-colors"
            aria-label={`Call us at ${BUSINESS.phoneDisplay}`}
          >
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* ─── Main navigation */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        role="banner"
      >
        <nav
          className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo — also passes link equity to homepage on every page */}
          <Link href="/" aria-label={`${BUSINESS.name} — Home`} className="flex-shrink-0">
            <img
              src="/images/ashton_locksmith_logo.svg"
              alt="Ashton Lock & Key — professional locksmith in Ashton-in-Makerfield"
              width={176}
              height={88}
              className="h-11 w-auto"
              loading="eager"
            />
          </Link>

          {/* ─── Desktop Navigation ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-0.5" role="menubar">

            {/* Pillar 1: Locksmith (residential) */}
            <div className="relative group">
              <Link
                href={NAV_LOCKSMITH.pillar}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-orange hover:bg-brand-light transition-all"
                role="menuitem"
              >
                {NAV_LOCKSMITH.trigger}
                <ChevronDown />
              </Link>
              <SimpleDropdown items={NAV_LOCKSMITH.items} />
            </div>

            {/* Pillar 2: Auto Locksmith — mega dropdown */}
            <div className="relative group">
              <Link
                href={NAV_AUTO.pillar}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-orange hover:bg-brand-light transition-all"
                role="menuitem"
              >
                {NAV_AUTO.trigger}
                <ChevronDown />
              </Link>
              <MegaDropdown columns={NAV_AUTO.columns} pillar={NAV_AUTO.pillar} />
            </div>

            {/* Geo cluster */}
            <div className="relative group">
              <Link
                href={NAV_AREAS.pillar}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-orange hover:bg-brand-light transition-all"
                role="menuitem"
              >
                {NAV_AREAS.trigger}
                <ChevronDown />
              </Link>
              <SimpleDropdown items={NAV_AREAS.items} />
            </div>

            {/* Editorial hub */}
            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-orange hover:bg-brand-light transition-all"
              role="menuitem"
            >
              Locksmith Advice
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-orange hover:bg-brand-light transition-all"
              role="menuitem"
            >
              Contact
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <PhoneIcon />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* ─── Mobile Menu ────────────────────────────────────────────────── */}
        {mobileOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100">

            {/* Residential locksmith accordion */}
            <MobileSection
              label="Locksmith Ashton-in-Makerfield"
              pillar={NAV_LOCKSMITH.pillar}
              sectionKey="locksmith"
              expanded={expanded}
              onToggle={toggleSection}
              onClose={closeMobile}
            >
              {NAV_LOCKSMITH.items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-2.5 pl-8 pr-4 text-sm text-gray-700 hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </MobileSection>

            {/* Auto locksmith accordion */}
            <MobileSection
              label="Auto Locksmith Ashton"
              pillar={NAV_AUTO.pillar}
              sectionKey="auto"
              expanded={expanded}
              onToggle={toggleSection}
              onClose={closeMobile}
            >
              {/* Show section headings in mobile too */}
              {NAV_AUTO.columns.map(col => (
                <div key={col.heading}>
                  <p className="pl-8 pr-4 pt-3 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {col.heading}
                  </p>
                  {col.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      className="block py-2.5 pl-8 pr-4 text-sm text-gray-700 hover:text-brand-orange transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            {/* Areas accordion */}
            <MobileSection
              label="Areas We Cover"
              pillar={NAV_AREAS.pillar}
              sectionKey="areas"
              expanded={expanded}
              onToggle={toggleSection}
              onClose={closeMobile}
            >
              {NAV_AREAS.items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-2.5 pl-8 pr-4 text-sm text-gray-700 hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </MobileSection>

            {/* Standalone links */}
            <div className="border-b border-gray-100 px-4">
              <Link
                href="/blog"
                onClick={closeMobile}
                className="block py-3.5 text-sm font-semibold text-gray-800 hover:text-brand-orange transition-colors"
              >
                Locksmith Advice &amp; Guides
              </Link>
            </div>
            <div className="border-b border-gray-100 px-4">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block py-3.5 text-sm font-semibold text-gray-800 hover:text-brand-orange transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="px-4 pt-4 pb-5 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-primary justify-center"
              >
                <PhoneIcon />
                Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-call justify-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
