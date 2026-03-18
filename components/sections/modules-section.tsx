"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  Users, 
  Users2, 
  Briefcase, 
  BookOpen, 
  Filter, 
  Calendar, 
  CheckSquare, 
  CreditCard, 
  Building2, 
  Trophy, 
  GraduationCap, 
  MessageSquare,
  FileText,
  UserCheck
} from "lucide-react"

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
}

const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const modules = [
  { key: "crm", icon: Filter, color: "text-blue-500", bg: "bg-blue-500/10" },
  { key: "students", icon: Users, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { key: "groups", icon: Users2, color: "text-purple-500", bg: "bg-purple-500/10" },
  { key: "parents", icon: UserCheck, color: "text-pink-500", bg: "bg-pink-500/10" },
  { key: "hr", icon: Briefcase, color: "text-teal-500", bg: "bg-teal-500/10" },
  { key: "courses", icon: BookOpen, color: "text-amber-500", bg: "bg-amber-500/10" },
  { key: "timetable", icon: Calendar, color: "text-rose-500", bg: "bg-rose-500/10" },
  { key: "journal", icon: CheckSquare, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { key: "finance", icon: CreditCard, color: "text-green-500", bg: "bg-green-500/10" },
  { key: "branches", icon: Building2, color: "text-slate-500", bg: "bg-slate-500/10" },
  { key: "documents", icon: FileText, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { key: "gamification", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { key: "jobs", icon: GraduationCap, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  { key: "sms", icon: MessageSquare, color: "text-sky-500", bg: "bg-sky-500/10" },
  { key: "analytics", icon: BarChart3, color: "text-orange-500", bg: "bg-orange-500/10" },
]

export function PlatformsModulesSection() {
  const t = useTranslations("modules_section")

  return (
    <section id="modules" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-primary text-xs sm:text-sm font-medium mb-6 uppercase shadow-sm dark:shadow-none tracking-widest">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            15 <span className="text-primary">{t("title_highlight")}</span> {t("title_rest")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* 15 Modules in 3 Sliding Rows */}
        <div className="space-y-4 lg:space-y-6">
          {[
            modules.slice(0, 5),
            modules.slice(5, 10),
            modules.slice(10, 15)
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="relative flex overflow-x-hidden group">
              <div 
                className={`flex w-max shrink-0 group-hover:[animation-play-state:paused] ${rowIndex === 1 ? 'animate-marquee-reverse' : 'animate-marquee'}`}
                style={{ animationDuration: '35s' }}
              >
                {/* First set */}
                {row.map((mod) => (
                  <div
                    key={`set1-${mod.key}`}
                    className="group mx-2 lg:mx-3 flex flex-col items-center text-center p-5 lg:p-6 w-[280px] sm:w-[300px] shrink-0 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${mod.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <mod.icon className={`w-6 h-6 ${mod.color}`} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-[15px] leading-tight group-hover:text-primary transition-colors whitespace-normal">
                      {t(`${mod.key}.title`)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed whitespace-normal h-[36px] flex items-center justify-center">
                      {t(`${mod.key}.desc`)}
                    </p>
                  </div>
                ))}
                {/* Second set (duplicated for infinite scroll effect) */}
                {row.map((mod) => (
                  <div
                    key={`set2-${mod.key}`}
                    className="group mx-2 lg:mx-3 flex flex-col items-center text-center p-5 lg:p-6 w-[280px] sm:w-[300px] shrink-0 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${mod.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <mod.icon className={`w-6 h-6 ${mod.color}`} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-[15px] leading-tight group-hover:text-primary transition-colors whitespace-normal">
                      {t(`${mod.key}.title`)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed whitespace-normal h-[36px] flex items-center justify-center">
                      {t(`${mod.key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
