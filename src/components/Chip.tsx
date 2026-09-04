import { EyebrowPill } from "performative-ui"
import { ChipMobile } from "@/components/ChipMobile"
import { palette } from "@/theme"

// Everything the page used to say in boxes, wired around one chip.
const inputs = [
  "El negocio vive en cinco Excel",
  "Llamadas que nadie atiende",
  "Procesos que dependen de una persona",
  "Herramientas que nadie usa",
  "Decisiones que llegan tarde",
]
const outputs = ["Cita agendada", "Lead calificado", "Dato en CRM", "Alerta enviada"]
const top = ["Datos en la UE", "Sin entrenar con tus datos", "Accesos bajo control"]
const bottom = ["Alcance cerrado", "Precio fijo", "2–6 semanas", "Soporte 1 mes", "Código tuyo"]

const W = 1200
const H = 700
const chip = { x: 470, y: 230, w: 260, h: 240 }
const cx = chip.x + chip.w / 2
const cy = chip.y + chip.h / 2

// Pill geometry
const pill = { w: 250, h: 40 }
const smallPill = { w: 160, h: 34 }

function spread(count: number, from: number, to: number) {
  return Array.from({ length: count }, (_, i) => from + ((to - from) * (i + 0.5)) / count)
}

// Left pills at x 40..290, wired into the chip's left edge
const leftY = spread(inputs.length, 110, 590)
const leftPinY = spread(inputs.length, chip.y + 30, chip.y + chip.h - 30)
const rightY = spread(outputs.length, 150, 550)
const rightPinY = spread(outputs.length, chip.y + 36, chip.y + chip.h - 36)
const topX = spread(top.length, 200, 1000)
const topPinX = spread(top.length, chip.x + 40, chip.x + chip.w - 40)
const bottomX = spread(bottom.length, 130, 1070)
const bottomPinX = spread(bottom.length, chip.x + 28, chip.x + chip.w - 28)

// Orthogonal trace with a mid bend
const hPath = (x1: number, y1: number, x2: number, y2: number) => {
  const mx = (x1 + x2) / 2
  return `M${x1},${y1} H${mx} V${y2} H${x2}`
}
const vPath = (x1: number, y1: number, x2: number, y2: number, my = (y1 + y2) / 2) =>
  `M${x1},${y1} V${my} H${x2} V${y2}`

function Pulse({ d, delay }: { d: string; delay: number }) {
  return (
    <circle r="3.5" style={{ fill: "var(--pulse)", filter: "drop-shadow(0 0 6px var(--pulse-glow))" }}>
      <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${delay}s`} path={d} />
    </circle>
  )
}

function Trace({ d, delay }: { d: string; delay: number }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} style={{ stroke: "var(--trace-dim)" }} strokeWidth="1.5" />
      <path d={d} style={{ stroke: "var(--trace)" }} strokeWidth="2" className="trace-flow" opacity="0.85" />
      <Pulse d={d} delay={delay} />
    </g>
  )
}

function Label({
  x,
  y,
  text,
  size = pill,
  anchor = "middle",
}: {
  x: number
  y: number
  text: string
  size?: { w: number; h: number }
  anchor?: "start" | "middle" | "end"
}) {
  const left = anchor === "start" ? x : anchor === "end" ? x - size.w : x - size.w / 2
  return (
    <g>
      <rect x={left} y={y - size.h / 2} width={size.w} height={size.h} rx="9" style={{ fill: "var(--label-fill)", stroke: "var(--label-stroke)" }} />
      <text x={left + size.w / 2} y={y + 4.5} textAnchor="middle" fontSize={size === pill ? 13 : 12} style={{ fill: "var(--label-text)" }} fontFamily="Inter, system-ui, sans-serif">
        {text}
      </text>
    </g>
  )
}

export function Chip() {
  return (
    <section id="tesis" className="scroll-mt-20 relative z-10 px-5 sm:px-6 py-12 sm:py-14">
      <div className="max-w-6xl mx-auto text-center">
        <EyebrowPill statusColor={palette.accent}>01 · Nuestra tesis</EyebrowPill>
        <h2 className="mt-3 text-2xl sm:text-3xl text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Lo que entra desordenado, sale funcionando.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          Ingenieros de IA, datos y software. Entendemos tu proceso y devolvemos un sistema que tu equipo usa sin nosotros delante.
        </p>
      </div>

      {/* Phones get a portrait layout; the wide drawing needs ~880px to stay legible. */}
      <div className="mt-6 md:hidden">
        <ChipMobile />
      </div>
      <div className="mt-6 hidden md:block">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto w-full max-w-6xl" role="img" aria-label="Chip zero_: problemas del negocio entran por la izquierda, resultados salen por la derecha; garantías y protección de datos conectadas arriba y abajo.">
          {/* traces */}
          {inputs.map((_, i) => (
            <Trace key={`in${i}`} d={hPath(290, leftY[i], chip.x, leftPinY[i])} delay={i * 0.45} />
          ))}
          {outputs.map((_, i) => (
            <Trace key={`out${i}`} d={hPath(chip.x + chip.w, rightPinY[i], 910, rightY[i])} delay={0.3 + i * 0.5} />
          ))}
          {top.map((_, i) => (
            <Trace key={`top${i}`} d={vPath(topX[i], 62, topPinX[i], chip.y)} delay={0.6 + i * 0.7} />
          ))}
          {/* bottom traces bend at y=600, below the last left pill, so the bus never crosses it */}
          {bottom.map((_, i) => (
            <Trace key={`bot${i}`} d={vPath(bottomPinX[i], chip.y + chip.h, bottomX[i], 638, 600)} delay={0.2 + i * 0.4} />
          ))}

          {/* pins */}
          {leftPinY.map((y, i) => <rect key={`lp${i}`} x={chip.x - 14} y={y - 3} width="14" height="6" rx="1.5" style={{ fill: "var(--chip-pin)" }} />)}
          {rightPinY.map((y, i) => <rect key={`rp${i}`} x={chip.x + chip.w} y={y - 3} width="14" height="6" rx="1.5" style={{ fill: "var(--chip-pin)" }} />)}
          {topPinX.map((x, i) => <rect key={`tp${i}`} x={x - 3} y={chip.y - 14} width="6" height="14" rx="1.5" style={{ fill: "var(--chip-pin)" }} />)}
          {bottomPinX.map((x, i) => <rect key={`bp${i}`} x={x - 3} y={chip.y + chip.h} width="6" height="14" rx="1.5" style={{ fill: "var(--chip-pin)" }} />)}

          {/* chip */}
          <g className="chip-core">
            <rect x={chip.x} y={chip.y} width={chip.w} height={chip.h} rx="22" style={{ fill: "var(--chip-fill)", stroke: "var(--chip-stroke)" }} strokeWidth="2" />
            <rect x={chip.x + 12} y={chip.y + 12} width={chip.w - 24} height={chip.h - 24} rx="16" fill="none" style={{ stroke: "var(--chip-inner)" }} />
            <circle cx={chip.x + 30} cy={chip.y + 30} r="4" style={{ fill: "var(--chip-stroke)" }} />
          </g>
          <text x={cx} y={cy - 22} textAnchor="middle" fontSize="54" style={{ fill: "var(--chip-name)" }} fontFamily="var(--font-display)">zero_</text>
          <text x={cx} y={cy + 8} textAnchor="middle" fontSize="11" letterSpacing="3" style={{ fill: "var(--chip-sub)" }} fontFamily="ui-monospace, monospace">AI INTEGRATION</text>
          <text x={cx} y={cy + 46} textAnchor="middle" fontSize="11" style={{ fill: "var(--chip-spec)" }} fontFamily="ui-monospace, monospace">48 h → propuesta · 2–6 sem → en marcha</text>
          <text x={cx} y={cy + 66} textAnchor="middle" fontSize="11" style={{ fill: "var(--chip-spec)" }} fontFamily="ui-monospace, monospace">precio fijo · 1 mes de soporte</text>

          {/* labels */}
          {inputs.map((t, i) => <Label key={t} x={290} y={leftY[i]} text={t} anchor="end" size={{ w: 282, h: 40 }} />)}
          {outputs.map((t, i) => <Label key={t} x={910} y={rightY[i]} text={t} anchor="start" size={{ w: 200, h: 40 }} />)}
          {top.map((t, i) => <Label key={t} x={topX[i]} y={44} text={t} size={{ w: 190, h: 34 }} />)}
          {bottom.map((t, i) => <Label key={t} x={bottomX[i]} y={656} text={t} size={smallPill} />)}

          {/* side captions */}
          <text x={165} y={72} textAnchor="middle" fontSize="10" letterSpacing="2.5" style={{ fill: "var(--caption)" }} fontFamily="ui-monospace, monospace">ENTRA</text>
          <text x={1010} y={112} textAnchor="middle" fontSize="10" letterSpacing="2.5" style={{ fill: "var(--caption)" }} fontFamily="ui-monospace, monospace">SALE</text>
        </svg>
      </div>
    </section>
  )
}
