"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { Zap } from "lucide-react"

const team = [
  {
    name: "Najibulloh Shamsudinov",
    role: "Software Engineer",
    image: "/team/najibulloh.jpg",
  },
  {
    name: "Olimjon Tojiev",
    role: "Backend Developer",
    image: "/team/olimjon.jpg",
  },
  {
    name: "Hasan Huseynov",
    role: "Frontend Developer",
    image: "/team/hasan.jpg",
  },
  {
    name: "Shamsuddin Arbobzoda",
    role: "Backend Developer",
    image: "/team/shamsiddin.jpg",
  },
  {
    name: "Murodbek Gulmatov",
    role: "Frontend Developer",
    image: "/team/murodbek.jpg",
  },
  {
    name: "Muhammadsodiq Gaziev",
    role: "Frontend Developer",
    image: "/team/muhammadsodiq1.jpg",
  },
]

export function AboutHeroSection() {
  const t = useTranslations("about_page")

  return (
    <>
      {/* About Hero — full bleed video with overlay */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          src="/видео.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 transition-colors duration-500" />

        <div className="relative z-10 text-center max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>{t("title")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            {t("subtitle")}
          </h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t("story_desc")}
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">{t("team_title")}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">{t("team_subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-900/80 dark:to-transparent pt-32 pb-6 px-6 transition-colors duration-500">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
