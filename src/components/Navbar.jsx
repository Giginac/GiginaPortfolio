import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#Home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header 
    className="sticky top-0 z-50 w-full bg-gray-200/85 backdrop-blur
     supports-[backdrop-filter]:bg-gray-200/25 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-center relative">

        {/* Logo and desktop navigation */}
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-36">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <p className="text-yellow-500 text-xl font-bold">My Portfolio</p>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-yellow-500/80 text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="absolute right-4 inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white
                 hover:bg-gray-50 hover:text-yellow-500/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
