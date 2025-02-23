import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutBanner from "@/components/about-banner"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"
import TimelineSection from "@/components/timeline-section"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <AboutBanner />
        <TimelineSection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

