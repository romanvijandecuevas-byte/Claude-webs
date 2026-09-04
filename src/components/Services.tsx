import { useState } from "react"
import { EyebrowPill } from "performative-ui"

const categories = [
  { id: "all", label: "Todas" },
  { id: "ia", label: "IA aplicada" },
  { id: "data", label: "Analítica" },
  { id: "software", label: "Software" },
  { id: "adoption", label: "Implantación" },
]

const services = [
  { code: "IA / 01", category: "ia", price: "desde 11.200 €", title: "Recepcionista IA por voz y WhatsApp", body: "Atiende lo que no llegáis a coger, agenda la cita y califica al cliente.", time: "3 semanas" },
  { code: "IA / 02", category: "ia", price: "desde 2.500 €", title: "Automatización de documentos", body: "Lee facturas, pedidos y albaranes que llegan por correo y los incorpora a tu sistema.", time: "2–3 semanas" },
  { code: "IA / 03", category: "ia", price: "desde 3.200 €", title: "Asistente sobre tu documentación", body: "Responde a tu equipo con tus manuales, tarifas y procedimientos; no con información genérica.", time: "3 semanas" },
  { code: "DATA / 01", category: "data", price: "desde 3.900 €", title: "Cuadro de mando y agente de negocio", body: "Tus sistemas conectados, entre cinco y ocho indicadores y un resumen semanal automático.", time: "3–4 semanas" },
  { code: "DATA / 02", category: "data", price: "desde 4.900 €", title: "Previsión de demanda y stock", body: "Un modelo sobre tu histórico que propone el pedido o la producción de la semana.", time: "4 semanas" },
  { code: "DEV / 01", category: "software", price: "desde 5.900 €", title: "CRM a medida", body: "Diseñado sobre tu proceso de venta, sin licencias por usuario que crecen cada año.", time: "4–6 semanas" },
  { code: "DEV / 02", category: "software", price: "desde 2.800 €", title: "Integración entre sistemas", body: "Conectamos ERP, tienda, CRM y facturación para que la información deje de copiarse a mano.", time: "2–4 semanas" },
  { code: "ADOPT / 01", category: "adoption", price: "desde 1.900 €", title: "Workspace y Gemini en marcha", body: "Licencias, seguridad, permisos y dos sesiones de formación por equipo.", time: "2 semanas" },
  { code: "ADOPT / 02", category: "adoption", price: "desde 1.900 €", title: "Microsoft 365 y Copilot", body: "Implantación, seguridad y formación para equipos que ya trabajan en el entorno Microsoft.", time: "2 semanas" },
]

export function Services() {
  const [filter, setFilter] = useState("all")
  const visible = services.filter((s) => filter === "all" || s.category === filter)

  return (
    <section id="soluciones" className="scroll-mt-20 relative z-10 px-6 py-14 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <EyebrowPill icon={false}>02 · Catálogo de soluciones</EyebrowPill>
          <h2 className="mt-3 text-2xl sm:text-3xl max-w-2xl text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Nueve puntos de partida. Ninguna solución prefabricada.
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={
                filter === cat.id
                  ? "rounded-full px-3 py-1 text-xs font-medium bg-primary text-primary-foreground"
                  : "rounded-full px-3 py-1 text-xs font-medium border border-border text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-1 text-xs text-muted-foreground">
            {visible.length} {visible.length === 1 ? "solución" : "soluciones"}
          </span>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map((s) => (
          <a key={s.code} href="#contacto" className="liquid-glass rounded-xl p-4 flex flex-col hover:-translate-y-0.5 transition-transform">
            <div className="flex items-center justify-between text-[0.65rem] text-muted-foreground">
              <span className="tracking-[0.1em]">{s.code}</span>
              <span className="font-medium text-foreground">{s.price}</span>
            </div>
            <h3 className="mt-2 text-base text-foreground leading-snug">{s.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.body}</p>
            <div className="mt-auto pt-3 flex items-center justify-between text-[0.7rem] text-muted-foreground">
              <span>{s.time}</span>
              <span className="text-primary">Hablemos →</span>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Precios sin IVA y orientativos. El precio final se cierra tras la primera conversación y no cambia después.
      </p>
    </section>
  )
}
