import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Resources', href: '#', hasDropdown: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.12)] border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 shadow-lg">
                <span className="text-lg font-bold text-white tracking-tight">CF</span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              CloudFlow
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-5 py-2.5 text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  )}
                </span>
                <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2.5"
            >
              Sign In
            </a>
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Start Free
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200/50 shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-200 space-y-3">
            <a
              href="#"
              className="block text-center px-4 py-3 text-base font-medium text-slate-700 hover:text-violet-600 rounded-xl transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="block text-center px-4 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
