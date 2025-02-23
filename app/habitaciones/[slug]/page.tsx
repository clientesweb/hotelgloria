import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Bed, Users, Wifi, Wind, Bath, Tv, ChevronLeft, Coffee, Refrigerator } from "lucide-react"
import BookingForm from "@/components/booking-form"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const rooms = [
  {
    slug: "individual",
    title: "Habitación Individual",
    description:
      "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable, con una cama individual y todas las comodidades esenciales.",
    capacity: "1 persona",
    bed: "1 cama individual",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "doble",
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales, aire acondicionado frío-calor, DirecTV y baño privado.",
    capacity: "2 personas",
    bed: "1 cama matrimonial o 2 camas individuales",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "triple",
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos, con todas las comodidades necesarias.",
    capacity: "3 personas",
    bed: "1 cama matrimonial y 1 cama individual",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "cuadruple",
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con una cama matrimonial y dos individuales, ideal para familias o grupos, con espacio adicional para mayor comodidad.",
    capacity: "4 personas",
    bed: "1 cama matrimonial y 2 camas individuales",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "quintuple",
    title: "Habitación Quíntuple",
    description:
      "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas, con múltiples camas y amplio espacio para garantizar una estadía cómoda.",
    capacity: "5 personas",
    bed: "1 cama matrimonial y 3 camas individuales",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

const features = [
  { Icon: Wind, label: "Aire Acondicionado" },
  { Icon: Bath, label: "Baño Privado" },
  { Icon: Tv, label: "DirecTV" },
  { Icon: Wifi, label: "WiFi" },
  { Icon: Bed, label: "Ropa de Cama" },
  { Icon: Users, label: "Servicio Diario" },
  { Icon: Coffee, label: "Desayuno Incluido" },
  { Icon: Refrigerator, label: "Frigobar" },
]

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug)

  if (!room) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/habitaciones" passHref>
            <Button variant="ghost" className="pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Habitaciones
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-6">{room.title}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden cursor-pointer">
                  <Image src={room.images[0] || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="relative aspect-video">
                  <Image src={room.images[0] || "/placeholder.svg"} alt={room.title} fill className="object-contain" />
                </div>
              </DialogContent>
            </Dialog>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1).map((img, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${room.title} - imagen ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative aspect-video">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${room.title} - imagen ${index + 2}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg mb-4">{room.description}</p>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Detalles de la Habitación</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span>Capacidad: {room.capacity}</span>
                </li>
                <li className="flex items-center">
                  <Bed className="h-5 w-5 text-primary mr-2" />
                  <span>Camas: {room.bed}</span>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Características</h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.Icon className="h-5 w-5 text-primary mr-2" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <BookingForm initialRoomType={room.slug} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

