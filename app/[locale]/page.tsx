import { setRequestLocale } from 'next-intl/server';
import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CoreAdvantagesSection } from "@/components/sections/core-advantages";
import { CrmGallerySection } from "@/components/sections/crm-gallery";
import { Clients } from "@/components/sections/partners-marquee";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StatisticsSection } from "@/components/sections/statistics";
import { ContactSection } from "@/components/sections/contact-section";
import { PlatformsModulesSection } from "@/components/sections/modules-section";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Hero — main CTA */}
      <HeroSlider />

      {/* 4. Core Advantages — competencies */}
      <CoreAdvantagesSection />

      {/* 5. 13 Modules Grid - Ecosystem */}
      <PlatformsModulesSection />

      {/* 6. Statistics — numbers that prove value */}
      <StatisticsSection />

      {/* 7. About — who we are */}
      <AboutSection />

      {/* 8. About Hero image + Team grid */}
      <AboutHeroSection />

      {/* 9. CRM Gallery — live screenshots */}
      <CrmGallerySection />

      {/* 10. Partners — instant social proof */}
      <Clients />

      {/* 11. Testimonials — what others say */}
      <TestimonialsSection />

      {/* 12. Contact — final conversion */}
      <ContactSection />
    </div>
  );
}


