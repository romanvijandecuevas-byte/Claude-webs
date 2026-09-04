export function About() {
  return (
    <section id="equipo" className="relative z-10 px-6 py-16 max-w-4xl mx-auto text-center">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        04 · Quiénes somos
      </span>
      <h2
        className="mt-4 text-3xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Ingenieros que hacen que las cosas funcionen.
      </h2>
      <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Zero es un equipo especializado en inteligencia artificial, datos y
        software. Entendemos tu proceso antes de proponer tecnología y damos
        el proyecto por terminado cuando tu equipo puede usarlo sin nosotros
        delante.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        <span className="liquid-glass rounded-full px-3 py-1.5">
          Ingeniería informática y telecomunicación
        </span>
        <span className="liquid-glass rounded-full px-3 py-1.5">
          IA y datos
        </span>
        <span className="liquid-glass rounded-full px-3 py-1.5">
          Proyectos acotados y entregados
        </span>
      </div>
    </section>
  )
}
