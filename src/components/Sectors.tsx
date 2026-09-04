import { LogoMarquee, type MarqueeItem } from "performative-ui"

const sectors = ["Concesionarios", "Clínicas", "Gestorías", "Distribuidoras", "Hoteles"]

const logos: MarqueeItem[] = sectors.map((name) => ({
  kind: "node",
  key: name,
  node: (
    <span
      className="text-2xl text-muted-foreground/80 whitespace-nowrap"
      style={{ fontFamily: "'Instrument Serif', serif" }}
    >
      {name}
    </span>
  ),
}))

export function Sectors() {
  return (
    <section aria-label="Sectores donde lo aplicamos" className="relative z-10 mt-16 px-6">
      <p className="text-center text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
        Sectores donde ya funciona
      </p>
      <div className="mt-4 max-w-5xl mx-auto">
        <LogoMarquee logos={logos} speed={28} gap={72} fade pauseOnHover />
      </div>
    </section>
  )
}
