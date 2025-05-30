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
  body: '#f7f7fa', // softer off-white background
  navbarBg: '#ffffff', // pure white navbar
  textPrimary: '#1a1a1a', // darker text for better contrast
  textSecondary: '#555', // slightly darker secondary text
  primaryColor: '#ffd700',
  headerPrimary: '#ffd700',
  headerSecondary: '#1a1a1a', // match textPrimary for headers
  linkColor: '#e6b800', // slightly deeper gold for links
  linkHoverColor: '#bfa100', // darker gold on hover
  cardBg: '#ffffff', // white cards for clarity
  tagBg: 'rgba(255,215,0,0.12)', // slightly more visible tag background
  tagText: '#bfa100', // deeper gold for tag text
  inputBorder: '#ffd700',
  buttonBg: '#ffd700',
  buttonHoverBg: '#e6b800',
  success: '#4ecca3',
  error: '#ff6b6b',
};

export const darkTheme: Theme = {
  body: '#181a20', // softer dark background
  navbarBg: '#23252b', // slightly lighter than body for navbar
  textPrimary: '#f7f7fa', // light text for contrast
  textSecondary: '#b0b3b8', // muted light gray
  primaryColor: '#ffd700',
  headerPrimary: '#ffd700',
  headerSecondary: '#ffd700',
  linkColor: '#ffd700',
  linkHoverColor: '#e6b800',
  cardBg: '#23252b', // match navbar for card backgrounds
  tagBg: 'rgba(255,215,0,0.10)', // subtle gold tag background
  tagText: '#ffd700',
  inputBorder: '#ffd700',
  buttonBg: '#ffd700',
  buttonHoverBg: '#e6b800',
  success: '#4ecca3',
  error: '#ff6b6b',
};