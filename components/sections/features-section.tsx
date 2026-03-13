"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { BarChart3, CalendarDays, GraduationCap, Users, Smartphone, HeadphonesIcon } from "lucide-react"

export function FeaturesSection() {
  const t = useTranslations("features_section")

  const features = [
    { icon: BarChart3, key: "mentors" },
    { icon: CalendarDays, key: "schedule" },
    { icon: GraduationCap, key: "career" },
    { icon: Users, key: "community" },
  ]

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-[#0f172a] relative overflow-hidden">
      <div className="container max-w-7xl px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6"
          >
            {t("badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t(`cards.${feature.key}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t(`cards.${feature.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
