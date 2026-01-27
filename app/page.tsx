import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { JustificationSection } from "@/components/justification-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="produto">
        <ProductSection />
      </section>
      <section id="diferenciais">
        <DifferentialsSection />
      </section>
      <section id="sobre">
        <JustificationSection />
      </section>
      <section id="contato">
        <Footer />
      </section>
    </main>
  )
}
