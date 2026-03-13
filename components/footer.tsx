"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/omuz.svg"
                alt="Omuz.tj"
                width={110}
                height={36}
                className="h-9 w-auto dark:brightness-200 dark:contrast-200 transition-all duration-300"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-sm">
              {t("description")}
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/omuz.tj/" },
                { icon: Send, href: "https://t.me/omuztj" }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white text-slate-500 dark:text-slate-400 transition-all">
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-slate-900 dark:text-white uppercase tracking-wider">
              {t("info")}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'contact', href: '#contact' },
              ].map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  >
                    {t(item.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-slate-900 dark:text-white uppercase tracking-wider">
              {t("contact")}
            </h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">{t("privacy")}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
