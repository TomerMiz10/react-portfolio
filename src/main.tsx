import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import ScrollProvider from "@context/ScrollProvider"
import ThemeModeProvider from "@context/ThemeModeProvider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollProvider>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </ScrollProvider>
  </StrictMode>
)
