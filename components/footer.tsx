import { Mail, GraduationCap } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-white.png"
                alt="SkinCancer Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Tecnologia digital como apoio aos cuidados com a saúde da pele.
            </p>
          </div>

          {/* Partnership */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-lg bg-background/10 px-5 py-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xs text-background/60 uppercase tracking-wider">Desenvolvido por</p>
                <p className="text-sm font-medium">Departamento de Computação</p>
                <p className="text-sm text-background/80">Universidade Federal de Sergipe (UFS)</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <p className="text-sm text-background/60 uppercase tracking-wider">Contato</p>
            <a
              href="mailto:ryan.oliveira@dcomp.ufs.br"
              className="flex items-center gap-2 text-background hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>ryan.oliveira@dcomp.ufs.br</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} SkinCancer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
