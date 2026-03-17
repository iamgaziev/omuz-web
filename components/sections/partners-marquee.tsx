"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"

const clients = [
  { name: "Softclub Academy", logo: "/partners/softclub_academy.png" },
  { name: "Intellect", logo: "/partners/intellect.png" },
  { name: "Dastai Alo", logo: "/partners/dastai_alo.png" },
  { name: "Ilm Omuz", logo: "/partners/ilm_omuz.png" },
  { name: "Rushdi Donish", logo: "/partners/rushdi_donish.png" },
  { name: "DLC", logo: "/partners/dlc.png" },
  { name: "Smart", logo: "/partners/smart.svg" },
]

function ClientCard({ name, logo, description, label }: {
  name: string
  logo: string
  description: string
  label: string
}) {
  return (
    <div className="mx-3 flex flex-col items-start gap-3 p-6 w-[320px] shrink-0 rounded-2xl
            bg-white dark:bg-slate-800/50
            border border-slate-200 dark:border-slate-700
            shadow-sm hover:shadow-lg hover:border-primary/30
            transition-all duration-300 group"
    >
      <div className="w-full h-24 mb-3 relative flex items-center justify-start rounded-xl overflow-hidden p-2">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain object-left md:object-center drop-shadow-sm brightness-105"
        />
      </div>
      <div className="w-full flex-grow flex flex-col justify-start">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1.5 uppercase tracking-wide">{label}</p>
        <div className="w-full px-3 py-2 mt-auto rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 text-sm">
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
