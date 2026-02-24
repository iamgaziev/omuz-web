"use client"

import { useTranslations } from "next-intl"
import { Clock, TrendingUp, ShieldCheck, Scale, Database, Globe } from "lucide-react"
import { motion } from "framer-motion"

export function ReasonsSection() {
  const t = useTranslations("reasons")
  
  const reasons = [
    { icon: Clock, label: t("time_saving") },
    { icon: TrendingUp, label: t("revenue_growth") },
    { icon: ShieldCheck, label: t("control") },
    { icon: Scale, label: t("scalability") },
    { icon: Database, label: t("security") },
    { icon: Globe, label: t("global_access") },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{reason.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
