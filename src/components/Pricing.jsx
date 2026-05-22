import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 5 team members',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Mobile app'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '79',
    description: 'For growing teams and businesses',
    features: [
      'Up to 25 team members',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Mobile app',
      'Custom integrations',
      'Advanced security'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'API access',
      'Mobile app',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'SLA guarantee'
    ],
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Choose the perfect plan for your needs. Always flexible to grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:shadow-xl ${
                plan.highlighted
                  ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white shadow-lg ring-2 ring-purple-500 dark:from-purple-900/20 dark:to-slate-800 dark:border-purple-400'
                  : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price === 'Custom' ? (
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">
                    Custom
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-slate-600 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                )}
              </div>

              {/* Features List */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-slate-600 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full rounded-lg px-6 py-3 font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                    : 'border-2 border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
