import { Button } from "@/components/button"
import Link from "next/link"

export default function ReservationPage() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center md:justify-start">
      <div className="max-w-3xl text-center px-4 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Reserve Your Table at Monroe Zürich
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 mb-6">
          Reservations for up to 8 people can be made directly through our
          online booking platform. For larger groups, please contact us by email
          or phone. You&apos;ll also find a downloadable PDF with detailed
          pricing and information for private bookings.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-8">
          <a
            href="https://mytools.aleno.me/reservations/v2.0/reservations.html?k=..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-[220px] sm:w-[240px]">
              Reserve for up to 8 people
            </Button>
          </a>

          <Link
            href="/docs/eventunterlagen.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-[220px] sm:w-[240px]" variant="secondary">
              Information for Groups
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm sm:text-base text-zinc-600">
          <p>
            For reservations with more than 8 people,
            <br /> please email us at{" "}
            <a
              href="mailto:welcome@monroe.zuerich"
              className="underline hover:text-black"
            >
              welcome@monroe.zuerich
            </a>
            <br className="sm:hidden" /> or call{" "}
            <a href="tel:+41441234567" className="underline hover:text-black">
              +41 44 123 45 67
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
