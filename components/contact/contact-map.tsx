import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactMap() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Donde encontrarnos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos ubicados en una zona de facil acceso con parqueadero disponible para nuestros pacientes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8523475846987!2d-74.08388942500488!3d4.609710995342988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7ebf5c8b1%3A0x6d1d6e5e4c5c5c5c!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2s!4v1704067200000!5m2!1ses!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion de Neodental"
            />
          </div>

          {/* Info Card */}
          <div className="bg-card rounded-2xl p-8 border border-border h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Neodental</h3>
                <p className="text-sm text-muted-foreground">Consultorio Odontologico</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Direccion</p>
                <p className="text-foreground">Calle 45 #23-67, Local 101</p>
                <p className="text-foreground">Bogota, Colombia</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Referencias</p>
                <p className="text-sm text-foreground">
                  Frente al Centro Comercial Plaza Central, a dos cuadras de la estacion de TransMilenio
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Parqueadero</p>
                <p className="text-sm text-foreground">
                  Disponible en el edificio (planta -1)
                </p>
              </div>
            </div>

            <Button asChild className="w-full gap-2">
              <a
                href="https://maps.google.com/?q=4.6097,-74.0817"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4" />
                Abrir en Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
