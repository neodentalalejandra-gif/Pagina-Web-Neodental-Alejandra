import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, Smile, AlignLeft, CircleDot, Scissors, ShieldCheck, Baby, Stethoscope } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Dental Profesional",
    description: "Eliminamos el sarro, placa bacteriana y manchas superficiales para mantener tus dientes sanos y brillantes. Recomendamos realizarla cada 6 meses.",
    features: ["Eliminacion de sarro", "Pulido dental", "Aplicacion de fluor", "Revision general"],
    whatsappMessage: "Hola, me gustaría cotizar una limpieza dental profesional",
  },
  {
    icon: Smile,
    title: "Blanqueamiento Dental",
    description: "Devuelve el brillo natural a tu sonrisa con nuestro tratamiento de blanqueamiento profesional. Resultados visibles desde la primera sesion.",
    features: ["Resultados inmediatos", "Tecnica LED", "Sin sensibilidad", "Duracion prolongada"],
    whatsappMessage: "Hola, me gustaría cotizar un blanqueamiento dental",
  },
  {
    icon: AlignLeft,
    title: "Ortodoncia",
    description: "Corrige la posicion de tus dientes con brackets tradicionales o alineadores invisibles. Plan de tratamiento personalizado.",
    features: ["Brackets metalicos", "Brackets ceramicos", "Alineadores invisibles", "Control mensual"],
    whatsappMessage: "Hola, me gustaría cotizar un tratamiento de ortodoncia",
  },
  {
    icon: CircleDot,
    title: "Implantes Dentales",
    description: "Reemplaza los dientes perdidos con implantes de titanio de alta calidad. Solucion permanente y natural.",
    features: ["Implantes de titanio", "Coronas personalizadas", "Garantia extendida", "Procedimiento seguro"],
    whatsappMessage: "Hola, me gustaría cotizar un implante dental",
  },
  {
    icon: Scissors,
    title: "Endodoncia",
    description: "Tratamiento de conducto para salvar dientes afectados por infecciones profundas. Procedimiento indoloro con anestesia local.",
    features: ["Procedimiento indoloro", "Una sola sesion", "Salva el diente natural", "Recuperacion rapida"],
    whatsappMessage: "Hola, me gustaría cotizar una endodoncia",
  },
  {
    icon: ShieldCheck,
    title: "Resinas y Restauraciones",
    description: "Reparamos dientes dañados o cariados con resinas del color natural de tus dientes. Resultados esteticos y funcionales.",
    features: ["Color natural", "Material duradero", "Minima invasion", "Resultado inmediato"],
    whatsappMessage: "Hola, me gustaría cotizar una restauracion dental",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    description: "Cuidado dental especializado para los mas pequeños. Ambiente amigable y tratamientos adaptados a niños.",
    features: ["Ambiente infantil", "Sellantes preventivos", "Fluor terapeutico", "Educacion dental"],
    whatsappMessage: "Hola, me gustaría cotizar una consulta de odontopediatria",
  },
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Evaluacion completa de tu salud bucal. Diagnostico preciso y plan de tratamiento personalizado.",
    features: ["Evaluacion completa", "Radiografias digitales", "Plan de tratamiento", "Presupuesto detallado"],
    whatsappMessage: "Hola, me gustaría agendar una consulta general",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button asChild className="w-full gap-2">
                <a
                  href={`https://wa.me/573001234567?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotiza conmigo
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
