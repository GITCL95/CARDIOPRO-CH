"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Check,
  ChevronRight,
  CreditCard,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from "lucide-react"
import type { Translations } from "@/lib/translations"
import {
  type RentalContent,
  type RentalFormula,
} from "@/lib/rental"
import { formatChfPrice } from "@/lib/pricing"
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

interface RentalPageProps {
  t: Translations
  c: RentalContent
}

function formatPrice(value: number) {
  return formatChfPrice(value)
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

export default function RentalPage({ t, c }: RentalPageProps) {
  const [selected, setSelected] = useState("")

  const handleSelect = (name: string) => {
    setSelected(name)
    if (typeof document !== "undefined") {
      document.getElementById("devis")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const long = c.formulas.filter((f) => f.months >= 24)
  const medium = c.formulas.filter((f) => f.months >= 6 && f.months < 24)
  const short = c.formulas.filter((f) => f.months < 6)

  return (
    <div className="min-h-screen bg-white text-[#1A1D23]">
      <Navbar t={t} />
      <main id="main-content">
        <Hero c={c} />
        <WhyRent c={c} selected={selected} setSelected={setSelected} />
        <DistributorBanner c={c} />
        <FormulaGroup c={c} title={c.longTitle} intro={c.longIntro} formulas={long} onSelect={handleSelect} />
        <FormulaGroup c={c} title={c.mediumTitle} intro={c.mediumIntro} formulas={medium} subtle onSelect={handleSelect} />
        <FormulaGroup c={c} title={c.shortTitle} intro={c.shortIntro} formulas={short} onSelect={handleSelect} />
        <Specialist c={c} />
        <FormulasTable c={c} />
        <CompareTable c={c} />
        <ChooseSection c={c} />
        <References c={c} />
        <FaqBlock c={c} />
        <FinalCta c={c} />
      </main>
      <Footer t={t} />
    </div>
  )
}

function Hero({ c }: { c: RentalContent }) {
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

        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
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

function QuoteForm({
  c,
  selected,
  setSelected,
}: {
  c: RentalContent
  selected: string
  setSelected: (v: string) => void
}) {
  return (
    <Card className="border-gray-200 shadow-[0_8px_30px_rgba(2,22,71,0.12)]">
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1D23]">{c.formTitle}</h2>
        <p className="mt-2 text-sm text-[#4A5568]">{c.formSubtitle}</p>
        <form action="https://formspree.io/f/meendqow" method="POST" className="mt-6 grid gap-4">
          <input type="hidden" name="_language" value={c.lang} />
          <input type="hidden" name="_subject" value={c.formSubject} />
          <input type="hidden" name="page" value={c.canonical} />
          <div className="grid gap-2">
            <label htmlFor="r-formula" className="text-sm font-semibold text-[#1A1D23]">
              {c.formSelected}
            </label>
            <Input
              id="r-formula"
              name="formule"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              placeholder={c.formSelected}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="r-name" className="text-sm font-semibold text-[#1A1D23]">
              {c.formName} *
            </label>
            <Input id="r-name" name="nom" required autoComplete="name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="r-company" className="text-sm font-semibold text-[#1A1D23]">
                {c.formCompany}
              </label>
              <Input id="r-company" name="entreprise" autoComplete="organization" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="r-phone" className="text-sm font-semibold text-[#1A1D23]">
                {c.formPhone} *
              </label>
              <Input id="r-phone" name="telephone" type="tel" required autoComplete="tel" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="r-email" className="text-sm font-semibold text-[#1A1D23]">
              {c.formEmail} *
            </label>
            <Input id="r-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="r-message" className="text-sm font-semibold text-[#1A1D23]">
              {c.formMessage}
            </label>
            <Textarea id="r-message" name="message" rows={3} />
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

function WhyRent({
  c,
  selected,
  setSelected,
}: {
  c: RentalContent
  selected: string
  setSelected: (v: string) => void
}) {
  return (
    <section id="devis" className="bg-white py-20" aria-labelledby="why-title">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionTitle id="why-title">{c.whyTitle}</SectionTitle>
          <div className="mt-6 space-y-4 text-lg leading-8 text-[#4A5568]">
            {c.whyParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <QuoteForm c={c} selected={selected} setSelected={setSelected} />
        </motion.div>
      </div>
    </section>
  )
}

function DistributorBanner({ c }: { c: RentalContent }) {
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

function FormulaGroup({
  c,
  title,
  intro,
  formulas,
  subtle = false,
  onSelect,
}: {
  c: RentalContent
  title: string
  intro: string
  formulas: RentalFormula[]
  subtle?: boolean
  onSelect: (name: string) => void
}) {
  return (
    <section className={subtle ? "bg-[#F8F9FC] py-20" : "bg-white py-20"} aria-label={title}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle>{title}</SectionTitle>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A5568]">{intro}</p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {formulas.map((f) => (
            <motion.div key={f.id} variants={fadeUp}>
              <FormulaCard c={c} formula={f} onSelect={onSelect} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FormulaCard({
  c,
  formula,
  onSelect,
}: {
  c: RentalContent
  formula: RentalFormula
  onSelect: (name: string) => void
}) {
  return (
    <article
      data-formula={formula.id}
      data-months={formula.months}
      data-price={formula.price}
      className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${
        formula.recommended ? "border-2 border-[#E63946]" : "border border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#F8F9FC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E3A82]">
          {formula.monthsLabel}
        </span>
        {formula.recommended ? (
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E63946]">
            {c.recommendedBadge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-[#1A1D23]">{formula.name}</h3>
      <p className="mt-1 text-sm text-[#4A5568]">{formula.tagline}</p>

      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-4xl font-bold text-[#0E3A82]">{formatPrice(formula.price)}</span>
        <span className="pb-1 text-sm font-semibold text-[#4A5568]">{c.perMonth}</span>
      </div>
      <p className="mt-1 text-xs text-[#4A5568]">{c.priceVat}</p>

      <ul className="mt-5 space-y-2.5">
        <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
          <span>
            {formula.warrantyLabel} · {formula.ip}
          </span>
        </li>
        {formula.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-[#4A5568]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Button
          type="button"
          data-select-value={formula.id}
          className="w-full"
          onClick={() => onSelect(`${formula.name} — ${formatPrice(formula.price)}${c.perMonth}`)}
        >
          {c.selectCta}
        </Button>
      </div>
    </article>
  )
}

function Specialist({ c }: { c: RentalContent }) {
  const icons = [Truck, CreditCard]
  return (
    <section className="bg-white py-20" aria-labelledby="specialist-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="specialist-title">{c.specialistTitle}</SectionTitle>
        <div className="mt-6 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-8 text-[#4A5568]">
            {c.specialistBody.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {c.specialist.map((block, i) => {
              const Icon = icons[i] ?? Truck
              return (
                <Card key={block.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0E3A82]">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1A1D23]">{block.title}</h3>
                    <p
                      className="mt-2 text-sm leading-7 text-[#4A5568]"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormulasTable({ c }: { c: RentalContent }) {
  const ordered = [...c.formulas].sort((a, b) => a.months - b.months)
  return (
    <section className="bg-[#F8F9FC] py-20" aria-labelledby="formulas-table-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="formulas-table-title">{c.tableTitle}</SectionTitle>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A5568]">{c.tableIntro}</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#021647] text-white">
                <th scope="col" className="sticky left-0 z-10 bg-[#021647] px-4 py-3 text-left font-semibold">
                  {c.tableFormula}
                </th>
                {ordered.map((f) => (
                  <th key={f.id} scope="col" className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                    {f.monthsLabel}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <TableRow
                label={c.tablePrice}
                cells={ordered.map((f) => `${formatPrice(f.price)}${c.perMonth}`)}
                rowIndex={0}
                highlight
              />
              <TableRow
                label={c.tableEngagement}
                cells={ordered.map((f) => `${f.months} ${c.monthUnit}`)}
                rowIndex={1}
              />
              <TableRow label={c.tableDelivery} cells={ordered.map(() => "check")} rowIndex={2} check />
              <TableRow label={c.tableConsumables} cells={ordered.map(() => "check")} rowIndex={3} check />
              <TableRow label={c.tableIdeal} cells={ordered.map((f) => f.idealFor)} rowIndex={4} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TableRow({
  label,
  cells,
  rowIndex,
  highlight = false,
  check = false,
}: {
  label: string
  cells: string[]
  rowIndex: number
  highlight?: boolean
  check?: boolean
}) {
  const bg = rowIndex % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"
  return (
    <tr className={bg}>
      <th scope="row" className={`sticky left-0 z-10 ${bg} px-4 py-3 text-left font-semibold text-[#1A1D23]`}>
        {label}
      </th>
      {cells.map((value, i) => (
        <td
          key={i}
          className={`px-4 py-3 whitespace-nowrap ${highlight ? "font-bold text-[#0E3A82]" : "text-[#4A5568]"}`}
        >
          {check ? <Check className="h-4 w-4 text-[#10B981]" aria-label="inclus" /> : value}
        </td>
      ))}
    </tr>
  )
}

function CompareTable({ c }: { c: RentalContent }) {
  return (
    <section className="bg-white py-20" aria-labelledby="compare-title">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle id="compare-title">{c.compareTitle}</SectionTitle>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A5568]">{c.compareIntro}</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#021647] text-white">
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  {c.compareCriteria}
                </th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <BadgeCheck size={15} />
                    {c.compareRental}
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  {c.comparePurchase}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.compareRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"}>
                  <th scope="row" className={`px-4 py-3 text-left font-semibold text-[#1A1D23] ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"}`}>
                    {row.label}
                  </th>
                  <td className={`px-4 py-3 align-top font-semibold text-[#0E3A82] ${row.highlight ? "bg-blue-50" : "bg-[#0E3A82]/5"}`}>
                    {row.rental}
                  </td>
                  <td className="px-4 py-3 align-top text-[#4A5568]">{row.purchase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#4A5568]">{c.compareNote}</p>
      </div>
    </section>
  )
}

function ChooseSection({ c }: { c: RentalContent }) {
  const icons = [ShieldCheck, Calendar, Truck, Wrench]
  return (
    <section className="bg-[#F8F9FC] py-20" aria-labelledby="choose-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle id="choose-title">{c.chooseTitle}</SectionTitle>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A5568]">{c.chooseIntro}</p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {c.choose.map((block, i) => {
            const Icon = icons[i] ?? ShieldCheck
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

function References({ c }: { c: RentalContent }) {
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

function FaqBlock({ c }: { c: RentalContent }) {
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

function FinalCta({ c }: { c: RentalContent }) {
  return (
    <section className="bg-gradient-to-br from-[#021647] to-[#0E3A82] py-20 text-white" aria-labelledby="cta-title">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p id="cta-title" className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          {c.ctaTitle}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">{c.ctaText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ShimmerButton asChild size="lg">
            <a href="#devis">
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
