import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import RoomFeatures from "./room-features"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface RoomCardProps {
  title: string
  description: string
  image: string
  capacity: string
  features: {
    Icon: LucideIcon
    label: string
  }[]
  slug: string
}

export default function RoomCard({ title, description, image, capacity, features, slug }: RoomCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md group h-full">
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover transition-transform duration-700 group-hover:scale-110 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-2xl font-bold text-white">{title}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-6">
          <p className="mb-4 text-slate-600 line-clamp-3">{description}</p>
          <div className="mb-6">
            <RoomFeatures features={features} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Capacidad máxima</p>
            <p className="font-semibold">{capacity}</p>
            <p className="text-sm text-primary mt-1">Consultar disponibilidad</p>
          </div>
          <Link href={`/habitaciones/${slug}`}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Ver Detalles
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

