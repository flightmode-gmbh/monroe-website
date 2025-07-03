import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reserve at Monroe Bar Zürich – Karaoke, Cocktails & Bites",
  description:
    "Book your table at Monroe Bar, Zürich’s favorite karaoke bar in Kreis 4. Enjoy unforgettable nights with live karaoke, signature cocktails, and delicious bites.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://monroe.zuerich/reservations" />

        <script type="application/ld+json">
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
            openingHours: ["We-Sa 17:00-02:00"],
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
        </script>
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
