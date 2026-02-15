'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import Image from '@/components/ui/Image'
import FadeIn from '@/components/ui/FadeIn'

interface Reference {
  id: string
  name: string
  image: string
  category?: string
}

interface ReferenceGridProps {
  references: Reference[]
}

export default function ReferenceGrid({ references }: ReferenceGridProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {references.map((reference, index) => (
          <FadeIn
            key={reference.id}
            scale
            delay={index * 0.05}
          >
            <button
              onClick={() => setSelectedImage({ src: reference.image, alt: reference.name })}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-primary-100 w-full text-left"
            >
              <Image
                src={reference.image}
                alt={reference.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
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
          </FadeIn>
        ))}
      </div>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.alt}
      >
        {selectedImage && (
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </>
  )
}
