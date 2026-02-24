"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { BookOpen, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

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
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0  right-0 z-50 bg-background/80 backdrop-blur-md transition-all duration-300 border-b border-border",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container max-w-7xl p-5 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div>
            <Image
              src="/omuz.svg"
              alt="Omuz.tj Logo"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t('home')}
          </Link>

          {/* Products Dropdown (Simplified as separate links for now for better UX on mobile/simplicity) */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              {t('products')}
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/products/crm" className="block px-4 py-3 hover:bg-accent text-sm">
                {t('crm')}
              </Link>
              <Link href="/products/online" className="block px-4 py-3 hover:bg-accent text-sm">
                {t('online')}
              </Link>
            </div>
          </div>

          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {t(link.label)}
            </Link>
          ))}
        </div>

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
                <Link href="/" className="text-lg font-medium">
                  {t('home')}
                </Link>
                <Link href="/products/crm" className="text-lg font-medium pl-4">
                  {t('crm')}
                </Link>
                <Link href="/products/online" className="text-lg font-medium pl-4">
                  {t('online')}
                </Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium">
                    {t(link.label)}
                  </Link>
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
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />


        </div>
      </div>
    </header>
  )
}
