'use client'

import { useEffect, useCallback } from 'react'
import NextImage from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import useDelayedUnmount from '@/hooks/useDelayedUnmount'

function getWebPPath(src: string): string {
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

interface LightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  alt?: string
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  alt = 'Image',
}: LightboxProps) {
  const { mounted, visible } = useDelayedUnmount(isOpen, 200)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [isOpen, onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, isOpen])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Zavřít"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Předchozí"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
      )}

      {/* Image */}
      <div
        key={currentIndex}
        onClick={(e) => e.stopPropagation()}
      >
        <NextImage
          src={getWebPPath(images[currentIndex])}
          alt={`${alt} - ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Další"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      )}
    </div>
  )
}
