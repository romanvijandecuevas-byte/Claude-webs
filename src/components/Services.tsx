const services = [
  {
    code: "IA / 01",
    price: "desde 2.900 €",
    title: "Recepcionista IA por voz y WhatsApp",
    body: "Atiende lo que no llegáis a coger, agenda la cita y califica al cliente.",
    time: "3 semanas",
  },
  {
    code: "DATA / 01",
    price: "desde 3.900 €",
    title: "Cuadro de mando y agente de negocio",
    body: "Tus sistemas conectados y un resumen semanal automático.",
    time: "3–4 semanas",
  },
  {
    code: "DEV / 01",
    price: "desde 5.900 €",
    title: "CRM a medida",
    body: "Diseñado sobre tu proceso de venta, sin licencias por usuario.",
    time: "4–6 semanas",
  },
  {
    code: "ADOPT / 01",
    price: "desde 1.900 €",
    title: "Workspace y Copilot en marcha",
    body: "Licencias, seguridad y formación para tu equipo.",
    time: "2 semanas",
  },
]

export function Services() {
  return (
    <section id="soluciones" className="relative z-10 px-6 py-28 max-w-6xl mx-auto">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        02 · Catálogo de soluciones
      </span>
      <h2
        className="mt-4 text-3xl sm:text-4xl max-w-2xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Nueve puntos de partida posibles. Estos son los que más repetimos.
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.code}
            className="liquid-glass rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground tracking-[0.1em]">
                {service.code}
              </span>
              <span className="text-muted-foreground">{service.price}</span>
            </div>
            <h3 className="mt-6 text-xl text-foreground max-w-[16ch]">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {service.body}
            </p>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>{service.time}</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground max-w-xl">
        Precios sin IVA y orientativos. El precio final se cierra tras la
        primera conversación y no cambia después.
      </p>
    </section>
  )
}
