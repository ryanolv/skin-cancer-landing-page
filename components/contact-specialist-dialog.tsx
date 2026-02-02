"use client"

import { createContext, useCallback, useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

type ContactSpecialistContextValue = {
  openDialog: () => void
}

const ContactSpecialistContext = createContext<ContactSpecialistContextValue | null>(null)

export function useContactSpecialist() {
  const ctx = useContext(ContactSpecialistContext)
  if (!ctx) {
    throw new Error("useContactSpecialist must be used within ContactSpecialistProvider")
  }
  return ctx
}

type FormState = {
  nome: string
  nomeClinica: string
  whatsapp: string
}

const initialForm: FormState = {
  nome: "",
  nomeClinica: "",
  whatsapp: "",
}

export function ContactSpecialistProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormState>(initialForm)

  const openDialog = useCallback(() => setOpen(true), [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode enviar para API, WhatsApp, etc.
    console.log("Formulário:", form)
    setForm(initialForm)
    setOpen(false)
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) setForm(initialForm)
  }

  return (
    <ContactSpecialistContext.Provider value={{ openDialog }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Falar com especialista</DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo e entraremos em contato pelo WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="contact-nome">Nome</FieldLabel>
                <Input
                  id="contact-nome"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-clinica">Nome da clínica</FieldLabel>
                <Input
                  id="contact-clinica"
                  placeholder="Nome da sua clínica"
                  value={form.nomeClinica}
                  onChange={(e) => setForm((p) => ({ ...p, nomeClinica: e.target.value }))}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-whatsapp">WhatsApp</FieldLabel>
                <Input
                  id="contact-whatsapp"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={form.whatsapp}
                  onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
                  required
                />
              </Field>
            </FieldGroup>
            <DialogFooter className="mt-6 gap-2 sm:gap-0">
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit">Enviar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </ContactSpecialistContext.Provider>
  )
}
