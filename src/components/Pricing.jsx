import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Free',
    description: 'For individuals and small projects',
    price: '0',
    features: [
      'Up to 3 projects',
      '1 GB storage',
      'Basic analytics',
      'Community support'
    ],
    cta: 'Get started',
    highlighted: false
  },
  {
    name: 'Pro',
    description: 'For growing teams',
    price: '12',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team permissions'
    ],
    cta: 'Start free trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'SSO & SAML',
      'Dedicated support',
      'Custom contracts',
      'SLA guarantee'
    ],
    cta: 'Contact sales',
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-midnight-950" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight-900 dark:text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-midnight-600 dark:text-midnight-300">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-ocean text-white ring-2 ring-ocean-500 ring-offset-4 ring-offset-white dark:ring-offset-midnight-950 shadow-ocean-lg scale-105'
                  : 'bg-white dark:bg-midnight-900 border border-midnight-200 dark:border-midnight-800 hover:border-ocean-500 dark:hover:border-ocean-500 hover:shadow-ocean'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="px-4 py-1 text-xs font-semibold text-ocean-900 bg-ocean-100 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-1 ${
                  plan.highlighted ? 'text-white' : 'text-midnight-900 dark:text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-ocean-100' : 'text-midnight-600 dark:text-midnight-300'
                }`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price === 'Custom' ? (
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-midnight-900 dark:text-white'
                  }`}>Custom</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-midnight-900 dark:text-white'
                    }`}>${plan.price}</span>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-ocean-100' : 'text-midnight-500 dark:text-midnight-400'
                    }`}>/month</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-ocean-100' : 'text-ocean-500'
                    }`} strokeWidth={2} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white' : 'text-midnight-600 dark:text-midnight-300'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-ocean-600 hover:bg-ocean-50 shadow-lg'
                    : 'bg-gradient-ocean text-white hover:shadow-ocean'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
