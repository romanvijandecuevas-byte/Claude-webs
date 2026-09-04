import { Aurora, BeforeAfter, EyebrowPill, Sparkle, TokenStream, WordRoll } from "performative-ui"
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

const log =
  "09:41:02 pedido_1842 procesado ✓   09:41:05 crm / oportunidad creada ✓   09:41:08 informe / datos actualizados ✓"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-12 pb-14">
      <Aurora animated blobs={heroBlobs} blur={70} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <EyebrowPill className="animate-fade-rise" statusColor="hsl(15 55% 55%)">
          Soluciones a medida · precio cerrado
        </EyebrowPill>

        <h1
          className="animate-fade-rise-delay mt-5 text-4xl sm:text-6xl md:text-7xl leading-[1] tracking-tight max-w-4xl text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Software, IA y analítica que encajan en tu negocio.
        </h1>

        <p className="animate-fade-rise-delay-2 text-muted-foreground text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
          Diseñamos e implantamos agentes de IA, cuadros de mando e
          integraciones a medida. Sin proyectos que se eternizan ni
          herramientas que nadie termina usando.
        </p>

        <div className="animate-fade-rise-delay-2 flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button variant="default" size="lg" asChild>
            <a href="#contacto">Cuéntanos tu caso</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#soluciones">Explorar soluciones</a>
          </Button>
        </div>

        <p className="animate-fade-rise-delay-2 mt-6 text-sm text-muted-foreground">
          Lo aplicamos en{" "}
          <WordRoll
            words={industries}
            intervalMs={2600}
            className="text-primary font-medium"
          />
        </p>

        {/* "Lo que entra → lo que empieza a funcionar", from the original template */}
        <div className="animate-fade-rise-delay-2 mt-10 w-full max-w-3xl text-left">
          {/* Composed form: the quick form's arrow label is fixed to English ("with …"). */}
          <BeforeAfter>
            <BeforeAfter.Before label="Lo que entra">
              <ul>{inputs.map((item) => <li key={item}>{item}</li>)}</ul>
            </BeforeAfter.Before>
            <div className="pui-ba__arrow">
              <Sparkle />
              <span>con zero_</span>
              <span>→</span>
            </div>
            <BeforeAfter.After label="Lo que empieza a funcionar">
              <ul>{outputs.map((item) => <li key={item}>{item}</li>)}</ul>
            </BeforeAfter.After>
          </BeforeAfter>
          <p className="mt-4 px-1 font-mono text-[0.7rem] text-muted-foreground">
            <TokenStream text={log} speedMs={[40, 110]} loop loopDelayMs={4000} />
          </p>
        </div>
      </div>
    </section>
  )
}
