import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel Gloria - Santa Rosa de Calamuchita",
  description:
    "Hotel Gloria - Que lindo es sentirte como en tu casa. Disfruta de una estadía confortable en Santa Rosa de Calamuchita con atención personalizada y todas las comodidades.",
  keywords: "hotel, Santa Rosa de Calamuchita, alojamiento, vacaciones, descanso",
  authors: [{ name: "Hotel Gloria" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://hotelgloria.ar",
    siteName: "Hotel Gloria",
    title: "Hotel Gloria - Santa Rosa de Calamuchita",
    description:
      "Disfruta de una estadía confortable en Santa Rosa de Calamuchita con atención personalizada y todas las comodidades.",
    images: [
      {
        url: "https://www.hotelgloria.com.ar/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Gloria - Santa Rosa de Calamuchita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Gloria - Santa Rosa de Calamuchita",
    description:
      "Disfruta de una estadía confortable en Santa Rosa de Calamuchita con atención personalizada y todas las comodidades.",
    images: ["https://www.hotelgloria.com.ar/twitter-image.jpg"],
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
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#C4A661" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#C4A661" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

