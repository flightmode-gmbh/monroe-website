export default function Home() {
  return (
    <div>
      {/* <!-- Video Section --> */}
      <section className="video-section">
        <video className="center-video" autoPlay loop muted>
          <source src="monroe-slot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  )
}
