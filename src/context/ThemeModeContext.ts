import { createContext } from 'react'
import { Theme } from '@components/Theme/theme'

interface ThemeModeContextType {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  theme: Theme
}

export const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
)
