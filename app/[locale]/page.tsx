import { setRequestLocale } from 'next-intl/server';
import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
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

      {/* 2. Core Advantages — competencies */}
      <CoreAdvantagesSection />

      {/* 3. 13 Modules Grid - Ecosystem */}
      <PlatformsModulesSection />

      {/* 4. Statistics — numbers that prove value */}
      <StatisticsSection />

      {/* 5. About — who we are */}
      <AboutSection />

      {/* 6. CRM Gallery — live screenshots */}
      <CrmGallerySection />

      {/* 7. Partners — instant social proof */}
      <Clients />

      {/* 8. Testimonials — what others say */}
      <TestimonialsSection />

      {/* 9. Contact — final conversion */}
      <ContactSection />
    </div>
  );
}


