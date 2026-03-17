"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"

const clients = [
  { name: "Softclub Academy", logo: "/partners/softclub_logo.svg" },
  { name: "Intellect", logo: "/partners/intelect_logo.svg" },
  { name: "Dastai Alo", logo: "/partners/dastaiAalo_logo.svg" },
  { name: "Ilm Omuz", logo: "/partners/ilmOmuz_logo.svg" },
  { name: "Rushdi Donish", logo: "/partners/rushdiDonish_logo.svg" },
  { name: "DLC", logo: "/partners/dlc_logo.svg" }
]

function ClientCard({ name, logo, description, label }: {
  name: string
  logo: string
  description: string
  label: string
}) {
  return (
    <div className="mx-4 flex flex-col items-center gap-4 p-8 w-[320px] shrink-0 rounded-[2rem]
            bg-white dark:bg-slate-800/40 backdrop-blur-sm
            border border-slate-200/50 dark:border-slate-700/50
            shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.1)]
            hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] dark:hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)]
            transition-all duration-500 group relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-sky-500/10 dark:bg-sky-500/5 blur-[50px] pointer-events-none rounded-full" />
      
      {/* Rounded Logo Container */}
      <div className="w-24 h-24 relative flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-inner p-4 group-hover:scale-110 transition-transform duration-500 z-10">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain p-3 drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md"
        />
      </div>

      <div className="w-full flex-grow flex flex-col items-center text-center mt-2 z-10">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2">
          {name}
        </h3>
        <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold mb-4 uppercase tracking-wider">{label}</p>
        
        <div className="w-full px-5 py-4 mt-auto rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100/50 dark:border-white/5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
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
    <section id="partners" className="relative py-20 md:py-28 bg-slate-50 dark:bg-[#0f172a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#0f172a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#0f172a] to-transparent z-10 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 mb-12 z-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group z-20">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {clients.map((client, index) => (
            <ClientCard
              key={`client-1-${index}`}
              name={client.name}
              logo={client.logo}
              description={t(`clients.${index}.description`)}
              label={t("direction_label")}
            />
          ))}
          {clients.map((client, index) => (
            <ClientCard
              key={`client-2-${index}`}
              name={client.name}
              logo={client.logo}
              description={t(`clients.${index}.description`)}
              label={t("direction_label")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
