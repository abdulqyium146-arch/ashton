import { BUSINESS } from '@/lib/constants'

const reviews = [
  {
    author: 'EZ M',
    badge: 'Local Guide',
    rating: 5,
    text: 'Friendly & professional guy, very reasonable price accessories & services.',
    date: '2026-04-20',
    service: 'General',
  },
  {
    author: 'Ruby Smith',
    badge: null,
    rating: 5,
    text: 'Just dropped in to get a new fob sorted as I\'m selling my old car & this guy was so lovely, got it done in like 10 mins and super great price. 10/10 Would recommend.',
    date: '2026-02-20',
    service: 'Car Key Fob',
  },
  {
    author: 'Gareth Colquitt',
    badge: null,
    rating: 5,
    text: 'Took my faulty car key fob to Ashton Lock & Key. Sorted in under 10 minutes. This guy is a wizard in his trade. Excellent service and well priced.',
    date: '2026-01-20',
    service: 'Car Key Fob',
  },
  {
    author: 'Chris The Length',
    badge: 'Local Guide',
    rating: 5,
    text: 'Superb, my go to key guy, realistically priced, very personable, and knowledgeable. Highly recommended.',
    date: '2025-12-20',
    service: 'Key Cutting',
  },
  {
    author: 'Ian White',
    badge: null,
    rating: 5,
    text: '10 minutes after putting down the phone, Neal had arrived at my house. Repair done to my front door lock. No fuss, happy with the price and service.',
    date: '2025-06-20',
    service: 'Lock Repair',
  },
  {
    author: 'Antony Atack',
    badge: null,
    rating: 5,
    text: 'Professional fast service. Enquired day 1. Job all sorted day 2. Very happy.',
    date: '2025-07-20',
    service: 'General',
  },
  {
    author: 'Alex Smith',
    badge: 'Local Guide',
    rating: 5,
    text: 'Brilliant experience. Had a spare set of keys cut for my car elsewhere and had issues. Neil helped test and try to fix that, and when it wasn\'t possible he cut another one and kept working through until we could get it working. Really appreciate his patience and a good price too.',
    date: '2025-04-20',
    service: 'Car Key Cutting',
  },
  {
    author: 'Cecilia Frodsham',
    badge: null,
    rating: 5,
    text: 'I rang first thing as our front door wouldn\'t open and within 30 minutes, the gentleman arrived and was able to fix the problem. Excellent.',
    date: '2025-04-20',
    service: 'Emergency Lockout',
  },
  {
    author: 'thomas berry',
    badge: null,
    rating: 5,
    text: 'Best lock smith in the uk honest and reliable been using neil for 25yrs never I won\'t use no one else.',
    date: '2025-04-20',
    service: 'General',
  },
  {
    author: 'Bone Head',
    badge: 'Local Guide',
    rating: 5,
    text: 'Needed a 2nd key for my motorbike, sorted in superquick time, at a good price. Highly recommended.',
    date: '2025-04-20',
    service: 'Key Cutting',
  },
  {
    author: 'Craig Storey',
    badge: null,
    rating: 5,
    text: 'Brilliant service, really good quality locks at a decent price and came out within the hour.',
    date: '2025-04-20',
    service: 'Lock Fitting',
  },
  {
    author: 'Petr Kretschmer',
    badge: null,
    rating: 5,
    text: 'Amazing service. Fixed my drowned electric car key and asked extremely fair price. Totally recommending to all.',
    date: '2025-04-20',
    service: 'Car Key Repair',
  },
  {
    author: 'David',
    badge: null,
    rating: 5,
    text: 'Came out immediately to replace a broken uPVC latch on a Saturday. Nice bloke, professional, knew his stuff, replaced the lock, adjusted the door (which had caused the lock to fail in the first place). Very pleased with the job.',
    date: '2025-04-20',
    service: 'Lock Replacement',
  },
  {
    author: 'Brett Fisher',
    badge: null,
    rating: 5,
    text: 'Just came with a snapped car key — new key cut in no time, cheap also. Great shop, always helped with any problem.',
    date: '2025-04-20',
    service: 'Key Cutting',
  },
  {
    author: 'Ian Dixon',
    badge: 'Local Guide',
    rating: 5,
    text: 'Super customer service and advice.',
    date: '2024-04-20',
    service: 'General',
  },
  {
    author: 'Mary Price',
    badge: 'Local Guide',
    rating: 5,
    text: 'Value for money service, keys working really well.',
    date: '2024-04-20',
    service: 'Key Cutting',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

export default function ReviewsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="reviews-heading">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {BUSINESS.aggregateRating.ratingValue} on Google
          </div>
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real Google reviews from customers in Ashton-in-Makerfield, Wigan, and surrounding areas.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-brand-light rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <meta itemProp="name" content={review.text.split(' ').slice(0, 7).join(' ').replace(/[.,!?'"]+$/, '')} />
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-brand-navy text-base leading-tight" itemProp="author" itemScope itemType="https://schema.org/Person"><span itemProp="name">{review.author}</span></p>
                    {review.badge && (
                      <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">{review.badge}</span>
                    )}
                  </div>
                  <p className="text-xs text-brand-orange font-medium mt-0.5">{review.service}</p>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <div
                    className="w-9 h-9 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-sm"
                    aria-hidden="true"
                  >
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <blockquote className="mt-3 text-gray-700 text-sm leading-relaxed flex-1" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200/60">
                <time
                  className="text-xs text-gray-400"
                  dateTime={review.date}
                  itemProp="datePublished"
                >
                  {new Date(review.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                </time>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <GoogleIcon />
                  <span>Google</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Aggregate bar */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-navy text-white px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-black">{BUSINESS.aggregateRating.ratingValue}</span>
            <span className="text-white/70">from {BUSINESS.aggregateRating.reviewCount}+ verified Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
