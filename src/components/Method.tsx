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
    <section id="metodo" className="relative z-10 px-6 py-28 max-w-6xl mx-auto">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        03 · Cómo trabajamos
      </span>
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
    </section>
  )
}
