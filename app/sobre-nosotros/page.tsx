"use client"

import ModernNavigation from "@/components/modern-navigation"
import ModernFooter from "@/components/modern-footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Users, Star, Shield, Coffee, Sun } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image src="/sobre-nosotros.jpg" alt="50 años de Hotel Gloria" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-block"
              >
                <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-white text-sm font-medium border border-primary/30">
                  NUESTRA HISTORIA
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                50 Años de <span className="gradient-text">Excelencia</span> en Hospitalidad
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Desde 1975, Hotel Gloria ha sido sinónimo de hospitalidad y servicio excepcional en Santa Rosa de
                Calamuchita, creando memorias inolvidables para nuestros huéspedes.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gradient-border bg-background p-8 rounded-2xl shadow-lg mb-16"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Nuestra Trayectoria</h2>

                <p>
                  El viaje de nuestro hotel comenzó en 1975, cuando el abuelo Adolfo aceptó la oferta de su compra con
                  muchas más dudas que conocimientos en el sector. Con el apoyo de la abuela Olga y sus cuatro hijos, se
                  comenzó a forjar la reputación de nuestro hotel. A lo largo de los años, la dedicación y esfuerzo de
                  toda la familia permitieron que el negocio creciera y se ganara el cariño de nuestros huéspedes.
                </p>

                <p>
                  Tres décadas después, la vida cambió el destino de todos nosotros y la gran responsabilidad del hotel
                  pasó a manos de la siguiente generación. Fue entonces cuando comenzó una etapa de grandes
                  transformaciones, como la incorporación la pileta. Un proyecto que para el abuelo carecía totalmente
                  de sentido, ya que consideraba que el río, a solo una cuadra, era el verdadero atractivo de cualquier
                  visitante de Santa Rosa. Hoy, la pregunta: "tienen pileta?" es la que más aparece y esta anécdota se
                  ha convertido en una de esas historias divertidas que recordamos con cariño.
                </p>

                <p>
                  Durante la pandemia, el hotel cerró sus puertas por primera vez en su historia. Aprovechamos esta
                  pausa para realizar una remodelación significativa en la fachada, lo que renovó por completo la imagen
                  del hotel, dándole un aire fresco y moderno.
                </p>

                <p>
                  Hoy en día, el equipo sigue siendo una gran familia. A lo largo de los años, se han sumado a nuestra
                  labor amigos cercanos, quienes comparten nuestra visión de brindar a los huéspedes experiencias
                  inolvidables en un entorno relajante y acogedor.
                </p>

                <p>
                  Entre todos pulsamos para que nuestros huéspedes se lleve recuerdos memorables como los que tenemos
                  nosotros en este lugar, que es nuestra casa. Creemos que las vacaciones, el disfrute y la diversión,
                  la relajación y la desconexión, son pilares fundamentales para vivir plenamente.
                </p>

                <p className="font-semibold">¡Esperamos puedan encontrarlos con nosotros aquí!</p>

                <p className="text-right font-semibold text-primary text-xl">Familia Fornero.</p>
              </div>
            </motion.div>

            {/* Historical Gallery */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-12">Nuestra Historia en Imágenes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0023.jpg-G7h0WJLWdBlla0TthOB3EQOWqtlAF9.jpeg"
                      alt="Construcción y renovación histórica del Hotel Gloria"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-lg font-medium">Primeras etapas de construcción</p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0027.jpg-HpGjePE4K115KOV2dtSZn8NY6q4YLP.jpeg"
                      alt="Hotel Gloria en sus primeros años"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-lg font-medium">Los primeros años del hotel</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0026.jpg-5b2C7HT2hde4NKPJfqs1YIeyL3u9HD.jpeg"
                      alt="Hotel Gloria en una etapa intermedia"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-lg font-medium">Evolución y crecimiento</p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-actual.jpg-7fsBn1QblT8HZEk9CKC52nwipzGma8.jpeg"
                      alt="Hotel Gloria en la actualidad - Vista nocturna de la fachada renovada"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-lg font-medium">El Hotel Gloria hoy</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
          <div className="noise absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestros <span className="gradient-text">Valores</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Los principios que han guiado nuestro servicio durante más de cinco décadas
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Pasión por el Servicio",
                description:
                  "Nos dedicamos a brindar experiencias excepcionales y memorables para cada uno de nuestros huéspedes.",
              },
              {
                icon: Users,
                title: "Tradición Familiar",
                description:
                  "Mantenemos los valores familiares que han sido la base de nuestro éxito durante más de 50 años.",
              },
              {
                icon: Star,
                title: "Excelencia",
                description:
                  "Buscamos la perfección en cada detalle, desde la limpieza hasta la atención personalizada.",
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
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border p-6 rounded-xl hover-card"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestro <span className="gradient-text">Equipo</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conoce a las personas dedicadas que hacen posible tu experiencia en Hotel Gloria
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "María Fornero",
                role: "Directora General",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Con más de 30 años de experiencia en la industria hotelera, María lidera nuestro equipo con pasión y dedicación.",
              },
              {
                name: "Carlos Rodríguez",
                role: "Gerente de Operaciones",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Experto en gestión hotelera, Carlos asegura que cada aspecto de la operación funcione a la perfección.",
              },
              {
                name: "Ana González",
                role: "Jefa de Recepción",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Ana y su equipo son la primera cara amable que recibe a nuestros huéspedes, garantizando una cálida bienvenida.",
              },
              {
                name: "Luis Martínez",
                role: "Chef Ejecutivo",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Con su experiencia culinaria, Luis crea experiencias gastronómicas memorables para nuestros huéspedes.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border overflow-hidden rounded-xl bg-background hover-card"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}

