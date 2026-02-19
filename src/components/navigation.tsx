"use client"

import { useState } from "react"
import Link from "next/link"
import clsx from "clsx"

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Desktop navigation */}
      <div className="nav-desktop">
        <ul className="nav-links">
          <li>
            <Link href={"/reservations"}>Reservations</Link>
          </li>
          <li className="nav-sep" aria-hidden="true">/</li>
          <li>
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li className="nav-sep" aria-hidden="true">/</li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <a
            href="https://www.instagram.com/monroe.zuerich/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Monroe Zürich on Instagram"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.google.ch/maps/place/Brauerstrasse+26,+8004+Zürich/"
            target="_blank"
            rel="noopener noreferrer"
            title="Find Monroe Zürich on Google Maps"
            aria-label="Location"
          >
            <svg width="16" height="18" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 1C4.13 1 1 4.13 1 8c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" />
              <circle cx="8" cy="8" r="2.5" />
            </svg>
          </a>
          <a
            href="mailto:welcome@monroe.zuerich"
            title="Email Monroe Zürich"
            aria-label="Email"
          >
            <svg width="18" height="16" viewBox="0 0 22 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="1" width="20" height="16" rx="3" />
              <path d="M1 4l10 6 10-6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile menu button — cocktail glass icon */}
      <button
        className={clsx("nav-hamburger", open && "nav-hamburger-open")}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            {/* Cocktail glass */}
            <path d="M5 3 L21 3 L13 14 L13 21 M13 14 L5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Base */}
            <line x1="9" y1="21" x2="17" y2="21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            {/* Olive/garnish */}
            <circle cx="18" cy="6" r="1.5" stroke="white" strokeWidth="1" fill="none" />
            <line x1="19.2" y1="4.8" x2="21" y2="3" stroke="white" strokeWidth="1" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      <div
        className={clsx("nav-overlay", open && "nav-overlay-open")}
        onClick={() => setOpen(false)}
      >
        <div className="nav-overlay-content" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <Link href={"/reservations"} onClick={() => setOpen(false)}>
                Reservations
              </Link>
            </li>
            <li>
              <Link href={"/menu"} onClick={() => setOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link href={"/faq"} onClick={() => setOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <a
                href="https://www.google.ch/maps/place/Brauerstrasse+26,+8004+Zürich/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Find Us
              </a>
            </li>
            <li>
              <a
                href="mailto:welcome@monroe.zuerich"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-overlay-icons">
            <a
              href="https://www.instagram.com/monroe.zuerich/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
        <p className="absolute bottom-10 text-xs opacity-50 text-white">
          Designed & developed by{" "}
          <a
            href="https://foronered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            For One Red AG
          </a>
        </p>
      </div>
    </nav>
  )
}
