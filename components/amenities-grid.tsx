import {
  PocketIcon as Pool,
  Car,
  Wind,
  Coffee,
  Tv,
  MapPin,
  Gamepad,
  Camera,
  Refrigerator,
  Trees,
  Flame,
  Timer,
} from "lucide-react"

const amenities = [
  {
    icon: Pool,
    title: "Pileta climatizada",
    description: "Descubierta, disponible del 21 de septiembre hasta abril",
  },
  {
    icon: Coffee,
    title: "Desayuno incluido",
    description: "Completo desayuno continental todas las mañanas",
  },
  {
    icon: MapPin,
    title: "Excelente ubicación",
    description: "A una cuadra del río y a dos del centro",
  },
  {
    icon: Car,
    title: "Cocheras cubiertas",
    description: "Estacionamiento techado para huéspedes",
  },
  {
    icon: Trees,
    title: "Amplio parque",
    description: "1000 m² de espacios verdes para disfrutar",
  },
  {
    icon: Gamepad,
    title: "Área de juegos",
    description: "Juegos para los más pequeños",
  },
  {
    icon: Wind,
    title: "Climatización completa",
    description: "Aire acondicionado frío/calor y calefacción central",
  },
  {
    icon: Refrigerator,
    title: "Comodidades en espacio común",
    description: "Espacio común con heladera, vajilla y microondas",
  },
  {
    icon: Tv,
    title: "Entretenimiento",
    description: "DirecTV en habitaciones y codificado en el comedor",
  },
  {
    icon: Flame,
    title: "Asador",
    description: "Área de parrilla para uso de huéspedes",
  },
  {
    icon: Camera,
    title: "Seguridad",
    description: "Vigilancia por CCTV las 24 horas",
  },
]

export default function AmenitiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/10 group"
        >
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
              <amenity.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{amenity.title}</h3>
          </div>
          <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{amenity.description}</p>
        </div>
      ))}
    </div>
  )
}

