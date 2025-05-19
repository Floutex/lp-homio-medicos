import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Homio | Sistema para Médicos e Clínicas",
  description:
    "Descubra o ponto decisivo entre a primeira consulta e o retorno. Sistema completo para médicos e clínicas que buscam organização, automação e crescimento.",
  keywords: "sistema médico, gestão de clínicas, automação médica, retorno de pacientes, marketing médico",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://homio.com.br",
    title: "Homio | Sistema para Médicos e Clínicas",
    description:
      "Descubra o ponto decisivo entre a primeira consulta e o retorno. Sistema completo para médicos e clínicas.",
    siteName: "Homio",
    images: [
      {
        url: "https://homio.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homio - Sistema para Médicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homio | Sistema para Médicos e Clínicas",
    description: "Sistema completo para médicos e clínicas que buscam organização, automação e crescimento.",
    images: ["https://homio.com.br/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
