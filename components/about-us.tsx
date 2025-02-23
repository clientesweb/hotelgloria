import Image from "next/image"
import { History, Star, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-gloria">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 mb-8">
              Desde 1975, Hotel Gloria ha sido un ícono de hospitalidad en Santa Rosa de Calamuchita, brindando a
              nuestros huéspedes una experiencia única de confort y calidez.
            </p>
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">50 Años de Experiencia</h3>
                  <p className="text-gray-600">
                    Celebramos medio siglo de dedicación a la excelencia en el servicio hotelero, manteniendo viva la
                    tradición de hospitalidad que nos caracteriza.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                  <p className="text-gray-600">
                    Nos enorgullecemos de ofrecer un servicio personalizado que hace que cada huésped se sienta especial
                    y atendido.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pasión por el Servicio</h3>
                  <p className="text-gray-600">
                    Nuestro compromiso con la excelencia se refleja en cada detalle, desde la limpieza hasta la atención
                    al cliente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tradición Familiar</h3>
                  <p className="text-gray-600">
                    Una empresa familiar que ha pasado de generación en generación, manteniendo los valores y la calidad
                    que nos distinguen.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Conoce Nuestra Historia</Button>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sobre-nosotros.jpg-DnwRF2bu5RHCjJ8inPnvWWYAj98oE8.jpeg"
              alt="50 años de Hotel Gloria"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2 font-gloria">50 Años de Excelencia</h3>
              <p className="text-sm">Celebrando medio siglo de hospitalidad y servicio excepcional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

