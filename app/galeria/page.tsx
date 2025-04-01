"use client"

import ModernNavigation from "@/components/modern-navigation"
import ModernFooter from "@/components/modern-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patio-interno.jpg-uC7cULOnJ15w6lb4ucWvHp4MYJVhLU.jpeg",
    alt: "Patio interno con vegetación y mobiliario",
    category: "espacios-comunes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pileta-vista-aerea.jpg-8HdvfKL0ZFErK32JYMfEmW158OFhcr.jpeg",
    alt: "Vista aérea de la piscina climatizada",
    category: "piscina",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sillones-recepcion.jpg-4FPiVAMkEcx4BsX6vpHhJTWsyKJCFO.jpeg",
    alt: "Área de recepción con sillones confortables",
    category: "espacios-comunes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estacionamiento.jpg-74LGbF5nK0ivIhIkug607hvKLvx5HT.jpeg",
    alt: "Estacionamiento cubierto y seguro",
    category: "instalaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estacionamiento-exterior.jpg-WMw4FvAZRBrSw86AizqCCauvJhD778.jpeg",
    alt: "Estacionamiento exterior con áreas verdes",
    category: "instalaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-sala.jpg-u1RS87khEfgduWzjyX3M4lwZgkCUcX.jpeg",
    alt: "Sala de estar con vista al jardín",
    category: "espacios-comunes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-pileta.jpg-IeZn7Fbh5BUkVyGRZlTh22bzeHg5Bk.jpeg",
    alt: "Piscina iluminada por la noche",
    category: "piscina",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-parque.jpg-i9zcXrKadnmzWBwKGjZ1Ph1HtnVmoj.jpeg",
    alt: "Parque con gazebos",
    category: "exteriores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-recepcion.jpg-JgrdIPUipx6TDQx8b8abCi8LxA6bWy.jpeg",
    alt: "Recepción del hotel",
    category: "espacios-comunes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0003.jpg-nLX8Hzbo75waT5NkvpE9QzCZ54CYdY.jpeg",
    alt: "Vista aérea del Hotel Gloria mostrando sus jardines y piscina",
    category: "exteriores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0004.jpg-kiYUTEXGPXGMPjC9TvuxYD1di2ghvv.jpeg",
    alt: "Área de gazebos iluminada por la noche",
    category: "exteriores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0002.jpg-6TrU0A35VqxusOM2mBMsUytvYTYH7W.jpeg",
    alt: "Vista del río de Santa Rosa de Calamuchita al atardecer",
    category: "alrededores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0000.jpg-ZYvNaVCNdDrosE3n0RbSs8siIV7sOS.jpeg",
    alt: "Jardín con área de descanso bajo árboles frondosos",
    category: "exteriores",
  },
]

const categories = [
  { id: "all", label: "Todas" },
  { id: "espacios-comunes", label: "Espacios Comunes" },
  { id: "piscina", label: "Piscina" },
  { id: "instalaciones", label: "Instalaciones" },
  { id: "exteriores", label: "Exteriores" },
  { id: "alrededores", label: "Alrededores" },
]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-pileta.jpg-IeZn7Fbh5BUkVyGRZlTh22bzeHg5Bk.jpeg"
          alt="Galería del Hotel Gloria"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Nuestra <span className="gradient-text">Galería</span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Explora nuestras instalaciones y descubre los espacios que harán de tu estadía una experiencia
                inolvidable.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layoutId={`image-${image.src}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(index)}
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
            ))}
          </motion.div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/10 z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50"
                onClick={() => {
                  setSelectedImage((prev) => (prev === 0 ? filteredImages.length - 1 : (prev || 0) - 1))
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50"
                onClick={() => {
                  setSelectedImage((prev) => (prev === filteredImages.length - 1 ? 0 : (prev || 0) + 1))
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="relative w-full max-w-5xl h-[80vh] px-4">
                <div className="relative w-full h-full">
                  <Image
                    src={filteredImages[selectedImage].src || "/placeholder.svg"}
                    alt={filteredImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white text-lg font-medium px-4 py-2 bg-black/50 rounded-full inline-block">
                    {filteredImages[selectedImage].alt}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}

