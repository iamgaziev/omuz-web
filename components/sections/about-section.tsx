"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
   const t = useTranslations("about_section")

   return (
      <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#020617]">
         <div className="container max-w-7xl px-4 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

               {/* Content Side */}
               <div className="order-2 lg:order-1">
                  <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6"
                  >
                     <Zap className="w-4 h-4" />
                     <span>{t("badge")}</span>
                  </motion.div>

                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-tight"
                  >
                     {t('title')}
                  </motion.h2>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
                  >
                     {t('subtitle')}
                  </motion.p>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="space-y-5"
                  >
                     <div className="flex gap-4 group p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                           <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                           <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{t('desc_1').split(',')[0]}</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {t("desc_1_sub")}
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 group p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                           <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                           <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{t('stats.partners')}</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {t("desc_2_sub")}
                           </p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="mt-8"
                  >
                     <Button asChild size="lg" className="rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 shadow-lg shadow-primary/20 transition-all">
                        <a href="#features">
                           {t("learn_more")}
                           <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                     </Button>
                  </motion.div>
               </div>

               {/* Visual Side */}
               <div className="order-1 lg:order-2 relative">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
                  >
                     <div className="aspect-[4/5] relative">
                        <Image
                           src="/about-hero.jpg"
                           alt={t("alt_team")}
                           fill
                           className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                     </div>

                     {/* Floating Stats Card */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50"
                     >
                        <div className="grid grid-cols-3 gap-4 text-center">
                           <div>
                              <div className="text-2xl font-bold text-primary">{t('stat_1_val')}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{t('stats.students')}</div>
                           </div>
                           <div className="border-x border-slate-200 dark:border-slate-700">
                              <div className="text-2xl font-bold text-primary">{t('stat_2_val')}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{t('stats.mentors')}</div>
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-primary">{t('stat_3_val')}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{t('stats.partners')}</div>
                           </div>
                        </div>
                     </motion.div>
                  </motion.div>

                  {/* Decorative Glow */}
                  <div className="absolute -z-10 top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
               </div>

            </div>
         </div>
      </section>
   )
}
