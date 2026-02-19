import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Monroe Zürich Menu – Cocktails, Drinks & Bites",
  description:
    "Discover the full menu at Monroe Bar Zürich: expertly crafted cocktails, refreshing drinks, and food by Yardbird — crispy chicken bites, fried chicken burgers, nachos, and more. Located in Kreis 4.",
  alternates: {
    canonical: "https://monroe.zuerich/menu",
  },
  openGraph: {
    url: "https://monroe.zuerich/menu",
    title: "Monroe Zürich Menu – Cocktails, Drinks & Bites",
    description:
      "Discover the full menu at Monroe Bar Zürich: expertly crafted cocktails, refreshing drinks, and food by Yardbird — crispy chicken bites, fried chicken burgers, nachos, and more. Located in Kreis 4.",
  },
  twitter: {
    title: "Monroe Zürich Menu – Cocktails, Drinks & Bites",
    description:
      "Discover the full menu at Monroe Bar Zürich: expertly crafted cocktails, refreshing drinks, and food by Yardbird. Located in Kreis 4.",
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
              name: "Food by Yardbird",
              description:
                "Food by Yardbird — chicken bites, crispy chicken skins, fried chicken burger & fries, cheesy nachos, loaded fries, and the Monroe Platter for groups. Planted™ chicken available as a vegetarian/vegan option.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            },
          ],
          provider: {
            "@type": "BarOrPub",
            "@id": "https://monroe.zuerich/#bar",
            name: "Monroe Zürich",
          },
        })}
      </Script>
      {children}
    </>
  )
}
