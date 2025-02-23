"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = useCallback((sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // altura del header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Actualizar el hash en la URL sin causar scroll
      window.history.pushState(null, "", `#${sectionId}`)
      setCurrentHash(`#${sectionId}`)
    }
  }, [])

  // Manejar el scroll inicial si hay un hash en la URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
    }
  }, [scrollToSection])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
            setIsMenuOpen(false)
          }}
          className="flex items-center justify-center"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nw6xnOD7qQH4Wg5kEU8lEv9utHAltp.png"
            alt="Hotel Gloria"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </button>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <button
            onClick={() => scrollToSection("inicio")}
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              currentHash === "#inicio" && "text-primary",
            )}
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("habitaciones")}
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              currentHash === "#habitaciones" && "text-primary",
            )}
          >
            Habitaciones
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              currentHash === "#nosotros" && "text-primary",
            )}
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              currentHash === "#galeria" && "text-primary",
            )}
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              currentHash === "#contacto" && "text-primary",
            )}
          >
            Contacto
          </button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col py-4">
          <button
            onClick={() => scrollToSection("inicio")}
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              currentHash === "#inicio" && "text-primary bg-primary/10",
            )}
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("habitaciones")}
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              currentHash === "#habitaciones" && "text-primary bg-primary/10",
            )}
          >
            Habitaciones
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              currentHash === "#nosotros" && "text-primary bg-primary/10",
            )}
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              currentHash === "#galeria" && "text-primary bg-primary/10",
            )}
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              currentHash === "#contacto" && "text-primary bg-primary/10",
            )}
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  )
}

