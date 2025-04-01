"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Users, Wifi, Wind, Bath, Tv, Bed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

const rooms = [
  {
    id: "individual",
    title: "Habitación Individual",
    description:
      "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable.",
    capacity: "1 persona",
    price: "Desde $15.000 por noche",
    image: "/habitacion-individual.jpg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
  {
    id: "doble",
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales.",
    capacity: "2 personas",
    price: "Desde $20.000 por noche",
    image: "/habitacion-dobles.jpg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
  {
    id: "triple",
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos.",
    capacity: "3 personas",
    price: "Desde $25.000 por noche",
    image: "/habitacion-triples.jpg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
  {
    id: "cuadruple",
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con dos camas individuales, ideal para familias o grupos, con espacio adicional para mayor comodidad y vista al jardín.",
    capacity: "4 personas",
    price: "Desde $30.000 por noche",
    image: "/habitacion-cuadruples.jpg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
  {
    id: "quintuple",
    title: "Habitación Quíntuple",
    description:
      "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas, con múltiples camas y amplio espacio para garantizar una estadía cómoda.",
    capacity: "5 personas",
    price: "Desde $35.000 por noche",
    image: "/habitacion-quintuples.jpg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
]

export default function RoomShowcase() {
  const [activeRoom, setActiveRoom] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const nextRoom = () => {
    setDirection(1)
    setActiveRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1))
  }

  const prevRoom = () => {
    setDirection(-1)
    setActiveRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/3 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              {rooms.map((room, index) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setDirection(index > activeRoom ? 1 : -1)
                    setActiveRoom(index)
                  }}
                  className={cn(
                    "text-left px-6 py-4 rounded-xl transition-all duration-300",
                    activeRoom === index
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "hover:bg-primary/5 border-l-4 border-transparent",
                  )}
                >
                  <h3
                    className={cn(
                      "font-medium text-lg transition-colors",
                      activeRoom === index ? "text-primary" : "text-foreground",
                    )}
                  >
                    {room.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{room.capacity}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="w-full lg:w-2/3 h-[500px] relative overflow-hidden rounded-2xl order-1 lg:order-2"
          ref={constraintsRef}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeRoom}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={rooms[activeRoom].image || "/placeholder.svg"}
                  alt={rooms[activeRoom].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-col space-y-4">
                    <Badge
                      variant="outline"
                      className="w-fit bg-primary/20 text-white border-primary/30 backdrop-blur-sm"
                    >
                      {rooms[activeRoom].capacity}
                    </Badge>

                    <h2 className="text-3xl font-bold text-white">{rooms[activeRoom].title}</h2>

                    <p className="text-white/80 max-w-lg">{rooms[activeRoom].description}</p>

                    <div className="flex flex-wrap gap-4 mt-2">
                      {rooms[activeRoom].features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/90">
                          <feature.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-white font-medium">Consultar disponibilidad</p>
                      <Link href={`/habitaciones/${rooms[activeRoom].id}`}>
                        <Button className="rounded-full">Ver Detalles</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevRoom}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/40"
            aria-label="Habitación anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextRoom}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/40"
            aria-label="Siguiente habitación"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

