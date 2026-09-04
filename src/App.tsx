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
