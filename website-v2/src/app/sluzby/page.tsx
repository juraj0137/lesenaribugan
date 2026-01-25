'use client'

import { motion } from 'framer-motion'
import { Wrench, Building2, Building, Factory, Flame, Train, Warehouse, Home, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactSection from '@/components/sections/ContactSection'
import Image from '@/components/ui/Image'
import { services, scaffoldingTypes, scaffoldingLocations } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Building2,
  Building,
  Factory,
  Flame,
  Train,
  Warehouse,
  Home,
}

export default function ServicesPage() {
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
              Naše služby
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Komplexní lešenářské služby
            </h1>
            <p className="text-lg text-primary-300">
              Nabízíme profesionální montáž, demontáž a pronájem průmyslového lešení
              pro nejnáročnější průmyslové i stavební projekty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Wrench
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm border border-primary-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary-900 rounded-xl flex-shrink-0">
                      <IconComponent className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Scaffolding types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-6">
                Typy lešení
              </h2>
              <p className="text-muted mb-8">
                Pracujeme s různými typy lešení podle potřeb konkrétního projektu.
              </p>
              <ul className="space-y-3">
                {scaffoldingTypes.map((type, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-primary-700">{type}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-6">
                Kde stavíme lešení
              </h2>
              <p className="text-muted mb-8">
                Naše lešení najdete na nejrůznějších místech v průmyslu i stavebnictví.
              </p>
              <ul className="space-y-3">
                {scaffoldingLocations.map((location, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-primary-700">{location}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/referencie/oc-karlak-5.jpg"
                alt="Průmyslové lešení"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-6">
                Profesionální přístup
              </h2>
              <p className="text-muted mb-4 leading-relaxed">
                Naše firma se specializuje na montáž a demontáž průmyslového lešení
                pro náročné průmyslové provozy. Máme bohaté zkušenosti s prací v hutních
                provozech, elektrárnách, chemických závodech a dalších průmyslových objektech.
              </p>
              <p className="text-muted leading-relaxed">
                Všichni naši pracovníci jsou pravidelně školeni a dodržují přísné
                bezpečnostní standardy. Jsme držiteli certifikátu ČSN EN ISO 9001,
                který garantuje kvalitu našich služeb.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
