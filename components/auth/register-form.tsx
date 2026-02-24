"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import { Link } from "@/i18n/routing"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export function RegisterForm() {
  const t = useTranslations("auth")
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: t("passwords_mismatch"),
  })

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-foreground/80 font-medium ml-1">{t('name_label')}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="bg-background/50 border-input/50 focus:border-sky-500/50 focus:ring-sky-500/20 h-11 rounded-xl" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-foreground/80 font-medium ml-1">{t('email_label')}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="name@example.com" 
                    {...field} 
                    className="bg-background/50 border-input/50 focus:border-sky-500/50 focus:ring-sky-500/20 h-11 rounded-xl" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-foreground/80 font-medium ml-1">{t('password_label')}</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    {...field} 
                    className="bg-background/50 border-input/50 focus:border-sky-500/50 focus:ring-sky-500/20 h-11 rounded-xl" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-foreground/80 font-medium ml-1">{t('confirm_password_label')}</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    {...field} 
                    className="bg-background/50 border-input/50 focus:border-sky-500/50 focus:ring-sky-500/20 h-11 rounded-xl" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-2">
            <InteractiveHoverButton 
              type="submit" 
              className="w-full bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 text-white h-12 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
              disabled={isLoading}
            >
              <span className="flex items-center justify-center">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t('register_btn')}
              </span>
            </InteractiveHoverButton>
          </div>
        </form>
      </Form>

      <div className="text-center text-sm text-muted-foreground mt-4">
        {t('have_account')} 
        <Link href="/login" className="ml-1 text-sky-600 hover:text-sky-500 font-bold transition-colors">
          {t('login')}
        </Link>
      </div>
    </div>
  )
}
