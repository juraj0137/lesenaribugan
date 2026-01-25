import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { company } from '@/data/company'
import { getImagePath } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Lešenáři<span className="text-accent">Bugáň</span>
            </h3>
            <p className="text-primary-300 text-sm leading-relaxed">
              Profesionální montáž a pronájem průmyslového lešení po celé České republice a na Slovensku.
            </p>
            <div className="flex items-center space-x-3 mt-6">
              <img
                src={getImagePath(company.certificates.iso9001.image)}
                alt="ISO 9001"
                className="h-12 w-auto"
              />
              <img
                src={getImagePath(company.certificates.reliableFirm.image)}
                alt="Spolehlivá firma"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Navigace
            </h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-primary-300 hover:text-white transition-colors">
                Domů
              </Link>
              <Link href="/sluzby/" className="block text-primary-300 hover:text-white transition-colors">
                Služby
              </Link>
              <Link href="/reference/" className="block text-primary-300 hover:text-white transition-colors">
                Reference
              </Link>
              <Link href="/kontakt/" className="block text-primary-300 hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
                className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{company.contact.phoneManagerFormatted}</span>
              </a>
              <a
                href={`tel:${company.contact.phoneOffice.replace(/\s/g, '')}`}
                className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{company.contact.phoneOfficeFormatted}</span>
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{company.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Adresa
            </h4>
            <div className="flex items-start space-x-3 text-primary-300">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
              <div>
                <p>{company.address.street}</p>
                <p>{company.address.district}</p>
                <p>{company.address.postalCode} {company.address.city}</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-primary-400">
              <p>IČO: {company.legal.ico}</p>
              <p>DIČ: {company.legal.dic}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-sm text-primary-400">
          <p>&copy; {new Date().getFullYear()} {company.name}. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
