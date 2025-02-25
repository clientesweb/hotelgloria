export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "1975",
      title: "Fundación del Hotel Gloria",
      description:
        "La familia Fornero inicia este sueño con la visión de crear un espacio acogedor para los visitantes de Santa Rosa de Calamuchita.",
    },
    {
      year: "1985",
      title: "Primera Expansión",
      description:
        "Se amplían las instalaciones para incluir más habitaciones y se construye la primera versión de nuestra icónica piscina.",
    },
    {
      year: "1995",
      title: "Renovación Completa",
      description:
        "Se moderniza completamente el hotel, manteniendo su encanto tradicional pero incorporando nuevas comodidades.",
    },
    {
      year: "2005",
      title: "30 Años de Excelencia",
      description:
        "Celebramos tres décadas de servicio con una renovación completa de nuestras habitaciones y áreas comunes.",
    },
    {
      year: "2015",
      title: "Modernización Digital",
      description:
        "Implementamos nuevas tecnologías para mejorar la experiencia de nuestros huéspedes, incluyendo WiFi de alta velocidad en todas las áreas.",
    },
    {
      year: "2025",
      title: "Mirando al Futuro",
      description:
        "Nos preparamos para el futuro con un compromiso renovado con la sostenibilidad y la excelencia en el servicio.",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gloria">Nuestra Trayectoria</h2>
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-primary/20" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative ${index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"}`}
              >
                <div
                  className={`flex flex-col md:w-1/2 ${
                    index % 2 === 0 ? "md:items-start" : "md:items-end"
                  } relative z-10`}
                >
                  <div
                    className={`bg-white p-6 rounded-lg shadow-lg border border-primary/10 ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  {/* Punto en la línea del tiempo */}
                  <div className="absolute top-8 w-8 h-8 rounded-full bg-primary border-4 border-white shadow md:left-4 left-1/2 -translate-x-1/2 md:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

