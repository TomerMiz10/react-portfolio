import { useScroll } from './useScroll'

export const useScrollNavigation = () => {
  const { setCurrentSection } = useScroll()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setCurrentSection(sectionId)
    }
  }

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setCurrentSection('home')
  }

  return {
    scrollToSection,
    handleHomeClick,
  }
}
