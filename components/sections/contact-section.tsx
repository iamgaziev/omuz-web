"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ContactSection() {
  const t = useTranslations("contact_section")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              {t("subtitle")}
            </p>

            <form className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   {t("form.name")}
                 </label>
                 <input 
                   type="text" 
                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                   placeholder={t("form.name")}
                 />
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   {t("form.phone")}
                 </label>
                 <input 
                   type="tel" 
                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                   placeholder={t("form.phone_placeholder")}
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   {t("form.email")}
                 </label>
                 <input 
                   type="email" 
                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                   placeholder={t("form.email_placeholder")}
                 />
               </div>

               <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-md py-6 text-lg">
                 {t("form.submit")}
               </Button>
            </form>
          </motion.div>

          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            {/* Placeholder for 3D illustration */}
            <div className="relative w-full aspect-square max-w-md">
               <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
               <div className="relative z-10 w-full h-full bg-gradient-to-br from-sky-100 to-white rounded-3xl border border-white/50 shadow-2xl flex items-center justify-center overflow-hidden">
                 <div className="text-center p-8">
                   <div className="text-6xl mb-4">📬</div>
                   <h3 className="text-2xl font-bold text-sky-900">{t("illustration_title")}</h3>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
