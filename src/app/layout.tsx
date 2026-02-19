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
  themeColor: "#1a1410",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://www.monroe.zuerich/",
  },
  openGraph: {
    type: "website",
    locale: "en_CH",
    url: "https://www.monroe.zuerich/",
    siteName: "Monroe Zürich",
    title:
      "Monroe Zürich – Karaoke Bar, Cocktails & Bites in the Heart of Zürich",
    description:
      "Sing your heart out at Monroe Zürich – the ultimate karaoke bar with craft cocktails, beers and tasty bites, located in the heart of Zürich.",
    images: [
      {
        url: "https://www.monroe.zuerich/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monroe Zürich – Karaoke Bar in Kreis 4, Zürich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Monroe Zürich – Karaoke Bar, Cocktails & Bites in the Heart of Zürich",
    description:
      "Sing your heart out at Monroe Zürich – the ultimate karaoke bar with craft cocktails, beers and tasty bites, located in the heart of Zürich.",
    images: ["https://www.monroe.zuerich/og-image.png"],
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            "@id": "https://www.monroe.zuerich/#bar",
            name: "Monroe Zürich",
            description:
              "Monroe Zürich is a karaoke bar in Kreis 4, Zürich, offering live karaoke nights, craft cocktails, and Southern Fried Chicken bites by Yardbird. Open Thursday to Saturday.",
            image: "https://www.monroe.zuerich/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Brauerstrasse 26",
              addressLocality: "Zürich",
              postalCode: "8004",
              addressCountry: "CH",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 47.3769,
              longitude: 8.5269,
            },
            url: "https://www.monroe.zuerich",
            telephone: "+41 77 404 23 28",
            openingHours: ["Th-Sa 19:00-02:00"],
            servesCuisine: "Fried Chicken, Nachos, Bar Bites",
            priceRange: "$$",
            paymentAccepted: "Credit Card, TWINT",
            currenciesAccepted: "CHF",
            acceptsReservations: true,
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Live Karaoke",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Outdoor Seating",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Private Events",
                value: true,
              },
            ],
            keywords:
              "karaoke bar, karaoke Zürich, karaoke bar Zürich, cocktails, nightlife Kreis 4, live karaoke, fried chicken Zürich",
            sameAs: ["https://www.instagram.com/monroe.zuerich/"],
            hasMenu: {
              "@type": "Menu",
              url: "https://www.monroe.zuerich/menu",
            },
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
