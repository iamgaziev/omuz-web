"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Building2, Code2, GraduationCap, Laptop, Lightbulb, Rocket } from "lucide-react"

const clients = [
  { name: "Softclub", icon: Code2 },
  { name: "Intellect", icon: Lightbulb },
  { name: "Dastai Alo", icon: Laptop },
  { name: "Ilm Omuz", icon: Rocket },
  { name: "Rushdi Donish", icon: GraduationCap },
  { name: "DLC", icon: Building2 },
]

function ClientCard({ name, icon: Icon, description, label }: {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  label: string
}) {
  return (
    <div className="mx-4 flex flex-col items-start gap-4 p-8 w-[320px] shrink-0 rounded-2xl
            bg-white dark:bg-white/5
            border border-slate-200/80 dark:border-white/10
            shadow-sm dark:shadow-none hover:shadow-xl
            hover:border-sky-300 dark:hover:border-indigo-400/40
            transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 w-full">
        <div className="p-3 rounded-xl bg-sky-50 dark:bg-indigo-500/10 border border-sky-100 dark:border-indigo-500/20 group-hover:bg-sky-100 dark:group-hover:bg-indigo-500/20 transition-colors">
          <Icon className="w-6 h-6 text-sky-600 dark:text-indigo-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 tracking-wide">
          {name}
        </h3>
      </div>

      <div className="w-full mt-2">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">{label}</p>
        <div className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-indigo-500/10 text-slate-600 dark:text-slate-400 text-sm">
          {description}
        </div>
      </div>
    </div>
  )
}

export function Clients() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("partners")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:bg-[#030305] overflow-hidden border-y border-slate-200/50 dark:border-white/5">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-200/30 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Centered Blue Circle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-sky-300/15 dark:bg-blue-500/15 blur-[100px]" />
        <div className="absolute inset-[100px] rounded-full bg-blue-300/10 dark:bg-indigo-400/10 blur-[80px]" />
      </div>

      {/* Edge fade gradients */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white dark:from-[#030305] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#030305] to-transparent z-10 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 mb-16 z-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">
            {t("title")}
          </h2>
          <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400 mt-4">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group z-20 mt-12">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {clients.map((client, index) => (
            <ClientCard
              key={`client-1-${index}`}
              name={client.name}
              icon={client.icon}
              description={t(`clients.${index}.description`)}
              label={t("direction_label")}
            />
          ))}
          {clients.map((client, index) => (
            <ClientCard
              key={`client-2-${index}`}
              name={client.name}
              icon={client.icon}
              description={t(`clients.${index}.description`)}
              label={t("direction_label")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
