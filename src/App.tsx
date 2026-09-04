import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
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
      <div className="absolute top-0 left-0 right-0 z-20">
        <Nav />
      </div>
      <Hero />
      <Proof />
      <Problems />
      <Services />
      <Method />
      <Guarantees />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
