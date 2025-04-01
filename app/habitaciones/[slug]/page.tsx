"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Bed, Users, Wifi, Wind, Bath, Tv, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ModernNavigation from "@/components/modern-navigation"
import ModernFooter from "@/components/modern-footer"
import BookingExperience from "@/components/booking-experience"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const rooms = {
  individual: {
    title: "Habitación Individual",
    description:
      "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable.",
    capacity: "1 persona",
    price: "Desde $15.000 por noche",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-individual-cama.jpg-uumSPZjVTuzdv2FNPl0sZNrg5B5eEq.jpeg",
        alt: "Habitación individual con cama confortable y decoración cálida",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-indiviual-espacio.jpg-wzCI5Q0HwXKH6FnLbwFCAjpljb61QU.jpeg",
        alt: "Vista del espacio con TV y aire acondicionado",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-individual-ba%C3%B1o.jpg-toCeYiPySzrR6FGtSDDOllm5gKxbvP.jpeg",
        alt: "Baño privado completo con amenities",
      },
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
    details: [
      "Cama individual confortable",
      "Espacio funcional y acogedor",
      "Ideal para viajeros solitarios",
      "Baño privado completo",
      "Aire acondicionado frío/calor",
      "TV con DirecTV",
      "WiFi de alta velocidad",
      "Servicio de limpieza diario",
    ],
  },
  doble: {
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales.",
    capacity: "2 personas",
    price: "Desde $20.000 por noche",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0006.jpg-ciahsdycEycCvkz3J8gCPnpay0UfHW.jpeg",
        alt: "Habitación doble con dos camas individuales y decoración cálida",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250227-WA0005.jpg-4mUQeLuFyvcykPuyATmfknEn0glBc4.jpeg",
        alt: "Vista al balcón desde la habitación doble",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-doble-ba%C3%B1o.jpg-3fLGVfEPwUK2AbmSLmZRdjDr32NNXg.jpeg",
        alt: "Baño privado completo con amenities",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250308-WA0048.jpg-wOLDb8USWd6Gau7qohidoz5lAQZDOn.jpeg",
        alt: "Habitación doble con cama individual y detalles en madera",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250308-WA0047.jpg-1Y6LFgYsrhoIytDUVZCraDEMtiVgKW.jpeg",
        alt: "Habitación doble con elegante cabecera de madera y vista al exterior",
      },
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
    details: [
      "Cama matrimonial o dos camas individuales",
      "Espacio amplio y confortable",
      "Ideal para parejas o amigos",
      "Baño privado completo",
      "Aire acondicionado frío/calor",
      "TV con DirecTV",
      "WiFi de alta velocidad",
      "Servicio de limpieza diario",
      "Algunas habitaciones con balcón",
    ],
  },
  triple: {
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos.",
    capacity: "3 personas",
    price: "Desde $25.000 por noche",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-triple-lugar.jpg-rHnZAV7YpPvuBR51Tssr9ydPC2xM2d.jpeg",
        alt: "Habitación triple con dos camas individuales y acabados en madera",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-triple-espacio.jpg-Sbi1kR50tl9oZYiBcy7S1GExAYldIe.jpeg",
        alt: "Vista de la habitación triple con cama matrimonial y espacio adicional",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-triple-camas.jpg-TsfMnSyifo1F955lZHzQKP1lSuBn4t.jpeg",
        alt: "Configuración alternativa de habitación triple con pared verde",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-triple-vista.jpg-8rSgNWoS4lXlK5L0ex73ISoWpC01JU.jpeg",
        alt: "Vista desde el balcón con vistas a las montañas y jardines",
      },
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
    details: [
      "Una cama matrimonial y una individual",
      "Espacio amplio para toda la familia",
      "Ideal para familias pequeñas o grupos de amigos",
      "Baño privado completo",
      "Aire acondicionado frío/calor",
      "TV con DirecTV",
      "WiFi de alta velocidad",
      "Servicio de limpieza diario",
      "Algunas habitaciones con vista al jardín",
    ],
  },
  cuadruple: {
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con una cama matrimonial y dos individuales, ideal para familias o grupos.",
    capacity: "4 personas",
    price: "Desde $30.000 por noche",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitaciin-cuadruple-camas.jpg-T59pC60ampdPBDwbXUKlYyOkFzfSDK.jpeg",
        alt: "Habitación cuádruple con dos camas individuales y vista al balcón",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-cuadruples-espacio.jpg-XSW4YQYJQrBXC1P4fgYfwRqJdgiZB0.jpeg",
        alt: "Vista amplia de la habitación cuádruple mostrando la distribución de camas",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanitacion-cuadruple-cama-matromionial.jpg-Sj1Ya8HwaCVTtcFlIRkStsRbRQAg3B.jpeg",
        alt: "Área de cama matrimonial en la habitación cuádruple",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240117-WA0004%20-%20copia.jpg-Ne0XWQLtTyun2Fq61YjxO42WEN7Dg6.jpeg",
        alt: "Vista desde el balcón con vistas a las montañas y jardines floridos",
      },
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
    details: [
      "Una cama matrimonial y dos individuales",
      "Espaciosa habitación con dos ambientes",
      "Ideal para familias o grupos",
      "Baño privado completo",
      "Aire acondicionado frío/calor",
      "TV con DirecTV",
      "WiFi de alta velocidad",
      "Servicio de limpieza diario",
      "Algunas habitaciones con balcón",
    ],
  },
  quintuple: {
    title: "Habitación Quíntuple",
    description: "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas.",
    capacity: "5 personas",
    price: "Desde $35.000 por noche",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-quintuple-matrimonial.jpg-c6KKxPTzL1BuHrgxcgtyv8E0UjjUcE.jpeg",
        alt: "Habitación quíntuple con cama matrimonial y techo de madera",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-quintuple-espacio.jpg-kGYXT9kCA4Q8bABf2ZQkmHmGq69rs2.jpeg",
        alt: "Vista del espacio con múltiples camas y comodidades",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-quintuple-camas.jpg-9IbeA36YGfe34xygw6s8v9l0eVA4Wb.jpeg",
        alt: "Área con tres camas individuales y ventana amplia",
      },
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
    details: [
      "Una cama matrimonial y tres individuales",
      "Nuestra habitación más espaciosa",
      "Ideal para familias numerosas o grupos",
      "Dos ambientes separados",
      "Baño privado completo",
      "Aire acondicionado frío/calor",
      "TV con DirecTV",
      "WiFi de alta velocidad",
      "Servicio de limpieza diario",
    ],
  },
}

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = rooms[params.slug as keyof typeof rooms]

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Habitación no encontrada</h1>
          <Link href="/habitaciones">
            <Button>Volver a Habitaciones</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/habitaciones">
              <Button variant="ghost" className="group">
                <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver a Habitaciones
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={room.images[0].src || "/placeholder.svg"}
                  alt={room.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-3 mt-3">
                {room.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {room.images.length > 4 && (
                <div className="absolute bottom-4 right-4">
                  <Link href="#gallery">
                    <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      +{room.images.length - 4} fotos
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Room Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
                {room.capacity}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{room.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{room.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características</h2>
                <div className="grid grid-cols-2 gap-4">
                  {room.amenities?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <feature.icon className="h-5 w-5 text-primary" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Detalles</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {room.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-muted rounded-xl mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Check-in / Check-out</h3>
                    <p className="text-muted-foreground">Check-in: 13:00 hs</p>
                    <p className="text-muted-foreground">Check-out: 10:00 hs</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Precio</h3>
                    <p className="text-xl font-bold text-primary">{room.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Reserva tu <span className="gradient-text">Estadía</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Completa el formulario y disfruta de una experiencia única
            </motion.p>
          </div>

          <BookingExperience />
        </div>
      </section>

      {/* Full Gallery Section */}
      <section id="gallery" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Otras Habitaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(rooms)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, roomData], index) => (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/habitaciones/${slug}`}>
                    <div className="gradient-border overflow-hidden rounded-xl bg-background transition-all duration-500 hover-card h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={roomData.images[0].src || "/placeholder.svg"}
                          alt={roomData.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-xl font-bold text-white">{roomData.title}</h3>
                          <p className="text-white/80">{roomData.capacity}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}

