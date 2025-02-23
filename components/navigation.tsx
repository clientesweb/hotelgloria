"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Hotel Gloria"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="text-secondary hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="#habitaciones" className="text-secondary hover:text-primary transition-colors">
            Habitaciones
          </Link>
          <Link href="#nosotros" className="text-secondary hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="#galeria" className="text-secondary hover:text-primary transition-colors">
            Galería
          </Link>
          <Link href="#contacto" className="text-secondary hover:text-primary transition-colors">
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
            className="px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            href="#habitaciones"
            className="px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Habitaciones
          </Link>
          <Link
            href="#nosotros"
            className="px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Nosotros
          </Link>
          <Link
            href="#galeria"
            className="px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Galería
          </Link>
          <Link
            href="#contacto"
            className="px-6 py-3 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

