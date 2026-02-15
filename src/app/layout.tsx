import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'
import StructuredData from '@/components/seo/StructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LešenářiBugáň - Průmyslové lešení | Montáž a pronájem',
  description:
    'Profesionální montáž, demontáž a pronájem průmyslového lešení. Poskytujeme služby pro hutě, elektrárny, chemické závody a stavební projekty v ČR a na Slovensku.',
  keywords: [
    'lešení',
    'průmyslové lešení',
    'montáž lešení',
    'pronájem lešení',
    'lešenářské práce',
    'Ostrava',
    'Česká republika',
    'Slovensko',
  ],
  openGraph: {
    title: 'LešenářiBugáň - Průmyslové lešení',
    description: 'Profesionální montáž, demontáž a pronájem průmyslového lešení v ČR a na Slovensku.',
    url: 'https://lesenaribugan.cz',
    siteName: 'LešenářiBugáň',
    locale: 'cs_CZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lesenaribugan.cz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        <StructuredData />
      </head>
      <body className="bg-white text-primary-900 font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
