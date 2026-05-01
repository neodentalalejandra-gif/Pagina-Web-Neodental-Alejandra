"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const serviceDefinitions = [
  {
    image: "/images/services/limpieza-dental.jpg",
    titleKey: "servicios.s1.title",
    descKey: "servicios.s1.desc",
    featureKeys: ["servicios.s1.f1", "servicios.s1.f2", "servicios.s1.f3", "servicios.s1.f4"],
    waKey: "servicios.s1.wa",
  },
  {
    image: "/images/services/blanqueamiento.jpg",
    titleKey: "servicios.s2.title",
    descKey: "servicios.s2.desc",
    featureKeys: ["servicios.s2.f1", "servicios.s2.f2", "servicios.s2.f3", "servicios.s2.f4"],
    waKey: "servicios.s2.wa",
  },
  {
    image: "/images/services/restauraciones.jpg",
    titleKey: "servicios.s3.title",
    descKey: "servicios.s3.desc",
    featureKeys: ["servicios.s3.f1", "servicios.s3.f2", "servicios.s3.f3", "servicios.s3.f4"],
    waKey: "servicios.s3.wa",
  },
  {
    image: "/images/services/implantes.jpg",
    titleKey: "servicios.s4.title",
    descKey: "servicios.s4.desc",
    featureKeys: ["servicios.s4.f1", "servicios.s4.f2", "servicios.s4.f3", "servicios.s4.f4"],
    waKey: "servicios.s4.wa",
  },
  {
    image: "/images/services/endodoncia.jpg",
    titleKey: "servicios.s5.title",
    descKey: "servicios.s5.desc",
    featureKeys: ["servicios.s5.f1", "servicios.s5.f2", "servicios.s5.f3", "servicios.s5.f4"],
    waKey: "servicios.s5.wa",
  },
  {
    image: "/images/services/limpieza-dental.jpg",
    titleKey: "servicios.s6.title",
    descKey: "servicios.s6.desc",
    featureKeys: ["servicios.s6.f1", "servicios.s6.f2", "servicios.s6.f3", "servicios.s6.f4"],
    waKey: "servicios.s6.wa",
  },
  {
    image: "/images/services/ortodoncia.jpg",
    titleKey: "servicios.s7.title",
    descKey: "servicios.s7.desc",
    featureKeys: ["servicios.s7.f1", "servicios.s7.f2", "servicios.s7.f3", "servicios.s7.f4"],
    waKey: "servicios.s7.wa",
  },
  {
    image: "/images/services/odontopedriatia.jpg",
    titleKey: "servicios.s8.title",
    descKey: "servicios.s8.desc",
    featureKeys: ["servicios.s8.f1", "servicios.s8.f2", "servicios.s8.f3", "servicios.s8.f4"],
    waKey: "servicios.s8.wa",
  },
]

export function ServicesGrid() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceDefinitions.map((service) => (
            <div
              key={service.titleKey}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={t(service.titleKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t(service.descKey)}
                </p>
                
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.featureKeys.map((fKey) => (
                    <li key={fKey} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {t(fKey)}
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full gap-2" size="lg">
                  <a
                    href={`https://wa.me/573053033981?text=${encodeURIComponent(t(service.waKey))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("servicios.cotiza")}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
