const problems = [
  {
    index: "01",
    title: "El negocio vive en cinco Excel.",
    body: "Para saber cómo va el mes hay que pedir datos a tres personas y cruzarlos a mano.",
  },
  {
    index: "02",
    title: "Llamadas que nadie atiende.",
    body: "Clientes que llaman fuera de horario y terminan en la competencia.",
  },
  {
    index: "03",
    title: "Procesos que dependen de una persona.",
    body: "Pedidos y citas gestionados de memoria que se caen cuando esa persona falta.",
  },
]

export function Problems() {
  return (
    <section id="problema" className="relative z-10 px-6 py-28 max-w-6xl mx-auto">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        01 · Cuándo llamarnos
      </span>
      <h2
        className="mt-4 text-3xl sm:text-4xl max-w-2xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        La tecnología importa cuando resuelve un atasco real.
      </h2>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        {problems.map((problem) => (
          <div
            key={problem.index}
            className="liquid-glass rounded-2xl p-6"
          >
            <span className="text-xs text-muted-foreground tracking-[0.1em]">
              {problem.index}
            </span>
            <h3 className="mt-4 text-lg text-foreground">{problem.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {problem.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
