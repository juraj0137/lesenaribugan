'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Modal from '@/components/ui/Modal'
import ContactSection from '@/components/sections/ContactSection'
import { references, projects } from '@/data/references'

export default function ReferencesPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

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
              Reference
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Naše realizace
            </h1>
            <p className="text-lg text-primary-300">
              Spolupracujeme s předními průmyslovými podniky v České republice a na Slovensku.
              Podívejte se na výběr z našich realizací.
            </p>
          </motion.div>
        </div>
      </section>

      {/* References grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Naši klienti"
            title="Důvěřují nám přední firmy"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {references.map((reference, index) => (
              <motion.div
                key={reference.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setSelectedImage({ src: reference.image, alt: reference.name })}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-primary-100 w-full text-left"
                >
                  <img
                    src={reference.image}
                    alt={reference.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {reference.category && (
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                        {reference.category}
                      </span>
                    )}
                    <h3 className="font-bold text-white text-sm">
                      {reference.name}
                    </h3>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Realizované projekty"
            title="Přehled vybraných zakázek"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-primary-200">
                  <th className="text-left py-4 px-4 font-bold text-primary-900">
                    Popis zakázky
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-primary-900">
                    Lokalita
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-primary-100 hover:bg-primary-50 transition-colors"
                  >
                    <td className="py-4 px-4 text-primary-700">
                      {project.description}
                    </td>
                    <td className="py-4 px-4 text-muted">
                      {project.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* Image modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.alt}
      >
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </>
  )
}
