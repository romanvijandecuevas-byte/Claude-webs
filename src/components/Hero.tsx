import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/70 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-24">
        <span className="animate-fade-rise liquid-glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Soluciones a medida · precio cerrado
        </span>

        <h1
          className="animate-fade-rise-delay mt-6 text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Software, IA y analítica{" "}
          <em className="not-italic text-muted-foreground">
            que encajan en tu negocio.
          </em>
        </h1>

        <p className="animate-fade-rise-delay-2 text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          Diseñamos e implantamos agentes de IA, cuadros de mando e
          integraciones a medida. Sin proyectos que se eternizan ni
          herramientas que nadie termina usando.
        </p>

        <div className="animate-fade-rise-delay-2 flex flex-wrap items-center justify-center gap-4 mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="#contacto">Cuéntanos tu caso</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#soluciones">Explorar soluciones</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
