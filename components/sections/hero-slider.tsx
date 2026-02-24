"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Building2, Server, Smartphone, Laptop, Sparkles, Code2, GraduationCap } from "lucide-react"

export function HeroSlider() {
  const t = useTranslations("hero")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Using keys 0, 1, 2 for the 3 slides
  const slides = [0, 1, 2]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Premium Dark-Themed Accents for each slide
  const slideAccents = [
    {
      glow: "from-blue-500/30 to-indigo-500/30",
      text: "from-blue-400 to-indigo-600",
      border: "border-blue-500/30",
      icon: Code2,
      secondaryIcons: [Globe, Server]
    },
    {
      glow: "from-emerald-500/30 to-teal-500/30",
      text: "from-emerald-400 to-teal-600",
      border: "border-emerald-500/30",
      icon: Building2,
      secondaryIcons: [Shield, Laptop]
    },
    {
      glow: "from-purple-500/30 to-pink-500/30",
      text: "from-purple-400 to-pink-600",
      border: "border-purple-500/30",
      icon: GraduationCap,
      secondaryIcons: [Smartphone, Sparkles]
    }
  ]

  const CurrentIcon = slideAccents[currentSlide].icon

  return (
    <section className="relative overflow-hidden max-w-full w-full min-h-180 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030305]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-30" />
        
        {/* Animated Orbs */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`orb-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute top-1/4 left-1/4 lg:w-[500px] lg:h-[500px] bg-gradient-to-tr ${slideAccents[currentSlide].glow} rounded-full blur-[120px] mix-blend-screen -z-10`}
          />
        </AnimatePresence>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#030305] to-transparent z-10" />
      </div>

      <div className="container max-w-7xl px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Area (Takes 7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left pt-12 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-sm font-semibold shadow-sm text-slate-800 dark:text-slate-200"
                >
                  <Sparkles className={`w-4 h-4 ${slideAccents[currentSlide].text.split(' ')[0].replace('from-', 'text-')}`} />
                  <span>{t("badge")}</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                  {t(`slides.${currentSlide}.title`).split(' ').map((word, i, arr) => (
                    <span key={i}>
                      {i === arr.length - 1 || i === arr.length - 2 ? (
                        <span className={`bg-gradient-to-r ${slideAccents[currentSlide].text} bg-clip-text text-transparent inline-block ml-2`}>
                          {word}
                        </span>
                      ) : (
                        word + ' '
                      )}
                    </span>
                  ))}
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  {t(`slides.${currentSlide}.subtitle`)}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button asChild size="lg" className="h-14 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 group">
                    <a href="#products">
                      {t(`slides.${currentSlide}.cta`)}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Visual Area (Takes 5 cols) */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-md aspect-[4/5]">
              {slides.map((idx) => {
                const isActive = currentSlide === idx;
                const isNext = (currentSlide + 1) % slides.length === idx;
                const isPrev = (currentSlide - 1 + slides.length) % slides.length === idx;

                let zIndex = 0;
                let xOffset = 0;
                let scale = 1;
                let opacity = 0;
                let rotateY = 0;

                if (isActive) {
                  zIndex = 30;
                  xOffset = 0;
                  scale = 1;
                  opacity = 1;
                  rotateY = -5;
                } else if (isNext) {
                  zIndex = 20;
                  xOffset = 40;
                  scale = 0.85;
                  opacity = 0.5;
                  rotateY = -15;
                } else if (isPrev) {
                  zIndex = 10;
                  xOffset = -40;
                  scale = 0.85;
                  opacity = 0; // Hide previous completely for a cleaner look
                  rotateY = 15;
                }

                const SlideIcon = slideAccents[idx].icon;
                const SecondaryIcon1 = slideAccents[idx].secondaryIcons[0];
                const SecondaryIcon2 = slideAccents[idx].secondaryIcons[1];

                return (
                  <motion.div
                    key={idx}
                    animate={{ x: xOffset, scale, opacity, rotateY, zIndex }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 origin-right cursor-pointer"
                    onClick={() => setCurrentSlide(idx)}
                  >
                    <div className={`w-full h-full rounded-[2.5rem] bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-2xl border ${isActive ? slideAccents[idx].border : 'border-slate-200 dark:border-white/5'} shadow-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500`}>
                      
                      {/* Inner Glow */}
                      {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-b ${slideAccents[idx].glow} opacity-20`} />
                      )}

                      {/* Main Icon */}
                      <motion.div 
                        animate={isActive ? { y: [-10, 10, -10] } : {}}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <SlideIcon className={`w-32 h-32 ${isActive ? slideAccents[idx].text.split(' ')[0].replace('from-', 'text-') : 'text-slate-400'} drop-shadow-2xl transition-colors duration-500`} />
                      </motion.div>

                      {/* Floating Secondary Icons */}
                      {isActive && (
                        <>
                          <motion.div 
                            animate={{ y: [10, -10, 10], x: [5, -5, 5], rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-12 right-12 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl"
                          >
                            <SecondaryIcon1 className={`w-6 h-6 ${slideAccents[idx].text.split(' ')[0].replace('from-', 'text-')}`} />
                          </motion.div>
                          <motion.div 
                            animate={{ y: [-15, 15, -15], x: [-5, 5, -5], rotate: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-12 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl"
                          >
                            <SecondaryIcon2 className={`w-8 h-8 ${slideAccents[idx].text.split(' ')[1].replace('to-', 'text-')}`} />
                          </motion.div>
                        </>
                      )}

                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            {/* Custom Interactive Pagination */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
              {slides.map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="relative group p-2"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`transition-all duration-500 rounded-full ${
                    currentSlide === idx 
                    ? `w-12 h-2.5 bg-gradient-to-r ${slideAccents[idx].text}` 
                    : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600"
                  }`} />
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
