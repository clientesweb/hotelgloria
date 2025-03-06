import Link from "next/link"
import { Bed, Users, Wifi, Wind, Bath, Tv, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"
import RoomGallery from "@/components/room-gallery"

const rooms = {
  individual: {
    title: "Habitación Individual",
    description:
      "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable.",
    capacity: "1 persona",
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
  },
  doble: {
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales.",
    capacity: "2 personas",
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
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
  triple: {
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos.",
    capacity: "3 personas",
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
  },
  cuadruple: {
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con una cama matrimonial y dos individuales, ideal para familias o grupos.",
    capacity: "4 personas",
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
    ],
    amenities: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Bath, label: "Baño Privado" },
      { icon: Tv, label: "DirecTV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bed, label: "Ropa de Cama" },
      { icon: Users, label: "Servicio Diario" },
    ],
  },
  quintuple: {
    title: "Habitación Quíntuple",
    description: "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas.",
    capacity: "5 personas",
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
  },
}

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = rooms[params.slug as keyof typeof rooms]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-6">
          <Link href="/habitaciones">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Habitaciones
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{room.title}</h1>
            <p className="text-lg mb-6">{room.description}</p>
            <div className="mb-6">
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
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Capacidad</h3>
              <p>{room.capacity}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-primary/10">
            <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu Estadía</h2>
            <BookingForm initialRoomType={params.slug} />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Galería de Imágenes</h2>
          <RoomGallery images={room.images} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

