"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      name: "Shahbozi Abdulloh",
      role: "Co-founder CEO Intelect-edu",
      content: t("jamshed"),
      image: "/shahbozi_abdullo.jpg",
    },
    {
      name: "Saidumron Rahmonov",
      role: t("saidumron_role"),
      content: t("saidumron"),
      image: "/saidumron_rahmonov.jpg",
    },
    {
      name: "Hasanjon Aliev",
      role: t("hasanjon_role"),
      content: t("hasanjon"),
      image: "/hasanjon_aliev.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 via-[10%] to-slate-50 dark:from-slate-900 dark:via-[#0f172a] dark:via-[10%] dark:to-[#0f172a]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            {t("title_1")}{" "}
            <span className="text-primary">
              {t("title_2")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              key={i}
              className="relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8 flex-1">
                {testi.content}
              </p>

              <div>
                <div className="h-px w-full bg-slate-100 dark:bg-slate-700 mb-6" />
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {testi.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
