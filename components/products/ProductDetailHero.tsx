"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductDetailHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string; // Wait, "Visit Site" usually goes to external or internal?
  // Since it's a product page *within* the site, maybe the CTA is an action like "Sign Up" or goes to a demo?
  // But based on translations "Visit Site", it might be an external link or just a placeholder.
  // I'll assume internal for now or just render as a button.
  backText: string;
  backLink: string;
}

export const ProductDetailHero = ({
  title,
  description,
  ctaText,
  ctaLink,
  backText,
  backLink,
}: ProductDetailHeroProps) => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4 max-w-3xl">
          <Link href={backLink} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backText}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground md:text-xl"
          >
            {description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-4"
          >
            <Button size="lg" className="mr-4">
              {ctaText}
            </Button>
            {/* Add secondary CTA if needed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
