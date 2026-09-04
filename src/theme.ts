// Build-time theme switch. `VITE_THEME=light-niebla npm run build` (or
// light-acero / light-marino) emits a light variant; anything else emits
// the dark one. CSS colours live in index.css under [data-theme]; the few
// colours passed to JS components live here.
const requested = import.meta.env.VITE_THEME as string | undefined
export const THEME: string = requested?.startsWith("light") ? requested : "dark"
const isLight = THEME !== "dark"

const dark = {
  heroBlobs: [
    { color: "rgba(56, 189, 248, 0.28)", x: 18, y: 30, size: 60 },
    { color: "rgba(34, 211, 238, 0.22)", x: 82, y: 24, size: 52 },
    { color: "rgba(129, 140, 248, 0.22)", x: 52, y: 86, size: 56 },
  ],
  contactBlobs: [
    { color: "rgba(56, 189, 248, 0.22)", x: 15, y: 70, size: 60 },
    { color: "rgba(129, 140, 248, 0.2)", x: 85, y: 30, size: 55 },
  ],
  nodeColors: ["rgba(56, 189, 248, 0.9)", "rgba(129, 140, 248, 0.9)"],
  nodeLink: "rgba(56, 189, 248, 0.28)",
  accent: "#38bdf8",
}

const light = {
  heroBlobs: [
    { color: "rgba(33, 150, 243, 0.22)", x: 18, y: 30, size: 60 },
    { color: "rgba(110, 184, 245, 0.3)", x: 82, y: 24, size: 52 },
    { color: "rgba(154, 206, 248, 0.38)", x: 52, y: 86, size: 56 },
  ],
  contactBlobs: [
    { color: "rgba(33, 150, 243, 0.18)", x: 15, y: 70, size: 60 },
    { color: "rgba(154, 206, 248, 0.35)", x: 85, y: 30, size: 55 },
  ],
  nodeColors: ["rgba(33, 150, 243, 0.9)", "rgba(110, 184, 245, 0.9)"],
  nodeLink: "rgba(33, 150, 243, 0.3)",
  accent: "#2196f3",
}

export const palette = isLight ? light : dark
