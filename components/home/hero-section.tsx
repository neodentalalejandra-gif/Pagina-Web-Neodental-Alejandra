"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              {t("hero.title1")}
              <span className="text-primary">{t("hero.titleHighlight")}</span>
              {t("hero.title2")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2">
                <a
                  href="https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5" />
                  {t("hero.cta")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <Link href="/contacto">
                  <Phone className="w-5 h-5" />
                  {t("hero.contact")}
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">{t("hero.stat1Value")}</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat1Label")}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">{t("hero.stat2Value")}</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat2Label")}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">{t("hero.stat3Value")}</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat3Label")}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3" />
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/doctora-neodental.jpg"
                  alt="Dra. Alejandra Riascos - Odontologa especialista en Neodental"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🦷</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("hero.doctorName")}</p>
                    <p className="text-sm text-muted-foreground">{t("hero.doctorTitle")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
