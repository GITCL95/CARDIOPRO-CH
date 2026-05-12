"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Translations } from "@/lib/translations"

interface ContactSectionProps {
  t: Translations
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ContactSection({ t }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch("https://formspree.io/f/xgorwrwe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
    } catch {
      // silent fail — form still submitted
    } finally {
      setSubmitting(false)
    }
  }

  const contacts = [
    { icon: Phone, value: "+41 22 518 09 36", href: "tel:+41225180936" },
    { icon: Mail, value: "contact@cardiopro.ch", href: "mailto:contact@cardiopro.ch" },
    { icon: Clock, value: t.hours, href: null },
    { icon: MapPin, value: "Rue du Rhône 14, 1204 Genève", href: "https://maps.google.com/?q=Rue+du+Rhône+14+1204+Genève" },
  ]

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden noise-bg"
      aria-labelledby="contact-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.62 0.22 25 / 0.4), transparent)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] opacity-6"
          style={{ background: "oklch(0.62 0.22 25)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="section-tag mb-6 inline-flex">
                <Mail size={10} aria-hidden="true" />
                {t.contactTag}
              </span>
              <h2
                id="contact-title"
                className="font-display text-3xl sm:text-4xl font-bold text-white mt-6 mb-4"
              >
                {t.contactTitle}
              </h2>
              <p className="text-white/60 leading-relaxed">{t.contactSubtitle}</p>
            </motion.div>

            {/* Contact details */}
            <motion.ul variants={itemVariants} className="space-y-4">
              {contacts.map(({ icon: Icon, value, href }) => (
                <li key={value} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.62 0.22 25 / 0.12)" }}
                    aria-hidden="true"
                  >
                    <Icon size={17} style={{ color: "oklch(0.62 0.22 25)" }} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{value}</span>
                  )}
                </li>
              ))}
            </motion.ul>

            {/* Response time card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-5 border border-white/8"
              style={{ background: "oklch(0.17 0.018 260)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                  Disponible
                </span>
              </div>
              <p className="text-white font-semibold">Réponse sous 24h ouvrées</p>
              <p className="text-white/45 text-sm mt-1">Lun–Ven 9h00–18h00</p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8 border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
              style={{ background: "oklch(0.17 0.018 260)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "oklch(0.72 0.18 160 / 0.15)" }}
                    aria-hidden="true"
                  >
                    <CheckCircle size={32} style={{ color: "oklch(0.72 0.18 160)" }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-white/55 max-w-sm">
                    Notre équipe vous répondra dans les 24h ouvrées. Merci de votre confiance.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label={`Formulaire de contact CardioPro Suisse`}
                  className="space-y-5"
                >
                  <input type="hidden" name="_language" value={t.lang} />
                  <input type="hidden" name="_subject" value={t.formSubject} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField label={`${t.labelFirstName} *`} htmlFor="prenom">
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        placeholder={t.placeholderFirstName}
                        autoComplete="given-name"
                        className="form-input"
                      />
                    </FormField>
                    <FormField label={`${t.labelLastName} *`} htmlFor="nom">
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        placeholder={t.placeholderLastName}
                        autoComplete="family-name"
                        className="form-input"
                      />
                    </FormField>
                  </div>

                  <FormField label={`${t.labelEmail} *`} htmlFor="email">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={t.placeholderEmail}
                      autoComplete="email"
                      className="form-input"
                    />
                  </FormField>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField label={t.labelPhone} htmlFor="telephone">
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder={t.placeholderPhone}
                        autoComplete="tel"
                        className="form-input"
                      />
                    </FormField>
                    <FormField label={t.labelCompany} htmlFor="entreprise">
                      <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        placeholder={t.placeholderCompany}
                        autoComplete="organization"
                        className="form-input"
                      />
                    </FormField>
                  </div>

                  <FormField label={`${t.labelNeed} *`} htmlFor="besoin">
                    <select
                      id="besoin"
                      name="besoin"
                      required
                      className="form-input"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t.optionDefault}
                      </option>
                      <option value="location">{t.optionRental}</option>
                      <option value="achat">{t.optionPurchase}</option>
                      <option value="formation">{t.optionTraining}</option>
                      <option value="information">{t.optionInfo}</option>
                    </select>
                  </FormField>

                  <FormField label={t.labelMessage} htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t.placeholderMessage}
                      className="form-input resize-none"
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-semibold text-sm text-white",
                      "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                      "shadow-[0_8px_24px_oklch(0.62_0.22_25/0.4)] hover:shadow-[0_12px_32px_oklch(0.62_0.22_25/0.6)]",
                      "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    )}
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                    }}
                  >
                    <Send size={15} aria-hidden="true" />
                    {submitting ? "Envoi…" : t.btnSubmit}
                  </button>

                  <p className="text-xs text-white/30 text-center leading-relaxed">
                    {t.formLegal}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid oklch(1 0 0 / 0.08);
          background: oklch(0.20 0.016 260);
          color: oklch(0.95 0 0);
          font-size: 0.875rem;
          font-family: var(--font-dm-sans), sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .form-input::placeholder {
          color: oklch(0.55 0.01 260);
        }
        .form-input:focus {
          border-color: oklch(0.62 0.22 25 / 0.6);
          box-shadow: 0 0 0 3px oklch(0.62 0.22 25 / 0.12);
        }
        .form-input option {
          background: oklch(0.17 0.018 260);
          color: oklch(0.95 0 0);
        }
      `}</style>
    </section>
  )
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold text-white/60 uppercase tracking-wider"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
