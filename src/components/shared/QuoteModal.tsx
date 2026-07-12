"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { CheckCircle, X } from "lucide-react"
import type { PricingContent, PricingProduct } from "@/lib/pricing"

const FORMSPREE_URL = "https://formspree.io/f/meendqow"

type SubmitState = "idle" | "submitting" | "sent" | "error"

interface QuoteModalContextValue {
  open: (productName: string, options?: { type?: string }) => void
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null)

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-[#F8F9FC] px-3.5 py-2.5 text-sm text-[#1A1D23] transition-all focus:border-[#021647]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#021647]/10"

function modalCopy(c: PricingContent) {
  if (c.lang === "fr") {
    return {
      titleWithProduct: "Demande de devis personnalisé",
      titleGeneric: "Recevez votre devis gratuit",
      productLabel: "Produit sélectionné",
      company: "Entreprise",
      companyPlaceholder: "Votre entreprise",
      message: "Message",
      messagePlaceholder: "Quantité, délais, questions…",
      submit: c.formSubmit,
      submitting: "Envoi en cours…",
      success: "Demande envoyée !",
      successSub: "Nous vous répondrons sous 24h.",
      error: "Une erreur est survenue. Réessayez ou appelez-nous au +41 22 518 09 36.",
      close: "Fermer",
      namePlaceholder: "Votre nom",
      phonePlaceholder: "+41 22 518 09 36",
      emailPlaceholder: "votre@email.ch",
    }
  }
  return {
    titleWithProduct: "Persönliche Angebotsanfrage",
    titleGeneric: "Kostenloses Angebot erhalten",
    productLabel: "Ausgewähltes Produkt",
    company: "Unternehmen",
    companyPlaceholder: "Ihr Unternehmen",
    message: "Nachricht",
    messagePlaceholder: "Menge, Fristen, Fragen…",
    submit: c.formSubmit,
    submitting: "Wird gesendet…",
    success: "Anfrage gesendet!",
    successSub: "Wir antworten innerhalb von 24 Stunden.",
    error:
      "Ein Fehler ist aufgetreten. Versuchen Sie es erneut oder rufen Sie uns an: +41 22 518 09 36.",
    close: "Schliessen",
    namePlaceholder: "Ihr Name",
    phonePlaceholder: "+41 22 518 09 36",
    emailPlaceholder: "ihre@email.ch",
  }
}

export function QuoteModalProvider({
  children,
  c,
}: {
  children: React.ReactNode
  c: PricingContent
}) {
  const [open, setOpen] = useState(false)
  const [productName, setProductName] = useState("")
  const [productType, setProductType] = useState("")
  const [state, setState] = useState<SubmitState>("idle")
  const nameRef = useRef<HTMLInputElement>(null)
  const copy = modalCopy(c)

  const openModal = useCallback((name: string, options?: { type?: string }) => {
    setProductName(name)
    setProductType(options?.type ?? "")
    setState("idle")
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const timer = window.setTimeout(() => nameRef.current?.focus(), 50)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
      window.clearTimeout(timer)
    }
  }, [open, closeModal])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("submitting")
    const form = e.currentTarget
    const data = new FormData(form)
    const pageUrl =
      typeof window !== "undefined"
        ? window.location.pathname + window.location.search
        : c.canonical
    data.set("page", c.canonical)
    data.set("page_url", pageUrl)
    data.set("source_url", pageUrl)
    const email = String(data.get("email") ?? "")
    if (email) data.set("_replyto", email)
    data.set(
      "_subject",
      productName
        ? `Devis CardioPro Suisse — ${productName}`
        : c.formSubject,
    )

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (!res.ok) throw new Error("network")
      setState("sent")
    } catch {
      setState("error")
    }
  }

  return (
    <QuoteModalContext.Provider value={{ open: openModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <div
            className="absolute inset-0 bg-[#021647]/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              aria-label={copy.close}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F9FC] text-[#4A5568] hover:bg-gray-200"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="mb-5 text-center">
                <span className="font-display text-xl font-semibold tracking-tight text-[#1A1D23]">
                  Cardio<span className="text-[#E63946]">Pro</span>
                </span>
                <p
                  id="quote-modal-title"
                  className="mt-3 text-lg font-bold text-[#1A1D23]"
                >
                  {productName ? copy.titleWithProduct : copy.titleGeneric}
                </p>
                <p className="mt-1 text-sm text-[#4A5568]">{c.formSubtitle}</p>
              </div>

              {state === "sent" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E63946]/10">
                    <CheckCircle className="h-7 w-7 text-[#E63946]" />
                  </div>
                  <p className="font-semibold text-[#1A1D23]">{copy.success}</p>
                  <p className="text-sm text-[#4A5568]">{copy.successSub}</p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-2 text-sm font-semibold text-[#E63946] hover:underline"
                  >
                    {copy.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input type="hidden" name="_language" value={c.lang} />
                  {productType && (
                    <input
                      type="hidden"
                      name="type_produit"
                      value={productType}
                      readOnly
                    />
                  )}

                  {productName && (
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#1A1D23]">
                        {copy.productLabel}
                      </label>
                      <input
                        type="text"
                        name="produit"
                        value={productName}
                        readOnly
                        className={`${inputClass} cursor-default font-semibold text-[#021647]`}
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#1A1D23]">
                        {c.formName} <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        ref={nameRef}
                        type="text"
                        name="nom"
                        required
                        placeholder={copy.namePlaceholder}
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#1A1D23]">
                        {copy.company}
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        placeholder={copy.companyPlaceholder}
                        autoComplete="organization"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#1A1D23]">
                        {c.formPhone} <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        required
                        placeholder={copy.phonePlaceholder}
                        autoComplete="tel"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#1A1D23]">
                        {c.formEmail} <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={copy.emailPlaceholder}
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1A1D23]">
                      {copy.message}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder={copy.messagePlaceholder}
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="w-full rounded-full bg-[#E63946] py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#E63946]/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state === "submitting" ? copy.submitting : copy.submit}
                  </button>

                  {state === "error" && (
                    <p className="text-center text-xs font-medium text-[#E63946]">
                      {copy.error}
                    </p>
                  )}

                  <p className="text-center text-xs text-[#4A5568]">{c.formLegal}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  )
}

export function DevisButton({
  product,
  className,
  children,
}: {
  product: PricingProduct
  className?: string
  children?: React.ReactNode
}) {
  const ctx = useContext(QuoteModalContext)
  return (
    <button
      type="button"
      onClick={() => ctx?.open(product.model, { type: product.type })}
      className={className}
    >
      {children}
    </button>
  )
}
