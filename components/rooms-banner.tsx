import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function RoomsBanner() {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250223-WA0075.jpg-kzvmZdSJDLrAFVNk7WdXayNGPu4lyN.jpeg"
        alt="Sala de estar del Hotel Gloria"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary">NUESTRAS HABITACIONES</span>
            </div>
            <h1 className="mb-6 font-gloria text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Un espacio diseñado para tu confort
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Descubre nuestras habitaciones cuidadosamente diseñadas para brindarte una experiencia única. Cada espacio
              combina comodidad, elegancia y todos los servicios que necesitas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
                Reservar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg"
              >
                Ver Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
