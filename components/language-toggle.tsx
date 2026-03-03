"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex items-center rounded-full border border-border bg-secondary p-0.5">
        <button
          onClick={() => setLocale("es")}
          className={cn(
            "px-2.5 py-1 text-xs font-semibold rounded-full transition-all",
            locale === "es"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label="Cambiar a español"
        >
          ES
        </button>
        <button
          onClick={() => setLocale("en")}
          className={cn(
            "px-2.5 py-1 text-xs font-semibold rounded-full transition-all",
            locale === "en"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  )
}
