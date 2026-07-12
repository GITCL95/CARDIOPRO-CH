"use client"

import Link from "next/link"
import { ArrowRight, Check, HeartPulse } from "lucide-react"
import type { Translations } from "@/lib/translations"
import type { AboutContent } from "@/lib/about"
import { Navbar } from "@/components/sections/InstitutionalSite"
import { Footer } from "@/components/sections/InstitutionalBelowFold"
import { ShimmerButton } from "@/components/premium/shimmer-button"

interface AboutPageProps {
  t: Translations
  c: AboutContent
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E63946]">
      {children}
    </p>
  )
}

export default function AboutPage({ t, c }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1A1D23]">
      <Navbar t={t} />
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#021647] pt-24 pb-16 text-white md:pt-32 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label={c.lang === "fr" ? "Fil d'Ariane" : "Brotkrumen"}
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60"
            >
              <Link href={`/${c.lang}/`} className="transition-colors hover:text-white">
                {c.breadcrumbHome}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{c.breadcrumbCurrent}</span>
            </nav>
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                <HeartPulse size={14} className="text-[#E63946]" />
                {c.heroBadge}
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {c.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{c.heroSub}</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionEyebrow>{c.missionEyebrow}</SectionEyebrow>
              <h2 className="font-display text-3xl font-bold text-[#021647] sm:text-4xl">
                {c.missionTitle}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#4A5568]">
              {c.missionParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                {c.missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-base">
                    <Check size={18} className="mt-1 shrink-0 text-[#10B981]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FC] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionEyebrow>{c.statsEyebrow}</SectionEyebrow>
              <h2 className="font-display text-3xl font-bold text-[#021647] sm:text-4xl">
                {c.statsTitle}
              </h2>
              <p className="mt-4 text-lg text-[#4A5568]">{c.statsSubtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(2,22,71,0.08)]"
                >
                  <p className="font-display text-4xl font-bold text-[#E63946]">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#021647]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#4A5568]">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionEyebrow>{c.valuesEyebrow}</SectionEyebrow>
              <h2 className="font-display text-3xl font-bold text-[#021647] sm:text-4xl">
                {c.valuesTitle}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {c.values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 p-6 shadow-[0_8px_30px_rgba(2,22,71,0.06)]"
                >
                  <h3 className="font-display text-xl font-bold text-[#021647]">{value.title}</h3>
                  <p className="mt-3 leading-7 text-[#4A5568]">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#021647] to-[#0E3A82] py-20 text-white md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <SectionEyebrow>{c.ctaEyebrow}</SectionEyebrow>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{c.ctaTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">{c.ctaText}</p>
            <ShimmerButton asChild size="lg" className="mt-8">
              <Link href={c.contactHref}>
                {c.ctaButton}
                <ArrowRight size={18} />
              </Link>
            </ShimmerButton>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </div>
  )
}
