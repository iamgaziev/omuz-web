import { setRequestLocale, getTranslations } from 'next-intl/server';
import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductSelectionCard } from "@/components/hub/ProductSelectionCard";
import { Footer } from "@/components/footer";
import { Clients } from "@/components/sections/partners-marquee";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { EcosystemBeam } from "@/components/sections/ecosystem-beam";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'hub' });

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSlider />

      <Clients />

      <AboutSection />

      <EcosystemBeam />

      <FeaturesSection />

      <TestimonialsSection />

    </div>
  );
}

