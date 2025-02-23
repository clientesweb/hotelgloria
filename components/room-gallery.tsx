"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RoomGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function RoomGallery({ images }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev || 0) + 1))
  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev || 0) - 1))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

