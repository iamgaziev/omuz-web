"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Code, Server, TrendingUp, Handshake, Cpu } from "lucide-react"

export function FeaturesSection() {
  const t = useTranslations("features_section")

  const features = [
    { icon: Code, key: "mentors", color: "text-blue-500", gradient: "from-blue-500/20 to-blue-500/5" },
    { icon: Server, key: "schedule", color: "text-indigo-500", gradient: "from-indigo-500/20 to-indigo-500/5" },
    { icon: TrendingUp, key: "career", color: "text-emerald-500", gradient: "from-emerald-500/20 to-emerald-500/5" },
    { icon: Handshake, key: "community", color: "text-purple-500", gradient: "from-purple-500/20 to-purple-500/5" },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Background Noise/Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-30" />
       
      <div className="container max-w-7xl px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center gap-2 text-primary font-medium mb-4"
          >
             <Cpu className="w-5 h-5" />
             <span className="uppercase tracking-widest text-xs">{t("badge")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
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
              className="group relative p-1 rounded-3xl overflow-hidden bg-gradient-to-b from-border/50 to-border/10 hover:from-primary/50 hover:to-primary/10 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-[22px] m-[1px]" />
              
              <div className="relative h-full p-6 flex flex-col items-center text-center z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">{t(`cards.${feature.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(`cards.${feature.key}.desc`)}
                </p>

                {/* Hover Glow */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
