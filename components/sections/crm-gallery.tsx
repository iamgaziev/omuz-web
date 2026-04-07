"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimatedAnalyticsDashboard } from "@/components/ui/animated-analytics-dashboard"
import { AnimatedBranchesDashboard } from "@/components/ui/animated-branches-dashboard"

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
}

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

        {/* Interactive Animated Dashboards */}
        <div className="flex flex-col gap-8 lg:gap-12 mt-12 w-full">
            <motion.div
                variants={FADE_UP}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full relative group"
            >
                {/* Decorative glow behind component */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 w-full transition-transform duration-500">
                    <AnimatedAnalyticsDashboard />
                </div>
            </motion.div>

            <motion.div
                variants={FADE_UP}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full relative group"
            >
                {/* Decorative glow behind component */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-orange-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 w-full transition-transform duration-500">
                    <AnimatedBranchesDashboard />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
