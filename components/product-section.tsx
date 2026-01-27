import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Smartphone, Monitor, ImageIcon, MessageCircle, History, Users, FileText, Brain } from "lucide-react"

export function ProductSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            O Produto
          </span>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Solução Multicanal Integrada
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Conectamos pacientes e profissionais de saúde através de uma plataforma completa e intuitiva.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mobile Version Card */}
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl -translate-y-1/2 translate-x-1/2" />
            <CardHeader className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Smartphone className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl text-foreground">Versão Mobile para Pacientes</CardTitle>
              <CardDescription className="text-base">
                Aplicativo intuitivo para acompanhamento e prevenção
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureItem 
                icon={<ImageIcon className="h-5 w-5" />}
                title="Envio de imagens de lesões"
                description="Capture e envie fotos de lesões cutâneas para análise profissional"
              />
              <FeatureItem 
                icon={<MessageCircle className="h-5 w-5" />}
                title="Chatbot de assistência virtual"
                description="Tire dúvidas e receba orientações a qualquer momento"
              />
              <FeatureItem 
                icon={<History className="h-5 w-5" />}
                title="Histórico de lesões"
                description="Acompanhe a evolução das suas lesões ao longo do tempo"
              />
            </CardContent>
          </Card>

          {/* Web Version Card */}
          <Card className="relative overflow-hidden border-secondary/20 bg-gradient-to-br from-card to-secondary/5">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-secondary/10 blur-2xl -translate-y-1/2 translate-x-1/2" />
            <CardHeader className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Monitor className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl text-foreground">Versão Web para Médicos</CardTitle>
              <CardDescription className="text-base">
                Dashboard completo para gestão e análise clínica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureItem 
                icon={<Users className="h-5 w-5" />}
                title="Gestão de pacientes"
                description="Gerencie todos os seus pacientes em uma única plataforma"
                variant="secondary"
              />
              <FeatureItem 
                icon={<FileText className="h-5 w-5" />}
                title="Histórico clínico completo"
                description="Acesse prontuários e históricos de forma organizada"
                variant="secondary"
              />
              <FeatureItem 
                icon={<Brain className="h-5 w-5" />}
                title="Análise de lesões com apoio de IA"
                description="Receba sugestões de diagnóstico baseadas em inteligência artificial"
                variant="secondary"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ 
  icon, 
  title, 
  description,
  variant = "primary"
}: { 
  icon: React.ReactNode
  title: string
  description: string
  variant?: "primary" | "secondary"
}) {
  const colorClass = variant === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
  
  return (
    <div className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorClass}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
