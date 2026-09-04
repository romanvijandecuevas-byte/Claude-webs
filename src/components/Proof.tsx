import { StatCounter } from "performative-ui"

const serif = { fontFamily: "var(--font-display)" }

export function Proof() {
  const stats = [
    { value: <><StatCounter target={48} durationMs={1400} /> h</>, label: "para recibir la propuesta" },
    { value: "2–6", label: "semanas de implantación" },
    { value: "Fijo", label: "precio acordado por escrito" },
    { value: <><StatCounter target={1} durationMs={900} /> mes</>, label: "de soporte incluido" },
  ]

  return (
    <section className="relative z-10 -mt-10 px-6">
      <div className="liquid-glass max-w-5xl mx-auto rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-6 text-center">
            <span className="block text-2xl text-foreground" style={serif}>
              {stat.value}
            </span>
            <span className="block mt-1 text-xs text-muted-foreground leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
