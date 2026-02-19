"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { faqItems } from "./data"

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-[#1a1a1a]">
      <main
        className="relative w-full min-h-screen flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/monroe-lounge-area.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 w-full flex flex-col items-center pt-28 sm:pt-36 md:pt-32 pb-16 px-4">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-4">
              Good to Know
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Questions &amp; Answers
            </h1>
          </div>

          {/* Accordion */}
          <div className="w-full max-w-2xl backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl overflow-hidden">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              const isLast = index === faqItems.length - 1

              return (
                <div
                  key={index}
                  className={!isLast ? "border-b border-white/[0.07]" : ""}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left text-white/85 hover:text-white transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[0.9rem] sm:text-base leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#F0866D] border-[#F0866D] rotate-180"
                          : "group-hover:border-white/30"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke={isOpen ? "#1a1a1a" : "currentColor"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <polyline points="2 4.5 6 8.5 10 4.5" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 sm:px-8 pb-5 text-sm sm:text-[0.9rem] text-white/55 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer variant="inline" />
    </div>
  )
}
