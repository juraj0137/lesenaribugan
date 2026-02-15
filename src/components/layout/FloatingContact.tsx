import { Phone } from 'lucide-react'
import { company } from '@/data/company'

export default function FloatingContact() {
  return (
    <div className="animate-pop-in fixed bottom-6 right-6 z-40 lg:hidden">
      <a
        href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
        className="flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent-600 text-white rounded-full shadow-lg transition-colors"
        aria-label="Zavolat"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
