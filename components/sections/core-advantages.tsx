"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Code2, Layers, TrendingUp, Handshake } from "lucide-react"

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
}

const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const advantages = [
  { key: "expert", icon: Code2, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { key: "scalable", icon: Layers, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { key: "growth", icon: TrendingUp, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  { key: "partners", icon: Handshake, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
]

export function CoreAdvantagesSection() {
  const t = useTranslations("core_advantages")

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-slate-950 via-[10%] to-slate-950 dark:from-[#0f172a] dark:via-slate-950 dark:via-[10%] dark:to-slate-950 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs sm:text-sm font-medium mb-6 uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-400 font-light">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.key}
              variants={FADE_UP}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 lg:p-8 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {t(`cards.${item.key}.title`)}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t(`cards.${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
