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
    title: 'What to Do If You\'re Locked Out of Your House',
    excerpt: 'Don\'t panic. Here\'s a step-by-step guide to handling a home lockout safely and without wasting money.',
    href: '/blog/what-to-do-if-locked-out',
    category: 'Emergency',
    color: 'bg-red-50 text-red-700',
    date: '2024-11-01',
    readTime: '5 min read',
  },
  {
    title: 'How Much Does a Locksmith Cost in the UK? (2025 Guide)',
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
    </>
  )
}
