import { StickyBanner } from "performative-ui"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { DataSecurity } from "@/components/DataSecurity"
import { Footer } from "@/components/Footer"
import { Guarantees } from "@/components/Guarantees"
import { Hero } from "@/components/Hero"
import { Method } from "@/components/Method"
import { Nav } from "@/components/Nav"
import { Problems } from "@/components/Problems"
import { Proof } from "@/components/Proof"
import { Services } from "@/components/Services"

function App() {
  return (
    <div className="relative">
      <StickyBanner trailing={<a href="#soluciones">Ver ficha →</a>}>
        Nuevo · Recepcionista IA por voz y WhatsApp, desde 11.200 €
      </StickyBanner>
      <Nav />
      <Hero />
      <Proof />
      <Problems />
      <Services />
      <Method />
      <Guarantees />
      <DataSecurity />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
