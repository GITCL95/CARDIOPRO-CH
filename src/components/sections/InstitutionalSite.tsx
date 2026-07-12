"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  ArrowRight,
  ChevronDown,
  Clock,
  HeartPulse,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
} from "lucide-react"
import type { Translations } from "@/lib/translations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShimmerButton } from "@/components/premium/shimmer-button"
import { TextGenerateEffect } from "@/components/premium/text-generate-effect"

const BelowFoldSections = dynamic(() => import("./InstitutionalBelowFold"), {
  loading: () => <div className="h-32 bg-[#F8F9FC]" />,
})

interface InstitutionalSiteProps {
  t: Translations
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function InstitutionalSite({ t }: InstitutionalSiteProps) {
  return (
    <div className="min-h-screen bg-white text-[#1A1D23]">
      <Navbar t={t} />
      <main id="main-content">
        <Hero t={t} />
        <BelowFoldSections t={t} />
      </main>
    </div>
  )
}

type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; items: { href: string; label: string }[] }

function NavHref({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export function Navbar({ t }: InstitutionalSiteProps) {
  const [scrolled, setScrolled] = useState(false)
  const navItems: NavItem[] = [
    { type: "link", href: t.aboutHref, label: t.navAbout },
    {
      type: "dropdown",
      label: t.navOffers,
      items: [
        { href: t.pricingHref, label: t.navPrices },
        { href: t.rentalHref, label: t.navRental },
      ],
    },
    {
      type: "dropdown",
      label: t.navSolutions,
      items: [
        { href: t.enterpriseHref, label: t.navEnterprise },
        { href: t.particulierHref, label: t.navParticulier },
        { href: t.associationHref, label: t.navAssociation },
      ],
    },
    { type: "link", href: t.contactHref, label: t.navContact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="hidden border-b border-gray-200 bg-[#F8F9FC] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-[#4A5568]">
          <div className="flex items-center gap-5">
            <a className="flex items-center gap-1.5 hover:text-[#0E3A82]" href="tel:+41225180936">
              <Phone size={13} />
              +41 22 518 09 36
            </a>
            <a className="flex items-center gap-1.5 hover:text-[#0E3A82]" href="mailto:contact@cardiopro.ch">
              <Mail size={13} />
              contact@cardiopro.ch
            </a>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {t.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link className="font-semibold text-[#E63946]" href={t.contactHref}>
              {t.quoteOnline}
            </Link>
            <Link className="font-semibold text-[#0E3A82]" href={`/${t.lang}/`}>
              {t.lang.toUpperCase()}
            </Link>
            <Link className="text-[#4A5568] hover:text-[#0E3A82]" href={t.langAltHref}>
              {t.langAltLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href={`/${t.lang}/`} className="flex items-center gap-2" aria-label={t.logoAriaLabel}>
          <HeartPulse className="h-7 w-7 text-[#E63946]" />
          <span className="font-display text-2xl font-bold text-[#021647]">
            Cardio<span className="text-[#E63946]">Pro</span>
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#4A5568] sm:inline">
            Suisse
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) =>
            item.type === "link" ? (
              <NavHref
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#4A5568] transition-colors hover:bg-[#F8F9FC] hover:text-[#0E3A82]"
              >
                {item.label}
              </NavHref>
            ) : (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#4A5568] transition-colors hover:bg-[#F8F9FC] hover:text-[#0E3A82]"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[260px] rounded-xl border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-sm font-semibold text-[#4A5568] transition-colors hover:bg-[#F8F9FC] hover:text-[#0E3A82]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href="tel:+41225180936">
              <Phone size={14} />
              +41 22 518 09 36
            </a>
          </Button>
          <ShimmerButton asChild size="sm">
            <Link href={t.contactHref}>{t.quoteOnline}</Link>
          </ShimmerButton>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label={t.menuOpenAriaLabel}>
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mb-8 flex items-center gap-2">
              <HeartPulse className="h-6 w-6 text-[#E63946]" />
              <span className="font-display text-xl font-bold text-[#021647]">CardioPro</span>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <SheetClose asChild key={item.href}>
                    <NavHref
                      className="rounded-xl px-4 py-3 font-semibold text-[#1A1D23] hover:bg-[#F8F9FC]"
                      href={item.href}
                    >
                      {item.label}
                    </NavHref>
                  </SheetClose>
                ) : (
                  <div key={item.label} className="space-y-1">
                    <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#4A5568]">
                      {item.label}
                    </p>
                    {item.items.map((sub) => (
                      <SheetClose asChild key={sub.href}>
                        <Link
                          className="block rounded-xl px-6 py-3 font-semibold text-[#1A1D23] hover:bg-[#F8F9FC]"
                          href={sub.href}
                        >
                          {sub.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                )
              )}
            </nav>
            <div className="mt-8 flex gap-2">
              <Link className="rounded-full bg-[#F8F9FC] px-4 py-2 font-semibold text-[#0E3A82]" href={`/${t.lang}/`}>
                {t.lang.toUpperCase()}
              </Link>
              <Link className="rounded-full border border-gray-200 px-4 py-2 font-semibold text-[#4A5568]" href={t.langAltHref}>
                {t.langAltLabel}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function Hero({ t }: InstitutionalSiteProps) {
  return (
    <section
      id="produits"
      className="relative overflow-hidden bg-gradient-to-br from-[#021647] to-[#0E3A82] text-white"
    >
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div initial="hidden" animate="visible" className="relative z-10 space-y-7">
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Badge variant="heart" className="border-white/20 bg-white text-[#E63946]">
              <ShieldCheck size={14} />
              {t.heroTag}
            </Badge>
            <Badge className="border-white/20 bg-white/10 text-white">CE Médical</Badge>
            <Badge className="border-white/20 bg-white/10 text-white">SUVA</Badge>
            <Badge className="border-white/20 bg-white/10 text-white">Swiss RC</Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            <TextGenerateEffect text={t.heroTitle} />
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-white/85">
            {t.heroParagraph}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <ShimmerButton asChild size="lg">
              <a href="#offres">
                {t.heroCta1}
                <ArrowRight size={18} />
              </a>
            </ShimmerButton>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">{t.heroCta2}</a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="grid max-w-xl grid-cols-3 gap-3 pt-4">
            {[t.heroProduct1, t.heroProduct2, t.heroProduct3].map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="rounded-[2rem] bg-white p-3 shadow-2xl sm:p-4">
            <Image
              src="/images/hero-aed-studio.webp"
              alt="Défibrillateurs CardioPro Suisse — Noah Medical, HeartSine, Schiller FRED, ZOLL"
              width={1200}
              height={900}
              priority
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
