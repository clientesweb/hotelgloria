import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import RoomsSection from "@/components/rooms-section"
import RoomsBanner from "@/components/rooms-banner"

export default function HabitacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <RoomsBanner />
        <RoomsSection />
      </main>
      <Footer />
    </div>
  )
}

