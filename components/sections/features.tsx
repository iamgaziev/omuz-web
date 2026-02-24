"use client"

import { useTranslations } from "next-intl"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Users, BarChart3, Globe, Zap } from "lucide-react"

export function FeaturesSection() {
  const t = useTranslations("features")
  
  const items = [
    {
      title: t("student_management.title"),
      description: t("student_management.description"),
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Users className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("analytics.title"),
      description: t("analytics.description"),
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("online_learning.title"),
      description: t("online_learning.description"),
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("automation.title"),
      description: t("automation.description"),
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
