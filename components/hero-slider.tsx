"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-auto h-full max-h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-none object-cover"
            poster="/video-poster.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold md:text-7xl lg:text-8xl font-gloria">
            Bienvenidos a <span className="text-primary">Hotel Gloria</span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl lg:text-3xl font-light">
            Descubre el encanto de Santa Rosa de Calamuchita
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              onClick={() => scrollToSection("habitaciones")}
            >
              Explorar Habitaciones
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-6"
              onClick={() => scrollToSection("contacto")}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

