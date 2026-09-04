import { Aurora, EyebrowPill } from "performative-ui"

const contactBlobs = [
  { color: "rgba(56, 189, 248, 0.22)", x: 15, y: 70, size: 60 },
  { color: "rgba(129, 140, 248, 0.2)", x: 85, y: 30, size: 55 },
]

// TODO: replace with the real phone number.
const phone = "+34 600 000 000"
const email = "info@zero.es"

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 relative overflow-hidden px-6 py-14">
      <Aurora blobs={contactBlobs} blur={80} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <EyebrowPill icon={false}>04 · Hablemos</EyebrowPill>
        <h2 className="mt-3 text-2xl sm:text-3xl text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Cuéntanos qué se te pierde.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Primera conversación de 30–45 minutos. Propuesta cerrada en 48 horas.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a href={`mailto:${email}`} className="liquid-glass rounded-xl px-6 py-5 hover:-translate-y-0.5 transition-transform">
            <span className="block text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">Correo</span>
            <span className="block mt-1 text-lg text-primary">{email}</span>
          </a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="liquid-glass rounded-xl px-6 py-5 hover:-translate-y-0.5 transition-transform">
            <span className="block text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">Teléfono</span>
            <span className="block mt-1 text-lg text-primary">{phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
