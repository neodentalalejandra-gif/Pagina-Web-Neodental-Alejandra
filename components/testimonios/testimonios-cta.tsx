import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimoniosCTA() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Tu transformacion puede ser la siguiente
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Agenda tu cita hoy y comienza el camino hacia la sonrisa que siempre
          soñaste. Nuestro equipo esta listo para ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2 text-base"
          >
            <a
              href="https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" />
              Agenda tu cita
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/servicios">
              Ver servicios
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
