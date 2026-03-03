"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { translations, type Locale } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")

  useEffect(() => {
    const saved = localStorage.getItem("neodental-lang") as Locale | null
    if (saved === "es" || saved === "en") {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("neodental-lang", newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[locale][key] ?? key
    },
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
