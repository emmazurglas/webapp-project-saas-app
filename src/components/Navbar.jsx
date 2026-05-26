import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Docs', href: '#' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved preference or system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (saved === 'dark' || (!saved && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong border-b border-midnight-200 dark:border-midnight-800'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-ocean shadow-ocean transition-transform group-hover:scale-110">
              <span className="text-sm font-semibold text-white">C</span>
            </div>
            <span className="text-lg font-semibold text-midnight-900 dark:text-white">
              CloudFlow
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-midnight-600 dark:text-midnight-300 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-midnight-600 dark:text-midnight-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors rounded-lg hover:bg-ocean-50 dark:hover:bg-ocean-950"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <a
              href="#"
              className="text-sm font-medium text-midnight-600 dark:text-midnight-300 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors"
            >
              Sign in
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-ocean rounded-lg hover:shadow-ocean transition-all hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-midnight-600 dark:text-midnight-400"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-midnight-600 dark:text-midnight-400 hover:text-midnight-900 dark:hover:text-white"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-midnight-900 border-t border-midnight-200 dark:border-midnight-800">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-midnight-600 dark:text-midnight-300 hover:text-ocean-600 dark:hover:text-ocean-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-midnight-200 dark:border-midnight-800 space-y-3">
              <a href="#" className="block text-sm font-medium text-midnight-600 dark:text-midnight-300">
                Sign in
              </a>
              <a
                href="#"
                className="block text-center px-4 py-2 text-sm font-medium text-white bg-gradient-ocean rounded-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
