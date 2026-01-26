import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Equipo de especialistas con enfoque humano",
  "La mejor tecnologia para tu atencion",
  "Atencion integral, eficiente y de calidad",
  "Servicios para pacientes nacionales y extranjeros",
  "Tiempo adecuado para cada procedimiento",
  "Experiencia transformadora garantizada",
]

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/consultorio.jpg"
                alt="Interior moderno del consultorio Neodental"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent shape */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Tu salud oral impacta tu bienestar fisico y emocional
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En nuestra consulta queremos ofrecerte una experiencia transformadora en salud dental. Contamos con un gran equipo de especialistas con enfoque humano y profesional, asi como la mejor tecnologia para brindarte una atencion integral, eficiente y de calidad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ofrecemos nuestros servicios a pacientes nacionales y extranjeros, contando con el tiempo requerido para la realizacion de diferentes procedimientos. Tu confianza y bienestar son nuestra prioridad.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
