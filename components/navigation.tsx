"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Manejar el scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md h-20" : "bg-transparent h-24 text-white",
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center relative z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nw6xnOD7qQH4Wg5kEU8lEv9utHAltp.png"
            alt="Hotel Gloria"
            width={180}
            height={60}
            className={cn("h-12 w-auto transition-all", !isScrolled && "brightness-0 invert")}
            priority
          />
        </Link>
        <div
          className={cn("hidden md:flex space-x-8 text-sm font-medium", isScrolled ? "text-slate-800" : "text-white")}
        >
          {[
            { path: "/", label: "Inicio" },
            { path: "/habitaciones", label: "Habitaciones" },
            { path: "/sobre-nosotros", label: "Nosotros" },
            { path: "/galeria", label: "Galería" },
            { path: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "hover:text-primary transition-colors relative py-2",
                isActive(item.path) && "text-primary font-semibold",
                !isActive(item.path) &&
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", !isScrolled && "text-white")}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Menú móvil con animación */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleMenu}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-white shadow-lg md:hidden overflow-y-auto"
      >
        <div className="flex flex-col py-4">
          {[
            { path: "/", label: "Inicio" },
            { path: "/habitaciones", label: "Habitaciones" },
            { path: "/sobre-nosotros", label: "Nosotros" },
            { path: "/galeria", label: "Galería" },
            { path: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-6 py-4 hover:bg-primary/10 hover:text-primary transition-colors text-left border-b border-gray-100",
                isActive(item.path) && "text-primary bg-primary/5 font-medium",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-6 px-6">
            <Link href="#booking-section">
              <Button className="w-full" size="lg">
                Reservar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

