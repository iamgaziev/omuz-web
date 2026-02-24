"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Calendar, CreditCard, ChevronRight, Users, Smartphone, Headphones, CheckCircle2, Building2, Activity, Globe, Zap, ArrowRight, ShieldCheck, Database, Send, Loader2 } from "lucide-react";
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

export default function CrmProductPage({
    // params are ignored for client components to safely hydrate without locale async mismatch
}: {
    params: { locale: string };
}) {
    const t = useTranslations("products_crm");
    const formT = useTranslations("request_form");
    const heroRef = useRef<HTMLDivElement>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success(formT("success"), { position: "top-right" });
        }, 1500);
    };

    // Subtle parallax
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-purple-500/30">

            {/* Premium Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
                {/* Animated Ambient Gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-sky-500/20 dark:bg-sky-500/10 rounded-full blur-[120px] mix-blend-screen"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.02]" />

                    {/* Hero background orbital rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[1200px] pointer-events-none opacity-40 dark:opacity-20 flex items-center justify-center">
                        <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-300 dark:border-slate-700 animate-[spin_60s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)] -translate-x-1/2 translate-y-1/2" />
                        </div>
                        <div className="absolute w-[100%] h-[100%] rounded-full border border-slate-300 dark:border-slate-700 animate-[spin_80s_linear_infinite_reverse]">
                            <div className="absolute left-0 top-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Hero Text */}
                        <motion.div
                            variants={STAGGER}
                            initial="hidden"
                            animate="show"
                            className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start pt-10 lg:pt-0"
                        >
                            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-purple-700 dark:text-purple-400 font-medium text-xs sm:text-sm mb-6 lg:mb-8 border border-purple-200/50 dark:border-purple-800/50 shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                                </span>
                                {t('badge')}
                            </motion.div>

                            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl lg:text-7xl w-full font-bold tracking-tight text-slate-900 dark:text-white mb-4 lg:mb-6 leading-[1.15] lg:leading-[1.1]">
                                {t('title')} <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500 block mt-1 lg:mt-2 pb-1 lg:pb-2">
                                    {t('subtitle')}
                                </span>
                            </motion.h1>

                            <motion.p variants={FADE_UP} className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 lg:mb-10 leading-relaxed max-w-2xl font-light px-2 lg:px-0">
                                {t('description')}
                            </motion.p>

                            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center lg:justify-start px-4 sm:px-0">
                                <Button size="lg" className="h-12 sm:h-14 w-full sm:w-auto px-8 text-base lg:text-lg rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)] border border-purple-500/50 transition-all hover:scale-105">
                                    {t('cta')} <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 sm:h-14 w-full sm:w-auto px-8 text-base lg:text-lg rounded-full border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all hover:scale-105">
                                    {t('demo')}
                                </Button>
                            </motion.div>

                            <motion.div variants={FADE_UP} className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center gap-4 lg:gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur px-4 py-2 rounded-full border border-slate-200/50 dark:border-slate-800/50">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                    <span>{t('stats.users')}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur px-4 py-2 rounded-full border border-slate-200/50 dark:border-slate-800/50">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                    <span>{t('stats.uptime')}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating 3D Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: 20 }}
                            animate={{ opacity: 1, x: 0, rotateY: -10 }}
                            transition={{ duration: 1, type: "spring" }}
                            style={{ y: yBg }}
                            className="flex-1 w-full max-w-[650px] perspective-[2000px] lg:block hidden"
                        >
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative transform rotate-x-[15deg] rotate-z-[-2deg] transition-all duration-700 hover:rotate-0 hover:scale-105"
                            >
                                <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 dark:border-white/10 p-4 ring-1 ring-purple-500/20">
                                    <div className="aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden relative shadow-inner">
                                        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }} className="w-full h-full">
                                            <Image
                                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                                alt="Dashboard Preview"
                                                fill
                                                className="object-cover opacity-90 hover:scale-105 transition-transform duration-[2s] ease-out"
                                            />
                                        </motion.div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end justify-start p-8 pointer-events-none">
                                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                                                <span className="text-white font-medium text-sm">
                                                    {t('interactive_dashboard')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative floating elements */}
                                <div className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                                    <Activity className="w-8 h-8 text-purple-600" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-sky-500 text-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                    <Users className="w-8 h-8" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Premium Glass Stats Bar */}
            <div className="relative border-y border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-sky-500/5 to-purple-500/5" />
                <div className="container max-w-7xl mx-auto px-4 py-8 lg:py-12 relative z-10">
                    <motion.div
                        variants={STAGGER}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-8"
                    >
                        {[
                            { label: t('stats.users'), value: "10k+", icon: Users },
                            { label: t('stats.centers'), value: "50+", icon: Building2 },
                            { label: t('stats.transactions'), value: "$2M+", icon: CreditCard },
                            { label: t('stats.uptime'), value: "99.9%", icon: Activity }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={FADE_UP}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="relative flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300 group overflow-hidden"
                            >
                                {/* Subtle background glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 to-sky-500/0 group-hover:from-purple-500/5 group-hover:to-sky-500/5 transition-colors duration-500" />

                                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-sky-100 dark:from-purple-900/30 dark:to-sky-900/30 text-purple-600 dark:text-purple-400 mb-3 sm:mb-4 ring-1 ring-purple-200 dark:ring-purple-800 shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-sky-500 transition-colors relative z-10">{stat.value}</div>
                                <div className="text-[10px] sm:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider relative z-10">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bento Box Features Grid */}
            <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 lg:mb-20"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-slate-900 dark:text-white tracking-tight">{t('features_title')}</h2>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light">{t('features_subtitle')}</p>
                    </motion.div>

                    <motion.div
                        variants={STAGGER}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6"
                    >
                        {/* Feature 1 - Large Span */}
                        <motion.div variants={FADE_UP} className="md:col-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-sky-500/10 dark:hover:shadow-purple-500/10 transition-all duration-500 flex flex-col justify-between">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-sky-500/20 dark:bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/30 transition-colors" />
                            <div className="relative z-10 max-w-md">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center mb-6 sm:mb-8 text-sky-600 shadow-inner ring-1 ring-sky-200 dark:ring-sky-800">
                                    <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">{t(`features.analytics.title`)}</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                    {t(`features.analytics.desc`)}
                                </p>
                            </div>
                            {/* Abstract graphic */}
                            <div className="absolute right-0 bottom-0 w-1/2 h-48 opacity-20 dark:opacity-40 group-hover:scale-105 transition-transform duration-700 origin-bottom-right" style={{ backgroundImage: 'radial-gradient(circle at right bottom, var(--tw-gradient-stops))', '--tw-gradient-from': '#0ea5e9', '--tw-gradient-to': 'transparent' } as React.CSSProperties} />
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div variants={FADE_UP} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 lg:p-12 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10 transition-all duration-500">
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-8 text-purple-600 shadow-inner ring-1 ring-purple-200 dark:ring-purple-800">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t(`features.scheduling.title`)}</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-light">
                                    {t(`features.scheduling.desc`)}
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div variants={FADE_UP} className="group relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 p-8 lg:p-12 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-8 text-emerald-400 border border-emerald-500/30">
                                    <CreditCard className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{t(`features.payments.title`)}</h3>
                                <p className="text-slate-400 font-light">
                                    {t(`features.payments.desc`)}
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 4 & 5 - Half spans */}
                        <motion.div
                            variants={FADE_UP}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 lg:p-12 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 hover:shadow-orange-500/10 transition-all duration-300"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mb-6 text-orange-600 border border-orange-200 dark:border-orange-800 shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">{t(`features.students.title`)}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-light">{t(`features.students.desc`)}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={FADE_UP}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 lg:p-12 hover:shadow-2xl hover:-translate-y-2 hover:-rotate-1 hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-6 text-indigo-600 border border-indigo-200 dark:border-indigo-800 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">{t(`features.mobile.title`)}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-light">{t(`features.mobile.desc`)}</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Intelligent Workflow Section */}
            <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden text-white border-t border-slate-800">
                {/* Animated particle background overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))', '--tw-gradient-from': '#8b5cf6', '--tw-gradient-to': 'transparent', mixBlendMode: 'screen' } as React.CSSProperties} />
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        className="absolute whitespace-nowrap opacity-[0.03] text-[20rem] font-black -bottom-32 pointer-events-none select-none"
                    >
                        WORKFLOW AUTOMATION SETUP
                    </motion.div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white tracking-tight">{t('workflow_title')}</h2>
                        <p className="text-lg sm:text-xl text-slate-400 font-light">{t('workflow_subtitle')}</p>
                    </motion.div>

                    <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:border-l-0">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2" />

                        {/* Animated glowing line on desktop */}
                        <motion.div
                            className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent -translate-y-1/2 w-1/3"
                            animate={{ x: ['-100%', '300%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 pl-8 md:pl-0">
                            {[
                                { id: 1, icon: ArrowRight, title: t('workflow.step1_title'), desc: t('workflow.step1_desc') },
                                { id: 2, icon: Zap, title: t('workflow.step2_title'), desc: t('workflow.step2_desc') },
                                { id: 3, icon: CheckCircle2, title: t('workflow.step3_title'), desc: t('workflow.step3_desc') },
                            ].map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative group"
                                >
                                    {/* Step Node */}
                                    <div className="absolute -left-12 md:left-1/2 md:-top-16 md:-translate-x-1/2 w-8 h-8 md:w-16 md:h-16 rounded-full bg-slate-900 border-2 border-slate-700 md:border-4 md:border-slate-800 flex items-center justify-center z-10 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-purple-500/50 transition-all duration-300">
                                        <span className="text-slate-400 font-bold group-hover:text-purple-400 transition-colors md:hidden">{step.id}</span>
                                        <step.icon className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors hidden md:block" />
                                    </div>

                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 md:mt-12 group-hover:-translate-y-2">
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{step.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive FAQ Section */}
            <section className="py-32 bg-white dark:bg-slate-900">
                <div className="container max-w-4xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold text-center mb-16 text-slate-900 dark:text-white tracking-tight"
                    >
                        {t('faq_title')}
                    </motion.h2>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300",
                                    openFaq === i ? "bg-slate-50 dark:bg-slate-800/50 shadow-md ring-1 ring-purple-500/20" : "bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900"
                                )}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 outline-none"
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{t(`faq.q${i}`)}</h3>
                                    <ChevronRight className={cn("w-5 h-5 text-purple-500 transition-transform duration-300", openFaq === i ? "rotate-90" : "")} />
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 md:p-8 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {t(`faq.a${i}`)}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Integrations Ecosystem */}
            <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden relative border-t border-slate-200/50 dark:border-slate-800/50">
                {/* Connecting Lines Graphic */}
                <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-slate-900 dark:text-white tracking-tight">{t('integrations_title')}</h2>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light">{t('integrations_subtitle')}</p>
                    </motion.div>

                    {/* Center Node + Orbits */}
                    <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
                        {/* Center Omuz Node */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="absolute z-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-sky-500 rounded-full flex items-center justify-center shadow-[0_0_60px_-10px_rgba(147,51,234,0.6)] border-4 border-white dark:border-slate-900"
                        >
                            <span className="text-xl sm:text-2xl font-black text-white px-2">OMUZ</span>
                        </motion.div>

                        {/* Orbital Rings with Satellites */}
                        <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full border border-purple-200/50 dark:border-purple-800/50 animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full border border-sky-200/50 dark:border-sky-800/50 animate-[spin_30s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)] translate-x-1/2 translate-y-1/2" />
                        </div>
                        <div className="absolute w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full border border-emerald-200/30 dark:border-emerald-800/30 animate-[spin_40s_linear_infinite]">
                            <div className="absolute left-0 top-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        {/* Floating Integration Icons */}
                        {[
                            { icon: Globe, label: "Web", color: "text-blue-500", pos: "top-0 sm:top-10 left-1/2 -translate-x-1/2" },
                            { icon: CreditCard, label: "Payments", color: "text-emerald-500", pos: "bottom-0 sm:bottom-10 left-1/2 -translate-x-1/2" },
                            { icon: Smartphone, label: "SMS", color: "text-orange-500", pos: "top-1/2 -translate-y-1/2 left-0 sm:left-10" },
                            { icon: Database, label: "API", color: "text-purple-500", pos: "top-1/2 -translate-y-1/2 right-0 sm:right-10" },
                            { icon: Zap, label: "Zapier", color: "text-yellow-500", pos: "top-12 left-12 sm:top-24 sm:left-24" },
                            { icon: ShieldCheck, label: "Auth", color: "text-red-500", pos: "bottom-12 right-12 sm:bottom-24 sm:right-24" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={cn("absolute flex flex-col items-center gap-2", item.pos)}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                    className={cn("w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center relative overflow-hidden group hover:scale-110 transition-transform cursor-pointer", item.color)}
                                >
                                    <div className="absolute inset-0 bg-current opacity-5 group-hover:opacity-10 transition-opacity" />
                                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Showcase */}
            <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900 border-t border-slate-800">
                {/* Deep Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-br from-purple-600/30 via-sky-500/20 to-transparent rounded-[100%] blur-[100px] pointer-events-none mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-white/5 backdrop-blur-3xl border border-white/10 p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">{t('cta_banner_title')}</h2>
                            <p className="text-lg sm:text-xl text-slate-300 mb-8 font-light max-w-xl mx-auto lg:mx-0">{t('cta_banner_subtitle')}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                    {t('cta_banner_btn')} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="ghost" className="h-14 px-8 text-lg rounded-full text-white hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/20">
                                    Contact Sales
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30, rotateY: -15 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full perspective-[1000px] hidden lg:block"
                        >
                            <div className="transform rotate-x-[10deg] rotate-z-[2deg] hover:rotate-0 transition-all duration-700 bg-slate-800 rounded-2xl md:rounded-[2rem] p-3 border border-slate-700/50 shadow-2xl ring-1 ring-white/10 group">
                                <div className="aspect-[16/10] bg-slate-950 rounded-xl md:rounded-[1.5rem] overflow-hidden relative shadow-inner">
                                    <motion.div
                                        className="w-full h-full relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <Image
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                            alt="System Preview"
                                            fill
                                            className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                                        />
                                    </motion.div>
                                    {/* Tech overlay grid */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                                    <div className="absolute bottom-6 left-6 flex gap-2">
                                        <div className="w-8 h-8 rounded bg-sky-500/20 backdrop-blur border border-sky-500/30 flex items-center justify-center text-sky-400"><BarChart3 className="w-4 h-4" /></div>
                                        <div className="w-8 h-8 rounded bg-purple-500/20 backdrop-blur border border-purple-500/30 flex items-center justify-center text-purple-400"><Users className="w-4 h-4" /></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


        </div>
    );
}

