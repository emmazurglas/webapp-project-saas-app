const testimonials = [
  {
    quote: "CloudFlow has transformed how our team works. We ship features twice as fast now.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "Vercel"
  },
  {
    quote: "The simplicity is what sold us. No bloat, just the features we actually need.",
    author: "Marcus Johnson",
    role: "Product Manager",
    company: "Linear"
  },
  {
    quote: "Finally, a tool that doesn't get in our way. It just works.",
    author: "Emily Park",
    role: "Founder",
    company: "Raycast"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-midnight-50 dark:bg-midnight-900" id="testimonials">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight-900 dark:text-white tracking-tight mb-4">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-midnight-600 dark:text-midnight-300">
            See what others are saying about CloudFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-midnight-800 rounded-2xl p-8 border border-midnight-200 dark:border-midnight-700 hover:border-ocean-500 dark:hover:border-ocean-500 transition-all hover:shadow-ocean"
            >
              <p className="text-midnight-700 dark:text-midnight-200 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-midnight-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-midnight-500 dark:text-midnight-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-ocean-50 to-ocean-100 dark:from-midnight-800 dark:to-midnight-800 rounded-2xl border border-ocean-200 dark:border-ocean-900">
            <p className="text-lg font-semibold text-midnight-900 dark:text-white">
              Ready to get started?
            </p>
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-ocean rounded-xl hover:shadow-ocean transition-all hover:scale-105"
            >
              Start for free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
