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
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nw6xnOD7qQH4Wg5kEU8lEv9utHAltp.png"
            alt="Hotel Gloria"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link
            href="/"
            className={cn("text-secondary hover:text-primary transition-colors", isActive("/") && "text-primary")}
          >
            Inicio
          </Link>
          <Link
            href="/habitaciones"
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              isActive("/habitaciones") && "text-primary",
            )}
          >
            Habitaciones
          </Link>
          <Link
            href="/sobre-nosotros"
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              isActive("/sobre-nosotros") && "text-primary",
            )}
          >
            Nosotros
          </Link>
          <Link
            href="/galeria"
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              isActive("/galeria") && "text-primary",
            )}
          >
            Galería
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              isActive("/contacto") && "text-primary",
            )}
          >
            Contacto
          </Link>
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

