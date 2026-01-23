import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Equipo profesional altamente capacitado",
  "Tecnologia dental de ultima generacion",
  "Ambiente comodo y relajante",
  "Atencion personalizada para cada paciente",
  "Tratamientos con los mas altos estandares",
  "Horarios flexibles para tu comodidad",
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
              Mas de 10 años cuidando la sonrisa de nuestros pacientes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Neodental nacio con una vision clara: transformar la experiencia dental en algo positivo y libre de ansiedad. Fundado por la Dra. Maria Rodriguez, nuestro consultorio se ha convertido en un referente de confianza y calidad en la ciudad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestra filosofia se basa en escuchar a cada paciente, entender sus necesidades y diseñar un plan de tratamiento personalizado. Creemos que cada sonrisa es unica y merece un cuidado especial.
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
