import { ArrowRight, Sparkles, Play, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-white to-white" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E879F9_0%,#7C3AED_50%,#E879F9_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 backdrop-blur-3xl gap-2">
                <Sparkles className="h-4 w-4 text-violet-600" />
                <span>Announcing our $20M Series A</span>
                <ArrowRight className="h-4 w-4 text-violet-600" />
              </span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
            The Modern Way to
            <span className="relative mx-3">
              <span className="relative z-10 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                Build & Ship
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-violet-200 to-fuchsia-200 -skew-x-6 -z-10 rounded" />
            </span>
            Products
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
            CloudFlow is the all-in-one platform that empowers teams to collaborate, 
            automate workflows, and ship 10x faster. Trusted by 50,000+ teams worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/30">
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Start Building Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-full border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-violet-100 group-hover:to-fuchsia-100 transition-colors">
                <Play className="h-4 w-4 fill-current text-slate-700 group-hover:text-violet-600 transition-colors ml-0.5" />
              </span>
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500 mb-20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Social Proof - Company Logos */}
          <div className="border-t border-slate-200/80 pt-12">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma'].map((company) => (
                <div
                  key={company}
                  className="text-2xl font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
