import { BigBack } from "performative-ui"

const columns = [
  {
    heading: "Navegación",
    links: [
      { label: "El problema", href: "#problema" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Método", href: "#metodo" },
    ],
  },
  {
    heading: "Confianza",
    links: [
      { label: "Garantías", href: "#garantias" },
      { label: "Tus datos", href: "#datos" },
      { label: "Equipo", href: "#equipo" },
    ],
  },
  {
    heading: "Contacto",
    links: [
      { label: "Hablemos", href: "#contacto" },
      { label: "info@zero.es", href: "mailto:info@zero.es" },
    ],
  },
]

export function Footer() {
  return (
    <BigBack
      company="zero_"
      columns={columns}
      social={[{ label: "Volver arriba ↑", href: "#top" }]}
      copyright={`AI integration · ${new Date().getFullYear()}`}
      className="relative z-10 mt-8"
    />
  )
}
