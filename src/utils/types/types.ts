export type AlignOptions = 'left' | 'center' | 'right'

export type SizeOptions = 'sm' | 'md' | 'lg' | 'xl'

export type fontWeightOptions = 300 | 400 | 500 | 600

export type ColorOptions =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export enum ScrollOptions {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}

export type NavItem = {
  path: string
  label: string
}
