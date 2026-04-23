import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  // ─── FIX: removed brand name — template adds it
  title: 'Locksmith Advice & Tips | Expert Guides for Wigan & Ashton',
  description: 'Expert locksmith advice from Ashton Lock & Key. Articles on home security, emergency lockouts, key cutting, car keys, and more.',
  alternates: {
    canonical: `${BUSINESS.url}/blog`,
  },
}

const posts = [
  {
    title: 'Auto Locksmith Ashton-in-Makerfield — What to Expect',
    excerpt: 'What does an auto locksmith actually do? Car lockouts, transponder programming, and how to choose a genuine specialist.',
    href: '/blog/auto-locksmith-ashton-in-makerfield',
    category: 'Auto Locksmith',
    color: 'bg-brand-orange/10 text-brand-orange',
    date: '2026-01-20',
    readTime: '6 min read',
  },
  {
    title: 'Lost Your Car Keys? Here\'s Exactly What to Do',
    excerpt: 'Step-by-step guide for UK drivers — from checking the obvious to AKL replacement. Don\'t call the dealer until you\'ve read this.',
    href: '/blog/lost-car-keys-what-to-do-uk',
    category: 'Car Keys',
    color: 'bg-purple-50 text-purple-700',
    date: '2026-01-20',
    readTime: '7 min read',
  },
  {
    title: 'Car Key Replacement Cost UK 2026',
    excerpt: 'Transparent pricing for every car key scenario — transponder keys, smart keys, all-keys-lost. Locksmith vs dealer comparison.',
    href: '/blog/car-key-replacement-cost-uk-2026',
    category: 'Pricing',
    color: 'bg-green-50 text-green-700',
    date: '2026-01-20',
    readTime: '5 min read',
  },
  {
    title: 'Transponder Key vs Smart Key — What\'s the Difference?',
    excerpt: 'Plain-language explainer on car key types — how they work, what makes them different, and what replacement involves.',
    href: '/blog/transponder-key-vs-smart-key-explained',
    category: 'Explainer',
    color: 'bg-blue-50 text-blue-700',
    date: '2026-01-20',
    readTime: '5 min read',
  },
  {
    title: 'Locked Keys in Car — Ashton & Wigan Guide',
    excerpt: 'Calm down. Don\'t break anything. Here\'s exactly what to do — and what to avoid — to get back in your car quickly.',
    href: '/blog/locked-keys-in-car-ashton-wigan',
    category: 'Emergency',
    color: 'bg-red-50 text-red-700',
    date: '2026-01-20',
    readTime: '4 min read',
  },
  {
    title: 'What to Do If You\'re Locked Out of Your House',
    excerpt: 'Don\'t panic. Here\'s a step-by-step guide to handling a home lockout safely and without wasting money.',
    href: '/blog/what-to-do-if-locked-out',
    category: 'Emergency',
    color: 'bg-red-50 text-red-700',
    date: '2024-11-01',
    readTime: '5 min read',
  },
  {
    title: 'How Much Does a Locksmith Cost in the UK? (2026 Guide)',
    excerpt: 'Transparent breakdown of locksmith pricing across the UK — so you know what\'s fair and what\'s a rip-off.',
    href: '/blog/how-much-does-a-locksmith-cost-uk',
    category: 'Pricing',
    color: 'bg-blue-50 text-blue-700',
    date: '2024-10-15',
    readTime: '7 min read',
  },
  {
    title: 'Car Key Replacement: The Complete UK Guide',
    excerpt: 'Lost or broken car keys? This guide covers everything — costs, options, and how to avoid overpaying at the dealer.',
    href: '/blog/car-key-replacement-guide',
    category: 'Car Keys',
    color: 'bg-purple-50 text-purple-700',
    date: '2024-09-20',
    readTime: '8 min read',
  },
  {
    title: 'How to Improve Your Home Security on a Budget',
    excerpt: 'Simple, practical steps to make your home significantly harder to break into — without spending a fortune.',
    href: '/blog/how-to-improve-home-security',
    category: 'Security',
    color: 'bg-green-50 text-green-700',
    date: '2024-08-10',
    readTime: '6 min read',
  },
  {
    title: 'How Long Should an Emergency Locksmith Take?',
    excerpt: 'What\'s a realistic response time? When should you be suspicious? Here\'s what to expect from an emergency locksmith.',
    href: '/blog/emergency-locksmith-response-time',
    category: 'Emergency',
    color: 'bg-orange-50 text-orange-700',
    date: '2024-07-22',
    readTime: '4 min read',
  },
]

export default function BlogPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', url: BUSINESS.url },
    { name: 'Blog', url: `${BUSINESS.url}/blog` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumb items={[{ label: 'Locksmith Advice & Tips' }]} />

      {/* HERO */}
      <section className="bg-brand-navy section-padding" aria-labelledby="blog-heading">
        <div className="container-max max-w-2xl">
          <h1 id="blog-heading" className="text-4xl md:text-5xl font-black text-white mb-4">
            Locksmith Advice <span className="text-brand-orange">&amp; Tips</span>
          </h1>
          <p className="text-xl text-white/70">
            Practical guides from your local Ashton-in-Makerfield locksmith — covering everything from emergency lockouts
            to home security and car keys.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="section-padding bg-white" aria-labelledby="posts-heading">
        <div className="container-max">
          <h2 id="posts-heading" className="sr-only">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.href} href={post.href} className="card group hover:-translate-y-1 transition-transform duration-200 block">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.color}`}>{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-brand-navy text-xl mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-gray-400" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                  <span className="text-brand-orange text-sm font-semibold flex items-center gap-1">
                    Read
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES STRIP — passes link equity from blog to service pages */}
      <section className="section-padding bg-brand-light" aria-labelledby="services-strip-heading">
        <div className="container-max max-w-3xl mx-auto text-center">
          <h2 id="services-strip-heading" className="text-2xl font-black text-brand-navy mb-2">
            Need a Locksmith Right Now?
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Our guides cover the theory — when you need immediate help, we&apos;re available 24/7 across Wigan and Ashton-in-Makerfield.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Emergency Locksmith Ashton-in-Makerfield', desc: '30-minute response, 24/7', href: '/emergency-locksmith-ashton-in-makerfield' },
              { title: 'Key Cutting Ashton', desc: 'All key types, while you wait', href: '/key-cutting-ashton' },
              { title: 'Car Key Replacement Wigan', desc: 'All makes — cheaper than dealers', href: '/car-key-replacement-wigan' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card hover:-translate-y-0.5 transition-transform group block text-center">
                <p className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">{s.title}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Serving{' '}
            <Link href="/locksmith-ashton-in-makerfield" className="text-brand-orange hover:underline font-medium">Ashton-in-Makerfield</Link>
            {', '}
            <Link href="/locksmith-wigan" className="text-brand-orange hover:underline font-medium">Wigan</Link>
            {', and '}
            <Link href="/locksmith-near-me" className="text-brand-orange hover:underline font-medium">surrounding areas</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
