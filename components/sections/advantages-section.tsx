"use client"

import { useTranslations } from "next-intl"
import { ShieldCheck, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function AdvantagesSection() {
  const t = useTranslations("advantages")

  const items = [
    {
      icon: ShieldCheck,
      title: t("method.title"),
      desc: t("method.desc")
    },
    {
      icon: Users,
      title: t("mentors.title"),
      desc: t("mentors.desc")
    },
    {
      icon: Zap,
      title: t("fast.title"),
      desc: t("fast.desc")
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          {t("title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
                <item.icon className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
