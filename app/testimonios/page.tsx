import { Metadata } from "next"
import { TestimoniosHero } from "@/components/testimonios/testimonios-hero"
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
      <TestimoniosHero />
      <TestimoniosGrid />
      <TestimoniosCTA />
    </>
  )
}
