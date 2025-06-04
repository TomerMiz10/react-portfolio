import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  body: string;
  navbarBg: string;
  textPrimary: string;
  textSecondary: string;
  primaryColor: string;
  headerPrimary: string;
  headerSecondary: string;
  linkColor: string;
  linkHoverColor: string;
  cardBg: string;
  tagBg: string;
  tagText: string;
  inputBorder: string;
  buttonBg: string;
  buttonHoverBg: string;
  success: string;
  error: string;
}

export const lightTheme: Theme = {
  body: '#fafafa',
  navbarBg: '#e4e5f1',
  textPrimary: '#222',
  textSecondary: '#022c43',
  primaryColor: '#ffd700',
  headerPrimary: '#ffd700',
  headerSecondary: '#222',
  linkColor: '#ffd700',
  linkHoverColor: '#e6b800',
  cardBg: 'rgba(0,0,0,0.05)',
  tagBg: 'rgba(255,215,0,0.1)',
  tagText: '#ffd700',
  inputBorder: '#ffd700',
  buttonBg: '#ffd700',
  buttonHoverBg: '#e6b800',
  success: '#4ecca3',
  error: '#ff6b6b',
};

export const darkTheme: Theme = {
  body: '#111222',
  navbarBg: '#181818',
  textPrimary: '#E0E0E0',
  textSecondary: '#B0B0B0',
  primaryColor: '#ffd700',
  headerPrimary: '#022c43',
  headerSecondary: '#E0E0E0',
  linkColor: '#ffd700',
  linkHoverColor: '#e6b800',
  cardBg: '#1e1e1e',
  tagBg: 'rgba(255,215,0,0.1)',
  tagText: '#ffd700',
  inputBorder: '#444444',
  buttonBg: '#ffd700',
  buttonHoverBg: '#e6b800',
  success: '#4ecca3',
  error: '#ff6b6b',
};