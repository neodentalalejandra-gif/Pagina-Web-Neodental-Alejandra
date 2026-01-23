import { Metadata } from "next"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contacto | Neodental",
  description: "Contacta con Neodental. Encuentra nuestra ubicacion, horarios, telefono, correo y redes sociales. Agenda tu cita hoy.",
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Contacto
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Estamos aqui para ayudarte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tienes alguna pregunta o deseas agendar una cita? Contactanos por cualquiera de nuestros canales. Estaremos encantados de atenderte.
          </p>
        </div>
      </section>

      <ContactInfo />
      <ContactMap />
      <ContactForm />
    </>
  )
}
