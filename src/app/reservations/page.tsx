import { Button } from "@/components/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ReservationPage() {
  return (
    <>
      <main
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center py-28 sm:py-36 md:py-40"
        style={{ backgroundImage: "url('/assets/monroe-booth-seating.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-xl w-full mx-auto px-6 mt-16 sm:mt-0">
          {/* Card */}
          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-8 py-12 sm:px-12 sm:py-16 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-4">
              Reservations
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Reserve Your Karaoke Night
            </h1>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-md mx-auto">
              Cocktails, karaoke, and good company — book your spot at Monroe
              and make it a night to remember.
            </p>

            <a
              href="https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoibmh1M2JHN2hmYXBCdFJwQTQiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto sm:px-10">
                Book a Table
              </Button>
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-white/15" />
              <span className="text-white/40 text-xs uppercase tracking-widest">
                Larger party?
              </span>
              <div className="flex-1 h-px bg-white/15" />
            </div>

            <p className="text-white/60 text-sm mb-6">
              For groups of 9 or more, private events, or full venue hire —
              get in touch and we&apos;ll take care of the rest.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:welcome@monroe.zuerich"
                className="text-white/80 text-sm underline underline-offset-4 hover:text-[#59B073] transition-colors"
              >
                welcome@monroe.zuerich
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <a
                href="tel:+41774042328"
                className="text-white/80 text-sm underline underline-offset-4 hover:text-[#59B073] transition-colors"
              >
                +41 77 404 23 28
              </a>
            </div>

            <div className="mt-6">
              <Link
                href="/docs/eventunterlagen.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="light" className="w-full sm:w-auto sm:px-10">
                  Private Events PDF
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 mb-8 text-center">
            <Link
              href="/menu"
              className="text-sm text-white/50 underline underline-offset-4 hover:text-[#59B073] transition-colors"
            >
              See our menu &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer variant="inline" />
    </>
  )
}
