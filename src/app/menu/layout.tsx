import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Monroe Zürich Menu – Cocktails, Drinks & Bites",
  description:
    "Discover the full menu at Monroe Bar Zürich: expertly crafted cocktails, refreshing drinks, and delicious bites in the heart of Kreis 4.",
  alternates: {
    canonical: "https://monroe.zuerich/menu",
  },
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="menu-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Monroe Zürich Menu",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "Cocktails",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "MenuSection",
              name: "Drinks",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "MenuSection",
              name: "Bites",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            },
          ],
          hasRestaurant: {
            "@type": "BarOrPub",
            name: "Monroe Zürich",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Brauerstrasse 26",
              addressLocality: "Zürich",
              postalCode: "8004",
              addressCountry: "CH",
            },
            telephone: "+41 44 123 45 67",
            url: "https://monroe.zuerich",
            sameAs: ["https://www.instagram.com/monroe.zuerich/"],
          },
        })}
      </Script>
      {children}
    </>
  )
}
