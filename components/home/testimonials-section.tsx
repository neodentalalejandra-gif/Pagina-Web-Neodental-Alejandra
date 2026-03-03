"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Carolina Martinez",
    roleEs: "Paciente desde 2020",
    roleEn: "Patient since 2020",
    contentEs: "Siempre tuve miedo de ir al dentista hasta que conoci Neodental. La Dra. Maria y su equipo me hicieron sentir tan comoda que ahora voy a mis citas sin ningun temor. Mi sonrisa nunca se habia visto mejor.",
    contentEn: "I was always afraid of going to the dentist until I found Neodental. Dr. Maria and her team made me feel so comfortable that I now go to my appointments without any fear. My smile has never looked better.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "David Thompson",
    roleEs: "Paciente Internacional",
    roleEn: "International Patient",
    contentEs: "Como extranjero viviendo en Colombia, encontrar un dentista que hable ingles era importante. El equipo de Neodental es profesional, amigable y la calidad de atencion es excepcional. Muy recomendado!",
    contentEn: "As an expat living in Colombia, finding a dentist who speaks English was important. The team at Neodental is professional, friendly, and the quality of care is exceptional. Highly recommended!",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Andres Gomez",
    roleEs: "Paciente desde 2018",
    roleEn: "Patient since 2018",
    contentEs: "Llevo mas de 5 años visitando Neodental y siempre recibo un trato excelente. Los procedimientos son explicados claramente y las instalaciones son impecables. Sin duda, el mejor consultorio dental.",
    contentEn: "I've been visiting Neodental for over 5 years and always receive excellent treatment. Procedures are clearly explained and the facilities are impeccable. Without a doubt, the best dental office.",
    rating: 5,
    avatar: "AG",
  },
  {
    name: "Laura Sanchez",
    roleEs: "Paciente desde 2021",
    roleEn: "Patient since 2021",
    contentEs: "Me realizaron un blanqueamiento dental y el resultado fue increible. El proceso fue rapido, indoloro y el equipo estuvo pendiente de mi en todo momento. Muy agradecida con Neodental.",
    contentEn: "I had a teeth whitening done and the result was incredible. The process was quick, painless, and the team was attentive at all times. Very grateful to Neodental.",
    rating: 5,
    avatar: "LS",
  },
  {
    name: "Miguel Torres",
    roleEs: "Paciente desde 2019",
    roleEn: "Patient since 2019",
    contentEs: "La ortodoncia que me hicieron cambio mi vida. Ahora sonrio con total confianza. El seguimiento que me dieron durante todo el tratamiento fue impecable. Gracias Neodental!",
    contentEn: "The orthodontic treatment changed my life. Now I smile with total confidence. The follow-up they gave me throughout the treatment was impeccable. Thank you Neodental!",
    rating: 5,
    avatar: "MT",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t, locale } = useLanguage()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                &ldquo;{locale === "es" ? current.contentEs : current.contentEn}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {current.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {current.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {locale === "es" ? current.roleEs : current.roleEn}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">{t("testimonials.prev")}</span>
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === index ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  )}
                >
                  <span className="sr-only">{t("testimonials.viewTestimonial")} {index + 1}</span>
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">{t("testimonials.next")}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
