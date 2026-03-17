"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSlider() {
  const t = useTranslations("hero")

  return (
    <section id="home" className="relative overflow-hidden w-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-[#020617] dark:to-[#0f172a] pb-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b820_1px,transparent_1px),linear-gradient(to_bottom,#94a3b820_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left pt-8 lg:pt-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t("badge")}</span>
            </motion.div>

            <h1 className="text-3xl sm:text-[2.75rem] md:text-[3.25rem] lg:text-[4rem] font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6">
              {t("title")}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href="#contact">
                  {t("cta_demo")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full text-base font-semibold border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <a href="#modules">
                  {t("cta_products")}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[60px] pointer-events-none" />
              
              {/* Dashboard screenshot */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl bg-white dark:bg-slate-900">
                <Image
                  src="/crm-dashboard.png"
                  alt="OMUZ CRM Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-6 bottom-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 px-4 py-3 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">5K+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t("stat_label")}</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t("stat_value")}</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating uptime card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -right-4 top-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 px-4 py-3 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{t("uptime")}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
