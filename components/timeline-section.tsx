export default function TimelineSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gloria">Nuestra Trayectoria</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p>
              El viaje de nuestro hotel comenzó en 1975, cuando el abuelo Adolfo aceptó la oferta de su compra con
              muchas más dudas que conocimientos en el sector. Con el apoyo de la abuela Olga y sus cuatro hijos, se
              comenzó a forjar la reputación de nuestro hotel. A lo largo de los años, la dedicación y esfuerzo de toda
              la familia permitieron que el negocio creciera y se ganara el cariño de nuestros huéspedes.
            </p>

            <p>
              Tres décadas después, la vida cambió el destino de todos nosotros y la gran responsabilidad del hotel pasó
              a manos de la siguiente generación. Fue entonces cuando comenzó una etapa de grandes transformaciones,
              como la incorporación la pileta. Un proyecto que para el abuelo carecía totalmente de sentido, ya que
              consideraba que el río, a solo una cuadra, era el verdadero atractivo de cualquier visitante de Santa
              Rosa. Hoy, la pregunta: "tienen pileta?" es la que más aparece y esta anécdota se ha convertido en una de
              esas historias divertidas que recordamos con cariño.
            </p>

            <p>
              Durante la pandemia, el hotel cerró sus puertas por primera vez en su historia. Aprovechamos esta pausa
              para realizar una remodelación significativa en la fachada, lo que renovó por completo la imagen del
              hotel, dándole un aire fresco y moderno.
            </p>

            <p>
              Hoy en día, el equipo sigue siendo una gran familia. A lo largo de los años, se han sumado a nuestra labor
              amigos cercanos, quienes comparten nuestra visión de brindar a los huéspedes experiencias inolvidables en
              un entorno relajante y acogedor.
            </p>

            <p>
              Entre todos pulsamos para que nuestros huéspedes se lleve recuerdos memorables como los que tenemos
              nosotros en este lugar, que es nuestra casa. Creemos que las vacaciones, el disfrute y la diversión, la
              relajación y la desconexión, son pilares fundamentales para vivir plenamente.
            </p>

            <p className="font-semibold">¡Esperamos puedan encontrarlos con nosotros aquí!</p>

            <p className="text-right font-semibold text-primary text-xl">Familia Fornero.</p>
          </div>
        </div>

        {/* Galería histórica */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-gloria">Nuestra Historia en Imágenes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0023.jpg-G7h0WJLWdBlla0TthOB3EQOWqtlAF9.jpeg"
                  alt="Construcción y renovación histórica del Hotel Gloria"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white text-sm">Primeras etapas de construcción</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0027.jpg-HpGjePE4K115KOV2dtSZn8NY6q4YLP.jpeg"
                  alt="Hotel Gloria en sus primeros años"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white text-sm">Los primeros años del hotel</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0026.jpg-5b2C7HT2hde4NKPJfqs1YIeyL3u9HD.jpeg"
                  alt="Hotel Gloria en una etapa intermedia"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white text-sm">Evolución y crecimiento</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0025.jpg-26fC9gbdM8z8rknpiYE6vfALwZqM0m.jpeg"
                  alt="Hotel Gloria en la actualidad"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white text-sm">El Hotel Gloria hoy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

