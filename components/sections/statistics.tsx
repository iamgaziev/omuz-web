"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref}>
      <span className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
        {count}<span className="text-primary/70">{suffix}</span>
      </span>
    </div>
  )
}

export function StatisticsSection() {
  const t = useTranslations("stats")

  const stats = [
    { value: 7, suffix: "", label: t("centers") },
    { value: 3, suffix: t("k_plus"), label: t("students") },
    { value: 15, suffix: "+", label: t("experience") },
  ]

  return (
    <section className="py-20 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
