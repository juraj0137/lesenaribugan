'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { references } from '@/data/references'
import { getImagePath } from '@/lib/config'

export default function References() {
  // Show first 6 references on homepage
  const featuredReferences = references.slice(0, 6)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Reference"
          title="Důvěřují nám přední firmy"
          description="Spolupracujeme s největšími průmyslovými podniky v České republice a na Slovensku."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {featuredReferences.map((reference, index) => (
            <motion.div
              key={reference.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-primary-100">
                <img
                  src={getImagePath(reference.image)}
                  alt={reference.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  {reference.category && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                      {reference.category}
                    </span>
                  )}
                  <h3 className="font-bold text-white text-sm lg:text-base">
                    {reference.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/reference/"
            className="inline-flex items-center text-accent hover:text-accent-700 font-semibold transition-colors"
          >
            Zobrazit všechny reference
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
