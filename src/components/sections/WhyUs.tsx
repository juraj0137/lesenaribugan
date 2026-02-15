'use client'

import { Shield, Award, Truck, Clock } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/ui/FadeIn'
import { scaffoldingLocations, scaffoldingTypes } from '@/data/services'

const features = [
  {
    icon: Shield,
    title: 'Bezpečnost na prvním místě',
    description: 'Dodržujeme přísné bezpečnostní standardy a všichni naši pracovníci jsou pravidelně školeni.',
  },
  {
    icon: Award,
    title: 'Certifikovaná kvalita',
    description: 'Jsme držiteli certifikátu ČSN EN ISO 9001, který garantuje kvalitu našich služeb.',
  },
  {
    icon: Truck,
    title: 'Působíme v ČR i SK',
    description: 'Poskytujeme služby po celé České republice a na Slovensku.',
  },
  {
    icon: Clock,
    title: 'Spolehlivost a flexibilita',
    description: 'Rychlá reakce na poptávky a dodržování dohodnutých termínů.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Proč my"
          title="Proč si vybrat LešenářiBugáň"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="bg-primary-800/50 rounded-xl p-6 border border-primary-700"
              >
                <feature.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Scaffolding info */}
          <div className="space-y-8">
            <FadeIn
              direction="left"
              duration={0.6}
            >
              <h3 className="text-lg font-bold text-accent mb-4">Typy lešení</h3>
              <ul className="grid grid-cols-2 gap-2">
                {scaffoldingTypes.map((type, index) => (
                  <li key={index} className="flex items-center space-x-2 text-primary-200">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn
              direction="left"
              delay={0.2}
              duration={0.6}
            >
              <h3 className="text-lg font-bold text-accent mb-4">Stavíme lešení</h3>
              <ul className="grid grid-cols-2 gap-2">
                {scaffoldingLocations.map((location, index) => (
                  <li key={index} className="flex items-center space-x-2 text-primary-200">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-sm">{location}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
