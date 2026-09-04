import { EyebrowPill } from "performative-ui"

const guarantees = [
  { num: "01", title: "Alcance", body: "Cerrado por escrito antes de empezar." },
  { num: "02", title: "Precio", body: "Fijo. Sin horas ni ampliaciones a mitad." },
  { num: "03", title: "Plazo", body: "2–6 semanas, con fecha comprometida." },
  { num: "04", title: "Entrega", body: "Funcionando, no un piloto ni una demo." },
  { num: "05", title: "Soporte", body: "Un mes incluido, luego sin permanencia." },
  { num: "06", title: "Propiedad", body: "El código y la configuración son tuyos." },
]

export function Guarantees() {
  return (
    <section id="garantias" className="relative z-10 px-6 py-14 max-w-6xl mx-auto">
      <EyebrowPill icon={false}>04 · Ficha del servicio</EyebrowPill>
      <h2 className="mt-3 text-2xl sm:text-3xl max-w-2xl text-foreground" style={{ fontFamily: "var(--font-display)" }}>
        Sin letra pequeña a mitad del proyecto.
      </h2>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {guarantees.map((g) => (
          <div key={g.num} className="liquid-glass rounded-xl p-4">
            <span className="text-[0.65rem] text-muted-foreground">{g.num}</span>
            <h3 className="mt-1 text-base text-foreground" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{g.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
