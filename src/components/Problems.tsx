const problems = [
  {
    index: "01 / GESTIÓN",
    title: "El negocio vive en cinco Excel.",
    body: "Para saber cómo va el mes hay que pedir datos a tres personas, cruzarlos a mano y confiar en que todos trabajan sobre la última versión.",
    lead: true,
  },
  {
    index: "02 / VENTAS",
    title: "Llamadas que nadie atiende.",
    body: "Clientes que llaman a mediodía, un sábado o con la línea ocupada y terminan en la competencia.",
  },
  {
    index: "03 / OPERACIÓN",
    title: "Procesos que dependen de una persona.",
    body: "Pedidos, facturas o citas que se gestionan de memoria y se caen cuando esa persona no está.",
  },
  {
    index: "04 / TECNOLOGÍA",
    title: "Herramientas que nadie usa.",
    body: "Se pagan licencias, pero el equipo no sabe qué hacer con ellas ni qué información puede compartir.",
  },
  {
    index: "05 / DATOS",
    title: "Decisiones que llegan tarde.",
    body: "Las respuestas existen en los datos, pero aparecen cuando ya ha pasado la oportunidad de actuar.",
  },
]

export function Problems() {
  return (
    <section id="problema" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        01 · Cuándo llamarnos
      </span>
      <h2
        className="mt-4 text-3xl sm:text-4xl max-w-2xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        La tecnología importa cuando resuelve un atasco real.
      </h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((problem) => (
          <div
            key={problem.index}
            className={
              problem.lead
                ? "liquid-glass rounded-2xl p-6 sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-primary/8"
                : "liquid-glass rounded-2xl p-6"
            }
          >
            <span className="text-xs text-muted-foreground tracking-[0.1em]">
              {problem.index}
            </span>
            <h3 className="mt-4 text-lg text-foreground max-w-[18ch]">
              {problem.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {problem.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
