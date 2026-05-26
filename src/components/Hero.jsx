import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ocean Blue Mesh Background */}
      <div className="absolute inset-0 -z-10">
        {/* Mesh gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-ocean-50/50 to-white dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-950" />
        
        {/* Animated ocean gradient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-ocean-400/30 via-ocean-500/15 to-transparent dark:from-ocean-500/20 dark:via-ocean-600/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-ocean-300/25 dark:bg-ocean-400/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-ocean-200/30 dark:bg-ocean-500/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-ocean-700 dark:text-ocean-300 bg-ocean-50 dark:bg-ocean-500/10 border border-ocean-200 dark:border-ocean-500/20 rounded-full shadow-lg shadow-ocean-500/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-500"></span>
            </span>
            Now available in beta
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-midnight-900 dark:text-white tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
            Build products{' '}
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text">
                faster
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-ocean opacity-50 -z-10"></span>
            </span>
            {' '}with your team
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-midnight-600 dark:text-midnight-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            CloudFlow is the modern platform for teams to collaborate to ship products fast
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-ocean hover:bg-gradient-to-r hover:from-ocean-600 hover:to-ocean-800 rounded-xl transition-all shadow-ocean-lg hover:shadow-glow-lg hover:scale-105"
            >
              Start for free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-midnight-700 dark:text-midnight-200 bg-white dark:bg-midnight-800 border border-midnight-200 dark:border-midnight-700 rounded-xl hover:bg-midnight-50 dark:hover:bg-midnight-700 hover:border-midnight-300 dark:hover:border-midnight-600 transition-all shadow-lg"
            >
              View demo
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-16 animate-fade-in-up animation-delay-400">
            <p className="text-sm text-midnight-500 dark:text-midnight-400 mb-8">
              Trusted by teams at leading companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
              {['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma'].map((company) => (
                <span
                  key={company}
                  className="text-xl font-semibold text-midnight-400 dark:text-midnight-600 hover:text-midnight-600 dark:hover:text-midnight-400 transition-colors"
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
        <div className="flex flex-col items-center gap-2 text-midnight-400 dark:text-midnight-600">
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
