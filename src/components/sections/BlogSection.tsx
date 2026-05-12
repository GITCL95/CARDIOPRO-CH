"use client"

import { motion } from "motion/react"
import { Heart, Shield, Zap, ArrowRight, BookOpen } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface BlogSectionProps {
  t: Translations
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function BlogSection({ t }: BlogSectionProps) {
  const articles = [
    {
      tag: t.article1Tag,
      title: t.article1Title,
      excerpt: t.article1Excerpt,
      link: t.article1Link,
      icon: Heart,
      color: "oklch(0.62 0.22 25)",
      bg: "oklch(0.62 0.22 25 / 0.1)",
    },
    {
      tag: t.article2Tag,
      title: t.article2Title,
      excerpt: t.article2Excerpt,
      link: t.article2Link,
      icon: Shield,
      color: "oklch(0.72 0.18 160)",
      bg: "oklch(0.72 0.18 160 / 0.1)",
    },
    {
      tag: t.article3Tag,
      title: t.article3Title,
      excerpt: t.article3Excerpt,
      link: t.article3Link,
      icon: Zap,
      color: "oklch(0.70 0.15 250)",
      bg: "oklch(0.70 0.15 250 / 0.1)",
    },
  ]

  return (
    <section
      id="blog"
      className="relative py-32 overflow-hidden noise-bg"
      aria-labelledby="blog-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.18 160 / 0.3), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-8"
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
          className="mb-14"
        >
          <span className="section-tag mb-6 inline-flex">
            <BookOpen size={10} aria-hidden="true" />
            {t.blogTag}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-12 mt-6">
            <h2
              id="blog-title"
              className="font-display text-3xl sm:text-4xl font-bold text-white max-w-xl"
            >
              {t.blogTitle}
            </h2>
            <p className="text-white/50 lg:max-w-sm text-sm leading-relaxed">
              {t.blogIntro}
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {articles.map(({ tag, title, excerpt, link, icon: Icon, color, bg }) => (
            <motion.article
              key={title}
              variants={itemVariants}
              className="group relative rounded-3xl border border-white/8 hover:border-white/16 overflow-hidden transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] cursor-pointer"
              style={{ background: "oklch(0.17 0.018 260)" }}
            >
              {/* Hover top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to bottom, ${color}/0.08, transparent)`,
                }}
                aria-hidden="true"
              />

              {/* Icon header */}
              <div className="p-7 pb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3"
                  style={{ background: `${color}/0.12`, color }}
                >
                  {tag}
                </span>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white leading-snug mb-3 group-hover:text-white transition-colors">
                  {title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-white/50 leading-relaxed">{excerpt}</p>
              </div>

              {/* Bottom link */}
              <div className="px-7 pb-7">
                <div
                  className="pt-5 border-t border-white/5 flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                  style={{ color }}
                >
                  <span>{link}</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
