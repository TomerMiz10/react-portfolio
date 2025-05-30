import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { HashRouter } from "react-router-dom"
import ScrollProvider from "@context/ScrollProvider"
import ThemeModeProvider from "@context/ThemeModeProvider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollProvider>
      <HashRouter>
        <ThemeModeProvider>
          <App />
        </ThemeModeProvider>
      </HashRouter>
    </ScrollProvider>
  </StrictMode>
)
