"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Users, Bed, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const roomTypes = [
  { value: "individual", label: "Individual" },
  { value: "doble", label: "Doble" },
  { value: "triple", label: "Triple" },
  {
    value: "cuadruple",
    label: "Cuádruple",
  },
  { value: "quintuple", label: "Quíntuple" },
]

export default function BookingExperience() {
  const [activeTab, setActiveTab] = useState("reserva")
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [roomType, setRoomType] = useState("")
  const [guests, setGuests] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `
      Nueva reserva para ${roomType}:
      Check-in: ${checkIn ? format(checkIn, "dd/MM/yyyy") : "No seleccionado"}
      Check-out: ${checkOut ? format(checkOut, "dd/MM/yyyy") : "No seleccionado"}
      Huéspedes: ${guests}
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone}
    `

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      const whatsappNumber = "5493546545435"
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      setIsSubmitting(false)
      setCurrentStep(1)
    }, 800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="gradient-border bg-background p-1 rounded-2xl shadow-xl">
        <Tabs defaultValue="reserva" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 p-1 bg-muted rounded-xl">
            <TabsTrigger value="reserva" className="rounded-lg text-base py-3">
              Reserva
            </TabsTrigger>
            <TabsTrigger value="consulta" className="rounded-lg text-base py-3">
              Consulta
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reserva" className="p-6">
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Selecciona tus fechas</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-base">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        Check-in
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal h-14 rounded-xl"
                          >
                            {checkIn ? format(checkIn, "PPP", { locale: es }) : "Seleccionar fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={(date) => {
                              setCheckIn(date)
                              const popover = document.querySelector('[data-state="open"]')
                              if (popover) {
                                ;(popover as HTMLElement).click()
                              }
                            }}
                            initialFocus
                            locale={es}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-base">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        Check-out
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal h-14 rounded-xl"
                          >
                            {checkOut ? format(checkOut, "PPP", { locale: es }) : "Seleccionar fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={(date) => {
                              setCheckOut(date)
                              const popover = document.querySelector('[data-state="open"]')
                              if (popover) {
                                ;(popover as HTMLElement).click()
                              }
                            }}
                            initialFocus
                            locale={es}
                            disabled={(date) => {
                              return (
                                date < new Date(new Date().setHours(0, 0, 0, 0)) || (checkIn ? date <= checkIn : false)
                              )
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="room-type" className="flex items-center gap-2 text-base">
                        <Bed className="h-5 w-5 text-primary" />
                        Tipo de Habitación
                      </Label>
                      <Select value={roomType} onValueChange={setRoomType}>
                        <SelectTrigger id="room-type" className="h-14 rounded-xl">
                          <SelectValue placeholder="Seleccionar habitación" />
                        </SelectTrigger>
                        <SelectContent>
                          {roomTypes.map((room) => (
                            <SelectItem key={room.value} value={room.value}>
                              {room.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="flex items-center gap-2 text-base">
                        <Users className="h-5 w-5 text-primary" />
                        Huéspedes
                      </Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger id="guests" className="h-14 rounded-xl">
                          <SelectValue placeholder="Número de huéspedes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Huésped</SelectItem>
                          <SelectItem value="2">2 Huéspedes</SelectItem>
                          <SelectItem value="3">3 Huéspedes</SelectItem>
                          <SelectItem value="4">4 Huéspedes</SelectItem>
                          <SelectItem value="5">5 Huéspedes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="rounded-xl px-8 py-6 text-base font-medium"
                      disabled={!checkIn || !checkOut || !roomType || !guests}
                    >
                      Continuar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Tus datos</h3>

                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-14 rounded-xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 rounded-xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+54 (XXX) XXX-XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-14 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handlePrevStep} className="rounded-xl px-6">
                      Volver
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-xl px-8 py-6 text-base font-medium"
                      disabled={isSubmitting || !name || !email || !phone}
                    >
                      {isSubmitting ? "Procesando..." : "Completar Reserva"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </TabsContent>

          <TabsContent value="consulta" className="p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const message = `Consulta de ${name}:\nEmail: ${email}\nTeléfono: ${phone}`
                const whatsappNumber = "5493546545435"
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, "_blank")
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Envíanos tu consulta</h3>

              <div className="space-y-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="name-query" className="text-base">
                    Nombre completo
                  </Label>
                  <Input
                    id="name-query"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-query" className="text-base">
                    Email
                  </Label>
                  <Input
                    id="email-query"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone-query" className="text-base">
                    Teléfono
                  </Label>
                  <Input
                    id="phone-query"
                    type="tel"
                    placeholder="+54 (XXX) XXX-XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Mensaje
                  </Label>
                  <textarea
                    id="message"
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full min-h-[150px] rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="rounded-xl px-8 py-6 text-base font-medium">
                  Enviar Consulta
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}

