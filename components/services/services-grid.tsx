import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const services = [
  {
    image: "/images/services/limpieza-dental.jpg",
    title: "Limpieza Dental Profesional",
    description: "Eliminamos el sarro, placa bacteriana y manchas superficiales para mantener tus dientes sanos y brillantes. Recomendamos realizarla cada 6 meses.",
    features: ["Eliminacion de sarro", "Pulido dental", "Aplicacion de fluor", "Revision general"],
    whatsappMessage: "Hola, me gustaría cotizar una limpieza dental profesional",
  },
  {
    image: "/images/services/blanqueamiento.jpg",
    title: "Blanqueamiento Dental",
    description: "Devuelve el brillo natural a tu sonrisa con nuestro tratamiento de blanqueamiento profesional. Resultados visibles desde la primera sesion.",
    features: ["Resultados inmediatos", "Tecnica LED", "Sin sensibilidad", "Duracion prolongada"],
    whatsappMessage: "Hola, me gustaría cotizar un blanqueamiento dental",
  },
  {
    image: "/images/services/ortodoncia.jpg",
    title: "Ortodoncia",
    description: "Corrige la posicion de tus dientes con brackets tradicionales o alineadores invisibles. Plan de tratamiento personalizado.",
    features: ["Brackets metalicos", "Brackets ceramicos", "Alineadores invisibles", "Control mensual"],
    whatsappMessage: "Hola, me gustaría cotizar un tratamiento de ortodoncia",
  },
  {
    image: "/images/services/implantes.jpg",
    title: "Implantes Dentales",
    description: "Reemplaza los dientes perdidos con implantes de titanio de alta calidad. Solucion permanente y natural.",
    features: ["Implantes de titanio", "Coronas personalizadas", "Garantia extendida", "Procedimiento seguro"],
    whatsappMessage: "Hola, me gustaría cotizar un implante dental",
  },
  {
    image: "/images/services/endodoncia.jpg",
    title: "Endodoncia",
    description: "Tratamiento de conducto para salvar dientes afectados por infecciones profundas. Procedimiento indoloro con anestesia local.",
    features: ["Procedimiento indoloro", "Una sola sesion", "Salva el diente natural", "Recuperacion rapida"],
    whatsappMessage: "Hola, me gustaría cotizar una endodoncia",
  },
  {
    image: "/images/services/restauraciones.jpg",
    title: "Resinas y Restauraciones",
    description: "Reparamos dientes dañados o cariados con resinas del color natural de tus dientes. Resultados esteticos y funcionales.",
    features: ["Color natural", "Material duradero", "Minima invasion", "Resultado inmediato"],
    whatsappMessage: "Hola, me gustaría cotizar una restauracion dental",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full gap-2" size="lg">
                  <a
                    href={`https://wa.me/573004862085?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cotiza conmigo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
