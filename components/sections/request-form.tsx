"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import { Loader2, Send } from "lucide-react"

interface RequestFormSectionProps {
  imageSrc: string;
}

export function RequestFormSection({ imageSrc }: RequestFormSectionProps) {
  const t = useTranslations("request_form")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success(t("success"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 1500)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {t("title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {t("subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                  {t("name_placeholder")}
                </label>
                <Input 
                  placeholder={t("name_placeholder")} 
                  className="h-12 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 transition-all focus:ring-2 focus:ring-sky-500/20"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                    {t("phone_placeholder")}
                  </label>
                  <Input 
                    placeholder={t("phone_placeholder")} 
                    type="tel"
                    className="h-12 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 transition-all focus:ring-2 focus:ring-sky-500/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                    {t("email_placeholder")}
                  </label>
                  <Input 
                    placeholder={t("email_placeholder")} 
                    type="email"
                    className="h-12 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 transition-all focus:ring-2 focus:ring-sky-500/20"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 rounded-xl text-lg font-medium bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t("sending")}
                  </>
                ) : (
                  <>
                    {t("submit")}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={imageSrc}
              alt="Support Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
