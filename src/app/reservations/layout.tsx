import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Reserve at Monroe Bar Zürich – Karaoke, Cocktails & Bites",
  description:
    "Book your table at Monroe Bar, Zürich's favorite karaoke bar in Kreis 4. Enjoy unforgettable nights with live karaoke, signature cocktails, and delicious bites.",
  alternates: {
    canonical: "https://www.monroe.zuerich/reservations",
  },
  openGraph: {
    url: "https://www.monroe.zuerich/reservations",
    title: "Reserve at Monroe Bar Zürich – Karaoke, Cocktails & Bites",
    description:
      "Book your table at Monroe Bar, Zürich's favorite karaoke bar in Kreis 4. Enjoy unforgettable nights with live karaoke, signature cocktails, and delicious bites.",
  },
  twitter: {
    title: "Reserve at Monroe Bar Zürich – Karaoke, Cocktails & Bites",
    description:
      "Book your table at Monroe Bar, Zürich's favorite karaoke bar in Kreis 4. Live karaoke, signature cocktails, and delicious bites.",
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
          "@id": "https://www.monroe.zuerich/#bar",
          name: "Monroe Zürich",
          description:
            "Reserve your table at Monroe Bar – Zürich's go-to karaoke bar with cocktails and bites in Kreis 4.",
          image: "https://www.monroe.zuerich/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Brauerstrasse 26",
            addressLocality: "Zürich",
            postalCode: "8004",
            addressCountry: "CH",
          },
          url: "https://www.monroe.zuerich",
          telephone: "+41 77 404 23 28",
          openingHours: ["Th-Sa 19:00-02:00"],
          servesCuisine: "Fried Chicken, Nachos, Bar Bites",
          acceptsReservations: true,
          sameAs: ["https://www.instagram.com/monroe.zuerich/"],
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.monroe.zuerich/reservations",
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
