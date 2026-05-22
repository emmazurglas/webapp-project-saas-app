import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-32 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 opacity-20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
          <Sparkles className="h-4 w-4" />
          <span>Now in Beta - Join 10,000+ users</span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
          Transform Your Workflow with{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            CloudFlow
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
          The all-in-one platform that helps teams collaborate seamlessly, automate workflows, and achieve more in less time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 sm:w-auto">
            Start Free Trial
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 sm:w-auto">
            Watch Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
          <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">ACME</div>
          <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">TechCorp</div>
          <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">StartupHub</div>
          <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">CloudSync</div>
        </div>
      </div>
    </section>
  )
}
