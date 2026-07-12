"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  CreditCard,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react"
import type { Translations } from "@/lib/translations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Marquee } from "@/components/premium/marquee"
import { NumberTicker } from "@/components/premium/number-ticker"
import { ShimmerButton } from "@/components/premium/shimmer-button"

interface BelowFoldProps {
  t: Translations
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export default function InstitutionalBelowFold({ t }: BelowFoldProps) {
  return (
    <>
      <TrustMarquee />
      <StatsSection t={t} />
      <EnterpriseSection t={t} />
      <OffersSection t={t} />
      <BlogSection t={t} />
      <FaqSection t={t} />
      <ContactSection t={t} />
      <AdvantagesSection t={t} />
      <Footer t={t} />
    </>
  )
}

function SectionHeader({
  kicker,
  title,
  subtitle,
  invert = false,
}: {
  kicker: string
  title: string
  subtitle?: string
  invert?: boolean
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <span
        className={
          invert
            ? "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.11em] text-white"
            : "section-kicker"
        }
      >
        {kicker}
      </span>
      <h2
        className={`mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl ${
          invert ? "text-white" : "text-[#1A1D23]"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-lg leading-8 ${invert ? "text-white/85" : "text-[#4A5568]"}`}>
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  )
}

function TrustMarquee() {
  const labels = ["PME Suisse", "Cabinets médicaux", "Industrie", "Hôtels", "Centres sportifs", "Administrations", "Commerces", "Écoles privées"]
  return (
    <section className="border-b border-gray-200 bg-white py-6" aria-label="Références clients">
      <div className="mx-auto max-w-7xl px-6">
        <Marquee>
          {labels.map((label) => (
            <div key={label} className="rounded-full border border-gray-200 bg-[#F8F9FC] px-6 py-2 text-sm font-semibold text-[#4A5568]">
              {label}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

function StatsSection({ t }: BelowFoldProps) {
  const stats = [
    { value: 8000, suffix: "", label: t.stat1Sub, text: t.stat1Text, icon: HeartPulse, tone: "heart" },
    { value: 5, suffix: "%", label: t.stat2Sub, text: t.stat2Text, icon: ShieldCheck, tone: "success" },
    { value: 85, suffix: "%", label: t.stat3Sub, text: t.stat3Text, icon: MapPin, tone: "medical" },
    { value: 10, suffix: " min", label: t.stat4Sub, text: t.stat4Text, icon: Clock, tone: "heart" },
  ]

  return (
    <section id="stats" className="relative overflow-hidden bg-white" aria-labelledby="stats-title">
      <div className="absolute left-0 right-0 top-0 h-[48%] rounded-bl-[40px] bg-gradient-to-br from-[#021647] to-[#0E3A82]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionHeader kicker={t.statsTag} title={t.statsTitle} subtitle={t.statsSubtitle} invert />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(({ value, suffix, label, text, icon: Icon, tone }) => (
            <motion.div key={label} variants={fadeUp}>
              <Card className="h-full border-gray-200 shadow-[0_8px_30px_rgba(2,22,71,0.12)] hover:shadow-[0_12px_34px_rgba(2,22,71,0.16)]">
                <CardHeader>
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${
                      tone === "success"
                        ? "bg-emerald-50 text-[#10B981]"
                        : tone === "medical"
                          ? "bg-blue-50 text-[#0E3A82]"
                          : "bg-red-50 text-[#E63946]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <p className="font-display text-5xl font-bold text-[#0E3A82]">
                    <NumberTicker value={value} suffix={suffix} />
                  </p>
                  <CardTitle className="text-base">{label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[#4A5568]">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EnterpriseSection({ t }: BelowFoldProps) {
  const points = [
    "Appareils certifiés CE Médical",
    "Formation français / allemand",
    "Livraison et installation sous 48h",
    "Accompagnement à l'enregistrement defikarte.ch",
  ]

  return (
    <section id="entreprise" className="bg-[#F8F9FC] py-24" aria-labelledby="enterprise-title">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <span className="section-kicker">{t.safetyTag}</span>
          <h2 id="enterprise-title" className="mt-5 font-display text-4xl font-bold leading-tight text-[#1A1D23] sm:text-5xl">
            {t.safetyTitle}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4A5568]">
            <p>{t.safetyP1}</p>
            <p>{t.safetyP2}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#offres">{t.safetyCta1}</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">{t.safetyCta2}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4"
        >
          <Card className="p-2">
            <CardContent className="grid gap-4 p-6">
              <div className="flex flex-wrap gap-2">
                <Badge>CE Médical</Badge>
                <Badge>SUVA</Badge>
                <Badge>Swiss RC</Badge>
                <Badge variant="success">Livraison 48h</Badge>
              </div>
              {points.map((point) => (
                <motion.div key={point} variants={fadeUp} className="flex items-start gap-3 rounded-xl bg-[#F8F9FC] p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]" />
                  <span className="font-semibold text-[#1A1D23]">{point}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function OffersSection({ t }: BelowFoldProps) {
  const features = [t.feature1, t.feature2, t.feature3, t.feature4, t.feature5, t.feature6, t.feature7]
  const packs = {
    rental: [
      { name: t.packAccessName, price: t.rentalAccessPrice, unit: t.rentalAccessUnit, vat: t.rentalAccessVat, featured: false, values: [true, true, true, true, true, false, false] },
      { name: t.packZenName, price: t.rentalZenPrice, unit: t.rentalZenUnit, vat: t.rentalZenVat, featured: true, values: [true, true, true, true, true, true, true] },
    ],
    purchase: [
      { name: t.packAccessName, price: t.purchaseAccessPrice, unit: t.purchaseAccessUnit, vat: t.purchaseAccessVat, featured: false, values: [true, true, true, true, true, false, false] },
      { name: t.packZenName, price: t.purchaseZenPrice, unit: t.purchaseZenUnit, vat: t.purchaseZenVat, featured: true, values: [true, true, true, true, true, true, true] },
    ],
  }

  return (
    <section id="offres" className="relative overflow-hidden bg-[#F8F9FC]" aria-labelledby="offers-title">
      <div className="absolute left-0 right-0 top-0 h-[46%] rounded-bl-[40px] bg-gradient-to-br from-[#021647] to-[#0E3A82]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionHeader kicker={t.offersTag} title={t.offersTitle} subtitle={t.offersIntro} invert />
        <Tabs defaultValue="rental" className="mx-auto max-w-5xl">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="rental">{t.tabRental}</TabsTrigger>
              <TabsTrigger value="purchase">{t.tabPurchase}</TabsTrigger>
            </TabsList>
          </div>
          {(["rental", "purchase"] as const).map((key) => (
            <TabsContent key={key} value={key}>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid gap-6 md:grid-cols-2"
              >
                {packs[key].map((pack) => (
                  <motion.div key={`${key}-${pack.name}`} variants={fadeUp}>
                    <Card
                      className={`h-full shadow-[0_8px_30px_rgba(2,22,71,0.12)] hover:shadow-[0_12px_34px_rgba(2,22,71,0.16)] ${
                        pack.featured ? "border-2 border-[#E63946]" : "border-gray-200"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between gap-3">
                          <CardTitle>{pack.name}</CardTitle>
                          {pack.featured ? <Badge variant="heart">{t.packBadge}</Badge> : null}
                        </div>
                        <div className="pt-4">
                          <p className="font-display text-5xl font-bold text-[#0E3A82]">{pack.price}</p>
                          <p className="mt-1 font-semibold text-[#4A5568]">{pack.unit}</p>
                          <p className="mt-2 text-sm text-[#4A5568]">{pack.vat}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm font-bold text-[#1A1D23]">{t.packContentLabel}</p>
                        <ul className="space-y-3">
                          {features.map((feature, index) => (
                            <li key={feature} className="flex items-center gap-3 text-sm">
                              {pack.values[index] ? (
                                <Check className="h-5 w-5 shrink-0 text-[#10B981]" />
                              ) : (
                                <X className="h-5 w-5 shrink-0 text-gray-300" />
                              )}
                              <span className={pack.values[index] ? "text-[#4A5568]" : "text-gray-400 line-through"}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="gap-3">
                        <Button asChild>
                          <a href="#contact">{t.btnChoose}</a>
                        </Button>
                        <Button asChild variant="outline">
                          <a href="#contact">{t.btnLearnMore}</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function BlogSection({ t }: BelowFoldProps) {
  const articles = [
    { tag: t.article1Tag, title: t.article1Title, excerpt: t.article1Excerpt, icon: HeartPulse },
    { tag: t.article2Tag, title: t.article2Title, excerpt: t.article2Excerpt, icon: ShieldCheck },
    { tag: t.article3Tag, title: t.article3Title, excerpt: t.article3Excerpt, icon: Zap },
  ]

  return (
    <section id="blog" className="bg-white py-24" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t.blogTag} title={t.blogTitle} subtitle={t.blogIntro} />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid gap-6 md:grid-cols-3">
          {articles.map(({ tag, title, excerpt, icon: Icon }) => (
            <motion.article key={title} variants={fadeUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F9FC] text-[#0E3A82]">
                    <Icon size={22} />
                  </div>
                  <Badge>{tag}</Badge>
                  <CardTitle className="mt-4">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-[#4A5568]">{excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0E3A82]">
                    {t.article1Link}
                    <ArrowRight size={16} />
                  </span>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FaqSection({ t }: BelowFoldProps) {
  const faqs = [
    [t.faq1Q, t.faq1A],
    [t.faq2Q, t.faq2A],
    [t.faq3Q, t.faq3A],
    [t.faq4Q, t.faq4A],
    [t.faq5Q, t.faq5A],
  ]

  return (
    <section id="faq" className="bg-[#F8F9FC] py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader kicker={t.faqTag} title={t.faqTitle} subtitle={t.faqSubtitle} />
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function ContactSection({ t }: BelowFoldProps) {
  return (
    <section id="contact" className="bg-white py-24" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <span className="section-kicker">{t.contactTag}</span>
          <h2 id="contact-title" className="mt-5 font-display text-4xl font-bold leading-tight text-[#1A1D23] sm:text-5xl">
            {t.contactTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4A5568]">{t.contactSubtitle}</p>
          <div className="mt-8 space-y-4">
            {[
              [Phone, "+41 22 518 09 36", "tel:+41225180936"],
              [Mail, "contact@cardiopro.ch", "mailto:contact@cardiopro.ch"],
              [Clock, t.hours, ""],
              [MapPin, "Rue du Rhône 14, 1204 Genève, Suisse", "https://maps.google.com/?q=Rue+du+Rhône+14+1204+Genève"],
            ].map(([Icon, label, href]) => {
              const IconComponent = Icon as typeof Phone
              return (
                <div key={label as string} className="flex items-center gap-3 text-[#4A5568]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0E3A82] shadow-sm">
                    <IconComponent size={18} />
                  </span>
                  {href ? <a className="font-semibold hover:text-[#0E3A82]" href={href as string}>{label as string}</a> : <span className="font-semibold">{label as string}</span>}
                </div>
              )
            })}
          </div>
        </motion.div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <form action="https://formspree.io/f/meendqow" method="POST" className="grid gap-5">
              <input type="hidden" name="_language" value={t.lang} />
              <input type="hidden" name="_subject" value={t.formSubject} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={`${t.labelFirstName} *`} htmlFor="firstName">
                  <Input id="firstName" name="prenom" required placeholder={t.placeholderFirstName} autoComplete="given-name" />
                </Field>
                <Field label={`${t.labelLastName} *`} htmlFor="lastName">
                  <Input id="lastName" name="nom" required placeholder={t.placeholderLastName} autoComplete="family-name" />
                </Field>
              </div>
              <Field label={`${t.labelEmail} *`} htmlFor="email">
                <Input id="email" name="email" type="email" required placeholder={t.placeholderEmail} autoComplete="email" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.labelPhone} htmlFor="phone">
                  <Input id="phone" name="telephone" type="tel" placeholder={t.placeholderPhone} autoComplete="tel" />
                </Field>
                <Field label={t.labelCompany} htmlFor="company">
                  <Input id="company" name="entreprise" placeholder={t.placeholderCompany} autoComplete="organization" />
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
  )
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

function AdvantagesSection({ t }: BelowFoldProps) {
  const items = [
    [ShieldCheck, t.adv1Title, t.adv1Text, "success"],
    [Phone, t.adv2Title, t.adv2Text, "heart"],
    [Wrench, t.adv3Title, t.adv3Text, "medical"],
    [Users, t.adv4Title, t.adv4Text, "success"],
    [BookOpen, t.adv5Title, t.adv5Text, "medical"],
    [CreditCard, t.adv6Title, t.adv6Text, "heart"],
  ]

  return (
    <section id="avantages" className="relative overflow-hidden bg-white" aria-labelledby="adv-title">
      <div className="absolute left-0 right-0 top-0 h-[45%] rounded-bl-[40px] bg-gradient-to-br from-[#021647] to-[#0E3A82]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionHeader kicker={t.advTag} title={t.advTitle} invert />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, title, text, tone]) => {
            const IconComponent = Icon as typeof ShieldCheck
            return (
              <motion.div key={title as string} variants={fadeUp}>
                <Card className="h-full border-gray-200 shadow-[0_8px_30px_rgba(2,22,71,0.12)] hover:shadow-[0_12px_34px_rgba(2,22,71,0.16)]">
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                        tone === "success"
                          ? "bg-emerald-50 text-[#10B981]"
                          : tone === "medical"
                            ? "bg-blue-50 text-[#0E3A82]"
                            : "bg-red-50 text-[#E63946]"
                      }`}
                    >
                      <IconComponent size={22} />
                    </div>
                    <CardTitle>{title as string}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-[#4A5568]">{text as string}</p>
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

export function Footer({ t }: BelowFoldProps) {
  return (
    <footer className="bg-[#021647] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <HeartPulse className="h-7 w-7 text-[#E63946]" />
            <span className="font-display text-2xl font-bold">CardioPro</span>
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">{t.footerSlogan}</p>
          <p className="leading-7 text-white/75">{t.footerAbout}</p>
        </div>
        <FooterList title={t.footerContactTitle} items={["+41 22 518 09 36", "contact@cardiopro.ch", "Rue du Rhône 14, 1204 Genève", t.hours]} />
        <FooterList title={t.footerWhyTitle} items={[t.footerWhy1, t.footerWhy2, t.footerWhy3, t.footerWhy4, t.footerWhy5, t.footerWhy6]} />
        <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
          <Stethoscope className="mb-4 h-8 w-8 text-white" />
          <p className="font-semibold">{t.footerAdvisorName}</p>
          <p className="mt-2 text-sm text-white/70">{t.footerAdvisorReply}</p>
          <Button asChild className="mt-5 w-full">
            <a href="tel:+41225180936">+41 22 518 09 36</a>
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footerCopyright}</p>
          <nav className="flex gap-5">
            <a href="#">{t.footerLegal}</a>
            <a href="#">{t.footerCgv}</a>
            <a href="#">{t.footerPrivacy}</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 font-semibold">{title}</h3>
      <ul className="space-y-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
