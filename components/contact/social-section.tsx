"use client"

import { MessageCircle, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SocialSection() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "WhatsApp",
      descKey: "contacto.social.whatsapp",
      icon: MessageCircle,
      href: "https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita",
      color: "bg-[#25D366] hover:bg-[#128C7E]",
      followersKey: "contacto.social.directChat",
    },
    {
      name: "Facebook",
      descKey: "contacto.social.facebook",
      icon: Facebook,
      href: "https://facebook.com/neodental",
      color: "bg-[#1877F2] hover:bg-[#0d65d9]",
      followers: "@neodental",
    },
    {
      name: "Instagram",
      descKey: "contacto.social.instagram",
      icon: Instagram,
      href: "https://www.instagram.com/dra.alejandrariascos/",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
      followers: "@neodental.co",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t("contacto.social.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contacto.social.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contacto.social.desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${social.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <social.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {social.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {t(social.descKey)}
              </p>
              <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium text-foreground">
                {social.followersKey ? t(social.followersKey) : social.followers}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
