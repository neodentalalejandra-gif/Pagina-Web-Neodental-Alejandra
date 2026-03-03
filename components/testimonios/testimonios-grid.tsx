"use client"

import { TestimonialCard } from "./testimonial-card"
import { useLanguage } from "@/lib/language-context"

const testimonialKeys = [
  {
    nameKey: "testimoniosPage.t1.name",
    procedureKey: "testimoniosPage.t1.procedure",
    storyKey: "testimoniosPage.t1.story",
    beforeImage: "/images/testimonios/carolina-antes.jpg",
    afterImage: "/images/testimonios/carolina-despues.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t1.date",
  },
  {
    nameKey: "testimoniosPage.t2.name",
    procedureKey: "testimoniosPage.t2.procedure",
    storyKey: "testimoniosPage.t2.story",
    beforeImage: "/images/testimonios/andres-antes.jpg",
    afterImage: "/images/testimonios/andres-despues.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t2.date",
  },
  {
    nameKey: "testimoniosPage.t3.name",
    procedureKey: "testimoniosPage.t3.procedure",
    storyKey: "testimoniosPage.t3.story",
    beforeImage: "/images/testimonios/laura-antes.jpg",
    afterImage: "/images/testimonios/laura-despues.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t3.date",
  },
  {
    nameKey: "testimoniosPage.t4.name",
    procedureKey: "testimoniosPage.t4.procedure",
    storyKey: "testimoniosPage.t4.story",
    beforeImage: "/images/testimonios/miguel-antes.jpg",
    afterImage: "/images/testimonios/miguel-despues.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t4.date",
  },
  {
    nameKey: "testimoniosPage.t5.name",
    procedureKey: "testimoniosPage.t5.procedure",
    storyKey: "testimoniosPage.t5.story",
    beforeImage: "/images/testimonios/sofia-antes.jpg",
    afterImage: "/images/testimonios/sofia-despues.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t5.date",
  },
  {
    nameKey: "testimoniosPage.t6.name",
    procedureKey: "testimoniosPage.t6.procedure",
    storyKey: "testimoniosPage.t6.story",
    beforeImage: "/images/testimonios/roberto-antes.jpg",
    afterImage: "/images/testimonios/roberto-despues.jpg",
    rating: 5,
    dateKey: "testimoniosPage.t6.date",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
