"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Send, MessageCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"

export function ContactSection() {
  const t = useTranslations("contact_section")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success(t("form.success") || "Дархост бомуваффақият ирсол шуд!")
        setFormData({ name: "", phone: "", email: "" })
      } else {
        toast.error(t("form.error") || "Хатогӣ рух дод")
      }
    } catch {
      toast.error(t("form.error") || "Хатогӣ рух дод")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white via-[10%] to-white dark:from-[#0f172a] dark:via-[#020617] dark:via-[10%] dark:to-[#020617]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>{t("title")}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8">
              {t("subtitle")}
            </p>

            {/* Clean Form */}
            <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white rounded-xl outline-none transition-all placeholder:text-slate-400"
                  placeholder={t("form.name")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white rounded-xl outline-none transition-all placeholder:text-slate-400"
                  placeholder="+992 XX XXX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white rounded-xl outline-none transition-all placeholder:text-slate-400"
                  placeholder="example@mail.com"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("form.sending") || "Ирсол шуда истодааст..."}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t("form.submit")}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-[80px] pointer-events-none" />
              
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 rounded-3xl p-12 border border-primary/10 dark:border-primary/20">
                <div className="flex flex-col items-center text-center space-y-8">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t("illustration_title") || "Бо мо тамос гиред"}
                  </h3>

                  <div className="space-y-4 text-left w-full">
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">(+992) 900 73 77 04</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">info@omuz.tj</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">Душанбе, Тоҷикистон</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>



      </div>
    </section>
  )
}
