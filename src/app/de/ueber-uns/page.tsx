import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { aboutContent, buildAboutJsonLd } from "@/lib/about"
import AboutPage from "@/components/sections/AboutPage"

const c = aboutContent.de

export const metadata: Metadata = {
  title: { absolute: c.metaTitle },
  description: c.metaDescription,
  robots: { index: true, follow: true },
  alternates: {
    canonical: c.canonical,
    languages: {
      "fr-CH": "https://www.cardiopro.ch/fr/a-propos/",
      "de-CH": "https://www.cardiopro.ch/de/ueber-uns/",
      "x-default": "https://www.cardiopro.ch/fr/a-propos/",
    },
  },
  openGraph: {
    type: "website",
    url: c.canonical,
    title: c.ogTitle,
    description: c.ogDescription,
    images: [{ url: "https://www.cardiopro.ch/images/og-cardiopro-ch.jpg" }],
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: c.ogTitle,
    description: c.ogDescription,
  },
}

const jsonLd = buildAboutJsonLd(c)

const speculationRules = {
  prerender: [
    { where: { href_matches: "/de/kontakt/" }, eagerness: "moderate" },
  ],
  prefetch: [
    { where: { href_matches: "/de/*" }, eagerness: "conservative" },
  ],
}

export default function UeberUnsDe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:font-semibold"
        style={{ background: "oklch(0.62 0.22 25)" }}
      >
        {translations.de.skipLink}
      </a>
      <AboutPage t={translations.de} c={c} />
    </>
  )
}
