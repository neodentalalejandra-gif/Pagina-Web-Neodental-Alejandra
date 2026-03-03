"use client"

import { useLanguage } from "@/lib/language-context"

export function ServicesHero() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {t("servicios.badge")}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          {t("servicios.title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("servicios.description")}
        </p>
      </div>
    </section>
  )
}
