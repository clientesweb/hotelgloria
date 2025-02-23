"use client"

import { WhatsappLogo } from "@phosphor-icons/react"

export default function WhatsAppButton() {
  const phoneNumber = "5493546545435"
  const message = "Hola! Me gustaría hacer una consulta sobre el hotel."

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  )
}

