"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      name: "Shahbozi Abdulloh",
      role: t("jamshed_role"),
      content: t("jamshed"),
      image: "/shahbozi_abdullo.jpg",
    },
    {
      name: "Nurullo Sulaymonov",
      role: t("malika_role"),
      content: t("malika"),
      image: "/nurullo_sulaymonov.jpg",
    },
    {
      name: "Zoirjon Kabirov",
      role: t("davron_role"),
      content: t("davron"),
      image: "/zoirjon_kabirov.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#030a08] border-t border-emerald-900/20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none mix-blend-screen bg-center" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            {t("title_1")}{" "}
            <span className="text-lime-400 drop-shadow-[0_0_25px_rgba(132,204,22,0.4)]">
              {t("title_2")}
            </span>
          </h2>
          <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line">
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
              className="relative p-8 md:p-10 rounded-[2rem] bg-emerald-950/20 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 group flex flex-col justify-between"
              style={{
                boxShadow: "inset 0 0 40px rgba(16, 185, 129, 0.05)",
              }}
            >
              {/* Large quote watermark */}
              <div className="absolute top-8 right-8 text-7xl font-serif text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors duration-500 leading-none">
                ”
              </div>

              <p className="text-emerald-50/80 italic text-sm md:text-base leading-relaxed mb-10 relative z-10 font-light pr-8">
                "{testi.content}"
              </p>

              <div className="relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-emerald-500/30 to-transparent mb-6" />
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-emerald-500/30 group-hover:ring-emerald-500/60 transition-all duration-500 shrink-0">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">
                      {testi.name}
                    </h4>
                    <p className="text-[12px] md:text-[11px] text-teal-400 font-normal mt-0.5 text-gray-400">
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
