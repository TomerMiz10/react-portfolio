import { NavItem, ScrollOptions } from '../../utils/types/types'
import { applicationRoutes } from '@utils/constants'
import { useScroll } from './useScroll'

export const useScrollNavigation = () => {
  const navItems: NavItem[] = [
    { path: applicationRoutes.home, label: ScrollOptions.HOME },
    { path: applicationRoutes.about, label: ScrollOptions.ABOUT },
    { path: applicationRoutes.skills, label: ScrollOptions.SKILLS },
    { path: applicationRoutes.projects, label: ScrollOptions.PROJECTS },
    { path: applicationRoutes.experience, label: ScrollOptions.EXPERIENCE },
    { path: applicationRoutes.contact, label: ScrollOptions.CONTACT },
  ]

  const { currentSection, setCurrentSection } = useScroll()

  const scrollToSection = (sectionId: ScrollOptions) => {
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
    setCurrentSection(ScrollOptions.HOME)
  }

  return {
    navItems,
    currentSection,
    scrollToSection,
    handleHomeClick,
  }
}
