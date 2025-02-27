"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function InstagramReels() {
  useEffect(() => {
    // Recargar los widgets de Instagram cuando el componente se monta
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 font-gloria">
          Momentos Especiales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Reel 1 */}
          <div className="aspect-[9/16] w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/C8pbyPrxInN/embed"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>

          {/* Reel 2 */}
          <div className="aspect-[9/16] w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/C25y2jSxfqX/embed"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>

          {/* Reel 3 */}
          <div className="aspect-[9/16] w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/C2QJi5Txs-5/embed"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>

          {/* Reel 4 */}
          <div className="aspect-[9/16] w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/Cl336ovAmZ8/embed"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Script de Instagram necesario para el funcionamiento de los embeds */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }}
      />
    </section>
  )
}

