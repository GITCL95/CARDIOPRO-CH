"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Home, Heart, MapPin, Shield } from "lucide-react"
import type { Translations } from "@/lib/translations"
import type { ParticulierContent } from "@/lib/particulier"
import { Navbar } from "@/components/sections/InstitutionalSite"
import { Footer } from "@/components/sections/InstitutionalBelowFold"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { QuoteButton, QuoteModalProvider } from "@/components/shared/QuoteModal"

interface ParticulierPageProps {
  t: Translations
  c: ParticulierContent
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-8 w-1 shrink-0 rounded-full bg-[#E63946]" aria-hidden="true" />
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
        {children}
      </h2>
    </div>
  )
}

export default function ParticulierPage({ t, c }: ParticulierPageProps) {
  return (
    <QuoteModalProvider c={c}>
      <div className="min-h-screen bg-white text-[#1A1D23]">
        <Navbar t={t} />
        <main id="main-content">
          <Hero c={c} />
          <WhySection c={c} />
          <DistributorBanner c={c} />
          <ModelsSection c={c} />
          <CompareSection c={c} />
          <UsageSection c={c} />
          <MaintenanceSection c={c} />
          <FaqBlock c={c} />
          <FinalCta c={c} />
        </main>
        <Footer t={t} />
      </div>
    </QuoteModalProvider>
  )
}

function Hero({ c }: { c: ParticulierContent }) {
  return (
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
          <span className="text-white/60">{c.breadcrumbParent}</span>
          <span aria-hidden="true">/</span>
          <span className="text-white">{c.breadcrumbCurrentShort}</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
            {c.heroTitle}
          </h1>

          <p className="hero-intro mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {c.heroSub}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {c.heroPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
              >
                <Check className="h-3.5 w-3.5 text-[#E63946]" aria-hidden="true" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteForm({ c }: { c: ParticulierContent }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-[#F8F9FC] p-6 shadow-sm sm:p-8">
      <p className="font-display text-xl font-semibold text-[#1A1D23]">{c.formTitle}</p>
      <p className="mt-1 text-sm text-[#4A5568]">{c.formSubtitle}</p>
      <form
        action="https://formspree.io/f/meendqow"
        method="POST"
        className="mt-6 flex flex-col gap-3"
      >
        <input type="hidden" name="_language" value={c.lang} />
        <input type="hidden" name="_subject" value={c.formSubject} />
        <input type="hidden" name="page" value={c.canonical} />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <input
          required
          type="text"
          name="nom"
          autoComplete="name"
          placeholder={c.formName}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1D23] placeholder:text-[#4A5568]/60 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />
        <input
          type="text"
          name="ville"
          autoComplete="address-level2"
          placeholder={c.formCityPlaceholder}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1D23] placeholder:text-[#4A5568]/60 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />
        <input
          required
          type="tel"
          name="telephone"
          autoComplete="tel"
          placeholder="+41 22 518 09 36"
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1D23] placeholder:text-[#4A5568]/60 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder={c.lang === "fr" ? "jean@exemple.ch" : "max@beispiel.ch"}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1D23] placeholder:text-[#4A5568]/60 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />

        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[#E63946] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#E63946]/90 hover:shadow-xl hover:shadow-[#E63946]/25 active:scale-[0.98]"
        >
          {c.formSubmit}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <p className="text-center text-xs text-[#4A5568]">{c.formLegal}</p>
      </form>
    </div>
  )
}

function WhySection({ c }: { c: ParticulierContent }) {
  const icons = [Heart, MapPin, Home, Shield]
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle>
              <span id="why-title">{c.whyTitle}</span>
            </SectionTitle>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4A5568]">
              {c.whyParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {c.whyBenefits.map((benefit, i) => {
                const Icon = icons[i] ?? Check
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E63946]/10">
                      <Icon className="h-5 w-5 text-[#E63946]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold tracking-tight text-[#1A1D23]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4A5568]">{benefit.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <QuoteForm c={c} />
        </div>
      </div>
    </section>
  )
}

function DistributorBanner({ c }: { c: ParticulierContent }) {
  return (
    <section className="border-b border-gray-200 bg-[#F8F9FC] py-8" aria-label={c.distributorTitle}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#4A5568]">
          {c.distributorTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {c.distributors.map((logo) => (
            <div
              key={logo.alt}
              className="relative h-8 w-24 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-28"
            >
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ModelsSection({ c }: { c: ParticulierContent }) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="models-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="models-title">{c.modelsTitle}</span>
        </SectionTitle>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4A5568]">{c.modelsIntro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.models.map((model) => (
            <div
              key={model.name}
              className="flex flex-col rounded-lg border border-gray-200 bg-[#F8F9FC] p-6"
            >
              <div className="relative mx-auto mb-4 h-40 w-full max-w-[200px]">
                <Image
                  src={model.image}
                  alt={model.imageAlt}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#1A1D23] mb-1">
                {model.name}
              </h3>
              <p className="font-display text-lg font-bold text-[#021647]">{model.price}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {model.criteria.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4A5568]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href={model.linkHref}
                  className="font-semibold text-[#0E3A82] hover:underline"
                >
                  {model.linkLabel}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompareSection({ c }: { c: ParticulierContent }) {
  return (
    <section className="bg-[#F8F9FC] py-16 lg:py-24" aria-labelledby="compare-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="compare-title">{c.compareTitle}</span>
        </SectionTitle>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4A5568]">{c.compareIntro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.comparePoints.map((point) => (
            <div
              key={point.title}
              className="rounded-lg border border-gray-200 bg-[#F8F9FC] p-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#1A1D23] mb-2">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5568]">{point.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base text-[#4A5568]">
          <Link href={c.compareRentalLink} className="font-semibold text-[#0E3A82] hover:underline">
            {c.compareRentalLabel}
          </Link>
        </p>
      </div>
    </section>
  )
}

function UsageSection({ c }: { c: ParticulierContent }) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="usage-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="usage-title">{c.usageTitle}</span>
        </SectionTitle>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#4A5568]">
          {c.usageParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {c.usageSteps.map((step, i) => (
            <li
              key={step}
              className="flex gap-4 rounded-lg border border-gray-200 bg-[#F8F9FC] p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E63946]/10 font-display text-sm font-bold text-[#E63946]">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-[#4A5568]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function MaintenanceSection({ c }: { c: ParticulierContent }) {
  return (
    <section className="bg-[#F8F9FC] py-16 lg:py-24" aria-labelledby="maintenance-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="maintenance-title">{c.maintenanceTitle}</span>
        </SectionTitle>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#4A5568]">
          {c.maintenanceParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.maintenanceItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 bg-[#F8F9FC] p-5"
            >
              <h3 className="font-display text-base font-semibold tracking-tight text-[#1A1D23] mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5568]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqBlock({ c }: { c: ParticulierContent }) {
  return (
    <section id="faq" className="bg-white py-20 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle>
            <span id="faq-title">{c.faqTitle}</span>
          </SectionTitle>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border border-gray-200 bg-[#F8F9FC] px-2">
          {c.faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`} className="border-gray-200 last:border-0">
              <AccordionTrigger className="px-4 py-5 text-left hover:no-underline [&>svg]:shrink-0">
                <h3 className="text-base font-medium tracking-tight text-[#1A1D23]">{item.q}</h3>
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="overflow-hidden px-4 pb-5 text-sm leading-relaxed text-[#4A5568] data-[state=closed]:hidden"
              >
                <div dangerouslySetInnerHTML={{ __html: item.a }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function FinalCta({ c }: { c: ParticulierContent }) {
  return (
    <section className="bg-[#021647] py-16 text-white md:py-20" aria-labelledby="cta-title">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p id="cta-title" className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {c.ctaTitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70">{c.ctaText}</p>
        <QuoteButton
          productName=""
          productType="particulier"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E63946] px-7 text-sm font-medium text-white transition-all hover:bg-[#E63946]/90 hover:shadow-2xl hover:shadow-[#E63946]/30"
        >
          {c.ctaButton}
          <ArrowRight className="h-4 w-4" />
        </QuoteButton>
      </div>
    </section>
  )
}
