"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield, Globe, Award, Heart, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const featureDefinitions = [
  { icon: Shield, titleKey: "features.f1.title", descKey: "features.f1.desc", color: "bg-blue-500/10 text-blue-600" },
  { icon: Globe, titleKey: "features.f2.title", descKey: "features.f2.desc", color: "bg-green-500/10 text-green-600" },
  { icon: Award, titleKey: "features.f3.title", descKey: "features.f3.desc", color: "bg-amber-500/10 text-amber-600" },
  { icon: Heart, titleKey: "features.f4.title", descKey: "features.f4.desc", color: "bg-rose-500/10 text-rose-600" },
  { icon: Clock, titleKey: "features.f5.title", descKey: "features.f5.desc", color: "bg-purple-500/10 text-purple-600" },
  { icon: Sparkles, titleKey: "features.f6.title", descKey: "features.f6.desc", color: "bg-cyan-500/10 text-cyan-600" },
]

export function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featureDefinitions.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % featureDefinitions.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + featureDefinitions.length) % featureDefinitions.length)
  }

  const getVisibleFeatures = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(featureDefinitions[(currentIndex + i) % featureDefinitions.length])
    }
    return result
  }

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t("features.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleFeatures().map((feature, index) => (
                <div
                  key={`${feature.titleKey}-${index}`}
                  className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", feature.color)}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">{t("features.prev")}</span>
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {featureDefinitions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === index ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  )}
                >
                  <span className="sr-only">{t("features.goTo")} {index + 1}</span>
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">{t("features.next")}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
