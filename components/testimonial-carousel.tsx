"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Diego Ferrero",
    avatar: "/avatar-1.png",
    rating: 5,
    date: "hace 2 semanas",
    comment:
      "El hotel es hermoso, ambiente super tranquilo. Muy buena atención, muy amables. Las habitaciones son cómodas, con todos los servicios. Cuenta con comedor y espacios comunes con todas las comodidades y cochera. El hotel está ubicado a una cuadra del río y a pocas cuadras del centro. Muy buena experiencia.",
  },
  {
    name: "Laura Bringas",
    avatar: "/avatar-2.png",
    rating: 5,
    date: "hace 1 mes",
    comment:
      "Un lugar bellísimo para compartir en familia, solos o en pareja. Cerca del centro y del río. Muy buen personal atentos a sus huéspedes en todo momento. Un lugar digno de volver, ya que sus anfitriones te hacen sentir como en casa.",
  },
  {
    name: "Ricardo Alfredo Trivellin",
    avatar: "/avatar-3.png",
    rating: 5,
    date: "hace 2 meses",
    comment:
      "Realmente es un hotel familiar atendido por sus dueños y los colaboradores son muy amables. Dignos de recomendar. La amabilidad es fuera de serie. Y he recorrido unos cuantos lugares de argentina. Y creo humildemente que este hotel debería tener mejor puntuación. Volveremos. Y gracias.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    setIsAutoplay(false)
  }

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }, 8000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-primary fill-primary" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-lg gradient-border">
        <div className="absolute top-6 right-8 text-6xl text-primary/20 opacity-50">
          <Quote />
        </div>

        <div className="relative h-[300px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="flex justify-center mb-2">{renderStars(reviews[current].rating)}</div>
                  <p className="text-sm text-muted-foreground">{reviews[current].date}</p>
                </div>

                <p className="text-lg md:text-xl italic mb-8 max-w-2xl">"{reviews[current].comment}"</p>

                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={reviews[current].avatar || "/placeholder.svg?height=48&width=48"}
                      alt={reviews[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold">{reviews[current].name}</h4>
                    <p className="text-sm text-muted-foreground">Huésped verificado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
                setIsAutoplay(false)
              }}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

