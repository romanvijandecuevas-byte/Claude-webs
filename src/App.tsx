import { Chip } from "@/components/Chip"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Method } from "@/components/Method"
import { Nav } from "@/components/Nav"
import { Services } from "@/components/Services"

function App() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <Chip />
      <Services />
      <Method />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
