'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Clock, Building2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { company } from '@/data/company'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Poptávka z webu lesenaribugan.cz')
    const body = encodeURIComponent(
      `Jméno: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\n\nZpráva:\n${formData.message}`
    )
    window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`
  }

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Nezávazná poptávka
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Vaše jméno"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="+420 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Popište, co potřebujete..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="h-5 w-5 mr-2" />
                  Odeslat poptávku
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Phone numbers - highlighted */}
              <div className="bg-primary-900 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Volejte nám</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
                    className="flex items-center space-x-4 text-white hover:text-accent transition-colors group"
                  >
                    <span className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
                      <Phone className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm text-primary-300">Jednatel</p>
                      <p className="text-xl font-bold">{company.contact.phoneManagerFormatted}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${company.contact.phoneOffice.replace(/\s/g, '')}`}
                    className="flex items-center space-x-4 text-white hover:text-accent transition-colors group"
                  >
                    <span className="flex items-center justify-center w-12 h-12 bg-primary-700 group-hover:bg-accent rounded-lg transition-colors">
                      <Phone className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm text-primary-300">Kancelář</p>
                      <p className="text-xl font-bold">{company.contact.phoneOfficeFormatted}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Other contact info */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
                <h3 className="font-bold text-primary-900 mb-6">Další kontakty</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="flex items-center space-x-4 text-primary-700 hover:text-accent transition-colors"
                  >
                    <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{company.contact.email}</span>
                  </a>

                  <div className="flex items-start space-x-4 text-primary-700">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{company.address.street}</p>
                      <p className="text-muted">
                        {company.address.postalCode} {company.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 text-primary-700">
                    <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{company.name}</p>
                      <p className="text-sm text-muted">IČO: {company.legal.ico}</p>
                      <p className="text-sm text-muted">DIČ: {company.legal.dic}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-primary-100 aspect-video">
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
