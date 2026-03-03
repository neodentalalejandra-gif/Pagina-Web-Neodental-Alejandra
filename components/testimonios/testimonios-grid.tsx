import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "Carolina Martinez",
    procedure: "Blanqueamiento Dental",
    story:
      "Siempre me senti insegura con el color de mis dientes. Tomaba mucho cafe y con el tiempo se fueron manchando bastante. La Dra. Alejandra me recomendo un blanqueamiento profesional y el resultado fue increible. En una sola sesion mis dientes quedaron varios tonos mas blancos. Ahora sonrio sin pena en todas las fotos.",
    beforeImage: "/images/testimonios/carolina-antes.jpg",
    afterImage: "/images/testimonios/carolina-despues.jpg",
    rating: 5,
    date: "Marzo 2024",
  },
  {
    name: "Andres Gomez",
    procedure: "Ortodoncia",
    story:
      "Desde adolescente tenia los dientes desalineados y nunca me anime a usar brackets. Cuando conoci Neodental me explicaron las opciones de ortodoncia moderna y decidi dar el paso. Despues de 18 meses de tratamiento, mis dientes estan perfectamente alineados. Fue la mejor decision que pude tomar.",
    beforeImage: "/images/testimonios/andres-antes.jpg",
    afterImage: "/images/testimonios/andres-despues.jpg",
    rating: 5,
    date: "Enero 2024",
  },
  {
    name: "Laura Sanchez",
    procedure: "Implante Dental",
    story:
      "Perdi un diente en un accidente y me sentia muy acomplejada al hablar y sonreir. La Dra. Alejandra me realizo un implante dental que se ve completamente natural. Nadie nota la diferencia y recupere toda mi confianza. El procedimiento fue mucho mas sencillo de lo que imaginaba.",
    beforeImage: "/images/testimonios/laura-antes.jpg",
    afterImage: "/images/testimonios/laura-despues.jpg",
    rating: 5,
    date: "Noviembre 2023",
  },
  {
    name: "Miguel Torres",
    procedure: "Ortodoncia Completa",
    story:
      "Tenia los dientes muy apiñados y una mordida cruzada que me causaba dolores de cabeza frecuentes. En Neodental me diseñaron un plan de ortodoncia completo. Despues de 2 años de tratamiento, no solo mi sonrisa se transformo sino que desaparecieron los dolores. Estoy eternamente agradecido.",
    beforeImage: "/images/testimonios/miguel-antes.jpg",
    afterImage: "/images/testimonios/miguel-despues.jpg",
    rating: 5,
    date: "Agosto 2023",
  },
  {
    name: "Sofia Ramirez",
    procedure: "Restauraciones con Resina",
    story:
      "Tenia varios dientes fracturados y con caries visibles que afectaban mi autoestima. La Dra. Alejandra realizo restauraciones esteticas con resina que dejaron mis dientes como nuevos. El trabajo fue tan detallado que no se distinguen de los dientes naturales. Quede encantada con el resultado.",
    beforeImage: "/images/testimonios/sofia-antes.jpg",
    afterImage: "/images/testimonios/sofia-despues.jpg",
    rating: 5,
    date: "Mayo 2024",
  },
  {
    name: "Roberto Mejia",
    procedure: "Limpieza Dental Profunda",
    story:
      "No habia visitado al dentista en mas de 3 años y tenia mucho sarro acumulado y las encias inflamadas. Me realizaron una limpieza profunda y el cambio fue impresionante. Mis dientes quedaron limpios, las encias sanas y recupere la frescura en mi boca. Ahora vengo cada 6 meses sin falta.",
    beforeImage: "/images/testimonios/roberto-antes.jpg",
    afterImage: "/images/testimonios/roberto-despues.jpg",
    rating: 5,
    date: "Febrero 2024",
  },
]

export function TestimoniosGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Instruction */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground italic">
            Pasa el cursor o toca las imagenes para ver el resultado del tratamiento
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
