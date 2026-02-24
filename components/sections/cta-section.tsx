"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export function CtaSection() {
  const t = useTranslations("cta_section")

  return (
    <section className="py-20 md:py-32 bg-sky-50 dark:bg-sky-950/20 relative overflow-hidden">
      {/* Decoration circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-200/50 dark:bg-sky-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/30 dark:bg-sky-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-sky-950 dark:text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-sky-900/80 dark:text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">


            <Link href="/register">
              <InteractiveHoverButton className="w-full sm:w-auto text-lg">
                {t("get_started")}
              </InteractiveHoverButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
