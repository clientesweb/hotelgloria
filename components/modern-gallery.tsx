"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patio-interno.jpg-uC7cULOnJ15w6lb4ucWvHp4MYJVhLU.jpeg",
    alt: "Patio interno con vegetación y mobiliario",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pileta-vista-aerea.jpg-8HdvfKL0ZFErK32JYMfEmW158OFhcr.jpeg",
    alt: "Vista aérea de la piscina climatizada",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sillones-recepcion.jpg-4FPiVAMkEcx4BsX6vpHhJTWsyKJCFO.jpeg",
    alt: "Área de recepción con sillones confortables",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estacionamiento.jpg-74LGbF5nK0ivIhIkug607hvKLvx5HT.jpeg",
    alt: "Estacionamiento cubierto y seguro",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estacionamiento-exterior.jpg-WMw4FvAZRBrSw86AizqCCauvJhD778.jpeg",
    alt: "Estacionamiento exterior con áreas verdes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-sala.jpg-u1RS87khEfgduWzjyX3M4lwZgkCUcX.jpeg",
    alt: "Sala de estar con vista al jardín",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-pileta.jpg-IeZn7Fbh5BUkVyGRZlTh22bzeHg5Bk.jpeg",
    alt: "Piscina iluminada por la noche",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-parque.jpg-i9zcXrKadnmzWBwKGjZ1Ph1HtnVmoj.jpeg",
    alt: "Parque con gazebos",
  },
]

export default function ModernGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedImage === null) return
    setDirection(1)
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev || 0) + 1))
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setDirection(-1)
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev || 0) - 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <div className="w-full" ref={constraintsRef} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => openLightbox(index)} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10 z-50"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={selectedImage}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl h-[80vh] px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white text-lg font-medium px-4 py-2 bg-black/50 rounded-full inline-block">
                    {images[selectedImage].alt}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface GalleryItemProps {
  image: {
    src: string
    alt: string
  }
  index: number
  onClick: () => void
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white font-medium">{image.alt}</p>
      </div>

      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="h-5 w-5 text-white" />
      </div>
    </motion.div>
  )
}

