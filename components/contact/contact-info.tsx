import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram } from "lucide-react"

const contactMethods = [
  {
    icon: MapPin,
    title: "Direccion",
    content: "Calle 45 #23-67, Local 101",
    subtitle: "Bogota, Colombia",
    action: {
      label: "Ver en mapa",
      href: "https://maps.google.com/?q=4.6097,-74.0817",
    },
  },
  {
    icon: Phone,
    title: "Telefono",
    content: "+57 300 123 4567",
    subtitle: "Linea directa",
    action: {
      label: "Llamar ahora",
      href: "tel:+573001234567",
    },
  },
  {
    icon: Mail,
    title: "Correo electronico",
    content: "contacto@neodental.com",
    subtitle: "Respondemos en 24 horas",
    action: {
      label: "Enviar correo",
      href: "mailto:contacto@neodental.com",
    },
  },
  {
    icon: Clock,
    title: "Horarios de atencion",
    content: "Lun - Vie: 8:00 AM - 6:00 PM",
    subtitle: "Sabados: 8:00 AM - 2:00 PM",
    action: null,
  },
]

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/573001234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita",
    color: "bg-[#25D366] hover:bg-[#128C7E]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/neodental",
    color: "bg-[#1877F2] hover:bg-[#0d65d9]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/neodental",
    color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
  },
]

export function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
              <p className="text-foreground font-medium">{method.content}</p>
              <p className="text-sm text-muted-foreground mb-4">{method.subtitle}</p>
              {method.action && (
                <a
                  href={method.action.href}
                  target={method.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  {method.action.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Siguenos en redes sociales
            </h2>
            <p className="text-muted-foreground mb-8">
              Mantente al dia con nuestros consejos de salud dental, promociones y novedades
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  size="lg"
                  className={`gap-2 text-white ${social.color}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
