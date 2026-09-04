import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Inicio", href: "#top", active: true },
  { label: "Tesis", href: "#tesis" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Método", href: "#metodo" },
  { label: "Contacto", href: "#contacto" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="flex flex-row items-center justify-between px-5 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
        <a href="#top" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="text-2xl tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            zero_
          </span>
          <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground border-l border-border pl-3">
            AI integration
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? "text-sm text-foreground" : "text-sm text-muted-foreground hover:text-foreground transition-colors"}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 px-5 py-3 grid">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground border-b border-border/40 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
