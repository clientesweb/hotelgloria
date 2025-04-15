"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Script from "next/script"

interface InstagramVideoProps {
  url: string
}

export default function InstagramVideo({ url }: InstagramVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Procesamos el embed de Instagram cuando el componente se monta
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      setIsLoaded(true)
    }
  }, [])

  // Extraer el ID del video de la URL
  const getVideoId = (url: string) => {
    const regex = /\/reel\/([^/?]+)/
    const match = url.match(regex)
    return match ? match[1] : ""
  }

  const videoId = getVideoId(url)

  return (
    <section className="py-12 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="gradient-border bg-background p-4 rounded-2xl shadow-lg overflow-hidden">
            <div className="relative aspect-video w-full" ref={containerRef}>
              <iframe
                src={`https://www.instagram.com/reel/${videoId}/embed/`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                scrolling="no"
                onLoad={() => setIsLoaded(true)}
              ></iframe>

              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Script de Instagram necesario para el funcionamiento de los embeds */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
            setIsLoaded(true)
          }
        }}
      />
    </section>
  )
}
