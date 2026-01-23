import { Metadata } from "next"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Servicios | Neodental",
  description: "Descubre todos los servicios odontologicos que ofrecemos en Neodental: limpieza dental, blanqueamiento, ortodoncia, implantes y mas.",
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Cuidado dental integral para toda la familia
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales utilizando tecnologia de punta y tecnicas modernas para garantizar los mejores resultados.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
