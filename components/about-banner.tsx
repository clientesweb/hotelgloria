import Image from "next/image"

export default function AboutBanner() {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <Image
        src="/sobre-nosotros.jpg"
        alt="50 años de Hotel Gloria"
        fill
        priority
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-semibold mb-4">NUESTRA HISTORIA</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-gloria">
              50 Años de Excelencia en Hospitalidad
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Desde 1975, Hotel Gloria ha sido sinónimo de hospitalidad y servicio excepcional en Santa Rosa de
              Calamuchita, creando memorias inolvidables para nuestros huéspedes.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20" />
    </div>
  )
}

