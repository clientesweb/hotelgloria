"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
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

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.url}
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-in-out ${
            index === current ? "translate-x-0" : index < current ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <Image src={slide.url || "/placeholder.svg"} alt={slide.alt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current ? "w-12 bg-primary" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold md:text-7xl lg:text-8xl font-gloria">
            Bienvenidos a <span className="text-primary">Hotel Gloria</span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl lg:text-3xl font-light">
            Descubre el encanto de Santa Rosa de Calamuchita
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#habitaciones">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Explorar Habitaciones
              </Button>
            </Link>
            <Link href="#contacto">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

