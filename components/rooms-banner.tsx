import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function RoomsBanner() {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <Image src="/placeholder.svg" alt="Habitaciones del Hotel Gloria" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-semibold mb-4">NUESTRAS HABITACIONES</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-gloria">
              Un espacio diseñado para tu confort
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Descubre nuestras habitaciones cuidadosamente diseñadas para brindarte una experiencia única. Cada espacio
              combina comodidad, elegancia y todos los servicios que necesitas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Reservar Ahora
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Ver Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20" />
    </div>
  )
}

