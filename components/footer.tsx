import Image from "next/image"
import { Phone, MapPin, Instagram, Mail, Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <Image
              src="/logo.png"
              alt="Hotel Gloria"
              width={180}
              height={60}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Que lindo es sentirte como en tu casa. Un hotel con atención personalizada, ubicado en Santa Rosa de
              Calamuchita.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hotelgloria.santarosa?igsh=OGR1OGgxbDA4bTc4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063555629480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@hotelgloria.com.ar"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Envíanos un email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+5493546545435"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Llámanos"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#habitaciones" className="text-gray-300 hover:text-primary transition-colors">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-300 hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-primary transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dalmacio Velez 50, Santa Rosa de Calamuchita (5196)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+5493546545435" className="hover:text-primary transition-colors">
                  +54 9 3546 54-5435
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@hotelgloria.com.ar" className="hover:text-primary transition-colors">
                  info@hotelgloria.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-300 mb-2">
            &copy; {new Date().getFullYear()} Hotel Gloria. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Powered by{" "}
            <a
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Duality Domain
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

