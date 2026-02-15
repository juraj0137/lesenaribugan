'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import useDelayedUnmount from '@/hooks/useDelayedUnmount'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const { mounted, visible } = useDelayedUnmount(isOpen, 200)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-4 lg:inset-8 z-50 flex items-center justify-center pointer-events-none transition-all duration-200 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative max-w-4xl max-h-full overflow-auto bg-white rounded-2xl shadow-2xl pointer-events-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-primary-500 hover:text-primary-900 bg-white rounded-full shadow-md transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Title */}
          {title && (
            <div className="p-6 border-b border-primary-100">
              <h3 className="text-xl font-bold text-primary-900">{title}</h3>
            </div>
          )}

          {/* Content */}
          <div className="p-4 lg:p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
