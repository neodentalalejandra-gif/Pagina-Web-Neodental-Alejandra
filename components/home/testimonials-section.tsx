"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Carolina Martinez",
    role: "Paciente desde 2020",
    content: "Siempre tuve miedo de ir al dentista hasta que conoci Neodental. La Dra. Maria y su equipo me hicieron sentir tan comoda que ahora voy a mis citas sin ningun temor. Mi sonrisa nunca se habia visto mejor.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "David Thompson",
    role: "International Patient",
    content: "As an expat living in Colombia, finding a dentist who speaks English was important. The team at Neodental is professional, friendly, and the quality of care is exceptional. Highly recommended!",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Andres Gomez",
    role: "Paciente desde 2018",
    content: "Llevo mas de 5 años visitando Neodental y siempre recibo un trato excelente. Los procedimientos son explicados claramente y las instalaciones son impecables. Sin duda, el mejor consultorio dental.",
    rating: 5,
    avatar: "AG",
  },
  {
    name: "Laura Sanchez",
    role: "Paciente desde 2021",
    content: "Me realizaron un blanqueamiento dental y el resultado fue increible. El proceso fue rapido, indoloro y el equipo estuvo pendiente de mi en todo momento. Muy agradecida con Neodental.",
    rating: 5,
    avatar: "LS",
  },
  {
    name: "Miguel Torres",
    role: "Paciente desde 2019",
    content: "La ortodoncia que me hicieron cambio mi vida. Ahora sonrio con total confianza. El seguimiento que me dieron durante todo el tratamiento fue impecable. Gracias Neodental!",
    rating: 5,
    avatar: "MT",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfaccion de nuestros pacientes es nuestra mejor carta de presentacion
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
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
              <span className="sr-only">Anterior</span>
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
                  <span className="sr-only">Ver testimonio {index + 1}</span>
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
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
