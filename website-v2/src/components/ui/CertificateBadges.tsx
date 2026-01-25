'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import { company } from '@/data/company'

interface CertificateBadgesProps {
  className?: string
  imageHeight?: string
}

export default function CertificateBadges({
  className = '',
  imageHeight = 'h-14'
}: CertificateBadgesProps) {
  const [certificateModalOpen, setCertificateModalOpen] = useState(false)

  return (
    <>
      <div className={`flex items-center gap-6 ${className}`}>
        <button
          onClick={() => setCertificateModalOpen(true)}
          className="flex items-center justify-center p-2 hover:bg-primary-50 rounded-lg transition-colors group"
          title="Zobrazit certifikát ISO 9001"
        >
          <img
            src={company.certificates.iso9001.image}
            alt="ISO 9001"
            className={`${imageHeight} w-auto group-hover:scale-105 transition-transform`}
          />
        </button>
        <img
          src={company.certificates.reliableFirm.image}
          alt="Spolehlivá firma 2026"
          className={`${imageHeight} w-auto`}
        />
      </div>

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
