"use client"

import type React from "react"

import Image from "next/image"
import { Phone, MapPin, Instagram, Mail, Facebook, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function ModernFooter() {
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de suscripción
    alert("¡Gracias por suscribirte!")
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Curved top */}
      <div className="curve-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="bg-slate-900 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nw6xnOD7qQH4Wg5kEU8lEv9utHAltp.png"
                  alt="Hotel Gloria"
                  width={180}
                  height={60}
                  className="h-12 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-slate-300 mb-6 max-w-md">
                  Que lindo es sentirte como en tu casa. Un hotel con atención personalizada, ubicado en Santa Rosa de
                  Calamuchita, a una cuadra del río y a dos del centro.
                </p>

                <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
                  <Input
                    type="email"
                    placeholder="Tu email"
                    className="bg-slate-800 border-slate-700 text-white h-12 rounded-l-full rounded-r-none"
                    required
                  />
                  <Button type="submit" className="rounded-l-none rounded-r-full">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/hotelgloria.santarosa?igsh=OGR1OGgxbDA4bTc4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 p-2 rounded-full text-slate-300 hover:text-primary transition-colors"
                    aria-label="Síguenos en Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/HotelGloriaCalamuchita/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 p-2 rounded-full text-slate-300 hover:text-primary transition-colors"
                    aria-label="Síguenos en Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:info@hotelgloria.com.ar"
                    className="bg-slate-800 p-2 rounded-full text-slate-300 hover:text-primary transition-colors"
                    aria-label="Envíanos un email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="tel:+5493546545435"
                    className="bg-slate-800 p-2 rounded-full text-slate-300 hover:text-primary transition-colors"
                    aria-label="Llámanos"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-6 text-white">Enlaces Rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/habitaciones"
                    className="text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Habitaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre-nosotros"
                    className="text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galeria"
                    className="text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Galería
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Contacto
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-bold text-lg mb-6 text-white">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Dalmacio Velez 50, Santa Rosa de Calamuchita (5196)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+5493546545435" className="text-slate-300 hover:text-primary transition-colors block">
                      Celular: +54 9 3546 54-5435
                    </a>
                    <a href="tel:+543546420214" className="text-slate-300 hover:text-primary transition-colors block">
                      Línea: 03546-420214
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <a
                    href="mailto:info@hotelgloria.com.ar"
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    info@hotelgloria.com.ar
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0 text-center md:text-left">
              &copy; {currentYear} Hotel Gloria. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-sm"
              >
                Powered by Duality Domain
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

