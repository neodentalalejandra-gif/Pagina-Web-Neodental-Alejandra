import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            No encuentras el servicio que buscas?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Contactanos directamente y te asesoraremos sobre el tratamiento mas adecuado para ti. Estamos aqui para resolver todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a
                href="https://wa.me/573053033981?text=Hola,%20tengo%20una%20consulta%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Escribenos por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/contacto">
                <Phone className="w-5 h-5" />
                Ver contacto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
