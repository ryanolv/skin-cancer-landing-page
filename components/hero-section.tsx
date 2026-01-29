import { Button } from "@/components/ui/button"
import { Smartphone, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
              Tecnologia digital como apoio aos cuidados com a saúde da pele.
            </h1>

            <p className="text-lg text-muted-foreground lg:text-xl max-w-xl leading-relaxed">
              Uma plataforma multicanal que utiliza Inteligência Artificial para auxiliar médicos e pacientes na prevenção e acompanhamento do câncer de pele.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base cursor-pointer px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
                <Link href="#medico">
                  <Monitor className="h-5 w-5" />
                  Sou Médico
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 cursor-pointer text-base px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent shadow-sm hover:shadow-md transition-all" asChild>
                <Link href="#paciente">
                  <Smartphone className="h-5 w-5" />
                  Sou Paciente
                </Link>
              </Button>
            </div>
          </div>

          {/* Mockup Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-3xl aspect-[16/9] transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/plataforms.png"
                alt="Plataformas SkinCancer"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-12 top-1/2 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
