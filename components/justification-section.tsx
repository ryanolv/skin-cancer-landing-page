import React from "react"
import { AlertCircle, Activity, Clock } from "lucide-react"

export function JustificationSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 text-secondary-foreground/80">
              Justificativa
            </span>
            <h2 className="text-3xl font-bold lg:text-4xl text-balance">
              A importância do diagnóstico precoce
            </h2>
          </div>

          <div className="rounded-2xl bg-secondary-foreground/10 backdrop-blur-sm p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <StatCard 
                icon={<AlertCircle className="h-8 w-8" />}
                stat="Mais comum"
                description="O câncer de pele é um dos tipos mais comuns de câncer no Brasil"
              />
              <StatCard 
                icon={<Activity className="h-8 w-8" />}
                stat="90%+"
                description="Taxa de cura quando diagnosticado precocemente"
              />
              <StatCard 
                icon={<Clock className="h-8 w-8" />}
                stat="Fundamental"
                description="Diagnóstico precoce é essencial para tratamento eficaz"
              />
            </div>

            <div className="mt-10 pt-8 border-t border-secondary-foreground/20">
              <p className="text-lg leading-relaxed text-center text-secondary-foreground/90">
                O câncer de pele é um dos tipos mais comuns no Brasil, e o diagnóstico precoce é fundamental para um tratamento eficaz. 
                Nossa plataforma utiliza tecnologia de ponta para auxiliar profissionais de saúde e pacientes na identificação e 
                acompanhamento de lesões cutâneas, contribuindo para a prevenção e detecção antecipada da doença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ 
  icon, 
  stat, 
  description 
}: { 
  icon: React.ReactNode
  stat: string
  description: string 
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-foreground/10 text-secondary-foreground">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2">{stat}</div>
      <p className="text-sm text-secondary-foreground/80">{description}</p>
    </div>
  )
}
