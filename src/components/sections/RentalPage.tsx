"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Banknote,
  Check,
  Clock,
  RefreshCw,
  SquareCheckBig,
} from "lucide-react"
import type { Translations } from "@/lib/translations"
import {
  formatChfPrice,
  type RentalContent,
  type RentalFormula,
} from "@/lib/rental"
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

interface RentalPageProps {
  t: Translations
  c: RentalContent
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E63946]">
      {children}
    </p>
  )
}

function formatPrice(value: number) {
  return formatChfPrice(value)
}

function formatTotal(c: RentalContent, formula: RentalFormula) {
  if (formula.months === 1) {
    return c.lang === "fr"
      ? `${c.totalPrefix} ${formatPrice(formula.totalCost)} ${c.priceVat} pour 1 mois`
      : `${c.totalPrefix} ${formatPrice(formula.totalCost)} ${c.priceVat} für 1 Monat`
  }
  return c.lang === "fr"
    ? `${c.totalPrefix} ${formatPrice(formula.totalCost)} ${c.priceVat} sur ${formula.months} mois`
    : `${c.totalPrefix} ${formatPrice(formula.totalCost)} ${c.priceVat} über ${formula.months} Monate`
}

export default function RentalPage({ t, c }: RentalPageProps) {
  const long = c.formulas.filter((f) => f.group === "long")
  const medium = c.formulas.filter((f) => f.group === "medium")
  const short = c.formulas.filter((f) => f.group === "short")

  return (
    <QuoteModalProvider c={c}>
      <div className="min-h-screen bg-white text-[#1A1D23]">
        <Navbar t={t} />
        <main id="main-content">
          <Hero c={c} />
          <WhyRent c={c} />
          <FormulasHeader c={c} />
          <FormulaSection c={c} eyebrow={c.longEyebrow} title={c.longTitle} intro={c.longIntro} formulas={long} />
          <FormulaSection c={c} eyebrow={c.mediumEyebrow} title={c.mediumTitle} intro={c.mediumIntro} formulas={medium} subtle />
          <FormulaSection c={c} eyebrow={c.shortEyebrow} title={c.shortTitle} intro={c.shortIntro} formulas={short} />
          <CompareTable c={c} />
          <FormulasTable c={c} />
          <ChooseSection c={c} />
          <FaqBlock c={c} />
          <FinalCta c={c} />
        </main>
        <Footer t={t} />
      </div>
    </QuoteModalProvider>
  )
}

function Hero({ c }: { c: RentalContent }) {
  return (
    <section className="relative overflow-hidden bg-[#021647] pt-24 pb-16 text-white md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
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

            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E63946]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E63946]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E63946]" />
              {c.heroBadge}
            </span>

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

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E63946] font-display text-sm font-bold">
                CP
              </div>
              <p className="text-sm text-white/75">
                <strong className="text-white">{c.heroAuthor.split(" — ")[0]}</strong>
                {c.heroAuthor.includes(" — ") ? ` — ${c.heroAuthor.split(" — ")[1]}` : ""}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <HeroQuoteForm c={c} />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroQuoteForm({ c }: { c: RentalContent }) {
  return (
    <div className="rounded-lg border border-white/[0.12] bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      <p className="font-display text-xl font-semibold text-white">{c.formTitle}</p>
      <p className="mt-1 text-sm text-white/60">{c.formSubtitle}</p>
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
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />
        <input
          required
          type="text"
          name="entreprise"
          autoComplete="organization"
          placeholder={c.formCompanyPlaceholder}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />
        <input
          required
          type="tel"
          name="telephone"
          autoComplete="tel"
          placeholder="+41 22 518 09 36"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder={c.lang === "fr" ? "jean@entreprise.ch" : "max@firma.ch"}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-all focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946]"
        />

        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[#E63946] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#E63946]/90 hover:shadow-xl hover:shadow-[#E63946]/25 active:scale-[0.98]"
        >
          {c.formSubmit}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <p className="text-center text-xs text-white/40">{c.formLegal}</p>
      </form>
    </div>
  )
}

function WhyRent({ c }: { c: RentalContent }) {
  const icons = [Banknote, RefreshCw, SquareCheckBig, Clock]
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{c.whyEyebrow}</SectionEyebrow>
          <h2 id="why-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
            {c.whyTitle}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-[#4A5568]">
            {c.whyParagraphs.map((p) => (
              <p key={p.slice(0, 30)} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.whyBenefits.map((benefit, i) => {
            const Icon = icons[i] ?? Banknote
            return (
              <div
                key={benefit.title}
                className="group rounded-lg border border-gray-200 bg-[#F8F9FC] p-6 transition-all duration-300 hover:border-[#E63946]/20 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E63946]/10 text-[#E63946]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-[#1A1D23]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{benefit.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FormulasHeader({ c }: { c: RentalContent }) {
  return (
    <section className="bg-[#F8F9FC] pt-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionEyebrow>{c.formulasEyebrow}</SectionEyebrow>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
          {c.formulasTitle}
        </h2>
      </div>
    </section>
  )
}

function FormulaSection({
  c,
  eyebrow,
  title,
  intro,
  formulas,
  subtle = false,
}: {
  c: RentalContent
  eyebrow: string
  title: string
  intro: string
  formulas: RentalFormula[]
  subtle?: boolean
}) {
  const cols =
    formulas.length === 2
      ? "md:grid-cols-2 max-w-3xl mx-auto"
      : "md:grid-cols-3"

  return (
    <section className={cn("py-16 lg:py-24", subtle ? "bg-white" : "bg-[#F8F9FC]")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
            {title}
          </h3>
          <p
            className="mt-5 text-base leading-relaxed text-[#4A5568]"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        </div>

        <div className={cn("mt-10 grid gap-6", cols)}>
          {formulas.map((formula) => (
            <FormulaCard key={formula.id} c={c} formula={formula} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FormulaCard({ c, formula }: { c: RentalContent; formula: RentalFormula }) {
  const prefix = c.lang === "fr" ? "Location défibrillateur" : "Defibrillator-Miete"
  const productLabel = `${prefix} ${formula.monthsLabelUpper} — ${formatPrice(formula.price)}${c.perMonth} ${c.priceVat} (${formatTotal(c, formula)})`

  return (
    <article
      data-formula={formula.id}
      className={cn(
        "relative overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-lg",
        formula.recommended
          ? "border-2 border-[#E63946] ring-2 ring-[#E63946]/20"
          : "border border-gray-200",
      )}
    >
      {formula.recommended ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-[#E63946] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {c.popularBadge}
        </span>
      ) : null}

      <div className={cn("border-b border-gray-200 p-6 pb-4", formula.recommended && "pt-7")}>
        <p className="text-sm font-bold uppercase tracking-wider text-[#021647]">
          {formula.monthsLabelUpper}
        </p>
        <p className="mt-1 text-xs text-[#4A5568]">{formula.tagline}</p>
      </div>

      <div className="p-6 pt-4">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl font-bold text-[#021647]">
            {formula.price.toLocaleString("fr-CH")}
          </span>
          <span className="text-sm text-[#4A5568]">
            CHF{c.perMonth} {c.priceVat}
          </span>
        </div>
        <p className="mt-1 text-xs text-[#4A5568]">{formatTotal(c, formula)}</p>
      </div>

      <ul className="space-y-3 px-6 pb-6">
        {formula.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-[#4A5568]">
            <Check className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="px-6 pb-6">
        <QuoteButton
          productName={productLabel}
          productType="location"
          className={cn(
            "block w-full rounded-full py-3 text-center text-sm font-semibold transition-all",
            formula.recommended
              ? "bg-[#E63946] text-white hover:bg-[#E63946]/90 hover:shadow-lg hover:shadow-[#E63946]/30"
              : "border border-[#1A1D23]/20 bg-transparent text-[#1A1D23] hover:bg-[#021647] hover:text-white",
          )}
        >
          {c.selectCta}
        </QuoteButton>
      </div>
    </article>
  )
}

function CompareTable({ c }: { c: RentalContent }) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="compare-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{c.compareEyebrow}</SectionEyebrow>
          <h2 id="compare-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
            {c.compareTitle}
          </h2>
        </div>

        <div className="mt-10 hidden overflow-x-auto rounded-lg border border-gray-200 lg:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#021647] text-white">
                <th className="w-1/3 p-4 text-left text-xs font-medium uppercase tracking-wider">
                  {c.compareCriteria}
                </th>
                <th className="border-l border-[#E63946]/20 bg-[#E63946]/10 p-4 text-left text-xs font-medium uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                    {c.compareRental}
                  </span>
                </th>
                <th className="p-4 text-left text-xs font-medium uppercase tracking-wider">
                  {c.comparePurchase}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {c.compareRows.map((row) => (
                <tr key={row.label} className="bg-white transition-colors hover:bg-[#F8F9FC]">
                  <td className="p-4 font-medium text-[#4A5568]">{row.label}</td>
                  <td className="border-l border-[#E63946]/20 bg-[#E63946]/[0.025] p-4 text-[#1A1D23]">
                    {row.rental}
                  </td>
                  <td className="p-4 text-[#4A5568]">{row.purchase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {c.compareRows.map((row) => (
            <div key={row.label} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="border-b border-gray-200 bg-[#F8F9FC] px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4A5568]">
                  {row.label}
                </p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200 text-sm">
                <div className="bg-[#E63946]/[0.03] px-5 py-4">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#E63946]">
                    {c.compareRental}
                  </p>
                  <p className="text-[#1A1D23]">{row.rental}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#4A5568]">
                    {c.comparePurchase}
                  </p>
                  <p className="text-[#4A5568]">{row.purchase}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-[#4A5568]">{c.compareNote}</p>
      </div>
    </section>
  )
}

function FormulasTable({ c }: { c: RentalContent }) {
  const ordered = [...c.formulas].sort((a, b) => a.months - b.months)

  return (
    <section className="bg-[#F8F9FC] py-16 lg:py-24" aria-labelledby="table-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{c.tableEyebrow}</SectionEyebrow>
          <h2 id="table-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
            {c.tableTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4A5568]">{c.tableIntro}</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="bg-[#021647] text-white">
                <th className="w-44 p-4 text-left text-xs font-medium uppercase tracking-wide">
                  {c.tableFormula}
                </th>
                {ordered.map((f) => (
                  <th key={f.id} className="p-4 text-center text-xs font-medium uppercase">
                    {f.months} {c.monthUnit}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-[#E63946]/10">
                <td className="p-4 text-xs font-bold uppercase tracking-wide text-[#021647]">
                  {c.tablePrice}
                </td>
                {ordered.map((f) => (
                  <td key={f.id} className="p-4 text-center text-sm font-bold text-[#021647]">
                    {formatPrice(f.price)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-xs text-[#4A5568]">{c.tableEngagement}</td>
                {ordered.map((f) => (
                  <td key={f.id} className="p-4 text-center text-xs text-[#4A5568]">
                    {f.months} {c.monthUnit}
                  </td>
                ))}
              </tr>
              <tr className="bg-[#F8F9FC]">
                <td className="p-4 text-xs text-[#4A5568]">{c.tableDelivery}</td>
                {ordered.map((f) => (
                  <td key={f.id} className="p-4 text-center text-emerald-500">
                    <Check className="mx-auto h-5 w-5" aria-hidden="true" />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-xs text-[#4A5568]">{c.tableConsumables}</td>
                {ordered.map((f) => (
                  <td key={f.id} className="p-4 text-center text-emerald-500">
                    <Check className="mx-auto h-5 w-5" aria-hidden="true" />
                  </td>
                ))}
              </tr>
              <tr className="bg-[#F8F9FC]">
                <td className="p-4 text-xs text-[#4A5568]">{c.tableIdeal}</td>
                {ordered.map((f) => (
                  <td key={f.id} className="p-4 text-center text-xs text-[#4A5568]">
                    {f.idealFor}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[#4A5568]">{c.tableFootnote}</p>

        <div className="mt-10 text-center">
          <QuoteButton
            productName=""
            productType="location"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E63946] px-7 text-sm font-medium text-white transition-all hover:bg-[#E63946]/90 hover:shadow-xl hover:shadow-[#E63946]/25"
          >
            {c.tableCta}
            <ArrowRight className="h-4 w-4" />
          </QuoteButton>
        </div>
      </div>
    </section>
  )
}

function ChooseSection({ c }: { c: RentalContent }) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="choose-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{c.chooseEyebrow}</SectionEyebrow>
          <h2 id="choose-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
            {c.chooseTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4A5568]">{c.chooseIntro}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {c.choose.map((block) => (
            <div key={block.title} className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#E63946]/10">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold tracking-tight text-[#1A1D23]">
                  {block.title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed text-[#4A5568]"
                  dangerouslySetInnerHTML={{ __html: block.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqBlock({ c }: { c: RentalContent }) {
  return (
    <section id="faq" className="bg-[#F8F9FC] py-20 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionEyebrow>
            {c.lang === "fr" ? "Questions fréquentes" : "Häufige Fragen"}
          </SectionEyebrow>
          <h2 id="faq-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1A1D23] sm:text-4xl">
            {c.faqTitle}
          </h2>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border border-gray-200 bg-white px-2">
          {c.faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`} className="border-gray-200 last:border-0">
              <AccordionTrigger className="px-4 py-5 text-left text-base font-medium tracking-tight text-[#1A1D23] hover:no-underline">
                {item.q}
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

function FinalCta({ c }: { c: RentalContent }) {
  return (
    <section className="bg-[#021647] py-16 text-white md:py-20" aria-labelledby="cta-title">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionEyebrow>{c.ctaEyebrow}</SectionEyebrow>
        <p id="cta-title" className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {c.ctaTitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70">{c.ctaText}</p>
        <QuoteButton
          productName=""
          productType="location"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E63946] px-7 text-sm font-medium text-white transition-all hover:bg-[#E63946]/90 hover:shadow-2xl hover:shadow-[#E63946]/30"
        >
          {c.ctaButton}
          <ArrowRight className="h-4 w-4" />
        </QuoteButton>
      </div>
    </section>
  )
}
