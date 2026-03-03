"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href="https://wa.me/573053033981?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl"
      aria-label={t("whatsapp.ariaLabel")}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center animate-pulse">
        <span className="w-2 h-2 bg-primary-foreground rounded-full" />
      </span>
    </a>
  )
}
