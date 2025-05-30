import React, { useState, useEffect } from 'react'
import { darkTheme, lightTheme } from '@components/Theme/theme'
import { ThemeModeContext } from './ThemeModeContext'

const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const theme = isDarkMode ? darkTheme : lightTheme

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? darkTheme.body
      : lightTheme.body
  }, [isDarkMode])

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider
