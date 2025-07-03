import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* <!-- Logo --> */}
      <header className="logo">
        <Image
          src="/logo.png"
          alt="Monroe Zürich Logo – Karaoke Bar in Zürich"
          width={300}
          height={10}
        />
      </header>

      <h1 className="sr-only">
        Monroe Zürich – Karaoke Bar with Cocktails, Bites & Nightlife in Zürich
      </h1>
      <p className="sr-only">
        Experience Monroe Zürich, a vibrant karaoke bar located in the heart of
        Kreis 4. Enjoy unforgettable nights with live karaoke, handcrafted
        cocktails, delicious bites, and a buzzing crowd. Whether you&apos;re
        celebrating with friends or just dropping by, Monroe Zürich offers the
        perfect mix of music, drinks, and energy in one of Zurich’s liveliest
        neighborhoods.
      </p>

      {/* <!-- Navigation Bar --> */}
      <nav className="navbar" aria-label="Main navigation">
        <ul>
          <li>
            <a
              href="https://mytools.aleno.me/reservations/v2.0/reservations.html?..."
              target="_blank"
              rel="noopener noreferrer"
              title="Book a table at Monroe Zürich"
            >
              Reserve a Table
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/monroe.zuerich/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow Monroe Zürich on Instagram"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:welcome@monroe.zuerich" title="Email Monroe Zürich">
              Email Us
            </a>
          </li>
          <li>
            <a
              href="https://www.google.ch/maps/place/Brauerstrasse+26,+8004+Zürich/"
              target="_blank"
              rel="noopener noreferrer"
              title="View our location on Google Maps"
            >
              Find Us
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- Video Section --> */}
      <section className="video-section">
        <video className="center-video" autoPlay loop muted>
          <source src="monroe-slot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* <!-- Footer Section --> */}
      <footer className="footer">
        <div className="content">
          <section id="hours" className="hours">
            <div>
              <p className="OH">OPENING HOURS</p>
              <p className="days">Wed-Sat 17h-late</p>
              <p className="OH">KITCHEN HOURS</p>
              <p className="days">Wed-Sat 17h-late</p>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}
