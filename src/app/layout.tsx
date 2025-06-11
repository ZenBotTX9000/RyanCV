

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan St Dare - Professional CV',
  description: 'Professional CV and Portfolio of Ryan St Dare - English Educator, Web Developer, and Creative Professional',
  keywords: 'Ryan St Dare, CV, Resume, English Teacher, Web Developer, TEFL, TESOL, Professional',
  authors: [{ name: 'Ryan St Dare' }],
  creator: 'Ryan St Dare',
  openGraph: {
    title: 'Ryan St Dare - Professional CV',
    description: 'Professional CV and Portfolio of Ryan St Dare - English Educator, Web Developer, and Creative Professional',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan St Dare - Professional CV',
    description: 'Professional CV and Portfolio of Ryan St Dare - English Educator, Web Developer, and Creative Professional',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}