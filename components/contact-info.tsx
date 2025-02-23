import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-primary/10">
        <h2 className="text-2xl font-semibold mb-6 font-gloria">Información de Contacto</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Teléfono</h3>
              <a href="tel:+5493546545435" className="text-muted-foreground hover:text-primary transition-colors">
                +54 9 3546 54-5435
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a
                href="mailto:info@hotelgloria.ar"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@hotelgloria.ar
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Dirección</h3>
              <p className="text-muted-foreground">Dalmacio Velez 50, Santa Rosa de Calamuchita (5196)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-primary/10">
        <h2 className="text-2xl font-semibold mb-6 font-gloria">Horarios de Atención</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Recepción</h3>
              <p className="text-muted-foreground">24 horas, todos los días</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Check-in / Check-out</h3>
              <p className="text-muted-foreground">Check-in: 14:00 hs</p>
              <p className="text-muted-foreground">Check-out: 10:00 hs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

