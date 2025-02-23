import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-gloria">Galería</h1>
            <p className="text-xl text-muted-foreground">
              Explora nuestras instalaciones y descubre los espacios que harán de tu estadía una experiencia
              inolvidable.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

