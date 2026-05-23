import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-neutral-950" />
        {/* Green glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent dark:from-emerald-500/10 dark:via-emerald-500/5 blur-3xl" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now available in beta
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Build products{' '}
            <span className="text-emerald-500">faster</span>{' '}
            with your team
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 max-w-2xl">
            CloudFlow is the modern platform for teams to collaborate, manage projects, and ship products. Simple, fast, and built for how you work.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Start for free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              View demo
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma'].map((company) => (
                <span
                  key={company}
                  className="text-lg font-medium text-neutral-400 dark:text-neutral-600"
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
