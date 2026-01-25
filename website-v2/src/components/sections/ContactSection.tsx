'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { company } from '@/data/company'

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Kontakt"
          title="Kontaktujte nás"
          description="Máte zájem o naše služby? Neváhejte nás kontaktovat pro nezávaznou nabídku."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Phone numbers - prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Zavolejte nám</h3>
              <div className="space-y-6">
                <a
                  href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 text-white hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-14 h-14 bg-accent rounded-xl">
                    <Phone className="h-7 w-7 text-primary-900" />
                  </span>
                  <div>
                    <p className="text-sm text-primary-300">Jednatel</p>
                    <p className="text-2xl font-bold">{company.contact.phoneManagerFormatted}</p>
                  </div>
                </a>

                <a
                  href={`tel:${company.contact.phoneOffice.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 text-white hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-14 h-14 bg-primary-700 group-hover:bg-accent rounded-xl transition-colors">
                    <Phone className="h-7 w-7 text-white group-hover:text-primary-900 transition-colors" />
                  </span>
                  <div>
                    <p className="text-sm text-primary-300">Kancelář</p>
                    <p className="text-2xl font-bold">{company.contact.phoneOfficeFormatted}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email and address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
              <div className="space-y-6">
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center space-x-4 text-primary-700 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-14 h-14 bg-accent/10 group-hover:bg-accent rounded-xl transition-colors">
                    <Mail className="h-7 w-7 text-accent group-hover:text-white" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="text-lg font-bold">{company.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 text-primary-700">
                  <span className="flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl">
                    <MapPin className="h-7 w-7 text-primary-500" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Adresa</p>
                    <p className="text-lg font-bold">{company.address.street}</p>
                    <p className="text-muted">
                      {company.address.postalCode} {company.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-primary-100 aspect-video">
              <iframe
                src={company.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
