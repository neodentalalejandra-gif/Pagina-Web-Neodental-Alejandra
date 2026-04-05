"use client"

import { TestimonialCard } from "./testimonial-card"
import { useLanguage } from "@/lib/language-context"

const testimonialKeys = [
  {
    nameKey: "testimoniosPage.t1.name",
    procedureKey: "testimoniosPage.t1.procedure",
    storyKey: "testimoniosPage.t1.story",
    beforeImage: "/images/testimonios/testimonial-1-cara.jpg",
    afterImage: "/images/testimonios/testimonial-1-dental.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t1.date",
  },
  {
    nameKey: "testimoniosPage.t2.name",
    procedureKey: "testimoniosPage.t2.procedure",
    storyKey: "testimoniosPage.t2.story",
    beforeImage: "/images/testimonios/testimonial-2-cara.jpg",
    afterImage: "/images/testimonios/testimonial-2-dental.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t2.date",
  },
]

export function TestimoniosGrid() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Instruction */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground italic">
            {t("testimoniosPage.instruction")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialKeys.map((item) => (
            <TestimonialCard
              key={item.nameKey}
              name={t(item.nameKey)}
              procedure={t(item.procedureKey)}
              story={t(item.storyKey)}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              rating={item.rating}
              date={t(item.dateKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
