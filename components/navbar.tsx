"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"

export function Navbar() {
  const t = useTranslations("navigation")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#partners", label: "partners" },
    { href: "#contact", label: "contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      const offset = 80 // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl transition-all duration-300 border-b border-slate-200/50 dark:border-slate-800/50",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container max-w-7xl px-4 py-3 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex-shrink-0 cursor-pointer">
          <Image
            src="/omuz.svg"
            alt="Omuz.tj Logo"
            width={120}
            height={36}
            priority
            className="h-9 w-auto dark:brightness-200 dark:contrast-200 transition-all duration-300"
          />
        </a>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
            >
              {t(link.label)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border">
              <SheetHeader className="sr-only">
                <SheetTitle>{t('menu')}</SheetTitle>
                <SheetDescription>
                  {t('menu_description')}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map(link => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
                    >
                      {t(link.label)}
                    </a>
                  </SheetClose>
                ))}

                <div className="h-px bg-border" />

                <div className="flex items-center justify-between">
                  <span className="text-foreground/60 text-sm">{t('theme')}</span>
                  <ThemeToggle />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-foreground/60 text-sm">Language</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
