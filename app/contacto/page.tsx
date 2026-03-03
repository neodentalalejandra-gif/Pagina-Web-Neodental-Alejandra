import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { LocationSection } from "@/components/contact/location-section"
import { SocialSection } from "@/components/contact/social-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"

export const metadata: Metadata = {
  title: "Contacto | Neodental",
  description: "Contacta con Neodental. Encuentra nuestra ubicacion, horarios, telefono, correo y redes sociales. Agenda tu cita hoy.",
}

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <LocationSection />
      <SocialSection />
      <ContactFormSection />
    </>
  )
}
