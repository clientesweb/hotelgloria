import { Phone, MapPin, Instagram, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import RoomsSection from "@/components/rooms-section"
import BookingForm from "@/components/booking-form"
import GalleryGrid from "@/components/gallery-grid"
import HeroSlider from "@/components/hero-slider"
import AmenitiesGrid from "@/components/amenities-grid"
import AboutUs from "@/components/about-us"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import ReviewsSection from "@/components/reviews-section"
import InstagramReels from "@/components/instagram-reels"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSlider />

      {/* Booking Form Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg -mt-32 relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu Estadía</h2>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="habitaciones" className="py-24 bg-muted/50">
        <RoomsSection />
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 bg-muted">
        <AboutUs />
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gloria">Nuestras Instalaciones</h2>
          <AmenitiesGrid />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gloria">Galería</h2>
          <GalleryGrid />
        </div>
      </section>

      {/* Instagram Reels Section */}
      <InstagramReels />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-gloria">Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <div>
                      <a href="tel:+5493546545435" className="text-gray-600 hover:text-primary transition-colors block">
                        Celular: +54 9 3546 54-5435
                      </a>
                      <a href="tel:+543546420214" className="text-gray-600 hover:text-primary transition-colors block">
                        Línea: 03546-420214
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:info@hotelgloria.com.ar"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      info@hotelgloria.com.ar
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-gray-600">Dalmacio Velez 50, Santa Rosa de Calamuchita (5196)</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.instagram.com/hotelgloria.santarosa?igsh=OGR1OGgxbDA4bTc4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Button variant="outline" size="icon">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://www.hotelgloria.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.6893018229387!2d-64.54267482342726!3d-32.07246197379147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432986f9eb90f67%3A0xe622c3c45b1bd695!2sHotel%20Gloria!5e0!3m2!1ses-419!2sar!4v1708716283040!5m2!1ses-419!2sar"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

