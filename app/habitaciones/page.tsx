import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import RoomsSection from "@/components/rooms-section"

export default function HabitacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <RoomsSection />
      </main>
      <Footer />
    </div>
  )
}

