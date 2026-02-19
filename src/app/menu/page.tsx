"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
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
    <div className="bg-[#1a1a1a]">
      {/* Hero background */}
      <main
        className="relative w-full min-h-screen flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/monroe-lounge-area.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center pt-28 sm:pt-36 md:pt-32 pb-16 px-4">
          <h1 className="sr-only">
            Monroe Zürich Menu – Cocktails, Drinks &amp; Bites
          </h1>
          {/* Menu cards */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 max-w-5xl w-full">
            {/* Front */}
            <div
              onClick={() => {
                if (window.innerWidth >= 768) openLightbox("/docs/menu-front.png")
              }}
              className="group w-full md:w-1/2 max-w-lg mx-auto md:cursor-zoom-in
                         md:rotate-[-1.5deg] md:hover:rotate-0
                         transition-all duration-500 ease-out
                         md:hover:scale-[1.03] md:hover:z-10
                         rounded-lg"
              role="button"
              tabIndex={0}
              aria-label="View drinks menu full screen"
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth >= 768) openLightbox("/docs/menu-front.png")
              }}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50
                              ring-1 ring-white/10
                              md:group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
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
                            md:group-hover:text-white/55 transition-colors duration-300">
                Drinks &amp; Cocktails
              </p>
            </div>

            {/* Back */}
            <div
              onClick={() => {
                if (window.innerWidth >= 768) openLightbox("/docs/menu-back.png")
              }}
              className="group w-full md:w-1/2 max-w-lg mx-auto md:cursor-zoom-in
                         md:rotate-[1.5deg] md:hover:rotate-0
                         transition-all duration-500 ease-out
                         md:hover:scale-[1.03] md:hover:z-10
                         md:mt-8
                         rounded-lg"
              role="button"
              tabIndex={0}
              aria-label="View shots and wine menu full screen"
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth >= 768) openLightbox("/docs/menu-back.png")
              }}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50
                              ring-1 ring-white/10
                              md:group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
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
                            md:group-hover:text-white/55 transition-colors duration-300">
                Shots, Wine &amp; Bubbles
              </p>
            </div>
          </div>
        </div>

        {/* Yardbird Food Section */}
        <section className="relative z-10 w-full flex flex-col items-center px-4 pb-16">
          <div className="w-full max-w-3xl">
            {/* Divider */}
            <div className="flex items-center gap-4 mb-10 sm:mb-14">
              <div className="flex-1 h-px bg-white/10" />
              <p className="text-sm uppercase tracking-[0.25em] text-white/50 shrink-0">
                The Food
              </p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Content card */}
            <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/assets/monroe-yardbird-wings.jpg"
                  alt="Crispy fried chicken bites and nachos by Yardbird, served at Monroe Zürich"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Text */}
              <div className="px-6 sm:px-10 py-8 sm:py-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F0866D] mb-3">
                  Powered by Yardbird
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Southern Fried Chicken &amp; Bites
                </h2>
                <p className="text-sm sm:text-[0.95rem] text-white/60 leading-relaxed mb-4">
                  Monroe&apos;s food corner is powered by{" "}
                  <a
                    href="https://yardbird.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F0866D] underline underline-offset-2 hover:text-[#59B073] transition-colors"
                  >
                    Yardbird
                  </a>
                  , Zürich&apos;s original Southern Fried Chicken restaurant. Dig into crispy chicken
                  bites, crispy chicken skins, a loaded fried chicken burger, cheesy nachos, and more.
                </p>
                <p className="text-sm sm:text-[0.95rem] text-white/60 leading-relaxed mb-6">
                  Go all in with the Monroe Platter — skins, loaded fries, 18 mixed wings, and nachos
                  guacamole for the whole crew. Planted™ chicken available for a vegetarian or vegan option.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {["Fried Chicken", "Nachos", "Burgers", "Vegan Options"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] uppercase tracking-[0.15em] text-white/40 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <div className="relative z-10 pb-16 text-center">
          <Link
            href="/reservations"
            className="text-sm text-white/50 underline underline-offset-4 hover:text-[#59B073] transition-colors"
          >
            Reserve a table &rarr;
          </Link>
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
    </div>
  )
}
