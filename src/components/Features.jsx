import { Zap, Shield, Users, BarChart3, Clock, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized infrastructure and edge computing.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to keep your data safe and compliant.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools that make working together effortless and productive.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights with powerful analytics and customizable dashboards.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy globally with 99.99% uptime SLA and infrastructure in 50+ regions.',
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function Features() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-8" id="features">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Powerful features to help your team work smarter, not harder.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} p-2.5 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-purple-900/20 dark:to-pink-900/20"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
