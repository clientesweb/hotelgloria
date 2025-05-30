"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
// Eliminada importación de useMobile
import Image from "next/image"

interface VideoHotelProps {
  videoPath?: string
  title?: string
  description?: string
}

export default function VideoHotel({ videoPath = "/video-hotel.mp4", title, description }: VideoHotelProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar al inicio
    checkMobile()

    // Agregar listener para cambios de tamaño
    window.addEventListener("resize", checkMobile)

    // Limpiar listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Manejar la carga del video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoading(false)
      })
    }
  }, [])

  // Autoplay cuando está en el viewport
  useEffect(() => {
    if (isInView && videoRef.current && !isPlaying && !isLoading) {
      videoRef.current.play().catch(() => {
        // Autoplay fue prevenido, necesitamos interacción del usuario
      })
    }
  }, [isInView, isLoading, isPlaying])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((err) => {
          setError("Error al reproducir el video: " + err.message)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch((err) => {
          setError("Error al entrar en pantalla completa: " + err.message)
        })
      }
    }
  }

  const handleVideoError = () => {
    setError("Error al cargar el video. Por favor, inténtelo de nuevo más tarde.")
    setIsLoading(false)
  }

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="video-hotel">
      {/* Elementos de branding */}
      <div className="absolute -top-24 -right-24 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {(title || description) && (
          <div className="text-center mb-10">
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">{title}</h2>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 -rotate-1 rounded-full"></div>
              </motion.div>
            )}
            {description && (
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="gradient-border bg-background p-2 sm:p-4 rounded-2xl shadow-lg overflow-hidden">
            {/* Logo de marca de agua */}
            <div className="absolute top-4 right-4 z-20 opacity-70">
              <Image src="/logo-small.png" alt="Hotel Gloria" width={60} height={60} className="hidden md:block" />
            </div>

            {/* Indicador de carga (solo en desktop) */}
            {isLoading && !isMobile && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted/20 rounded-xl">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-muted-foreground">Cargando video...</p>
              </div>
            )}

            {/* Indicador de carga simplificado para móvil */}
            {isLoading && isMobile && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/20 rounded-xl">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {error ? (
              <div className="relative aspect-video w-full flex flex-col items-center justify-center bg-red-50 dark:bg-red-950/20 rounded-xl p-6 text-center">
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
                <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                  Reintentar
                </Button>
              </div>
            ) : (
              <div className="relative group">
                <video
                  ref={videoRef}
                  className="w-full aspect-video rounded-xl object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={handleVideoError}
                  playsInline
                  preload="metadata"
                >
                  <source src={videoPath} type="video/mp4" />
                  Tu navegador no soporta videos HTML5
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="flex gap-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white"
                      onClick={handleMute}
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white"
                      onClick={handleFullscreen}
                    >
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Elemento de branding debajo del video */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-primary">Hotel Gloria</span>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
