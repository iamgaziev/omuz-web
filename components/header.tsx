"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export function Header() {
  const t = useTranslations("navigation")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 glass dark:glass-dark shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            O
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-600 dark:from-sky-400 dark:to-sky-500">
            muz.tj
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {["features", "products", "testimonials", "faq"].map((item) => (
            <Link 
              key={item}
              href={`/#${item}`} 
              className="text-sm font-medium text-muted-foreground hover:text-sky-500 transition-colors relative group"
            >
              {t(item)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="h-6 w-px bg-border mx-2 hidden sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
