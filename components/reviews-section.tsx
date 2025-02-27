"use client"

import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import { Button } from "@/components/ui/button"

// Actualizar los datos de las reseñas con reseñas reales de Google
const reviews = [
  {
    name: "Diego Ferrero",
    avatar: "/avatar-1.png",
    rating: 5,
    date: "hace 2 semanas",
    comment:
      "El hotel es hermoso, ambiente super tranquilo. Muy buena atención, muy amables. Las habitaciones son cómodas, con todos los servicios. Cuenta con comedor y espacios comunes con todas las comodidades y cochera. El hotel está ubicado a una cuadra del río y a pocas cuadras del centro. Muy buena experiencia.",
    images: [],
  },
  {
    name: "Laura Bringas",
    avatar: "/avatar-2.png",
    rating: 5,
    date: "hace 1 mes",
    comment:
      "Un lugar bellísimo para compartir en familia, solos o en pareja. Cerca del centro y del río. Muy buen personal atentos a sus huéspedes en todo momento. Un lugar digno de volver, ya que sus anfitriones te hacen sentir como en casa.",
    images: [],
  },
  {
    name: "Ricardo Alfredo Trivellin",
    avatar: "/avatar-3.png",
    rating: 5,
    date: "hace 2 meses",
    comment:
      "Realmente es un hotel familiar atendido por sus dueños y los colaboradores son muy amables. Dignos de recomendar. La amabilidad es fuera de serie. Y he recorrido unos cuantos lugares de argentina. Y creo humildemente que este hotel debería tener mejor puntuación. Volveremos. Y gracias.",
    images: [],
  },
]

// Actualizar los datos de calificación
const averageRating = 4.7
const totalReviews = 968

// Actualizar la distribución de calificaciones
const ratingDistribution = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
]

// Modificar el botón "Cargar más reseñas"
const handleLoadMoreReviews = () => {
  window.open(
    "https://www.google.com/travel/hotels/opiniones%20de%20hotel%20gloria/entity/CgsIla3v2MX4sJHmARAB/reviews?g2lb=4965990,4969803,72277293,72302247,72317059,72406588,72414906,72421566,72471280,72472051,72481459,72485658,72560029,72573224,72616120,72647020,72648289,72686036,72736535,72760082,72803964,72808078,72825294,72827241,72832976,72882230,72885031&hl=es-419&gl=ar&ssta=1&q=opiniones+de+hotel+gloria&ts=CAEaRwopEicyJTB4OTQzMjk4NmY5ZWI5MGY2NzoweGU2MjJjM2M0NWIxYmQ2OTUSGhIUCgcI6Q8QAxgGEgcI6Q8QAxgHGAEyAhAA&rp=EJWt79jF-LCR5gE4AkAASAHAAQLqAQdnZW5lcmFs&ictx=1",
    "_blank",
  )
}

export default function ReviewsSection() {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-gloria text-center">
              Reseñas de Google
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(averageRating)}</div>
                <span className="text-xl font-semibold">{averageRating}</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-gray-300" />
              <div className="text-gray-600 text-sm sm:text-base">{totalReviews} reseñas</div>
            </div>

            {/* Rating Distribution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 max-w-3xl mx-auto mb-12">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm">{item.stars}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{item.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Reviews List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                      unoptimized
                    />
                    <div>
                      <h3 className="font-semibold text-sm">{review.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span>·</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                  {review.images.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {review.images.map((image, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={image || "/placeholder.svg"}
                          alt={`Imagen de reseña ${imgIndex + 1}`}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                          unoptimized
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="text-sm px-6 py-2 hover:bg-primary/5"
                onClick={handleLoadMoreReviews}
              >
                Ver más reseñas en Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

