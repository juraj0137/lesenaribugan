import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reference | LešenářiBugáň - Naše realizace a projekty',
  description:
    'Přehled našich realizací a referencí. Spolupracujeme s předními průmyslovými podniky jako ArcelorMittal, Třinecké železárny, Biocel Paskov a další.',
  openGraph: {
    title: 'Reference | LešenářiBugáň',
    description: 'Přehled našich realizací a referencí v oblasti průmyslového lešení.',
    url: 'https://lesenaribugan.cz/reference/',
  },
  alternates: {
    canonical: 'https://lesenaribugan.cz/reference/',
  },
}

export default function ReferenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
