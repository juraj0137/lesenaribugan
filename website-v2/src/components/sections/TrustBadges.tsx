'use client'

import { motion } from 'framer-motion'
import { HardHat, MapPin, Award } from 'lucide-react'
import CertificateBadges from '@/components/ui/CertificateBadges'
import { getImagePath } from '@/lib/config'

const stats = [
  {
    icon: HardHat,
    label: 'Stovky projektů',
  },
  {
    icon: MapPin,
    label: 'ČR a Slovensko',
  },
  {
    icon: Award,
    label: 'Kompletní servis',
  },
]

export default function TrustBadges() {
  return (
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
                src={getImagePath('/images/logo_2.jpg')}
                alt="Lešenáři Bugáň"
                className="h-16 lg:h-20 w-auto"
              />
              <CertificateBadges imageHeight="h-16 lg:h-20" />
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
  )
}
