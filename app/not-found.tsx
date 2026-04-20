import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Page Not Found | Ashton Lock & Key',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="section-padding bg-brand-light min-h-[60vh] flex items-center">
      <div className="container-max text-center max-w-lg mx-auto">
        <div className="w-20 h-20 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
        <h1 className="text-6xl font-black text-brand-navy mb-3">404</h1>
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          This page doesn&apos;t exist. But if you need a locksmith in Ashton-in-Makerfield or Wigan,
          you&apos;re in the right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn-secondary">Call {BUSINESS.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}
