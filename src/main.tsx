import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'performative-ui/styles.css'
import './index.css'
import App from './App.tsx'
import { THEME } from './theme'

document.documentElement.dataset.theme = THEME

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
