import { Check, Sparkles, ArrowRight } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for trying out CloudFlow',
    price: '0',
    period: 'forever free',
    features: [
      'Up to 3 team members',
      '5 GB storage',
      'Basic analytics',
      'Community support',
      'API access'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    description: 'For growing teams and startups',
    price: '49',
    period: 'per month',
    features: [
      'Up to 25 team members',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Advanced security',
      'Team permissions'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'tailored pricing',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'SSO & SAML',
      'Dedicated account manager',
      '99.99% SLA guarantee'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-200/40 to-fuchsia-200/40 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Choose your{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              perfect plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Start free and scale as you grow. All plans include a 14-day trial of Pro features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl transition-all duration-500 ${
                plan.highlighted
                  ? 'lg:-mt-4 lg:mb-4'
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/25">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-3xl border transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-white to-violet-50/50 border-violet-200 shadow-2xl shadow-violet-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50'
                }`}
              >
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-slate-200">
                  <div className="flex items-baseline gap-2">
                    {plan.price === 'Custom' ? (
                      <span className="text-5xl font-bold text-slate-900">Custom</span>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                        <span className="text-slate-500">/ {plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted
                          ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500'
                          : 'bg-emerald-500'
                      }`}>
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-[1.02]'
                      : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            All prices in USD. Taxes may apply.{' '}
            <a href="#" className="text-violet-600 hover:text-violet-700 font-medium underline underline-offset-4">
              View full pricing details
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
