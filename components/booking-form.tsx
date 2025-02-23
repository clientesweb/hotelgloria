"use client"

import type React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface BookingFormProps {
  initialRoomType?: string
}

const roomTypes = [
  { value: "individual", label: "Habitación Individual" },
  { value: "doble", label: "Habitación Doble" },
  { value: "triple", label: "Habitación Triple" },
  { value: "cuadruple", label: "Habitación Cuádruple" },
  { value: "quintuple", label: "Habitación Quíntuple" },
]

export default function BookingForm({ initialRoomType }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [roomType, setRoomType] = useState(initialRoomType || "")
  const [guests, setGuests] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `
      Nueva reserva para ${roomType}:
      Check-in: ${checkIn ? format(checkIn, "dd/MM/yyyy") : "No seleccionado"}
      Check-out: ${checkOut ? format(checkOut, "dd/MM/yyyy") : "No seleccionado"}
      Huéspedes: ${guests}
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone}
    `

    const whatsappNumber = "5493546545435"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="room-type">Tipo de Habitación</Label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger id="room-type">
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

        <div className="grid gap-2">
          <Label>Check-in</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : "Seleccionar fecha"}
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
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label>Check-out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : "Seleccionar fecha"}
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
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="guests">Huéspedes</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger id="guests">
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

      <div className="grid gap-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input id="name" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+54 (XXX) XXX-XXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
        Reservar Ahora
      </Button>
    </form>
  )
}

