"use client"

import Image from "next/image"

export default function ContactMap() {
  return (
    <div className="h-[500px] w-full mt-16">
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mapa-hotel-gloria.png-YPBjVxVQPxhPGFWbXBVlELxZXbBVxd.png"
          alt="Ubicación de Hotel Gloria en Santa Rosa de Calamuchita"
          fill
          className="object-cover"
          unoptimized
        />
        <a
          href="https://www.google.com/maps?ll=-32.072462,-64.540486&z=16&t=m&hl=es-419&gl=AR&mapclient=embed&cid=16534436981472870037"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center"
        >
          <span className="sr-only">Ver en Google Maps</span>
        </a>
      </div>
    </div>
  )
}

