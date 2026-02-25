import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPage({
   params
}: {
   params: { locale: string };
}) {
   setRequestLocale(params.locale);
   const t = useTranslations("contact_page");

   return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
         <main className="flex-grow pt-24 pb-12">
            <div className="container mx-auto px-4">
               {/* Header */}
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
                     {t('title')}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                     {t('subtitle')}
                  </p>
               </div>

               <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

                  {/* Contact Info Card */}
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                     <div className="relative z-10 space-y-8">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-xl text-sky-600 dark:text-sky-400">
                              <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">{t('address_label')}</h3>
                              <p className="text-muted-foreground">{t('info.address')}</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                              <Mail className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">{t('email_label')}</h3>
                              <p className="text-muted-foreground">{t('info.email')}</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400">
                              <Phone className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">{t('phone_label')}</h3>
                              <p className="text-muted-foreground">{t('info.phone')}</p>
                           </div>
                        </div>
                     </div>

                     {/* Map */}
                     <p className="text-sm text-muted-foreground font-large">{t('map_implementation')}</p>
                     <div className="h-64 w-full rounded-2xl overflow-hidden relative group cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-500">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.4000973259053!2d68.75917633309824!3d38.56373114064735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d1e787e0d7f1%3A0xf9e530d3017a4375!2z0JDQutCw0LTQtdC80LjRj9C4INCx0LDRgNC90L7QvNCw0YHQvtC30LjQuCBTb2Z0Y2x1Yg!5e0!3m2!1sru!2s!4v1771989027602!5m2!1sru!2s" className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        {/* Тёмный overlay — исчезает при hover */}
                        <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-900/60 pointer-events-none transition-opacity duration-500 group-hover:opacity-0 rounded-2xl" />
                     </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-card border border-border p-8 rounded-3xl shadow-lg relative overflow-hidden">
                     <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-500 to-purple-500" />

                     <ContactForm translations={{
                        name: t('form.name'),
                        surname: t('form.surname'),
                        study_location: t('form.study_location'),
                        phone: t('form.phone'),
                        message: t('form.message'),
                        submit: t('form.submit'),
                        success: t('form.success'),
                        error: t('form.error')
                     }} />
                  </div>

               </div>
            </div>
         </main>
      </div>
   );
}
