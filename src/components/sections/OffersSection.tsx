"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, X, Star, ArrowRight, Package } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Translations } from "@/lib/translations"

interface OffersSectionProps {
  t: Translations
}

type Tab = "rental" | "purchase"

export default function OffersSection({ t }: OffersSectionProps) {
  const [tab, setTab] = useState<Tab>("rental")

  const rentalPacks = [
    {
      name: t.packAccessName,
      price: t.rentalAccessPrice,
      unit: t.rentalAccessUnit,
      vat: t.rentalAccessVat,
      featured: false,
      features: [true, true, true, true, true, false, false],
    },
    {
      name: t.packZenName,
      price: t.rentalZenPrice,
      unit: t.rentalZenUnit,
      vat: t.rentalZenVat,
      featured: true,
      features: [true, true, true, true, true, true, true],
    },
  ]

  const purchasePacks = [
    {
      name: t.packAccessName,
      price: t.purchaseAccessPrice,
      unit: t.purchaseAccessUnit,
      vat: t.purchaseAccessVat,
      featured: false,
      features: [true, true, true, true, true, false, false],
    },
    {
      name: t.packZenName,
      price: t.purchaseZenPrice,
      unit: t.purchaseZenUnit,
      vat: t.purchaseZenVat,
      featured: true,
      features: [true, true, true, true, true, true, true],
    },
  ]

  const featureLabels = [
    t.feature1,
    t.feature2,
    t.feature3,
    t.feature4,
    t.feature5,
    t.feature6,
    t.feature7,
  ]

  const currentPacks = tab === "rental" ? rentalPacks : purchasePacks

  return (
    <section
      id="offres"
      className="relative py-32 overflow-hidden noise-bg"
      aria-labelledby="offers-title"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-8"
          style={{ background: "oklch(0.62 0.22 25)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="section-tag mb-6 inline-flex">
            <Package size={10} aria-hidden="true" />
            {t.offersTag}
          </span>
          <h2
            id="offers-title"
            className="font-display text-3xl sm:text-4xl font-bold text-white mt-6 mb-4"
          >
            {t.offersTitle}
          </h2>
          <p className="text-white/55 text-lg">{t.offersIntro}</p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div
            className="flex p-1 rounded-full border border-white/10"
            style={{ background: "oklch(0.17 0.018 260)" }}
            role="tablist"
            aria-label="Choisir entre location et achat"
          >
            {(["rental", "purchase"] as Tab[]).map((tabId) => (
              <button
                key={tabId}
                role="tab"
                aria-selected={tab === tabId}
                onClick={() => setTab(tabId)}
                className={cn(
                  "relative px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  tab === tabId
                    ? "text-white shadow-lg"
                    : "text-white/50 hover:text-white/80"
                )}
              >
                {tab === tabId && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                    }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {tabId === "rental" ? t.tabRental : t.tabPurchase}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-3 gap-8 items-start"
          >
            {/* Left: Pack includes */}
            <div
              className="lg:col-span-1 rounded-3xl p-8 border border-white/8"
              style={{ background: "oklch(0.17 0.018 260)" }}
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">
                {t.packIncludesTitle}
              </h3>
              <ul className="space-y-3">
                {t.packIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "oklch(0.72 0.18 160 / 0.15)" }}
                      aria-hidden="true"
                    >
                      <Check size={11} style={{ color: "oklch(0.72 0.18 160)" }} />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Image placeholder */}
              <div
                className="mt-8 rounded-2xl aspect-square flex items-center justify-center border border-white/5"
                style={{ background: "oklch(0.20 0.016 260)" }}
              >
                <div className="text-center">
                  <Package
                    size={48}
                    className="mx-auto mb-3 opacity-20"
                    style={{ color: "oklch(0.62 0.22 25)" }}
                    aria-hidden="true"
                  />
                  <p className="text-white/30 text-xs">Pack DAE CardioPro</p>
                </div>
              </div>
            </div>

            {/* Right: Pricing Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {currentPacks.map(({ name, price, unit, vat, featured, features }) => (
                <div
                  key={name}
                  className={cn(
                    "relative rounded-3xl p-7 border transition-all duration-500",
                    featured
                      ? "border-[oklch(0.62_0.22_25/0.5)] shadow-[0_0_40px_oklch(0.62_0.22_25/0.15)]"
                      : "border-white/8 hover:border-white/16"
                  )}
                  style={{
                    background: featured
                      ? "linear-gradient(145deg, oklch(0.20 0.022 260), oklch(0.17 0.018 260))"
                      : "oklch(0.17 0.018 260)",
                  }}
                >
                  {featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                      }}
                    >
                      <Star size={10} fill="currentColor" aria-hidden="true" />
                      {t.packBadge}
                    </div>
                  )}

                  <p className="font-display text-lg font-bold text-white mb-4">
                    {name}
                  </p>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="font-display text-3xl font-bold"
                      style={{ color: featured ? "oklch(0.62 0.22 25)" : "white" }}
                    >
                      {price}
                    </span>
                    <span className="text-sm text-white/50">{unit}</span>
                  </div>
                  <p className="text-xs text-white/35 mb-6">{vat}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-7">
                    {featureLabels.map((label, i) => (
                      <li key={label} className="flex items-center gap-2.5">
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center shrink-0",
                            features[i]
                              ? "bg-[oklch(0.72_0.18_160/0.15)]"
                              : "bg-white/5"
                          )}
                          aria-hidden="true"
                        >
                          {features[i] ? (
                            <Check size={9} style={{ color: "oklch(0.72 0.18 160)" }} />
                          ) : (
                            <X size={9} className="text-white/25" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-xs",
                            features[i] ? "text-white/70" : "text-white/25 line-through"
                          )}
                        >
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href="#contact"
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                        "hover:scale-105 active:scale-95",
                        featured
                          ? "text-white shadow-[0_4px_16px_oklch(0.62_0.22_25/0.4)]"
                          : "border border-white/15 text-white/80 hover:text-white hover:bg-white/5"
                      )}
                      style={
                        featured
                          ? {
                              background:
                                "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                            }
                          : undefined
                      }
                    >
                      {t.btnChoose}
                      <ArrowRight size={12} aria-hidden="true" />
                    </a>
                    <a
                      href="#contact"
                      className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 border border-white/8 hover:border-white/20 transition-all duration-300"
                    >
                      {t.btnLearnMore}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
