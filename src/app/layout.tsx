import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title:
    "Monroe Zürich – Karaoke Bar, Cocktails & Bites in the Heart of Zürich",
  description:
    "Sing your heart out at Monroe Zürich – the ultimate karaoke bar with craft cocktails, beers and tasty bites, located in the heart of Zürich.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://monroe.zuerich/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            name: "Monroe Zürich",
            image: "https://monroe.zuerich/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Brauerstrasse 26",
              addressLocality: "Zürich",
              postalCode: "8004",
              addressCountry: "CH",
            },
            url: "https://monroe.zuerich",
            telephone: "+41 44 123 45 67",
            openingHours: ["We-Sa 17:00-02:00"],
            servesCuisine: "Bar food",
            sameAs: ["https://www.instagram.com/monroe.zuerich/"],
          })}
        </script>
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
