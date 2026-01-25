'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HardHat, MapPin, Award } from 'lucide-react'
import Modal from '@/components/ui/Modal'
import { company } from '@/data/company'

const stats = [
  {
    icon: HardHat,
    label: 'Stovky projektů',
    description: 'Realizovaných zakázek',
  },
  {
    icon: MapPin,
    label: 'ČR a Slovensko',
    description: 'Oblast působnosti',
  },
  {
    icon: Award,
    label: 'Kompletní servis',
    description: 'Montáž, demontáž, pronájem',
  },
]

export default function TrustBadges() {
  const [certificateModalOpen, setCertificateModalOpen] = useState(false)

  return (
    <>
      <section className="relative z-10 -mt-12 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Logo and Certificates */}
              <div className="flex items-center justify-center md:justify-start gap-6">
                <img
                  src="/images/logo_2.jpg"
                  alt="Lešenáři Bugáň"
                  className="h-16 lg:h-20 w-auto"
                />
                <button
                  onClick={() => setCertificateModalOpen(true)}
                  className="flex items-center justify-center p-2 hover:bg-primary-50 rounded-lg transition-colors group"
                  title="Zobrazit certifikát ISO 9001"
                >
                  <img
                    src={company.certificates.iso9001.image}
                    alt="ISO 9001"
                    className="h-16 lg:h-20 w-auto group-hover:scale-105 transition-transform"
                  />
                </button>
                <img
                  src={company.certificates.reliableFirm.image}
                  alt="Spolehlivá firma 2026"
                  className="h-16 lg:h-20 w-auto"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="font-bold text-primary-900 text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Modal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
        title="Certifikát ČSN EN ISO 9001"
      >
        <img
          src={company.certificates.iso9001.certificateImage}
          alt="Certifikát ISO 9001"
          className="w-full h-auto rounded-lg"
        />
      </Modal>
    </>
  )
}
