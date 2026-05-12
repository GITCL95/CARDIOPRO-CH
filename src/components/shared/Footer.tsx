import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface FooterProps {
  t: Translations
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer
      role="contentinfo"
      className="relative border-t border-white/8 overflow-hidden"
      style={{ background: "oklch(0.10 0.018 260)" }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.62 0.22 25 / 0.5), oklch(0.72 0.18 160 / 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-8 pointer-events-none"
        style={{ background: "oklch(0.62 0.22 25)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Heart
                size={18}
                className="fill-[oklch(0.62_0.22_25)]"
                style={{ color: "oklch(0.62 0.22 25)" }}
                aria-hidden="true"
              />
              <span className="font-display text-lg font-bold text-white">
                Cardio<span style={{ color: "oklch(0.62 0.22 25)" }}>Pro</span>
              </span>
            </div>
            <p className="text-xs text-white/40 mb-4 font-semibold uppercase tracking-wider">
              {t.footerSlogan}
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              {t.footerAbout}
            </p>
            <p className="text-xs text-white/25 flex items-center gap-1.5">
              <Heart size={10} fill="oklch(0.62 0.22 25)" style={{ color: "oklch(0.62 0.22 25)" }} aria-hidden="true" />
              {t.emergency}{" "}
              <strong className="text-white/50 text-sm">{t.emergencyNumber}</strong>
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">
              {t.footerContactTitle}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41225180936"
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <Phone size={13} className="text-white/30 group-hover:text-[oklch(0.62_0.22_25)] transition-colors" aria-hidden="true" />
                  +41 22 518 09 36
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@cardiopro.ch"
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <Mail size={13} className="text-white/30 group-hover:text-[oklch(0.62_0.22_25)] transition-colors" aria-hidden="true" />
                  contact@cardiopro.ch
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rue+du+Rhône+14+1204+Genève"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <MapPin size={13} className="mt-0.5 shrink-0 text-white/30 group-hover:text-[oklch(0.62_0.22_25)] transition-colors" aria-hidden="true" />
                  Rue du Rhône 14, 1204 Genève
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-white/50">
                  <Clock size={13} className="text-white/30" aria-hidden="true" />
                  {t.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Why us */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">
              {t.footerWhyTitle}
            </h4>
            <ul className="space-y-2.5">
              {[
                t.footerWhy1,
                t.footerWhy2,
                t.footerWhy3,
                t.footerWhy4,
                t.footerWhy5,
                t.footerWhy6,
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#offres"
                    className="text-sm text-white/45 hover:text-white/80 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "oklch(0.62 0.22 25)" }} aria-hidden="true" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Advisor card */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">
              {t.footerQuickTitle}
            </h4>
            <div
              className="rounded-2xl p-5 border border-white/8 space-y-3"
              style={{ background: "oklch(0.15 0.018 260)" }}
              aria-label="Prendre contact avec un conseiller"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.62 0.22 25 / 0.15)" }}
                aria-hidden="true"
              >
                <Heart size={18} fill="oklch(0.62 0.22 25)" style={{ color: "oklch(0.62 0.22 25)" }} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {t.footerAdvisorName}
                </p>
                <p className="text-xs text-white/40">{t.footerAdvisorReply}</p>
              </div>
              <a
                href="tel:+41225180936"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                }}
                aria-label="Appeler +41 22 518 09 36"
              >
                <Phone size={13} aria-hidden="true" />
                +41 22 518 09 36
              </a>
              <a
                href="mailto:contact@cardiopro.ch"
                className="flex items-center justify-center text-sm text-white/50 hover:text-white transition-colors"
              >
                contact@cardiopro.ch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/5"
        style={{ background: "oklch(0.09 0.015 260)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">{t.footerCopyright}</p>
          <nav className="flex items-center gap-5" aria-label="Liens légaux">
            {[
              { label: t.footerLegal, href: "#" },
              { label: t.footerCgv, href: "#" },
              { label: t.footerPrivacy, href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
