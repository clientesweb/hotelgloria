import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
      <Icon className="h-8 w-8 text-primary flex-shrink-0" />
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

