import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "CloudFlow has completely transformed how our team collaborates. We've seen a 40% increase in productivity since switching.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "The automation features saved us countless hours every week. It's like having an extra team member without the overhead.",
    author: "Michael Chen",
    role: "CTO, DataFlow Systems",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    quote: "Best investment we've made this year. The analytics dashboard gives us insights we never had before.",
    author: "Emily Rodriguez",
    role: "Product Manager, CloudSync",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    quote: "Security and compliance were our top concerns, and CloudFlow exceeded all our expectations. Highly recommended!",
    author: "David Kim",
    role: "CISO, SecureNet Corp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    quote: "The support team is incredible. They helped us migrate our entire infrastructure in just two weeks with zero downtime.",
    author: "Lisa Thompson",
    role: "VP Engineering, FastScale",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
  },
  {
    quote: "We tried several platforms before CloudFlow. None come close in terms of features, ease of use, and value.",
    author: "James Wilson",
    role: "Founder, StartupLab",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  }
]

export default function Testimonials() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-8" id="testimonials">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Loved by thousands of teams
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            See what our customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Quote Icon */}
              <Quote className="mb-4 h-8 w-8 text-purple-500 opacity-50" />

              {/* Quote Text */}
              <p className="mb-6 text-slate-700 dark:text-slate-300">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full border-2 border-purple-200 dark:border-purple-700"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-purple-900/20 dark:to-pink-900/20"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center shadow-xl sm:p-12">
          <h3 className="mb-4 text-3xl font-bold text-white">
            Ready to join thousands of happy customers?
          </h3>
          <p className="mb-8 text-lg text-purple-100">
            Start your free 14-day trial today. No credit card required.
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-purple-600 shadow-lg transition-all hover:bg-purple-50 hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}
