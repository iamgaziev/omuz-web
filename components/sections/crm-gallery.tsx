"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
}

const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const screenshots = [
  { src: "/crm-main.jpg?v=1.1", key: "dashboard", span: "" },
  { src: "/image.png", key: "dashboard_2", span: "" },
  { src: "/crm-chart.png", key: "enroll", span: "md:col-span-1" },
  { src: "/crm-branches.jpg", key: "graduates", span: "md:col-span-1" },
]

export function CrmGallerySection() {
  const t = useTranslations("crm_gallery")

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background glows */}
      <div className="absolute -top-[30%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[30%] -left-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-medium text-xs sm:text-sm mb-6 border border-purple-200/50 dark:border-purple-800/50"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            {t("live_preview")}
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-slate-900 dark:text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {screenshots.map((shot) => (
            <motion.div
              key={shot.key}
              variants={FADE_UP}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`${shot.span} group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-shadow duration-500`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={shot.src}
                  alt={t(`${shot.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t(`${shot.key}.title`)}</h3>
                  <p className="text-sm text-slate-300 font-light">{t(`${shot.key}.desc`)}</p>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-purple-500/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
