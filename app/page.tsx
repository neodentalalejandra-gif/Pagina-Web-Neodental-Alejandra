import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { FeaturesCarousel } from "@/components/home/features-carousel"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesCarousel />

      <CTASection />
    </>
  )
}
