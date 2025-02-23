"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `
      Nuevo mensaje de contacto:
      Nombre: ${formData.name}
      Email: ${formData.email}
      Teléfono: ${formData.phone}
      Asunto: ${formData.subject}
      Mensaje: ${formData.message}
    `

    const whatsappNumber = "5493546545435"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-primary/10">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+54 (XXX) XXX-XXXX"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
          <SelectTrigger>
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
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-[150px]"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Enviar Mensaje
      </Button>
    </form>
  )
}

