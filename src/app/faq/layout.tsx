import type { Metadata } from "next"
import Script from "next/script"
import { faqItems } from "./data"

export const metadata: Metadata = {
  title: "FAQ – Monroe Zürich | Frequently Asked Questions",
  description:
    "Find answers to common questions about Monroe Bar Zürich: opening hours, reservations, location, events, accessibility, and more.",
  alternates: {
    canonical: "https://monroe.zuerich/faq",
  },
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </Script>
      {children}
    </>
  )
}
