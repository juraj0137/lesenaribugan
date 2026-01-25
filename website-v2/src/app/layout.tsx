import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'
import './globals.css'

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
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-white text-primary-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
