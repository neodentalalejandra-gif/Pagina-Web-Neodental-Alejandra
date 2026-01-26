import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react"

const navigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ],
  services: [
    { name: "Limpieza Dental", href: "/servicios" },
    { name: "Blanqueamiento", href: "/servicios" },
    { name: "Ortodoncia", href: "/servicios" },
    { name: "Implantes", href: "/servicios" },
  ],
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/neodental",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/neodental",
    icon: Instagram,
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo-neodental.jpg"
                alt="Neodental - Odontologia Especializada"
                width={120}
                height={43}
                className="h-11 w-auto object-contain bg-background rounded-lg p-1"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Tu sonrisa es nuestra prioridad. Ofrecemos servicios odontologicos de alta calidad con un equipo profesional dedicado a tu bienestar.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navegacion</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Calle 45 #23-67, Local 101<br />
                  Bogota, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:contacto@neodental.com"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  contacto@neodental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Lun - Vie: 8:00 AM - 6:00 PM<br />
                  Sab: 8:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              2024 Neodental. Todos los derechos reservados.
            </p>
            <p className="text-sm text-background/50">
              Diseñado con cuidado para tu sonrisa
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
