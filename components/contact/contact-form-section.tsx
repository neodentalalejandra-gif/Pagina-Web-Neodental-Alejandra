"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, MessageCircle, Mail, Phone } from "lucide-react"

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

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
    window.open(`https://wa.me/573004862085?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Envíanos un mensaje
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Completa el formulario y te responderemos lo antes posible. Tambien puedes enviarlo directamente por WhatsApp.
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
                    Mensaje enviado
                  </h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electronico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono (opcional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuentanos en que podemos ayudarte..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button type="submit" size="lg" className="flex-1 gap-2 h-12">
                      <Send className="w-4 h-4" />
                      Enviar mensaje
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
                      Enviar por WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info Bar */}
            <div className="bg-secondary px-6 lg:px-10 py-6 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <a
                  href="mailto:contacto@neodental.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Correo electronico</p>
                    <p className="font-medium">contacto@neodental.com</p>
                  </div>
                </a>
                
                <div className="hidden sm:block w-px h-10 bg-border" />
                
                <a
                  href="tel:+573004862085"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefono</p>
                    <p className="font-medium">+57 300 123 4567</p>
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
