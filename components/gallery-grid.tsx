"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-recepcion.jpg-JgrdIPUipx6TDQx8b8abCi8LxA6bWy.jpeg",
    alt: "Recepción del hotel",
  },
  // Nuevas imágenes agregadas
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0003.jpg-nLX8Hzbo75waT5NkvpE9QzCZ54CYdY.jpeg",
    alt: "Vista aérea del Hotel Gloria mostrando sus jardines y piscina",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0004.jpg-kiYUTEXGPXGMPjC9TvuxYD1di2ghvv.jpeg",
    alt: "Área de gazebos iluminada por la noche",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0002.jpg-6TrU0A35VqxusOM2mBMsUytvYTYH7W.jpeg",
    alt: "Vista del río de Santa Rosa de Calamuchita al atardecer",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0000.jpg-ZYvNaVCNdDrosE3n0RbSs8siIV7sOS.jpeg",
    alt: "Jardín con área de descanso bajo árboles frondosos",
  },
]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev || 0) + 1))
  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev || 0) - 1))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-lg font-semibold px-4 text-center">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                unoptimized
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
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
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="text-lg font-semibold">{images[selectedImage].alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

