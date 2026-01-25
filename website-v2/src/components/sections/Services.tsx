'use client'

import { motion } from 'framer-motion'
import { Wrench, Building2, Building, Factory, Flame, Train, Warehouse, Home } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/data/services'
import Link from 'next/link'

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

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Naše služby"
          title="Komplexní lešenářské služby"
          description="Poskytujeme profesionální montáž, demontáž a pronájem lešení pro průmyslové i stavební projekty."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="group bg-white rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-900 group-hover:bg-accent rounded-lg mb-4 transition-colors">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/sluzby/"
            className="inline-flex items-center text-accent hover:text-accent-700 font-semibold transition-colors"
          >
            Více o našich službách
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
