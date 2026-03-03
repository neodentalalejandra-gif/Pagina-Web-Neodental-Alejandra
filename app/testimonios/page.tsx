import { Metadata } from "next"
import { TestimoniosGrid } from "@/components/testimonios/testimonios-grid"
import { TestimoniosCTA } from "@/components/testimonios/testimonios-cta"

export const metadata: Metadata = {
  title: "Testimonios | Neodental",
  description:
    "Conoce las historias de transformacion de nuestros pacientes. Resultados reales con fotos de antes y despues de tratamientos dentales en Neodental.",
}

export default function TestimoniosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Casos Reales
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Transformaciones que hablan por si solas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada sonrisa tiene una historia. Descubre como hemos ayudado a
            nuestros pacientes a recuperar su confianza con resultados reales de
            antes y despues.
          </p>
        </div>
      </section>

      <TestimoniosGrid />
      <TestimoniosCTA />
    </>
  )
}
