import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Reserve at Monroe Bar Zürich – Karaoke, Cocktails & Bites",
  description:
    "Book your table at Monroe Bar, Zürich’s favorite karaoke bar in Kreis 4. Enjoy unforgettable nights with live karaoke, signature cocktails, and delicious bites.",
  alternates: {
    canonical: "https://monroe.zuerich/reservation",
  },
}

export default function ReservationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Script id="reservation-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "Monroe Zürich",
          description:
            "Reserve your table at Monroe Bar – Zürich’s go-to karaoke bar with cocktails and bites in Kreis 4.",
          image: "https://monroe.zuerich/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Brauerstrasse 26",
            addressLocality: "Zürich",
            postalCode: "8004",
            addressCountry: "CH",
          },
          url: "https://monroe.zuerich/reservation",
          telephone: "+41 44 123 45 67",
          openingHours: ["Th-Sa 19:00-02:00"],
          servesCuisine: "Bar food",
          acceptsReservations: true,
          sameAs: ["https://www.instagram.com/monroe.zuerich/"],
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://monroe.zuerich/reservation",
              inLanguage: "en",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            result: {
              "@type": "Reservation",
              name: "Table Reservation",
            },
          },
        })}
      </Script>
      {children}
    </>
  )
}
