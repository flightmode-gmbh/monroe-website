"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const openLightbox = useCallback((src: string) => setLightbox(src), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightbox, closeLightbox])

  return (
    <>
      {/* Hero background */}
      <main
        className="relative w-full min-h-screen flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/monroe-lounge-area.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center pt-28 sm:pt-36 md:pt-32 pb-16 px-4">
          {/* Menu cards */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 max-w-5xl w-full">
            {/* Front */}
            <button
              onClick={() => openLightbox("/docs/menu-front.png")}
              className="group w-full md:w-1/2 max-w-lg mx-auto cursor-zoom-in
                         md:rotate-[-1.5deg] md:hover:rotate-0
                         transition-all duration-500 ease-out
                         md:hover:scale-[1.03] md:hover:z-10
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
              aria-label="View drinks menu full screen"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50
                              ring-1 ring-white/10
                              group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                              transition-shadow duration-500">
                <Image
                  src="/docs/menu-front.png"
                  alt="Front page of Monroe Zürich menu featuring signature cocktails, mocktails, longdrinks, beers and house drinks with prices in CHF"
                  width={800}
                  height={1130}
                  className="w-full h-auto block"
                  priority
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35
                            group-hover:text-white/55 transition-colors duration-300">
                Drinks &amp; Cocktails
              </p>
            </button>

            {/* Back */}
            <button
              onClick={() => openLightbox("/docs/menu-back.png")}
              className="group w-full md:w-1/2 max-w-lg mx-auto cursor-zoom-in
                         md:rotate-[1.5deg] md:hover:rotate-0
                         transition-all duration-500 ease-out
                         md:hover:scale-[1.03] md:hover:z-10
                         md:mt-8
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
              aria-label="View shots and wine menu full screen"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50
                              ring-1 ring-white/10
                              group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                              transition-shadow duration-500">
                <Image
                  src="/docs/menu-back.png"
                  alt="Back page of Monroe Zürich menu showcasing shots, premium spirits, wine and bubbles with prices in CHF"
                  width={800}
                  height={1130}
                  className="w-full h-auto block"
                  priority
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35
                            group-hover:text-white/55 transition-colors duration-300">
                Shots, Wine &amp; Bubbles
              </p>
            </button>
          </div>
        </div>
      </main>

      <Footer variant="inline" />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Menu image enlarged view"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 cursor-pointer"
            aria-label="Close enlarged view"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
          <Image
            src={lightbox}
            alt="Monroe Zürich menu enlarged view"
            width={900}
            height={1270}
            className="max-h-[90vh] w-auto max-w-[90vw] object-contain rounded-md animate-[fadeScale_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
