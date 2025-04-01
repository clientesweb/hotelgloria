"use client"

import type React from "react"

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
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
    icon: Timer,
    title: "Servicio de emergencia",
    description: "Asistencia médica las 24 horas",
  },
  {
    icon: Camera,
    title: "Seguridad",
    description: "Vigilancia por CCTV las 24 horas",
  },
]

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {amenities.map((amenity, index) => (
        <FeatureCard
          key={index}
          icon={amenity.icon}
          title={amenity.title}
          description={amenity.description}
          index={index}
        />
      ))}
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
  index: number
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-border p-6 rounded-xl hover-card"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

