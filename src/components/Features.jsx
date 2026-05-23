import { Zap, Shield, Users, BarChart3, Clock, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning fast',
    description: 'Built on modern infrastructure for optimal performance and reliability.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    description: 'Enterprise-grade security with SOC 2 compliance and end-to-end encryption.'
  },
  {
    icon: Users,
    title: 'Real-time collaboration',
    description: 'Work together seamlessly with live cursors, comments, and presence.'
  },
  {
    icon: BarChart3,
    title: 'Powerful analytics',
    description: 'Understand your workflow with detailed insights and custom reports.'
  },
  {
    icon: Clock,
    title: 'Automation',
    description: 'Automate repetitive tasks and workflows to save time.'
  },
  {
    icon: Globe,
    title: 'Works everywhere',
    description: 'Access your projects from any device, anywhere in the world.'
  }
]

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50" id="features">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-lg text-neutral-600">
            A complete toolkit designed for modern teams. Simple, powerful, and easy to use.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="group">
                <div className="mb-4">
                  <Icon className="h-6 w-6 text-neutral-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
