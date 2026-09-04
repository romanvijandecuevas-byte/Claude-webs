import { Aurora, EyebrowPill, WordRoll } from "performative-ui"
import { Button } from "@/components/ui/button"
import { palette } from "@/theme"

const industries = ["concesionarios", "clínicas", "gestorías", "distribuidoras", "hoteles"]


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-14 pb-10">
      <Aurora animated blobs={palette.heroBlobs} blur={70} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <EyebrowPill className="animate-fade-rise" statusColor={palette.accent}>
          Soluciones a medida · precio cerrado
        </EyebrowPill>

        <h1
          className="animate-fade-rise-delay mt-5 text-4xl sm:text-6xl md:text-7xl leading-[1] tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Software, IA y analítica que encajan en tu negocio.
        </h1>

        <p className="animate-fade-rise-delay-2 text-muted-foreground text-base sm:text-lg max-w-xl mt-5 leading-relaxed">
          Agentes de IA, cuadros de mando e integraciones a medida. Alcance, precio y plazo cerrados por escrito.
        </p>

        <div className="animate-fade-rise-delay-2 flex flex-wrap items-center justify-center gap-4 mt-7">
          <Button variant="default" size="lg" asChild>
            <a href="#contacto">Cuéntanos tu caso</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#soluciones">Explorar soluciones</a>
          </Button>
        </div>

        <p className="animate-fade-rise-delay-2 mt-5 text-sm text-muted-foreground">
          Lo aplicamos en{" "}
          <WordRoll words={industries} intervalMs={2600} className="text-primary font-medium" />
        </p>
      </div>
    </section>
  )
}
