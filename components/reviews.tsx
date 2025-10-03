import { Card } from "./ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "This was an extremely well written book! Very engaging and suspenseful content! He had the ability to explore the psychology of serial killers and the dark side of human nature in a captivating way! His writing is clear and deliberate, painting images you wish you could unsee--yet you shouldn't look away because the details are everything! If you're fascinated by the psychology of serial killers, this book pulls you in and takes you further than it ever dares to go! 5 stars no doubt. A triumph!!",
    author: "Amazon Verified Purchase",
    rating: 5,
  },
  {
    quote:
      "This book kept me on the edge of my seat! Such a creative story line with many twist and turns, I highly recommend for anyone who loves a good mystery story!",
    author: "Amazon Verified Purchase",
    rating: 5,
  },
  {
    quote:
      "Terrence by Bill Gill is the kind of book that stays with you long after you finish. Dark, disturbing, and brilliantly written, it dives deep into the psychology of a killer while weaving a story that's both gripping and thought-provoking. From the chilling detail of Terrence's 'artwork' to the small-town Wisconsin backdrop, every scene feels vivid and real. Fans of true crime, psychological thrillers, and shows like Mindhunter will be hooked from page one. I couldn't put it down, and I highly recommend it to anyone looking for a smart, chilling, and unforgettable read. Easily one of the best books I've read this year.",
    author: "Amazon Verified Purchase",
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-balance">Critical Acclaim</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What readers and critics are saying about Bill Gill&apos;s work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed mb-4 text-foreground/90">&quot;{review.quote}&quot;</blockquote>
              <cite className="text-xs font-medium text-muted-foreground not-italic">— {review.author}</cite>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
