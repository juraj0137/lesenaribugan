'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { company } from '@/data/company'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In static export, we'll use mailto: as fallback
    const subject = encodeURIComponent('Poptávka z webu lesenaribugan.cz')
    const body = encodeURIComponent(
      `Jméno: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\n\nZpráva:\n${formData.message}`
    )
    window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Kontakt"
          title="Kontaktujte nás"
          description="Máte zájem o naše služby? Neváhejte nás kontaktovat pro nezávaznou nabídku."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                  rows={5}
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

          {/* Contact info & map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact details */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
              <h3 className="font-bold text-primary-900 mb-6">Kontaktní údaje</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 text-primary-700 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-accent/10 group-hover:bg-accent rounded-lg transition-colors">
                    <Phone className="h-5 w-5 text-accent group-hover:text-white" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Jednatel</p>
                    <p className="font-semibold">{company.contact.phoneManagerFormatted}</p>
                  </div>
                </a>

                <a
                  href={`tel:${company.contact.phoneOffice.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 text-primary-700 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-accent/10 group-hover:bg-accent rounded-lg transition-colors">
                    <Phone className="h-5 w-5 text-accent group-hover:text-white" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Kancelář</p>
                    <p className="font-semibold">{company.contact.phoneOfficeFormatted}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center space-x-4 text-primary-700 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-accent/10 group-hover:bg-accent rounded-lg transition-colors">
                    <Mail className="h-5 w-5 text-accent group-hover:text-white" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-semibold">{company.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 text-primary-700">
                  <span className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-500" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Adresa</p>
                    <p className="font-semibold">{company.address.street}</p>
                    <p className="text-sm text-muted">
                      {company.address.postalCode} {company.address.city}
                    </p>
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
  )
}
