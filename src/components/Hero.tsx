import { Aurora, WordRoll } from "performative-ui"
import { Button } from "@/components/ui/button"

const inputs = ["Llamadas", "WhatsApp", "Correo", "ERP / Excel"]
const outputs = ["Cita agendada", "Lead calificado", "Dato en CRM", "Alerta enviada"]
const industries = ["concesionarios", "clínicas", "gestorías", "distribuidoras", "hoteles"]

// Module-level so the reference is stable: Aurora restarts its
// lava-lamp simulation whenever this array identity changes.
const heroBlobs = [
  { color: "rgba(204, 120, 92, 0.38)", x: 18, y: 28, size: 62 },
  { color: "rgba(236, 178, 134, 0.34)", x: 82, y: 22, size: 52 },
  { color: "rgba(214, 190, 164, 0.40)", x: 52, y: 84, size: 56 },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24">
      <Aurora animated blobs={heroBlobs} blur={70} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <span className="animate-fade-rise liquid-glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Soluciones a medida · precio cerrado
        </span>

        <h1
          className="animate-fade-rise-delay mt-6 text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Software, IA y analítica{" "}
          <em className="not-italic text-muted-foreground">
            que encajan en tu negocio.
          </em>
        </h1>

        <p className="animate-fade-rise-delay-2 text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          Diseñamos e implantamos agentes de IA, cuadros de mando e
          integraciones a medida. Sin proyectos que se eternizan ni
          herramientas que nadie termina usando.
        </p>

        <div className="animate-fade-rise-delay-2 flex flex-wrap items-center justify-center gap-4 mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#contacto">Cuéntanos tu caso</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#soluciones">Explorar soluciones</a>
          </Button>
        </div>

        <p className="animate-fade-rise-delay-2 mt-8 text-sm text-muted-foreground">
          Lo aplicamos en{" "}
          <WordRoll
            words={industries}
            intervalMs={2600}
            className="text-primary font-medium"
          />
        </p>

        {/* Live data flow diagram, adapted from the original Zero template */}
        <div className="animate-fade-rise-delay-2 liquid-glass mt-14 w-full max-w-3xl rounded-2xl p-6 sm:p-8">
          <p className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground text-left">
            Flujo de negocio · en tiempo real
          </p>
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
            <div className="grid gap-2">
              {inputs.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-background/40 px-3 py-2 text-xs sm:text-sm text-foreground text-left"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <span
                className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-primary text-primary-foreground grid place-items-center text-center leading-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                <span className="text-lg sm:text-xl">zero_</span>
              </span>
              <span className="relative h-px w-10 sm:w-14 bg-border overflow-hidden">
                <span className="animate-travel absolute inset-y-0 left-0 w-2 rounded-full bg-primary" />
              </span>
            </div>

            <div className="grid gap-2">
              {outputs.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs sm:text-sm text-foreground text-left"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
