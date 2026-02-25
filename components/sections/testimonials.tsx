"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

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
      name: "Nurullo Sulaymonov",
      role: "Co-founder of Online Omuz",
      content: t("malika"),
      image: "/nurullo_sulaymonov.jpg",
    },
    {
      name: "Zoirjon Kabirov",
      role: "Co-founder of Riotech.tj",
      content: t("davron"),
      image: "/zoirjon_kabirov.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:bg-[#030305] border-y border-slate-200/50 dark:border-white/5"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f06_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f06_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-200/30 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Centered Blue Circle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-sky-300/15 dark:bg-blue-500/15 blur-[100px]" />
        <div className="absolute inset-[100px] rounded-full bg-blue-300/10 dark:bg-indigo-400/10 blur-[80px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            {t("title_1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">
              {t("title_2")}
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              key={i}
              className="relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-sky-300 dark:hover:border-indigo-400/40 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Large quote watermark */}
              <div className="absolute top-8 right-8 text-7xl font-serif text-sky-500/10 dark:text-indigo-400/15 group-hover:text-sky-500/20 dark:group-hover:text-indigo-400/25 transition-colors duration-500 leading-none">
                "
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic text-sm md:text-base leading-relaxed mb-10 relative z-10 font-light pr-8">
                "{testi.content}"
              </p>

              <div className="relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-sky-500/20 dark:from-indigo-400/30 to-transparent mb-6" />
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-sky-200 dark:ring-indigo-500/30 group-hover:ring-sky-400 dark:group-hover:ring-indigo-400/60 transition-all duration-500 shrink-0">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">
                      {testi.name}
                    </h4>
                    <p className="text-[12px] md:text-[11px] text-sky-600 dark:text-indigo-300 font-normal mt-0.5">
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
