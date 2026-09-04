import { EyebrowPill, NodeGraphBackground } from "performative-ui"

const steps = [
  {
    num: "01",
    time: "30–45 min",
    title: "Entender el problema.",
    body: "Nos cuentas qué se pierde y quién decide. Si no compensa, te lo decimos.",
  },
  {
    num: "02",
    time: "48 h",
    title: "Cerrar alcance y precio.",
    body: "Una propuesta de una página: qué hacemos, la fecha y el precio.",
  },
  {
    num: "03",
    time: "2–6 sem.",
    title: "Ponerlo en marcha.",
    body: "Construimos y entregamos funcionando, con un mes de soporte.",
  },
]

export function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden px-6 py-28">
      <NodeGraphBackground
        density={42}
        speed={0.22}
        linkDistance={150}
        colors={["rgba(204, 120, 92, 0.9)", "rgba(176, 150, 122, 0.9)"]}
        linkColor="rgba(204, 120, 92, 0.28)"
        baseOpacity={0.32}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
      <EyebrowPill icon={false}>03 · Cómo trabajamos</EyebrowPill>
      <h2
        className="mt-4 text-3xl sm:text-4xl max-w-2xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        De la primera conversación a una solución funcionando.
      </h2>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.num} className="border-t border-border/60 pt-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="tracking-[0.1em]">PASO {step.num}</span>
              <span>{step.time}</span>
            </div>
            <h3 className="mt-6 text-xl text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[32ch]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
