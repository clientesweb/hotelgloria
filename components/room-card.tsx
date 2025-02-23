import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import RoomFeatures from "./room-features"
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
  const handleViewDetails = () => {
    window.location.href = `https://hotelgloria.ar/habitaciones/${slug}`
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10">
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-2xl font-bold text-white font-gloria">{title}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-6">
          <p className="mb-4 text-muted-foreground">{description}</p>
          <div className="mb-6">
            <RoomFeatures features={features} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Capacidad máxima</p>
            <p className="font-semibold">{capacity}</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleViewDetails}>
            Ver Detalles
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

