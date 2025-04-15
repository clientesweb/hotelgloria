"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const heroImages = [
  {
    url: "/hero-hotel-gloria-1.jpg",
    alt: "Fachada del Hotel Gloria",
  },
  {
    url: "/hero-hotel-gloria-2.jpg",
    alt: "Piscina climatizada del Hotel Gloria",
  },
  {
    url: "/hero-hotel-gloria-3.jpg",
    alt: "Área de juegos del Hotel Gloria",
  },
]

export default function ImmersiveHero() {
  const [currentImage, setCurrentImage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax effect
  const y = useTransform(scrollY, [0, 1000], [0, 300])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // Scroll to content
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-start")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden" ref={containerRef}>
      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ y }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={heroImages[currentImage].url || "/placeholder.svg"}
            alt={heroImages[currentImage].alt}
            fill
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Hero content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-white text-sm font-medium border border-primary/30">
              Hotel Gloria
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Una <span className="gradient-text">experiencia</span> única de hospedaje
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-10 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Descubre el equilibrio perfecto entre confort, naturaleza y atención personalizada
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Reservar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium bg-white/10 text-white hover:bg-white/20 border-white/30"
            >
              Explorar Habitaciones
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={scrollToContent}
        style={{ opacity }}
      >
        <ChevronDown className="h-10 w-10 text-white/70" />
      </motion.div>

      {/* Content start marker */}
      <div id="content-start" className="absolute bottom-0" />
    </div>
  )
}
