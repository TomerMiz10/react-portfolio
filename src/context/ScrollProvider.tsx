import React, { useState } from 'react'
import { ScrollContext } from './ScrollContext'

const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<string>('home')

  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
