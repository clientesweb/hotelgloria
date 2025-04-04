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
      "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable.",
    image: "/habitacion-individual.jpg",
    capacity: "1 persona",
    slug: "individual",
  },
  {
    title: "Habitación Doble",
    description:
      "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales.",
    image: "/habitacion-dobles.jpg",
    capacity: "2 personas",
    slug: "doble",
  },
  {
    title: "Habitación Triple",
    description:
      "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos.",
    image: "/habitacion-triples.jpg",
    capacity: "3 personas",
    slug: "triple",
  },
  {
    title: "Habitación Cuádruple",
    description:
      "Amplia habitación familiar con 2 ambientes, uno con cama matrimonial y otro con dos camas individuales. Ideal para familias o grupos.",
    image: "/habitacion-cuadruples.jpg",
    capacity: "4 personas",
    slug: "cuadruple",
  },
  {
    title: "Habitación Quíntuple",
    description: "Compuesta de dos ambientes, uno con cama matrimonial y otro con 3 camas individuales",
    image: "/habitacion-quintuples.jpg",
    capacity: "5 personas",
    slug: "quintuple",
  },
]

export default function RoomsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-gloria">Nuestras Habitaciones</h2>
          <p className="text-xl text-muted-foreground">
            Disfruta de una estadía confortable en nuestras habitaciones cuidadosamente diseñadas.
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

