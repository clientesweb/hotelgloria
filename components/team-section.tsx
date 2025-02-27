import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "María Fornero",
      role: "Directora General",
      image: "/placeholder.svg",
      bio: "Con más de 30 años de experiencia en la industria hotelera, María lidera nuestro equipo con pasión y dedicación.",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente de Operaciones",
      image: "/placeholder.svg",
      bio: "Experto en gestión hotelera, Carlos asegura que cada aspecto de la operación funcione a la perfección.",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Ana González",
      role: "Jefa de Recepción",
      image: "/placeholder.svg",
      bio: "Ana y su equipo son la primera cara amable que recibe a nuestros huéspedes, garantizando una cálida bienvenida.",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Luis Martínez",
      role: "Chef Ejecutivo",
      image: "/placeholder.svg",
      bio: "Con su experiencia culinaria, Luis crea experiencias gastronómicas memorables para nuestros huéspedes.",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-gloria">Nuestro Equipo</h2>
          <p className="text-xl text-muted-foreground">
            Conoce a las personas dedicadas que hacen posible tu experiencia en Hotel Gloria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-primary/10 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

