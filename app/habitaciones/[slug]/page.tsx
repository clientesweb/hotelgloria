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
        src: "/placeholder.svg",
        alt: "Vista principal de la habitación individual",
      },
      {
        src: "/placeholder.svg",
        alt: "Baño de la habitación individual",
      },
      {
        src: "/placeholder.svg",
        alt: "Área de trabajo de la habitación individual",
      },
      {
        src: "/placeholder.svg",
        alt: "Vista del closet de la habitación individual",
      },
    ],
  },
  doble: {
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales.",
    capacity: "2 personas",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Vista principal de la habitación doble",
      },
      {
        src: "/placeholder.svg",
        alt: "Baño de la habitación doble",
      },
      {
        src: "/placeholder.svg",
        alt: "Área de estar de la habitación doble",
      },
      {
        src: "/placeholder.svg",
        alt: "Vista del balcón de la habitación doble",
      },
    ],
  },
  triple: {
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos.",
    capacity: "3 personas",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Vista principal de la habitación triple",
      },
      {
        src: "/placeholder.svg",
        alt: "Baño de la habitación triple",
      },
      {
        src: "/placeholder.svg",
        alt: "Área de estar de la habitación triple",
      },
      {
        src: "/placeholder.svg",
        alt: "Vista nocturna de la habitación triple",
      },
    ],
  },
  cuadruple: {
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con una cama matrimonial y dos individuales, ideal para familias o grupos.",
    capacity: "4 personas",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Vista principal de la habitación cuádruple",
      },
      {
        src: "/placeholder.svg",
        alt: "Baño de la habitación cuádruple",
      },
      {
        src: "/placeholder.svg",
        alt: "Área de estar de la habitación cuádruple",
      },
      {
        src: "/placeholder.svg",
        alt: "Vista del balcón de la habitación cuádruple",
      },
    ],
  },
  quintuple: {
    title: "Habitación Quíntuple",
    description: "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas.",
    capacity: "5 personas",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Vista principal de la habitación quíntuple",
      },
      {
        src: "/placeholder.svg",
        alt: "Baño de la habitación quíntuple",
      },
      {
        src: "/placeholder.svg",
        alt: "Área de estar de la habitación quíntuple",
      },
      {
        src: "/placeholder.svg",
        alt: "Vista del balcón de la habitación quíntuple",
      },
    ],
  },
}

const features = [
  { icon: Wind, label: "Aire Acondicionado" },
  { icon: Bath, label: "Baño Privado" },
  { icon: Tv, label: "DirecTV" },
  { icon: Wifi, label: "WiFi" },
  { icon: Bed, label: "Ropa de Cama" },
  { icon: Users, label: "Servicio Diario" },
]

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
                {features.map((feature, index) => (
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
         
          <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Galería de Imágenes</h2>
          <RoomGallery images={room.images} />
        </section>
      </main>
      <Footer />
    </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-primary/10">
            <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu Estadía</h2>
            <BookingForm initialRoomType={params.slug} />
          </div>
        </div>
  )
}

