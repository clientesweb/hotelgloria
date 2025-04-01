"use client"

import ModernNavigation from "@/components/modern-navigation"
import ModernFooter from "@/components/modern-footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Bed, Users, Wifi, Wind, Bath, Tv, ArrowRight } from "lucide-react"

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

export default function HabitacionesPage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250223-WA0075.jpg-kzvmZdSJDLrAFVNk7WdXayNGPu4lyN.jpeg"
          alt="Habitaciones del Hotel Gloria"
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-block"
              >
                <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-white text-sm font-medium border border-primary/30">
                  NUESTRAS HABITACIONES
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Un espacio diseñado para tu <span className="gradient-text">confort</span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Descubre nuestras habitaciones cuidadosamente diseñadas para brindarte una experiencia única. Cada
                espacio combina comodidad, elegancia y todos los servicios que necesitas.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="gradient-border overflow-hidden rounded-2xl bg-background transition-all duration-500 hover-card h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{room.capacity}</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-3">{room.title}</h2>
                    <p className="text-muted-foreground mb-6 flex-grow">{room.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {room.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <feature.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <p className="font-medium text-primary">{room.price}</p>
                      <Link href={`/habitaciones/${room.id}`}>
                        <Button className="rounded-full group">
                          Ver Detalles
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Todas nuestras habitaciones <span className="gradient-text">incluyen</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Disfruta de estas comodidades durante tu estadía
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Wind, title: "Aire Acondicionado", description: "Frío/calor para tu máximo confort" },
              { icon: Bath, title: "Baño Privado", description: "Con amenities de calidad" },
              { icon: Tv, title: "DirecTV", description: "Entretenimiento premium" },
              { icon: Wifi, title: "WiFi Gratuito", description: "Conexión de alta velocidad" },
              { icon: Bed, title: "Ropa de Cama", description: "De alta calidad y confort" },
              { icon: Users, title: "Servicio Diario", description: "Limpieza y atención personalizada" },
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border p-6 rounded-xl hover-card"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
          <div className="noise absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ¿Listo para vivir una <span className="gradient-text">experiencia única</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Reserva ahora y disfruta de una estadía inolvidable en Hotel Gloria
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-medium">
                Reservar Ahora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}

