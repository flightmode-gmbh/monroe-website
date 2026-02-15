import type { Metadata } from "next"
import Image from "next/image"

import "./globals.css"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Monroe Zürich – Karaoke Bar, Cocktails & Bites in the Heart of Zürich",
  description:
    "Sing your heart out at Monroe Zürich – the ultimate karaoke bar with craft cocktails, beers and tasty bites, located in the heart of Zürich.",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
            openingHours: ["Th-Sa 19:00-02:00"],
            servesCuisine: "Bar food",
            sameAs: ["https://www.instagram.com/monroe.zuerich/"],
          })}
        </script>
      </head>
      <body className="antialiased">
        <h1 className="sr-only">
          Monroe Zürich – Karaoke Bar with Cocktails, Bites & Nightlife in
          Zürich
        </h1>
        <p className="sr-only">
          Experience Monroe Zürich, a vibrant karaoke bar located in the heart
          of Kreis 4. Enjoy unforgettable nights with live karaoke, handcrafted
          cocktails, delicious bites, and a buzzing crowd. Whether you&apos;re
          celebrating with friends or just dropping by, Monroe Zürich offers the
          perfect mix of music, drinks, and energy in one of Zurich’s liveliest
          neighborhoods.
        </p>
        <header className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Monroe Zürich Logo – Karaoke Bar in Zürich"
              width={240}
              height={80}
              priority
            />
          </Link>
        </header>
        <Navigation />

        {children}
      </body>
    </html>
  )
}
