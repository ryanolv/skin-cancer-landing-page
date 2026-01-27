import { Button } from "@/components/ui/button"
import { Smartphone, Monitor } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Powered by AI</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
              Tecnologia digital como apoio aos cuidados com a saúde da pele.
            </h1>
            
            <p className="text-lg text-muted-foreground lg:text-xl max-w-xl leading-relaxed">
              Uma plataforma multicanal que utiliza Inteligência Artificial para auxiliar médicos e pacientes na prevenção e acompanhamento do câncer de pele.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base px-8">
                <Monitor className="h-5 w-5" />
                Sou Médico
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent">
                <Smartphone className="h-5 w-5" />
                Sou Paciente
              </Button>
            </div>
          </div>

          {/* Mockup Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Laptop mockup */}
              <div className="relative z-10 rounded-2xl border bg-card p-3 shadow-2xl">
                <div className="flex items-center gap-2 pb-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-destructive/60" />
                    <span className="h-3 w-3 rounded-full bg-chart-4/60" />
                    <span className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground">SkinCancer Dashboard</span>
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-muted p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Monitor className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-24 bg-foreground/20 rounded" />
                        <div className="h-2 w-16 bg-muted-foreground/30 rounded mt-1" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-primary/10 border border-primary/20" />
                      <div className="h-16 rounded-lg bg-secondary/10 border border-secondary/20" />
                      <div className="h-16 rounded-lg bg-primary/10 border border-primary/20" />
                    </div>
                    <div className="h-20 rounded-lg bg-card border border-border" />
                  </div>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="absolute -right-8 bottom-0 z-20 w-32 rounded-2xl border-2 border-foreground/10 bg-card p-2 shadow-xl lg:-right-12 lg:w-40">
                <div className="rounded-xl bg-muted p-2">
                  <div className="flex items-center justify-center pb-2">
                    <div className="h-1 w-8 rounded-full bg-foreground/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-full rounded bg-primary/20 flex items-center justify-center">
                      <Smartphone className="h-3 w-3 text-primary" />
                    </div>
                    <div className="h-3 w-3/4 mx-auto rounded bg-foreground/10" />
                    <div className="h-12 rounded bg-card border border-border" />
                    <div className="h-6 rounded bg-primary" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/4 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
