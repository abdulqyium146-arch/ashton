'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  heading?: string
}

export default function FAQSection({ faqs, heading = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-brand-light" aria-labelledby="faq-heading">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Got questions? We&apos;ve got answers. Still unsure? Just give us a call.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-brand-navy pr-4">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-50"
                >
                  <div className="pt-4">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
