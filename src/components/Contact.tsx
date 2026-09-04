import { type FormEvent, useState } from "react"
import { Aurora } from "performative-ui"
import { Button } from "@/components/ui/button"

const contactBlobs = [
  { color: "rgba(204, 120, 92, 0.30)", x: 15, y: 70, size: 60 },
  { color: "rgba(236, 178, 134, 0.28)", x: 85, y: 30, size: 55 },
]

export function Contact() {
  const [status, setStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Primera conversación Zero — ${data.get("empresa")}`
    const body = [
      `Nombre: ${data.get("nombre")}`,
      `Empresa: ${data.get("empresa")}`,
      `Contacto: ${data.get("contacto")}`,
      "",
      "Qué nos gustaría resolver:",
      data.get("mensaje") || "Por concretar en la primera conversación.",
    ].join("\n")
    setStatus("Abriendo tu aplicación de correo…")
    window.location.href = `mailto:info@zero.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" className="relative overflow-hidden px-6 py-28">
      <Aurora blobs={contactBlobs} blur={80} />
      <div className="relative z-10 liquid-glass max-w-4xl mx-auto rounded-2xl p-8 sm:p-12 text-center">
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          07 · Hablemos
        </span>
        <h2
          className="mt-4 text-3xl sm:text-4xl text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Cuéntanos qué se te pierde.
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          En una primera conversación sabremos si podemos ayudarte. Alcance,
          precio y fecha por escrito en 48 horas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto"
        >
          <input
            name="nombre"
            placeholder="Nombre"
            required
            className="liquid-glass rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <input
            name="empresa"
            placeholder="Empresa"
            required
            className="liquid-glass rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <input
            name="contacto"
            placeholder="Teléfono o correo"
            required
            className="sm:col-span-2 liquid-glass rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <textarea
            name="mensaje"
            placeholder="¿Qué te gustaría resolver?"
            rows={3}
            className="sm:col-span-2 liquid-glass rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none"
          />
          <div className="sm:col-span-2 flex flex-col items-center gap-3 mt-2">
            <Button type="submit" variant="default" size="lg">
              Preparar el contacto
            </Button>
            <p className="text-xs text-muted-foreground">
              No almacenamos estos datos. Se abrirá tu aplicación de correo.
            </p>
            {status && (
              <p className="text-xs text-muted-foreground" role="status">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
