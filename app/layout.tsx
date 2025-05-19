import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Homio™",
  description:
    "Descubra o ponto decisivo entre a primeira consulta e o retorno. Sistema completo para médicos e clínicas que buscam organização, automação e crescimento.",
  keywords: "sistema médico, gestão de clínicas, automação médica, retorno de pacientes, marketing médico",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://homio.com.br",
    title: "Homio™",
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
    title: "Homio™",
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
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" href="/images/logo-homio.png" as="image" />

        {/* Favicon - SVG como principal */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Add preload for YouTube iframe API */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* Add theme color for browser UI */}
        <meta name="theme-color" content="#1356c9" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
