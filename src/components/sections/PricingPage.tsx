"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  CreditCard,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react"
import type { Translations } from "@/lib/translations"
import {
  currencySymbol,
  type PricingContent,
  type PricingProduct,
} from "@/lib/pricing"
import { Navbar } from "@/components/sections/InstitutionalSite"
import { Footer } from "@/components/sections/InstitutionalBelowFold"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const DISTRIBUTOR_LOGOS = [
  { alt: "HeartSine", src: "https://cardiopro.fr/images/distrubuteur_agree/heartsine.webp" },
  { alt: "Mediana", src: "https://cardiopro.fr/images/distrubuteur_agree/MEDIANA.webp" },
  { alt: "ZOLL Medical", src: "https://cardiopro.fr/images/distrubuteur_agree/ZOLL.webp" },
  { alt: "Bexen Cardio", src: "https://cardiopro.fr/images/distrubuteur_agree/BEXEN.webp" },
  { alt: "Noah Medical", src: "https://cardiopro.fr/images/distrubuteur_agree/NOAH_MEDICAL.webp" },
  { alt: "Philips", src: "https://cardiopro.fr/images/distrubuteur_agree/PHILIPS.webp" },
]

type BudgetFilter = "all" | "lt1100" | "1100-1400" | "1400-1700" | "gt1700"
type TypeFilter = "all" | "DAE" | "DSA"

interface PricingPageProps {
  t: Translations
  c: PricingContent
}

function formatPrice(value: number) {
  return `${value.toLocaleString("fr-CH").replace(/\u00a0/g, " ")} ${currencySymbol}`
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#E63946]">
      {children}
    </p>
  )
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
        active
          ? "border-[#021647] bg-[#021647] text-white shadow-sm"
          : "border-gray-200 bg-white text-[#4A5568] hover:border-[#021647]/20 hover:text-[#021647]",
      )}
    >
      {children}
    </button>
  )
}

export default function PricingPage({ t, c }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1A1D23]">
      <Navbar t={t} />
      <main id="main-content">
        <Hero c={c} />
        <DistributorBanner c={c} />
        <ProductGrid c={c} />
        <ComparisonTable c={c} />
        <WhyBuy c={c} />
        <ChooseSection c={c} />
        <References c={c} />
        <FaqBlock c={c} />
        <FinalCta c={c} />
      </main>
      <Footer t={t} />
    </div>
  )
}

function Hero({ c }: { c: PricingContent }) {
  return (
    <section className="relative overflow-hidden bg-[#021647] pt-24 pb-16 text-white md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <nav
              aria-label={c.lang === "fr" ? "Fil d'Ariane" : "Brotkrumen"}
              className="mb-5 flex items-center gap-2 text-xs text-white/60"
            >
              <Link href={`/${c.lang}/`} className="transition-colors hover:text-white">
                {c.breadcrumbHome}
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-white/70">{c.breadcrumbCurrentShort}</span>
            </nav>

            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E63946]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E63946]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E63946] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E63946]" />
              </span>
              {c.heroBadge}
            </span>

            <h1 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
              {c.heroTitleLine1}
              <br />
              <span className="text-[#E63946]">{c.heroTitleHighlight}</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">{c.heroSub}</p>

            <h2 className="mt-8 font-display text-2xl font-bold text-white">{c.introTitle}</h2>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/60">
              {c.heroTrust.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:pt-4">
            <HeroQuoteForm c={c} />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroQuoteForm({ c }: { c: PricingContent }) {
  return (
    <div className="rounded-lg border border-white/[0.12] bg-white/[0.07] p-6 backdrop-blur-xl">
      <div className="mb-5">
        <p className="font-display text-xl font-bold text-white">{c.formTitle}</p>
        <p className="mt-1 text-xs text-white/60">{c.formSubtitle}</p>
      </div>
      <form
        action="https://formspree.io/f/meendqow"
        method="POST"
        className="flex flex-col gap-3"
      >
        <input type="hidden" name="_language" value={c.lang} />
        <input type="hidden" name="_subject" value={c.formSubject} />
        <input type="hidden" name="page" value={c.canonical} />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-white/60">
              {c.formName} *
            </label>
            <input
              required
              type="text"
              name="nom"
              autoComplete="name"
              placeholder={c.lang === "fr" ? "Jean Dupont" : "Max Müller"}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/50 focus:bg-white/15 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-white/60">
              {c.formPhone} *
            </label>
            <input
              required
              type="tel"
              name="telephone"
              autoComplete="tel"
              placeholder="+41 22 518 09 36"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/50 focus:bg-white/15 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-white/60">
            {c.formEmail} *
          </label>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={c.lang === "fr" ? "jean@entreprise.ch" : "max@firma.ch"}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/50 focus:bg-white/15 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-white/60">{c.formModel}</label>
          <select
            name="modele"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white transition-all focus:border-white/50 focus:outline-none"
          >
            <option value="" className="bg-white text-[#021647]">
              {c.lang === "fr" ? "Choisir un modèle" : "Modell wählen"}
            </option>
            {c.products.map((p) => (
              <option key={p.id} value={p.id} className="bg-white text-[#021647]">
                {p.model} — {formatPrice(p.price)} {c.priceVat}
              </option>
            ))}
            <option value="conseil" className="bg-white text-[#021647]">
              {c.formModelAdvice}
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[#E63946] py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#E63946]/90"
        >
          {c.formSubmit}
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-white/60">{c.formLegal}</p>
      </form>
    </div>
  )
}

function DistributorBanner({ c }: { c: PricingContent }) {
  return (
    <section className="border-b border-gray-200 bg-[#F8F9FC] py-10" aria-label={c.distributorTitle}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#4A5568]">
          {c.distributorTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {DISTRIBUTOR_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="relative h-8 w-28 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductGrid({ c }: { c: PricingContent }) {
  const [type, setType] = useState<TypeFilter>("all")
  const [brand, setBrand] = useState("all")
  const [budget, setBudget] = useState<BudgetFilter>("all")

  const brands = useMemo(
    () => Array.from(new Set(c.products.map((p) => p.brand))),
    [c.products],
  )

  const budgetLabels = useMemo(() => {
    if (c.lang === "fr") {
      return {
        all: "Tous budgets",
        lt1100: "< 1 100 €",
        "1100-1400": "1 100 – 1 400 €",
        "1400-1700": "1 400 – 1 700 €",
        gt1700: "> 1 700 €",
      }
    }
    return {
      all: "Alle Budgets",
      lt1100: "< 1 100 €",
      "1100-1400": "1 100 – 1 400 €",
      "1400-1700": "1 400 – 1 700 €",
      gt1700: "> 1 700 €",
    }
  }, [c.lang])

  const filtered = useMemo(() => {
    return c.products.filter((p) => {
      if (type !== "all" && p.type !== type) return false
      if (brand !== "all" && p.brand !== brand) return false
      if (budget === "lt1100" && p.price >= 1100) return false
      if (budget === "1100-1400" && (p.price < 1100 || p.price > 1400)) return false
      if (budget === "1400-1700" && (p.price < 1400 || p.price > 1700)) return false
      if (budget === "gt1700" && p.price <= 1700) return false
      return true
    })
  }, [c.products, type, brand, budget])

  return (
    <section id="modeles" className="bg-[#F8F9FC] py-16 lg:py-24" aria-labelledby="grid-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <SectionEyebrow>{c.lang === "fr" ? "Nos produits" : "Unsere Produkte"}</SectionEyebrow>
          <h2
            id="grid-title"
            className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#1A1D23] sm:text-4xl"
          >
            {c.gridTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#4A5568]">{c.gridSubtitle}</p>
        </div>

        <div className="mb-8 space-y-4 rounded-lg border border-gray-200 bg-white p-5">
          <FilterRow label={c.filterType}>
            <FilterPill active={type === "all"} onClick={() => setType("all")}>
              {c.typeAll}
            </FilterPill>
            <FilterPill active={type === "DAE"} onClick={() => setType("DAE")}>
              {c.lang === "fr" ? "DAE — Automatique" : "AED — Vollautomatisch"}
            </FilterPill>
            <FilterPill active={type === "DSA"} onClick={() => setType("DSA")}>
              {c.lang === "fr" ? "DSA — Semi-auto" : "Halbautomatisch"}
            </FilterPill>
          </FilterRow>

          <div className="h-px bg-gray-200" />

          <FilterRow label={c.filterBrand}>
            <FilterPill active={brand === "all"} onClick={() => setBrand("all")}>
              {c.brandAll}
            </FilterPill>
            {brands.map((b) => (
              <FilterPill key={b} active={brand === b} onClick={() => setBrand(b)}>
                {b}
              </FilterPill>
            ))}
          </FilterRow>

          <div className="h-px bg-gray-200" />

          <FilterRow label={c.filterBudget}>
            {(Object.keys(budgetLabels) as BudgetFilter[]).map((key) => (
              <FilterPill key={key} active={budget === key} onClick={() => setBudget(key)}>
                {budgetLabels[key]}
              </FilterPill>
            ))}
          </FilterRow>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[#4A5568]">{c.noResults}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} c={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-[#4A5568]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function ProductCard({ product, c }: { product: PricingProduct; c: PricingContent }) {
  const tagVariant =
    product.tagline.toLowerCase().includes("moins") ||
    product.tagline.toLowerCase().includes("günstig") ||
    product.tagline.toLowerCase().includes("cheaper")
      ? "vital"
      : product.tagline.toLowerCase().includes("premium")
        ? "navy"
        : "muted"

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative flex h-44 items-center justify-center bg-white">
        <Image
          src={product.image}
          alt={product.model}
          width={200}
          height={140}
          className="max-h-[140px] max-w-[80%] object-contain"
          unoptimized
        />
        <span
          className={cn(
            "absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-bold text-white",
            tagVariant === "vital" && "bg-[#E63946]",
            tagVariant === "navy" && "bg-[#021647]",
            tagVariant === "muted" && "bg-[#021647]/80",
          )}
        >
          {product.tagline}
        </span>
        <span className="absolute top-3 right-3 rounded-full border border-gray-200 bg-white/90 px-2 py-0.5 text-xs font-semibold text-[#4A5568]">
          {product.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-[#1A1D23]">
            {product.model}
          </h3>
          <p className="mt-0.5 text-xs text-[#4A5568]">
            {product.typeLabel} · {product.brand}
          </p>
        </div>

        <div className="flex items-end gap-1">
          <span className="font-display text-3xl font-bold text-[#1A1D23]">
            {formatPrice(product.price)}
          </span>
          <span className="mb-0.5 text-sm text-[#4A5568]">{c.priceVat}</span>
        </div>

        <p className="border-b border-gray-200 pb-3 text-xs text-[#4A5568]">
          {c.lang === "fr" ? "Garantie" : "Garantie"} {product.warranty}{" "}
          {c.lang === "fr" ? "ans" : "Jahre"} · {product.ip} · {product.weight}
        </p>

        <ul className="flex-1 space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-[#4A5568]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 pt-2">
          <a
            href={`/${c.lang}/#contact`}
            className="w-full rounded-full bg-[#E63946] py-2.5 text-center text-xs font-bold text-white transition-all duration-200 hover:bg-[#E63946]/90"
          >
            {c.cardCta}
          </a>
          <p className="text-center text-xs text-[#4A5568]">
            {c.cardCost4y} :{" "}
            <strong className="text-[#021647]">{formatPrice(product.cost4y)}</strong> {c.priceVat}
          </p>
        </div>
      </div>
    </article>
  )
}

function ComparisonTable({ c }: { c: PricingContent }) {
  const rows = [...c.products].sort((a, b) => a.cost4y - b.cost4y)
  const col = (key: string) =>
    c.lang === "fr"
      ? {
          model: "Modèle",
          price: "Prix achat HT",
          warranty: "Garantie",
          electrodes: "Électrodes HT",
          battery: "Batterie HT",
          cost4y: "Coût 4 ans HT",
        }[key]
      : {
          model: "Modell",
          price: "Kaufpreis exkl. MwSt.",
          warranty: "Garantie",
          electrodes: "Elektroden",
          battery: "Batterie",
          cost4y: "Kosten 4 Jahre",
        }[key]

  return (
    <section className="bg-white py-16 lg:py-20" aria-labelledby="comparison-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <SectionEyebrow>
            {c.lang === "fr" ? "Transparence totale" : "Volle Transparenz"}
          </SectionEyebrow>
          <h2
            id="comparison-title"
            className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#1A1D23] sm:text-4xl"
          >
            {c.comparisonTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#4A5568]">{c.comparisonNote}</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="bg-[#021647] text-white">
                <th className="rounded-tl-lg px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide">
                  {col("model")}
                </th>
                <th className="px-3 py-4 text-center text-xs font-semibold">{col("price")}</th>
                <th className="px-3 py-4 text-center text-xs font-semibold">{col("warranty")}</th>
                <th className="px-3 py-4 text-center text-xs font-semibold">{col("electrodes")}</th>
                <th className="px-3 py-4 text-center text-xs font-semibold">{col("battery")}</th>
                <th className="rounded-tr-lg px-3 py-4 text-center text-xs font-semibold">
                  {col("cost4y")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((p) => (
                <tr key={p.id} className="transition-colors hover:bg-[#F8F9FC]">
                  <td className="px-4 py-3.5">
                    <span className="text-sm font-semibold text-[#1A1D23]">{p.model}</span>
                    <span className="block text-xs text-[#4A5568]">{p.brand}</span>
                  </td>
                  <td className="px-3 py-3.5 text-center text-sm text-[#4A5568]">
                    {formatPrice(p.price)}
                  </td>
                  <td className="px-3 py-3.5 text-center text-xs text-[#4A5568]">
                    {p.warranty} {c.lang === "fr" ? "ans" : "Jahre"}
                  </td>
                  <td className="px-3 py-3.5 text-center text-xs text-[#4A5568]">
                    {p.electrodesLabel}
                  </td>
                  <td className="px-3 py-3.5 text-center text-xs text-[#4A5568]">
                    {p.batteryLabel}
                  </td>
                  <td className="px-3 py-3.5 text-center text-sm font-bold text-[#021647]">
                    {formatPrice(p.cost4y)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-xs text-[#4A5568]">{c.comparisonFootnote}</p>
      </div>
    </section>
  )
}

function WhyBuy({ c }: { c: PricingContent }) {
  const icons = [Truck, ShieldCheck, CreditCard, Users]
  return (
    <section className="bg-[#F8F9FC] py-16 lg:py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionEyebrow>{c.lang === "fr" ? "Pourquoi CardioPro" : "Warum CardioPro"}</SectionEyebrow>
          <h2
            id="why-title"
            className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#1A1D23] sm:text-4xl"
          >
            {c.whyTitle}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.why.map((block, i) => {
            const Icon = icons[i] ?? ShieldCheck
            return (
              <div
                key={block.title}
                className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#E63946]/10 text-[#E63946]">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-base font-semibold text-[#1A1D23]">
                    {block.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#4A5568]">{block.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ChooseSection({ c }: { c: PricingContent }) {
  return (
    <section className="bg-white py-16 lg:py-20" aria-labelledby="choose-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionEyebrow>{c.lang === "fr" ? "Guide d'achat" : "Kaufratgeber"}</SectionEyebrow>
          <h2
            id="choose-title"
            className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#1A1D23] sm:text-4xl"
          >
            {c.chooseTitle}
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {c.choose.map((block) => (
            <div key={block.title} className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-display text-lg font-semibold text-[#1A1D23]">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5568]">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function References({ c }: { c: PricingContent }) {
  return (
    <section className="border-y border-gray-200 bg-[#F8F9FC] py-10" aria-labelledby="references-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          id="references-title"
          className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#4A5568]"
        >
          {c.referencesTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {c.references.map((ref) => (
            <span
              key={ref}
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-[#021647] opacity-70 transition-opacity hover:opacity-100"
            >
              {ref}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqBlock({ c }: { c: PricingContent }) {
  return (
    <section id="faq" className="bg-white py-16 lg:py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2
            id="faq-title"
            className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#1A1D23] sm:text-4xl"
          >
            {c.faqTitle}
          </h2>
        </div>
        <Accordion type="single" collapsible className="rounded-lg border border-gray-200 px-2">
          {c.faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`} className="border-gray-200 last:border-0">
              <AccordionTrigger className="px-4 py-5 text-left font-display text-base font-medium tracking-tight text-[#1A1D23] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-[#4A5568]">
                <div dangerouslySetInnerHTML={{ __html: item.a }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function FinalCta({ c }: { c: PricingContent }) {
  return (
    <section className="bg-[#021647] py-16 text-white md:py-20" aria-labelledby="cta-title">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionEyebrow>{c.ctaEyebrow}</SectionEyebrow>
        <h2
          id="cta-title"
          className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl"
        >
          {c.ctaTitleLine1}
          <br className="hidden sm:block" /> {c.ctaTitleLine2}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{c.ctaText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`/${c.lang}/#contact`}
            className="inline-flex items-center gap-2 rounded-full bg-[#E63946] px-8 py-4 text-sm font-bold transition-all duration-200 hover:bg-[#E63946]/90"
          >
            {c.ctaButton}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`tel:${c.ctaPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold transition-all duration-200 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {c.ctaPhone}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          {c.ctaTrust.map((item) => (
            <span key={item}>✔ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
