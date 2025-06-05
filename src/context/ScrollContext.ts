import { createContext } from 'react'

type ScrollContextType = {
  currentSection: string
  setCurrentSection: (section: string) => void
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
)
export type { ScrollContextType }
