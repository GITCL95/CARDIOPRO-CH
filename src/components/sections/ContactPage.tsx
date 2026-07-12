"use client"

import Link from "next/link"
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import type { Translations } from "@/lib/translations"
import type { ContactPageContent } from "@/lib/contact-page"
import { Navbar } from "@/components/sections/InstitutionalSite"
import { Footer } from "@/components/sections/InstitutionalBelowFold"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShimmerButton } from "@/components/premium/shimmer-button"

interface ContactPageProps {
  t: Translations
  c: ContactPageContent
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-[#1A1D23]">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ContactPage({ t, c }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1A1D23]">
      <Navbar t={t} />
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#021647] pt-24 pb-12 text-white md:pt-32 md:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label={c.lang === "fr" ? "Fil d'Ariane" : "Brotkrumen"}
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60"
            >
              <Link href={`/${c.lang}/`} className="transition-colors hover:text-white">
                {c.breadcrumbHome}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{c.breadcrumbCurrent}</span>
            </nav>
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E63946]">
                {c.heroBadge}
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {c.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{c.heroSub}</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#021647] sm:text-4xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#4A5568]">{t.contactSubtitle}</p>

              <div className="mt-8 space-y-4">
                {[
                  [Phone, "+41 22 518 09 36", "tel:+41225180936"],
                  [Mail, "contact@cardiopro.ch", "mailto:contact@cardiopro.ch"],
                  [Clock, t.hours, ""],
                  [MapPin, c.mapLabel, "https://maps.google.com/?q=Rue+du+Rhône+14+1204+Genève"],
                ].map(([Icon, label, href]) => {
                  const IconComponent = Icon as typeof Phone
                  return (
                    <div key={label as string} className="flex items-center gap-3 text-[#4A5568]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F9FC] text-[#0E3A82]">
                        <IconComponent size={18} />
                      </span>
                      {href ? (
                        <a className="font-semibold hover:text-[#0E3A82]" href={href as string}>
                          {label as string}
                        </a>
                      ) : (
                        <span className="font-semibold">{label as string}</span>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 rounded-2xl border border-[#0E3A82]/15 bg-[#F8F9FC] p-6">
                <p className="font-semibold text-[#021647]">{c.responseTitle}</p>
                <p className="mt-2 text-sm text-[#4A5568]">{c.responseText}</p>
                <p className="mt-1 text-sm font-semibold text-[#0E3A82]">{c.responseHours}</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <form action="https://formspree.io/f/meendqow" method="POST" className="grid gap-5">
                  <input type="hidden" name="_language" value={t.lang} />
                  <input type="hidden" name="_subject" value={t.formSubject} />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={`${t.labelFirstName} *`} htmlFor="firstName">
                      <Input
                        id="firstName"
                        name="prenom"
                        required
                        placeholder={t.placeholderFirstName}
                        autoComplete="given-name"
                      />
                    </Field>
                    <Field label={`${t.labelLastName} *`} htmlFor="lastName">
                      <Input
                        id="lastName"
                        name="nom"
                        required
                        placeholder={t.placeholderLastName}
                        autoComplete="family-name"
                      />
                    </Field>
                  </div>
                  <Field label={`${t.labelEmail} *`} htmlFor="email">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.placeholderEmail}
                      autoComplete="email"
                    />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.labelPhone} htmlFor="phone">
                      <Input
                        id="phone"
                        name="telephone"
                        type="tel"
                        placeholder={t.placeholderPhone}
                        autoComplete="tel"
                      />
                    </Field>
                    <Field label={t.labelCompany} htmlFor="company">
                      <Input
                        id="company"
                        name="entreprise"
                        placeholder={t.placeholderCompany}
                        autoComplete="organization"
                      />
                    </Field>
                  </div>
                  <Field label={`${t.labelNeed} *`} htmlFor="need">
                    <Select name="besoin" required>
                      <SelectTrigger id="need">
                        <SelectValue placeholder={t.optionDefault} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="location">{t.optionRental}</SelectItem>
                        <SelectItem value="achat">{t.optionPurchase}</SelectItem>
                        <SelectItem value="formation">{t.optionTraining}</SelectItem>
                        <SelectItem value="information">{t.optionInfo}</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label={t.labelMessage} htmlFor="message">
                    <Textarea id="message" name="message" placeholder={t.placeholderMessage} />
                  </Field>
                  <ShimmerButton type="submit" size="lg" className="w-full">
                    <Send size={18} />
                    {t.btnSubmit}
                  </ShimmerButton>
                  <p className="text-center text-xs leading-6 text-[#4A5568]">{t.formLegal}</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </div>
  )
}
