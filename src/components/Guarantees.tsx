const guarantees = [
  { title: "Alcance", body: "Cerrado por escrito antes de empezar." },
  { title: "Precio", body: "Fijo. No cobramos por horas." },
  { title: "Plazo", body: "2–6 semanas, con fecha comprometida." },
  { title: "Soporte", body: "Un mes incluido, sin permanencia después." },
]

export function Guarantees() {
  return (
    <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
      <div className="liquid-glass rounded-2xl grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
        {guarantees.map((g) => (
          <div key={g.title} className="p-6">
            <h3
              className="text-lg text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {g.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {g.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
