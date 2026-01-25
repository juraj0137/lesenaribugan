'use client'

import { Fragment, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="fixed inset-4 lg:inset-8 z-50 flex items-center justify-center pointer-events-none"
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
