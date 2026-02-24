"use client"

import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"
import { TJFlag } from "@/components/icons/flags"
import { useState } from "react"
import { toast } from "react-toastify"

import Image from "next/image"

export function ConsultationSection() {
  const t = useTranslations("consultation")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success(t("success"), {
        position: "top-right",
        theme: "light",
      })
    }, 1500)
  }

  return (
    <section className="p-5">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[800px] lg:h-[800px] bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl -z-10" />

      <div className="container max-w-7xl mx-auto p-5">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
          
          {/* Aside - Brand/Visual */}
          <div className="hidden lg:flex flex-col justify-between p-10 bg-slate-50 dark:bg-slate-900 relative min-h-[500px]">
             <div className="relative z-10">
                <Image 
                  src="/omuz.svg" 
                  alt="Omuz Logo" 
                  width={150} 
                  height={50} 
                  className="mb-8 dark:hidden"
                />
                <Image 
                  src="/omuz.svg" 
                  alt="Omuz Logo" 
                  width={150} 
                  height={50} 
                  className="mb-8 hidden dark:block"
                />
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
                  {t("title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm">
                  {t("subtitle")}
                </p>
             </div>
             
             {/* Decorative pattern or gradient */}
             <div className="absolute bottom-0 right-0 w-full h-full opacity-10 dark:opacity-5">
                <svg className="w-full h-full text-sky-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                   </pattern>
                   <rect width="100" height="100" fill="url(#grid)" />
                </svg>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 bg-white dark:bg-slate-950 flex flex-col justify-center">
            <div className="lg:hidden mb-8">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                 {t("title")}
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm">
                 {t("subtitle")}
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Input 
                  placeholder={t("name_placeholder")} 
                  className="h-14 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  required
                />
              </div>
              
              <div className="flex gap-3 h-14">
                <div className="flex items-center gap-2 px-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl shrink-0">
                   <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 relative border border-slate-200 dark:border-slate-700">
                      <TJFlag className="w-full h-full object-cover scale-150" />
                   </div>
                   <span className="text-slate-700 dark:text-slate-300 font-medium">+992</span>
                </div>
                <Input 
                  placeholder={t("phone_placeholder")} 
                  type="tel"
                  className="h-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  required
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <Checkbox 
                  id="terms" 
                  className="mt-1 border-slate-400 dark:border-slate-600 data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600" 
                  required 
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-slate-600 dark:text-slate-400 leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                >
                  {t("agreement")}
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-14 rounded-xl text-lg font-medium bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/20 dark:shadow-sky-900/30 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">{t("sending")}</span>
                ) : (
                  <>
                    {t("submit")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
