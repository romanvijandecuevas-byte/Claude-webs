import { EyebrowPill, StatusDot } from "performative-ui"

const items = [
  {
    icon: "EU",
    title: "Datos alojados en Europa",
    body: "Proveedores y configuraciones con residencia en la Unión Europea.",
  },
  {
    icon: "IA",
    title: "Sin entrenamiento con tus datos",
    body: "Versiones empresariales que no alimentan modelos con tu información.",
  },
  {
    icon: "ID",
    title: "Accesos bajo control",
    body: "Cada persona ve solo lo que necesita, con el RGPD delante.",
  },
]

export function DataSecurity() {
  return (
    <section id="datos" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
      <div className="liquid-glass rounded-3xl grid md:grid-cols-2 overflow-hidden">
        <div className="p-8 sm:p-10">
          <EyebrowPill icon={false}>05 · Tus datos</EyebrowPill>
          <h2
            className="mt-4 text-3xl text-foreground max-w-[12ch]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            La IA no exige perder el control.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">
            La residencia, los accesos y el uso de la información se deciden
            en el diseño y se dejan por escrito en cada propuesta.
          </p>
        </div>

        <div className="p-8 sm:p-10 bg-background/40 border-t md:border-t-0 md:border-l border-border/60">
          <div className="flex items-center justify-between pb-3 border-b border-border/60 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
            <span>data policy / zero</span>
            <span className="flex items-center gap-2">
              <StatusDot /> verified
            </span>
          </div>
          {items.map((item) => (
            <div
              key={item.icon}
              className="flex items-start gap-4 py-4 border-b border-border/60 last:border-b-0"
            >
              <span className="shrink-0 h-9 w-9 grid place-items-center rounded-lg bg-primary/10 text-primary text-xs font-medium">
                {item.icon}
              </span>
              <div>
                <h3 className="text-sm text-foreground font-medium">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
