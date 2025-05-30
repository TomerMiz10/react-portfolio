import React, { useState } from 'react'
import { ScrollContext } from './ScrollContext'
import { ScrollOptions } from '../utils/types/types';

const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<ScrollOptions>(
    ScrollOptions.HOME
  )

  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
