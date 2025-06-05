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
  body: '#fafafa', // $body-bg-light
  navbarBg: '#e4e5f1', // $navbar-bg-light
  textPrimary: '#022c43', // $text-primary-light
  textSecondary: '#022c43', // $text-secondary-light
  primaryColor: '#ffd700', // $primary-color
  headerPrimary: '#ffd700', // $header-primary-light
  headerSecondary: '#222', // $header-secondary-light
  linkColor: '#ffd700', // $link-color-light
  linkHoverColor: '#2883b5', // $link-hover-color-light
  cardBg: 'rgba(0,0,0,0.05)', // $card-bg-light
  tagBg: 'rgba(255,215,0,0.1)', // $tag-bg-light
  tagText: '#ffd700', // $tag-text-light
  inputBorder: '#ffd700', // $input-border-light
  buttonBg: '#ffd700', // $button-bg-light
  buttonHoverBg: '#e6b800', // $button-hover-bg-light
  success: '#4ecca3', // $success-light
  error: '#ff6b6b', // $error-light
};

export const darkTheme: Theme = {
  body: '#111222', // $body-bg-dark
  navbarBg: '#181818', // $navbar-bg-dark
  textPrimary: '#E0E0E0', // $text-primary-dark
  textSecondary: '#B0B0B0', // $text-secondary-dark
  primaryColor: '#ffd700', // $primary-color
  headerPrimary: '#022c43', // $header-primary-dark
  headerSecondary: '#E0E0E0', // $header-secondary-dark
  linkColor: '#ffd700', // $link-color-dark
  linkHoverColor: '#e6b800', // $link-hover-color-dark
  cardBg: '#1e1e1e', // $card-bg-dark
  tagBg: 'rgba(255,215,0,0.1)', // $tag-bg-dark
  tagText: '#ffd700', // $tag-text-dark
  inputBorder: '#444444', // $input-border-dark
  buttonBg: '#ffd700', // $button-bg-dark
  buttonHoverBg: '#e6b800', // $button-hover-bg-dark
  success: '#4ecca3', // $success-dark
  error: '#ff6b6b', // $error-dark
};