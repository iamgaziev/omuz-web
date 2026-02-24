"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProductFeatureListProps {
  features: string[];
}

export const ProductFeatureList = ({ features }: ProductFeatureListProps) => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" />
              <p className="text-lg font-medium leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
