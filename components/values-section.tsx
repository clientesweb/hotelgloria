import { Heart, Users, Star, Shield, Coffee, Sun } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Pasión por el Servicio",
      description:
        "Nos dedicamos a brindar experiencias excepcionales y memorables para cada uno de nuestros huéspedes.",
    },
    {
      icon: Users,
      title: "Tradición Familiar",
      description: "Mantenemos los valores familiares que han sido la base de nuestro éxito durante más de 50 años.",
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle, desde la limpieza hasta la atención personalizada.",
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la honestidad y el respeto mutuo.",
    },
    {
      icon: Coffee,
      title: "Hospitalidad",
      description: "Hacemos que cada huésped se sienta como en casa, con calidez y atención genuina.",
    },
    {
      icon: Sun,
      title: "Innovación",
      description: "Nos adaptamos constantemente para mejorar la experiencia de nuestros huéspedes.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-gloria">Nuestros Valores</h2>
          <p className="text-xl text-muted-foreground">
            Los principios que han guiado nuestro servicio durante más de cinco décadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

