import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { LanguageProvider } from '@/lib/language-context'

const _inter = Inter({ subsets: ["latin"] })
const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: 'Neodental | Tu Sonrisa, Nuestra Prioridad',
  description: 'Consultorio odontologico Neodental - Servicios dentales de alta calidad con atencion personalizada. Limpieza dental, blanqueamiento, ortodoncia y mas.',
  keywords: 'dentista, odontologia, consultorio dental, limpieza dental, blanqueamiento, ortodoncia, neodental',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
