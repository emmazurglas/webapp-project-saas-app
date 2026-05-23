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
    <section className="py-20 md:py-32 bg-neutral-50" id="testimonials">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-neutral-600">
            See what others are saying about CloudFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-neutral-200"
            >
              <p className="text-neutral-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-neutral-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-neutral-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white rounded-2xl border border-neutral-200">
            <p className="text-neutral-700">
              Ready to get started?
            </p>
            <a
              href="#"
              className="px-6 py-3 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Start for free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
