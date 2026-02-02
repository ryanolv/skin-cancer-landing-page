import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ContactSpecialistProvider } from '@/components/contact-specialist-dialog'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SkinCancer - Tecnologia digital para cuidados com a saúde da pele',
  description: 'Plataforma multicanal que utiliza Inteligência Artificial para auxiliar médicos e pacientes na prevenção e acompanhamento do câncer de pele.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <ContactSpecialistProvider>
          {children}
          <Analytics />
        </ContactSpecialistProvider>
      </body>
    </html>
  )
}
