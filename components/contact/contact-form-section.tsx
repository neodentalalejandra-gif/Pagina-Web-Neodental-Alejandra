"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, MessageCircle, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hola, mi nombre es ${formData.name}. ${formData.message}. Mi correo es ${formData.email} y mi telefono ${formData.phone}.`
    window.open(`https://wa.me/573053033981?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {t("contacto.form.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("contacto.form.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contacto.form.desc")}
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-6 lg:p-10">
              {submitted ? (
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t("contacto.form.sent")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contacto.form.sentDesc")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contacto.form.name")}</Label>
                      <Input
                        id="name"
                        placeholder={t("contacto.form.namePlaceholder")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contacto.form.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contacto.form.emailPlaceholder")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contacto.form.phone")}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t("contacto.form.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contacto.form.message")}</Label>
                    <Textarea
                      id="message"
                      placeholder={t("contacto.form.messagePlaceholder")}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button type="submit" size="lg" className="flex-1 gap-2 h-12">
                      <Send className="w-4 h-4" />
                      {t("contacto.form.send")}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1 gap-2 h-12 bg-transparent"
                      onClick={handleWhatsAppSubmit}
                      disabled={!formData.name || !formData.message}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("contacto.form.sendWhatsapp")}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info Bar */}
            <div className="bg-secondary px-6 lg:px-10 py-6 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <a
                  href="mailto:neodental@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("contacto.form.emailLabel")}</p>
                    <p className="font-medium">contacto@neodental.com</p>
                  </div>
                </a>

                <div className="hidden sm:block w-px h-10 bg-border" />

                <a
                  href="tel:+573053033981"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("contacto.form.phoneLabel")}</p>
                    <p className="font-medium">+57 305 303 3981</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
