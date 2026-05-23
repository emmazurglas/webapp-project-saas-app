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
    <section className="py-20 md:py-32 bg-white dark:bg-neutral-950" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-emerald-500 text-white ring-2 ring-emerald-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-950'
                  : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-lg font-medium mb-1 ${
                  plan.highlighted ? 'text-white' : 'text-neutral-900 dark:text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-emerald-100' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price === 'Custom' ? (
                  <span className={`text-4xl font-semibold ${
                    plan.highlighted ? 'text-white' : 'text-neutral-900 dark:text-white'
                  }`}>Custom</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-semibold ${
                      plan.highlighted ? 'text-white' : 'text-neutral-900 dark:text-white'
                    }`}>${plan.price}</span>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-emerald-100' : 'text-neutral-500 dark:text-neutral-500'
                    }`}>/month</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${
                      plan.highlighted ? 'text-emerald-200' : 'text-emerald-500'
                    }`} strokeWidth={1.5} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-emerald-50' : 'text-neutral-600 dark:text-neutral-400'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                    : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100'
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
