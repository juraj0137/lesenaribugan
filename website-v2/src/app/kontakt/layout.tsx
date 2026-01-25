import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | LešenářiBugáň - Nezávazná poptávka',
  description:
    'Kontaktujte nás pro nezávaznou nabídku na montáž nebo pronájem lešení. Sídlíme v Ostravě, působíme po celé ČR a na Slovensku.',
  openGraph: {
    title: 'Kontakt | LešenářiBugáň',
    description: 'Kontaktujte nás pro nezávaznou nabídku na montáž nebo pronájem lešení.',
    url: 'https://lesenaribugan.cz/kontakt/',
  },
  alternates: {
    canonical: 'https://lesenaribugan.cz/kontakt/',
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
