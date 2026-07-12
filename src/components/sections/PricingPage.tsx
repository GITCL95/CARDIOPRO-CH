"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CreditCard,
  Phone,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  Truck,
  Users,
  Wrench,
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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Marquee } from "@/components/premium/marquee"
import { ShimmerButton } from "@/components/premium/shimmer-button"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
}

interface PricingPageProps {
  t: Translations
  c: PricingContent
}

function formatPrice(value: number) {
  return `${value.toLocaleString("fr-CH").replace(/\u00a0/g, " ")} ${currencySymbol}`
}

function SectionTitle({
  children,
  invert = false,
  id,
}: {
  children: React.ReactNode
  invert?: boolean
  id?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-8 w-1 shrink-0 rounded-full bg-[#E63946]" aria-hidden="true" />
      <h2
        id={id}
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
          invert ? "text-white" : "text-[#1A1D23]"
        }`}
      >
        {children}
      </h2>
    </div>
  )
}

export default function PricingPage({ t, c }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1A1D23]">
      <Navbar t={t} />
      <main id="main-content">
        <Hero c={c} />
        <IntroForm c={c} />
        <DistributorBanner c={c} />
        <ProductGrid c={c} />
        <WhyBuy c={c} />
        <ComparisonTable c={c} />
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#021647] to-[#0E3A82] text-white pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href={`/${c.lang}/`} className="hover:text-white">
                {c.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} className="opacity-60" />
            </li>
            <li aria-current="page" className="font-semibold text-white/80">
              {c.breadcrumbCurrentShort}
            </li>
          </ol>
        </nav>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Badge className="border-white/20 bg-white/10 text-white">
              <ShieldCheck size={14} />
              {c.heroBadge}
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {c.heroTitle}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-white/85">
            {c.heroSub}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function QuoteForm({ c }: { c: PricingContent }) {
  return (
    <Card className="border-gray-200 shadow-[0_8px_30px_rgba(2,22,71,0.12)]">
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1D23]">{c.formTitle}</h2>
        <p className="mt-2 text-sm text-[#4A5568]">{c.formSubtitle}</p>
        <form
          action="https://formspree.io/f/meendqow"
          method="POST"
          className="mt-6 grid gap-4"
        >
          <input type="hidden" name="_language" value={c.lang} />
          <input type="hidden" name="_subject" value={c.formSubject} />
          <input type="hidden" name="page" value={c.canonical} />
          <div className="grid gap-2">
            <label htmlFor="q-name" className="text-sm font-semibold text-[#1A1D23]">
              {c.formName} *
            </label>
            <Input id="q-name" name="nom" required autoComplete="name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="q-company" className="text-sm font-semibold text-[#1A1D23]">
                {c.formCompany}
              </label>
              <Input id="q-company" name="entreprise" autoComplete="organization" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="q-phone" className="text-sm font-semibold text-[#1A1D23]">
                {c.formPhone} *
              </label>
              <Input id="q-phone" name="telephone" type="tel" required autoComplete="tel" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="q-email" className="text-sm font-semibold text-[#1A1D23]">
              {c.formEmail} *
            </label>
            <Input id="q-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="q-message" className="text-sm font-semibold text-[#1A1D23]">
              {c.formMessage}
            </label>
            <Textarea id="q-message" name="message" rows={3} />
          </div>
          <ShimmerButton type="submit" size="lg" className="w-full">
            {c.formSubmit}
            <ArrowRight size={18} />
          </ShimmerButton>
          <p className="text-center text-xs leading-6 text-[#4A5568]">{c.formLegal}</p>
        </form>
      </CardContent>
    </Card>
  )
}

function IntroForm({ c }: { c: PricingContent }) {
  return (
    <section className="bg-white py-20" aria-labelledby="intro-title">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionTitle id="intro-title">{c.introTitle}</SectionTitle>
          <p className="mt-6 text-lg leading-8 text-[#4A5568]">{c.introBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge variant="success">
              <Truck size={14} />
              {c.lang === "fr" ? "Livraison 48h" : "Lieferung 48h"}
            </Badge>
            <Badge>
              <BadgeCheck size={14} />
              {c.lang === "fr" ? "Distributeur agréé" : "Autorisierter Händler"}
            </Badge>
            <Badge variant="heart">
              <Users size={14} />
              {c.lang === "fr" ? "+20 000 installations" : "+20 000 Installationen"}
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <QuoteForm c={c} />
        </motion.div>
      </div>
    </section>
  )
}

function DistributorBanner({ c }: { c: PricingContent }) {
  return (
    <section className="border-y border-gray-200 bg-[#F8F9FC] py-10" aria-label={c.distributorTitle}>
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5568]">
          {c.distributorTitle}
        </p>
        <Marquee>
          {c.distributors.map((brand) => (
            <div
              key={brand}
              className="rounded-full border border-gray-200 bg-white px-7 py-2.5 font-display text-lg font-bold text-[#021647]"
            >
              {brand}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

function ProductGrid({ c }: { c: PricingContent }) {
  const prices = c.products.map((p) => p.price)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const [budgetMax, setBudgetMax] = useState(maxPrice)
  const [type, setType] = useState<"all" | "DAE" | "DSA">("all")
  const [warranty, setWarranty] = useState("0")
  const [brand, setBrand] = useState("all")
  const [sort, setSort] = useState("default")

  const brands = useMemo(
    () => Array.from(new Set(c.products.map((p) => p.brand))),
    [c.products],
  )

  const filtered = useMemo(() => {
    let list = c.products.filter((p) => {
      if (p.price > budgetMax) return false
      if (type !== "all" && p.type !== type) return false
      if (warranty !== "0" && p.warranty < Number(warranty)) return false
      if (brand !== "all" && p.brand !== brand) return false
      return true
    })

    switch (sort) {
      case "priceAsc":
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case "priceDesc":
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case "cost4Asc":
        list = [...list].sort((a, b) => a.cost4y - b.cost4y)
        break
      case "warrantyDesc":
        list = [...list].sort((a, b) => b.warranty - a.warranty)
        break
    }
    return list
  }, [c.products, budgetMax, type, warranty, brand, sort])

  const reset = () => {
    setBudgetMax(maxPrice)
    setType("all")
    setWarranty("0")
    setBrand("all")
    setSort("default")
  }

  return (
    <section id="modeles" className="bg-white py-20" aria-labelledby="grid-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="grid-title">{c.gridTitle}</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4A5568]">{c.gridSubtitle}</p>

        {/* Filters */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-[#F8F9FC] p-6">
          <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0E3A82]">
            <SlidersHorizontal size={16} />
            {c.filterTitle}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-1">
              <label htmlFor="f-budget" className="mb-2 block text-xs font-semibold text-[#4A5568]">
                {c.filterBudget} — {formatPrice(budgetMax)}
              </label>
              <input
                id="f-budget"
                type="range"
                min={minPrice}
                max={maxPrice}
                step={50}
                value={budgetMax}
                onChange={(e) => setBudgetMax(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#E63946]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#4A5568]">{c.filterType}</label>
              <Select value={type} onValueChange={(v) => setType(v as typeof type)}>
                <SelectTrigger className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{c.typeAll}</SelectItem>
                  <SelectItem value="DAE">DAE</SelectItem>
                  <SelectItem value="DSA">DSA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#4A5568]">{c.filterWarranty}</label>
              <Select value={warranty} onValueChange={setWarranty}>
                <SelectTrigger className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">{c.warrantyAll}</SelectItem>
                  <SelectItem value="4">4 {c.lang === "fr" ? "ans" : "Jahre"}+</SelectItem>
                  <SelectItem value="7">7 {c.lang === "fr" ? "ans" : "Jahre"}+</SelectItem>
                  <SelectItem value="8">8 {c.lang === "fr" ? "ans" : "Jahre"}+</SelectItem>
                  <SelectItem value="10">10 {c.lang === "fr" ? "ans" : "Jahre"}+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#4A5568]">{c.filterBrand}</label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{c.brandAll}</SelectItem>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-3">
              <label className="mb-2 block text-xs font-semibold text-[#4A5568]">{c.filterSort}</label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">{c.sortDefault}</SelectItem>
                  <SelectItem value="priceAsc">{c.sortPriceAsc}</SelectItem>
                  <SelectItem value="priceDesc">{c.sortPriceDesc}</SelectItem>
                  <SelectItem value="cost4Asc">{c.sortCost4Asc}</SelectItem>
                  <SelectItem value="warrantyDesc">{c.sortWarrantyDesc}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button type="button" variant="outline" className="w-full" onClick={reset}>
                <RotateCcw size={15} />
                {c.filterReset}
              </Button>
            </div>
          </div>

          <p className="mt-5 text-sm font-semibold text-[#0E3A82]" role="status" aria-live="polite">
            {filtered.length === 1
              ? c.resultsOne
              : c.resultsMany.replace("{n}", String(filtered.length))}
          </p>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-[#4A5568]">{c.noResults}</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} c={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ product, c }: { product: PricingProduct; c: PricingContent }) {
  return (
    <article
      data-model={product.model}
      data-brand={product.brand}
      data-type={product.type}
      data-price={product.price}
      data-warranty={product.warranty}
      data-ip={product.ip}
      data-weight={product.weight}
      data-cost4={product.cost4y}
      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3 border-b border-gray-100 p-6 pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#4A5568]">{product.brand}</p>
          <h3 className="mt-1 font-display text-xl font-bold leading-tight text-[#1A1D23]">{product.model}</h3>
          <p className="mt-1 text-sm text-[#4A5568]">{product.typeLabel}</p>
        </div>
        <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E63946]">
          {product.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <p className="inline-flex w-fit rounded-full bg-[#F8F9FC] px-3 py-1 text-xs font-semibold text-[#0E3A82]">
          {product.tagline}
        </p>

        <div className="mt-5 flex items-end gap-2">
          <span className="font-display text-4xl font-bold text-[#0E3A82]">{formatPrice(product.price)}</span>
          <span className="pb-1 text-sm font-semibold text-[#4A5568]">{c.priceVat}</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-lg bg-[#F8F9FC] px-2 py-2">
            <p className="font-bold text-[#1A1D23]">{product.warranty} {c.lang === "fr" ? "ans" : "J."}</p>
            <p className="text-[#4A5568]">{c.cardWarranty}</p>
          </div>
          <div className="rounded-lg bg-[#F8F9FC] px-2 py-2">
            <p className="font-bold text-[#1A1D23]">{product.ip}</p>
            <p className="text-[#4A5568]">IP</p>
          </div>
          <div className="rounded-lg bg-[#F8F9FC] px-2 py-2">
            <p className="font-bold text-[#1A1D23]">{product.weight}</p>
            <p className="text-[#4A5568]">{c.lang === "fr" ? "poids" : "Gewicht"}</p>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-[#4A5568]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg bg-[#F8F9FC] px-4 py-3 text-sm">
          <span className="text-[#4A5568]">{c.cardCost4y} : </span>
          <span className="font-bold text-[#1A1D23]">{formatPrice(product.cost4y)}</span>
        </div>

        <div className="mt-auto pt-6">
          <Button asChild className="w-full">
            <a href={`/${c.lang}/#contact`}>{c.cardCta}</a>
          </Button>
        </div>
      </div>
    </article>
  )
}

function WhyBuy({ c }: { c: PricingContent }) {
  const icons = [Truck, CreditCard, ShieldCheck, Users]
  return (
    <section className="bg-[#F8F9FC] py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="why-title">{c.whyTitle}</SectionTitle>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {c.why.map((block, i) => {
            const Icon = icons[i] ?? ShieldCheck
            return (
              <motion.div key={block.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0E3A82]">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1A1D23]">{block.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#4A5568]">{block.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function ComparisonTable({ c }: { c: PricingContent }) {
  return (
    <section className="bg-white py-20" aria-labelledby="comparison-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="comparison-title">{c.comparisonTitle}</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4A5568]">{c.comparisonNote}</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#021647] text-white">
                <th scope="col" className="sticky left-0 z-10 bg-[#021647] px-4 py-3 text-left font-semibold">
                  {c.comparisonCriteria}
                </th>
                {c.comparisonOrder.map((model) => (
                  <th key={model} scope="col" className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                    {model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.comparison.map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className={
                    row.highlight
                      ? "bg-blue-50 font-bold text-[#021647]"
                      : rowIndex % 2 === 0
                        ? "bg-white"
                        : "bg-[#F8F9FC]"
                  }
                >
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 px-4 py-3 text-left font-semibold text-[#1A1D23] ${
                      row.highlight ? "bg-blue-50" : rowIndex % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"
                    }`}
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 whitespace-nowrap ${
                        row.highlight ? "text-emerald-700" : "text-[#4A5568]"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#4A5568]">
          {c.lang === "fr"
            ? "* Batterie incluse pour la durée de garantie (pas de remplacement sur 4 ans)."
            : "* Batterie für die Garantiedauer inbegriffen (kein Austausch über 4 Jahre)."}
        </p>
      </div>
    </section>
  )
}

function ChooseSection({ c }: { c: PricingContent }) {
  const icons = [Stethoscope, CreditCard, Truck, Wrench]
  return (
    <section className="bg-[#F8F9FC] py-20" aria-labelledby="choose-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="choose-title">{c.chooseTitle}</SectionTitle>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {c.choose.map((block, i) => {
            const Icon = icons[i] ?? Stethoscope
            return (
              <motion.div key={block.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="flex gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E63946]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#1A1D23]">{block.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#4A5568]">{block.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function References({ c }: { c: PricingContent }) {
  return (
    <section className="bg-white py-20" aria-labelledby="references-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionTitle id="references-title">{c.referencesTitle}</SectionTitle>
          <p className="mt-6 text-lg leading-8 text-[#4A5568]">{c.referencesIntro}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.references.map((ref) => (
              <li key={ref} className="flex items-start gap-3 rounded-xl bg-[#F8F9FC] p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]" />
                <span className="text-sm font-semibold text-[#1A1D23]">{ref}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <Card className="h-full bg-[#021647] text-white">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3">
                <BadgeCheck className="h-8 w-8 text-[#E63946]" />
                <h3 className="font-display text-2xl font-bold">{c.certificationsTitle}</h3>
              </div>
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge className="border-white/20 bg-white/10 text-white">CE Médical</Badge>
                <Badge className="border-white/20 bg-white/10 text-white">FDA</Badge>
                <Badge className="border-white/20 bg-white/10 text-white">SUVA</Badge>
                <Badge className="border-white/20 bg-white/10 text-white">Swiss RC</Badge>
              </div>
              <ul className="space-y-3">
                {c.certifications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function FaqBlock({ c }: { c: PricingContent }) {
  return (
    <section id="faq" className="bg-[#F8F9FC] py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center">
            <SectionTitle id="faq-title">{c.faqTitle}</SectionTitle>
          </div>
          <p className="mt-4 text-lg text-[#4A5568]">{c.faqSubtitle}</p>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
          {c.faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`} className="px-2">
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
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
    <section className="bg-gradient-to-br from-[#021647] to-[#0E3A82] py-20 text-white" aria-labelledby="cta-title">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p id="cta-title" className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          {c.ctaTitle}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">{c.ctaText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ShimmerButton asChild size="lg">
            <a href={`/${c.lang}/#contact`}>
              {c.ctaButton}
              <ArrowRight size={18} />
            </a>
          </ShimmerButton>
          <Button asChild variant="secondary" size="lg">
            <a href={`tel:${c.ctaPhone.replace(/\s/g, "")}`}>
              <Phone size={18} />
              {c.ctaPhone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
