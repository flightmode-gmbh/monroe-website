import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <section className="video-section mb-28 md:mb-0">
        <video className="center-video" autoPlay loop muted playsInline>
          <source src="monroe-slot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <Footer />
    </>
  )
}
