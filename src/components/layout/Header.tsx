'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { company } from '@/data/company'
import MobileNav from './MobileNav'

const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'Služby', href: '/sluzby/' },
  { name: 'Reference', href: '/reference/' },
  { name: 'Kontakt', href: '/kontakt/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-sm border-b border-primary-800">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl lg:text-2xl font-bold text-white">
              Lešenáři<span className="text-accent">Bugáň</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary-200 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 text-white"
            >
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-semibold">{company.contact.phoneManagerFormatted}</span>
            </a>
            <Link
              href="/kontakt/"
              className="bg-accent hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Nezávazná poptávka
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  )
}
