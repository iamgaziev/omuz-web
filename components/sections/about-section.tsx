"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Briefcase, Building2, ArrowRight, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const t = useTranslations("about_section")
  
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-background">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>{t("badge")}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]"
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
              className="space-y-6"
            >
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                     <Users className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('desc_1').split(',')[0]}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {t("desc_1_sub")}
                     </p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                     <Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('stats.partners')}</h3>
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
              className="mt-10"
            >
               <Button size="lg" className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-8 h-12">
                  {t("learn_more")} <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
             >
                <div className="aspect-[4/5] relative">
                   <Image 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                     alt={t("alt_team")}
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800"
                >
                   <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-200 dark:divide-slate-800">
                      <div>
                         <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">{t('stat_1_val')}</div>
                         <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('stats.students')}</div>
                      </div>
                      <div>
                         <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">{t('stat_2_val')}</div>
                         <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('stats.mentors')}</div>
                      </div>
                      <div>
                         <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">{t('stat_3_val')}</div>
                         <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('stats.partners')}</div>
                      </div>
                   </div>
                </motion.div>
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 bg-sky-200/50 dark:bg-sky-500/20 rounded-full blur-3xl opacity-50" />
             <div className="absolute -z-10 bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-cyan-200/50 dark:bg-cyan-500/20 rounded-full blur-3xl opacity-50" />
          </div>

        </div>
      </div>
    </section>
  )
}
