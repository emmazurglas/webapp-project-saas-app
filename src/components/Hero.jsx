import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm text-neutral-600 bg-neutral-100 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Now available in beta
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
            Build products faster with your team
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10 max-w-2xl">
            CloudFlow is the modern platform for teams to collaborate, manage projects, and ship products. Simple, fast, and built for how you work.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Start for free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              View demo
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-10 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 mb-6">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma'].map((company) => (
                <span
                  key={company}
                  className="text-lg font-medium text-neutral-400"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
