'use client'

import Link from 'next/link'
import { X, Phone, Mail } from 'lucide-react'
import { company } from '@/data/company'
import useDelayedUnmount from '@/hooks/useDelayedUnmount'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string }[]
}

export default function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  const { mounted, visible } = useDelayedUnmount(isOpen, 300)

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-primary-900 z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              type="button"
              className="p-2 text-white"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="space-y-4 mb-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block text-xl font-semibold text-white hover:text-accent transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact info */}
          <div className="border-t border-primary-700 pt-6 space-y-4">
            <a
              href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
              className="flex items-center space-x-3 text-white"
            >
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-semibold">{company.contact.phoneManagerFormatted}</span>
            </a>
            <a
              href={`tel:${company.contact.phoneOffice.replace(/\s/g, '')}`}
              className="flex items-center space-x-3 text-white"
            >
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-semibold">{company.contact.phoneOfficeFormatted}</span>
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="flex items-center space-x-3 text-primary-300"
            >
              <Mail className="h-5 w-5 text-accent" />
              <span>{company.contact.email}</span>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/kontakt/"
              onClick={onClose}
              className="block w-full bg-accent hover:bg-accent-600 text-white text-center px-6 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
