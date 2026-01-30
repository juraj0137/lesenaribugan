import Hero from '@/components/sections/Hero'
import TrustBadges from '@/components/sections/TrustBadges'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Services from '@/components/sections/Services'
import References from '@/components/sections/References'
import WhyUs from '@/components/sections/WhyUs'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <FeaturedProjects />
      <Services />
      <References />
      <WhyUs />
      <ContactSection />
    </>
  )
}
