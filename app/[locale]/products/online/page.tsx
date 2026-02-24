"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
   PlayCircle, Award, BookOpen, PenTool,
   BarChart3, Users, Video, BadgeCheck,
   MessageCircle, ArrowRight, CheckCircle2,
   ChevronRight, Compass, Loader2
} from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";

const FADE_UP: Variants = {
   hidden: { opacity: 0, y: 30 },
   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER: Variants = {
   hidden: { opacity: 0 },
   show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function OnlineProductPage({
   // params ignored
}: {
   params: { locale: string };
}) {
   const t = useTranslations("products_online");
   const formT = useTranslations("request_form");
   const heroRef = useRef<HTMLDivElement>(null);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => {
         setIsSubmitting(false);
         toast.success(formT("success"), { position: "top-right", theme: "dark" });
      }, 1500);
   };

   const { scrollYProgress: heroScroll } = useScroll({
      target: heroRef,
      offset: ["start start", "end start"],
   });
   const opacityBg = useTransform(heroScroll, [0, 1], [1, 0]);
   const scaleBg = useTransform(heroScroll, [0, 1], [1, 1.1]);

   return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-500/30 overflow-x-hidden transition-colors duration-300">

         {/* High-End Hero Section */}
         <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center justify-center">
            {/* Deep abstract background grid */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-50/50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* Majestic Glows */}
            <motion.div
               animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-sky-500/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
            />
            <motion.div
               animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.2, 1] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
            />

            <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
               <motion.div variants={STAGGER} initial="hidden" animate="show" className="max-w-4xl flex flex-col items-center">

                  <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md mb-8 shadow-inner dark:shadow-sky-500/10">
                     <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                     </div>
                     <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{t('badge')}</span>
                  </motion.div>

                  <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                     {t('title')}.<br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 dark:from-sky-400 dark:via-blue-500 dark:to-purple-500 py-2 block">
                        {t('subtitle')}
                     </span>
                  </motion.h1>

                  <motion.p variants={FADE_UP} className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl font-light leading-relaxed">
                     {t('description')}
                  </motion.p>

                  <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                     <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-2xl bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] dark:shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] border border-sky-400/30 transition-all hover:scale-105 group w-full sm:w-auto">
                        {t('cta_student')} <Compass className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                     </Button>
                     <Button size="lg" variant="outline" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-2xl border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 backdrop-blur-md group w-full sm:w-auto">
                        {t('cta_creator')} <PenTool className="ml-2 w-5 h-5 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
                     </Button>
                  </motion.div>

                  {/* Trust Stats Row */}
                  <motion.div variants={FADE_UP} className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap justify-center gap-8 sm:gap-16 text-slate-700 dark:text-slate-300">
                     <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">10K+</span>
                        <span className="text-sm uppercase tracking-wider text-slate-500 font-semibold">{t('stats.students')}</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">500+</span>
                        <span className="text-sm uppercase tracking-wider text-slate-500 font-semibold">{t('stats.courses')}</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">100+</span>
                        <span className="text-sm uppercase tracking-wider text-slate-500 font-semibold">{t('stats.instructors')}</span>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* FOR CREATORS SECTION (Bento Box) */}
         <section className="py-24 relative z-10">
            <div className="container max-w-7xl mx-auto px-4">
               <div className="text-center mb-16">
                  <span className="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t('creators.tag')}</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{t('creators.title')}</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('creators.subtitle')}</p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Large Bento Item */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     whileHover={{ scale: 1.02 }}
                     className="lg:col-span-2 relative p-8 md:p-12 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group"
                  >
                     <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <PenTool className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
                     <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{t('creators.features.builder.title')}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">{t('creators.features.builder.desc')}</p>
                     {/* Abstract builder graphic */}
                     <div className="absolute right-0 bottom-0 md:-right-10 md:-bottom-10 w-64 h-48 bg-slate-50/80 dark:bg-slate-800/50 rounded-tl-3xl border-l border-t border-slate-200 dark:border-slate-700 backdrop-blur-md translate-y-12 translate-x-12 group-hover:translate-y-4 transition-transform duration-500 shadow-2xl flex flex-col p-4 gap-3">
                        <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-md" />
                        <div className="h-16 w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-md" />
                        <div className="h-6 w-1/2 bg-sky-200/50 dark:bg-sky-500/20 rounded-md" />
                     </div>
                  </motion.div>

                  <div className="flex flex-col gap-6">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <BarChart3 className="w-10 h-10 text-sky-600 dark:text-sky-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t('creators.features.analytics.title')}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{t('creators.features.analytics.desc')}</p>
                     </motion.div>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Users className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t('creators.features.community.title')}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{t('creators.features.community.desc')}</p>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>

         {/* FOR STUDENTS SECTION (Interactive Layout) */}
         <section className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-950/50 border-y border-slate-200/50 dark:border-white/5">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-center bg-repeat" />
            <div className="container max-w-7xl mx-auto px-4 relative">
               <div className="text-center mb-16">
                  <span className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t('students.tag')}</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{t('students.title')}</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('students.subtitle')}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {[
                     { key: 'video', icon: Video, color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-500/10' },
                     { key: 'cert', icon: BadgeCheck, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10' },
                     { key: 'mentor', icon: MessageCircle, color: 'text-pink-600 dark:text-pink-400', bg: 'bg-pink-500/10' }
                  ].map((item, i) => (
                     <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group shadow-sm hover:shadow-md"
                     >
                        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-6 ring-1 ring-slate-200 dark:ring-white/10", item.bg)}>
                           <item.icon className={cn("w-7 h-7", item.color)} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t(`students.features.${item.key}.title`)}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(`students.features.${item.key}.desc`)}</p>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* TIMELINE SECTION */}
         <section className="py-32 relative">
            <div className="container max-w-3xl mx-auto px-4">
               <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t('timeline.title')}</h2>
               </div>

               <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                  {[1, 2, 3].map((step, i) => (
                     <motion.div
                        key={step}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                     >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm dark:shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10">
                           {step}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-sky-500/30 dark:group-hover:border-sky-500/50 group-hover:-translate-y-1 transition-all shadow-lg">
                           <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{t(`timeline.steps.${step}.title`)}</h3>
                           <p className="text-slate-600 dark:text-slate-400">{t(`timeline.steps.${step}.desc`)}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* INTERACTIVE FEATURES SHOWCASE */}
         <section className="py-24 relative z-10 bg-slate-50 dark:bg-slate-950">
            <div className="container max-w-7xl mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{t('advanced_features.title')}</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('advanced_features.subtitle')}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { key: 'live', icon: Video, color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
                     { key: 'grading', icon: CheckCircle2, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
                     { key: 'mobile', icon: Compass, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-900/30' }
                  ].map((item, i) => (
                     <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 group"
                     >
                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", item.bg)}>
                           <item.icon className={cn("w-8 h-8", item.color)} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t(`advanced_features.items.${item.key}.title`)}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(`advanced_features.items.${item.key}.desc`)}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* SUCCESS STORIES / TESTIMONIALS */}
         <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
               <div className="text-center mb-20 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">{t('testimonials.title')}</h2>
                  <p className="text-xl text-slate-300 font-light">{t('testimonials.subtitle')}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2].map((item, i) => (
                     <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative"
                     >
                        <MessageCircle className="absolute top-8 right-8 w-12 h-12 text-white/10" />
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-8 leading-relaxed">
                           "{t(`testimonials.items.${item}.quote`)}"
                        </p>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 flex items-center justify-center font-bold text-lg">
                              {t(`testimonials.items.${item}.name`).charAt(0)}
                           </div>
                           <div>
                              <div className="font-bold text-white text-lg">{t(`testimonials.items.${item}.name`)}</div>
                              <div className="text-sky-400 text-sm">{t(`testimonials.items.${item}.role`)}</div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* THE FULL ECOSYSTEM */}
         <section className="py-24 relative z-10 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
            <div className="container max-w-5xl mx-auto px-4 py-10 relative">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center gap-12 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/40 dark:to-sky-950/40 border border-indigo-100 dark:border-indigo-900/50 shadow-2xl relative overflow-hidden"
               >
                  <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 blur-[100px] rounded-full" />

                  <div className="md:w-1/2 relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700">
                        <Image src="/omuz.svg" alt="Omuz" width={40} height={40} className="dark:invert" />
                     </div>
                     <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">{t('ecosystem.title')}</h2>
                     <p className="text-xl text-indigo-600 dark:text-indigo-300 font-medium mb-4">{t('ecosystem.subtitle')}</p>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                        {t('ecosystem.desc')}
                     </p>
                     <Button variant="outline" className="rounded-xl h-12 px-6 border-indigo-200 dark:border-indigo-800 bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 text-indigo-700 dark:text-indigo-300">
                        Discover Omuz CRM <ChevronRight className="ml-2 w-4 h-4" />
                     </Button>
                  </div>

                  <div className="md:w-1/2 relative z-10 w-full aspect-square md:aspect-auto">
                     {/* Abstract Ecosystem Graphic */}
                     <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent blur-2xl" />
                        <div className="relative w-48 h-48 rounded-full border-2 border-dashed border-indigo-300 dark:border-indigo-700/50 animate-spin-slow flex items-center justify-center">
                           <div className="w-32 h-32 rounded-full border border-sky-300 dark:border-sky-700/50 animate-reverse-spin flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center z-20">
                                 <BookOpen className="w-8 h-8 text-sky-500" />
                              </div>
                           </div>
                           {/* Orbiting nodes */}
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                           <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-sky-400 rounded-full shadow-lg shadow-sky-400/50 flex items-center justify-center text-white"><Users className="w-5 h-5" /></div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>



      </div>
   );
}
