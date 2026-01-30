'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building2 } from 'lucide-react'
import { company } from '@/data/company'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Kontaktujte nás
            </h1>
            <p className="text-lg text-primary-300">
              Máte zájem o naše služby? Neváhejte nás kontaktovat pro nezávaznou nabídku.
              Jsme tu pro vás.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Phone numbers - prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary-900 rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white mb-8">Zavolejte nám</h2>
                <div className="space-y-8">
                  <a
                    href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
                    className="flex items-center space-x-5 text-white hover:text-accent transition-colors group"
                  >
                    <span className="flex items-center justify-center w-16 h-16 bg-accent rounded-xl">
                      <Phone className="h-8 w-8 text-primary-900" />
                    </span>
                    <div>
                      <p className="text-sm text-primary-300">Jednatel</p>
                      <p className="text-3xl font-bold">{company.contact.phoneManagerFormatted}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${company.contact.phoneOffice.replace(/\s/g, '')}`}
                    className="flex items-center space-x-5 text-white hover:text-accent transition-colors group"
                  >
                    <span className="flex items-center justify-center w-16 h-16 bg-primary-700 group-hover:bg-accent rounded-xl transition-colors">
                      <Phone className="h-8 w-8 text-white group-hover:text-primary-900 transition-colors" />
                    </span>
                    <div>
                      <p className="text-sm text-primary-300">Kancelář</p>
                      <p className="text-3xl font-bold">{company.contact.phoneOfficeFormatted}</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Other contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
                <h3 className="font-bold text-primary-900 mb-6">Další kontakty</h3>
                <div className="space-y-6">
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="flex items-center space-x-4 text-primary-700 hover:text-accent transition-colors group"
                  >
                    <span className="flex items-center justify-center w-12 h-12 bg-accent/10 group-hover:bg-accent rounded-xl transition-colors">
                      <Mail className="h-6 w-6 text-accent group-hover:text-white" />
                    </span>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <p className="font-semibold">{company.contact.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 text-primary-700">
                    <span className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </span>
                    <div>
                      <p className="text-sm text-muted">Adresa</p>
                      <p className="font-semibold">{company.address.street}</p>
                      <p className="text-muted">
                        {company.address.postalCode} {company.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 text-primary-700">
                    <span className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl">
                      <Building2 className="h-6 w-6 text-primary-500" />
                    </span>
                    <div>
                      <p className="text-sm text-muted">Fakturační údaje</p>
                      <p className="font-semibold">{company.name}</p>
                      <p className="text-sm text-muted">IČO: {company.legal.ico}</p>
                      <p className="text-sm text-muted">DIČ: {company.legal.dic}</p>
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
    </>
  )
}
