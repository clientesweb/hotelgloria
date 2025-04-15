"use client"

import ModernNavigation from "@/components/modern-navigation"
import ImmersiveHero from "@/components/immersive-hero"
import BookingExperience from "@/components/booking-experience"
import RoomShowcase from "@/components/room-showcase"
import FeatureGrid from "@/components/feature-grid"
import ModernGallery from "@/components/modern-gallery"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernFooter from "@/components/modern-footer"
import VideoHotel from "@/components/video-hotel"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      {/* Hero Section */}
      <ImmersiveHero />

      {/* Video Hotel Section */}
      <VideoHotel
        videoPath="/video-hotel.mp4"
        title="Descubre Hotel Gloria"
        description="Un recorrido por nuestras instalaciones y los hermosos paisajes de Santa Rosa de Calamuchita"
      />

      {/* Booking Section */}
      <section id="booking-section" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Reserva tu Estadía
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Disfruta de una experiencia única en Santa Rosa de Calamuchita
            </motion.p>
          </div>

          <BookingExperience />
        </div>
      </section>

      {/* Rooms Section */}
      <section id="habitaciones" className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestras <span className="gradient-text">Habitaciones</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Espacios diseñados para tu confort y descanso
            </motion.p>
          </div>

          <RoomShowcase />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestras <span className="gradient-text">Instalaciones</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Todo lo que necesitas para una estadía perfecta
            </motion.p>
          </div>

          <FeatureGrid />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestra <span className="gradient-text">Galería</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explora nuestros espacios y descubre la magia de Hotel Gloria
            </motion.p>
          </div>

          <ModernGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lo que dicen <span className="gradient-text">nuestros huéspedes</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experiencias reales de quienes nos visitaron
            </motion.p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Footer */}
      <ModernFooter />
    </div>
  )
}
