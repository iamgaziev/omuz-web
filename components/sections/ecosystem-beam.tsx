"use client";

import React, { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Globe, BarChart3, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/40 p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-xl relative",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-white/5 dark:from-white/10 dark:to-transparent pointer-events-none" />
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function EcosystemBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("hub");
  const locale = useLocale();

  // State to track which panel is expanded: 'online' | 'crm' | null
  const [activePanel, setActivePanel] = useState<"online" | "crm" | null>(null);

  // Animation variants
  const panelVariants = {
    expanded: { flex: 3 },
    collapsed: { flex: 1 },
    neutral: { flex: 1 },
  };

  const contentVariants = {
    expanded: { opacity: 1, x: 0, display: "flex" },
    collapsed: { opacity: 0, x: -20, transitionEnd: { display: "none" } },
    neutral: { opacity: 0, x: -20, transitionEnd: { display: "none" } },
  };

  const iconVariants = {
    expanded: { scale: 1.2, y: -10 },
    collapsed: { scale: 0.8, y: 0 },
    neutral: { scale: 1, y: 0 },
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-transparent relative w-full overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-40 dark:opacity-20 z-0 overflow-hidden">
         <motion.div 
            animate={{ 
              scale: activePanel === 'online' ? 1.5 : activePanel === 'crm' ? 0.8 : 1, 
              opacity: activePanel === 'online' ? 0.6 : 0.3,
              x: activePanel === 'online' ? '10%' : activePanel === 'crm' ? '-20%' : '-15%'
            }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px] bg-sky-500 rounded-full blur-[120px] absolute mix-blend-screen dark:mix-blend-screen" 
         />
         <motion.div 
            animate={{ 
              scale: activePanel === 'crm' ? 1.5 : activePanel === 'online' ? 0.8 : 1, 
              opacity: activePanel === 'crm' ? 0.6 : 0.3,
              x: activePanel === 'crm' ? '-10%' : activePanel === 'online' ? '20%' : '15%'
            }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px] bg-purple-500 rounded-full blur-[120px] absolute mix-blend-screen dark:mix-blend-screen" 
         />
      </div>

      <div className="text-center z-10 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">{t("title")}</h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      <div
        className="relative w-full max-w-7xl px-4 lg:px-12 z-10 h-[450px] md:h-[500px]"
        ref={containerRef}
      >
        <div className="flex flex-col md:flex-row h-full w-full gap-4 md:gap-6 relative group/container">
          
          {/* Online Panel */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden cursor-pointer border border-sky-200/50 dark:border-sky-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg transition-shadow hover:shadow-sky-500/20"
            variants={panelVariants}
            initial="neutral"
            animate={activePanel === 'online' ? 'expanded' : activePanel === 'crm' ? 'collapsed' : 'neutral'}
            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            onHoverStart={() => setActivePanel('online')}
            onHoverEnd={() => setActivePanel(null)}
            onClick={() => setActivePanel(activePanel === 'online' ? null : 'online')}
            layout
          >
            {/* Absolute Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent transition-opacity duration-500 ${activePanel === 'online' ? 'opacity-100' : 'opacity-0'}`} />

            <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center p-6 md:p-10 justify-center group/panel">
              {/* Icon & Title - Always visible but moves */}
              <motion.div 
                className="flex flex-col items-center justify-center shrink-0 z-20"
                variants={iconVariants}
                animate={activePanel === 'online' ? 'expanded' : activePanel === 'crm' ? 'collapsed' : 'neutral'}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                layout
              >
                  <div className="p-4 md:p-6 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 mb-4 shadow-inner ring-1 ring-sky-300 dark:ring-sky-700">
                     <Globe className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <motion.h3 
                    layout="position"
                    className="text-xl md:text-2xl font-bold tracking-tight text-foreground whitespace-nowrap"
                  >
                    {t("online.title")}
                  </motion.h3>
                  
                  {/* Subtle hint when not expanded */}
                  <motion.div 
                    animate={{ opacity: activePanel === null ? 0.5 : 0, height: activePanel === null ? 'auto' : 0 }}
                    className="overflow-hidden mt-2 text-sm text-sky-600/70 dark:text-sky-400/70 font-medium"
                  >
                     {t("online.hint")}
                  </motion.div>
              </motion.div>

               {/* Expanded Content */}
               <motion.div 
                 className="flex flex-col justify-center items-center md:items-start mt-6 md:mt-0 md:pl-10 lg:pl-16 text-center md:text-left overflow-hidden min-w-0 md:flex-1"
                 variants={contentVariants}
                 animate={activePanel === 'online' ? 'expanded' : activePanel === 'crm' ? 'collapsed' : 'neutral'}
                 transition={{ duration: 0.4, delay: activePanel === 'online' ? 0.15 : 0 }}
                 layout
              >
                 <motion.h4 layout="position" className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
                    {t("online.headline")}
                 </motion.h4>
                 <motion.p layout="position" className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-md leading-relaxed">
                   {t("online.desc")} Get access to expert-led courses and professional training environments tailored for your success.
                 </motion.p>
                 <motion.div layout>
                   <Link href={`/${locale}/products/online`} onClick={(e) => e.stopPropagation()}>
                      <Button size="lg" className="rounded-full px-6 sm:px-8 bg-sky-600 hover:bg-sky-500 text-white shadow-[0_8px_20px_-6px_rgba(14,165,233,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(14,165,233,0.8)] transition-all duration-300 group/btn font-medium h-12 md:h-14 text-sm md:text-base">
                        {t("online.btn")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                 </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* CRM Panel */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden cursor-pointer border border-purple-200/50 dark:border-purple-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg transition-shadow hover:shadow-purple-500/20"
            variants={panelVariants}
            initial="neutral"
            animate={activePanel === 'crm' ? 'expanded' : activePanel === 'online' ? 'collapsed' : 'neutral'}
            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            onHoverStart={() => setActivePanel('crm')}
            onHoverEnd={() => setActivePanel(null)}
            onClick={() => setActivePanel(activePanel === 'crm' ? null : 'crm')}
            layout
          >
            {/* Absolute Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent transition-opacity duration-500 ${activePanel === 'crm' ? 'opacity-100' : 'opacity-0'}`} />

            <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center p-6 md:p-10 justify-center group/panel">
              
              {/* Expanded Content (placed first visually to push icon right when row is flexed) */}
              <motion.div 
                 className="flex flex-col justify-center items-center md:items-end mt-6 md:mt-0 md:pr-10 lg:pr-16 text-center md:text-right overflow-hidden min-w-0 md:flex-1"
                 variants={{
                   expanded: { opacity: 1, x: 0, display: "flex", order: 1 },
                   collapsed: { opacity: 0, x: 20, transitionEnd: { display: "none" } },
                   neutral: { opacity: 0, x: 20, transitionEnd: { display: "none" } },
                 }}
                 animate={activePanel === 'crm' ? 'expanded' : activePanel === 'online' ? 'collapsed' : 'neutral'}
                 transition={{ duration: 0.4, delay: activePanel === 'crm' ? 0.15 : 0 }}
                 layout
              >
                 <motion.h4 layout="position" className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
                    {t("crm.headline")}
                 </motion.h4>
                 <motion.p layout="position" className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-md leading-relaxed">
                   {t("crm.desc")} Optimize schedules, track performance, and elevate your academic institution to the next level.
                 </motion.p>
                 <motion.div layout>
                   <Link href={`/${locale}/products/crm`} onClick={(e) => e.stopPropagation()}>
                      <Button size="lg" className="rounded-full px-6 sm:px-8 bg-purple-600 hover:bg-purple-500 text-white shadow-[0_8px_20px_-6px_rgba(147,51,234,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(147,51,234,0.8)] transition-all duration-300 group/btn font-medium h-12 md:h-14 text-sm md:text-base">
                        {t("crm.btn")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                 </motion.div>
              </motion.div>

              {/* Icon & Title */}
              <motion.div 
                className="flex flex-col items-center justify-center shrink-0 z-20 md:order-2"
                variants={iconVariants}
                animate={activePanel === 'crm' ? 'expanded' : activePanel === 'online' ? 'collapsed' : 'neutral'}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                layout
              >
                  <div className="p-4 md:p-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 mb-4 shadow-inner ring-1 ring-purple-300 dark:ring-purple-700">
                     <BarChart3 className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <motion.h3 
                    layout="position"
                    className="text-xl md:text-2xl font-bold tracking-tight text-foreground whitespace-nowrap"
                  >
                    {t("crm.title")}
                  </motion.h3>
                  
                  {/* Subtle hint when not expanded */}
                  <motion.div 
                    animate={{ opacity: activePanel === null ? 0.5 : 0, height: activePanel === null ? 'auto' : 0 }}
                    className="overflow-hidden mt-2 text-sm text-purple-600/70 dark:text-purple-400/70 font-medium"
                  >
                     {t("crm.hint")}
                  </motion.div>
              </motion.div>

            </div>
          </motion.div>

          {/* Center Logo Hub overlay - visible only when neutral */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none hidden md:flex items-center justify-center"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: activePanel === null ? 1 : 0, scale: activePanel === null ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
             <div className="w-24 h-24 rounded-full bg-white dark:bg-black border-4 border-background flex items-center justify-center shadow-2xl overflow-hidden p-3">
               <Image 
                 src="/omuz.svg" 
                 alt={t("alt_omuz")} 
                 width={80} 
                 height={80} 
                 className="w-full h-auto dark:invert"
               />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
