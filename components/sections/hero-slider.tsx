"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { AnimatedDashboard } from "@/components/ui/animated-dashboard"
import AnimatedDemoPage from "@/app/[locale]/animated-demo/page"
import { AnimatedGradebook } from "@/components/ui/animated-gradebook"

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
        <div className="flex flex-col items-center justify-center gap-16 pt-12 lg:pt-20">

          {/* Top: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t("badge")}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6">
              {t("title")}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* Bottom: Dashboard Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center justify-center w-full gap-12"
          >
            {/* First Dashboard Component */}
            <div className="relative w-full flex justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[80px] pointer-events-none max-w-5xl mx-auto" />
              <AnimatedDemoPage />
            </div>

            {/* Second Dashboard Component (Interactive Gradebook) */}
            <div className="relative w-full flex justify-center pb-20">
              <AnimatedGradebook />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
