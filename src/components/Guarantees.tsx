import { EyebrowPill, GlassCard } from "performative-ui"

const guarantees = [
  { num: "01", title: "Alcance", body: "Cerrado en una propuesta de una página antes de empezar." },
  { num: "02", title: "Precio", body: "Fijo. No cobramos por horas ni abrimos ampliaciones a mitad del proyecto." },
  { num: "03", title: "Plazo", body: "Entre dos y seis semanas según el caso, con una fecha comprometida." },
  { num: "04", title: "Entrega", body: "Funcionando y con tu equipo usándolo, no un piloto ni una demo." },
  { num: "05", title: "Soporte", body: "Un mes incluido. Después, mantenimiento mensual sin permanencia." },
  { num: "06", title: "Propiedad", body: "El código y la configuración son tuyos." },
]

export function Guarantees() {
  return (
    <section id="garantias" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
      <EyebrowPill icon={false}>04 · Ficha del servicio</EyebrowPill>
      <h2
        className="mt-4 text-3xl sm:text-4xl max-w-2xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Sin letra pequeña a mitad del proyecto.
      </h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guarantees.map((g) => (
          <GlassCard key={g.num} glowOnHover>
            <span className="text-xs text-muted-foreground">{g.num}</span>
            <GlassCard.Title className="mt-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {g.title}
            </GlassCard.Title>
            <GlassCard.Body>{g.body}</GlassCard.Body>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
