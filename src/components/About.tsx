import { EyebrowPill } from "performative-ui"

const credentials = [
  { label: "Formación", value: "Ingeniería informática y telecomunicación" },
  { label: "Especialidad", value: "Inteligencia artificial y datos" },
  { label: "Experiencia", value: "Automatización, redes e integración" },
  { label: "Enfoque", value: "Proyectos acotados, medibles y entregados" },
]

export function About() {
  return (
    <section id="equipo" className="relative z-10 px-6 py-14 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
        <div className="liquid-glass rounded-3xl p-6 flex flex-col justify-between bg-primary/8">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              zero_
            </span>
            <span className="h-8 w-px bg-border" />
            <span className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
              AI integration
            </span>
          </div>
          <p
            className="mt-6 text-2xl sm:text-3xl leading-snug text-foreground max-w-[14ch]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Foco de especialista. Respaldo de integrador.
          </p>
          <span className="mt-6 text-xs uppercase tracking-[0.1em] text-primary">
            Ingeniería aplicada a negocio
          </span>
        </div>

        <div>
          <EyebrowPill icon={false}>06 · Quiénes somos</EyebrowPill>
          <h2
            className="mt-3 text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ingenieros que hacen que las cosas funcionen.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Zero es la propuesta de AI integration: un equipo especializado
            en inteligencia artificial, datos y software, con experiencia en
            entornos donde un sistema mal montado se nota el mismo día.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Entendemos tu proceso antes de proponer tecnología, elegimos cada
            herramienta con criterio y damos el proyecto por terminado cuando
            tu equipo puede usarlo sin nosotros delante.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {credentials.map((c) => (
              <div key={c.label} className="liquid-glass rounded-xl p-4">
                <span className="text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {c.label}
                </span>
                <p className="mt-2 text-sm text-foreground leading-snug">
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
