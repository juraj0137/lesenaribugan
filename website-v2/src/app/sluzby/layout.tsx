import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Služby | LešenářiBugáň - Montáž a pronájem průmyslového lešení',
  description:
    'Nabízíme kompletní lešenářské služby: montáž, demontáž a pronájem průmyslového lešení pro hutě, elektrárny, chemické závody a stavební projekty.',
  openGraph: {
    title: 'Služby | LešenářiBugáň',
    description: 'Kompletní lešenářské služby: montáž, demontáž a pronájem průmyslového lešení.',
    url: 'https://lesenaribugan.cz/sluzby/',
  },
  alternates: {
    canonical: 'https://lesenaribugan.cz/sluzby/',
  },
}

export default function SluzbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
