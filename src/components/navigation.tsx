import Link from "next/link"

export const Navigation = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul>
        <li>
          <Link href={"/reservations"}>Reservations</Link>
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
        <li>
          <Link href={"/menu"}>Menu</Link>
        </li>
      </ul>
    </nav>
  )
}
