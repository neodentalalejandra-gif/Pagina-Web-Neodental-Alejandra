"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

const navigationKeys = [
  { key: "nav.inicio", href: "/" },
  { key: "nav.servicios", href: "/servicios" },
  { key: "nav.testimonios", href: "/testimonios" },
  { key: "nav.contacto", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-neodental.jpg"
              alt="Neodental - Odontologia Especializada"
              width={140}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigationKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageToggle />
            <Button asChild size="sm" className="gap-2">
              <a
                href="https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                {t("nav.agenda")}
              </a>
            </Button>
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{t("nav.openMenu")}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navigationKeys.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Button asChild size="sm" className="gap-2 mt-2">
                <a
                  href="https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4" />
                  {t("nav.agenda")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
