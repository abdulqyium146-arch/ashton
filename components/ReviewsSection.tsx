import { BUSINESS } from '@/lib/constants'

const reviews = [
  {
    author: 'Sarah M.',
    location: 'Ashton-in-Makerfield',
    rating: 5,
    text: 'Absolutely brilliant service! I was locked out at 11pm and the locksmith arrived within 25 minutes. Friendly, professional, and the price was fair. Highly recommend.',
    date: '2024-11-15',
  },
  {
    author: 'Dave R.',
    location: 'Wigan',
    rating: 5,
    text: 'Lost my car keys on a Sunday and was dreading the cost. Ashton Lock & Key sorted me out quickly and for much less than I expected. Top lads.',
    date: '2024-10-22',
  },
  {
    author: 'Linda T.',
    location: 'Newton-le-Willows',
    rating: 5,
    text: 'Had new locks fitted after a break-in attempt. Felt so much safer knowing a proper local expert was doing the job. Couldn\'t fault the service.',
    date: '2024-09-08',
  },
  {
    author: 'James W.',
    location: 'Leigh',
    rating: 5,
    text: 'Fast, honest, and reliable. Called at 7am after my front door lock jammed and they were at my door within 20 minutes. Brilliant local business.',
    date: '2024-08-30',
  },
  {
    author: 'Emma K.',
    location: 'Golborne',
    rating: 5,
    text: 'Needed keys cut for a rental property — same-day service, no hassle. Will definitely use again. Really trustworthy and knows his stuff.',
    date: '2024-07-14',
  },
  {
    author: 'Mike B.',
    location: 'Ashton-in-Makerfield',
    rating: 5,
    text: 'Called about car key replacement and got honest advice rather than being upsold. Rare to find these days. Great local service.',
    date: '2024-06-20',
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
            {BUSINESS.aggregateRating.ratingValue}/5 from {BUSINESS.aggregateRating.reviewCount}+ reviews
          </div>
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-black text-brand-navy mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real reviews from real people in Ashton-in-Makerfield, Wigan, and surrounding areas.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-brand-light rounded-2xl p-6 hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-brand-navy text-lg" itemProp="author">{review.author}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {review.location}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.author.charAt(0)}
                  </div>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <blockquote className="mt-3 text-gray-700 text-sm leading-relaxed" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <time
                className="block mt-3 text-xs text-gray-400"
                dateTime={review.date}
                itemProp="datePublished"
              >
                {new Date(review.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </time>
            </article>
          ))}
        </div>

        {/* Aggregate */}
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
            <span className="text-white/70">from {BUSINESS.aggregateRating.reviewCount}+ verified reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
