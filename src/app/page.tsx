import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="relative h-[100svh] overflow-hidden">
      <HeroCarousel />
      <Footer />
    </div>
  )
}
