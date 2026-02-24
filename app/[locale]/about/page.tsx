import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
   ArrowRight,
   Target,
   Lightbulb,
   Users,
   Globe,
   Shield,
   Zap,
} from "lucide-react";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { StatisticsSection as Statistics } from "@/components/sections/statistics";

export default function AboutPage({ params }: { params: { locale: string } }) {
   setRequestLocale(params.locale);
   const t = useTranslations("about_page");

   const values = [
      {
         key: "innovation",
         icon: Lightbulb,
         color: "text-yellow-500",
         bg: "bg-yellow-100 dark:bg-yellow-900/20",
      },
      {
         key: "community",
         icon: Users,
         color: "text-sky-500",
         bg: "bg-sky-100 dark:bg-sky-900/20",
      },
      {
         key: "quality",
         icon: Shield,
         color: "text-purple-500",
         bg: "bg-purple-100 dark:bg-purple-900/20",
      },
   ];

   const team = [

      {
         name: "Najibulloh Shamsudinov",
         role: "Senior Developer / Chief Manager",
         image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      },
      {
         name: "Olimjon Tojiev",
         role: "Senior Backend Dev / Backend Team Lead",
         image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      },
      {
         name: "Hasan Huseynov",
         role: "Middle Frontend Dev / Frontend Team Lead",
         image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      },
      {
         name: "Shamsuddin Arbobzoda",
         role: "Backend Developer",
         image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      },
      {
         name: "Murodbek Gulmatov",
         role: "Frontend Developer",
         image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      },
      {
         name: "Muhammadsodiq Gaziev",
         role: "Frontend Developer",
         image:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
      },
   ];

   return (
      <div className="min-h-screen bg-background text-foreground">
         {/* Hero Section */}
         <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <Image
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
               alt="Office"
               fill
               className="object-cover"
               priority
            />
            <div className="absolute inset-0 bg-slate-950/60" />

            <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in">
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>{t("title")}</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                  {t("subtitle")}
               </h1>
               <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                  {t("story_desc")}
               </p>
            </div>
         </div>

         {/* Stats Section */}
         <div className="relative z-20 container max-w-7xl mx-auto px-4 py-16 mb-12">
            <div className="bg-background rounded-3xl shadow-xl border border-border p-8 md:p-12">
               <Statistics />
            </div>
         </div>

         {/* Mission & Vision */}
         <section className="py-12 container max-w-7xl mx-auto px-4 mb-24">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-border">
                  <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mb-6">
                     <Target className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{t("mission_title")}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     {t("mission_desc")}
                  </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-border">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                     <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{t("vision_title")}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     {t("vision_desc")}
                  </p>
               </div>
            </div>
         </section>

         {/* Our Values */}
         <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container max-w-7xl mx-auto px-4">
               <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
                  {t("values_title")}
               </h2>
               <div className="grid md:grid-cols-3 gap-8">
                  {values.map((val) => (
                     <div
                        key={val.key}
                        className="bg-background border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group"
                     >
                        <div
                           className={`w-14 h-14 ${val.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                        >
                           <val.icon className={`w-7 h-7 ${val.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                           {t(`values.${val.key}`)}
                        </h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full mb-4" />
                        <p className="text-muted-foreground">
                           {/* Placeholder text or verify if values have descriptions in json */}
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                           do eiusmod tempor incididunt ut labore.
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Our Team */}
         <section className="py-24 container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold mb-4">{t("team_title")}</h2>
               <p className="text-xl text-muted-foreground">{t("team_subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {team.map((member, i) => (
                  <div
                     key={i}
                     className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
                  >
                     <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent pt-32 pb-6 px-6">
                        <h3 className="font-bold text-xl text-white mb-1">
                           {member.name}
                        </h3>
                        <p className="text-sm font-medium text-sky-400">
                           {member.role}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Partners */}
         <section className="py-12 border-y border-border bg-slate-50/50 dark:bg-slate-900/20">
            <PartnersMarquee />
         </section>

         {/* CTA Section */}
         <section className="py-24 container max-w-7xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-sky-600 to-purple-600 rounded-3xl p-12 md:p-24 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                     {t("cta_title")}
                  </h2>
                  <p className="text-xl text-sky-100 mb-10 leading-relaxed">
                     {t("cta_subtitle")}
                  </p>
                  <Button
                     asChild
                     size="lg"
                     className="bg-white text-sky-600 hover:bg-sky-50 rounded-full px-10 h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                     <Link href="/contact">{t("cta_btn")}</Link>
                  </Button>
               </div>
            </div>
         </section>
      </div>
   );
}
