"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProductSelectionCardProps {
  title: string;
  description: string;
  link: string;
  type: "online" | "crm";
  buttonText: string;
}

export const ProductSelectionCard = ({
  title,
  description,
  link,
  type,
  buttonText,
}: ProductSelectionCardProps) => {
  const Icon = type === "online" ? BookOpen : LayoutDashboard;
  
  // Custom gradients for each card type
  const bgGradient = type === "online" 
    ? "bg-gradient-to-br from-sky-50/50 via-white to-transparent dark:from-sky-500/10 dark:via-blue-500/5 dark:to-transparent" 
    : "bg-gradient-to-br from-purple-50/50 via-white to-transparent dark:from-purple-500/10 dark:via-pink-500/5 dark:to-transparent";

  const hoverBorder = type === "online"
    ? "group-hover:border-sky-200 dark:group-hover:border-sky-500/50"
    : "group-hover:border-purple-200 dark:group-hover:border-purple-500/50";
    
  const iconColor = type === "online" ? "text-sky-600 dark:text-sky-500" : "text-purple-600 dark:text-purple-500";
  const glowColor = type === "online" ? "group-hover:shadow-sky-200/50 dark:group-hover:shadow-sky-500/20" : "group-hover:shadow-purple-200/50 dark:group-hover:shadow-purple-500/20";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="h-full w-full"
    >
      <Card className={`group relative h-full w-full overflow-hidden border ${hoverBorder} bg-background/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-500 shadow-xl ${glowColor} flex flex-col justify-between`}>
        
        {/* Decorative background blob */}
        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-15 dark:group-hover:opacity-20 ${type === 'online' ? 'bg-sky-500' : 'bg-purple-500'}`} />

        {/* Subtle Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br opacity-50 dark:opacity-20 ${type === 'online' ? 'from-sky-50/50 via-transparent to-transparent dark:from-sky-900/20' : 'from-purple-50/50 via-transparent to-transparent dark:from-purple-900/20'}`} />

        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-background dark:bg-slate-900 border border-border shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${type === 'online' ? 'from-sky-100/80 dark:from-sky-500/20' : 'from-purple-100/80 dark:from-purple-500/20'} to-transparent`} />
              <Icon className={`w-6 h-6 ${iconColor} relative z-10`} />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground tracking-tight">{title}</CardTitle>
          </div>
          <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="relative z-10 pt-4 pb-6 px-6 mt-auto">
          <Link href={link} className="w-full">
            <InteractiveHoverButton className={`w-full h-11 text-sm font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg ${type === 'online' ? 'bg-sky-600 hover:bg-sky-500 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}>
               <span className="flex items-center justify-center gap-2">
                 {buttonText}
                 <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
               </span>
            </InteractiveHoverButton>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
