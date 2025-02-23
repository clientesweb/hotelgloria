import type { LucideIcon } from "lucide-react"

interface RoomFeature {
  Icon: LucideIcon
  label: string
}

interface RoomFeaturesProps {
  features: RoomFeature[]
}

export default function RoomFeatures({ features }: RoomFeaturesProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="mb-2 text-primary">
            <feature.Icon className="h-5 w-5" />
          </div>
          <span className="text-sm text-muted-foreground">{feature.label}</span>
        </div>
      ))}
    </div>
  )
}

