// Portrait layout of the chip diagram for small screens. Same content and
// the same animated traces as the wide SVG, stacked top to bottom.

const inputs = [
  "El negocio vive en cinco Excel",
  "Llamadas que nadie atiende",
  "Procesos que dependen de una persona",
  "Herramientas que nadie usa",
  "Decisiones que llegan tarde",
]
const outputs = ["Cita agendada", "Lead calificado", "Dato en CRM", "Alerta enviada"]
const data = ["Datos en la UE", "Sin entrenar con tus datos", "Accesos bajo control"]
const guarantees = ["Alcance cerrado", "Precio fijo", "2–6 semanas", "Soporte 1 mes", "Código tuyo"]

function Flow({ count = 3, height = 56 }: { count?: number; height?: number }) {
  const gap = 22
  const w = gap * (count + 1)
  return (
    <svg width={w} height={height} viewBox={`0 0 ${w} ${height}`} aria-hidden="true" className="mx-auto block">
      {Array.from({ length: count }, (_, i) => {
        const x = gap * (i + 1)
        const d = `M${x},0 V${height}`
        return (
          <g key={i} fill="none" strokeLinecap="round">
            <path d={d} style={{ stroke: "var(--trace-dim)" }} strokeWidth="1.5" />
            <path d={d} style={{ stroke: "var(--trace)" }} strokeWidth="2" className="trace-flow" opacity="0.85" />
            <circle r="3" style={{ fill: "var(--pulse)", filter: "drop-shadow(0 0 5px var(--pulse-glow))" }}>
              <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} path={d} />
            </circle>
          </g>
        )
      })}
    </svg>
  )
}

function Pins({ count }: { count: number }) {
  return (
    <div className="flex justify-around px-8" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="block h-3 w-1.5 rounded-sm" style={{ background: "var(--chip-pin)" }} />
      ))}
    </div>
  )
}

function Tag({ text }: { text: string }) {
  return (
    <span
      className="rounded-lg px-3 py-1.5 text-xs text-center leading-snug"
      style={{ background: "var(--label-fill)", border: "1px solid var(--label-stroke)", color: "var(--label-text)" }}
    >
      {text}
    </span>
  )
}

function Caption({ children }: { children: string }) {
  return (
    <p className="text-center font-mono text-[0.6rem] tracking-[0.25em]" style={{ color: "var(--caption)" }}>
      {children}
    </p>
  )
}

export function ChipMobile() {
  return (
    <div className="max-w-sm mx-auto">
      <Caption>ENTRA</Caption>
      <div className="mt-2 grid gap-2">
        {inputs.map((t) => <Tag key={t} text={t} />)}
      </div>
      <Flow count={3} />

      <div className="mx-auto w-64">
        <Pins count={5} />
        <div
          className="chip-core rounded-2xl px-5 py-6 text-center"
          style={{ background: "var(--chip-fill)", border: "2px solid var(--chip-stroke)" }}
        >
          <div className="rounded-xl py-4" style={{ border: "1px solid var(--chip-inner)" }}>
            <div className="text-4xl" style={{ fontFamily: "var(--font-display)", color: "var(--chip-name)" }}>zero_</div>
            <div className="mt-1 font-mono text-[0.6rem] tracking-[0.3em]" style={{ color: "var(--chip-sub)" }}>AI INTEGRATION</div>
            <div className="mt-3 font-mono text-[0.6rem] leading-relaxed" style={{ color: "var(--chip-spec)" }}>
              48 h → propuesta<br />2–6 sem → en marcha<br />precio fijo · 1 mes de soporte
            </div>
          </div>
        </div>
        <Pins count={5} />
      </div>

      <Flow count={3} />
      <Caption>SALE</Caption>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {outputs.map((t) => <Tag key={t} text={t} />)}
      </div>

      <div className="mt-8 grid gap-6">
        <div>
          <Caption>TUS DATOS</Caption>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {data.map((t) => <Tag key={t} text={t} />)}
          </div>
        </div>
        <div>
          <Caption>GARANTÍAS</Caption>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {guarantees.map((t) => <Tag key={t} text={t} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
