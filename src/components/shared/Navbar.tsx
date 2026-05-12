"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Phone, Mail, Clock, X, Menu, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Translations } from "@/lib/translations"

interface NavbarProps {
  t: Translations
}

export default function Navbar({ t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { href: "#entreprise", label: t.navEnterprise },
    { href: "#produits", label: t.navProducts },
    { href: "#offres", label: t.navOffers },
    { href: "#blog", label: t.navSolutions },
    { href: "#contact", label: t.navContact },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block w-full bg-[oklch(0.10_0.022_260)] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a
              href="tel:+41225180936"
              aria-label={t.phoneLabel}
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Phone size={11} />
              <span>+41 22 518 09 36</span>
            </a>
            <a
              href="mailto:contact@cardiopro.ch"
              aria-label={t.emailLabel}
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Mail size={11} />
              <span>contact@cardiopro.ch</span>
            </a>
            <span className="flex items-center gap-1.5" aria-label={t.hoursLabel}>
              <Clock size={11} />
              {t.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-xs font-semibold text-[oklch(var(--accent))] hover:opacity-80 transition-opacity"
            >
              {t.quoteOnline} →
            </a>
            <div className="flex items-center gap-2 text-xs">
              <Link
                href={`/${t.lang}/`}
                className={cn(
                  "px-2 py-0.5 rounded transition-colors",
                  t.lang === t.lang
                    ? "text-white font-semibold"
                    : "text-white/40 hover:text-white/70"
                )}
                hrefLang={`${t.lang}-ch`}
                aria-current="page"
              >
                {t.lang.toUpperCase()}
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href={t.langAltHref}
                className="text-white/40 hover:text-white/70 transition-colors px-2 py-0.5 rounded"
                hrefLang={`${t.langAlt}-ch`}
              >
                {t.langAltLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "backdrop-blur-2xl bg-[oklch(0.12_0.022_260/0.85)] border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        )}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${t.lang}/`}
            aria-label={t.logoAriaLabel}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Heart
                size={22}
                className="text-[oklch(var(--accent))] heart-pulse fill-[oklch(var(--accent))]"
                aria-hidden="true"
              />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Cardio<span className="text-[oklch(var(--accent))]">Pro</span>
            </span>
            <span className="hidden sm:inline text-xs text-white/40 font-body font-medium tracking-widest uppercase ml-1 mt-0.5">
              Suisse
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                    "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+41225180936"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>+41 22 518 09 36</span>
            </a>
            <a
              href="#contact"
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300",
                "bg-[oklch(var(--accent))] text-white",
                "hover:scale-105 hover:shadow-[0_0_20px_oklch(var(--accent)/0.4)]",
                "active:scale-95"
              )}
            >
              {t.quoteOnline}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={t.menuOpenAriaLabel}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-16 z-40 overflow-hidden"
            style={{ top: scrolled ? 64 : 64 }}
          >
            <div className="glass border-b border-white/8 px-6 py-6 space-y-4">
              {/* Lang switcher mobile */}
              <div className="flex gap-2 mb-4">
                <Link
                  href={`/${t.lang}/`}
                  className="px-3 py-1 text-sm font-semibold rounded bg-[oklch(var(--accent)/0.15)] text-[oklch(var(--accent))] border border-[oklch(var(--accent)/0.3)]"
                >
                  {t.lang.toUpperCase()}
                </Link>
                <Link
                  href={t.langAltHref}
                  className="px-3 py-1 text-sm text-white/50 rounded border border-white/10 hover:text-white transition-colors"
                >
                  {t.langAltLabel}
                </Link>
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-2.5 text-base font-medium text-white/80 hover:text-white border-b border-white/5 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+41225180936"
                  className="flex items-center gap-2 text-sm text-white/60 py-2"
                >
                  <Phone size={14} />
                  +41 22 518 09 36
                </a>
                <a
                  href="#contact"
                  className="mt-2 block text-center px-6 py-3 rounded-full font-semibold bg-[oklch(var(--accent))] text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.quoteOnline}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
