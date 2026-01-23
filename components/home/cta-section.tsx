import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Tu nueva sonrisa esta a un clic de distancia
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            No esperes mas para cuidar tu salud dental. Agenda tu cita hoy y descubre por que miles de pacientes confian en Neodental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <a
                href="https://wa.me/573001234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5" />
                Agendar cita por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contacto">
                <Phone className="w-5 h-5" />
                Ver informacion de contacto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
