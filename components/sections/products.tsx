"use client"

import { useTranslations, useMessages } from "next-intl"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function ProductsSection() {
  const t = useTranslations()
  const [activeProduct, setActiveProduct] = useState<"crm" | "online" | null>(null)

  const products = [
    {
      id: "crm",
      title: t("products_crm.title"),
      description: t("products_crm.description"),
      link: "omuz.tj/crm",
    },
    {
      id: "online",
      title: t("products_online.title"),
      description: t("products_online.description"),
      link: "online.omuz.tj",
    }
  ]

  return (
    <section id="products" className="py-20 bg-red bg-accent/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          {t("products_crm.title")} & {t("products_online.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary transition-all group cursor-pointer text-left"
              onClick={() => setActiveProduct(product.id as any)}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              <div className="flex items-center text-primary font-bold">
                {t("navigation.view_details")} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={activeProduct !== null} 
        onClose={() => setActiveProduct(null)}
        title={activeProduct === "crm" ? t("products_crm.title") : t("products_online.title")}
      >
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            {activeProduct === "crm" ? t("products_crm.description") : t("products_online.description")}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(activeProduct === "crm" ? 
              [0,1,2,3,4,5].map(i => t(`products_crm.features_list.${i}`)) : 
              [0,1,2,3,4,5].map(i => t(`products_online.features_list.${i}`))
            ).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t font-semibold text-primary">
            Visit: <a href={`https://${activeProduct === "crm" ? t("products_crm.link") : t("products_online.link")}`} target="_blank" className="hover:underline">
              {activeProduct === "crm" ? t("products_crm.link") : t("products_online.link")}
            </a>
          </div>
        </div>
      </Modal>
    </section>
  )
}
