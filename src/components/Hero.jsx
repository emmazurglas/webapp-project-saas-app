import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-neutral-950 dark:via-blue-950/20 dark:to-neutral-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-400/30 via-blue-500/10 to-transparent dark:from-blue-500/20 dark:via-blue-500/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-300/20 dark:bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full shadow-lg shadow-blue-500/10 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now available in beta
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
              Build products{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  faster
                </span>
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/50 to-indigo-500/50 -z-10"></span>
              </span>
              {' '}with your team
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed animate-fade-in-up animation-delay-200">
              CloudFlow is the modern platform for teams to collaborate, manage projects, and ship products. Simple, fast, and built for how you work.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
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
            <div className="pt-8 animate-fade-in-up animation-delay-400">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
                Trusted by teams at leading companies
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-60">
                {['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma'].map((company) => (
                  <span
                    key={company}
                    className="text-lg font-semibold text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - SVG Illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up animation-delay-200">
            <div className="relative w-full max-w-lg">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full"></div>
              
              {/* SVG Illustration */}
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative w-full h-auto drop-shadow-2xl"
              >
                {/* Background circles */}
                <circle cx="250" cy="250" r="200" fill="url(#grad1)" opacity="0.1" className="animate-float" />
                <circle cx="250" cy="250" r="150" fill="url(#grad2)" opacity="0.15" className="animate-float-delayed" />
                
                {/* Main dashboard/window */}
                <rect x="100" y="120" width="300" height="260" rx="16" fill="white" className="drop-shadow-2xl" />
                <rect x="100" y="120" width="300" height="260" rx="16" stroke="url(#grad3)" strokeWidth="2" />
                
                {/* Window header */}
                <rect x="100" y="120" width="300" height="50" rx="16" fill="url(#grad4)" />
                <circle cx="125" cy="145" r="5" fill="white" opacity="0.8" />
                <circle cx="145" cy="145" r="5" fill="white" opacity="0.8" />
                <circle cx="165" cy="145" r="5" fill="white" opacity="0.8" />
                
                {/* Content lines */}
                <rect x="130" y="200" width="240" height="12" rx="6" fill="url(#grad5)" opacity="0.3" />
                <rect x="130" y="225" width="180" height="12" rx="6" fill="url(#grad5)" opacity="0.2" />
                <rect x="130" y="250" width="200" height="12" rx="6" fill="url(#grad5)" opacity="0.25" />
                
                {/* Cards/Boxes */}
                <rect x="130" y="285" width="80" height="70" rx="8" fill="url(#grad6)" opacity="0.8" />
                <rect x="225" y="285" width="80" height="70" rx="8" fill="url(#grad7)" opacity="0.8" />
                <rect x="320" y="285" width="50" height="70" rx="8" fill="url(#grad8)" opacity="0.6" />
                
                {/* Floating elements */}
                <circle cx="80" cy="200" r="25" fill="url(#grad9)" opacity="0.6" className="animate-float" />
                <circle cx="420" cy="300" r="30" fill="url(#grad10)" opacity="0.5" className="animate-float-delayed" />
                <rect x="390" y="150" width="60" height="60" rx="12" fill="url(#grad11)" opacity="0.4" className="animate-float" />
                
                {/* Decorative dots */}
                <circle cx="150" cy="80" r="4" fill="#3b82f6" opacity="0.6" />
                <circle cx="180" cy="90" r="3" fill="#6366f1" opacity="0.5" />
                <circle cx="350" cy="420" r="5" fill="#3b82f6" opacity="0.6" />
                <circle cx="380" cy="410" r="3" fill="#6366f1" opacity="0.5" />
                
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="grad1" x1="250" y1="50" x2="250" y2="450">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="250" y1="100" x2="250" y2="400">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="100" y1="120" x2="400" y2="380">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <linearGradient id="grad4" x1="100" y1="120" x2="400" y2="170">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <linearGradient id="grad5" x1="130" y1="200" x2="370" y2="262">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <linearGradient id="grad6" x1="130" y1="285" x2="210" y2="355">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="grad7" x1="225" y1="285" x2="305" y2="355">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                  <linearGradient id="grad8" x1="320" y1="285" x2="370" y2="355">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="grad9" x1="55" y1="175" x2="105" y2="225">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="grad10" x1="390" y1="270" x2="450" y2="330">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                  <linearGradient id="grad11" x1="390" y1="150" x2="450" y2="210">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
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
