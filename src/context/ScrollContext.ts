import { createContext } from 'react'
import { ScrollOptions } from '../utils/types/types'

type ScrollContextType = {
  currentSection: ScrollOptions
  setCurrentSection: (section: ScrollOptions) => void
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
)
export type { ScrollContextType }
