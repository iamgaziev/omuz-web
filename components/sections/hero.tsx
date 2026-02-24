"use client"

import { useTranslations } from "next-intl"
import { Spotlight } from "@/components/ui/spotlight"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="sky" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            "hidden mx-auto mb-8 w-fit px-4 py-1"
          )}>
            <AnimatedShinyText className="inline-flex items-center justify-center">
              <span><Sparkles className="inline w-4 h-4 mr-1"/> {t("live_badge")}</span>
            </AnimatedShinyText>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 mb-6">
            {t("title")}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
              {t("cta_products")}
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/80 transition-all border border-border">
              {t("cta_demo")}
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" /> */}
    </section>
  )
}
