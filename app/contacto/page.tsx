import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-gloria">Contacto</h1>
            <p className="text-xl text-muted-foreground">
              Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o reserva.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>

        <ContactMap />
      </main>
      <Footer />
    </div>
  )
}

