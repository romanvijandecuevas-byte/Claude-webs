import { Button } from "@/components/ui/button"

const links = [
  { label: "Inicio", href: "#top", active: true },
  { label: "El problema", href: "#problema" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Método", href: "#metodo" },
  { label: "Garantías", href: "#garantias" },
  { label: "Equipo", href: "#equipo" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-border/60">
    <nav className="flex flex-row items-center justify-between px-8 py-5 max-w-7xl mx-auto">
      <a href="#top" className="flex items-baseline gap-3">
        <span
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
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
            className={
              link.active
                ? "text-sm text-foreground"
                : "text-sm text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button variant="default" asChild>
        <a href="#contacto">Hablemos</a>
      </Button>
    </nav>
    </header>
  )
}
