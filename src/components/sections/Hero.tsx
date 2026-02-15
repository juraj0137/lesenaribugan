import Image from 'next/image'
import { Phone, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { company } from '@/data/company'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/referencie/oc-karlak-5.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/60" />

      {/* Diagonal accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-accent to-accent-600 transform -skew-y-2 translate-y-12" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <div className="animate-hero-fade-in">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Průmyslové lešení
            </span>
          </div>

          <h1 className="animate-hero-fade-in-1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Průmyslové lešení na které se můžete{' '}
            <span className="text-accent">spolehnout</span>
          </h1>

          <p className="animate-hero-fade-in-2 text-lg lg:text-xl text-primary-200 mb-8 max-w-2xl">
            Montáž, demontáž a pronájem lešení pro průmyslové podniky, elektrárny,
            hutě a stavební projekty v ČR a na Slovensku.
          </p>

          <div className="animate-hero-fade-in-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button href="/kontakt/" size="lg">
              Nezávazná poptávka
            </Button>
            <a
              href={`tel:${company.contact.phoneManager.replace(/\s/g, '')}`}
              className="flex items-center space-x-3 text-white hover:text-accent transition-colors group"
            >
              <span className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full group-hover:bg-accent transition-colors">
                <Phone className="h-5 w-5 text-white group-hover:text-primary-900 transition-colors" />
              </span>
              <span className="text-lg font-semibold">{company.contact.phoneManagerFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-hero-fade-in-late absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce-scroll text-white/50">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}
