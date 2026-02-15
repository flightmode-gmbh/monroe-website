"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import clsx from "clsx"

const slides = [
  {
    src: "/assets/monroe-logo-screen.jpg",
    alt: "Monroe Zürich interior with glowing Monroe screen, moody ambient lighting and stylish bar atmosphere",
  },
  {
    src: "/assets/monroe-lounge-area.jpg",
    alt: "Monroe Zürich lounge area with warm coral walls, purple velvet seating and Marilyn Monroe pop art mosaic",
  },
  {
    src: "/assets/monroe-prosecco-ice.jpg",
    alt: "Prosecco bottle chilling in ice bucket at Monroe Zürich bar",
  },
  {
    src: "/assets/monroe-booth-seating.jpg",
    alt: "Candlelit corner booth with intimate seating at Monroe Zürich",
  },
  {
    src: "/assets/monroe-yardbird-wings.jpg",
    alt: "Crispy fried chicken served at Monroe Zürich bar and restaurant",
  },
  {
    src: "/assets/monroe-outdoor-terrace.jpg",
    alt: "Monroe Zürich exterior with blue facade and orange terrace tables on Brauerstrasse, Zürich",
  },
  {
    src: "/assets/monroe-window-seating.jpg",
    alt: "Cozy velvet lounge seating by the window at Monroe Zürich",
  },
  {
    src: "/assets/monroe-booth-menu.jpg",
    alt: "Table setting with menu card and candle at Monroe Zürich",
  },
  {
    src: "/assets/monroe-bar-counter.jpg",
    alt: "Full bar counter panorama at Monroe Zürich with bottles and warm lighting",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartRef = useRef<number>(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => setPaused(false), 8000)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    timeoutRef.current = setTimeout(() => goTo(current + 1), 5000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, paused, goTo])

  // Clean up resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setPaused(true)
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1)
    }
    scheduleResume()
  }

  return (
    <section
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Photo gallery of Monroe Zürich bar and restaurant"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={clsx("carousel-slide", i === current && "carousel-slide-active")}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlays for nav readability */}
      <div className="carousel-gradient-top" />
      <div className="carousel-gradient-bottom" />

      {/* Dot indicators */}
      <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            className={clsx("carousel-dot", i === current && "carousel-dot-active")}
            onClick={() => {
              goTo(i)
              setPaused(true)
              scheduleResume()
            }}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
