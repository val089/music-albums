import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const myNewTheme = {
  colors: {
    primary: '#121212',
    secondary: '#1ad263',
    white: '#fff',
    darkGrey: '#181818',
    grey1: '#242424',
    black: '#000000',
    green1: '#1eb359',
    warning: '#FFC75F',
    danger: '#C34A36',
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        bg: 'primary',
        color: 'white',
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
};

export const theme = extendTheme(config, myNewTheme);
