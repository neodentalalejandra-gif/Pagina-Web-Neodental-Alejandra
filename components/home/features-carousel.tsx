"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield, Globe, Award, Heart, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Shield,
    title: "Lugar 100% Confiable",
    description: "Contamos con todas las certificaciones y protocolos de bioseguridad para garantizar tu tranquilidad durante cada visita.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Globe,
    title: "We Speak English",
    description: "Atendemos pacientes internacionales. Our team is fluent in English to make you feel comfortable during your visit.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Award,
    title: "Profesionales Certificados",
    description: "Nuestro equipo cuenta con especializaciones y actualizacion constante en las ultimas tecnicas odontologicas.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Heart,
    title: "Trato Humanizado",
    description: "Entendemos que visitar al dentista puede generar ansiedad. Por eso, creamos un ambiente calido y acogedor.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Adaptamos nuestros horarios a tu agenda. Ofrecemos citas tempranas, en hora de almuerzo y los sabados.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Tecnologia Avanzada",
    description: "Utilizamos equipos de ultima generacion para diagnosticos precisos y tratamientos menos invasivos.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

export function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  const getVisibleFeatures = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(features[(currentIndex + i) % features.length])
    }
    return result
  }

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Por que elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo que nos hace diferentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En Neodental nos esforzamos por ofrecer una experiencia dental excepcional que va mas alla del tratamiento
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleFeatures().map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", feature.color)}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
              <span className="sr-only">Anterior</span>
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {features.map((_, index) => (
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
                  <span className="sr-only">Ir a {index + 1}</span>
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
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
