import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Servicios | Neodental",
  description: "Descubre todos los servicios odontologicos que ofrecemos en Neodental: limpieza dental, blanqueamiento, ortodoncia, implantes y mas.",
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
