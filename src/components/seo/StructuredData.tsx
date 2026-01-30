import { company } from '@/data/company'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://lesenaribugan.cz/#organization',
    name: company.name,
    alternateName: 'LešenářiBugáň',
    description:
      'Profesionální montáž, demontáž a pronájem průmyslového lešení pro hutě, elektrárny, chemické závody a stavební projekty.',
    url: 'https://lesenaribugan.cz',
    telephone: company.contact.phoneManager,
    email: company.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: 'CZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8304,
      longitude: 18.3383,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Česká republika',
      },
      {
        '@type': 'Country',
        name: 'Slovensko',
      },
    ],
    serviceType: [
      'Montáž lešení',
      'Demontáž lešení',
      'Pronájem lešení',
      'Průmyslové lešení',
    ],
    sameAs: [],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ČSN EN ISO 9001',
        credentialCategory: 'certification',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
