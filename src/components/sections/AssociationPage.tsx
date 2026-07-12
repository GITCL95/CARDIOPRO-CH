"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Heart, Shield, Trophy, Users } from "lucide-react"
import type { Translations } from "@/lib/translations"
import type { AssociationContent } from "@/lib/association"
import { Navbar } from "@/components/sections/InstitutionalSite"
import { Footer } from "@/components/sections/InstitutionalBelowFold"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { QuoteButton, QuoteModalProvider } from "@/components/shared/QuoteModal"

interface AssociationPageProps {
  t: Translations
  c: AssociationContent
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

export default function AssociationPage({ t, c }: AssociationPageProps) {
  return (
    <QuoteModalProvider c={c}>
      <div className="min-h-screen bg-white text-[#1A1D23]">
        <Navbar t={t} />
        <main id="main-content">
          <Hero c={c} />
          <WhySection c={c} />
          <DistributorBanner c={c} />
          <BuyRentSection c={c} />
          <SportsSection c={c} />
          <FundingSection c={c} />
          <ClientsSection c={c} />
          <FaqBlock c={c} />
          <FinalCta c={c} />
        </main>
        <Footer t={t} />
      </div>
    </QuoteModalProvider>
  )
}

function Hero({ c }: { c: AssociationContent }) {
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

function QuoteForm({ c }: { c: AssociationContent }) {
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
          required
          type="text"
          name="association"
          autoComplete="organization"
          placeholder={c.formAssociationPlaceholder}
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
          placeholder={c.lang === "fr" ? "contact@club.ch" : "kontakt@verein.ch"}
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

function WhySection({ c }: { c: AssociationContent }) {
  const icons = [Trophy, Heart, Users, Shield]
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

function DistributorBanner({ c }: { c: AssociationContent }) {
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

function BuyRentSection({ c }: { c: AssociationContent }) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="buy-rent-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="buy-rent-title">{c.buyRentTitle}</span>
        </SectionTitle>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4A5568]">{c.buyRentIntro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.buyRentCards.map((card) => (
            <div
              key={card.title}
              className={cn(
                "relative rounded-lg border bg-[#F8F9FC] p-8",
                card.featured ? "border-[#E63946]" : "border-gray-200",
              )}
            >
              {card.badge && (
                <span className="mb-4 inline-flex rounded-full bg-[#E63946]/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E63946]">
                  {card.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#1A1D23]">
                {card.title}
              </h3>
              <p className="mt-2 font-display text-2xl font-bold text-[#021647]">{card.price}</p>
              <ul className="mt-6 space-y-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#4A5568]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <Link
                  href={card.linkHref}
                  className="font-semibold text-[#0E3A82] hover:underline"
                >
                  {card.linkLabel}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SportsSection({ c }: { c: AssociationContent }) {
  return (
    <section className="bg-[#F8F9FC] py-16 lg:py-24" aria-labelledby="sports-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="sports-title">{c.sportsTitle}</span>
        </SectionTitle>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4A5568]">{c.sportsIntro}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.sports.map((sport) => (
            <div
              key={sport.title}
              className="rounded-lg border border-gray-200 bg-[#F8F9FC] p-6"
            >
              <h3 className="mb-2 font-display text-xl font-semibold tracking-tight text-[#1A1D23]">
                {sport.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5568]">{sport.text}</p>
              <p className="mt-3 text-sm font-medium text-[#021647]">{sport.model}</p>
              {sport.linkHref && sport.linkLabel && (
                <p className="mt-2">
                  <Link
                    href={sport.linkHref}
                    className="text-sm font-semibold text-[#0E3A82] hover:underline"
                  >
                    {sport.linkLabel}
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FundingSection({ c }: { c: AssociationContent }) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="funding-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="funding-title">{c.fundingTitle}</span>
        </SectionTitle>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#4A5568]">
          {c.fundingParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {c.fundingOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-lg border border-gray-200 bg-[#F8F9FC] p-6"
            >
              <h3 className="mb-2 font-display text-xl font-semibold tracking-tight text-[#1A1D23]">
                {option.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-[#4A5568]"
                dangerouslySetInnerHTML={{ __html: option.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientsSection({ c }: { c: AssociationContent }) {
  return (
    <section className="relative overflow-hidden bg-[#021647] py-16 text-white lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {c.clientsTitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {c.clients.map((client) => (
            <div
              key={client.alt}
              className="relative h-10 w-28 opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqBlock({ c }: { c: AssociationContent }) {
  return (
    <section id="faq" className="bg-[#F8F9FC] py-20 md:py-28" aria-labelledby="faq-title">
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

function FinalCta({ c }: { c: AssociationContent }) {
  return (
    <section className="bg-[#021647] py-16 text-white md:py-20" aria-labelledby="cta-title">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p id="cta-title" className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {c.ctaTitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70">{c.ctaText}</p>
        <QuoteButton
          productName=""
          productType="association"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E63946] px-7 text-sm font-medium text-white transition-all hover:bg-[#E63946]/90 hover:shadow-2xl hover:shadow-[#E63946]/30"
        >
          {c.ctaButton}
          <ArrowRight className="h-4 w-4" />
        </QuoteButton>
      </div>
    </section>
  )
}
