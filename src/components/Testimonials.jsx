import { Star, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote: "CloudFlow has completely transformed how our team collaborates. We've seen a 40% increase in productivity since switching.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5
  },
  {
    quote: "The automation features saved us countless hours every week. It's like having an extra team member without the overhead.",
    author: "Michael Chen",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5
  },
  {
    quote: "Best investment we've made this year. The analytics dashboard gives us insights we never had before.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "CloudSync",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5
  },
  {
    quote: "Security and compliance were our top concerns, and CloudFlow exceeded all our expectations. Highly recommended!",
    author: "David Kim",
    role: "CISO",
    company: "SecureNet Corp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5
  },
  {
    quote: "The support team is incredible. They helped us migrate our entire infrastructure in just two weeks with zero downtime.",
    author: "Lisa Thompson",
    role: "VP Engineering",
    company: "FastScale",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    rating: 5
  },
  {
    quote: "We tried several platforms before CloudFlow. None come close in terms of features, ease of use, and value.",
    author: "James Wilson",
    role: "Founder",
    company: "StartupLab",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            <Star className="h-4 w-4 fill-current" />
            Customer Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              50,000+ teams
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Join thousands of companies that trust CloudFlow to power their workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-0.5"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-3xl blur-xl opacity-50" />
          <div className="relative rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-12 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to transform your workflow?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join 50,000+ teams already using CloudFlow. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-violet-50 transition-all hover:scale-105 shadow-xl">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
