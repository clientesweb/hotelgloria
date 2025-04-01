"use client"

import ModernNavigation from "@/components/modern-navigation"
import ModernFooter from "@/components/modern-footer"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Contacto</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o reserva.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gradient-border bg-background p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" className="h-12 rounded-xl" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="h-12 rounded-xl" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+54 (XXX) XXX-XXXX"
                      className="h-12 rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Select>
                      <SelectTrigger id="subject" className="h-12 rounded-xl">
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reserva">Consulta de reserva</SelectItem>
                        <SelectItem value="informacion">Información general</SelectItem>
                        <SelectItem value="grupos">Reservas para grupos</SelectItem>
                        <SelectItem value="eventos">Eventos especiales</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="¿En qué podemos ayudarte?"
                      className="min-h-[150px] rounded-xl"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-xl h-12">
                    Enviar Mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="gradient-border bg-background p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:+5493546545435"
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          Celular: +54 9 3546 54-5435
                        </a>
                        <a
                          href="tel:+543546420214"
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          Línea: 03546-420214
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@hotelgloria.com.ar"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@hotelgloria.com.ar
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

              <div className="gradient-border bg-background p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Horarios de Atención</h2>
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
                      <p className="text-muted-foreground">Check-in: 13:00 hs</p>
                      <p className="text-muted-foreground">Check-out: 10:00 hs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg gradient-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.6893018229387!2d-64.54267482342726!3d-32.07246197379147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432986f9eb90f67%3A0xe622c3c45b1bd695!2sHotel%20Gloria!5e0!3m2!1ses-419!2sar!4v1708716283040!5m2!1ses-419!2sar"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}

