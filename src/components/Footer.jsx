import { MessageCircle, Code2, Share2, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Roadmap', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#', badge: 'Hiring' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Support', href: '#' }
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Cookies', href: '#' }
  ]
}

const socialLinks = [
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' }
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-6">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500">
                    <span className="text-lg font-bold text-white tracking-tight">CF</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-white">
                  CloudFlow
                </span>
              </a>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                The modern platform that empowers teams to build, collaborate, and ship products 10x faster.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="mb-5 text-sm font-semibold text-white">
                Product
              </h3>
              <ul className="space-y-3.5">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-white">
                Company
              </h3>
              <ul className="space-y-3.5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full">
                          {link.badge}
                        </span>
                      )}
                      {!link.badge && (
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-3.5">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-white">
                Legal
              </h3>
              <ul className="space-y-3.5">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} CloudFlow, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
