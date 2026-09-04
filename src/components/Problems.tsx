import { EyebrowPill } from "performative-ui"

const problems = [
  { index: "01 / GESTIÓN", title: "El negocio vive en cinco Excel.", body: "Para saber cómo va el mes hay que pedir datos a tres personas y cruzarlos a mano." },
  { index: "02 / VENTAS", title: "Llamadas que nadie atiende.", body: "Clientes que llaman a mediodía o un sábado y terminan en la competencia." },
  { index: "03 / OPERACIÓN", title: "Procesos que dependen de una persona.", body: "Pedidos, facturas o citas de memoria que se caen cuando esa persona no está." },
  { index: "04 / TECNOLOGÍA", title: "Herramientas que nadie usa.", body: "Se pagan licencias, pero el equipo no sabe qué hacer con ellas." },
  { index: "05 / DATOS", title: "Decisiones que llegan tarde.", body: "Las respuestas están en los datos, pero aparecen cuando ya pasó la oportunidad." },
]

export function Problems() {
  return (
    <section id="problema" className="relative z-10 px-6 py-14 max-w-6xl mx-auto">
      <EyebrowPill icon={false}>01 · Cuándo llamarnos</EyebrowPill>
      <h2 className="mt-3 text-2xl sm:text-3xl max-w-2xl text-foreground" style={{ fontFamily: "var(--font-display)" }}>
        La tecnología importa cuando resuelve un atasco real.
      </h2>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {problems.map((p) => (
          <div key={p.index} className="liquid-glass rounded-xl p-4">
            <span className="text-[0.65rem] text-muted-foreground tracking-[0.1em]">{p.index}</span>
            <h3 className="mt-2 text-sm text-foreground leading-snug">{p.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
