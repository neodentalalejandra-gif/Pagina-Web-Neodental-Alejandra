"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/consultorio.jpg"
          alt="Consultorio Neodental"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t("contacto.badge")}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance leading-tight">
            {t("contacto.title")}
          </h1>

          <p className="text-lg md:text-xl text-card/80 mb-8 leading-relaxed">
            {t("contacto.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <a
                href="https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                {t("contacto.agendaAhora")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-card/30 text-card hover:bg-card/10"
            >
              <a href="tel:+573053033981">
                {t("contacto.llamar")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
