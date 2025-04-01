import type React from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"

// Importar fuentes modernas
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hotel Gloria | Experiencia Premium en Santa Rosa de Calamuchita",
  description:
    "Descubre una experiencia única de hospedaje en Hotel Gloria. Ubicación privilegiada, instalaciones modernas y atención personalizada en Santa Rosa de Calamuchita.",
  keywords: "hotel boutique, Santa Rosa de Calamuchita, alojamiento premium, vacaciones, descanso, experiencia única",
  authors: [{ name: "Hotel Gloria" }],
  metadataBase: new URL("https://hotelgloria.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://hotelgloria.ar",
    siteName: "Hotel Gloria",
    title: "Hotel Gloria | Experiencia Premium en Santa Rosa de Calamuchita",
    description:
      "Descubre una experiencia única de hospedaje en Hotel Gloria. Ubicación privilegiada, instalaciones modernas y atención personalizada.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Gloria - Santa Rosa de Calamuchita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Gloria | Experiencia Premium en Santa Rosa de Calamuchita",
    description:
      "Descubre una experiencia única de hospedaje en Hotel Gloria. Ubicación privilegiada, instalaciones modernas y atención personalizada.",
    images: ["/og-image.jpg"],
    creator: "@HotelGloria",
  },
  alternates: {
    canonical: "https://hotelgloria.ar",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

