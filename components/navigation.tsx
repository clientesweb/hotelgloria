"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-primary/10 h-20" : "bg-transparent h-24 text-white",
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
          className={cn("hidden md:flex space-x-8 text-sm font-medium", isScrolled ? "text-secondary" : "text-white")}
        >
          <Link
            href="/"
            className={cn(
              "hover:text-primary transition-colors relative py-2",
              isActive("/") && "text-primary",
              !isActive("/") &&
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
            )}
          >
            Inicio
          </Link>
          <Link
            href="/habitaciones"
            className={cn(
              "hover:text-primary transition-colors relative py-2",
              isActive("/habitaciones") && "text-primary",
              !isActive("/habitaciones") &&
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
            )}
          >
            Habitaciones
          </Link>
          <Link
            href="/sobre-nosotros"
            className={cn(
              "hover:text-primary transition-colors relative py-2",
              isActive("/sobre-nosotros") && "text-primary",
              !isActive("/sobre-nosotros") &&
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
            )}
          >
            Nosotros
          </Link>
          <Link
            href="/galeria"
            className={cn(
              "hover:text-primary transition-colors relative py-2",
              isActive("/galeria") && "text-primary",
              !isActive("/galeria") &&
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
            )}
          >
            Galería
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "hover:text-primary transition-colors relative py-2",
              isActive("/contacto") && "text-primary",
              !isActive("/contacto") &&
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
            )}
          >
            Contacto
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", !isScrolled && "text-white")}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Menú móvil */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleMenu}
      />
      <div
        className={cn(
          "fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col py-4">
          <Link
            href="/"
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              isActive("/") && "text-primary bg-primary/10",
            )}
          >
            Inicio
          </Link>
          <Link
            href="/habitaciones"
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              isActive("/habitaciones") && "text-primary bg-primary/10",
            )}
          >
            Habitaciones
          </Link>
          <Link
            href="/sobre-nosotros"
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              isActive("/sobre-nosotros") && "text-primary bg-primary/10",
            )}
          >
            Nosotros
          </Link>
          <Link
            href="/galeria"
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              isActive("/galeria") && "text-primary bg-primary/10",
            )}
          >
            Galería
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-left",
              isActive("/contacto") && "text-primary bg-primary/10",
            )}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

