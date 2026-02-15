import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/ui/FadeIn'
import ReferenceGrid from '@/components/ui/ReferenceGrid'
import ContactSection from '@/components/sections/ContactSection'
import { references, projects } from '@/data/references'

export default function ReferencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="animate-hero-fade-in max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Reference
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Naše realizace
            </h1>
            <p className="text-lg text-primary-300">
              Spolupracujeme s předními průmyslovými podniky v České republice a na Slovensku.
              Podívejte se na výběr z našich realizací.
            </p>
          </div>
        </div>
      </section>

      {/* References grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Naši klienti"
            title="Důvěřují nám přední firmy"
          />

          <ReferenceGrid references={references} />
        </div>
      </section>

      {/* Projects table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Realizované projekty"
            title="Přehled vybraných zakázek"
          />

          <FadeIn
            duration={0.6}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-primary-200">
                  <th className="text-left py-4 px-4 font-bold text-primary-900">
                    Popis zakázky
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-primary-900">
                    Lokalita
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-primary-100 hover:bg-primary-50 transition-colors"
                  >
                    <td className="py-4 px-4 text-primary-700">
                      {project.description}
                    </td>
                    <td className="py-4 px-4 text-muted">
                      {project.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
