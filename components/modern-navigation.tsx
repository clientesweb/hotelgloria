"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

export default function ModernNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Handle scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/habitaciones", label: "Habitaciones" },
    { path: "/sobre-nosotros", label: "Nosotros" },
    { path: "/galeria", label: "Galería" },
    { path: "/contacto", label: "Contacto" },
  ]

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg h-20 border-b border-border/50"
          : "bg-transparent h-24",
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Link href="/" className="flex items-center justify-center relative z-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nw6xnOD7qQH4Wg5kEU8lEv9utHAltp.png"
              alt="Hotel Gloria"
              width={180}
              height={60}
              className={cn("h-12 w-auto transition-all", !isScrolled && theme !== "dark" && "brightness-0 invert")}
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex space-x-1 mr-4">
            {navItems.map((item, i) => (
              <motion.div key={item.path} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
                <Link
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive(item.path)
                      ? "text-primary font-bold"
                      : !isScrolled && theme !== "dark"
                        ? "text-white hover:text-primary"
                        : "text-foreground hover:text-primary",
                  )}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={navItemVariants} custom={navItems.length} initial="hidden" animate="visible">
            <Button variant="default" size="sm" className="rounded-full px-6 font-medium">
              Reservar
            </Button>
          </motion.div>

          <motion.div variants={navItemVariants} custom={navItems.length + 1} initial="hidden" animate="visible">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className={cn("transition-colors", !isScrolled && theme !== "dark" ? "text-white" : "text-foreground")}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
              onClick={toggleMenu}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-3/4 max-w-sm bg-background border-l border-border md:hidden z-50 overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      className={cn(
                        "flex items-center py-3 px-4 rounded-lg text-lg font-medium transition-all",
                        isActive(item.path)
                          ? "bg-primary/10 text-primary font-bold"
                          : "hover:bg-primary/5 hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navItems.length, duration: 0.3 }}
                  className="pt-4"
                >
                  <Button className="w-full rounded-lg" size="lg">
                    Reservar Ahora
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

