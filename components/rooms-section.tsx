import { Bed, Users, Wifi, Wind, Bath, Tv } from "lucide-react"
import RoomCard from "./room-card"

const commonFeatures = [
  {
    Icon: Wind,
    label: "Aire Acondicionado",
  },
  {
    Icon: Bath,
    label: "Baño Privado",
  },
  {
    Icon: Tv,
    label: "DirecTV",
  },
  {
    Icon: Wifi,
    label: "WiFi",
  },
  {
    Icon: Bed,
    label: "Ropa de Cama",
  },
  {
    Icon: Users,
    label: "Servicio Diario",
  },
]

const rooms = [
  {
    title: "Habitación Individual",
    description:
      "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable, con una cama individual y todas las comodidades esenciales.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-individual.jpg-jK2YkGbvhDxZMYXwT8L5NwfRxZPxSH",
    capacity: "1 persona",
    slug: "individual",
  },
  {
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales, aire acondicionado frío-calor, DirecTV y baño privado.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-doble.jpg-HvbQVZoGS2OLxpU0xiX8SpH1zEo5d7",
    capacity: "2 personas",
    slug: "doble",
  },
  {
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos, con todas las comodidades necesarias.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-triple.jpg-863TgS7vrAPdQfGccw6bVrJAbkjkxE",
    capacity: "3 personas",
    slug: "triple",
  },
  {
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con una cama matrimonial y dos individuales, ideal para familias o grupos, con espacio adicional para mayor comodidad.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-cuadruple.jpg-bPZtUrodOhvFJv3kJZP96x5MYUiFI6",
    capacity: "4 personas",
    slug: "cuadruple",
  },
  {
    title: "Habitación Quíntuple",
    description:
      "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas, con múltiples camas y amplio espacio para garantizar una estadía cómoda.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-quintuple.jpg-DnwRF2bu5RHCjJ8inPnvWWYAj98oE8",
    capacity: "5 personas",
    slug: "quintuple",
  },
]

export default function RoomsSection() {
  return (
    <section id="habitaciones" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-gloria">Nuestras Habitaciones</h2>
          <p className="text-xl text-muted-foreground">
            Disfruta de una estadía confortable en nuestras habitaciones cuidadosamente diseñadas, cada una equipada con
            todas las comodidades que necesitas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              title={room.title}
              description={room.description}
              image={room.image}
              capacity={room.capacity}
              features={commonFeatures}
              slug={room.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

