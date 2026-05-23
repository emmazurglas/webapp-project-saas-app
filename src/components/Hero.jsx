import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-neutral-950 dark:via-emerald-950/20 dark:to-neutral-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-emerald-400/30 via-emerald-500/10 to-transparent dark:from-emerald-500/20 dark:via-emerald-500/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-300/20 dark:bg-emerald-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-300/20 dark:bg-teal-400/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full shadow-lg shadow-emerald-500/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now available in beta
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
            Build products{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                faster
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-emerald-500/50 to-teal-500/50 -z-10"></span>
            </span>
            {' '}with your team
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            CloudFlow is the modern platform for teams to collaborate, manage projects, and ship products. Simple, fast, and built for how you work.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105"
            >
              Start for free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all shadow-lg"
            >
              View demo
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-16 animate-fade-in-up animation-delay-400">
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-8">
              Trusted by teams at leading companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
              {['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma'].map((company) => (
                <span
                  key={company}
                  className="text-xl font-semibold text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600">
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
