"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "¿Cuál es el horario de check-in y check-out?",
    answer:
      "El check-in es a partir de las 13:00 hs y el check-out es hasta las 10:00 hs. Si necesitas un horario diferente, contáctanos y haremos lo posible por acomodarnos a tus necesidades.",
  },
  {
    question: "¿El hotel cuenta con estacionamiento?",
    answer:
      "Sí, contamos con cocheras cubiertas para nuestros huéspedes sin costo adicional. Por favor, infórmanos si necesitarás estacionamiento al momento de hacer tu reserva.",
  },
  {
    question: "¿Se permiten mascotas?",
    answer:
      "Se permiten mascotas: En temporada baja aceptamos mascotas. En temporada alta (enero, febrero y fines de semana largos) lamentablemente no.",
  },
  {
    question: "¿Ofrecen servicio de traslado desde el aeropuerto?",
    answer:
      "No ofrecemos servicio de traslado directo, pero podemos ayudarte a coordinar el transporte con empresas locales de confianza. Contáctanos para más información.",
  },
  {
    question: "¿Hay WiFi disponible en las habitaciones?",
    answer: "Sí, ofrecemos WiFi gratuito de alta velocidad en todas las habitaciones y áreas comunes del hotel.",
  },
  {
    question: "¿Qué opciones de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjetas de crédito (Visa, MasterCard, American Express) y transferencias bancarias. Para reservas online pedimos una transferencia a modo de seña por el 30% del valor de la estadía.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer: `• Si la reserva se cancela con más de 10 días de anticipación, se reintegra todo el dinero de la seña.

• Si la reserva se cancela entre 5 y 10 días de anticipación, la seña puede ser utilizada para una reserva futura (dentro del mismo año). No se reintegra el dinero.

• Si cancela con menos de 5 días de anticipación o no se presenta, no hay reintegro y no se puede utilizar el dinero de la seña en un futuro.

• Si el día que comienza su estadía, los planes cambiaron y quiere irse antes, deberá abonar las noches que se hospede más una noche de multa.`,
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-gloria">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-primary transition-transform",
                    openIndex === index && "transform rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-[500px] py-4" : "max-h-0",
                )}
              >
                <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

