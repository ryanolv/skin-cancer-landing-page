import { Brain, ShieldCheck, MessageSquare, TrendingUp } from "lucide-react"

export function DifferentialsSection() {
  const differentials = [
    {
      icon: <Brain className="h-7 w-7" />,
      title: "IA como apoio à decisão médica",
      description: "Diagnósticos mais ágeis e precisos com o suporte da inteligência artificial."
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Validação Obrigatória",
      description: "O diagnóstico só é liberado após a validação de um profissional de saúde."
    },
    {
      icon: <MessageSquare className="h-7 w-7" />,
      title: "Comunicação Direta",
      description: "Canal direto entre médico e paciente para melhor acompanhamento."
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Evolução Contínua",
      description: "O modelo de IA aprende com o feedback clínico constante."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            O Diferencial
          </span>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Por que escolher o SkinCancer?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
