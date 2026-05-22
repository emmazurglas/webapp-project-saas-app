import { Zap, Shield, Users, BarChart3, Clock, Globe, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our globally distributed edge infrastructure.',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'from-amber-50 to-orange-50'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and advanced security protocols.',
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'from-emerald-50 to-teal-50'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration with multiplayer cursors, comments, and live presence.',
    gradient: 'from-blue-500 to-cyan-600',
    bg: 'from-blue-50 to-cyan-50'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Beautiful dashboards with AI-powered insights and custom reporting.',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'from-violet-50 to-purple-50'
  },
  {
    icon: Clock,
    title: 'Smart Automation',
    description: 'Automate any workflow with our visual builder and AI assistant.',
    gradient: 'from-rose-500 to-pink-600',
    bg: 'from-rose-50 to-pink-50'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: '99.99% uptime SLA with infrastructure deployed across 50+ regions.',
    gradient: 'from-indigo-500 to-violet-600',
    bg: 'from-indigo-50 to-violet-50'
  }
]

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Powerful Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              ship faster
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A complete toolkit designed for modern teams. Build, collaborate, and scale with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-300/80 transition-all duration-500 overflow-hidden">
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      {feature.title}
                      <ArrowUpRight className="h-5 w-5 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            Explore all features
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
