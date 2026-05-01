"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const navigationKeys = [
  { key: "nav.inicio", href: "/" },
  { key: "nav.servicios", href: "/servicios" },
  { key: "nav.testimonios", href: "/testimonios" },
  { key: "nav.contacto", href: "/contacto" },
]

const serviceKeys = [
  { key: "footer.periodonciaImplantologia", href: "/servicios" },
  { key: "footer.esteticaDental", href: "/servicios" },
  { key: "footer.ortodoncia", href: "/servicios" },
  { key: "footer.endodoncia", href: "/servicios" },
  { key: "footer.odontopediatria", href: "/servicios" },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/neodental",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dra.alejandrariascos/",
    icon: Instagram,
  },
]

export function Footer() {
  const { t } = useLanguage()

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
              {t("footer.brand")}
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
            <h3 className="text-sm font-semibold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-3">
              {navigationKeys.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              {serviceKeys.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Tv 39D #74 36 Consultorio 201,<br />
                  Laureles - Estadio Laureles, Medellin - Antioquia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+57305303398"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +57 305 303 3981
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:neodental@gmail.com"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  neodentalr@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  {t("footer.schedule.weekdays")}<br />
                  {t("footer.schedule.saturday")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              {t("footer.copyright")}
            </p>
            <p className="text-sm text-background/50">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
