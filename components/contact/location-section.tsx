import { MapPin, Clock, Navigation, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

const schedule = [
  { day: "Lunes a Viernes", hours: "8:00 AM - 6:00 PM" },
  { day: "Sabados", hours: "8:00 AM - 2:00 PM" },
  { day: "Domingos", hours: "Cerrado" },
]

export function LocationSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Ubicacion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Donde encontrarnos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visitanos en nuestro consultorio, estamos ubicados en una zona de facil acceso
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] border border-border">
            <iframe
              src="https://www.google.com/maps/place/Neodental+Centro+Odontol%C3%B3gico+Laureles/@6.2466819,-75.5968864,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44291d22d870b7:0xa2e76433cefbf719!8m2!3d6.2466766!4d-75.5943115!16s%2Fg%2F11wptddh_k?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion de Neodental"
            />
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-6 border border-border flex-1">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Direccion</h3>
                  <p className="text-muted-foreground text-sm">Consultorio Neodental</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <p className="text-foreground font-medium">Calle 45 #23-67, Local 101</p>
                <p className="text-foreground">Bogota, Colombia</p>
                <div className="flex items-start gap-2 pt-2">
                  <Car className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Parqueadero disponible en el edificio. Frente al Centro Comercial Plaza Central.
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

            {/* Schedule Card */}
            <div className="bg-card rounded-2xl p-6 border border-border flex-1">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Horarios de atencion</h3>
                  <p className="text-muted-foreground text-sm">Agenda tu cita</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span className={`text-sm ${item.hours === "Cerrado" ? "text-destructive" : "text-muted-foreground"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
