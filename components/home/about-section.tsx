"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const featureKeys = [
  "about.feature1",
  "about.feature2",
  "about.feature3",
  "about.feature4",
  "about.feature5",
  "about.feature6",
]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/consultorio.jpg"
                alt="Interior moderno del consultorio Neodental"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent shape */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.p2")}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {featureKeys.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
