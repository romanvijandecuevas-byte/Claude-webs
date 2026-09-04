export function Footer() {
  return (
    <footer className="relative z-10 px-6 py-6 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border/60">
      <span className="text-foreground" style={{ fontFamily: "var(--font-display)" }}>
        zero_
      </span>
      <span>AI integration · {new Date().getFullYear()}</span>
      <a href="#top" className="hover:text-foreground transition-colors">
        Volver arriba ↑
      </a>
    </footer>
  )
}
