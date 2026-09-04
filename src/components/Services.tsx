import { useState } from "react"
import { EyebrowPill, GlassCard } from "performative-ui"

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
    <section id="soluciones" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
      <EyebrowPill icon={false}>02 · Catálogo de soluciones</EyebrowPill>
      <h2
        className="mt-4 text-3xl sm:text-4xl max-w-2xl text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Nueve puntos de partida. Ninguna solución prefabricada.
      </h2>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={
                filter === cat.id
                  ? "rounded-full px-4 py-1.5 text-xs font-medium bg-primary text-primary-foreground"
                  : "rounded-full px-4 py-1.5 text-xs font-medium border border-border text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          {visible.length} {visible.length === 1 ? "solución" : "soluciones"}
        </span>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((service) => (
          <GlassCard key={service.code} glowOnHover className="flex flex-col">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="tracking-[0.1em]">{service.code}</span>
              <span>{service.price}</span>
            </div>
            <GlassCard.Title className="mt-6 max-w-[16ch]">{service.title}</GlassCard.Title>
            <GlassCard.Body>{service.body}</GlassCard.Body>
            <div className="mt-auto pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>{service.time}</span>
              <GlassCard.Link href="#contacto">Hablemos →</GlassCard.Link>
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground max-w-xl">
        Precios sin IVA y orientativos. El precio final se cierra tras la
        primera conversación y no cambia después.
      </p>
    </section>
  )
}
