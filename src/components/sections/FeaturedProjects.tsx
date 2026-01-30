'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Lightbox from '@/components/ui/Lightbox'
import Image from '@/components/ui/Image'
import { getImagePath } from '@/lib/config'

interface FeaturedProject {
  id: string
  name: string
  location: string
  description: string
  images: string[]
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'oc-karlak',
    name: 'OC KARLÁK',
    location: 'Karlovo náměstí, Praha',
    description: 'Komplexní lešenářské práce na přestavbě obchodního centra v samém srdci Prahy.',
    images: [
      '/images/referencie/oc-karlak-5.jpg',
      '/images/referencie/oc-karlak.jpg',
      '/images/referencie/oc-karlak-2.jpg',
      '/images/referencie/oc-karlak-3.jpg',
      '/images/referencie/oc-karlak-4.jpg',
    ],
  },
  {
    id: 'milotice-most',
    name: 'Most Milotice nad Opavou - Brantice',
    location: 'Bruntálsko',
    description: 'Lešení na mostě pro akci Rekonstrukce železniční trati Milotice nad Opavou - Brantice.',
    images: [
      '/images/referencie/milotice.jpg',
      '/images/referencie/milotice-2.jpg',
    ],
  },
]

export default function FeaturedProjects() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean
    images: string[]
    currentIndex: number
    projectName: string
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    projectName: '',
  })

  const openLightbox = (images: string[], index: number, projectName: string) => {
    setLightbox({ isOpen: true, images, currentIndex: index, projectName })
  }

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }))
  }

  const goToPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
    }))
  }

  const goToNext = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1,
    }))
  }

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Aktuální realizace"
            title="Nejnovější projekty"
            description="Podívejte se na naše nedávno dokončené a probíhající zakázky."
            light
          />

          <div className="space-y-12 lg:space-y-16">
            {featuredProjects.map((project, projectIndex) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10"
              >
                {/* Project Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                    <div className="flex items-center mt-2 text-primary-300">
                      <span className="flex items-center gap-1.5 text-sm">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-primary-300 mb-6 max-w-2xl">
                  {project.description}
                </p>

                {/* Image Grid - one big, rest small */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.images.map((image, imageIndex) => (
                    <motion.button
                      key={image}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + imageIndex * 0.05 }}
                      onClick={() => openLightbox(project.images.map(getImagePath), imageIndex, project.name)}
                      className={`group relative overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent ${
                        imageIndex === 0
                          ? 'col-span-2 row-span-2 aspect-[4/3]'
                          : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.name} - foto ${imageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                          Zobrazit
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
        alt={lightbox.projectName}
      />
    </>
  )
}
